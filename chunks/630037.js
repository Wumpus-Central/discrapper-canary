u.d(e, { D: () => T });
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
    A = u(617986),
    p = u(758836);
function T(t) {
    let {
            quest: e,
            questContent: u,
            sourceQuestContent: T,
            questContentPosition: I,
            questContentRowIndex: S,
            shouldRedirectToQuestHome: f = !0,
            shouldShowShopIfAlreadyClaimed: k = !0,
            onBeforeClaim: m,
            onCloseModal: O,
        } = t,
        L = e.userStatus?.completedAt != null && e.userStatus?.claimedAt == null && f,
        y = (0, C.Ut)(),
        N = (0, r.go)(),
        g = (0, E.ix)({
            quest: e,
            questContent: u,
            questContentPosition: I,
            questContentRowIndex: S,
            sourceQuestContent: T,
        });
    return a.useCallback(
        (t) => {
            if ((null != t && m?.(t), k && (0, o.ks)(e.config) && e.userStatus?.claimedAt != null)) {
                O?.(), (0, d.Cz)({ tab: p.G2.ORBS, analyticsLocations: [], analyticsSource: n.A.QUEST_HOME_PAGE });
                return;
            }
            L &&
                (O?.(),
                (0, o.K9)(e.config) ||
                    ((0, l.E5)(l.kI.STEP_2_CLICKED_INTERNAL, "completed_quest_claim_click")
                        ? (0, s.r)({
                              type: c.F.CLICK_INTERNAL,
                              adCreativeType: i.p.QUEST,
                              adCreativeId: e.id,
                              questContentCTA: _.Cy.OPEN_QUEST_HOME_TO_CLAIM,
                              surfaceId: u,
                              sourceQuestContent: T,
                              impressionId: N,
                              questContentPosition: I,
                              questContentRowIndex: S,
                          })
                        : y({
                              questId: e.id,
                              questContent: u,
                              questContentCTA: _.Cy.OPEN_QUEST_HOME_TO_CLAIM,
                              sourceQuestContent: T,
                              questContentPosition: I,
                              questContentRowIndex: S,
                          }),
                    (0, A.mA)({ questId: e.id, fromContent: u }))),
                !L && (0, o.K9)(e.config) && O?.(),
                g();
        },
        [m, O, e.config, e.userStatus?.claimedAt, g, k, L, e.id, u, T, I, S, y, N],
    );
}
