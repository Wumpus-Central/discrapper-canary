n.d(t, { Z: () => p });
var i = n(200651);
n(192379);
var l = n(442837),
    a = n(481060),
    r = n(479313),
    s = n(765104),
    o = n(626135),
    c = n(665149),
    d = n(981631),
    u = n(814249),
    h = n(388032);
function p(e) {
    let { channel: t } = e,
        n = (0, l.e7)([s.Z], () => s.Z.shouldShowTopicsBar());
    return (0, i.jsx)(c.ZP.Icon, {
        icon: a.sVe,
        onClick: () => {
            o.default.track(d.rMx.SUMMARIES_SIDEBAR_TOGGLED, {
                summaries_sidebar_open: !n,
                source: u.Dc.TOOLBAR_BUTTON,
                guild_id: t.guild_id,
                channel_id: t.id,
                channel_type: t.type
            }),
                (0, r.e7)();
        },
        tooltip: n ? h.intl.string(h.t.nGs3kJ) : h.intl.string(h.t.bIm2sL),
        selected: n,
        'aria-expanded': n
    });
}
