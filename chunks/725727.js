r.d(n, {
    YO: function () {
        return y;
    },
    lG: function () {
        return v;
    },
    mq: function () {
        return b;
    }
});
var i = r(47120);
var a = r(192379),
    o = r(442837),
    s = r(570140),
    l = r(594174),
    u = r(78839),
    c = r(431),
    d = r(74538),
    f = r(775412),
    p = r(163684),
    h = r(518638),
    _ = r(748770),
    m = r(1844),
    g = r(474936);
function E(e, n, r, i) {
    let s = (0, o.Wu)([m.Z], () => m.Z.outboundPromotions),
        l = (0, o.e7)([m.Z], () => m.Z.consumedInboundPromotionId);
    return a.useMemo(() => s.filter((a) => a.id !== l && !!(0, h.ZC)(a) && !r && ((!e && !n) || (0, h.Qf)(a, i))), [s, l, r, e, n, i]);
}
function v() {
    let e = (0, o.e7)([m.Z], () => m.Z.lastFetchedActivePromotions),
        n = (0, o.e7)([l.default], () => l.default.getCurrentUser()),
        r = (0, f._O)(),
        i = (0, o.e7)([c.Z], () => c.Z.hasAnyUnexpiredOffer()),
        v = (0, o.e7)([u.ZP], () => u.ZP.inReverseTrial()),
        [y, b] = a.useState(!1),
        [I, T] = a.useState([]);
    a.useEffect(() => {
        null != e && s.Z.wait(() => _.ZP.markOutboundPromotionsSeen());
    }, [e]);
    let S = a.useCallback((e) => {
            T((n) =>
                n.some((n) => {
                    let { promotion: r } = n;
                    return r.id === e.promotion.id;
                })
                    ? n
                    : [...n, e]
            );
        }, []),
        A = d.ZP.isPremiumExactly(n, g.p9.TIER_2),
        C =
            p.g.useExperiment(
                { location: 'useOutboundPromotions' },
                {
                    autoTrackExposure: !1,
                    disable: A
                }
            ).enabled || A;
    a.useEffect(() => {
        s.Z.wait(() => {
            C && null == e && _.ZP.fetchActiveOutboundPromotions();
        });
    }, [e, C]),
        a.useEffect(() => {
            s.Z.wait(() => {
                (0, h.t8)()
                    .then((e) => {
                        T(e), b(!0);
                    })
                    .catch(() => {
                        T([]), b(!0);
                    });
            });
        }, []);
    let N = {};
    for (let { code: e, promotion: n } of I) N[n.id] = e;
    let R = E(r, i, v, N),
        O = new Set(
            R.map((e) => {
                let { id: n } = e;
                return n;
            })
        ),
        D = I.filter((e) => {
            let { promotion: n } = e;
            return !O.has(n.id);
        });
    return {
        promotionsLoaded: y && (!C || null != e),
        activeOutboundPromotions: R,
        claimedEndedOutboundPromotions: D.filter((e) => (0, h.ZC)(e.promotion)),
        claimedOutboundPromotionCodeMap: N,
        addClaimedOutboundPromotionCode: S
    };
}
function y() {
    let e = (0, o.e7)([m.Z], () => m.Z.lastSeenOutboundPromotionStartDate),
        n = (0, f._O)(),
        r = (0, o.e7)([c.Z], () => c.Z.hasAnyUnexpiredOffer()),
        i = E(
            n,
            r,
            (0, o.e7)([u.ZP], () => u.ZP.inReverseTrial()),
            {}
        );
    return a
        .useMemo(
            () =>
                null == e
                    ? i
                    : i.filter((n) => {
                          let { startDate: r } = n;
                          return new Date(r) > new Date(e);
                      }),
            [i, e]
        )
        .filter((e) => (0, h.ZC)(e));
}
function b() {
    return { promotion: (0, o.e7)([m.Z], () => m.Z.bogoPromotion) };
}
