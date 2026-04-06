n.d(t, { A: () => I });
var i = n(627968),
    s = n(64700),
    l = n(311907),
    a = n(531260),
    r = n(459793),
    o = n(527113),
    d = n(338548),
    c = n(859241),
    u = n(197305),
    m = n(711014),
    g = n(287809),
    _ = n(178368),
    x = n(927578),
    A = n(343557),
    h = n(242694),
    p = n(149524),
    T = n(501486),
    f = n(924699),
    S = n(25833),
    b = n(184487),
    E = n(308748),
    C = n(788868),
    N = n(985018),
    v = n(515145);
function I(e) {
    let { premiumSubscription: t } = e,
        n = (0, l.bG)([_.A], () => _.A.boostSlots),
        I = s.useMemo(() => Object.values(n), [n]),
        j = (0, l.bG)([g.default], () => g.default.getCurrentUser()),
        y = (0, l.bG)([u.A], () => u.A.affinities),
        O = (0, l.bG)([m.Ay], () => m.Ay.getFlattenedGuildIds()),
        R = y.length > 0 || O.length > 0,
        P = s.useMemo(() => I.filter((e) => null != e.premiumGuildSubscription), [I]).length,
        L = (0, l.bG)([c.A], () => c.A.getCurrentUserAppliedBoosts()),
        { fractionalState: D } = (0, a.A)({ forceFetch: !0 }),
        G = j?.isPremiumGroupMember(),
        M = t?.isPausedOrPausePending === !0 && D === C.xc.NONE,
        k = s.useMemo(() => I.some((e) => null == e.premiumGuildSubscription && e.isAvailable()), [I]),
        U = M ? N.intl.string(N.t.mOWsF1) : k ? void 0 : N.intl.string(N.t.xr4m5B),
        w = s.useMemo(() => {
            if (null == t) return 0;
            let e = x.Ay.getNumIncludedPremiumGuildSubscriptionSlots(t.planId);
            return 0 === e || e !== I.length ? 0 : Math.max(0, e - P);
        }, [t, I.length, P]);
    return (0, i.jsxs)("div", {
        className: v.GO,
        children: [
            (0, i.jsx)(r.kb, { className: v.ek }),
            (0, i.jsx)(f.A, {}),
            (0, i.jsx)(S.A, {}),
            w > 0 && (0, i.jsx)(E.A, { count: w, disabledReason: U }),
            G && (0, i.jsx)(d.A, {}),
            !R && (0, i.jsx)(A.A, {}),
            (0, i.jsxs)("div", {
                className: v.C_,
                children: [
                    (0, i.jsx)(h.A, {
                        guildBoostSlots: I,
                        guildBoostSlotsByGuildId: n,
                        premiumSubscription: t,
                        pausedAppliedGuildBoosts: L,
                        fractionalPremiumState: D,
                    }),
                    (0, i.jsx)(b.A, {}),
                    (0, i.jsx)(o.A, { hideHeading: !0, hideTier0: !0 }),
                    (0, i.jsx)(p.A, {}),
                    (0, i.jsx)(T.A, {}),
                ],
            }),
        ],
    });
}
