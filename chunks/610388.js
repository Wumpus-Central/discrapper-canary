n.d(t, { Z: () => o });
var r = n(553890);
let i = {
        1: 1,
        2: 1,
        3: 2,
        4: 4,
        5: 8,
        7: 1,
        9: 4,
        10: 8,
        13: 4,
    },
    a = {
        BYTE: 1,
        ASCII: 2,
        SHORT: 3,
        LONG: 4,
        RATIONAL: 5,
        UNDEFINED: 7,
        SLONG: 9,
        SRATIONAL: 10,
        IFD: 13,
    },
    o = {
        getAsciiValue: s,
        getByteAt: l,
        getAsciiAt: c,
        getShortAt: u,
        getLongAt: d,
        getRationalAt: f,
        getUndefinedAt: p,
        getSlongAt: _,
        getSrationalAt: m,
        getIfdPointerAt: h,
        typeSizes: i,
        tagTypes: a,
        getTypeSize: g,
    };
function s(e) {
    return e.map((e) => String.fromCharCode(e));
}
function l(e, t) {
    return e.getUint8(t);
}
function c(e, t) {
    return e.getUint8(t);
}
function u(e, t, n) {
    return e.getUint16(t, n === r.Z.LITTLE_ENDIAN);
}
function d(e, t, n) {
    return e.getUint32(t, n === r.Z.LITTLE_ENDIAN);
}
function f(e, t, n) {
    return [d(e, t, n), d(e, t + 4, n)];
}
function p(e, t) {
    return l(e, t);
}
function _(e, t, n) {
    return e.getInt32(t, n === r.Z.LITTLE_ENDIAN);
}
function m(e, t, n) {
    return [_(e, t, n), _(e, t + 4, n)];
}
function h(e, t, n) {
    return d(e, t, n);
}
function g(e) {
    if (void 0 === a[e]) throw Error("No such type found.");
    return i[a[e]];
}
