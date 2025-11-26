n.d(t, { Z: () => m });
var r = n(54381),
    o = n(473749),
    l = n(481060),
    i = n(617136),
    a = n(49436),
    s = n(509212),
    c = n(937797),
    u = n(215113),
    d = n(324805);
function m(e) {
    let { handlePrimaryCtaClick: t } = e,
        { quest: n } = o.useContext(u.VideoQuestModalContext),
        { enabled: m } = c.EO.useConfig({ location: d.dr.VIDEO_MODAL });
    return (0, r.jsx)(l.Button, {
        fullWidth: !0,
        variant: m ? "primary" : "secondary",
        onClick: () => t(a.jn.VIDEO_MODAL_PRIMARY_CTA, i.jZ.OPEN_GAME_LINK),
        text: (0, s.V_)(n),
    });
}
