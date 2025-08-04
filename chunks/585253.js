n.d(t, { Z: () => d });
var r = n(255367);
n(73800);
var i = n(755721),
    a = n(100527),
    o = n(480086),
    s = n(652853),
    l = n(475413),
    c = n(228168),
    u = n(388032);
function d(e) {
    let { activity: t, onAction: n } = e,
        { themeType: d } = (0, s.z)(),
        f = null == t ? void 0 : t.application_id,
        _ = d === c.lY.MODAL_V2 ? a.Z.USER_PROFILE_MODAL : a.Z.USER_PROFILE_POPOUT,
        p = (0, o.u)(f, _);
    return null == p
        ? null
        : d === c.lY.MODAL_V2
          ? (0, r.jsx)(l.tG, {
                icon: p.icon,
                text: u.intl.string(p.labelKey),
                size: i.Ph.TINY,
                themeColor: 'secondary',
                onClick: p.openLink
            })
          : (0, r.jsx)(l.tG, {
                icon: p.icon,
                text: u.intl.string(p.labelKey),
                size: i.Ph.SMALL,
                fullWidth: !0,
                themeColor: 'secondary',
                onClick: p.openLink
            });
}
