r.d(t, { IO: () => p, Sq: () => f, T1: () => m, Wi: () => h, y7: () => x });
var n = r(582128),
    i = r(17928),
    l = r(228366),
    s = r(287809),
    a = r(158045),
    o = r(264779),
    u = r(962644),
    c = r(412260),
    d = r(202541);
function m() {
    let { includeClaimedPromotions: e = !1 } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
        t = (0, i.yK)([c.A], () => c.A.outboundPromotions),
        r = (0, i.bG)([c.A], () => c.A.consumedInboundPromotionId),
        l = (0, i.bG)([c.A], () => c.A.claimedOutboundPromotionCodes);
    return n.useMemo(() => {
        let n = e
            ? new Set(
                  l.map((e) => {
                      let { promotion: t } = e;
                      return t.id;
                  }),
              )
            : null;
        return t.filter((e) => !(e.id === r || !(0, o.OP)(e) || (0, o.g_)(e)) && (n?.has(e.id), !0));
    }, [t, r, l, e]);
}
function x() {
    let e = (0, i.bG)([c.A], () => c.A.lastFetchedActivePromotions),
        t = (0, i.bG)([s.default], () => s.default.getCurrentUser()),
        r = a.Ay.isPremiumExactly(t, d.PremiumTypes.TIER_2),
        x = !a.Ay.isPremium(t) || r,
        p = (0, i.bG)([c.A], () => c.A.claimedOutboundPromotionCodes),
        h = (0, i.bG)([c.A], () => c.A.claimedOutboundPromotionCodesLoaded);
    (n.useEffect(() => {
        null != e && l.h.wait(() => u.Ay.markOutboundPromotionsSeen());
    }, [e]),
        n.useEffect(() => {
            l.h.wait(() => {
                x && null == e && u.Ay.fetchActivePromotions();
            });
        }, [e, x]),
        n.useEffect(() => {
            l.h.wait(() => {
                u.Ay.fetchClaimedOutboundPromotionCodes();
            });
        }, []));
    let f = n.useMemo(() => (0, o.eN)(p), [p]),
        g = m({ includeClaimedPromotions: !0 }),
        A = n.useMemo(() => {
            let e = new Set(
                g.map((e) => {
                    let { id: t } = e;
                    return t;
                }),
            );
            return p.filter((t) => {
                let { promotion: r } = t;
                return (
                    !e.has(r.id) &&
                    !1 === (0, o.HB)({ promotionType: r.promotionType }) &&
                    !(0, o.g_)(r) &&
                    (0, o.OP)(r)
                );
            });
        }, [g, p]);
    return {
        promotionsLoaded: h && (!x || null != e),
        activeOutboundPromotions: g,
        claimedEndedOutboundPromotions: A,
        claimedOutboundPromotionCodeMap: f,
    };
}
function p() {
    let e = (0, i.bG)([c.A], () => c.A.lastSeenOutboundPromotionStartDate),
        t = m();
    return n
        .useMemo(
            () =>
                null == e
                    ? t
                    : t.filter((t) => {
                          let { startDate: r } = t;
                          return new Date(r) > new Date(e);
                      }),
            [t, e],
        )
        .filter((e) => (0, o.OP)(e));
}
function h(e) {
    return (0, i.bG)([c.A], () => c.A.hasPromotion(e));
}
function f() {
    return (
        n.useEffect(() => {
            (0, u.BE)();
        }, []),
        (0, i.bG)([c.A], () => c.A.hasActiveBogoRewardPromotion())
    );
}
