n.d(t, { Z: () => u });
var r = n(54381),
    o = n(473749),
    l = n(481060),
    i = n(617136),
    a = n(49436),
    s = n(304696),
    c = n(215113);
function u(e) {
    let { handlePrimaryCtaClick: t } = e,
        { quest: n } = o.useContext(c.VideoQuestModalContext);
    return (0, r.jsx)(l.Button, {
        fullWidth: !0,
        variant: "primary",
        onClick: () => t(a.jn.VIDEO_MODAL_PRIMARY_CTA, i.jZ.OPEN_GAME_LINK),
        text: (0, s.V_)(n),
    });
}
