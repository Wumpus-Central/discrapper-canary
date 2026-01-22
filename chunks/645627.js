n.d(t, {
    HJ: () => o,
    Ln: () => l,
}),
    n(896048);
var r = n(64700),
    a = n(975807),
    i = n(829219),
    s = n(216456),
    c = n(341915);

function l(e) {
    let { isClaimingReward: t, isFetchingRewardCode: n, questContent: a, quest: s, rewardCode: l, preview: o } = e,
        [d, u] = r.useState(!1),
        [f, m] = r.useState(!1),
        x = r.useCallback(async (e, t, n) => {
            try {
                m(!0), await (0, i.Oq)(e, t, n), u(!1), m(!1);
            } catch (e) {
                u(!0), m(!1);
            }
        }, []),
        h = r.useCallback((e) => {
            try {
                (0, i.jh)(e);
            } catch (e) {
                u(!0);
            }
        }, []);
    return (
        r.useEffect(() => {
            var e, r;
            !0 === o ||
                null != l ||
                d ||
                t ||
                f ||
                n ||
                (u(!1),
                (null == (e = s.userStatus) ? void 0 : e.claimedAt) == null
                    ? x(s.id, c.pY.CROSS_PLATFORM, a)
                    : (null == (r = s.userStatus) ? void 0 : r.claimedAt) != null && h(s.id));
        }, [x, h, d, t, f, n, a, s, l, o]),
        {
            claimCode: x,
            fetchCode: h,
            hasError: d,
            setHasError: u,
        }
    );
}

function o(e) {
    let { quest: t, redemptionLink: n, questContent: i, questContentPosition: c, sourceQuestContent: l } = e,
        o = (0, s.Ut)();
    return r.useCallback(() => {
        null != n &&
            (o({
                questId: t.id,
                questContent: i,
                questContentCTA: s.Cy.REDEEM_REWARD,
                questContentPosition: c,
                sourceQuestContent: l,
            }),
            o({
                questId: t.id,
                questContent: i,
                questContentCTA: s.Cy.VISIT_REDEMPTION_LINK,
                questContentPosition: c,
                sourceQuestContent: l,
            }),
            (0, a.A)(n));
    }, [t.id, i, c, l, o, n]);
}
