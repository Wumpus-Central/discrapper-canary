n.d(t, { Z: () => j });
var r = n(255367),
    i = n(73800),
    l = n(873546),
    a = n(442837),
    o = n(481060),
    s = n(355467),
    c = n(270237),
    u = n(252618),
    d = n(423000),
    p = n(200876),
    h = n(674180),
    f = n(38618),
    g = n(984370),
    m = n(430824),
    b = n(351402),
    _ = n(730647),
    E = n(772021),
    O = n(396828),
    y = n(293423),
    I = n(20967),
    v = n(504762),
    C = n(807152),
    S = n(176505),
    N = n(388032),
    T = n(86492);
function P(e) {
    let { guildId: t } = e,
        n = (0, a.e7)([m.Z], () => m.Z.getGuild(t), [t]),
        P = (0, a.e7)([f.Z], () => f.Z.isConnected()),
        j = (0, p.Z)(t),
        A = (0, E.Z)(t),
        Z = (0, a.e7)([b.Z], () => b.Z.isSubscriptionFetching),
        x = (0, _.f)(),
        { shouldHideGuildPurchaseEntryPoints: w, restrictionsLoading: L } = (0, h.uP)(t),
        R = null == n || !x || Z || L;
    (0, u.Tt)({
        subsection: N.intl.string(N.t['KzCF//']),
        location: null == n ? void 0 : n.name
    }),
        (0, c.Z)(l.tq ? 'role-subscriptions-overview' : void 0);
    let D = P && (null == n || !(j || A) || (w && !L));
    if (
        (i.useEffect(() => {
            s.jg();
        }, []),
        i.useEffect(() => {
            D && !l.tq && (0, d.M)(t, S.oC.ROLE_SUBSCRIPTIONS);
        }, [t, D]),
        l.tq && D)
    ) {
        let e = null == n ? I.J.NOT_GUILD_MEMBER : I.J.GUILD_NOT_ELIGIBLE;
        return (0, r.jsx)(I.z, { errorType: e });
    }
    return (0, r.jsxs)('div', {
        className: T.container,
        children: [
            (0, r.jsxs)(g.Z, {
                toolbar: (0, r.jsx)(i.Fragment, {}),
                className: T.headerBar,
                children: [
                    (0, r.jsx)(g.Z.Icon, {
                        icon: (0, o.GSL)(O.Z),
                        'aria-hidden': !0
                    }),
                    (0, r.jsx)(g.Z.Title, { children: N.intl.string(N.t['KzCF//']) })
                ]
            }),
            (0, r.jsx)('div', { id: C.v }),
            (0, r.jsx)('div', {
                className: T.content,
                children: j
                    ? (0, r.jsx)(o.u2D, {
                          className: T.scroller,
                          children: (0, r.jsx)('div', {
                              className: T.scrollerContent,
                              children: R ? (0, r.jsx)(o.$jN, {}) : (0, r.jsx)(y.Z, { guild: n })
                          })
                      })
                    : (0, r.jsx)(v.Z, {})
            })
        ]
    });
}
function j(e) {
    let { guildId: t } = e;
    return (0, r.jsx)(_.l, {
        guildId: t,
        refetchOnMount: !0,
        children: (0, r.jsx)(P, { guildId: t })
    });
}
