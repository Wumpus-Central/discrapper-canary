n.d(t, { Z: () => a });
var r = n(553890),
    i = n(791473);
let a = {
    isTiffFile: o,
    findTiffOffsets: l,
};
function o(e) {
    let t = 4;
    return !!e && e.byteLength >= t && s(e);
}
function s(e) {
    let t = 42,
        n = 2,
        i = e.getUint16(0) === r.Z.LITTLE_ENDIAN;
    return e.getUint16(n, i) === t;
}
function l() {
    let e = 0;
    return i.Z.USE_EXIF
        ? {
              hasAppMarkers: !0,
              tiffHeaderOffset: e,
          }
        : {};
}
