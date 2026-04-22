i.d(t, { A: () => a });
var n = i(890167);
let r = { 1: 1, 2: 1, 3: 2, 4: 4, 5: 8, 7: 1, 9: 4, 10: 8, 13: 4 },
    o = { BYTE: 1, ASCII: 2, SHORT: 3, LONG: 4, RATIONAL: 5, UNDEFINED: 7, SLONG: 9, SRATIONAL: 10, IFD: 13 },
    a = {
        getAsciiValue: function (e) {
            return e.map((e) => String.fromCharCode(e));
        },
        getByteAt: s,
        getAsciiAt: function (e, t) {
            return e.getUint8(t);
        },
        getShortAt: function (e, t, i) {
            return e.getUint16(t, i === n.A.LITTLE_ENDIAN);
        },
        getLongAt: l,
        getRationalAt: function (e, t, i) {
            return [l(e, t, i), l(e, t + 4, i)];
        },
        getUndefinedAt: function (e, t) {
            return s(e, t);
        },
        getSlongAt: u,
        getSrationalAt: function (e, t, i) {
            return [u(e, t, i), u(e, t + 4, i)];
        },
        getIfdPointerAt: function (e, t, i) {
            return l(e, t, i);
        },
        typeSizes: r,
        tagTypes: o,
        getTypeSize: function (e) {
            if (void 0 === o[e]) throw Error("No such type found.");
            return r[o[e]];
        },
    };
function s(e, t) {
    return e.getUint8(t);
}
function l(e, t, i) {
    return e.getUint32(t, i === n.A.LITTLE_ENDIAN);
}
function u(e, t, i) {
    return e.getInt32(t, i === n.A.LITTLE_ENDIAN);
}
