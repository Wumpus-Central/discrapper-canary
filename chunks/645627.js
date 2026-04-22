"use strict";
i.d(t, { HJ: () => d, Ln: () => c });
var n = i(64700),
    r = i(975807),
    a = i(829219),
    l = i(341915),
    s = i(18437),
    o = i(590202);
function c(e) {
    let { isClaimingReward: t, isFetchingRewardCode: i, questContent: r, quest: s, rewardCode: o, preview: c } = e,
        [d, u] = n.useState(!1),
        [_, p] = n.useState(!1),
        h = n.useCallback(async (e, t, i) => {
            try {
                p(!0), await (0, a.Oq)(e, t, i), u(!1), p(!1);
            } catch (e) {
                u(!0), p(!1);
            }
        }, []),
        f = n.useCallback((e) => {
            try {
                (0, a.jh)(e);
            } catch (e) {
                u(!0);
            }
        }, []);
    return (
        n.useEffect(() => {
            !0 === c ||
                null != o ||
                d ||
                t ||
                _ ||
                i ||
                (u(!1),
                s.userStatus?.claimedAt == null
                    ? h(s.id, l.pY.CROSS_PLATFORM, r)
                    : s.userStatus?.claimedAt != null && f(s.id));
        }, [h, f, d, t, _, i, r, s, o, c]),
        { claimCode: h, fetchCode: f, hasError: d, setHasError: u }
    );
}
function d(e) {
    let { quest: t, redemptionLink: i, questContent: a, questContentPosition: l, sourceQuestContent: c } = e,
        d = (0, s.Ut)();
    return n.useCallback(() => {
        null != i &&
            (d({
                questId: t.id,
                questContent: a,
                questContentCTA: o.Cy.REDEEM_REWARD,
                questContentPosition: l,
                sourceQuestContent: c,
            }),
            d({
                questId: t.id,
                questContent: a,
                questContentCTA: o.Cy.VISIT_REDEMPTION_LINK,
                questContentPosition: l,
                sourceQuestContent: c,
            }),
            (0, r.A)(i));
    }, [t.id, a, l, c, d, i]);
}
