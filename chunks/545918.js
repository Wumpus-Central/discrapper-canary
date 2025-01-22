t.r(n),
    t.d(n, {
        default: function () {
            return V;
        }
    }),
    t(47120);
var l = t(200651),
    r = t(192379),
    i = t(120356),
    a = t.n(i),
    s = t(442837),
    o = t(481060),
    c = t(100527),
    d = t(906732),
    u = t(111028),
    m = t(252618),
    x = t(189432),
    h = t(189357),
    j = t(693546),
    C = t(863249),
    b = t(63568),
    f = t(246364),
    v = t(697379),
    g = t(98493),
    N = t(412222),
    I = t(223312),
    _ = t(571728),
    T = t(473403),
    E = t(984370),
    S = t(703656),
    p = t(171368),
    M = t(433355),
    R = t(592125),
    A = t(984933),
    Z = t(430824),
    k = t(944486),
    L = t(384433),
    w = t(241559),
    P = t(575766),
    B = t(901066),
    D = t(987491),
    G = t(305473),
    y = t(995596),
    O = t(937283),
    U = t(440857),
    z = t(707113),
    F = t(981631),
    q = t(176505),
    J = t(50493),
    H = t(388032),
    Y = t(998810),
    Q = t(247627);
function K(e) {
    let { guild: n, previousChannel: t, currentTab: i, onTabSelect: a } = e,
        s = (0, b.jS)(n.id, 'Member Safety Page'),
        c = (0, v.W)(n.id),
        d = H.intl.string(H.t.oclz3d),
        x = H.intl.string(H.t.oclz3d);
    return (
        (0, m.Tt)({
            location: n.name,
            subsection: d
        }),
        (0, l.jsxs)(E.Z, {
            className: Y.header,
            innerClassname: Y.__invalid_innerHeader,
            channelId: q.oC.MEMBER_SAFETY,
            guildId: n.id,
            hideSearch: !0,
            toolbar:
                null != t
                    ? (0, l.jsx)(o.Button, {
                          className: Y.returnButton,
                          size: o.Button.Sizes.SMALL,
                          look: o.Button.Looks.OUTLINED,
                          color: o.Button.Colors.PRIMARY,
                          onClick: () => {
                              null != t && (0, S.XU)(n.id, t.id);
                          },
                          children: (0, l.jsx)(o.Text, {
                              className: Y.returnButtonText,
                              variant: 'text-xs/medium',
                              color: 'none',
                              children: H.intl.format(H.t.IX7oWl, {
                                  channelNameHook: () =>
                                      null == t
                                          ? null
                                          : (0, l.jsxs)(
                                                r.Fragment,
                                                {
                                                    children: [
                                                        (0, l.jsx)(T._, {
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
                (0, l.jsx)(E.Z.Icon, {
                    icon: o.GroupIcon,
                    'aria-hidden': !0
                }),
                (0, l.jsx)(E.Z.Title, { children: x }),
                s &&
                    c &&
                    (0, l.jsx)(y.Z, {
                        guildId: n.id,
                        currentTab: i,
                        onTabSelect: a
                    })
            ]
        })
    );
}
function V(e) {
    var n;
    let { guildId: t } = e,
        i = null !== (n = (0, _.A)({ guildId: t })) && void 0 !== n ? n : 0,
        u = (0, b.jS)(t, 'Member Safety Page'),
        [m, v] = r.useState(u && i > 0 ? L.e.PENDING : L.e.ALL_MEMBERS),
        T = (0, s.e7)([Z.Z], () => Z.Z.getGuild(t)),
        { analyticsLocations: E } = (0, d.ZP)(c.Z.MEMBER_SAFETY_PAGE),
        y = (0, N.C)({ guildId: t }),
        { guildJoinRequests: H } = (0, I.j)({
            guildId: t,
            applicationStatus: 'ALL_MEMBERS' === m ? f.wB.SUBMITTED : m,
            sortOrder: y
        }),
        V = (0, w.n2)(t),
        W = (0, h.m)(t),
        X = (0, s.e7)([k.Z], () => k.Z.getLastSelectedChannelId(t)),
        $ = (0, s.e7)([R.Z], () => R.Z.getChannel(X)),
        ee = r.useRef(null);
    (0, P.n)(t);
    let { fetchNextPage: en } = (0, g.m)({
            guildId: t,
            guildJoinRequests: H
        }),
        et = r.useCallback(async () => {
            var e;
            if (m === L.e.ALL_MEMBERS) return;
            let n = null === (e = ee.current) || void 0 === e ? void 0 : e.getScrollerState();
            if (null != n) n.scrollHeight - n.scrollTop - n.offsetHeight < 200 && (await en(y, m));
        }, [m, m, y, en]),
        el = r.useCallback(
            async (e) => {
                if (m !== e) {
                    if (u) {
                        if ((v(e), j.Z.setSelectedGuildJoinRequest(t, null), 'ALL_MEMBERS' === e)) return;
                        await en(y, e);
                    }
                }
            },
            [m, u, t, en, y]
        );
    r.useEffect(() => {
        if (!V && null != T) {
            var e;
            let n = null === (e = A.ZP.getDefaultChannel(T.id)) || void 0 === e ? void 0 : e.id;
            (0, S.XU)(T.id, n);
        }
    }, [T, V]),
        r.useEffect(() => {
            u && C.ZP.fetchVerificationForm(t);
        }, [t, u]);
    let er = (0, s.e7)([M.ZP], () => null != M.ZP.getGuildSidebarState(t), [t]),
        ei = r.useCallback(
            (e) => {
                (0, h.Y)(e.guildId)
                    ? (0, x.r)(e.guildId, e.userId, q.oC.MEMBER_SAFETY, { modViewPanel: J.k.INFO })
                    : (0, p.openUserProfileModal)({
                          userId: e.userId,
                          guildId: e.guildId,
                          sourceAnalyticsLocations: E,
                          analyticsLocation: { section: F.jXE.MEMBER_SAFETY_PAGE }
                      });
            },
            [E]
        );
    if (null == T || !V) return null;
    let ea =
            m === L.e.ALL_MEMBERS
                ? (0, l.jsxs)(l.Fragment, {
                      children: [
                          (0, l.jsx)(G.Z, { guild: T }),
                          (0, l.jsx)(z.Z, {
                              guild: T,
                              onMemberSelect: ei
                          })
                      ]
                  })
                : (0, l.jsx)(D.Z, {
                      guildId: T.id,
                      currentTab: m
                  }),
        es = m === L.e.ALL_MEMBERS ? (0, l.jsx)(O.Z, { guildId: T.id }) : (0, l.jsx)(B.Z, { guildId: T.id });
    return (0, l.jsxs)(d.Gt, {
        value: E,
        children: [
            (0, l.jsxs)('div', {
                className: a()(Q.chat, Y.page, { [Q.threadSidebarOpen]: er }),
                children: [
                    (0, l.jsx)(K, {
                        guild: T,
                        previousChannel: $,
                        currentTab: m,
                        onTabSelect: el
                    }),
                    (0, l.jsx)(o.AdvancedScroller, {
                        onScroll: et,
                        className: a()(Y.scroller),
                        ref: ee,
                        orientation: 'vertical',
                        children: (0, l.jsx)('div', {
                            className: a()(Q.content, Y.container),
                            children: ea
                        })
                    }),
                    (0, l.jsx)(U.Z, { guildId: T.id })
                ]
            }),
            W && es
        ]
    });
}
