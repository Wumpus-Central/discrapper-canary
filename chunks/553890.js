n.d(t, { Z: () => a });
let r = 18761,
    i = 19789,
    a = {
        BIG_ENDIAN: 19789,
        LITTLE_ENDIAN: 18761,
        getByteOrder: o,
    };
function o(e, t) {
    if (e.getUint16(t) === r) return r;
    if (e.getUint16(t) === i) return i;
    throw Error("Illegal byte order value. Faulty image.");
}
