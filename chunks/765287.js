n.d(t, { Z: () => u });
var r = n(524437),
    i = n(607070),
    a = n(238514),
    o = n(740492),
    s = n(581883),
    l = n(981631),
    c = n(874893);
function u(e, t, n) {
    var u, d, f;
    if (__OVERLAY__) return l.BRd.DARK;
    let _ = c.yW;
    if (i.Z.syncForcedColors && 'active' === i.Z.systemForcedColors && e !== c.zd.NO_PREFERENCE) return e;
    if (o.ZP.useSystemTheme === c.KW.ON && e !== c.zd.NO_PREFERENCE) return t[e];
    let p = null == (u = a.Z.getAppearanceSettings()) ? void 0 : u.theme;
    return null != p ? p : _[null != (f = null == (d = s.Z.settings.appearance) ? void 0 : d.theme) ? f : r.Q2.UNSET];
}
