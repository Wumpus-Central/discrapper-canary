n.d(t, { Z: () => p });
var r = n(255367);
n(73800);
var i = n(442837),
    l = n(481060),
    a = n(479313),
    s = n(765104),
    o = n(626135),
    c = n(665149),
    u = n(981631),
    d = n(814249),
    h = n(388032);
function p(e) {
    let { channel: t } = e,
        n = (0, i.e7)([s.Z], () => s.Z.shouldShowTopicsBar());
    return (0, r.jsx)(c.ZP.Icon, {
        icon: l.sVe,
        onClick: () => {
            o.default.track(u.rMx.SUMMARIES_SIDEBAR_TOGGLED, {
                summaries_sidebar_open: !n,
                source: d.Dc.TOOLBAR_BUTTON,
                guild_id: t.guild_id,
                channel_id: t.id,
                channel_type: t.type,
            }),
                (0, a.e7)();
        },
        tooltip: n ? h.intl.string(h.t.nGs3kJ) : h.intl.string(h.t.bIm2sL),
        selected: n,
        "aria-expanded": n,
    });
}
