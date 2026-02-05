n.d(t, { HJ: () => c, Ln: () => d });
var s = n(64700),
    a = n(975807),
    i = n(829219),
    r = n(341915),
    o = n(18437),
    l = n(590202);
function d(e) {
    let { isClaimingReward: t, isFetchingRewardCode: n, questContent: a, quest: o, rewardCode: l, preview: d } = e,
        [c, u] = s.useState(!1),
        [m, C] = s.useState(!1),
        h = s.useCallback(async (e, t, n) => {
            try {
                C(!0), await (0, i.Oq)(e, t, n), u(!1), C(!1);
            } catch (e) {
                u(!0), C(!1);
            }
        }, []),
        x = s.useCallback((e) => {
            try {
                (0, i.jh)(e);
            } catch (e) {
                u(!0);
            }
        }, []);
    return (
        s.useEffect(() => {
            !0 === d ||
                null != l ||
                c ||
                t ||
                m ||
                n ||
                (u(!1),
                o.userStatus?.claimedAt == null
                    ? h(o.id, r.pY.CROSS_PLATFORM, a)
                    : o.userStatus?.claimedAt != null && x(o.id));
        }, [h, x, c, t, m, n, a, o, l, d]),
        { claimCode: h, fetchCode: x, hasError: c, setHasError: u }
    );
}
function c(e) {
    let { quest: t, redemptionLink: n, questContent: i, questContentPosition: r, sourceQuestContent: d } = e,
        c = (0, o.Ut)();
    return s.useCallback(() => {
        null != n &&
            (c({
                questId: t.id,
                questContent: i,
                questContentCTA: l.Cy.REDEEM_REWARD,
                questContentPosition: r,
                sourceQuestContent: d,
            }),
            c({
                questId: t.id,
                questContent: i,
                questContentCTA: l.Cy.VISIT_REDEMPTION_LINK,
                questContentPosition: r,
                sourceQuestContent: d,
            }),
            (0, a.A)(n));
    }, [t.id, i, r, d, c, n]);
}
