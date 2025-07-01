(n.r(t), n.d(t, { default: () => V }), n(388685));
var r = n(255367),
    l = n(73800),
    i = n(120356),
    a = n.n(i),
    s = n(442837),
    o = n(481060),
    c = n(100527),
    d = n(906732),
    u = n(111028),
    m = n(252618),
    x = n(189357),
    h = n(693546),
    j = n(246364),
    b = n(697379),
    f = n(98493),
    p = n(412222),
    g = n(223312),
    v = n(571728),
    _ = n(473403),
    C = n(984370),
    T = n(703656),
    N = n(433355),
    E = n(592125),
    S = n(984933),
    I = n(430824),
    R = n(944486),
    O = n(384433),
    P = n(241559),
    y = n(575766),
    w = n(901066),
    A = n(987491),
    M = n(305473),
    Z = n(995596),
    k = n(937283),
    D = n(440857),
    L = n(707113),
    B = n(981631),
    G = n(176505),
    z = n(388032),
    F = n(86931),
    U = n(100658);
function q(e) {
    let { guild: t, previousChannel: n, currentTab: i, onTabSelect: a } = e,
        s = (0, b.W)(t.id),
        c = z.intl.string(z.t.oclz3d),
        d = z.intl.string(z.t.oclz3d);
    return (
        (0, m.Tt)({
            location: t.name,
            subsection: c
        }),
        (0, r.jsxs)(C.Z, {
            className: F.header,
            innerClassname: F.__invalid_innerHeader,
            channelId: G.oC.MEMBER_SAFETY,
            guildId: t.id,
            hideSearch: !0,
            toolbar:
                null != n
                    ? (0, r.jsx)(o.zxk, {
                          className: F.returnButton,
                          size: o.zxk.Sizes.SMALL,
                          look: o.zxk.Looks.OUTLINED,
                          color: o.zxk.Colors.PRIMARY,
                          onClick: () => {
                              null != n && (0, T.XU)(t.id, n.id);
                          },
                          children: (0, r.jsx)(o.Text, {
                              className: F.returnButtonText,
                              variant: 'text-xs/medium',
                              color: 'none',
                              children: z.intl.format(z.t.IX7oWl, {
                                  channelNameHook: () =>
                                      null == n
                                          ? null
                                          : (0, r.jsxs)(
                                                l.Fragment,
                                                {
                                                    children: [
                                                        (0, r.jsx)(_._W, {
                                                            className: F.returnIcon,
                                                            guild: t,
                                                            channel: n
                                                        }),
                                                        (0, r.jsx)(u.Z, {
                                                            children: (0, r.jsx)(o.Text, {
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
                (0, r.jsx)(C.Z.Icon, {
                    icon: o.BFJ,
                    'aria-hidden': !0
                }),
                (0, r.jsx)(C.Z.Title, { children: d }),
                s &&
                    (0, r.jsx)(Z.Z, {
                        guildId: t.id,
                        currentTab: i,
                        onTabSelect: a
                    })
            ]
        })
    );
}
function V(e) {
    var t;
    let { guildId: n } = e,
        i = null != (t = (0, v.A)({ guildId: n })) ? t : 0,
        [u, m] = l.useState(i > 0 ? O.e.PENDING : O.e.ALL_MEMBERS),
        b = (0, s.e7)([I.Z], () => I.Z.getGuild(n)),
        { analyticsLocations: _ } = (0, d.ZP)(c.Z.MEMBER_SAFETY_PAGE),
        C = (0, p.C)({ guildId: n }),
        { guildJoinRequests: Z } = (0, g.j)({
            guildId: n,
            applicationStatus: 'ALL_MEMBERS' === u ? j.wB.SUBMITTED : u,
            sortOrder: C
        });
    l.useEffect(() => {
        (null == b ? void 0 : b.hasFeature(B.oNc.MEMBER_VERIFICATION_MANUAL_APPROVAL)) || m(O.e.ALL_MEMBERS);
    }, [b]);
    let G = (0, P.n2)(n),
        z = (0, x.m)(n),
        V = (0, s.e7)([R.Z], () => R.Z.getLastSelectedChannelId(n)),
        J = (0, s.e7)([E.Z], () => E.Z.getChannel(V)),
        K = l.useRef(null);
    (0, y.n)(n);
    let { fetchNextPage: Y } = (0, f.m)({
            guildId: n,
            guildJoinRequests: Z
        }),
        H = l.useCallback(async () => {
            var e;
            if (u === O.e.ALL_MEMBERS) return;
            let t = null == (e = K.current) ? void 0 : e.getScrollerState();
            null != t && t.scrollHeight - t.scrollTop - t.offsetHeight < 200 && (await Y(C, u));
        }, [u, u, C, Y]),
        W = l.useCallback(
            async (e) => {
                u !== e && (m(e), h.Z.setSelectedGuildJoinRequest(n, null), 'ALL_MEMBERS' !== e && (await Y(C, e)));
            },
            [u, n, Y, C]
        );
    l.useEffect(() => {
        if (!G && null != b) {
            var e;
            let t = null == (e = S.ZP.getDefaultChannel(b.id)) ? void 0 : e.id;
            (0, T.XU)(b.id, t);
        }
    }, [b, G]);
    let X = (0, s.e7)([N.ZP], () => null != N.ZP.getGuildSidebarState(n), [n]);
    return null != b && G
        ? (0, r.jsxs)(d.Gt, {
              value: _,
              children: [
                  (0, r.jsxs)('div', {
                      className: a()(U.chat, F.page, { [U.threadSidebarOpen]: X }),
                      children: [
                          (0, r.jsx)(q, {
                              guild: b,
                              previousChannel: J,
                              currentTab: u,
                              onTabSelect: W
                          }),
                          (0, r.jsx)(o.Den, {
                              onScroll: H,
                              ref: K,
                              orientation: 'vertical',
                              children: (0, r.jsx)('div', {
                                  className: a()(U.content, F.container),
                                  children:
                                      u === O.e.ALL_MEMBERS
                                          ? (0, r.jsxs)(r.Fragment, {
                                                children: [(0, r.jsx)(M.Z, { guild: b }), (0, r.jsx)(L.Z, { guild: b })]
                                            })
                                          : (0, r.jsx)(A.Z, {
                                                guildId: b.id,
                                                currentTab: u
                                            })
                              })
                          }),
                          (0, r.jsx)(D.Z, { guildId: b.id })
                      ]
                  }),
                  z && (u === O.e.ALL_MEMBERS ? (0, r.jsx)(k.Z, { guildId: b.id }) : (0, r.jsx)(w.Z, { guildId: b.id }))
              ]
          })
        : null;
}
