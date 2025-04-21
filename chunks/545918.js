n.r(t), n.d(t, { default: () => K }), n(388685);
var r = n(200651),
    l = n(192379),
    i = n(120356),
    a = n.n(i),
    s = n(442837),
    o = n(481060),
    c = n(100527),
    d = n(906732),
    u = n(111028),
    m = n(252618),
    x = n(189432),
    h = n(189357),
    j = n(693546),
    b = n(246364),
    f = n(697379),
    p = n(98493),
    g = n(412222),
    _ = n(223312),
    v = n(571728),
    C = n(473403),
    T = n(984370),
    N = n(703656),
    E = n(171368),
    I = n(433355),
    S = n(592125),
    P = n(984933),
    O = n(430824),
    R = n(944486),
    y = n(384433),
    A = n(241559),
    w = n(575766),
    M = n(901066),
    Z = n(987491),
    k = n(305473),
    D = n(995596),
    L = n(937283),
    B = n(440857),
    G = n(707113),
    F = n(981631),
    z = n(176505),
    U = n(50493),
    q = n(388032),
    V = n(86931),
    J = n(100658);
function Y(e) {
    let { guild: t, previousChannel: n, currentTab: i, onTabSelect: a } = e,
        s = (0, f.W)(t.id),
        c = q.intl.string(q.t.oclz3d),
        d = q.intl.string(q.t.oclz3d);
    return (
        (0, m.Tt)({
            location: t.name,
            subsection: c
        }),
        (0, r.jsxs)(T.Z, {
            className: V.header,
            innerClassname: V.__invalid_innerHeader,
            channelId: z.oC.MEMBER_SAFETY,
            guildId: t.id,
            hideSearch: !0,
            toolbar:
                null != n
                    ? (0, r.jsx)(o.zxk, {
                          className: V.returnButton,
                          size: o.zxk.Sizes.SMALL,
                          look: o.zxk.Looks.OUTLINED,
                          color: o.zxk.Colors.PRIMARY,
                          onClick: () => {
                              null != n && (0, N.XU)(t.id, n.id);
                          },
                          children: (0, r.jsx)(o.Text, {
                              className: V.returnButtonText,
                              variant: 'text-xs/medium',
                              color: 'none',
                              children: q.intl.format(q.t.IX7oWl, {
                                  channelNameHook: () =>
                                      null == n
                                          ? null
                                          : (0, r.jsxs)(
                                                l.Fragment,
                                                {
                                                    children: [
                                                        (0, r.jsx)(C._W, {
                                                            className: V.returnIcon,
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
                (0, r.jsx)(T.Z.Icon, {
                    icon: o.BFJ,
                    'aria-hidden': !0
                }),
                (0, r.jsx)(T.Z.Title, { children: d }),
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
function K(e) {
    var t;
    let { guildId: n } = e,
        i = null != (t = (0, v.A)({ guildId: n })) ? t : 0,
        [u, m] = l.useState(i > 0 ? y.e.PENDING : y.e.ALL_MEMBERS),
        f = (0, s.e7)([O.Z], () => O.Z.getGuild(n)),
        { analyticsLocations: C } = (0, d.ZP)(c.Z.MEMBER_SAFETY_PAGE),
        T = (0, g.C)({ guildId: n }),
        { guildJoinRequests: D } = (0, _.j)({
            guildId: n,
            applicationStatus: 'ALL_MEMBERS' === u ? b.wB.SUBMITTED : u,
            sortOrder: T
        });
    l.useEffect(() => {
        (null == f ? void 0 : f.hasFeature(F.oNc.MEMBER_VERIFICATION_MANUAL_APPROVAL)) || m(y.e.ALL_MEMBERS);
    }, [f]);
    let q = (0, A.n2)(n),
        K = (0, h.m)(n),
        H = (0, s.e7)([R.Z], () => R.Z.getLastSelectedChannelId(n)),
        X = (0, s.e7)([S.Z], () => S.Z.getChannel(H)),
        W = l.useRef(null);
    (0, w.n)(n);
    let { fetchNextPage: Q } = (0, p.m)({
            guildId: n,
            guildJoinRequests: D
        }),
        $ = l.useCallback(async () => {
            var e;
            if (u === y.e.ALL_MEMBERS) return;
            let t = null == (e = W.current) ? void 0 : e.getScrollerState();
            null != t && t.scrollHeight - t.scrollTop - t.offsetHeight < 200 && (await Q(T, u));
        }, [u, u, T, Q]),
        ee = l.useCallback(
            async (e) => {
                u !== e && (m(e), j.Z.setSelectedGuildJoinRequest(n, null), 'ALL_MEMBERS' !== e && (await Q(T, e)));
            },
            [u, n, Q, T]
        );
    l.useEffect(() => {
        if (!q && null != f) {
            var e;
            let t = null == (e = P.ZP.getDefaultChannel(f.id)) ? void 0 : e.id;
            (0, N.XU)(f.id, t);
        }
    }, [f, q]);
    let et = (0, s.e7)([I.ZP], () => null != I.ZP.getGuildSidebarState(n), [n]),
        en = l.useCallback(
            (e) => {
                (0, h.Y)(e.guildId)
                    ? (0, x.r)(e.guildId, e.userId, z.oC.MEMBER_SAFETY, { modViewPanel: U.k.INFO })
                    : (0, E.openUserProfileModal)({
                          userId: e.userId,
                          guildId: e.guildId,
                          sourceAnalyticsLocations: C,
                          analyticsLocation: { section: F.jXE.MEMBER_SAFETY_PAGE }
                      });
            },
            [C]
        );
    if (null == f || !q) return null;
    let er =
            u === y.e.ALL_MEMBERS
                ? (0, r.jsxs)(r.Fragment, {
                      children: [
                          (0, r.jsx)(k.Z, { guild: f }),
                          (0, r.jsx)(G.Z, {
                              guild: f,
                              onMemberSelect: en
                          })
                      ]
                  })
                : (0, r.jsx)(Z.Z, {
                      guildId: f.id,
                      currentTab: u
                  }),
        el = u === y.e.ALL_MEMBERS ? (0, r.jsx)(L.Z, { guildId: f.id }) : (0, r.jsx)(M.Z, { guildId: f.id });
    return (0, r.jsxs)(d.Gt, {
        value: C,
        children: [
            (0, r.jsxs)('div', {
                className: a()(J.chat, V.page, { [J.threadSidebarOpen]: et }),
                children: [
                    (0, r.jsx)(Y, {
                        guild: f,
                        previousChannel: X,
                        currentTab: u,
                        onTabSelect: ee
                    }),
                    (0, r.jsx)(o.Den, {
                        onScroll: $,
                        ref: W,
                        orientation: 'vertical',
                        children: (0, r.jsx)('div', {
                            className: a()(J.content, V.container),
                            children: er
                        })
                    }),
                    (0, r.jsx)(B.Z, { guildId: f.id })
                ]
            }),
            K && el
        ]
    });
}
