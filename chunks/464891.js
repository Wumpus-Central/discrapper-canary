n.d(t, {
    CF: () => K,
    ZP: () => Q,
    nD: () => q
}),
    n(47120),
    n(789020),
    n(653041);
var r = n(200651),
    o = n(192379),
    a = n(120356),
    i = n.n(a),
    s = n(873546),
    c = n(442837),
    l = n(481060),
    u = n(100527),
    d = n(906732),
    p = n(835473),
    g = n(366030),
    m = n(91218),
    f = n(71619),
    _ = n(340797),
    b = n(913834),
    h = n(397589),
    y = n(98278),
    v = n(869765),
    O = n(243317),
    x = n(621853),
    C = n(518950),
    j = n(484459),
    P = n(184301),
    T = n(740492),
    N = n(430824),
    I = n(496675),
    S = n(594174),
    w = n(768581),
    k = n(585483),
    M = n(630388),
    R = n(74538),
    E = n(276554),
    Z = n(421399),
    A = n(453687),
    D = n(318713),
    B = n(304176),
    L = n(47930),
    G = n(981631),
    W = n(388032),
    U = n(456536),
    z = n(121282);
function H(e) {
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
function F(e, t) {
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
function V(e) {
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
                className: i()(g, U.avatar, {
                    [U.compact]: o,
                    [U.clickable]: null != a,
                    [U.communicationDisabledOpacity]: p
                }),
                alt: ' '
            }),
            null == n || o
                ? null
                : (0, r.jsx)('img', {
                      className: U.avatarDecoration,
                      src: n,
                      alt: ' ',
                      'aria-hidden': !0
                  })
        ]
    });
}
function K(e, t, n) {
    let { message: o, channel: a, author: i, compact: s = !1, onContextMenu: c, showUsernamePopout: l, roleIcon: u, onClickUsername: d, onPopoutRequestClose: p } = e;
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(Z.Z, {
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
                            className: U.separator,
                            children: ':'
                        }),
                        ' '
                    ]
                })
        ]
    });
}
function q(e) {
    let { message: t, avatar: n, username: o, usernameSpanId: a, usernameClassName: s, compact: c, showTimestamp: u, showTimestampOnHover: d, ariaLabelledBy: g, ariaDescribedBy: m, className: f, messageClassname: _, badges: b } = e,
        h = (0, p.q)(t.applicationId);
    return (
        null == h || (0, M.yE)(h.flags, G.udG.SOCIAL_LAYER_INTEGRATION) || (h = null),
        (0, r.jsxs)(r.Fragment, {
            children: [
                !c && n,
                (0, r.jsxs)(l.H, {
                    className: i()(U.header, f),
                    'aria-describedby': m,
                    'aria-labelledby': g,
                    children: [
                        u &&
                            c &&
                            (0, r.jsx)(D.Z, {
                                id: (0, A.Dv)(t),
                                compact: !0,
                                timestamp: t.timestamp,
                                isVisibleOnlyOnHover: d,
                                className: _,
                                isInline: !1,
                                application: h
                            }),
                        c && n,
                        (0, r.jsx)('span', {
                            id: a,
                            className: s,
                            children: o
                        }),
                        u &&
                            !c &&
                            (0, r.jsx)(D.Z, {
                                id: (0, A.Dv)(t),
                                timestamp: t.timestamp,
                                className: _,
                                application: h
                            }),
                        null != b && b.length > 0
                            ? (0, r.jsx)('div', {
                                  className: U.badgesContainer,
                                  children: b
                              })
                            : null
                    ]
                })
            ]
        })
    );
}
let X = (e) => {
    e || (0, y.z)();
};
function Y(e) {
    let { currentUserIsPremium: t, author: n } = e,
        o = (0, c.e7)([x.Z], () => {
            var e;
            return null === (e = x.Z.getUserProfile(n.id)) || void 0 === e ? void 0 : e.premiumSince;
        });
    return (0, r.jsx)(l.ua7, {
        tooltipClassName: U.nitroAuthorBadgeTootip,
        shouldShow: null != o,
        text: W.NW.formatToPlainString(W.t['8zbGNT'], { date: o }),
        onTooltipShow: () => (0, j.Z)(n.id),
        children: (e) =>
            (0, r.jsx)(l.P3F, {
                className: U.nitroAuthorBadgeContainer,
                onClick: () => X(t),
                'aria-label': W.NW.formatToPlainString(W.t['8zbGNT'], { date: o }),
                children: (0, r.jsx)(
                    'img',
                    H(
                        {
                            alt: '',
                            className: U.nitroBadgeSvg,
                            src: z
                        },
                        e
                    )
                )
            })
    });
}
function Q(e) {
    let { message: t, repliedMessage: n, compact: a = !1, renderPopout: p, showTimestampOnHover: y, roleIcon: x, subscribeToGroupId: j, hideTimestamp: D, className: z, channel: X } = e,
        Q = o.useMemo(() => (null != p ? (e) => p(e, t) : void 0), [p, t]),
        [, J] = (0, f.ZP)(t.author.id, e.guildId),
        $ = (0, c.e7)([N.Z], () => N.Z.getGuild(e.guildId), [e.guildId]),
        ee = null != t.author && null != $ && I.Z.canManageUser(G.Plq.MODERATE_MEMBERS, t.author, $),
        et = J && ee,
        en = (function (e) {
            var t, n;
            let { props: a, guildId: i, handleRenderPopout: p, showCommunicationDisabledStyles: g = !1, className: m } = e,
                { message: f, author: _, compact: b = !1, subscribeToGroupId: h, animate: y = !0, onContextMenu: v, onClickAvatar: O, onPopoutRequestClose: x, showAvatarPopout: j } = a,
                [N, I] = o.useState(!1),
                { analyticsLocations: S } = (0, d.ZP)(u.Z.AVATAR),
                M = (0, c.e7)([T.ZP], () => {
                    var e;
                    return null !== (e = a.displayCompactAvatars) && void 0 !== e ? e : T.ZP.displayCompactAvatars;
                }),
                R = null != f.messageReference && null != f.webhookId && f.hasFlag(G.iLy.IS_CROSSPOST),
                E = f.author,
                { id: Z } = E,
                A = b ? 32 : 80,
                {
                    avatarSrc: D,
                    avatarDecorationSrc: B,
                    eventHandlers: L
                } = (0, C.Z)({
                    user: E,
                    guildId: i,
                    size: A,
                    animateOnHover: null != h ? !N : !y,
                    showPending: !0
                }),
                W = f.isInteractionPlaceholder(),
                U = o.useMemo(() => {
                    var e, t;
                    return W &&
                        null == E.avatar &&
                        (null === (e = f.application) || void 0 === e ? void 0 : e.icon) != null &&
                        null !==
                            (t = w.ZP.getApplicationIconURL({
                                id: f.application.id,
                                icon: f.application.icon,
                                size: A,
                                fallbackAvatar: !1
                            })) &&
                        void 0 !== t
                        ? t
                        : D;
                }, [W, null === (t = f.application) || void 0 === t ? void 0 : t.icon, null === (n = f.application) || void 0 === n ? void 0 : n.id, E.avatar, A, D]);
            return (o.useEffect(() => {
                if (null != h) return k.S.subscribeKeyed(G.LPv.ANIMATE_CHAT_AVATAR, ''.concat(h, ':').concat(Z), I), () => void k.S.unsubscribeKeyed(G.LPv.ANIMATE_CHAT_AVATAR, ''.concat(h, ':').concat(Z), I);
            }, [Z, h]),
            b && !M)
                ? void 0
                : null != p && null != j
                  ? (0, r.jsx)(d.Gt, {
                        value: S,
                        children: (0, r.jsx)(l.yRy, {
                            preload: R
                                ? void 0
                                : function () {
                                      return (0, P.Z)(
                                          f.author.id,
                                          null != _.guildMemberAvatar && null != i
                                              ? w.ZP.getGuildMemberAvatarURLSimple({
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
                            shouldShow: j,
                            position: s.tq ? 'window_center' : 'right',
                            onRequestClose: x,
                            clickTrap: !0,
                            children: (e) =>
                                V(
                                    F(H({}, L), {
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
                        children: V(
                            F(H({}, L), {
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
        er = (0, c.e7)([T.ZP], () => {
            var t;
            return null !== (t = e.displayCompactAvatars) && void 0 !== t ? t : T.ZP.displayCompactAvatars;
        }),
        eo =
            (!a || er) && null != x && null != $
                ? (0, r.jsx)(
                      l.yRy,
                      {
                          animation: l.yRy.Animation.TRANSLATE,
                          align: 'center',
                          autoInvert: !0,
                          nudgeAlignIntoViewport: !0,
                          position: 'right',
                          renderPopout: () =>
                              (0, r.jsx)(B.Z, {
                                  roleIcon: x,
                                  guild: $
                              }),
                          clickTrap: !0,
                          children: (e) => {
                              let { onClick: t } = e;
                              return (0, r.jsx)(
                                  m.Z,
                                  F(H({}, x), {
                                      className: U.roleIcon,
                                      onClick: t
                                  })
                              );
                          }
                      },
                      'role-icon-children'
                  )
                : (!a || er) && null != x
                  ? (0, r.jsx)(m.Z, F(H({}, x), { className: U.roleIcon }), 'role-icon-children')
                  : null,
        ea = (0, L.x)({
            message: t,
            channel: X,
            user: null == t ? void 0 : t.author,
            compact: a,
            isRepliedMessage: !1
        }),
        ei = [],
        es = S.default.getCurrentUser(),
        ec = R.ZP.isPremium(t.author),
        el = R.ZP.isPremium(es),
        eu = null == X ? void 0 : X.isPrivate();
    (0, E.R)(null != x, 'Message Username') &&
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
                    _.Z,
                    {
                        guild: $,
                        message: t
                    },
                    'new-member'
                )
            ),
            ei.push(
                (0, r.jsx)(
                    b.Z,
                    {
                        guild: $,
                        message: t
                    },
                    'leaderboard-champion'
                )
            )),
        null != X &&
            null != $ &&
            ei.push(
                (0, r.jsx)(
                    g.Z,
                    {
                        guild: $,
                        channel: X,
                        userId: t.author.id,
                        messageId: t.id
                    },
                    'connections'
                )
            );
    let ed = [];
    (0, M.yE)(t.flags, G.iLy.SUPPRESS_NOTIFICATIONS) && ed.push((0, r.jsx)(O.Z, {}, 'suppress-notifications')), t.hasPotions() && ed.push((0, r.jsx)(h.Z, { message: t }));
    let ep = {};
    (ep[Z.a.SYSTEM_TAG] = ea), (ep[Z.a.BADGES] = ei);
    let eg = K(e, Q, ep),
        em = (0, A.XX)(t, j),
        ef = (0, A.Dv)(t),
        e_ = D ? ''.concat(em) : ''.concat(em, ' ').concat(ef),
        eb = (null == n ? void 0 : n.state) === v.Y.LOADED ? (0, A.Gq)(t) : void 0;
    return (0, r.jsx)(q, {
        message: t,
        avatar: en,
        username: (0, r.jsxs)(r.Fragment, {
            children: [
                et &&
                    (0, r.jsx)(l.ua7, {
                        text: W.NW.string(W.t.AeYyLy),
                        children: (e) =>
                            (0, r.jsxs)(r.Fragment, {
                                children: [
                                    (0, r.jsx)(
                                        l.YlB,
                                        F(
                                            H(
                                                {
                                                    size: 'xxs',
                                                    color: 'currentColor'
                                                },
                                                e
                                            ),
                                            { className: a ? U.compactCommunicationDisabled : U.communicationDisabled }
                                        )
                                    ),
                                    (0, r.jsx)(l.nn4, { children: W.NW.string(W.t.AmHag4) })
                                ]
                            })
                    }),
                eg
            ]
        }),
        usernameSpanId: (0, A.XX)(t, j),
        usernameClassName: i()(U.headerText, {
            [U.hasRoleIcon]: null != eo,
            [U.hasBadges]: null != ea || ed.length > 0
        }),
        compact: a,
        showTimestamp: !0 !== D,
        showTimestampOnHover: y,
        ariaLabelledBy: e_,
        ariaDescribedBy: eb,
        className: z,
        badges: ed
    });
}
