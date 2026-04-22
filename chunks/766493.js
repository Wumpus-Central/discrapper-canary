i.d(t, { A: () => r });
var n = i(668459);
let r = {
    read: function (e, t) {
        var i, r;
        let o = ((i = e), (r = t), n.A.getShortAt(i, r)),
            a = (function (e, t, i) {
                if (15 > i) return;
                let r = n.A.getByteAt(e, t + 14);
                return { value: r, description: `${r}px` };
            })(e, t, o),
            s = (function (e, t, i) {
                if (16 > i) return;
                let r = n.A.getByteAt(e, t + 15);
                return { value: r, description: `${r}px` };
            })(e, t, o),
            l = {
                "JFIF Version": (function (e, t, i) {
                    if (9 > i) return;
                    let r = n.A.getByteAt(e, t + 7),
                        o = n.A.getByteAt(e, t + 7 + 1);
                    return { value: 256 * r + o, description: r + "." + o };
                })(e, t, o),
                "Resolution Unit": (function (e, t, i) {
                    var r;
                    if (10 > i) return;
                    let o = n.A.getByteAt(e, t + 9);
                    return {
                        value: o,
                        description: 0 === (r = o) ? "None" : 1 === r ? "inches" : 2 === r ? "cm" : "Unknown",
                    };
                })(e, t, o),
                XResolution: (function (e, t, i) {
                    if (12 > i) return;
                    let r = n.A.getShortAt(e, t + 10);
                    return { value: r, description: "" + r };
                })(e, t, o),
                YResolution: (function (e, t, i) {
                    if (14 > i) return;
                    let r = n.A.getShortAt(e, t + 12);
                    return { value: r, description: "" + r };
                })(e, t, o),
                "JFIF Thumbnail Width": a,
                "JFIF Thumbnail Height": s,
            };
        if (void 0 !== a && void 0 !== s) {
            let i = (function (e, t, i, n) {
                if (0 !== i && !(16 + i > n))
                    return { value: e.buffer.slice(t + 16, t + 16 + i), description: "<24-bit RGB pixel data>" };
            })(e, t, 3 * a.value * s.value, o);
            i && (l["JFIF Thumbnail"] = i);
        }
        for (let e in l) void 0 === l[e] && delete l[e];
        return l;
    },
};
