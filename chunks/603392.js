n.d(t, { r: () => s });
var i = n(582128),
    r = n(844222),
    a = n(460890);
function s(e, t) {
    let { theme: n, saturation: s, experiments: l } = (0, a.G9)(),
        { highContrastModeEnabled: o } = i.useContext(r.C),
        d = l?.enabledExperiments ?? [];
    return e.resolve({
        theme: t ?? n,
        saturation: s,
        enabledExperiments: d,
        density: "compact",
        highContrastModeEnabled: o,
    });
}
