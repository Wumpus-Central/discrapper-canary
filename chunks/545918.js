t.r(n), t.d(n, { default: () => H }), t(47120);
var l = t(200651),
    i = t(192379),
    r = t(120356),
    a = t.n(r),
    s = t(442837),
    o = t(481060),
    c = t(100527),
    d = t(906732),
    u = t(111028),
    m = t(252618),
    x = t(189432),
    h = t(189357),
    j = t(693546),
    C = t(63568),
    _ = t(246364),
    f = t(697379),
    b = t(98493),
    v = t(412222),
    N = t(223312),
    g = t(571728),
    T = t(473403),
    p = t(984370),
    I = t(703656),
    E = t(171368),
    S = t(433355),
    R = t(592125),
    M = t(984933),
    A = t(430824),
    Z = t(944486),
    k = t(384433),
    P = t(241559),
    w = t(575766),
    L = t(901066),
    B = t(987491),
    y = t(305473),
    D = t(995596),
    F = t(937283),
    G = t(440857),
    q = t(707113),
    z = t(981631),
    O = t(176505),
    U = t(50493),
    J = t(388032),
    K = t(998810),
    Y = t(247627);
function Q(e) {
    let { guild: n, previousChannel: t, currentTab: r, onTabSelect: a } = e,
        s = (0, C.jS)(n.id, 'Member Safety Page'),
        c = (0, f.W)(n.id),
        d = J.intl.string(J.t.oclz3d),
        x = J.intl.string(J.t.oclz3d);
    return (
        (0, m.Tt)({
            location: n.name,
            subsection: d
        }),
        (0, l.jsxs)(p.Z, {
            className: K.header,
            innerClassname: K.__invalid_innerHeader,
            channelId: O.oC.MEMBER_SAFETY,
            guildId: n.id,
            hideSearch: !0,
            toolbar:
                null != t
                    ? (0, l.jsx)(o.zxk, {
                          className: K.returnButton,
                          size: o.zxk.Sizes.SMALL,
                          look: o.zxk.Looks.OUTLINED,
                          color: o.zxk.Colors.PRIMARY,
                          onClick: () => {
                              null != t && (0, I.XU)(n.id, t.id);
                          },
                          children: (0, l.jsx)(o.Text, {
                              className: K.returnButtonText,
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
                                                        (0, l.jsx)(T._, {
                                                            className: K.returnIcon,
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
                (0, l.jsx)(p.Z.Icon, {
                    icon: o.BFJ,
                    'aria-hidden': !0
                }),
                (0, l.jsx)(p.Z.Title, { children: x }),
                s &&
                    c &&
                    (0, l.jsx)(D.Z, {
                        guildId: n.id,
                        currentTab: r,
                        onTabSelect: a
                    })
            ]
        })
    );
}
function H(e) {
    var n;
    let { guildId: t } = e,
        r = null !== (n = (0, g.A)({ guildId: t })) && void 0 !== n ? n : 0,
        u = (0, C.jS)(t, 'Member Safety Page'),
        [m, f] = i.useState(u && r > 0 ? k.e.PENDING : k.e.ALL_MEMBERS),
        T = (0, s.e7)([A.Z], () => A.Z.getGuild(t)),
        { analyticsLocations: p } = (0, d.ZP)(c.Z.MEMBER_SAFETY_PAGE),
        D = (0, v.C)({ guildId: t }),
        { guildJoinRequests: J } = (0, N.j)({
            guildId: t,
            applicationStatus: 'ALL_MEMBERS' === m ? _.wB.SUBMITTED : m,
            sortOrder: D
        });
    i.useEffect(() => {
        (null == T ? void 0 : T.hasFeature(z.oNc.MEMBER_VERIFICATION_MANUAL_APPROVAL)) || f(k.e.ALL_MEMBERS);
    }, [T]);
    let H = (0, P.n2)(t),
        V = (0, h.m)(t),
        X = (0, s.e7)([Z.Z], () => Z.Z.getLastSelectedChannelId(t)),
        W = (0, s.e7)([R.Z], () => R.Z.getChannel(X)),
        $ = i.useRef(null);
    (0, w.n)(t);
    let { fetchNextPage: ee } = (0, b.m)({
            guildId: t,
            guildJoinRequests: J
        }),
        en = i.useCallback(async () => {
            var e;
            if (m === k.e.ALL_MEMBERS) return;
            let n = null === (e = $.current) || void 0 === e ? void 0 : e.getScrollerState();
            null != n && n.scrollHeight - n.scrollTop - n.offsetHeight < 200 && (await ee(D, m));
        }, [m, m, D, ee]),
        et = i.useCallback(
            async (e) => {
                if (m !== e && u) {
                    if ((f(e), j.Z.setSelectedGuildJoinRequest(t, null), 'ALL_MEMBERS' !== e)) await ee(D, e);
                }
            },
            [m, u, t, ee, D]
        );
    i.useEffect(() => {
        if (!H && null != T) {
            var e;
            let n = null === (e = M.ZP.getDefaultChannel(T.id)) || void 0 === e ? void 0 : e.id;
            (0, I.XU)(T.id, n);
        }
    }, [T, H]);
    let el = (0, s.e7)([S.ZP], () => null != S.ZP.getGuildSidebarState(t), [t]),
        ei = i.useCallback(
            (e) => {
                (0, h.Y)(e.guildId)
                    ? (0, x.r)(e.guildId, e.userId, O.oC.MEMBER_SAFETY, { modViewPanel: U.k.INFO })
                    : (0, E.openUserProfileModal)({
                          userId: e.userId,
                          guildId: e.guildId,
                          sourceAnalyticsLocations: p,
                          analyticsLocation: { section: z.jXE.MEMBER_SAFETY_PAGE }
                      });
            },
            [p]
        );
    if (null == T || !H) return null;
    let er =
            m === k.e.ALL_MEMBERS
                ? (0, l.jsxs)(l.Fragment, {
                      children: [
                          (0, l.jsx)(y.Z, { guild: T }),
                          (0, l.jsx)(q.Z, {
                              guild: T,
                              onMemberSelect: ei
                          })
                      ]
                  })
                : (0, l.jsx)(B.Z, {
                      guildId: T.id,
                      currentTab: m
                  }),
        ea = m === k.e.ALL_MEMBERS ? (0, l.jsx)(F.Z, { guildId: T.id }) : (0, l.jsx)(L.Z, { guildId: T.id });
    return (0, l.jsxs)(d.Gt, {
        value: p,
        children: [
            (0, l.jsxs)('div', {
                className: a()(Y.chat, K.page, { [Y.threadSidebarOpen]: el }),
                children: [
                    (0, l.jsx)(Q, {
                        guild: T,
                        previousChannel: W,
                        currentTab: m,
                        onTabSelect: et
                    }),
                    (0, l.jsx)(o.Den, {
                        onScroll: en,
                        ref: $,
                        orientation: 'vertical',
                        children: (0, l.jsx)('div', {
                            className: a()(Y.content, K.container),
                            children: er
                        })
                    }),
                    (0, l.jsx)(G.Z, { guildId: T.id })
                ]
            }),
            V && ea
        ]
    });
}
