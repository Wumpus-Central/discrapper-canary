u.d(e, { D: () => I });
var a = u(64700),
    i = u(323889),
    s = u(274670),
    c = u(144779),
    n = u(793574),
    d = u(662388),
    l = u(104886),
    C = u(18437),
    _ = u(590202),
    r = u(971649),
    o = u(801365),
    E = u(371912),
    p = u(617986),
    A = u(369189),
    T = u(758836);
function I(t) {
    let {
            quest: e,
            questContent: u,
            sourceQuestContent: I,
            questContentPosition: S,
            questContentRowIndex: f,
            shouldRedirectToQuestHome: k = !0,
            shouldShowShopIfAlreadyClaimed: m = !0,
            onBeforeClaim: O,
            onCloseModal: L,
        } = t,
        y = e.userStatus?.completedAt != null && e.userStatus?.claimedAt == null && k,
        N = (0, C.Ut)(),
        g = (0, r.go)(),
        h = (0, E.ix)({
            quest: e,
            questContent: u,
            questContentPosition: S,
            questContentRowIndex: f,
            sourceQuestContent: I,
        });
    return a.useCallback(
        (t) => {
            if ((null != t && O?.(t), m && (0, o.ks)(e.config) && e.userStatus?.claimedAt != null)) {
                L?.(), (0, d.Cz)({ tab: T.G2.ORBS, analyticsLocations: [], analyticsSource: n.A.QUEST_HOME_PAGE });
                return;
            }
            y &&
                (L?.(),
                (0, o.K9)(e.config) ||
                    (0, A.p)() ||
                    ((0, l.E5)(l.kI.STEP_2_CLICKED_INTERNAL, "completed_quest_claim_click")
                        ? (0, s.r)({
                              type: c.F.CLICK_INTERNAL,
                              adCreativeType: i.p.QUEST,
                              adCreativeId: e.id,
                              questContentCTA: _.Cy.OPEN_QUEST_HOME_TO_CLAIM,
                              surfaceId: u,
                              sourceQuestContent: I,
                              impressionId: g,
                              questContentPosition: S,
                              questContentRowIndex: f,
                          })
                        : N({
                              questId: e.id,
                              questContent: u,
                              questContentCTA: _.Cy.OPEN_QUEST_HOME_TO_CLAIM,
                              sourceQuestContent: I,
                              questContentPosition: S,
                              questContentRowIndex: f,
                          }),
                    (0, p.mA)({ questId: e.id, fromContent: u }))),
                !y && (0, o.K9)(e.config) && L?.(),
                h();
        },
        [O, L, e.config, e.userStatus?.claimedAt, h, m, y, e.id, u, I, S, f, N, g],
    );
}
