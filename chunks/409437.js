n.d(t, {
    A: () => a,
});
var r = n(890167),
    i = n(761799);
let a = {
    isTiffFile: s,
    findTiffOffsets: l,
};

function s(e) {
    let t = 4;
    return !!e && e.byteLength >= t && o(e);
}

function o(e) {
    let t = 42,
        n = 2,
        i = e.getUint16(0) === r.A.LITTLE_ENDIAN;
    return e.getUint16(n, i) === t;
}

function l() {
    let e = 0;
    return i.A.USE_EXIF
        ? {
              hasAppMarkers: !0,
              tiffHeaderOffset: e,
          }
        : {};
}
