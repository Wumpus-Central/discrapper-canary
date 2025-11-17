n.d(t, { Z: () => p });
var r = n(54381),
    o = n(473749),
    l = n(481060),
    i = n(617136),
    a = n(509212),
    s = n(497505),
    c = n(937797),
    u = n(215113),
    d = n(46140),
    m = n(388032);
function p(e) {
    let { handlePrimaryCtaClick: t } = e,
        { quest: n } = o.useContext(u.VideoQuestModalContext),
        { enabled: p } = c.EO.useConfig({ location: d.dr.VIDEO_MODAL });
    return (0, r.jsx)(l.Button, {
        fullWidth: !0,
        variant: p ? "primary" : "secondary",
        onClick: () => t(s.jn.VIDEO_MODAL_PRIMARY_CTA, i.jZ.OPEN_GAME_LINK),
        text: p ? (0, a.B2)(n.config) : m.intl.string(m.t.nL0WvC),
    });
}
