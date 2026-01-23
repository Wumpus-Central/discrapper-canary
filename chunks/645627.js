n.d(t, {
    HJ: () => d,
    Ln: () => c,
}),
    n(896048);
var r = n(64700),
    a = n(975807),
    i = n(829219),
    s = n(341915),
    o = n(18437),
    l = n(590202);

function c(e) {
    let { isClaimingReward: t, isFetchingRewardCode: n, questContent: a, quest: o, rewardCode: l, preview: c } = e,
        [d, u] = r.useState(!1),
        [m, f] = r.useState(!1),
        p = r.useCallback(async (e, t, n) => {
            try {
                f(!0), await (0, i.Oq)(e, t, n), u(!1), f(!1);
            } catch (e) {
                u(!0), f(!1);
            }
        }, []),
        C = r.useCallback((e) => {
            try {
                (0, i.jh)(e);
            } catch (e) {
                u(!0);
            }
        }, []);
    return (
        r.useEffect(() => {
            var e, r;
            !0 === c ||
                null != l ||
                d ||
                t ||
                m ||
                n ||
                (u(!1),
                (null == (e = o.userStatus) ? void 0 : e.claimedAt) == null
                    ? p(o.id, s.pY.CROSS_PLATFORM, a)
                    : (null == (r = o.userStatus) ? void 0 : r.claimedAt) != null && C(o.id));
        }, [p, C, d, t, m, n, a, o, l, c]),
        {
            claimCode: p,
            fetchCode: C,
            hasError: d,
            setHasError: u,
        }
    );
}

function d(e) {
    let { quest: t, redemptionLink: n, questContent: i, questContentPosition: s, sourceQuestContent: c } = e,
        d = (0, o.Ut)();
    return r.useCallback(() => {
        null != n &&
            (d({
                questId: t.id,
                questContent: i,
                questContentCTA: l.Cy.REDEEM_REWARD,
                questContentPosition: s,
                sourceQuestContent: c,
            }),
            d({
                questId: t.id,
                questContent: i,
                questContentCTA: l.Cy.VISIT_REDEMPTION_LINK,
                questContentPosition: s,
                sourceQuestContent: c,
            }),
            (0, a.A)(n));
    }, [t.id, i, s, c, d, n]);
}
