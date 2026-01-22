n.d(t, {
    A: () => j,
});
var r = n(627968),
    i = n(64700),
    l = n(607399),
    a = n(311907),
    s = n(397927),
    o = n(384904),
    c = n(9113),
    u = n(726249),
    d = n(683271),
    p = n(936555),
    f = n(465932),
    h = n(142120),
    A = n(742589),
    g = n(71393),
    m = n(615405),
    b = n(300233),
    _ = n(217976),
    E = n(514179),
    O = n(715837),
    y = n(457830),
    I = n(167010),
    v = n(139613),
    S = n(746080),
    C = n(985018),
    N = n(169194);

function T(e) {
    let { guildId: t } = e,
        n = (0, a.bG)([g.A], () => g.A.getGuild(t), [t]),
        T = (0, a.bG)([h.A], () => h.A.isConnected()),
        j = (0, p.A)(t),
        x = (0, _.A)(t),
        P = (0, a.bG)([m.A], () => m.A.isSubscriptionFetching),
        w = (0, b.X)(),
        { shouldHideGuildPurchaseEntryPoints: L, restrictionsLoading: R } = (0, f.MH)(t),
        D = null == n || !w || P || R;
    (0, u.HU)({
        subsection: C.intl.string(C.t["KzCF/6"]),
        location: null == n ? void 0 : n.name,
    }),
        (0, c.A)(l.Fr ? "role-subscriptions-overview" : void 0);
    let M = T && (null == n || !(j || x) || (L && !R));
    if (
        (i.useEffect(() => {
            o.hP();
        }, []),
        i.useEffect(() => {
            M && !l.Fr && (0, d.B)(t, S.VV.ROLE_SUBSCRIPTIONS);
        }, [t, M]),
        l.Fr && M)
    ) {
        let e = null == n ? y.b.NOT_GUILD_MEMBER : y.b.GUILD_NOT_ELIGIBLE;
        return (0, r.jsx)(y.k, {
            errorType: e,
        });
    }
    return (0, r.jsxs)("div", {
        className: N.kL,
        children: [
            (0, r.jsxs)(A.A, {
                toolbar: (0, r.jsx)(i.Fragment, {}),
                className: N.jr,
                children: [
                    (0, r.jsx)(A.A.Icon, {
                        icon: (0, s.kHD)(E.A),
                        "aria-hidden": !0,
                    }),
                    (0, r.jsx)(A.A.Title, {
                        children: C.intl.string(C.t["KzCF/6"]),
                    }),
                ],
            }),
            (0, r.jsx)("div", {
                id: v.K,
            }),
            (0, r.jsx)("div", {
                className: N.Qs,
                children: j
                    ? (0, r.jsx)(s.d_W, {
                          className: N.XG,
                          children: (0, r.jsx)("div", {
                              className: N.gT,
                              children: D
                                  ? (0, r.jsx)(s.y$y, {})
                                  : (0, r.jsx)(O.A, {
                                        guild: n,
                                    }),
                          }),
                      })
                    : (0, r.jsx)(I.A, {}),
            }),
        ],
    });
}

function j(e) {
    let { guildId: t } = e;
    return (0, r.jsx)(b.H, {
        guildId: t,
        refetchOnMount: !0,
        children: (0, r.jsx)(T, {
            guildId: t,
        }),
    });
}
