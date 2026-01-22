n.d(t, {
    A: () => u,
});
var r = n(873298),
    i = n(775602),
    a = n(284016),
    s = n(964404),
    o = n(617617),
    l = n(652215),
    c = n(185928);

function u(e, t) {
    var n, u, d;
    if (__OVERLAY__) return l.NJ8.DARK;
    let f = c.dP;
    if (i.A.syncForcedColors && "active" === i.A.systemForcedColors && e !== c.Fc.NO_PREFERENCE) return e;
    if (s.Ay.useSystemTheme === c.Q_.ON && e !== c.Fc.NO_PREFERENCE) return t[e];
    let p = null == (u = a.A.getAppearanceSettings()) ? void 0 : u.theme;
    return null != p ? p : f[null != (n = null == (d = o.A.settings.appearance) ? void 0 : d.theme) ? n : r.Sx.UNSET];
}
