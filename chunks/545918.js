t.r(n), t.d(n, { default: () => K }), t(47120);
var l = t(200651),
    i = t(192379),
    r = t(120356),
    a = t.n(r),
    s = t(442837),
    o = t(481060),
    d = t(100527),
    c = t(906732),
    u = t(111028),
    m = t(252618),
    x = t(189432),
    h = t(189357),
    j = t(693546),
    _ = t(63568),
    C = t(246364),
    f = t(697379),
    v = t(98493),
    N = t(412222),
    b = t(223312),
    E = t(571728),
    g = t(473403),
    T = t(984370),
    I = t(703656),
    S = t(171368),
    p = t(433355),
    R = t(592125),
    M = t(984933),
    A = t(430824),
    Z = t(944486),
    P = t(384433),
    k = t(241559),
    L = t(575766),
    w = t(901066),
    D = t(987491),
    B = t(305473),
    y = t(995596),
    G = t(937283),
    z = t(440857),
    F = t(707113),
    O = t(981631),
    U = t(176505),
    q = t(50493),
    J = t(388032),
    Y = t(998810),
    V = t(247627);
function H(e) {
    let { guild: n, previousChannel: t, currentTab: r, onTabSelect: a } = e,
        s = (0, _.jS)(n.id, 'Member Safety Page'),
        d = (0, f.W)(n.id),
        c = J.intl.string(J.t.oclz3d),
        x = J.intl.string(J.t.oclz3d);
    return (
        (0, m.Tt)({
            location: n.name,
            subsection: c
        }),
        (0, l.jsxs)(T.Z, {
            className: Y.header,
            innerClassname: Y.__invalid_innerHeader,
            channelId: U.oC.MEMBER_SAFETY,
            guildId: n.id,
            hideSearch: !0,
            toolbar:
                null != t
                    ? (0, l.jsx)(o.zxk, {
                          className: Y.returnButton,
                          size: o.zxk.Sizes.SMALL,
                          look: o.zxk.Looks.OUTLINED,
                          color: o.zxk.Colors.PRIMARY,
                          onClick: () => {
                              null != t && (0, I.XU)(n.id, t.id);
                          },
                          children: (0, l.jsx)(o.Text, {
                              className: Y.returnButtonText,
                              variant: 'text-xs/medium',
                              color: 'none',
                              children: J.intl.format(J.t.IX7oWl, {
                                  channelNameHook: () =>
                                      null == t
                                          ? null
                                          : (0, l.jsxs)(
                                                i.Fragment,
                                                {
                                                    children: [
                                                        (0, l.jsx)(g._, {
                                                            className: Y.returnIcon,
                                                            guild: n,
                                                            channel: t
                                                        }),
                                                        (0, l.jsx)(u.Z, {
                                                            children: (0, l.jsx)(o.Text, {
                                                                variant: 'text-xs/medium',
                                                                color: 'none',
                                                                children: t.name
                                                            })
                                                        })
                                                    ]
                                                },
                                                t.id
                                            )
                              })
                          })
                      })
                    : (0, l.jsx)('div', {}),
            children: [
                (0, l.jsx)(T.Z.Icon, {
                    icon: o.BFJ,
                    'aria-hidden': !0
                }),
                (0, l.jsx)(T.Z.Title, { children: x }),
                s &&
                    d &&
                    (0, l.jsx)(y.Z, {
                        guildId: n.id,
                        currentTab: r,
                        onTabSelect: a
                    })
            ]
        })
    );
}
function K(e) {
    var n;
    let { guildId: t } = e,
        r = null !== (n = (0, E.A)({ guildId: t })) && void 0 !== n ? n : 0,
        u = (0, _.jS)(t, 'Member Safety Page'),
        [m, f] = i.useState(u && r > 0 ? P.e.PENDING : P.e.ALL_MEMBERS),
        g = (0, s.e7)([A.Z], () => A.Z.getGuild(t)),
        { analyticsLocations: T } = (0, c.ZP)(d.Z.MEMBER_SAFETY_PAGE),
        y = (0, N.C)({ guildId: t }),
        { guildJoinRequests: J } = (0, b.j)({
            guildId: t,
            applicationStatus: 'ALL_MEMBERS' === m ? C.wB.SUBMITTED : m,
            sortOrder: y
        });
    i.useEffect(() => {
        (null == g ? void 0 : g.hasFeature(O.oNc.MEMBER_VERIFICATION_MANUAL_APPROVAL)) || f(P.e.ALL_MEMBERS);
    }, [g]);
    let K = (0, k.n2)(t),
        Q = (0, h.m)(t),
        X = (0, s.e7)([Z.Z], () => Z.Z.getLastSelectedChannelId(t)),
        W = (0, s.e7)([R.Z], () => R.Z.getChannel(X)),
        $ = i.useRef(null);
    (0, L.n)(t);
    let { fetchNextPage: ee } = (0, v.m)({
            guildId: t,
            guildJoinRequests: J
        }),
        en = i.useCallback(async () => {
            var e;
            if (m === P.e.ALL_MEMBERS) return;
            let n = null === (e = $.current) || void 0 === e ? void 0 : e.getScrollerState();
            null != n && n.scrollHeight - n.scrollTop - n.offsetHeight < 200 && (await ee(y, m));
        }, [m, m, y, ee]),
        et = i.useCallback(
            async (e) => {
                if (m !== e && u) {
                    if ((f(e), j.Z.setSelectedGuildJoinRequest(t, null), 'ALL_MEMBERS' !== e)) await ee(y, e);
                }
            },
            [m, u, t, ee, y]
        );
    i.useEffect(() => {
        if (!K && null != g) {
            var e;
            let n = null === (e = M.ZP.getDefaultChannel(g.id)) || void 0 === e ? void 0 : e.id;
            (0, I.XU)(g.id, n);
        }
    }, [g, K]);
    let el = (0, s.e7)([p.ZP], () => null != p.ZP.getGuildSidebarState(t), [t]),
        ei = i.useCallback(
            (e) => {
                (0, h.Y)(e.guildId)
                    ? (0, x.r)(e.guildId, e.userId, U.oC.MEMBER_SAFETY, { modViewPanel: q.k.INFO })
                    : (0, S.openUserProfileModal)({
                          userId: e.userId,
                          guildId: e.guildId,
                          sourceAnalyticsLocations: T,
                          analyticsLocation: { section: O.jXE.MEMBER_SAFETY_PAGE }
                      });
            },
            [T]
        );
    if (null == g || !K) return null;
    let er =
            m === P.e.ALL_MEMBERS
                ? (0, l.jsxs)(l.Fragment, {
                      children: [
                          (0, l.jsx)(B.Z, { guild: g }),
                          (0, l.jsx)(F.Z, {
                              guild: g,
                              onMemberSelect: ei
                          })
                      ]
                  })
                : (0, l.jsx)(D.Z, {
                      guildId: g.id,
                      currentTab: m
                  }),
        ea = m === P.e.ALL_MEMBERS ? (0, l.jsx)(G.Z, { guildId: g.id }) : (0, l.jsx)(w.Z, { guildId: g.id });
    return (0, l.jsxs)(c.Gt, {
        value: T,
        children: [
            (0, l.jsxs)('div', {
                className: a()(V.chat, Y.page, { [V.threadSidebarOpen]: el }),
                children: [
                    (0, l.jsx)(H, {
                        guild: g,
                        previousChannel: W,
                        currentTab: m,
                        onTabSelect: et
                    }),
                    (0, l.jsx)(o.Den, {
                        onScroll: en,
                        ref: $,
                        orientation: 'vertical',
                        children: (0, l.jsx)('div', {
                            className: a()(V.content, Y.container),
                            children: er
                        })
                    }),
                    (0, l.jsx)(z.Z, { guildId: g.id })
                ]
            }),
            Q && ea
        ]
    });
}
