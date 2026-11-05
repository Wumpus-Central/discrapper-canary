var n = i(582128),
    r = i(855986),
    a = i(287809),
    s = i(722178),
    l = i(264779),
    o = i(158476),
    _ = i(412260),
    u = i(682901);
function d() {
    let { includeClaimedPromotions: e = !1 } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
        t = (0, r.yK)([_.A], () => _.A.outboundPromotions),
        i = (0, r.bG)([_.A], () => _.A.consumedInboundPromotionId),
        a = (0, r.bG)([_.A], () => _.A.claimedOutboundPromotionCodes);
    return n.useMemo(() => {
        let n = e
            ? new Set(
                  a.map((e) => {
                      let { promotion: t } = e;
                      return t.id;
                  }),
              )
            : null;
        return t.filter((e) => !(e.id === i || !(0, l.OP)(e) || (0, l.g_)(e)) && (n?.has(e.id), !0));
    }, [t, i, a, e]);
}
i.d(
    t,
    {},
    {
        IO: function () {
            let e = (0, r.bG)([_.A], () => _.A.lastSeenOutboundPromotionStartDate),
                t = d();
            return n
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
                .filter((e) => (0, l.OP)(e));
        },
        Sq: function () {
            return (
                n.useEffect(() => {
                    (0, o.BE)();
                }, []),
                (0, r.bG)([_.A], () => _.A.hasActiveBogoRewardPromotion())
            );
        },
        T1: d,
        Wi: function (e) {
            return (0, r.bG)([_.A], () => _.A.hasPromotion(e));
        },
        y7: function () {
            let e = (0, r.bG)([_.A], () => _.A.lastFetchedActivePromotions),
                t = (0, r.bG)([a.default], () => a.default.getCurrentUser()),
                i = s.Ay.isPremiumExactly(t, u.PremiumTypes.TIER_2),
                S = !s.Ay.isPremium(t) || i,
                c = (0, r.bG)([_.A], () => _.A.claimedOutboundPromotionCodes),
                E = (0, r.bG)([_.A], () => _.A.claimedOutboundPromotionCodesLoaded);
            (n.useEffect(() => {
                null != e && o.Ay.markOutboundPromotionsSeen();
            }, [e]),
                n.useEffect(() => {
                    S && null == e && o.Ay.fetchActivePromotions();
                }, [e, S]),
                n.useEffect(() => {
                    o.Ay.fetchClaimedOutboundPromotionCodes();
                }, []));
            let I = n.useMemo(() => (0, l.eN)(c), [c]),
                A = d({ includeClaimedPromotions: !0 }),
                C = n.useMemo(() => {
                    let e = new Set(
                        A.map((e) => {
                            let { id: t } = e;
                            return t;
                        }),
                    );
                    return c.filter((t) => {
                        let { promotion: i } = t;
                        return (
                            !e.has(i.id) &&
                            !1 === (0, l.HB)({ promotionType: i.promotionType }) &&
                            !(0, l.g_)(i) &&
                            (0, l.OP)(i)
                        );
                    });
                }, [A, c]);
            return {
                promotionsLoaded: E && (!S || null != e),
                activeOutboundPromotions: A,
                claimedEndedOutboundPromotions: C,
                claimedOutboundPromotionCodeMap: I,
            };
        },
    },
);
