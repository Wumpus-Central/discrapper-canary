n.d(t, { Z: () => d });
var r = n(524437),
    i = n(607070),
    a = n(540059),
    o = n(238514),
    s = n(740492),
    l = n(581883),
    c = n(981631),
    u = n(874893);
function d(e, t, n) {
    var d, f, _;
    if (__OVERLAY__) return c.BRd.DARK;
    let p = (0, a.O_)('resolveTheme') ? u.yW : u.Q5;
    if (i.Z.syncForcedColors && 'active' === i.Z.systemForcedColors && e !== u.zd.NO_PREFERENCE) return e;
    if (s.ZP.useSystemTheme === u.KW.ON && e !== u.zd.NO_PREFERENCE) return t[e];
    let h = null == (d = o.Z.getAppearanceSettings()) ? void 0 : d.theme;
    return null != h ? h : p[null != (_ = null == (f = l.Z.settings.appearance) ? void 0 : f.theme) ? _ : r.Q2.UNSET];
}
