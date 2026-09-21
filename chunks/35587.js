r.d(t, { IO: () => p, Sq: () => f, T1: () => m, Wi: () => h, y7: () => x });
var i = r(582128),
    n = r(17928),
    l = r(228366),
    s = r(287809),
    a = r(158045),
    o = r(264779),
    c = r(962644),
    d = r(412260),
    u = r(202541);
function m() {
    let { includeClaimedPromotions: e = !1 } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
        t = (0, n.yK)([d.A], () => d.A.outboundPromotions),
        r = (0, n.bG)([d.A], () => d.A.consumedInboundPromotionId),
        l = (0, n.bG)([d.A], () => d.A.claimedOutboundPromotionCodes);
    return i.useMemo(() => {
        let i = e
            ? new Set(
                  l.map((e) => {
                      let { promotion: t } = e;
                      return t.id;
                  }),
              )
            : null;
        return t.filter((e) => !(e.id === r || !(0, o.OP)(e) || (0, o.g_)(e)) && (i?.has(e.id), !0));
    }, [t, r, l, e]);
}
function x() {
    let e = (0, n.bG)([d.A], () => d.A.lastFetchedActivePromotions),
        t = (0, n.bG)([s.default], () => s.default.getCurrentUser()),
        r = a.Ay.isPremiumExactly(t, u.PremiumTypes.TIER_2),
        x = !a.Ay.isPremium(t) || r,
        p = (0, n.bG)([d.A], () => d.A.claimedOutboundPromotionCodes),
        h = (0, n.bG)([d.A], () => d.A.claimedOutboundPromotionCodesLoaded);
    (i.useEffect(() => {
        null != e && l.h.wait(() => c.Ay.markOutboundPromotionsSeen());
    }, [e]),
        i.useEffect(() => {
            l.h.wait(() => {
                x && null == e && c.Ay.fetchActivePromotions();
            });
        }, [e, x]),
        i.useEffect(() => {
            l.h.wait(() => {
                c.Ay.fetchClaimedOutboundPromotionCodes();
            });
        }, []));
    let f = i.useMemo(() => (0, o.eN)(p), [p]),
        g = m({ includeClaimedPromotions: !0 }),
        j = i.useMemo(() => {
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
        claimedEndedOutboundPromotions: j,
        claimedOutboundPromotionCodeMap: f,
    };
}
function p() {
    let e = (0, n.bG)([d.A], () => d.A.lastSeenOutboundPromotionStartDate),
        t = m();
    return i
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
    return (0, n.bG)([d.A], () => d.A.hasPromotion(e));
}
function f() {
    return (
        i.useEffect(() => {
            (0, c.BE)();
        }, []),
        (0, n.bG)([d.A], () => d.A.hasActiveBogoRewardPromotion())
    );
}
