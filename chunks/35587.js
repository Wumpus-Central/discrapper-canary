i.d(t, { IO: () => _, Sq: () => p, T1: () => h, Wi: () => S, y7: () => u });
var l = i(582128),
    n = i(17928),
    a = i(287809),
    s = i(24482),
    r = i(264779),
    o = i(962644),
    c = i(412260),
    d = i(202541);
function h() {
    let { includeClaimedPromotions: e = !1 } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
        t = (0, n.yK)([c.A], () => c.A.outboundPromotions),
        i = (0, n.bG)([c.A], () => c.A.consumedInboundPromotionId),
        a = (0, n.bG)([c.A], () => c.A.claimedOutboundPromotionCodes);
    return l.useMemo(() => {
        let l = e
            ? new Set(
                  a.map((e) => {
                      let { promotion: t } = e;
                      return t.id;
                  }),
              )
            : null;
        return t.filter((e) => !(e.id === i || !(0, r.OP)(e) || (0, r.g_)(e)) && (l?.has(e.id), !0));
    }, [t, i, a, e]);
}
function u() {
    let e = (0, n.bG)([c.A], () => c.A.lastFetchedActivePromotions),
        t = (0, n.bG)([a.default], () => a.default.getCurrentUser()),
        i = s.Ay.isPremiumExactly(t, d.PremiumTypes.TIER_2),
        u = !s.Ay.isPremium(t) || i,
        _ = (0, n.bG)([c.A], () => c.A.claimedOutboundPromotionCodes),
        S = (0, n.bG)([c.A], () => c.A.claimedOutboundPromotionCodesLoaded);
    (l.useEffect(() => {
        null != e && o.Ay.markOutboundPromotionsSeen();
    }, [e]),
        l.useEffect(() => {
            u && null == e && o.Ay.fetchActivePromotions();
        }, [e, u]),
        l.useEffect(() => {
            o.Ay.fetchClaimedOutboundPromotionCodes();
        }, []));
    let p = l.useMemo(() => (0, r.eN)(_), [_]),
        f = h({ includeClaimedPromotions: !0 }),
        C = l.useMemo(() => {
            let e = new Set(
                f.map((e) => {
                    let { id: t } = e;
                    return t;
                }),
            );
            return _.filter((t) => {
                let { promotion: i } = t;
                return (
                    !e.has(i.id) &&
                    !1 === (0, r.HB)({ promotionType: i.promotionType }) &&
                    !(0, r.g_)(i) &&
                    (0, r.OP)(i)
                );
            });
        }, [f, _]);
    return {
        promotionsLoaded: S && (!u || null != e),
        activeOutboundPromotions: f,
        claimedEndedOutboundPromotions: C,
        claimedOutboundPromotionCodeMap: p,
    };
}
function _() {
    let e = (0, n.bG)([c.A], () => c.A.lastSeenOutboundPromotionStartDate),
        t = h();
    return l
        .useMemo(
            () =>
                null == e
                    ? t
                    : t.filter((t) => {
                          let { startDate: i } = t;
                          return new Date(i) > new Date(e);
                      }),
            [t, e],
        )
        .filter((e) => (0, r.OP)(e));
}
function S(e) {
    return (0, n.bG)([c.A], () => c.A.hasPromotion(e));
}
function p() {
    return (
        l.useEffect(() => {
            (0, o.BE)();
        }, []),
        (0, n.bG)([c.A], () => c.A.hasActiveBogoRewardPromotion())
    );
}
