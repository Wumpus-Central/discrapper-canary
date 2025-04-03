n.r(t), n.d(t, { default: () => Q }), n(47120);
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
    b = n(63568),
    f = n(246364),
    N = n(697379),
    p = n(98493),
    C = n(412222),
    _ = n(223312),
    g = n(571728),
    v = n(473403),
    T = n(984370),
    E = n(703656),
    I = n(171368),
    S = n(433355),
    y = n(592125),
    R = n(984933),
    P = n(430824),
    O = n(944486),
    w = n(384433),
    M = n(241559),
    A = n(575766),
    Z = n(901066),
    k = n(987491),
    D = n(305473),
    L = n(995596),
    B = n(937283),
    F = n(440857),
    W = n(707113),
    G = n(981631),
    q = n(176505),
    z = n(50493),
    U = n(388032),
    J = n(86931),
    K = n(100658);
function Y(e) {
    let { guild: t, previousChannel: n, currentTab: i, onTabSelect: a } = e,
        s = (0, b.jS)(t.id, 'Member Safety Page'),
        c = (0, N.W)(t.id),
        d = U.NW.string(U.t.oclz3d),
        x = U.NW.string(U.t.oclz3d);
    return (
        (0, m.Tt)({
            location: t.name,
            subsection: d
        }),
        (0, r.jsxs)(T.Z, {
            className: J.header,
            innerClassname: J.__invalid_innerHeader,
            channelId: q.oC.MEMBER_SAFETY,
            guildId: t.id,
            hideSearch: !0,
            toolbar:
                null != n
                    ? (0, r.jsx)(o.zxk, {
                          className: J.returnButton,
                          size: o.zxk.Sizes.SMALL,
                          look: o.zxk.Looks.OUTLINED,
                          color: o.zxk.Colors.PRIMARY,
                          onClick: () => {
                              null != n && (0, E.XU)(t.id, n.id);
                          },
                          children: (0, r.jsx)(o.Text, {
                              className: J.returnButtonText,
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
                                                        (0, r.jsx)(v._W, {
                                                            className: J.returnIcon,
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
                (0, r.jsx)(T.Z.Title, { children: x }),
                s &&
                    c &&
                    (0, r.jsx)(L.Z, {
                        guildId: t.id,
                        currentTab: i,
                        onTabSelect: a
                    })
            ]
        })
    );
}
function Q(e) {
    var t;
    let { guildId: n } = e,
        i = null != (t = (0, g.A)({ guildId: n })) ? t : 0,
        u = (0, b.jS)(n, 'Member Safety Page'),
        [m, N] = l.useState(u && i > 0 ? w.e.PENDING : w.e.ALL_MEMBERS),
        v = (0, s.e7)([P.Z], () => P.Z.getGuild(n)),
        { analyticsLocations: T } = (0, d.ZP)(c.Z.MEMBER_SAFETY_PAGE),
        L = (0, C.C)({ guildId: n }),
        { guildJoinRequests: U } = (0, _.j)({
            guildId: n,
            applicationStatus: 'ALL_MEMBERS' === m ? f.wB.SUBMITTED : m,
            sortOrder: L
        });
    l.useEffect(() => {
        (null == v ? void 0 : v.hasFeature(G.oNc.MEMBER_VERIFICATION_MANUAL_APPROVAL)) || N(w.e.ALL_MEMBERS);
    }, [v]);
    let Q = (0, M.n2)(n),
        H = (0, h.m)(n),
        V = (0, s.e7)([O.Z], () => O.Z.getLastSelectedChannelId(n)),
        X = (0, s.e7)([y.Z], () => y.Z.getChannel(V)),
        $ = l.useRef(null);
    (0, A.n)(n);
    let { fetchNextPage: ee } = (0, p.m)({
            guildId: n,
            guildJoinRequests: U
        }),
        et = l.useCallback(async () => {
            var e;
            if (m === w.e.ALL_MEMBERS) return;
            let t = null == (e = $.current) ? void 0 : e.getScrollerState();
            null != t && t.scrollHeight - t.scrollTop - t.offsetHeight < 200 && (await ee(L, m));
        }, [m, m, L, ee]),
        en = l.useCallback(
            async (e) => {
                m !== e && u && (N(e), j.Z.setSelectedGuildJoinRequest(n, null), 'ALL_MEMBERS' !== e && (await ee(L, e)));
            },
            [m, u, n, ee, L]
        );
    l.useEffect(() => {
        if (!Q && null != v) {
            var e;
            let t = null == (e = R.ZP.getDefaultChannel(v.id)) ? void 0 : e.id;
            (0, E.XU)(v.id, t);
        }
    }, [v, Q]);
    let er = (0, s.e7)([S.ZP], () => null != S.ZP.getGuildSidebarState(n), [n]),
        el = l.useCallback(
            (e) => {
                (0, h.Y)(e.guildId)
                    ? (0, x.r)(e.guildId, e.userId, q.oC.MEMBER_SAFETY, { modViewPanel: z.k.INFO })
                    : (0, I.openUserProfileModal)({
                          userId: e.userId,
                          guildId: e.guildId,
                          sourceAnalyticsLocations: T,
                          analyticsLocation: { section: G.jXE.MEMBER_SAFETY_PAGE }
                      });
            },
            [T]
        );
    if (null == v || !Q) return null;
    let ei =
            m === w.e.ALL_MEMBERS
                ? (0, r.jsxs)(r.Fragment, {
                      children: [
                          (0, r.jsx)(D.Z, { guild: v }),
                          (0, r.jsx)(W.Z, {
                              guild: v,
                              onMemberSelect: el
                          })
                      ]
                  })
                : (0, r.jsx)(k.Z, {
                      guildId: v.id,
                      currentTab: m
                  }),
        ea = m === w.e.ALL_MEMBERS ? (0, r.jsx)(B.Z, { guildId: v.id }) : (0, r.jsx)(Z.Z, { guildId: v.id });
    return (0, r.jsxs)(d.Gt, {
        value: T,
        children: [
            (0, r.jsxs)('div', {
                className: a()(K.chat, J.page, { [K.threadSidebarOpen]: er }),
                children: [
                    (0, r.jsx)(Y, {
                        guild: v,
                        previousChannel: X,
                        currentTab: m,
                        onTabSelect: en
                    }),
                    (0, r.jsx)(o.Den, {
                        onScroll: et,
                        ref: $,
                        orientation: 'vertical',
                        children: (0, r.jsx)('div', {
                            className: a()(K.content, J.container),
                            children: ei
                        })
                    }),
                    (0, r.jsx)(F.Z, { guildId: v.id })
                ]
            }),
            H && ea
        ]
    });
}
