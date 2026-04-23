s.d(t, { A: () => d });
var n = s(627968),
    l = s(64700),
    i = s(821609),
    a = s(341915),
    o = s(590202),
    r = s(651892),
    u = s(201257);
function d(e) {
    let { handlePrimaryCtaClick: t } = e,
        { quest: s } = l.useContext(u.VideoQuestModalContext);
    return (0, n.jsx)(i.$, {
        fullWidth: !0,
        variant: "primary",
        onClick: () => t(a.uF.VIDEO_MODAL_PRIMARY_CTA, o.Cy.OPEN_GAME_LINK),
        text: (0, r.wr)(s),
    });
}
