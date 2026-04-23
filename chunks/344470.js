i.d(t, { A: () => r });
var n = i(668459);
let r = {
    read: function (e, t) {
        var i, r;
        let o = ((i = e), (r = t), n.A.getShortAt(i, r)),
            a = (function (e, t, i) {
                if (8 > i) return;
                let r = n.A.getByteAt(e, t + 7);
                return { value: r, description: "" + r };
            })(e, t, o);
        return {
            "Bits Per Sample": (function (e, t, i) {
                if (3 > i) return;
                let r = n.A.getByteAt(e, t + 2);
                return { value: r, description: "" + r };
            })(e, t, o),
            "Image Height": (function (e, t, i) {
                if (5 > i) return;
                let r = n.A.getShortAt(e, t + 3);
                return { value: r, description: `${r}px` };
            })(e, t, o),
            "Image Width": (function (e, t, i) {
                if (7 > i) return;
                let r = n.A.getShortAt(e, t + 5);
                return { value: r, description: `${r}px` };
            })(e, t, o),
            "Color Components": a,
            Subsampling:
                a &&
                (function (e, t, i, r) {
                    var o;
                    let a, s;
                    if (8 + 3 * i > r) return;
                    let l = [];
                    for (let r = 0; r < i; r++) {
                        let i = t + 8 + 3 * r;
                        l.push([n.A.getByteAt(e, i), n.A.getByteAt(e, i + 1), n.A.getByteAt(e, i + 2)]);
                    }
                    return {
                        value: l,
                        description:
                            l.length > 1
                                ? ((a = { 1: "Y", 2: "Cb", 3: "Cr", 4: "I", 5: "Q" }),
                                  l.map((e) => a[e[0]]).join("") +
                                      ((s = {
                                          17: "4:4:4 (1 1)",
                                          18: "4:4:0 (1 2)",
                                          20: "4:4:1 (1 4)",
                                          33: "4:2:2 (2 1)",
                                          34: "4:2:0 (2 2)",
                                          36: "4:2:1 (2 4)",
                                          65: "4:1:1 (4 1)",
                                          66: "4:1:0 (4 2)",
                                      }),
                                      0 === (o = l).length || void 0 === o[0][1] || void 0 === s[o[0][1]]
                                          ? ""
                                          : s[o[0][1]]))
                                : "",
                    };
                })(e, t, a.value, o),
        };
    },
};
