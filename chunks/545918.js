n.r(t), n.d(t, { default: () => K }), n(388685);
var r = n(200651),
    l = n(192379),
    i = n(120356),
    a = n.n(i),
    o = n(442837),
    s = n(481060),
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
    N = n(412222),
    g = n(223312),
    C = n(571728),
    _ = n(473403),
    v = n(984370),
    E = n(703656),
    T = n(171368),
    I = n(433355),
    S = n(592125),
    y = n(984933),
    R = n(430824),
    O = n(944486),
    P = n(384433),
    w = n(241559),
    M = n(575766),
    A = n(901066),
    Z = n(987491),
    k = n(305473),
    D = n(995596),
    L = n(937283),
    B = n(440857),
    W = n(707113),
    G = n(981631),
    F = n(176505),
    z = n(50493),
    U = n(388032),
    q = n(86931),
    J = n(100658);
function Y(e) {
    let { guild: t, previousChannel: n, currentTab: i, onTabSelect: a } = e,
        o = (0, f.W)(t.id),
        c = U.NW.string(U.t.oclz3d),
        d = U.NW.string(U.t.oclz3d);
    return (
        (0, m.Tt)({
            location: t.name,
            subsection: c
        }),
        (0, r.jsxs)(v.Z, {
            className: q.header,
            innerClassname: q.__invalid_innerHeader,
            channelId: F.oC.MEMBER_SAFETY,
            guildId: t.id,
            hideSearch: !0,
            toolbar:
                null != n
                    ? (0, r.jsx)(s.zxk, {
                          className: q.returnButton,
                          size: s.zxk.Sizes.SMALL,
                          look: s.zxk.Looks.OUTLINED,
                          color: s.zxk.Colors.PRIMARY,
                          onClick: () => {
                              null != n && (0, E.XU)(t.id, n.id);
                          },
                          children: (0, r.jsx)(s.Text, {
                              className: q.returnButtonText,
                              variant: 'text-xs/medium',
                              color: 'none',
                              children: U.NW.format(U.t.IX7oWl, {
                                  channelNameHook: () =>
                                      null == n
                                          ? null
                                          : (0, r.jsxs)(
                                                l.Fragment,
                                                {
                                                    children: [
                                                        (0, r.jsx)(_._W, {
                                                            className: q.returnIcon,
                                                            guild: t,
                                                            channel: n
                                                        }),
                                                        (0, r.jsx)(u.Z, {
                                                            children: (0, r.jsx)(s.Text, {
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
                (0, r.jsx)(v.Z.Icon, {
                    icon: s.BFJ,
                    'aria-hidden': !0
                }),
                (0, r.jsx)(v.Z.Title, { children: d }),
                o &&
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
        i = null != (t = (0, C.A)({ guildId: n })) ? t : 0,
        [u, m] = l.useState(i > 0 ? P.e.PENDING : P.e.ALL_MEMBERS),
        f = (0, o.e7)([R.Z], () => R.Z.getGuild(n)),
        { analyticsLocations: _ } = (0, d.ZP)(c.Z.MEMBER_SAFETY_PAGE),
        v = (0, N.C)({ guildId: n }),
        { guildJoinRequests: D } = (0, g.j)({
            guildId: n,
            applicationStatus: 'ALL_MEMBERS' === u ? b.wB.SUBMITTED : u,
            sortOrder: v
        });
    l.useEffect(() => {
        (null == f ? void 0 : f.hasFeature(G.oNc.MEMBER_VERIFICATION_MANUAL_APPROVAL)) || m(P.e.ALL_MEMBERS);
    }, [f]);
    let U = (0, w.n2)(n),
        K = (0, h.m)(n),
        V = (0, o.e7)([O.Z], () => O.Z.getLastSelectedChannelId(n)),
        H = (0, o.e7)([S.Z], () => S.Z.getChannel(V)),
        X = l.useRef(null);
    (0, M.n)(n);
    let { fetchNextPage: Q } = (0, p.m)({
            guildId: n,
            guildJoinRequests: D
        }),
        $ = l.useCallback(async () => {
            var e;
            if (u === P.e.ALL_MEMBERS) return;
            let t = null == (e = X.current) ? void 0 : e.getScrollerState();
            null != t && t.scrollHeight - t.scrollTop - t.offsetHeight < 200 && (await Q(v, u));
        }, [u, u, v, Q]),
        ee = l.useCallback(
            async (e) => {
                u !== e && (m(e), j.Z.setSelectedGuildJoinRequest(n, null), 'ALL_MEMBERS' !== e && (await Q(v, e)));
            },
            [u, n, Q, v]
        );
    l.useEffect(() => {
        if (!U && null != f) {
            var e;
            let t = null == (e = y.ZP.getDefaultChannel(f.id)) ? void 0 : e.id;
            (0, E.XU)(f.id, t);
        }
    }, [f, U]);
    let et = (0, o.e7)([I.ZP], () => null != I.ZP.getGuildSidebarState(n), [n]),
        en = l.useCallback(
            (e) => {
                (0, h.Y)(e.guildId)
                    ? (0, x.r)(e.guildId, e.userId, F.oC.MEMBER_SAFETY, { modViewPanel: z.k.INFO })
                    : (0, T.openUserProfileModal)({
                          userId: e.userId,
                          guildId: e.guildId,
                          sourceAnalyticsLocations: _,
                          analyticsLocation: { section: G.jXE.MEMBER_SAFETY_PAGE }
                      });
            },
            [_]
        );
    if (null == f || !U) return null;
    let er =
            u === P.e.ALL_MEMBERS
                ? (0, r.jsxs)(r.Fragment, {
                      children: [
                          (0, r.jsx)(k.Z, { guild: f }),
                          (0, r.jsx)(W.Z, {
                              guild: f,
                              onMemberSelect: en
                          })
                      ]
                  })
                : (0, r.jsx)(Z.Z, {
                      guildId: f.id,
                      currentTab: u
                  }),
        el = u === P.e.ALL_MEMBERS ? (0, r.jsx)(L.Z, { guildId: f.id }) : (0, r.jsx)(A.Z, { guildId: f.id });
    return (0, r.jsxs)(d.Gt, {
        value: _,
        children: [
            (0, r.jsxs)('div', {
                className: a()(J.chat, q.page, { [J.threadSidebarOpen]: et }),
                children: [
                    (0, r.jsx)(Y, {
                        guild: f,
                        previousChannel: H,
                        currentTab: u,
                        onTabSelect: ee
                    }),
                    (0, r.jsx)(s.Den, {
                        onScroll: $,
                        ref: X,
                        orientation: 'vertical',
                        children: (0, r.jsx)('div', {
                            className: a()(J.content, q.container),
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
