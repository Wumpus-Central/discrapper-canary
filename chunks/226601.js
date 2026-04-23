i.d(t, { A: () => l });
var n = i(890167),
    r = i(668459),
    o = i(105423),
    a = i(643479),
    s = i(801765);
let l = {
    read: function (e, t, i) {
        let l = n.A.getByteOrder(e, t),
            c = (0, s.y)(e, o.dA, t, (0, s.x)(e, t, l), l, i);
        return (function (e, t, i, n) {
            if (!i.MPEntry) return i;
            let o = [];
            for (let s = 0; s < Math.ceil(i.MPEntry.value.length / 16); s++) {
                o[s] = {};
                let l = u(i.MPEntry.value, 16 * s, r.A.getTypeSize("LONG"), n);
                (o[s].ImageFlags = (function (e) {
                    let t = [(e >> 31) & 1, (e >> 30) & 1, (e >> 29) & 1],
                        i = [];
                    return (
                        t[0] && i.push("Dependent Parent Image"),
                        t[1] && i.push("Dependent Child Image"),
                        t[2] && i.push("Representative Image"),
                        { value: t, description: i.join(", ") || "None" }
                    );
                })(l)),
                    (o[s].ImageFormat = (function (e) {
                        let t = (e >> 24) & 7;
                        return { value: t, description: 0 === t ? "JPEG" : "Unknown" };
                    })(l)),
                    (o[s].ImageType = (function (e) {
                        let t = 0xffffff & e;
                        return {
                            value: t,
                            description:
                                {
                                    196608: "Baseline MP Primary Image",
                                    65537: "Large Thumbnail (VGA equivalent)",
                                    65538: "Large Thumbnail (Full HD equivalent)",
                                    131073: "Multi-Frame Image (Panorama)",
                                    131074: "Multi-Frame Image (Disparity)",
                                    131075: "Multi-Frame Image (Multi-Angle)",
                                    0: "Undefined",
                                }[t] || "Unknown",
                        };
                    })(l));
                let c = u(i.MPEntry.value, 16 * s + 4, r.A.getTypeSize("LONG"), n);
                o[s].ImageSize = { value: c, description: "" + c };
                let d = (function (e, t, i, n) {
                    return 0 === e ? 0 : u(t.value, 16 * e + 8, r.A.getTypeSize("LONG"), i) + n;
                })(s, i.MPEntry, n, t);
                o[s].ImageOffset = { value: d, description: "" + d };
                let f = u(i.MPEntry.value, 16 * s + 12, r.A.getTypeSize("SHORT"), n);
                o[s].DependentImage1EntryNumber = { value: f, description: "" + f };
                let p = u(i.MPEntry.value, 16 * s + 14, r.A.getTypeSize("SHORT"), n);
                (o[s].DependentImage2EntryNumber = { value: p, description: "" + p }),
                    (o[s].image = e.buffer.slice(d, d + c)),
                    (0, a.L$)(o[s], "base64", function () {
                        return (0, a.Zo)(this.image);
                    });
            }
            return (i.Images = o), i;
        })(e, t, c, l);
    },
};
function u(e, t, i, r) {
    if (r === n.A.LITTLE_ENDIAN) {
        let n = 0;
        for (let r = 0; r < i; r++) n += e[t + r] << (8 * r);
        return n;
    }
    let o = 0;
    for (let n = 0; n < i; n++) o += e[t + n] << (8 * (i - 1 - n));
    return o;
}
