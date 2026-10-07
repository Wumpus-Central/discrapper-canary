i.d(t, { IO: () => S, Sq: () => p, T1: () => u, Wi: () => f, y7: () => _ });
var l = i(582128),
    n = i(17928),
    a = i(73153),
    s = i(287809),
    r = i(158045),
    o = i(264779),
    c = i(962644),
    d = i(412260),
    h = i(202541);
function u() {
    let { includeClaimedPromotions: e = !1 } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
        t = (0, n.yK)([d.A], () => d.A.outboundPromotions),
        i = (0, n.bG)([d.A], () => d.A.consumedInboundPromotionId),
        a = (0, n.bG)([d.A], () => d.A.claimedOutboundPromotionCodes);
    return l.useMemo(() => {
        let l = e
            ? new Set(
                  a.map((e) => {
                      let { promotion: t } = e;
                      return t.id;
                  }),
              )
            : null;
        return t.filter((e) => !(e.id === i || !(0, o.OP)(e) || (0, o.g_)(e)) && (l?.has(e.id), !0));
    }, [t, i, a, e]);
}
function _() {
    let e = (0, n.bG)([d.A], () => d.A.lastFetchedActivePromotions),
        t = (0, n.bG)([s.default], () => s.default.getCurrentUser()),
        i = r.Ay.isPremiumExactly(t, h.PremiumTypes.TIER_2),
        _ = !r.Ay.isPremium(t) || i,
        S = (0, n.bG)([d.A], () => d.A.claimedOutboundPromotionCodes),
        f = (0, n.bG)([d.A], () => d.A.claimedOutboundPromotionCodesLoaded);
    (l.useEffect(() => {
        null != e && a.h.wait(() => c.Ay.markOutboundPromotionsSeen());
    }, [e]),
        l.useEffect(() => {
            a.h.wait(() => {
                _ && null == e && c.Ay.fetchActivePromotions();
            });
        }, [e, _]),
        l.useEffect(() => {
            a.h.wait(() => {
                c.Ay.fetchClaimedOutboundPromotionCodes();
            });
        }, []));
    let p = l.useMemo(() => (0, o.eN)(S), [S]),
        C = u({ includeClaimedPromotions: !0 }),
        E = l.useMemo(() => {
            let e = new Set(
                C.map((e) => {
                    let { id: t } = e;
                    return t;
                }),
            );
            return S.filter((t) => {
                let { promotion: i } = t;
                return (
                    !e.has(i.id) &&
                    !1 === (0, o.HB)({ promotionType: i.promotionType }) &&
                    !(0, o.g_)(i) &&
                    (0, o.OP)(i)
                );
            });
        }, [C, S]);
    return {
        promotionsLoaded: f && (!_ || null != e),
        activeOutboundPromotions: C,
        claimedEndedOutboundPromotions: E,
        claimedOutboundPromotionCodeMap: p,
    };
}
function S() {
    let e = (0, n.bG)([d.A], () => d.A.lastSeenOutboundPromotionStartDate),
        t = u();
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
        .filter((e) => (0, o.OP)(e));
}
function f(e) {
    return (0, n.bG)([d.A], () => d.A.hasPromotion(e));
}
function p() {
    return (
        l.useEffect(() => {
            (0, c.BE)();
        }, []),
        (0, n.bG)([d.A], () => d.A.hasActiveBogoRewardPromotion())
    );
}
