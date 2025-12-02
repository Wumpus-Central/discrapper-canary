n.d(t, { Z: () => d });
var r = n(473749),
    i = n(688619),
    a = n.n(i),
    o = n(522942),
    s = n(442837),
    l = n(607070),
    c = n(302221),
    u = n(489511);
function d(e) {
    var t;
    let { displayNameStyles: n, backgroundColor: i } = e,
        d = (0, s.e7)([l.Z], () => (l.Z.desaturateUserColors ? l.Z.saturation : 1)),
        f = null != (t = null == n ? void 0 : n.effectId) ? t : o.m.SOLID,
        p = (0, u.R)(f);
    return r.useMemo(
        () =>
            null == n
                ? []
                : n.colors.map((e) =>
                      (0, c.wh)({
                          foreground: a()(e),
                          background: f === o.m.TOON ? a()("#333") : a()(i),
                          ratio: p.minContrastRatio,
                          saturationFactor: d,
                      }).hex(),
                  ),
        [n, f, p.minContrastRatio, d, i],
    );
}
