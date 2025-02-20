n.d(t, { Z: () => h });
var r = n(200651);
n(192379);
var i = n(442837),
    l = n(481060),
    o = n(479313),
    a = n(765104),
    s = n(626135),
    c = n(665149),
    u = n(981631),
    d = n(814249),
    p = n(388032);
function h(e) {
    let { channel: t } = e,
        n = (0, i.e7)([a.Z], () => a.Z.shouldShowTopicsBar());
    return (0, r.jsx)(c.ZP.Icon, {
        icon: l.sVe,
        onClick: () => {
            s.default.track(u.rMx.SUMMARIES_SIDEBAR_TOGGLED, {
                summaries_sidebar_open: !n,
                source: d.Dc.TOOLBAR_BUTTON,
                guild_id: t.guild_id,
                channel_id: t.id,
                channel_type: t.type
            }),
                (0, o.e7)();
        },
        tooltip: n ? p.NW.string(p.t.nGs3kJ) : p.NW.string(p.t.bIm2sL),
        selected: n,
        'aria-expanded': n
    });
}
