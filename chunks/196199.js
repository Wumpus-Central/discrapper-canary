n.d(t, { A: () => I });
var i = n(627968),
    s = n(64700),
    l = n(311907),
    a = n(531260),
    r = n(459793),
    o = n(527113),
    d = n(338548),
    u = n(859241),
    c = n(197305),
    g = n(711014),
    m = n(287809),
    _ = n(178368),
    A = n(927578),
    h = n(343557),
    p = n(242694),
    x = n(149524),
    E = n(501486),
    T = n(924699),
    S = n(25833),
    f = n(184487),
    b = n(308748),
    C = n(788868),
    v = n(985018),
    N = n(669561);
function I(e) {
    let { premiumSubscription: t } = e,
        n = (0, l.bG)([_.A], () => _.A.boostSlots),
        I = s.useMemo(() => Object.values(n), [n]),
        y = (0, l.bG)([m.default], () => m.default.getCurrentUser()),
        j = (0, l.bG)([c.A], () => c.A.affinities),
        O = (0, l.bG)([g.Ay], () => g.Ay.getFlattenedGuildIds()),
        R = j.length > 0 || O.length > 0,
        L = s.useMemo(() => I.filter((e) => null != e.premiumGuildSubscription), [I]).length,
        D = (0, l.bG)([u.A], () => u.A.getCurrentUserAppliedBoosts()),
        { fractionalState: P } = (0, a.A)({ forceFetch: !0 }),
        G = y?.isPremiumGroupMember(),
        M = t?.isPausedOrPausePending === !0 && P === C.xc.NONE,
        U = s.useMemo(() => I.some((e) => null == e.premiumGuildSubscription && e.isAvailable()), [I]),
        k = M ? v.intl.string(v.t.mOWsF1) : U ? void 0 : v.intl.string(v.t.xr4m5B),
        V = s.useMemo(() => {
            if (null == t) return 0;
            let e = A.Ay.getNumIncludedPremiumGuildSubscriptionSlots(t.planId);
            return 0 === e || e !== I.length ? 0 : Math.max(0, e - L);
        }, [t, I.length, L]);
    return (0, i.jsxs)("div", {
        className: N.GO,
        children: [
            (0, i.jsx)(r.kb, { className: N.ek }),
            (0, i.jsx)(T.A, {}),
            (0, i.jsx)(S.A, {}),
            V > 0 && (0, i.jsx)(b.A, { count: V, disabledReason: k }),
            G && (0, i.jsx)(d.A, {}),
            !R && (0, i.jsx)(h.A, {}),
            (0, i.jsxs)("div", {
                className: N.C_,
                children: [
                    (0, i.jsx)(p.A, {
                        guildBoostSlots: I,
                        guildBoostSlotsByGuildId: n,
                        premiumSubscription: t,
                        pausedAppliedGuildBoosts: D,
                        fractionalPremiumState: P,
                    }),
                    (0, i.jsx)(f.A, {}),
                    (0, i.jsx)(o.A, { hideHeading: !0, hideTier0: !0 }),
                    (0, i.jsx)(x.A, {}),
                    (0, i.jsx)(E.A, {}),
                ],
            }),
        ],
    });
}
