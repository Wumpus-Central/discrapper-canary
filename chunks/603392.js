n.d(t, { r: () => s });
var r = n(64700),
    i = n(844222),
    a = n(460890);
function s(e, t) {
    var n;
    let { theme: s, saturation: o, experiments: l } = (0, a.G9)(),
        { highContrastModeEnabled: c } = r.useContext(i.C),
        u = "compact",
        d = null != (n = null == l ? void 0 : l.enabledExperiments) ? n : [];
    return e.resolve({
        theme: null != t ? t : s,
        saturation: o,
        enabledExperiments: d,
        density: u,
        highContrastModeEnabled: c,
    });
}
