a.d(e, { D: () => _ });
var i = a(582128),
    s = a(323889),
    u = a(274670),
    n = a(144779),
    c = a(793574),
    r = a(815996),
    l = a(590202),
    d = a(971649),
    o = a(801365),
    p = a(201805),
    C = a(617986),
    A = a(369189),
    S = a(758836);
function _(t) {
    let {
            quest: e,
            questContent: a,
            sourceQuestContent: _,
            questContentPosition: f,
            questContentRowIndex: E,
            shouldRedirectToQuestHome: m = !0,
            shouldShowShopIfAlreadyClaimed: T = !0,
            onBeforeClaim: k,
            onCloseModal: I,
        } = t,
        h = e.userStatus?.completedAt != null && e.userStatus?.claimedAt == null && m,
        y = (0, d.wW)(),
        O = (0, p.ix)({
            quest: e,
            questContent: a,
            questContentPosition: f,
            questContentRowIndex: E,
            sourceQuestContent: _,
        });
    return i.useCallback(
        (t) => {
            if ((null != t && k?.(t), T && (0, o.ks)(e.config) && e.userStatus?.claimedAt != null)) {
                (I?.(), (0, r.Cz)({ tab: S.G2.ORBS, analyticsLocations: [], analyticsSource: c.A.QUEST_HOME_PAGE }));
                return;
            }
            (h &&
                (I?.(),
                (0, o.K9)(e.config) ||
                    (0, A.p)() ||
                    ((0, u.r)({
                        type: n.F.CLICK_INTERNAL,
                        adCreativeType: s.p.QUEST,
                        adCreativeId: e.id,
                        questContentCTA: l.Cy.OPEN_QUEST_HOME_TO_CLAIM,
                        surfaceId: a,
                        sourceQuestContent: _,
                        impressionId: y(),
                        questContentPosition: f,
                        questContentRowIndex: E,
                    }),
                    (0, C.mA)({ fromContent: a }))),
                !h && (0, o.K9)(e.config) && I?.(),
                O());
        },
        [k, I, e.config, e.userStatus?.claimedAt, O, T, h, e.id, a, _, f, E, y],
    );
}
