t.r(n), t.d(n, { default: () => Q }), t(47120);
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
    v = t(98493),
    b = t(412222),
    N = t(223312),
    g = t(571728),
    T = t(473403),
    I = t(984370),
    p = t(703656),
    E = t(171368),
    S = t(433355),
    R = t(592125),
    M = t(984933),
    A = t(430824),
    k = t(944486),
    Z = t(384433),
    P = t(241559),
    L = t(575766),
    w = t(901066),
    B = t(987491),
    y = t(305473),
    D = t(995596),
    F = t(937283),
    z = t(440857),
    G = t(707113),
    q = t(981631),
    O = t(176505),
    U = t(50493),
    J = t(388032),
    K = t(557873),
    Y = t(3114);
function H(e) {
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
        (0, l.jsxs)(I.Z, {
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
                              null != t && (0, p.XU)(n.id, t.id);
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
                (0, l.jsx)(I.Z.Icon, {
                    icon: o.BFJ,
                    'aria-hidden': !0
                }),
                (0, l.jsx)(I.Z.Title, { children: x }),
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
function Q(e) {
    var n;
    let { guildId: t } = e,
        r = null !== (n = (0, g.A)({ guildId: t })) && void 0 !== n ? n : 0,
        u = (0, C.jS)(t, 'Member Safety Page'),
        [m, f] = i.useState(u && r > 0 ? Z.e.PENDING : Z.e.ALL_MEMBERS),
        T = (0, s.e7)([A.Z], () => A.Z.getGuild(t)),
        { analyticsLocations: I } = (0, d.ZP)(c.Z.MEMBER_SAFETY_PAGE),
        D = (0, b.C)({ guildId: t }),
        { guildJoinRequests: J } = (0, N.j)({
            guildId: t,
            applicationStatus: 'ALL_MEMBERS' === m ? _.wB.SUBMITTED : m,
            sortOrder: D
        });
    i.useEffect(() => {
        (null == T ? void 0 : T.hasFeature(q.oNc.MEMBER_VERIFICATION_MANUAL_APPROVAL)) || f(Z.e.ALL_MEMBERS);
    }, [T]);
    let Q = (0, P.n2)(t),
        V = (0, h.m)(t),
        X = (0, s.e7)([k.Z], () => k.Z.getLastSelectedChannelId(t)),
        W = (0, s.e7)([R.Z], () => R.Z.getChannel(X)),
        $ = i.useRef(null);
    (0, L.n)(t);
    let { fetchNextPage: ee } = (0, v.m)({
            guildId: t,
            guildJoinRequests: J
        }),
        en = i.useCallback(async () => {
            var e;
            if (m === Z.e.ALL_MEMBERS) return;
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
        if (!Q && null != T) {
            var e;
            let n = null === (e = M.ZP.getDefaultChannel(T.id)) || void 0 === e ? void 0 : e.id;
            (0, p.XU)(T.id, n);
        }
    }, [T, Q]);
    let el = (0, s.e7)([S.ZP], () => null != S.ZP.getGuildSidebarState(t), [t]),
        ei = i.useCallback(
            (e) => {
                (0, h.Y)(e.guildId)
                    ? (0, x.r)(e.guildId, e.userId, O.oC.MEMBER_SAFETY, { modViewPanel: U.k.INFO })
                    : (0, E.openUserProfileModal)({
                          userId: e.userId,
                          guildId: e.guildId,
                          sourceAnalyticsLocations: I,
                          analyticsLocation: { section: q.jXE.MEMBER_SAFETY_PAGE }
                      });
            },
            [I]
        );
    if (null == T || !Q) return null;
    let er =
            m === Z.e.ALL_MEMBERS
                ? (0, l.jsxs)(l.Fragment, {
                      children: [
                          (0, l.jsx)(y.Z, { guild: T }),
                          (0, l.jsx)(G.Z, {
                              guild: T,
                              onMemberSelect: ei
                          })
                      ]
                  })
                : (0, l.jsx)(B.Z, {
                      guildId: T.id,
                      currentTab: m
                  }),
        ea = m === Z.e.ALL_MEMBERS ? (0, l.jsx)(F.Z, { guildId: T.id }) : (0, l.jsx)(w.Z, { guildId: T.id });
    return (0, l.jsxs)(d.Gt, {
        value: I,
        children: [
            (0, l.jsxs)('div', {
                className: a()(Y.chat, K.page, { [Y.threadSidebarOpen]: el }),
                children: [
                    (0, l.jsx)(H, {
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
                    (0, l.jsx)(z.Z, { guildId: T.id })
                ]
            }),
            V && ea
        ]
    });
}
