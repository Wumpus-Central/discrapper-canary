"use strict";
n.d(t, { A: () => f });
var r = n(402256),
    i = n(177487);
let a = 0x3842494d,
    s = 4,
    o = 2,
    l = 1,
    u = 4,
    c = 12,
    d = 1028,
    _ = 5,
    f = { read: p };
function p(e, t, n) {
    try {
        if (Array.isArray(e)) return A(new DataView(Uint8Array.from(e).buffer), { size: e.length }, 0, n);
        let { naaBlock: r, dataOffset: i } = h(e, t);
        return A(e, r, i, n);
    } catch (e) {
        return {};
    }
}
function h(e, t) {
    for (; t + c <= e.byteLength; ) {
        let n = m(e, t);
        if (g(n)) return { naaBlock: n, dataOffset: t + n.headerSize };
        t += n.headerSize + n.size + E(n);
    }
    throw Error("No IPTC NAA resource block.");
}
function m(e, t) {
    if (e.getUint32(t, !1) !== a) throw Error("Not an IPTC resource block.");
    let n = e.getUint8(t + s + o),
        r = (n % 2 == 0 ? n + 1 : n) + l;
    return { headerSize: s + o + r + u, type: e.getUint16(t + s), size: e.getUint32(t + s + o + r) };
}
function g(e) {
    return e.type === d;
}
function E(e) {
    return +(e.size % 2 != 0);
}
function A(e, t, n, r) {
    let i,
        a = {},
        s = n + t.size;
    for (; n < s && n < e.byteLength; ) {
        let { tag: t, tagSize: s } = I(e, n, a, i, r);
        if (null === t) break;
        t &&
            ("encoding" in t && (i = t.encoding),
            void 0 === a[t.name] || void 0 === t.repeatable
                ? (a[t.name] = { id: t.id, value: t.value, description: t.description })
                : (a[t.name] instanceof Array ||
                      (a[t.name] = [{ id: a[t.name].id, value: a[t.name].value, description: a[t.name].description }]),
                  a[t.name].push({ id: t.id, value: t.value, description: t.description }))),
            (n += _ + s);
    }
    return a;
}
function I(e, t, n, i, a) {
    let s = 1,
        o = 3;
    if (T(e, t)) return { tag: null, tagSize: 0 };
    let l = e.getUint16(t + s),
        u = e.getUint16(t + o);
    if (!a && !r.A.iptc[l]) return { tag: void 0, tagSize: u };
    let c = y(e, t + _, u),
        d = { id: l, name: S(r.A.iptc[l], l, c), value: c, description: b(r.A.iptc[l], c, n, i) };
    return O(l) && (d.repeatable = !0), D(l) && (d.encoding = r.A.iptc[l].encoding_name(c)), { tag: d, tagSize: u };
}
function T(e, t) {
    let n = 28;
    return e.getUint8(t) !== n;
}
function y(e, t, n) {
    let r = [];
    for (let i = 0; i < n; i++) r.push(e.getUint8(t + i));
    return r;
}
function S(e, t, n) {
    return e ? (v(e) ? e : C(e) ? e.name(n) : e.name) : `undefined-${t}`;
}
function v(e) {
    return "string" == typeof e;
}
function C(e) {
    return "function" == typeof e.name;
}
function b(e, t, n, r) {
    if (R(e))
        try {
            return e.description(t, n);
        } catch (e) {}
    return N(e, t) ? i.A.decode(r, t) : t;
}
function N(e, t) {
    return e && t instanceof Array;
}
function R(e) {
    return e && void 0 !== e.description;
}
function O(e) {
    return r.A.iptc[e] && r.A.iptc[e].repeatable;
}
function D(e) {
    return r.A.iptc[e] && void 0 !== r.A.iptc[e].encoding_name;
}
