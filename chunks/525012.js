n.d(t, { A: () => p });
var r = n(402256),
    i = n(177487);
let a = 943868237,
    s = 4,
    o = 2,
    l = 1,
    c = 4,
    u = 12,
    d = 1028,
    f = 5,
    p = { read: _ };
function _(e, t, n) {
    try {
        if (Array.isArray(e)) return b(new DataView(Uint8Array.from(e).buffer), { size: e.length }, 0, n);
        let { naaBlock: r, dataOffset: i } = h(e, t);
        return b(e, r, i, n);
    } catch (e) {
        return {};
    }
}
function h(e, t) {
    for (; t + u <= e.byteLength; ) {
        let n = m(e, t);
        if (g(n))
            return {
                naaBlock: n,
                dataOffset: t + n.headerSize,
            };
        t += n.headerSize + n.size + E(n);
    }
    throw Error("No IPTC NAA resource block.");
}
function m(e, t) {
    if (e.getUint32(t, !1) !== a) throw Error("Not an IPTC resource block.");
    let n = e.getUint8(t + s + o),
        r = (n % 2 == 0 ? n + 1 : n) + l;
    return {
        headerSize: s + o + r + c,
        type: e.getUint16(t + s),
        size: e.getUint32(t + s + o + r),
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
        s = n + t.size;
    for (; n < s && n < e.byteLength; ) {
        let { tag: t, tagSize: s } = y(e, n, a, i, r);
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
            (n += f + s);
    }
    return a;
}
function y(e, t, n, i, a) {
    let s = 1,
        o = 3;
    if (O(e, t))
        return {
            tag: null,
            tagSize: 0,
        };
    let l = e.getUint16(t + s),
        c = e.getUint16(t + o);
    if (!a && !r.A.iptc[l])
        return {
            tag: void 0,
            tagSize: c,
        };
    let u = A(e, t + f, c),
        d = {
            id: l,
            name: v(r.A.iptc[l], l, u),
            value: u,
            description: T(r.A.iptc[l], u, n, i),
        };
    return (
        R(l) && (d.repeatable = !0),
        w(l) && (d.encoding = r.A.iptc[l].encoding_name(u)),
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
function A(e, t, n) {
    let r = [];
    for (let i = 0; i < n; i++) r.push(e.getUint8(t + i));
    return r;
}
function v(e, t, n) {
    return e ? (S(e) ? e : I(e) ? e.name(n) : e.name) : `undefined-${t}`;
}
function S(e) {
    return "string" == typeof e;
}
function I(e) {
    return "function" == typeof e.name;
}
function T(e, t, n, r) {
    if (N(e))
        try {
            return e.description(t, n);
        } catch (e) {}
    return C(e, t) ? i.A.decode(r, t) : t;
}
function C(e, t) {
    return e && t instanceof Array;
}
function N(e) {
    return e && void 0 !== e.description;
}
function R(e) {
    return r.A.iptc[e] && r.A.iptc[e].repeatable;
}
function w(e) {
    return r.A.iptc[e] && void 0 !== r.A.iptc[e].encoding_name;
}
