n.d(t, {
    YO: () => E,
    lG: () => g,
    mq: () => v
}),
    n(47120);
var i = n(192379),
    r = n(442837),
    a = n(570140),
    s = n(594174),
    o = n(78839),
    l = n(431),
    u = n(74538),
    c = n(775412),
    d = n(163684),
    f = n(518638),
    _ = n(748770),
    p = n(1844),
    h = n(474936);
function m(e, t, n, a) {
    let s = (0, r.Wu)([p.Z], () => p.Z.outboundPromotions),
        o = (0, r.e7)([p.Z], () => p.Z.consumedInboundPromotionId);
    return i.useMemo(() => s.filter((i) => i.id !== o && !!(0, f.ZC)(i) && !n && ((!e && !t) || (0, f.Qf)(i, a))), [s, o, n, e, t, a]);
}
function g() {
    let e = (0, r.e7)([p.Z], () => p.Z.lastFetchedActivePromotions),
        t = (0, r.e7)([s.default], () => s.default.getCurrentUser()),
        n = (0, c._O)(),
        g = (0, r.e7)([l.Z], () => l.Z.hasAnyUnexpiredOffer()),
        E = (0, r.e7)([o.ZP], () => o.ZP.inReverseTrial()),
        [v, y] = i.useState(!1),
        [I, b] = i.useState([]);
    i.useEffect(() => {
        null != e && a.Z.wait(() => _.ZP.markOutboundPromotionsSeen());
    }, [e]);
    let T = i.useCallback((e) => {
            b((t) =>
                t.some((t) => {
                    let { promotion: n } = t;
                    return n.id === e.promotion.id;
                })
                    ? t
                    : [...t, e]
            );
        }, []),
        S = u.ZP.isPremiumExactly(t, h.p9.TIER_2),
        A =
            d.g.useExperiment(
                { location: 'useOutboundPromotions' },
                {
                    autoTrackExposure: !1,
                    disable: S
                }
            ).enabled || S;
    i.useEffect(() => {
        a.Z.wait(() => {
            A && null == e && _.ZP.fetchActiveOutboundPromotions();
        });
    }, [e, A]),
        i.useEffect(() => {
            a.Z.wait(() => {
                (0, f.t8)()
                    .then((e) => {
                        b(e), y(!0);
                    })
                    .catch(() => {
                        b([]), y(!0);
                    });
            });
        }, []);
    let N = {};
    for (let { code: e, promotion: t } of I) N[t.id] = e;
    let C = m(n, g, E, N),
        R = new Set(
            C.map((e) => {
                let { id: t } = e;
                return t;
            })
        );
    return {
        promotionsLoaded: v && (!A || null != e),
        activeOutboundPromotions: C,
        claimedEndedOutboundPromotions: I.filter((e) => {
            let { promotion: t } = e;
            return !R.has(t.id);
        }).filter((e) => (0, f.ZC)(e.promotion)),
        claimedOutboundPromotionCodeMap: N,
        addClaimedOutboundPromotionCode: T
    };
}
function E() {
    let e = (0, r.e7)([p.Z], () => p.Z.lastSeenOutboundPromotionStartDate),
        t = (0, c._O)(),
        n = m(
            t,
            (0, r.e7)([l.Z], () => l.Z.hasAnyUnexpiredOffer()),
            (0, r.e7)([o.ZP], () => o.ZP.inReverseTrial()),
            {}
        );
    return i
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
    return { promotion: (0, r.e7)([p.Z], () => p.Z.bogoPromotion) };
}
