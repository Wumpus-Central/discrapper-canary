n.d(t, { Z: () => a });
var r = n(684667);
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
    o = {
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
    a = {
        getAsciiValue: s,
        getByteAt: l,
        getAsciiAt: c,
        getShortAt: u,
        getLongAt: d,
        getRationalAt: f,
        getUndefinedAt: _,
        getSlongAt: p,
        getSrationalAt: h,
        getIfdPointerAt: m,
        typeSizes: i,
        tagTypes: o,
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
function _(e, t) {
    return l(e, t);
}
function p(e, t, n) {
    return e.getInt32(t, n === r.Z.LITTLE_ENDIAN);
}
function h(e, t, n) {
    return [p(e, t, n), p(e, t + 4, n)];
}
function m(e, t, n) {
    return d(e, t, n);
}
function g(e) {
    if (void 0 === o[e]) throw Error("No such type found.");
    return i[o[e]];
}
