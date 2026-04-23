i.d(t, { A: () => r });
var n = i(668459);
let r = {
    read: function (e, t) {
        return {
            "Image Width": (function (e, t) {
                if (t + 0 + 4 > e.byteLength) return;
                let i = n.A.getLongAt(e, t);
                return { value: i, description: `${i}px` };
            })(e, t),
            "Image Height": (function (e, t) {
                if (t + 4 + 4 > e.byteLength) return;
                let i = n.A.getLongAt(e, t + 4);
                return { value: i, description: `${i}px` };
            })(e, t),
            "Bit Depth": (function (e, t) {
                if (t + 8 + 1 > e.byteLength) return;
                let i = n.A.getByteAt(e, t + 8);
                return { value: i, description: `${i}` };
            })(e, t),
            "Color Type": (function (e, t) {
                if (t + 9 + 1 > e.byteLength) return;
                let i = n.A.getByteAt(e, t + 9);
                return {
                    value: i,
                    description:
                        { 0: "Grayscale", 2: "RGB", 3: "Palette", 4: "Grayscale with Alpha", 6: "RGB with Alpha" }[i] ||
                        "Unknown",
                };
            })(e, t),
            Compression: (function (e, t) {
                if (t + 10 + 1 > e.byteLength) return;
                let i = n.A.getByteAt(e, t + 10);
                return { value: i, description: 0 === i ? "Deflate/Inflate" : "Unknown" };
            })(e, t),
            Filter: (function (e, t) {
                if (t + 11 + 1 > e.byteLength) return;
                let i = n.A.getByteAt(e, t + 11);
                return { value: i, description: 0 === i ? "Adaptive" : "Unknown" };
            })(e, t),
            Interlace: (function (e, t) {
                if (t + 12 + 1 > e.byteLength) return;
                let i = n.A.getByteAt(e, t + 12);
                return { value: i, description: { 0: "Noninterlaced", 1: "Adam7 Interlace" }[i] || "Unknown" };
            })(e, t),
        };
    },
};
