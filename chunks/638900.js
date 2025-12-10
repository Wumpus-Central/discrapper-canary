n.d(t, { Z: () => p });
var r = n(477102),
    i = n(633971);
let a = 943868237,
    o = 4,
    s = 2,
    l = 1,
    c = 4,
    u = 12,
    d = 1028,
    f = 5,
    p = { read: _ };
function _(e, t, n) {
    try {
        if (Array.isArray(e)) return b(new DataView(Uint8Array.from(e).buffer), { size: e.length }, 0, n);
        let { naaBlock: r, dataOffset: i } = m(e, t);
        return b(e, r, i, n);
    } catch (e) {
        return {};
    }
}
function m(e, t) {
    for (; t + u <= e.byteLength; ) {
        let n = h(e, t);
        if (g(n))
            return {
                naaBlock: n,
                dataOffset: t + n.headerSize,
            };
        t += n.headerSize + n.size + E(n);
    }
    throw Error("No IPTC NAA resource block.");
}
function h(e, t) {
    if (e.getUint32(t, !1) !== a) throw Error("Not an IPTC resource block.");
    let n = e.getUint8(t + o + s),
        r = (n % 2 == 0 ? n + 1 : n) + l;
    return {
        headerSize: o + s + r + c,
        type: e.getUint16(t + o),
        size: e.getUint32(t + o + s + r),
    };
}
function g(e) {
    return e.type === d;
}
function E(e) {
    return +(e.size % 2 != 0);
}
function b(e, t, n, r) {
    let i,
        a = {},
        o = n + t.size;
    for (; n < o && n < e.byteLength; ) {
        let { tag: t, tagSize: o } = y(e, n, a, i, r);
        if (null === t) break;
        t &&
            ("encoding" in t && (i = t.encoding),
            void 0 === a[t.name] || void 0 === t.repeatable
                ? (a[t.name] = {
                      id: t.id,
                      value: t.value,
                      description: t.description,
                  })
                : (a[t.name] instanceof Array ||
                      (a[t.name] = [
                          {
                              id: a[t.name].id,
                              value: a[t.name].value,
                              description: a[t.name].description,
                          },
                      ]),
                  a[t.name].push({
                      id: t.id,
                      value: t.value,
                      description: t.description,
                  }))),
            (n += f + o);
    }
    return a;
}
function y(e, t, n, i, a) {
    let o = 1,
        s = 3;
    if (O(e, t))
        return {
            tag: null,
            tagSize: 0,
        };
    let l = e.getUint16(t + o),
        c = e.getUint16(t + s);
    if (!a && !r.Z.iptc[l])
        return {
            tag: void 0,
            tagSize: c,
        };
    let u = v(e, t + f, c),
        d = {
            id: l,
            name: S(r.Z.iptc[l], l, u),
            value: u,
            description: C(r.Z.iptc[l], u, n, i),
        };
    return (
        P(l) && (d.repeatable = !0),
        R(l) && (d.encoding = r.Z.iptc[l].encoding_name(u)),
        {
            tag: d,
            tagSize: c,
        }
    );
}
function O(e, t) {
    let n = 28;
    return e.getUint8(t) !== n;
}
function v(e, t, n) {
    let r = [];
    for (let i = 0; i < n; i++) r.push(e.getUint8(t + i));
    return r;
}
function S(e, t, n) {
    return e ? (I(e) ? e : T(e) ? e.name(n) : e.name) : `undefined-${t}`;
}
function I(e) {
    return "string" == typeof e;
}
function T(e) {
    return "function" == typeof e.name;
}
function C(e, t, n, r) {
    if (N(e))
        try {
            return e.description(t, n);
        } catch (e) {}
    return A(e, t) ? i.Z.decode(r, t) : t;
}
function A(e, t) {
    return e && t instanceof Array;
}
function N(e) {
    return e && void 0 !== e.description;
}
function P(e) {
    return r.Z.iptc[e] && r.Z.iptc[e].repeatable;
}
function R(e) {
    return r.Z.iptc[e] && void 0 !== r.Z.iptc[e].encoding_name;
}
