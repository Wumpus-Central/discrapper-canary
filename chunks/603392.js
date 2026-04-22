"use strict";
n.d(t, { r: () => a });
var r = n(64700),
    i = n(844222),
    s = n(460890);
function a(e, t) {
    let { theme: n, saturation: a, experiments: o } = (0, s.G9)(),
        { highContrastModeEnabled: l } = r.useContext(i.C),
        u = o?.enabledExperiments ?? [];
    return e.resolve({
        theme: t ?? n,
        saturation: a,
        enabledExperiments: u,
        density: "compact",
        highContrastModeEnabled: l,
    });
}
