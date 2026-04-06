n.d(t, { A: () => b });
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
    x = n(343557),
    A = n(242694),
    h = n(149524),
    p = n(501486),
    T = n(924699),
    f = n(25833),
    S = n(184487),
    E = n(515145);
function b(e) {
    let { premiumSubscription: t } = e,
        n = (0, l.bG)([_.A], () => _.A.boostSlots),
        b = s.useMemo(() => Object.values(n), [n]),
        C = (0, l.bG)([g.default], () => g.default.getCurrentUser()),
        N = (0, l.bG)([u.A], () => u.A.affinities),
        v = (0, l.bG)([m.Ay], () => m.Ay.getFlattenedGuildIds()),
        I = N.length > 0 || v.length > 0,
        j = (0, l.bG)([c.A], () => c.A.getCurrentUserAppliedBoosts()),
        { fractionalState: y } = (0, a.A)({ forceFetch: !0 }),
        O = C?.isPremiumGroupMember();
    return (0, i.jsxs)("div", {
        className: E.GO,
        children: [
            (0, i.jsx)(r.kb, { className: E.ek }),
            (0, i.jsx)(T.A, {}),
            (0, i.jsx)(f.A, {}),
            O && (0, i.jsx)(d.A, {}),
            !I && (0, i.jsx)(x.A, {}),
            (0, i.jsxs)("div", {
                className: E.C_,
                children: [
                    (0, i.jsx)(A.A, {
                        guildBoostSlots: b,
                        guildBoostSlotsByGuildId: n,
                        premiumSubscription: t,
                        pausedAppliedGuildBoosts: j,
                        fractionalPremiumState: y,
                    }),
                    (0, i.jsx)(S.A, {}),
                    (0, i.jsx)(o.A, { hideHeading: !0, hideTier0: !0 }),
                    (0, i.jsx)(h.A, {}),
                    (0, i.jsx)(p.A, {}),
                ],
            }),
        ],
    });
}
