(n.r(t), n.d(t, { default: () => J }), n(388685));
var r = n(255367),
    l = n(73800),
    i = n(120356),
    a = n.n(i),
    s = n(442837),
    o = n(755721),
    c = n(481060),
    d = n(100527),
    u = n(906732),
    m = n(111028),
    x = n(252618),
    h = n(189357),
    j = n(693546),
    b = n(246364),
    f = n(697379),
    p = n(98493),
    g = n(412222),
    v = n(223312),
    _ = n(571728),
    C = n(473403),
    T = n(984370),
    N = n(703656),
    E = n(433355),
    S = n(592125),
    I = n(984933),
    O = n(430824),
    P = n(944486),
    R = n(384433),
    y = n(241559),
    w = n(575766),
    A = n(901066),
    Z = n(987491),
    M = n(305473),
    D = n(995596),
    k = n(937283),
    L = n(440857),
    B = n(707113),
    G = n(981631),
    z = n(176505),
    F = n(388032),
    U = n(86931),
    q = n(100658);
function V(e) {
    let { guild: t, previousChannel: n, currentTab: i, onTabSelect: a } = e,
        s = (0, f.W)(t.id),
        d = F.intl.string(F.t.oclz3d),
        u = F.intl.string(F.t.oclz3d);
    return (
        (0, x.Tt)({
            location: t.name,
            subsection: d
        }),
        (0, r.jsxs)(T.Z, {
            className: U.header,
            innerClassname: U.__invalid_innerHeader,
            channelId: z.oC.MEMBER_SAFETY,
            guildId: t.id,
            hideSearch: !0,
            toolbar:
                null != n
                    ? (0, r.jsx)(o.zx, {
                          className: U.returnButton,
                          size: o.zx.Sizes.SMALL,
                          look: o.zx.Looks.OUTLINED,
                          color: o.zx.Colors.PRIMARY,
                          onClick: () => {
                              null != n && (0, N.XU)(t.id, n.id);
                          },
                          children: (0, r.jsx)(c.Text, {
                              className: U.returnButtonText,
                              variant: 'text-xs/medium',
                              color: 'none',
                              children: F.intl.format(F.t.IX7oWl, {
                                  channelNameHook: () =>
                                      null == n
                                          ? null
                                          : (0, r.jsxs)(
                                                l.Fragment,
                                                {
                                                    children: [
                                                        (0, r.jsx)(C._W, {
                                                            className: U.returnIcon,
                                                            guild: t,
                                                            channel: n
                                                        }),
                                                        (0, r.jsx)(m.Z, {
                                                            children: (0, r.jsx)(c.Text, {
                                                                variant: 'text-xs/medium',
                                                                color: 'none',
                                                                children: n.name
                                                            })
                                                        })
                                                    ]
                                                },
                                                n.id
                                            )
                              })
                          })
                      })
                    : (0, r.jsx)('div', {}),
            children: [
                (0, r.jsx)(T.Z.Icon, {
                    icon: c.BFJ,
                    'aria-hidden': !0
                }),
                (0, r.jsx)(T.Z.Title, { children: u }),
                s &&
                    (0, r.jsx)(D.Z, {
                        guildId: t.id,
                        currentTab: i,
                        onTabSelect: a
                    })
            ]
        })
    );
}
function J(e) {
    var t;
    let { guildId: n } = e,
        i = null != (t = (0, _.A)({ guildId: n })) ? t : 0,
        [o, m] = l.useState(i > 0 ? R.e.PENDING : R.e.ALL_MEMBERS),
        x = (0, s.e7)([O.Z], () => O.Z.getGuild(n)),
        { analyticsLocations: f } = (0, u.ZP)(d.Z.MEMBER_SAFETY_PAGE),
        C = (0, g.C)({ guildId: n }),
        { guildJoinRequests: T } = (0, v.j)({
            guildId: n,
            applicationStatus: 'ALL_MEMBERS' === o ? b.wB.SUBMITTED : o,
            sortOrder: C
        });
    l.useEffect(() => {
        (null == x ? void 0 : x.features.has(G.oNc.MEMBER_VERIFICATION_MANUAL_APPROVAL)) || m(R.e.ALL_MEMBERS);
    }, [x]);
    let D = (0, y.n2)(n),
        z = (0, h.m)(n),
        F = (0, s.e7)([P.Z], () => P.Z.getLastSelectedChannelId(n)),
        J = (0, s.e7)([S.Z], () => S.Z.getChannel(F)),
        K = l.useRef(null);
    (0, w.n)(n);
    let { fetchNextPage: Y } = (0, p.m)({
            guildId: n,
            guildJoinRequests: T
        }),
        H = l.useCallback(async () => {
            var e;
            if (o === R.e.ALL_MEMBERS) return;
            let t = null == (e = K.current) ? void 0 : e.getScrollerState();
            null != t && t.scrollHeight - t.scrollTop - t.offsetHeight < 200 && (await Y(C, o));
        }, [o, o, C, Y]),
        W = l.useCallback(
            async (e) => {
                o !== e && (m(e), j.Z.setSelectedGuildJoinRequest(n, null), 'ALL_MEMBERS' !== e && (await Y(C, e)));
            },
            [o, n, Y, C]
        );
    l.useEffect(() => {
        if (!D && null != x) {
            var e;
            let t = null == (e = I.ZP.getDefaultChannel(x.id)) ? void 0 : e.id;
            (0, N.XU)(x.id, t);
        }
    }, [x, D]);
    let X = (0, s.e7)([E.ZP], () => null != E.ZP.getGuildSidebarState(n), [n]);
    return null != x && D
        ? (0, r.jsxs)(u.Gt, {
              value: f,
              children: [
                  (0, r.jsxs)('div', {
                      className: a()(q.chat, U.page, { [q.threadSidebarOpen]: X }),
                      children: [
                          (0, r.jsx)(V, {
                              guild: x,
                              previousChannel: J,
                              currentTab: o,
                              onTabSelect: W
                          }),
                          (0, r.jsx)(c.Den, {
                              onScroll: H,
                              ref: K,
                              orientation: 'vertical',
                              children: (0, r.jsx)('div', {
                                  className: a()(q.content, U.container),
                                  children:
                                      o === R.e.ALL_MEMBERS
                                          ? (0, r.jsxs)(r.Fragment, {
                                                children: [(0, r.jsx)(M.Z, { guild: x }), (0, r.jsx)(B.Z, { guild: x })]
                                            })
                                          : (0, r.jsx)(Z.Z, {
                                                guildId: x.id,
                                                currentTab: o
                                            })
                              })
                          }),
                          (0, r.jsx)(L.Z, { guildId: x.id })
                      ]
                  }),
                  z && (o === R.e.ALL_MEMBERS ? (0, r.jsx)(k.Z, { guildId: x.id }) : (0, r.jsx)(A.Z, { guildId: x.id }))
              ]
          })
        : null;
}
