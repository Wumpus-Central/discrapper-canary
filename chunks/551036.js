n.d(t, { A: () => R });
var i = n(627968),
    r = n(64700),
    a = n(607399),
    l = n(311907),
    s = n(565787),
    o = n(573613),
    d = n(289873),
    u = n(323082),
    c = n(9113),
    A = n(726249),
    h = n(683271),
    _ = n(936555),
    E = n(465932),
    p = n(142120),
    m = n(742589),
    g = n(71393),
    I = n(615405),
    C = n(300233),
    f = n(217976),
    T = n(514179),
    S = n(715837),
    N = n(457830),
    O = n(167010),
    L = n(139613),
    y = n(746080),
    v = n(985018),
    b = n(832933);
function D(e) {
    let { guildId: t } = e,
        n = (0, l.bG)([g.A], () => g.A.getGuild(t), [t]),
        D = (0, l.bG)([p.A], () => p.A.isConnected()),
        R = (0, _.A)(t),
        P = (0, f.A)(t),
        w = (0, l.bG)([I.A], () => I.A.isSubscriptionFetching),
        M = (0, C.X)(),
        { shouldHideGuildPurchaseEntryPoints: U, restrictionsLoading: x } = (0, E.MH)(t),
        G = null == n || !M || w || x;
    (0, A.HU)({ subsection: v.intl.string(v.t["KzCF/6"]), location: n?.name }),
        (0, c.A)(a.Fr ? "role-subscriptions-overview" : void 0);
    let k = D && (null == n || !(R || P) || (U && !x));
    if (
        (r.useEffect(() => {
            u.hP();
        }, []),
        r.useEffect(() => {
            k && !a.Fr && (0, h.B)(t, y.VV.ROLE_SUBSCRIPTIONS);
        }, [t, k]),
        a.Fr && k)
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
                    (0, i.jsx)(m.A.Icon, { icon: (0, s.k)(T.A), "aria-hidden": !0 }),
                    (0, i.jsx)(m.A.Title, { children: v.intl.string(v.t["KzCF/6"]) }),
                ],
            }),
            (0, i.jsx)("div", { id: L.K }),
            (0, i.jsx)("div", {
                className: b.Qs,
                children: R
                    ? (0, i.jsx)(o.d_, {
                          className: b.XG,
                          children: (0, i.jsx)("div", {
                              className: b.gT,
                              children: G ? (0, i.jsx)(d.y, {}) : (0, i.jsx)(S.A, { guild: n }),
                          }),
                      })
                    : (0, i.jsx)(O.A, {}),
            }),
        ],
    });
}
function R(e) {
    let { guildId: t } = e;
    return (0, i.jsx)(C.H, { guildId: t, refetchOnMount: !0, children: (0, i.jsx)(D, { guildId: t }) });
}
