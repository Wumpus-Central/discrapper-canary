n.d(t, {
    YO: () => E,
    lG: () => g,
    mq: () => v
}),
    n(47120);
var r = n(192379),
    i = n(442837),
    o = n(570140),
    a = n(594174),
    s = n(78839),
    l = n(431),
    c = n(74538),
    u = n(775412),
    d = n(163684),
    f = n(518638),
    p = n(748770),
    _ = n(1844),
    h = n(474936);
function m(e, t, n, o) {
    let a = (0, i.Wu)([_.Z], () => _.Z.outboundPromotions),
        s = (0, i.e7)([_.Z], () => _.Z.consumedInboundPromotionId);
    return r.useMemo(() => a.filter((r) => r.id !== s && !!(0, f.ZC)(r) && !n && ((!e && !t) || (0, f.Qf)(r, o))), [a, s, n, e, t, o]);
}
function g() {
    let e = (0, i.e7)([_.Z], () => _.Z.lastFetchedActivePromotions),
        t = (0, i.e7)([a.default], () => a.default.getCurrentUser()),
        n = (0, u._O)(),
        g = (0, i.e7)([l.Z], () => l.Z.hasAnyUnexpiredOffer()),
        E = (0, i.e7)([s.ZP], () => s.ZP.inReverseTrial()),
        [v, b] = r.useState(!1),
        [y, O] = r.useState([]);
    r.useEffect(() => {
        null != e && o.Z.wait(() => p.ZP.markOutboundPromotionsSeen());
    }, [e]);
    let S = r.useCallback((e) => {
            O((t) =>
                t.some((t) => {
                    let { promotion: n } = t;
                    return n.id === e.promotion.id;
                })
                    ? t
                    : [...t, e]
            );
        }, []),
        I = c.ZP.isPremiumExactly(t, h.p9.TIER_2),
        T =
            d.g.useExperiment(
                { location: 'useOutboundPromotions' },
                {
                    autoTrackExposure: !1,
                    disable: I
                }
            ).enabled || I;
    r.useEffect(() => {
        o.Z.wait(() => {
            T && null == e && p.ZP.fetchActiveOutboundPromotions();
        });
    }, [e, T]),
        r.useEffect(() => {
            o.Z.wait(() => {
                (0, f.t8)()
                    .then((e) => {
                        O(e), b(!0);
                    })
                    .catch(() => {
                        O([]), b(!0);
                    });
            });
        }, []);
    let N = {};
    for (let { code: e, promotion: t } of y) N[t.id] = e;
    let A = m(n, g, E, N),
        C = new Set(
            A.map((e) => {
                let { id: t } = e;
                return t;
            })
        );
    return {
        promotionsLoaded: v && (!T || null != e),
        activeOutboundPromotions: A,
        claimedEndedOutboundPromotions: y
            .filter((e) => {
                let { promotion: t } = e;
                return !C.has(t.id);
            })
            .filter((e) => (0, f.ZC)(e.promotion)),
        claimedOutboundPromotionCodeMap: N,
        addClaimedOutboundPromotionCode: S
    };
}
function E() {
    let e = (0, i.e7)([_.Z], () => _.Z.lastSeenOutboundPromotionStartDate),
        t = (0, u._O)(),
        n = m(
            t,
            (0, i.e7)([l.Z], () => l.Z.hasAnyUnexpiredOffer()),
            (0, i.e7)([s.ZP], () => s.ZP.inReverseTrial()),
            {}
        );
    return r
        .useMemo(
            () =>
                null == e
                    ? n
                    : n.filter((t) => {
                          let { startDate: n } = t;
                          return new Date(n) > new Date(e);
                      }),
            [n, e]
        )
        .filter((e) => (0, f.ZC)(e));
}
function v() {
    return { promotion: (0, i.e7)([_.Z], () => _.Z.bogoPromotion) };
}
