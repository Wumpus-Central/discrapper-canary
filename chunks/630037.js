i.d(e, { D: () => I });
var s = i(582128),
    a = i(323889),
    u = i(274670),
    c = i(144779),
    n = i(793574),
    l = i(815996),
    d = i(104886),
    r = i(18437),
    C = i(590202),
    _ = i(971649),
    o = i(801365),
    E = i(518293),
    p = i(617986),
    A = i(369189),
    T = i(758836);
function I(t) {
    let {
            quest: e,
            questContent: i,
            sourceQuestContent: I,
            questContentPosition: S,
            questContentRowIndex: m,
            shouldRedirectToQuestHome: f = !0,
            shouldShowShopIfAlreadyClaimed: k = !0,
            onBeforeClaim: O,
            onCloseModal: L,
        } = t,
        y = e.userStatus?.completedAt != null && e.userStatus?.claimedAt == null && f,
        N = (0, r.Ut)(),
        h = (0, _.wW)(),
        M = (0, E.ix)({
            quest: e,
            questContent: i,
            questContentPosition: S,
            questContentRowIndex: m,
            sourceQuestContent: I,
        });
    return s.useCallback(
        (t) => {
            if ((null != t && O?.(t), k && (0, o.ks)(e.config) && e.userStatus?.claimedAt != null)) {
                (L?.(), (0, l.Cz)({ tab: T.G2.ORBS, analyticsLocations: [], analyticsSource: n.A.QUEST_HOME_PAGE }));
                return;
            }
            (y &&
                (L?.(),
                (0, o.K9)(e.config) ||
                    (0, A.p)() ||
                    ((0, d.E5)(d.kI.STEP_2_CLICKED_INTERNAL, "completed_quest_claim_click")
                        ? (0, u.r)({
                              type: c.F.CLICK_INTERNAL,
                              adCreativeType: a.p.QUEST,
                              adCreativeId: e.id,
                              questContentCTA: C.Cy.OPEN_QUEST_HOME_TO_CLAIM,
                              surfaceId: i,
                              sourceQuestContent: I,
                              impressionId: h(),
                              questContentPosition: S,
                              questContentRowIndex: m,
                          })
                        : N({
                              questId: e.id,
                              questContent: i,
                              questContentCTA: C.Cy.OPEN_QUEST_HOME_TO_CLAIM,
                              sourceQuestContent: I,
                              questContentPosition: S,
                              questContentRowIndex: m,
                          }),
                    (0, p.mA)({ fromContent: i }))),
                !y && (0, o.K9)(e.config) && L?.(),
                M());
        },
        [O, L, e.config, e.userStatus?.claimedAt, M, k, y, e.id, i, I, S, m, N, h],
    );
}
