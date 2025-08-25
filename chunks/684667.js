n.d(t, { Z: () => o });
let r = 18761,
    i = 19789,
    o = {
        BIG_ENDIAN: 19789,
        LITTLE_ENDIAN: 18761,
        getByteOrder: a,
    };
function a(e, t) {
    if (e.getUint16(t) === r) return r;
    if (e.getUint16(t) === i) return i;
    throw Error("Illegal byte order value. Faulty image.");
}
