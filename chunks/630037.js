a.d(e, { D: () => S });
var u = a(64700),
    i = a(323889),
    s = a(274670),
    c = a(144779),
    n = a(793574),
    l = a(662388),
    C = a(104886),
    _ = a(18437),
    d = a(590202),
    r = a(971649),
    o = a(801365),
    E = a(764336),
    p = a(617986),
    A = a(369189),
    T = a(758836);
function S(t) {
    let {
            quest: e,
            questContent: a,
            sourceQuestContent: S,
            questContentPosition: I,
            questContentRowIndex: f,
            shouldRedirectToQuestHome: k = !0,
            shouldShowShopIfAlreadyClaimed: m = !0,
            onBeforeClaim: O,
            onCloseModal: L,
        } = t,
        y = e.userStatus?.completedAt != null && e.userStatus?.claimedAt == null && k,
        N = (0, _.Ut)(),
        g = (0, r.go)(),
        h = (0, E.ix)({
            quest: e,
            questContent: a,
            questContentPosition: I,
            questContentRowIndex: f,
            sourceQuestContent: S,
        });
    return u.useCallback(
        (t) => {
            if ((null != t && O?.(t), m && (0, o.ks)(e.config) && e.userStatus?.claimedAt != null)) {
                L?.(), (0, l.Cz)({ tab: T.G2.ORBS, analyticsLocations: [], analyticsSource: n.A.QUEST_HOME_PAGE });
                return;
            }
            y &&
                (L?.(),
                (0, o.K9)(e.config) ||
                    (0, A.p)() ||
                    ((0, C.E5)(C.kI.STEP_2_CLICKED_INTERNAL, "completed_quest_claim_click")
                        ? (0, s.r)({
                              type: c.F.CLICK_INTERNAL,
                              adCreativeType: i.p.QUEST,
                              adCreativeId: e.id,
                              questContentCTA: d.Cy.OPEN_QUEST_HOME_TO_CLAIM,
                              surfaceId: a,
                              sourceQuestContent: S,
                              impressionId: g,
                              questContentPosition: I,
                              questContentRowIndex: f,
                          })
                        : N({
                              questId: e.id,
                              questContent: a,
                              questContentCTA: d.Cy.OPEN_QUEST_HOME_TO_CLAIM,
                              sourceQuestContent: S,
                              questContentPosition: I,
                              questContentRowIndex: f,
                          }),
                    (0, p.mA)({ fromContent: a }))),
                !y && (0, o.K9)(e.config) && L?.(),
                h();
        },
        [O, L, e.config, e.userStatus?.claimedAt, h, m, y, e.id, a, S, I, f, N, g],
    );
}
