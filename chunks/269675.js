n.d(t, { Z: () => P });
var r = n(54381),
    i = n(473749),
    l = n(873546),
    a = n(442837),
    o = n(481060),
    s = n(355467),
    c = n(270237),
    u = n(252618),
    d = n(423000),
    p = n(200876),
    f = n(674180),
    g = n(38618),
    h = n(984370),
    m = n(430824),
    b = n(351402),
    _ = n(730647),
    E = n(772021),
    O = n(396828),
    v = n(293423),
    y = n(20967),
    I = n(504762),
    C = n(807152),
    S = n(176505),
    T = n(388032),
    N = n(134792);
function j(e) {
    let { guildId: t } = e,
        n = (0, a.e7)([m.Z], () => m.Z.getGuild(t), [t]),
        j = (0, a.e7)([g.Z], () => g.Z.isConnected()),
        P = (0, p.Z)(t),
        x = (0, E.Z)(t),
        A = (0, a.e7)([b.Z], () => b.Z.isSubscriptionFetching),
        Z = (0, _.f)(),
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
            s.jg();
        }, []),
        i.useEffect(() => {
            D && !l.tq && (0, d.M)(t, S.oC.ROLE_SUBSCRIPTIONS);
        }, [t, D]),
        l.tq && D)
    ) {
        let e = null == n ? y.J.NOT_GUILD_MEMBER : y.J.GUILD_NOT_ELIGIBLE;
        return (0, r.jsx)(y.z, { errorType: e });
    }
    return (0, r.jsxs)("div", {
        className: N.container,
        children: [
            (0, r.jsxs)(h.Z, {
                toolbar: (0, r.jsx)(i.Fragment, {}),
                className: N.headerBar,
                children: [
                    (0, r.jsx)(h.Z.Icon, {
                        icon: (0, o.GSL)(O.Z),
                        "aria-hidden": !0,
                    }),
                    (0, r.jsx)(h.Z.Title, { children: T.intl.string(T.t["KzCF/6"]) }),
                ],
            }),
            (0, r.jsx)("div", { id: C.v }),
            (0, r.jsx)("div", {
                className: N.content,
                children: P
                    ? (0, r.jsx)(o.u2D, {
                          className: N.scroller,
                          children: (0, r.jsx)("div", {
                              className: N.scrollerContent,
                              children: R ? (0, r.jsx)(o.$jN, {}) : (0, r.jsx)(v.Z, { guild: n }),
                          }),
                      })
                    : (0, r.jsx)(I.Z, {}),
            }),
        ],
    });
}
function P(e) {
    let { guildId: t } = e;
    return (0, r.jsx)(_.l, {
        guildId: t,
        refetchOnMount: !0,
        children: (0, r.jsx)(j, { guildId: t }),
    });
}
