n.d(t, { A: () => L });
var i = n(627968),
    r = n(64700),
    a = n(607399),
    l = n(311907),
    s = n(397927),
    o = n(384904),
    d = n(9113),
    c = n(726249),
    u = n(683271),
    A = n(936555),
    h = n(465932),
    _ = n(142120),
    m = n(742589),
    p = n(71393),
    g = n(615405),
    E = n(300233),
    f = n(217976),
    I = n(514179),
    C = n(715837),
    N = n(457830),
    T = n(167010),
    S = n(139613),
    x = n(746080),
    v = n(985018),
    b = n(169194);
function y(e) {
    let { guildId: t } = e,
        n = (0, l.bG)([p.A], () => p.A.getGuild(t), [t]),
        y = (0, l.bG)([_.A], () => _.A.isConnected()),
        L = (0, A.A)(t),
        O = (0, f.A)(t),
        R = (0, l.bG)([g.A], () => g.A.isSubscriptionFetching),
        P = (0, E.X)(),
        { shouldHideGuildPurchaseEntryPoints: j, restrictionsLoading: D } = (0, h.MH)(t),
        w = null == n || !P || R || D;
    (0, c.HU)({ subsection: v.intl.string(v.t["KzCF/6"]), location: n?.name }),
        (0, d.A)(a.Fr ? "role-subscriptions-overview" : void 0);
    let M = y && (null == n || !(L || O) || (j && !D));
    if (
        (r.useEffect(() => {
            o.hP();
        }, []),
        r.useEffect(() => {
            M && !a.Fr && (0, u.B)(t, x.VV.ROLE_SUBSCRIPTIONS);
        }, [t, M]),
        a.Fr && M)
    ) {
        let e = null == n ? N.b.NOT_GUILD_MEMBER : N.b.GUILD_NOT_ELIGIBLE;
        return (0, i.jsx)(N.k, { errorType: e });
    }
    return (0, i.jsxs)("div", {
        className: b.kL,
        children: [
            (0, i.jsxs)(m.A, {
                toolbar: (0, i.jsx)(r.Fragment, {}),
                className: b.jr,
                children: [
                    (0, i.jsx)(m.A.Icon, { icon: (0, s.kHD)(I.A), "aria-hidden": !0 }),
                    (0, i.jsx)(m.A.Title, { children: v.intl.string(v.t["KzCF/6"]) }),
                ],
            }),
            (0, i.jsx)("div", { id: S.K }),
            (0, i.jsx)("div", {
                className: b.Qs,
                children: L
                    ? (0, i.jsx)(s.d_W, {
                          className: b.XG,
                          children: (0, i.jsx)("div", {
                              className: b.gT,
                              children: w ? (0, i.jsx)(s.y$y, {}) : (0, i.jsx)(C.A, { guild: n }),
                          }),
                      })
                    : (0, i.jsx)(T.A, {}),
            }),
        ],
    });
}
function L(e) {
    let { guildId: t } = e;
    return (0, i.jsx)(E.H, { guildId: t, refetchOnMount: !0, children: (0, i.jsx)(y, { guildId: t }) });
}
