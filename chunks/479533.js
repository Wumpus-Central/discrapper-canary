i.d(t, { A: () => r });
var n = i(643479);
let r = {
    read: function (e) {
        return {
            "GIF Version": (function (e) {
                if (6 > e.byteLength) return;
                let t = (0, n.hT)(e, 3, 3);
                return { value: t, description: t };
            })(e),
            "Image Width": (function (e) {
                if (8 > e.byteLength) return;
                let t = e.getUint16(6, !0);
                return { value: t, description: `${t}px` };
            })(e),
            "Image Height": (function (e) {
                if (10 > e.byteLength) return;
                let t = e.getUint16(8, !0);
                return { value: t, description: `${t}px` };
            })(e),
            "Global Color Map": (function (e) {
                if (11 > e.byteLength) return;
                let t = (128 & e.getUint8(10)) >>> 7;
                return { value: t, description: 1 === t ? "Yes" : "No" };
            })(e),
            "Bits Per Pixel": (function (e) {
                if (11 > e.byteLength) return;
                let t = (7 & e.getUint8(10)) + 1;
                return { value: t, description: `${t} ${1 === t ? "bit" : "bits"}` };
            })(e),
            "Color Resolution Depth": (function (e) {
                if (11 > e.byteLength) return;
                let t = ((112 & e.getUint8(10)) >>> 4) + 1;
                return { value: t, description: `${t} ${1 === t ? "bit" : "bits"}` };
            })(e),
        };
    },
};
