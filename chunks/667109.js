n.d(t, { Z: () => f });
var r = n(54381),
    o = n(473749),
    l = n(481060),
    i = n(617136),
    a = n(49436),
    s = n(509212),
    c = n(937797),
    u = n(215113),
    d = n(324805),
    m = n(388032);
function f(e) {
    let { handlePrimaryCtaClick: t } = e,
        { quest: n } = o.useContext(u.VideoQuestModalContext),
        { enabled: f } = c.EO.useConfig({ location: d.dr.VIDEO_MODAL });
    return (0, r.jsx)(l.Button, {
        fullWidth: !0,
        variant: f ? "primary" : "secondary",
        onClick: () => t(a.jn.VIDEO_MODAL_PRIMARY_CTA, i.jZ.OPEN_GAME_LINK),
        text: f ? (0, s.B2)(n.config) : m.intl.string(m.t.nL0WvC),
    });
}
