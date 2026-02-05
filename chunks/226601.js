"use strict";
n.d(t, { A: () => l });
var r = n(890167),
    i = n(668459),
    a = n(105423),
    s = n(643479),
    o = n(801765);
let l = { read: c },
    u = 16;
function c(e, t, n) {
    let i = r.A.getByteOrder(e, t),
        s = (0, o.y)(e, a.dA, t, (0, o.x)(e, t, i), i, n);
    return d(e, t, s, i);
}
function d(e, t, n, r) {
    if (!n.MPEntry) return n;
    let a = [];
    for (let o = 0; o < Math.ceil(n.MPEntry.value.length / u); o++) {
        a[o] = {};
        let l = _(n.MPEntry.value, o * u, i.A.getTypeSize("LONG"), r);
        (a[o].ImageFlags = f(l)), (a[o].ImageFormat = p(l)), (a[o].ImageType = h(l));
        let c = _(n.MPEntry.value, o * u + 4, i.A.getTypeSize("LONG"), r);
        a[o].ImageSize = { value: c, description: "" + c };
        let d = m(o, n.MPEntry, r, t);
        a[o].ImageOffset = { value: d, description: "" + d };
        let g = _(n.MPEntry.value, o * u + 12, i.A.getTypeSize("SHORT"), r);
        a[o].DependentImage1EntryNumber = { value: g, description: "" + g };
        let E = _(n.MPEntry.value, o * u + 14, i.A.getTypeSize("SHORT"), r);
        (a[o].DependentImage2EntryNumber = { value: E, description: "" + E }),
            (a[o].image = e.buffer.slice(d, d + c)),
            (0, s.L$)(a[o], "base64", function () {
                return (0, s.Zo)(this.image);
            });
    }
    return (n.Images = a), n;
}
function _(e, t, n, i) {
    if (i === r.A.LITTLE_ENDIAN) {
        let r = 0;
        for (let i = 0; i < n; i++) r += e[t + i] << (8 * i);
        return r;
    }
    let a = 0;
    for (let r = 0; r < n; r++) a += e[t + r] << (8 * (n - 1 - r));
    return a;
}
function f(e) {
    let t = [(e >> 31) & 1, (e >> 30) & 1, (e >> 29) & 1],
        n = [];
    return (
        t[0] && n.push("Dependent Parent Image"),
        t[1] && n.push("Dependent Child Image"),
        t[2] && n.push("Representative Image"),
        { value: t, description: n.join(", ") || "None" }
    );
}
function p(e) {
    let t = (e >> 24) & 7;
    return { value: t, description: 0 === t ? "JPEG" : "Unknown" };
}
function h(e) {
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
}
function m(e, t, n, r) {
    return g(e) ? 0 : _(t.value, e * u + 8, i.A.getTypeSize("LONG"), n) + r;
}
function g(e) {
    return 0 === e;
}
