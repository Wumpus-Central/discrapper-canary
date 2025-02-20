n.d(t, { Z: () => j });
var r = n(200651),
    i = n(192379),
    l = n(873546),
    o = n(442837),
    a = n(481060),
    s = n(355467),
    c = n(270237),
    u = n(252618),
    d = n(423000),
    p = n(200876),
    h = n(674180),
    g = n(38618),
    f = n(984370),
    m = n(430824),
    b = n(351402),
    _ = n(730647),
    E = n(772021),
    O = n(396828),
    N = n(293423),
    v = n(20967),
    y = n(504762),
    I = n(807152),
    C = n(176505),
    S = n(388032),
    T = n(985167);
function P(e) {
    let { guildId: t } = e,
        n = (0, o.e7)([m.Z], () => m.Z.getGuild(t), [t]),
        P = (0, o.e7)([g.Z], () => g.Z.isConnected()),
        j = (0, p.Z)(t),
        A = (0, E.Z)(t),
        Z = (0, o.e7)([b.Z], () => b.Z.isSubscriptionFetching),
        x = (0, _.f)(),
        { shouldHideGuildPurchaseEntryPoints: L, restrictionsLoading: w } = (0, h.uP)(t),
        R = null == n || !x || Z || w;
    (0, u.Tt)({
        subsection: S.NW.string(S.t['KzCF//']),
        location: null == n ? void 0 : n.name
    }),
        (0, c.Z)(l.tq ? 'role-subscriptions-overview' : void 0);
    let D = P && (null == n || !(j || A) || (L && !w));
    if (
        (i.useEffect(() => {
            s.jg();
        }, []),
        i.useEffect(() => {
            D && !l.tq && (0, d.M)(t, C.oC.ROLE_SUBSCRIPTIONS);
        }, [t, D]),
        l.tq && D)
    ) {
        let e = null == n ? v.J.NOT_GUILD_MEMBER : v.J.GUILD_NOT_ELIGIBLE;
        return (0, r.jsx)(v.z, { errorType: e });
    }
    return (0, r.jsxs)('div', {
        className: T.container,
        children: [
            (0, r.jsxs)(f.Z, {
                toolbar: (0, r.jsx)(i.Fragment, {}),
                className: T.headerBar,
                children: [
                    (0, r.jsx)(f.Z.Icon, {
                        icon: (0, a.GSL)(O.Z),
                        'aria-hidden': !0
                    }),
                    (0, r.jsx)(f.Z.Title, { children: S.NW.string(S.t['KzCF//']) })
                ]
            }),
            (0, r.jsx)('div', { id: I.v }),
            (0, r.jsx)('div', {
                className: T.content,
                children: j
                    ? (0, r.jsx)(a.u2D, {
                          className: T.scroller,
                          children: (0, r.jsx)('div', {
                              className: T.scrollerContent,
                              children: R ? (0, r.jsx)(a.$jN, {}) : (0, r.jsx)(N.Z, { guild: n })
                          })
                      })
                    : (0, r.jsx)(y.Z, {})
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
