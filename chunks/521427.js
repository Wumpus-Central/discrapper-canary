n.d(t, { F: () => u });
var i = n(310784),
    l = n.n(i),
    a = n(317097),
    r = n(582754),
    s = n(998304),
    o = n(381941);
function u(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1,
        i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : o.cZ,
        u = (0, a.Hl)(e),
        d = l()(t),
        c = l()(u),
        A = l().mix(d, u, i, "rgb"),
        h = l().contrast(c, A) < l().contrast(c, d) ? A : d;
    return (0, s.lZ)({ foreground: c, background: h, ratio: r.Tr.Text, saturationFactor: n }).hex();
}
