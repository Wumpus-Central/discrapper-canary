n.d(t, {
    CF: () => q,
    ZP: () => J,
    nD: () => X
}),
    n(47120),
    n(653041),
    n(789020);
var r = n(200651),
    o = n(192379),
    a = n(120356),
    i = n.n(a),
    s = n(873546),
    c = n(442837),
    l = n(481060),
    u = n(100527),
    d = n(906732),
    p = n(870822),
    g = n(835473),
    m = n(366030),
    f = n(91218),
    _ = n(71619),
    b = n(340797),
    h = n(913834),
    y = n(397589),
    v = n(98278),
    O = n(869765),
    x = n(243317),
    C = n(621853),
    j = n(518950),
    P = n(484459),
    T = n(184301),
    N = n(740492),
    I = n(430824),
    S = n(496675),
    w = n(594174),
    k = n(768581),
    M = n(585483),
    R = n(630388),
    E = n(74538),
    Z = n(276554),
    A = n(421399),
    D = n(453687),
    B = n(318713),
    L = n(304176),
    G = n(47930),
    W = n(981631),
    U = n(388032),
    z = n(456536),
    H = n(121282);
function F(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        'function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                var r;
                (r = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: r,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
                          })
                        : (e[t] = r);
            });
    }
    return e;
}
function V(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : (function (e, t) {
                  var n = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var r = Object.getOwnPropertySymbols(e);
                      n.push.apply(n, r);
                  }
                  return n;
              })(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function K(e) {
    let { avatarSrc: t, avatarDecorationSrc: n, compact: o, onClick: a, onContextMenu: s, onMouseDown: c, onMouseEnter: l, onMouseLeave: u, onKeyDown: d, showCommunicationDisabledStyles: p = !1, className: g } = e;
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)('img', {
                onClick: a,
                onContextMenu: s,
                onMouseDown: c,
                onKeyDown: d,
                onMouseEnter: l,
                onMouseLeave: u,
                src: t,
                'aria-hidden': !0,
                className: i()(g, z.avatar, {
                    [z.compact]: o,
                    [z.clickable]: null != a,
                    [z.communicationDisabledOpacity]: p
                }),
                alt: ' '
            }),
            null == n || o
                ? null
                : (0, r.jsx)('img', {
                      className: z.avatarDecoration,
                      src: n,
                      alt: ' ',
                      'aria-hidden': !0
                  })
        ]
    });
}
function q(e, t, n) {
    let { message: o, channel: a, author: i, compact: s = !1, onContextMenu: c, showUsernamePopout: l, roleIcon: u, onClickUsername: d, onPopoutRequestClose: p } = e;
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(A.Z, {
                message: o,
                channel: a,
                author: i,
                compact: s,
                roleIcon: u,
                showPopout: l,
                renderPopout: t,
                onClick: d,
                onContextMenu: c,
                onPopoutRequestClose: p,
                decorations: n,
                renderRemixTag: !0
            }),
            s &&
                (0, r.jsxs)(r.Fragment, {
                    children: [
                        (0, r.jsx)('i', {
                            className: z.separator,
                            children: ':'
                        }),
                        ' '
                    ]
                })
        ]
    });
}
function X(e) {
    let { message: t, avatar: n, username: o, usernameSpanId: a, usernameClassName: s, compact: c, showTimestamp: u, showTimestampOnHover: d, ariaLabelledBy: m, ariaDescribedBy: f, className: _, messageClassname: b, badges: h } = e,
        y = (0, g.q)(t.applicationId);
    return (
        null == y || (0, p.Z)(y) || (y = null),
        (0, r.jsxs)(r.Fragment, {
            children: [
                !c && n,
                (0, r.jsxs)(l.H, {
                    className: i()(z.header, _),
                    'aria-describedby': f,
                    'aria-labelledby': m,
                    children: [
                        u &&
                            c &&
                            (0, r.jsx)(B.Z, {
                                id: (0, D.Dv)(t),
                                compact: !0,
                                timestamp: t.timestamp,
                                isVisibleOnlyOnHover: d,
                                className: b,
                                isInline: !1,
                                application: y
                            }),
                        c && n,
                        (0, r.jsx)('span', {
                            id: a,
                            className: s,
                            children: o
                        }),
                        u &&
                            !c &&
                            (0, r.jsx)(B.Z, {
                                id: (0, D.Dv)(t),
                                timestamp: t.timestamp,
                                className: b,
                                application: y
                            }),
                        null != h && h.length > 0
                            ? (0, r.jsx)('div', {
                                  className: z.badgesContainer,
                                  children: h
                              })
                            : null
                    ]
                })
            ]
        })
    );
}
let Q = (e) => {
    e || (0, v.z)();
};
function Y(e) {
    let { currentUserIsPremium: t, author: n } = e,
        o = (0, c.e7)([C.Z], () => {
            var e;
            return null === (e = C.Z.getUserProfile(n.id)) || void 0 === e ? void 0 : e.premiumSince;
        });
    return (0, r.jsx)(l.ua7, {
        tooltipClassName: z.nitroAuthorBadgeTootip,
        shouldShow: null != o,
        text: U.NW.formatToPlainString(U.t['8zbGNT'], { date: o }),
        onTooltipShow: () => (0, P.Z)(n.id),
        children: (e) =>
            (0, r.jsx)(l.P3F, {
                className: z.nitroAuthorBadgeContainer,
                onClick: () => Q(t),
                'aria-label': U.NW.formatToPlainString(U.t['8zbGNT'], { date: o }),
                children: (0, r.jsx)(
                    'img',
                    F(
                        {
                            alt: '',
                            className: z.nitroBadgeSvg,
                            src: H
                        },
                        e
                    )
                )
            })
    });
}
function J(e) {
    let { message: t, repliedMessage: n, compact: a = !1, renderPopout: p, showTimestampOnHover: g, roleIcon: v, subscribeToGroupId: C, hideTimestamp: P, className: B, channel: H } = e,
        Q = o.useMemo(() => (null != p ? (e) => p(e, t) : void 0), [p, t]),
        [, J] = (0, _.ZP)(t.author.id, e.guildId),
        $ = (0, c.e7)([I.Z], () => I.Z.getGuild(e.guildId), [e.guildId]),
        ee = null != t.author && null != $ && S.Z.canManageUser(W.Plq.MODERATE_MEMBERS, t.author, $),
        et = J && ee,
        en = (function (e) {
            var t, n;
            let { props: a, guildId: i, handleRenderPopout: p, showCommunicationDisabledStyles: g = !1, className: m } = e,
                { message: f, author: _, compact: b = !1, subscribeToGroupId: h, animate: y = !0, onContextMenu: v, onClickAvatar: O, onPopoutRequestClose: x, showAvatarPopout: C } = a,
                [P, I] = o.useState(!1),
                { analyticsLocations: S } = (0, d.ZP)(u.Z.AVATAR),
                w = (0, c.e7)([N.ZP], () => {
                    var e;
                    return null !== (e = a.displayCompactAvatars) && void 0 !== e ? e : N.ZP.displayCompactAvatars;
                }),
                R = null != f.messageReference && null != f.webhookId && f.hasFlag(W.iLy.IS_CROSSPOST),
                E = f.author,
                { id: Z } = E,
                A = b ? 32 : 80,
                {
                    avatarSrc: D,
                    avatarDecorationSrc: B,
                    eventHandlers: L
                } = (0, j.Z)({
                    user: E,
                    guildId: i,
                    size: A,
                    animateOnHover: null != h ? !P : !y,
                    showPending: !0
                }),
                G = f.isInteractionPlaceholder(),
                U = o.useMemo(() => {
                    var e, t;
                    return G &&
                        null == E.avatar &&
                        (null === (e = f.application) || void 0 === e ? void 0 : e.icon) != null &&
                        null !==
                            (t = k.ZP.getApplicationIconURL({
                                id: f.application.id,
                                icon: f.application.icon,
                                size: A,
                                fallbackAvatar: !1
                            })) &&
                        void 0 !== t
                        ? t
                        : D;
                }, [G, null === (t = f.application) || void 0 === t ? void 0 : t.icon, null === (n = f.application) || void 0 === n ? void 0 : n.id, E.avatar, A, D]);
            return (o.useEffect(() => {
                if (null != h) return M.S.subscribeKeyed(W.LPv.ANIMATE_CHAT_AVATAR, ''.concat(h, ':').concat(Z), I), () => void M.S.unsubscribeKeyed(W.LPv.ANIMATE_CHAT_AVATAR, ''.concat(h, ':').concat(Z), I);
            }, [Z, h]),
            b && !w)
                ? void 0
                : null != p && null != C
                  ? (0, r.jsx)(d.Gt, {
                        value: S,
                        children: (0, r.jsx)(l.yRy, {
                            preload: R
                                ? void 0
                                : function () {
                                      return (0, T.Z)(
                                          f.author.id,
                                          null != _.guildMemberAvatar && null != i
                                              ? k.ZP.getGuildMemberAvatarURLSimple({
                                                    guildId: i,
                                                    userId: f.author.id,
                                                    avatar: _.guildMemberAvatar,
                                                    size: 80
                                                })
                                              : f.author.getAvatarURL(void 0, 80, !1),
                                          {
                                              guildId: i,
                                              channelId: f.channel_id
                                          }
                                      );
                                  },
                            renderPopout: p,
                            shouldShow: C,
                            position: s.tq ? 'window_center' : 'right',
                            onRequestClose: x,
                            clickTrap: !0,
                            children: (e) =>
                                K(
                                    V(F({}, L), {
                                        avatarSrc: U,
                                        avatarDecorationSrc: B,
                                        compact: b,
                                        onClick: O,
                                        onContextMenu: v,
                                        onMouseDown: e.onMouseDown,
                                        onKeyDown: e.onKeyDown,
                                        showCommunicationDisabledStyles: g,
                                        className: m
                                    })
                                )
                        })
                    })
                  : (0, r.jsx)(d.Gt, {
                        value: S,
                        children: K(
                            V(F({}, L), {
                                avatarSrc: U,
                                avatarDecorationSrc: B,
                                compact: b,
                                onClick: O,
                                onContextMenu: v,
                                onMouseDown: void 0,
                                onKeyDown: void 0,
                                showCommunicationDisabledStyles: g,
                                className: m
                            })
                        )
                    });
        })({
            props: e,
            guildId: e.guildId,
            handleRenderPopout: Q,
            showCommunicationDisabledStyles: et
        }),
        er = (0, c.e7)([N.ZP], () => {
            var t;
            return null !== (t = e.displayCompactAvatars) && void 0 !== t ? t : N.ZP.displayCompactAvatars;
        }),
        eo =
            (!a || er) && null != v && null != $
                ? (0, r.jsx)(
                      l.yRy,
                      {
                          animation: l.yRy.Animation.TRANSLATE,
                          align: 'center',
                          autoInvert: !0,
                          nudgeAlignIntoViewport: !0,
                          position: 'right',
                          renderPopout: () =>
                              (0, r.jsx)(L.Z, {
                                  roleIcon: v,
                                  guild: $
                              }),
                          clickTrap: !0,
                          children: (e) => {
                              let { onClick: t } = e;
                              return (0, r.jsx)(
                                  f.Z,
                                  V(F({}, v), {
                                      className: z.roleIcon,
                                      onClick: t
                                  })
                              );
                          }
                      },
                      'role-icon-children'
                  )
                : (!a || er) && null != v
                  ? (0, r.jsx)(f.Z, V(F({}, v), { className: z.roleIcon }), 'role-icon-children')
                  : null,
        ea = (0, G.x)({
            message: t,
            channel: H,
            user: null == t ? void 0 : t.author,
            compact: a,
            isRepliedMessage: !1
        }),
        ei = [],
        es = w.default.getCurrentUser(),
        ec = E.ZP.isPremium(t.author),
        el = E.ZP.isPremium(es),
        eu = null == H ? void 0 : H.isPrivate();
    (0, Z.R)(null != v, 'Message Username') &&
        ec &&
        !a &&
        !eu &&
        ei.push(
            (0, r.jsx)(
                Y,
                {
                    currentUserIsPremium: el,
                    author: t.author
                },
                'nitro-author'
            )
        ),
        null != eo && ei.push(eo),
        null != $ &&
            (ei.push(
                (0, r.jsx)(
                    b.Z,
                    {
                        guild: $,
                        message: t
                    },
                    'new-member'
                )
            ),
            ei.push(
                (0, r.jsx)(
                    h.Z,
                    {
                        guild: $,
                        message: t
                    },
                    'leaderboard-champion'
                )
            )),
        null != H &&
            null != $ &&
            ei.push(
                (0, r.jsx)(
                    m.Z,
                    {
                        guild: $,
                        channel: H,
                        userId: t.author.id,
                        messageId: t.id
                    },
                    'connections'
                )
            );
    let ed = [];
    (0, R.yE)(t.flags, W.iLy.SUPPRESS_NOTIFICATIONS) && ed.push((0, r.jsx)(x.Z, {}, 'suppress-notifications')), t.hasPotions() && ed.push((0, r.jsx)(y.Z, { message: t }));
    let ep = {};
    (ep[A.a.SYSTEM_TAG] = ea), (ep[A.a.BADGES] = ei);
    let eg = q(e, Q, ep),
        em = (0, D.XX)(t, C),
        ef = (0, D.Dv)(t),
        e_ = P ? ''.concat(em) : ''.concat(em, ' ').concat(ef),
        eb = (null == n ? void 0 : n.state) === O.Y.LOADED ? (0, D.Gq)(t) : void 0;
    return (0, r.jsx)(X, {
        message: t,
        avatar: en,
        username: (0, r.jsxs)(r.Fragment, {
            children: [
                et &&
                    (0, r.jsx)(l.ua7, {
                        text: U.NW.string(U.t.AeYyLy),
                        children: (e) =>
                            (0, r.jsxs)(r.Fragment, {
                                children: [
                                    (0, r.jsx)(
                                        l.YlB,
                                        V(
                                            F(
                                                {
                                                    size: 'xxs',
                                                    color: 'currentColor'
                                                },
                                                e
                                            ),
                                            { className: a ? z.compactCommunicationDisabled : z.communicationDisabled }
                                        )
                                    ),
                                    (0, r.jsx)(l.nn4, { children: U.NW.string(U.t.AmHag4) })
                                ]
                            })
                    }),
                eg
            ]
        }),
        usernameSpanId: (0, D.XX)(t, C),
        usernameClassName: i()(z.headerText, {
            [z.hasRoleIcon]: null != eo,
            [z.hasBadges]: null != ea || ed.length > 0
        }),
        compact: a,
        showTimestamp: !0 !== P,
        showTimestampOnHover: g,
        ariaLabelledBy: e_,
        ariaDescribedBy: eb,
        className: B,
        badges: ed
    });
}
