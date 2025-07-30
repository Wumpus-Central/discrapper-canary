n.d(t, { Z: () => u });
var r = n(255367);
n(73800);
var i = n(755721),
    a = n(480086),
    o = n(652853),
    s = n(475413),
    l = n(228168),
    c = n(388032);
function u(e) {
    let { activity: t, onAction: n } = e,
        { themeType: u } = (0, o.z)(),
        d = null == t ? void 0 : t.application_id,
        f = (0, a.u)(d);
    return null == f
        ? null
        : u === l.lY.MODAL_V2
          ? (0, r.jsx)(s.tG, {
                icon: f.icon,
                text: c.intl.string(f.labelKey),
                size: i.Ph.TINY,
                themeColor: 'secondary',
                onClick: f.openLink
            })
          : (0, r.jsx)(s.tG, {
                icon: f.icon,
                text: c.intl.string(f.labelKey),
                size: i.Ph.SMALL,
                fullWidth: !0,
                themeColor: 'secondary',
                onClick: f.openLink
            });
}
