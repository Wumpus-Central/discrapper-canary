n.d(t, { Z: () => L });
var i = n(200651),
    l = n(192379),
    r = n(873546),
    a = n(442837),
    s = n(481060),
    o = n(355467),
    c = n(270237),
    d = n(252618),
    u = n(423000),
    h = n(200876),
    m = n(674180),
    p = n(38618),
    g = n(984370),
    _ = n(430824),
    f = n(351402),
    E = n(730647),
    I = n(772021),
    C = n(396828),
    N = n(293423),
    v = n(20967),
    T = n(504762),
    S = n(807152),
    A = n(176505),
    b = n(388032),
    Z = n(255653);
function x(e) {
    let { guildId: t } = e,
        n = (0, a.e7)([_.Z], () => _.Z.getGuild(t), [t]),
        x = (0, a.e7)([p.Z], () => p.Z.isConnected()),
        L = (0, h.Z)(t),
        y = (0, I.Z)(t),
        P = (0, a.e7)([f.Z], () => f.Z.isSubscriptionFetching),
        O = (0, E.f)(),
        { shouldHideGuildPurchaseEntryPoints: R, restrictionsLoading: j } = (0, m.uP)(t),
        D = null == n || !O || P || j;
    (0, d.Tt)({
        subsection: b.intl.string(b.t['KzCF//']),
        location: null == n ? void 0 : n.name
    }),
        (0, c.Z)(r.tq ? 'role-subscriptions-overview' : void 0);
    let w = x && (null == n || !(L || y) || (R && !j));
    if (
        (l.useEffect(() => {
            o.jg();
        }, []),
        l.useEffect(() => {
            w && !r.tq && (0, u.M)(t, A.oC.ROLE_SUBSCRIPTIONS);
        }, [t, w]),
        r.tq && w)
    ) {
        let e = null == n ? v.J.NOT_GUILD_MEMBER : v.J.GUILD_NOT_ELIGIBLE;
        return (0, i.jsx)(v.z, { errorType: e });
    }
    return (0, i.jsxs)('div', {
        className: Z.container,
        children: [
            (0, i.jsxs)(g.Z, {
                toolbar: (0, i.jsx)(l.Fragment, {}),
                className: Z.headerBar,
                children: [
                    (0, i.jsx)(g.Z.Icon, {
                        icon: (0, s.GSL)(C.Z),
                        'aria-hidden': !0
                    }),
                    (0, i.jsx)(g.Z.Title, { children: b.intl.string(b.t['KzCF//']) })
                ]
            }),
            (0, i.jsx)('div', { id: S.v }),
            (0, i.jsx)('div', {
                className: Z.content,
                children: L
                    ? (0, i.jsx)(s.u2D, {
                          className: Z.scroller,
                          children: (0, i.jsx)('div', {
                              className: Z.scrollerContent,
                              children: D ? (0, i.jsx)(s.$jN, {}) : (0, i.jsx)(N.Z, { guild: n })
                          })
                      })
                    : (0, i.jsx)(T.Z, {})
            })
        ]
    });
}
function L(e) {
    let { guildId: t } = e;
    return (0, i.jsx)(E.l, {
        guildId: t,
        refetchOnMount: !0,
        children: (0, i.jsx)(x, { guildId: t })
    });
}
