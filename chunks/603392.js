"use strict";
n.d(t, { r: () => s });
var r = n(64700),
    i = n(844222),
    a = n(460890);
function s(e, t) {
    let { theme: n, saturation: s, experiments: o } = (0, a.G9)(),
        { highContrastModeEnabled: l } = r.useContext(i.C),
        u = "compact",
        c = o?.enabledExperiments ?? [];
    return e.resolve({ theme: t ?? n, saturation: s, enabledExperiments: c, density: u, highContrastModeEnabled: l });
}
