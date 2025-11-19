n.d(t, { d: () => o });
var r = n(473749),
    i = n(213305),
    a = n(402453);
function o(e, t) {
    var n;
    let { theme: o, saturation: s, experiments: l } = (0, a.ZF)(),
        { highContrastModeEnabled: c } = r.useContext(i.S),
        u = "compact",
        d = null != (n = null == l ? void 0 : l.enabledExperiments) ? n : [];
    return e.resolve({
        theme: null != t ? t : o,
        saturation: s,
        enabledExperiments: d,
        density: u,
        highContrastModeEnabled: c,
    });
}
