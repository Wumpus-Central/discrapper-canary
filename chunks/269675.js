n.d(t, { Z: () => P });
var r = n(54381),
    i = n(473749),
    l = n(873546),
    a = n(442837),
    s = n(481060),
    o = n(355467),
    c = n(270237),
    u = n(252618),
    d = n(423000),
    p = n(200876),
    f = n(674180),
    h = n(38618),
    g = n(984370),
    m = n(430824),
    _ = n(351402),
    b = n(730647),
    E = n(772021),
    O = n(396828),
    y = n(293423),
    v = n(20967),
    I = n(504762),
    C = n(807152),
    S = n(176505),
    T = n(388032),
    N = n(214689);
function j(e) {
    let { guildId: t } = e,
        n = (0, a.e7)([m.Z], () => m.Z.getGuild(t), [t]),
        j = (0, a.e7)([h.Z], () => h.Z.isConnected()),
        P = (0, p.Z)(t),
        x = (0, E.Z)(t),
        A = (0, a.e7)([_.Z], () => _.Z.isSubscriptionFetching),
        Z = (0, b.f)(),
        { shouldHideGuildPurchaseEntryPoints: w, restrictionsLoading: L } = (0, f.uP)(t),
        R = null == n || !Z || A || L;
    (0, u.Tt)({
        subsection: T.intl.string(T.t["KzCF/6"]),
        location: null == n ? void 0 : n.name,
    }),
        (0, c.Z)(l.tq ? "role-subscriptions-overview" : void 0);
    let D = j && (null == n || !(P || x) || (w && !L));
    if (
        (i.useEffect(() => {
            o.jg();
        }, []),
        i.useEffect(() => {
            D && !l.tq && (0, d.M)(t, S.oC.ROLE_SUBSCRIPTIONS);
        }, [t, D]),
        l.tq && D)
    ) {
        let e = null == n ? v.J.NOT_GUILD_MEMBER : v.J.GUILD_NOT_ELIGIBLE;
        return (0, r.jsx)(v.z, { errorType: e });
    }
    return (0, r.jsxs)("div", {
        className: N.container,
        children: [
            (0, r.jsxs)(g.Z, {
                toolbar: (0, r.jsx)(i.Fragment, {}),
                className: N.headerBar,
                children: [
                    (0, r.jsx)(g.Z.Icon, {
                        icon: (0, s.GSL)(O.Z),
                        "aria-hidden": !0,
                    }),
                    (0, r.jsx)(g.Z.Title, { children: T.intl.string(T.t["KzCF/6"]) }),
                ],
            }),
            (0, r.jsx)("div", { id: C.v }),
            (0, r.jsx)("div", {
                className: N.content,
                children: P
                    ? (0, r.jsx)(s.u2D, {
                          className: N.scroller,
                          children: (0, r.jsx)("div", {
                              className: N.scrollerContent,
                              children: R ? (0, r.jsx)(s.$jN, {}) : (0, r.jsx)(y.Z, { guild: n }),
                          }),
                      })
                    : (0, r.jsx)(I.Z, {}),
            }),
        ],
    });
}
function P(e) {
    let { guildId: t } = e;
    return (0, r.jsx)(b.l, {
        guildId: t,
        refetchOnMount: !0,
        children: (0, r.jsx)(j, { guildId: t }),
    });
}
