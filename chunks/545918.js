n.r(t), n.d(t, { default: () => Y }), n(388685);
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
    N = n(98493),
    p = n(412222),
    C = n(223312),
    g = n(571728),
    v = n(473403),
    _ = n(984370),
    T = n(703656),
    E = n(171368),
    I = n(433355),
    S = n(592125),
    y = n(984933),
    R = n(430824),
    O = n(944486),
    P = n(384433),
    w = n(241559),
    A = n(575766),
    M = n(901066),
    Z = n(987491),
    k = n(305473),
    D = n(995596),
    L = n(937283),
    B = n(440857),
    W = n(707113),
    F = n(981631),
    G = n(176505),
    z = n(50493),
    q = n(388032),
    U = n(86931),
    K = n(100658);
function J(e) {
    let { guild: t, previousChannel: n, currentTab: i, onTabSelect: a } = e,
        s = (0, f.W)(t.id),
        c = q.NW.string(q.t.oclz3d),
        d = q.NW.string(q.t.oclz3d);
    return (
        (0, m.Tt)({
            location: t.name,
            subsection: c
        }),
        (0, r.jsxs)(_.Z, {
            className: U.header,
            innerClassname: U.__invalid_innerHeader,
            channelId: G.oC.MEMBER_SAFETY,
            guildId: t.id,
            hideSearch: !0,
            toolbar:
                null != n
                    ? (0, r.jsx)(o.zxk, {
                          className: U.returnButton,
                          size: o.zxk.Sizes.SMALL,
                          look: o.zxk.Looks.OUTLINED,
                          color: o.zxk.Colors.PRIMARY,
                          onClick: () => {
                              null != n && (0, T.XU)(t.id, n.id);
                          },
                          children: (0, r.jsx)(o.Text, {
                              className: U.returnButtonText,
                              variant: 'text-xs/medium',
                              color: 'none',
                              children: q.NW.format(q.t.IX7oWl, {
                                  channelNameHook: () =>
                                      null == n
                                          ? null
                                          : (0, r.jsxs)(
                                                l.Fragment,
                                                {
                                                    children: [
                                                        (0, r.jsx)(v._W, {
                                                            className: U.returnIcon,
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
                (0, r.jsx)(_.Z.Icon, {
                    icon: o.BFJ,
                    'aria-hidden': !0
                }),
                (0, r.jsx)(_.Z.Title, { children: d }),
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
function Y(e) {
    var t;
    let { guildId: n } = e,
        i = null != (t = (0, g.A)({ guildId: n })) ? t : 0,
        [u, m] = l.useState(i > 0 ? P.e.PENDING : P.e.ALL_MEMBERS),
        f = (0, s.e7)([R.Z], () => R.Z.getGuild(n)),
        { analyticsLocations: v } = (0, d.ZP)(c.Z.MEMBER_SAFETY_PAGE),
        _ = (0, p.C)({ guildId: n }),
        { guildJoinRequests: D } = (0, C.j)({
            guildId: n,
            applicationStatus: 'ALL_MEMBERS' === u ? b.wB.SUBMITTED : u,
            sortOrder: _
        });
    l.useEffect(() => {
        (null == f ? void 0 : f.hasFeature(F.oNc.MEMBER_VERIFICATION_MANUAL_APPROVAL)) || m(P.e.ALL_MEMBERS);
    }, [f]);
    let q = (0, w.n2)(n),
        Y = (0, h.m)(n),
        V = (0, s.e7)([O.Z], () => O.Z.getLastSelectedChannelId(n)),
        H = (0, s.e7)([S.Z], () => S.Z.getChannel(V)),
        X = l.useRef(null);
    (0, A.n)(n);
    let { fetchNextPage: Q } = (0, N.m)({
            guildId: n,
            guildJoinRequests: D
        }),
        $ = l.useCallback(async () => {
            var e;
            if (u === P.e.ALL_MEMBERS) return;
            let t = null == (e = X.current) ? void 0 : e.getScrollerState();
            null != t && t.scrollHeight - t.scrollTop - t.offsetHeight < 200 && (await Q(_, u));
        }, [u, u, _, Q]),
        ee = l.useCallback(
            async (e) => {
                u !== e && (m(e), j.Z.setSelectedGuildJoinRequest(n, null), 'ALL_MEMBERS' !== e && (await Q(_, e)));
            },
            [u, n, Q, _]
        );
    l.useEffect(() => {
        if (!q && null != f) {
            var e;
            let t = null == (e = y.ZP.getDefaultChannel(f.id)) ? void 0 : e.id;
            (0, T.XU)(f.id, t);
        }
    }, [f, q]);
    let et = (0, s.e7)([I.ZP], () => null != I.ZP.getGuildSidebarState(n), [n]),
        en = l.useCallback(
            (e) => {
                (0, h.Y)(e.guildId)
                    ? (0, x.r)(e.guildId, e.userId, G.oC.MEMBER_SAFETY, { modViewPanel: z.k.INFO })
                    : (0, E.openUserProfileModal)({
                          userId: e.userId,
                          guildId: e.guildId,
                          sourceAnalyticsLocations: v,
                          analyticsLocation: { section: F.jXE.MEMBER_SAFETY_PAGE }
                      });
            },
            [v]
        );
    if (null == f || !q) return null;
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
        el = u === P.e.ALL_MEMBERS ? (0, r.jsx)(L.Z, { guildId: f.id }) : (0, r.jsx)(M.Z, { guildId: f.id });
    return (0, r.jsxs)(d.Gt, {
        value: v,
        children: [
            (0, r.jsxs)('div', {
                className: a()(K.chat, U.page, { [K.threadSidebarOpen]: et }),
                children: [
                    (0, r.jsx)(J, {
                        guild: f,
                        previousChannel: H,
                        currentTab: u,
                        onTabSelect: ee
                    }),
                    (0, r.jsx)(o.Den, {
                        onScroll: $,
                        ref: X,
                        orientation: 'vertical',
                        children: (0, r.jsx)('div', {
                            className: a()(K.content, U.container),
                            children: er
                        })
                    }),
                    (0, r.jsx)(B.Z, { guildId: f.id })
                ]
            }),
            Y && el
        ]
    });
}
