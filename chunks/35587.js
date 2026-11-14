var i = n(582128),
    r = n(855986),
    l = n(287809),
    a = n(448645),
    s = n(264779),
    o = n(597758),
    u = n(412260),
    d = n(682901);
function c() {
    let { includeClaimedPromotions: e = !1 } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
        t = (0, r.yK)([u.A], () => u.A.outboundPromotions),
        n = (0, r.bG)([u.A], () => u.A.consumedInboundPromotionId),
        l = (0, r.bG)([u.A], () => u.A.claimedOutboundPromotionCodes);
    return i.useMemo(() => {
        let i = e
            ? new Set(
                  l.map((e) => {
                      let { promotion: t } = e;
                      return t.id;
                  }),
              )
            : null;
        return t.filter((e) => !(e.id === n || !(0, s.OP)(e) || (0, s.g_)(e)) && (i?.has(e.id), !0));
    }, [t, n, l, e]);
}
n.d(
    t,
    {},
    {
        IO: function () {
            let e = (0, r.bG)([u.A], () => u.A.lastSeenOutboundPromotionStartDate),
                t = c();
            return i
                .useMemo(
                    () =>
                        null == e
                            ? t
                            : t.filter((t) => {
                                  let { startDate: n } = t;
                                  return new Date(n) > new Date(e);
                              }),
                    [t, e],
                )
                .filter((e) => (0, s.OP)(e));
        },
        Sq: function () {
            return (
                i.useEffect(() => {
                    (0, o.BE)();
                }, []),
                (0, r.bG)([u.A], () => u.A.hasActiveBogoRewardPromotion())
            );
        },
        T1: c,
        Wi: function (e) {
            return (0, r.bG)([u.A], () => u.A.hasPromotion(e));
        },
        y7: function () {
            let e = (0, r.bG)([u.A], () => u.A.lastFetchedActivePromotions),
                t = (0, r.bG)([l.default], () => l.default.getCurrentUser()),
                n = a.Ay.isPremiumExactly(t, d.PremiumTypes.TIER_2),
                S = !a.Ay.isPremium(t) || n,
                E = (0, r.bG)([u.A], () => u.A.claimedOutboundPromotionCodes),
                _ = (0, r.bG)([u.A], () => u.A.claimedOutboundPromotionCodesLoaded);
            (i.useEffect(() => {
                null != e && o.Ay.markOutboundPromotionsSeen();
            }, [e]),
                i.useEffect(() => {
                    S && null == e && o.Ay.fetchActivePromotions();
                }, [e, S]),
                i.useEffect(() => {
                    o.Ay.fetchClaimedOutboundPromotionCodes();
                }, []));
            let h = i.useMemo(() => (0, s.eN)(E), [E]),
                C = c({ includeClaimedPromotions: !0 }),
                f = i.useMemo(() => {
                    let e = new Set(
                        C.map((e) => {
                            let { id: t } = e;
                            return t;
                        }),
                    );
                    return E.filter((t) => {
                        let { promotion: n } = t;
                        return (
                            !e.has(n.id) &&
                            !1 === (0, s.HB)({ promotionType: n.promotionType }) &&
                            !(0, s.g_)(n) &&
                            (0, s.OP)(n)
                        );
                    });
                }, [C, E]);
            return {
                promotionsLoaded: _ && (!S || null != e),
                activeOutboundPromotions: C,
                claimedEndedOutboundPromotions: f,
                claimedOutboundPromotionCodeMap: h,
            };
        },
    },
);
