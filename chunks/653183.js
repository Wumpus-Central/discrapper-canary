n.d(t, { A: () => T });
var r = n(627968),
    i = n(64700),
    a = n(311907),
    s = n(531260),
    o = n(459793),
    l = n(449280),
    c = n(406245),
    u = n(836275),
    d = n(338548),
    f = n(859241),
    p = n(197305),
    _ = n(711014),
    h = n(287809),
    m = n(178368),
    g = n(927578),
    E = n(530240),
    b = n(564152),
    y = n(76740),
    O = n(21316),
    A = n(237267),
    v = n(240626),
    S = n(788868),
    I = n(637676);
function T(e) {
    let { premiumSubscription: t } = e,
        n = (0, a.bG)([m.A], () => m.A.boostSlots),
        T = i.useMemo(() => Object.values(n), [n]),
        C = (0, a.bG)([h.default], () => h.default.getCurrentUser()),
        N = g.Ay.isPremium(C, S.PremiumTypes.TIER_2),
        R = (0, a.bG)([p.A], () => p.A.affinities),
        w = (0, a.bG)([_.Ay], () => _.Ay.getFlattenedGuildIds()),
        P = R.length > 0 || w.length > 0,
        D = T.length > 0,
        x = i.useMemo(() => T.filter((e) => null != e.premiumGuildSubscription), [T]),
        L = x.length > 0,
        j = T.length > x.length,
        M = (0, a.bG)([f.A], () => f.A.getCurrentUserAppliedBoosts()),
        { fractionalState: k } = (0, s.A)({ forceFetch: !0 }),
        U = null == C ? void 0 : C.isPremiumGroupMember(),
        G = (null == t ? void 0 : t.isPausedOrPausePending) === !0 && k === S.xc.NONE,
        V = (null == t ? void 0 : t.isPausedOrPausePending) !== !0 && k === S.xc.NONE && !U,
        F = N && k === S.xc.FP_SUB_PAUSED,
        B = k === S.xc.NONE && !U;
    return (0, r.jsxs)("div", {
        className: I.GO,
        children: [
            (0, r.jsx)(o.kb, { className: I.ek }),
            (0, r.jsx)(b.A, {
                hasGuildBoostSlots: D,
                hasAppliedGuildBoosts: L,
                hasBoostPerk: F,
                canAddBoosts: V,
            }),
            B &&
                (0, r.jsx)(A.A, {
                    hasAppliedGuildBoosts: L,
                    hasBoostPerk: F,
                    hasGuildAffinitiesOrInGuild: P,
                    subscriptionIsPausedOrPausePending: G,
                }),
            U && (0, r.jsx)(d.A, {}),
            !P && (0, r.jsx)(y.A, {}),
            (null == t ? void 0 : t.isPaused) && k !== S.xc.FP_SUB_PAUSED
                ? (0, r.jsx)(E.N, {
                      appliedGuildBoosts: M,
                      premiumSubscription: t,
                  })
                : (0, r.jsx)(E.A, {
                      guildBoostSlots: n,
                      premiumSubscription: t,
                  }),
            (0, r.jsx)(v.A, {
                guildBoostSlots: T,
                fractionalPremiumState: k,
            }),
            (0, r.jsx)(O.A, {
                canAddBoosts: L && V,
                canApplyBoosts: j,
            }),
            (0, r.jsx)(u.A, {
                className: I.e4,
                hideHeading: !0,
                hideTier0: !0,
            }),
            (0, r.jsx)(l.A, { cardClassName: I.KW }),
            (0, r.jsx)(c.A, { className: I.JL }),
        ],
    });
}
