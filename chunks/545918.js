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
    g = n(223312),
    _ = n(571728),
    v = n(473403),
    C = n(984370),
    T = n(703656),
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
    W = n(981631),
    F = n(176505),
    z = n(50493),
    U = n(388032),
    q = n(86931),
    V = n(100658);
function J(e) {
    let { guild: t, previousChannel: n, currentTab: i, onTabSelect: a } = e,
        s = (0, f.W)(t.id),
        c = U.NW.string(U.t.oclz3d),
        d = U.NW.string(U.t.oclz3d);
    return (
        (0, m.Tt)({
            location: t.name,
            subsection: c
        }),
        (0, r.jsxs)(C.Z, {
            className: q.header,
            innerClassname: q.__invalid_innerHeader,
            channelId: F.oC.MEMBER_SAFETY,
            guildId: t.id,
            hideSearch: !0,
            toolbar:
                null != n
                    ? (0, r.jsx)(o.zxk, {
                          className: q.returnButton,
                          size: o.zxk.Sizes.SMALL,
                          look: o.zxk.Looks.OUTLINED,
                          color: o.zxk.Colors.PRIMARY,
                          onClick: () => {
                              null != n && (0, T.XU)(t.id, n.id);
                          },
                          children: (0, r.jsx)(o.Text, {
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
                                                        (0, r.jsx)(v._W, {
                                                            className: q.returnIcon,
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
        i = null != (t = (0, _.A)({ guildId: n })) ? t : 0,
        [u, m] = l.useState(i > 0 ? y.e.PENDING : y.e.ALL_MEMBERS),
        f = (0, s.e7)([O.Z], () => O.Z.getGuild(n)),
        { analyticsLocations: v } = (0, d.ZP)(c.Z.MEMBER_SAFETY_PAGE),
        C = (0, p.C)({ guildId: n }),
        { guildJoinRequests: D } = (0, g.j)({
            guildId: n,
            applicationStatus: 'ALL_MEMBERS' === u ? b.wB.SUBMITTED : u,
            sortOrder: C
        });
    l.useEffect(() => {
        (null == f ? void 0 : f.hasFeature(W.oNc.MEMBER_VERIFICATION_MANUAL_APPROVAL)) || m(y.e.ALL_MEMBERS);
    }, [f]);
    let U = (0, A.n2)(n),
        Y = (0, h.m)(n),
        K = (0, s.e7)([R.Z], () => R.Z.getLastSelectedChannelId(n)),
        H = (0, s.e7)([S.Z], () => S.Z.getChannel(K)),
        X = l.useRef(null);
    (0, w.n)(n);
    let { fetchNextPage: Q } = (0, N.m)({
            guildId: n,
            guildJoinRequests: D
        }),
        $ = l.useCallback(async () => {
            var e;
            if (u === y.e.ALL_MEMBERS) return;
            let t = null == (e = X.current) ? void 0 : e.getScrollerState();
            null != t && t.scrollHeight - t.scrollTop - t.offsetHeight < 200 && (await Q(C, u));
        }, [u, u, C, Q]),
        ee = l.useCallback(
            async (e) => {
                u !== e && (m(e), j.Z.setSelectedGuildJoinRequest(n, null), 'ALL_MEMBERS' !== e && (await Q(C, e)));
            },
            [u, n, Q, C]
        );
    l.useEffect(() => {
        if (!U && null != f) {
            var e;
            let t = null == (e = P.ZP.getDefaultChannel(f.id)) ? void 0 : e.id;
            (0, T.XU)(f.id, t);
        }
    }, [f, U]);
    let et = (0, s.e7)([I.ZP], () => null != I.ZP.getGuildSidebarState(n), [n]),
        en = l.useCallback(
            (e) => {
                (0, h.Y)(e.guildId)
                    ? (0, x.r)(e.guildId, e.userId, F.oC.MEMBER_SAFETY, { modViewPanel: z.k.INFO })
                    : (0, E.openUserProfileModal)({
                          userId: e.userId,
                          guildId: e.guildId,
                          sourceAnalyticsLocations: v,
                          analyticsLocation: { section: W.jXE.MEMBER_SAFETY_PAGE }
                      });
            },
            [v]
        );
    if (null == f || !U) return null;
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
        value: v,
        children: [
            (0, r.jsxs)('div', {
                className: a()(V.chat, q.page, { [V.threadSidebarOpen]: et }),
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
                            className: a()(V.content, q.container),
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
