n.d(t, {
    CF: () => X,
    ZP: () => et,
    nD: () => Q
}),
    n(539854),
    n(388685),
    n(997841);
var r = n(200651),
    o = n(192379),
    a = n(120356),
    i = n.n(a),
    s = n(873546),
    l = n(442837),
    c = n(481060),
    u = n(100527),
    d = n(906732),
    p = n(835473),
    g = n(366030),
    m = n(91218),
    f = n(71619),
    b = n(340797),
    h = n(913834),
    y = n(397589),
    _ = n(98278),
    O = n(869765),
    v = n(243317),
    j = n(621853),
    x = n(518950),
    C = n(484459),
    P = n(670188),
    N = n(740492),
    T = n(430824),
    w = n(496675),
    S = n(594174),
    I = n(768581),
    k = n(585483),
    R = n(630388),
    M = n(74538),
    E = n(276554),
    Z = n(739566),
    A = n(421399),
    D = n(453687),
    L = n(318713),
    B = n(304176),
    G = n(47930),
    U = n(935910),
    W = n(981631),
    H = n(388032),
    z = n(848697),
    F = n(121282);
function V(e) {
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
function K(e, t) {
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
function q(e) {
    let { avatarSrc: t, avatarDecorationSrc: n, compact: o, onClick: a, onContextMenu: s, onMouseDown: l, onMouseEnter: c, onMouseLeave: u, onKeyDown: d, showCommunicationDisabledStyles: p = !1, className: g, avatarImgRef: m } = e;
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)('img', {
                ref: m,
                onClick: a,
                onContextMenu: s,
                onKeyDown: d,
                onMouseDown: l,
                onMouseEnter: c,
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
let Y = o.memo(function (e) {
    let { message: t, author: n, channel: a, guildId: i, compact: s = !1, roleIconProps: u, showUsernamePopout: d, renderPopout: p, onClickUsername: f, onContextMenu: y, displayCompactAvatars: _ = !1, onPopoutRequestClose: O, preview: v } = e,
        j = (0, Z.ZP)(t, n),
        x = o.useMemo(
            () =>
                (0, G.x)({
                    message: t,
                    channel: a,
                    user: null == t ? void 0 : t.author,
                    compact: s,
                    isRepliedMessage: !1
                }),
            [t, a, s]
        ),
        C = o.useRef(null),
        P = (0, l.e7)([T.Z], () => T.Z.getGuild(i)),
        N = o.useMemo(() => $(s, _, u, P), [s, _, u, P]),
        w = o.useMemo(
            () =>
                null == u
                    ? null
                    : 1 === N && null != P
                      ? (0, r.jsx)(
                            c.yRy,
                            {
                                targetElementRef: C,
                                animation: c.yRy.Animation.TRANSLATE,
                                align: 'center',
                                autoInvert: !0,
                                nudgeAlignIntoViewport: !0,
                                position: 'right',
                                renderPopout: () =>
                                    (0, r.jsx)(B.Z, {
                                        roleIcon: u,
                                        guild: P
                                    }),
                                clickTrap: !0,
                                children: (e) => {
                                    let { onClick: t } = e;
                                    return (0, r.jsx)(
                                        m.Z,
                                        K(V({ ref: C }, u), {
                                            className: z.roleIcon,
                                            onClick: t
                                        })
                                    );
                                }
                            },
                            'role-icon-children'
                        )
                      : 2 === N
                        ? (0, r.jsx)(m.Z, K(V({}, u), { className: z.roleIcon }), 'role-icon-children')
                        : null,
            [N, u, P]
        ),
        I = (0, l.e7)([S.default], () => S.default.getCurrentUser()),
        k = o.useMemo(() => {
            let e = [],
                n = M.ZP.isPremium(t.author),
                o = M.ZP.isPremium(I),
                i = null == a ? void 0 : a.isPrivate();
            return (
                (0, E.R)(null != u, 'Message Username') &&
                    n &&
                    !s &&
                    !i &&
                    e.push(
                        (0, r.jsx)(
                            ee,
                            {
                                currentUserIsPremium: o,
                                author: t.author
                            },
                            'nitro-author'
                        )
                    ),
                null != w && e.push(w),
                null != P &&
                    (e.push(
                        (0, r.jsx)(
                            b.Z,
                            {
                                guild: P,
                                message: t
                            },
                            'new-member'
                        )
                    ),
                    e.push(
                        (0, r.jsx)(
                            h.Z,
                            {
                                guild: P,
                                message: t
                            },
                            'leaderboard-champion'
                        )
                    )),
                null != a &&
                    null != P &&
                    e.push(
                        (0, r.jsx)(
                            g.Z,
                            {
                                guild: P,
                                channel: a,
                                userId: t.author.id,
                                messageId: t.id
                            },
                            'connections'
                        )
                    ),
                e
            );
        }, [t, a, u, s, w, P, I]);
    return null == j
        ? null
        : (0, r.jsxs)(r.Fragment, {
              children: [
                  (0, r.jsx)(A.Z, {
                      message: t,
                      channel: a,
                      author: j,
                      compact: s,
                      roleIcon: u,
                      showPopout: d,
                      renderPopout: p,
                      onClick: f,
                      onContextMenu: y,
                      onPopoutRequestClose: O,
                      decorations: {
                          [A.a.SYSTEM_TAG]: x,
                          [A.a.BADGES]: k
                      },
                      renderRemixTag: !0,
                      previewGuildId: i,
                      preview: v
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
});
function X(e, t, n) {
    let { message: o, channel: a, author: i, compact: s = !1, onContextMenu: l, showUsernamePopout: c, roleIcon: u, onClickUsername: d, onPopoutRequestClose: p } = e;
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(A.Z, {
                message: o,
                channel: a,
                author: i,
                compact: s,
                roleIcon: u,
                showPopout: c,
                renderPopout: t,
                onClick: d,
                onContextMenu: l,
                onPopoutRequestClose: p,
                decorations: n,
                preview: !0,
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
function Q(e) {
    let { message: t, avatar: n, username: o, usernameSpanId: a, usernameClassName: s, compact: l, showTimestamp: u, showTimestampOnHover: d, ariaLabelledBy: g, ariaDescribedBy: m, className: f, messageClassname: b, badges: h } = e,
        y = (0, R.yE)(t.flags, W.iLy.SENT_BY_SOCIAL_LAYER_INTEGRATION) ? t.applicationId : null,
        _ = (0, p.q)(y);
    return (0, r.jsxs)(r.Fragment, {
        children: [
            !l && n,
            (0, r.jsxs)(c.H, {
                className: i()(z.header, f),
                'aria-describedby': m,
                'aria-labelledby': g,
                children: [
                    u &&
                        l &&
                        (0, r.jsx)(L.Z, {
                            id: (0, D.Dv)(t),
                            compact: !0,
                            timestamp: t.timestamp,
                            isVisibleOnlyOnHover: d,
                            className: b,
                            isInline: !1,
                            application: _
                        }),
                    l && n,
                    (0, r.jsx)('span', {
                        id: a,
                        className: s,
                        children: o
                    }),
                    u &&
                        !l &&
                        (0, r.jsx)(L.Z, {
                            id: (0, D.Dv)(t),
                            timestamp: t.timestamp,
                            className: b,
                            application: _
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
    });
}
let J = (e) => {
    e || (0, _.z)();
};
function $(e, t, n, r) {
    return (!e || t) && null != n && null != r ? 1 : (!e || t) && null != n ? 2 : 0;
}
let ee = o.memo(function (e) {
        let { currentUserIsPremium: t, author: n } = e,
            o = (0, l.e7)([j.Z], () => {
                var e;
                return null == (e = j.Z.getUserProfile(n.id)) ? void 0 : e.premiumSince;
            });
        return (0, r.jsx)(c.ua7, {
            tooltipClassName: z.nitroAuthorBadgeTootip,
            shouldShow: null != o,
            text: H.NW.formatToPlainString(H.t['8zbGNT'], { date: o }),
            onTooltipShow: () => (0, C.Z)(n.id),
            children: (e) =>
                (0, r.jsx)(c.P3F, {
                    className: z.nitroAuthorBadgeContainer,
                    onClick: () => J(t),
                    'aria-label': H.NW.formatToPlainString(H.t['8zbGNT'], { date: o }),
                    children: (0, r.jsx)(
                        'img',
                        V(
                            {
                                alt: '',
                                className: z.nitroBadgeSvg,
                                src: F
                            },
                            e
                        )
                    )
                })
        });
    }),
    et = o.memo(function (e) {
        let { message: t, repliedMessage: n, compact: a = !1, renderPopout: p, showTimestampOnHover: g, roleIcon: m, subscribeToGroupId: b, hideTimestamp: h, className: _, channel: j, preview: C } = e,
            S = o.useMemo(() => (null != p ? (e) => p(e, t) : void 0), [p, t]),
            [, M] = (0, f.ZP)(t.author.id, e.guildId),
            E = (0, l.e7)(
                [w.Z, T.Z],
                () => {
                    let n = T.Z.getGuild(e.guildId);
                    return null != t.author && null != n && w.Z.canManageUser(W.Plq.MODERATE_MEMBERS, t.author, n);
                },
                [t.author, e.guildId]
            ),
            Z = M && E,
            A = (function (e) {
                var t, n;
                let { props: a, guildId: i, handleRenderPopout: c, showCommunicationDisabledStyles: p = !1, className: g } = e,
                    { message: m, author: f, compact: b = !1, subscribeToGroupId: h, animate: y = !0, onContextMenu: _, onClickAvatar: O, onPopoutRequestClose: v, showAvatarPopout: j } = a,
                    C = o.useRef(null),
                    [T, w] = o.useState(!1),
                    { analyticsLocations: S } = (0, d.ZP)(u.Z.AVATAR),
                    R = (0, l.e7)([N.ZP], () => {
                        var e;
                        return null != (e = a.displayCompactAvatars) ? e : N.ZP.displayCompactAvatars;
                    }),
                    M = m.author,
                    { id: E } = M,
                    Z = (0, U.Z)(m),
                    A = b ? 32 : 80,
                    {
                        avatarSrc: D,
                        avatarDecorationSrc: L,
                        eventHandlers: B
                    } = (0, x.Z)({
                        user: M,
                        guildId: i,
                        size: A,
                        animateOnHover: null != h ? !T : !y,
                        showPending: !0
                    }),
                    G = m.isInteractionPlaceholder(),
                    H = o.useMemo(() => {
                        var e, t;
                        return G &&
                            null == M.avatar &&
                            (null == (e = m.application) ? void 0 : e.icon) != null &&
                            null !=
                                (t = I.ZP.getApplicationIconURL({
                                    id: m.application.id,
                                    icon: m.application.icon,
                                    size: A,
                                    fallbackAvatar: !1
                                }))
                            ? t
                            : D;
                    }, [G, null == (t = m.application) ? void 0 : t.icon, null == (n = m.application) ? void 0 : n.id, M.avatar, A, D]);
                if (
                    (o.useEffect(() => {
                        if (null != h) return k.S.subscribeKeyed(W.LPv.ANIMATE_CHAT_AVATAR, ''.concat(h, ':').concat(E), w), () => void k.S.unsubscribeKeyed(W.LPv.ANIMATE_CHAT_AVATAR, ''.concat(h, ':').concat(E), w);
                    }, [E, h]),
                    !b || R)
                )
                    return null != c && null != j
                        ? (0, r.jsx)(d.Gt, {
                              value: S,
                              children: (0, r.jsx)(P.Z, {
                                  targetElementRef: C,
                                  user: m.author,
                                  guildId: i,
                                  channelId: m.channel_id,
                                  messageId: m.id,
                                  shouldShow: j,
                                  shouldPreload: Z,
                                  renderPopout: c,
                                  position: s.tq ? 'window_center' : 'right',
                                  avatarUrl:
                                      null != f.guildMemberAvatar && null != i
                                          ? I.ZP.getGuildMemberAvatarURLSimple({
                                                guildId: i,
                                                userId: m.author.id,
                                                avatar: f.guildMemberAvatar,
                                                size: 80
                                            })
                                          : m.author.getAvatarURL(void 0, 80, !1),
                                  onRequestClose: v,
                                  clickTrap: j,
                                  children: (e) =>
                                      q(
                                          K(V({}, B), {
                                              avatarSrc: H,
                                              avatarDecorationSrc: L,
                                              compact: b,
                                              onClick: O,
                                              onContextMenu: _,
                                              onMouseDown: e.onMouseDown,
                                              onKeyDown: e.onKeyDown,
                                              showCommunicationDisabledStyles: p,
                                              className: g,
                                              avatarImgRef: C
                                          })
                                      )
                              })
                          })
                        : (0, r.jsx)(d.Gt, {
                              value: S,
                              children: q(
                                  K(V({}, B), {
                                      avatarSrc: H,
                                      avatarDecorationSrc: L,
                                      compact: b,
                                      onClick: O,
                                      onContextMenu: _,
                                      onMouseDown: void 0,
                                      onKeyDown: void 0,
                                      showCommunicationDisabledStyles: p,
                                      className: g
                                  })
                              )
                          });
            })({
                props: e,
                guildId: e.guildId,
                handleRenderPopout: S,
                showCommunicationDisabledStyles: Z
            }),
            L = (0, l.e7)([N.ZP], () => {
                var t;
                return null != (t = e.displayCompactAvatars) ? t : N.ZP.displayCompactAvatars;
            }),
            B = o.useMemo(
                () =>
                    (0, G.b)({
                        message: t,
                        channel: j,
                        user: null == t ? void 0 : t.author,
                        compact: a,
                        isRepliedMessage: !1
                    }),
                [t, j, a]
            ),
            F = (0, l.e7)([T.Z], () => $(a, L, m, T.Z.getGuild(e.guildId)), [a, L, m, e.guildId]),
            X = o.useMemo(() => {
                let e = [];
                return (0, R.yE)(t.flags, W.iLy.SUPPRESS_NOTIFICATIONS) && e.push((0, r.jsx)(v.Z, {}, 'suppress-notifications')), t.hasPotions() && e.push((0, r.jsx)(y.Z, { message: t })), e;
            }, [t]),
            J = (0, D.XX)(t, b),
            ee = (0, D.Dv)(t),
            et = h ? ''.concat(J) : ''.concat(J, ' ').concat(ee),
            en = (null == n ? void 0 : n.state) === O.Y.LOADED ? (0, D.Gq)(t) : void 0;
        return (0, r.jsx)(Q, {
            message: t,
            avatar: A,
            username: (0, r.jsxs)(r.Fragment, {
                children: [
                    Z &&
                        (0, r.jsx)(c.ua7, {
                            text: H.NW.string(H.t.AeYyLy),
                            children: (e) =>
                                (0, r.jsxs)(r.Fragment, {
                                    children: [
                                        (0, r.jsx)(
                                            c.YlB,
                                            K(
                                                V(
                                                    {
                                                        size: 'xxs',
                                                        color: 'currentColor'
                                                    },
                                                    e
                                                ),
                                                { className: a ? z.compactCommunicationDisabled : z.communicationDisabled }
                                            )
                                        ),
                                        (0, r.jsx)(c.nn4, { children: H.NW.string(H.t.AmHag4) })
                                    ]
                                })
                        }),
                    (0, r.jsx)(
                        Y,
                        K(V({}, e), {
                            message: t,
                            channel: j,
                            compact: a,
                            roleIconProps: m,
                            renderPopout: S,
                            preview: C
                        })
                    )
                ]
            }),
            usernameSpanId: (0, D.XX)(t, b),
            usernameClassName: i()(z.headerText, {
                [z.hasRoleIcon]: 0 !== F,
                [z.hasBadges]: null != B || X.length > 0
            }),
            compact: a,
            showTimestamp: !0 !== h,
            showTimestampOnHover: g,
            ariaLabelledBy: et,
            ariaDescribedBy: en,
            className: _,
            badges: X
        });
    });
