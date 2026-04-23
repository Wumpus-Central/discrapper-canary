i.d(t, { A: () => o });
var n = i(890167),
    r = i(761799);
let o = {
    isTiffFile: function (e) {
        var t;
        let i;
        return !!e && e.byteLength >= 4 && ((i = (t = e).getUint16(0) === n.A.LITTLE_ENDIAN), 42 === t.getUint16(2, i));
    },
    findTiffOffsets: function () {
        return r.A.USE_EXIF ? { hasAppMarkers: !0, tiffHeaderOffset: 0 } : {};
    },
};
