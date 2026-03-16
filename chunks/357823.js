n.d(t, { A: () => c });
var r = n(627968),
    l = n(64700),
    i = n(397927),
    s = n(341915),
    a = n(590202),
    o = n(651892),
    u = n(752231);
function c(e) {
    let { handlePrimaryCtaClick: t } = e,
        { quest: n } = l.useContext(u.VideoQuestModalContext);
    return (0, r.jsx)(i.Button, {
        fullWidth: !0,
        variant: "primary",
        onClick: () => t(s.uF.VIDEO_MODAL_PRIMARY_CTA, a.Cy.OPEN_GAME_LINK),
        text: (0, o.wr)(n),
    });
}
