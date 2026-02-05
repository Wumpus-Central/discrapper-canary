"use strict";
n.d(t, { A: () => c });
var r = n(873298),
    i = n(775602),
    a = n(284016),
    s = n(964404),
    o = n(617617),
    l = n(652215),
    u = n(185928);
function c(e, t) {
    if (__OVERLAY__) return l.NJ8.DARK;
    let n = u.dP;
    if (i.A.syncForcedColors && "active" === i.A.systemForcedColors && e !== u.Fc.NO_PREFERENCE) return e;
    if (s.Ay.useSystemTheme === u.Q_.ON && e !== u.Fc.NO_PREFERENCE) return t[e];
    let c = a.A.getAppearanceSettings()?.theme;
    return null != c ? c : n[o.A.settings.appearance?.theme ?? r.Sx.UNSET];
}
