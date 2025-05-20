n.d(t, { Z: () => d });
var r = n(524437),
    i = n(607070),
    o = n(540059),
    a = n(238514),
    s = n(740492),
    l = n(581883),
    c = n(981631),
    u = n(874893);
function d(e, t) {
    var n, d, f;
    if (__OVERLAY__) return c.BRd.DARK;
    let _ = (0, o.O_)('resolveTheme') ? u.yW : u.Q5;
    if (i.Z.syncForcedColors && 'active' === i.Z.systemForcedColors && e !== u.zd.NO_PREFERENCE) return e;
    if (s.ZP.useSystemTheme === u.KW.ON && e !== u.zd.NO_PREFERENCE) return t[e];
    let p = null == (n = a.Z.getAppearanceSettings()) ? void 0 : n.theme;
    return null != p ? p : _[null != (f = null == (d = l.Z.settings.appearance) ? void 0 : d.theme) ? f : r.Q2.UNSET];
}
