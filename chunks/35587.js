var i = n(582128),
    r = n(855986),
    a = n(287809),
    s = n(448645),
    l = n(264779),
    o = n(597758),
    u = n(412260),
    d = n(682901);
function c() {
    let { includeClaimedPromotions: e = !1 } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
        t = (0, r.yK)([u.A], () => u.A.outboundPromotions),
        n = (0, r.bG)([u.A], () => u.A.consumedInboundPromotionId),
        a = (0, r.bG)([u.A], () => u.A.claimedOutboundPromotionCodes);
    return i.useMemo(() => {
        let i = e
            ? new Set(
                  a.map((e) => {
                      let { promotion: t } = e;
                      return t.id;
                  }),
              )
            : null;
        return t.filter((e) => !(e.id === n || !(0, l.OP)(e) || (0, l.g_)(e)) && (i?.has(e.id), !0));
    }, [t, n, a, e]);
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
                .filter((e) => (0, l.OP)(e));
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
                t = (0, r.bG)([a.default], () => a.default.getCurrentUser()),
                n = s.Ay.isPremiumExactly(t, d.PremiumTypes.TIER_2),
                S = !s.Ay.isPremium(t) || n,
                _ = (0, r.bG)([u.A], () => u.A.claimedOutboundPromotionCodes),
                h = (0, r.bG)([u.A], () => u.A.claimedOutboundPromotionCodesLoaded);
            (i.useEffect(() => {
                null != e && o.Ay.markOutboundPromotionsSeen();
            }, [e]),
                i.useEffect(() => {
                    S && null == e && o.Ay.fetchActivePromotions();
                }, [e, S]),
                i.useEffect(() => {
                    o.Ay.fetchClaimedOutboundPromotionCodes();
                }, []));
            let E = i.useMemo(() => (0, l.eN)(_), [_]),
                p = c({ includeClaimedPromotions: !0 }),
                f = i.useMemo(() => {
                    let e = new Set(
                        p.map((e) => {
                            let { id: t } = e;
                            return t;
                        }),
                    );
                    return _.filter((t) => {
                        let { promotion: n } = t;
                        return (
                            !e.has(n.id) &&
                            !1 === (0, l.HB)({ promotionType: n.promotionType }) &&
                            !(0, l.g_)(n) &&
                            (0, l.OP)(n)
                        );
                    });
                }, [p, _]);
            return {
                promotionsLoaded: h && (!S || null != e),
                activeOutboundPromotions: p,
                claimedEndedOutboundPromotions: f,
                claimedOutboundPromotionCodeMap: E,
            };
        },
    },
);
