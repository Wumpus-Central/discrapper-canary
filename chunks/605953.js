n.d(t, { Z: () => h });
var r = n(951288);
n(647438);
var i = n(442837),
    l = n(481060),
    a = n(479313),
    s = n(765104),
    o = n(626135),
    c = n(665149),
    d = n(981631),
    u = n(814249),
    p = n(388032);
function h(e) {
    let { channel: t } = e,
        n = (0, i.e7)([s.Z], () => s.Z.shouldShowTopicsBar());
    return (0, r.jsx)(c.ZP.Icon, {
        icon: l.sVe,
        onClick: () => {
            o.default.track(d.rMx.SUMMARIES_SIDEBAR_TOGGLED, {
                summaries_sidebar_open: !n,
                source: u.Dc.TOOLBAR_BUTTON,
                guild_id: t.guild_id,
                channel_id: t.id,
                channel_type: t.type,
            }),
                (0, a.e7)();
        },
        tooltip: n ? p.intl.string(p.t.nGs3kJ) : p.intl.string(p.t.bIm2sL),
        selected: n,
        "aria-expanded": n,
    });
}
