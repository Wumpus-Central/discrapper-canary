n.d(t, {
    CF: () => Q,
    ZP: () => et,
    nD: () => X
}),
    n(539854),
    n(388685),
    n(997841);
var r = n(200651),
    o = n(192379),
    a = n(120356),
    i = n.n(a),
    l = n(873546),
    s = n(442837),
    c = n(481060),
    u = n(100527),
    d = n(906732),
    p = n(835473),
    g = n(366030),
    m = n(91218),
    f = n(71619),
    b = n(340797),
    h = n(913834),
    _ = n(397589),
    y = n(98278),
    v = n(869765),
    O = n(243317),
    j = n(621853),
    x = n(518950),
    C = n(484459),
    P = n(670188),
    T = n(740492),
    w = n(430824),
    S = n(496675),
    I = n(594174),
    k = n(768581),
    N = n(585483),
    M = n(630388),
    R = n(74538),
    E = n(276554),
    Z = n(739566),
    A = n(421399),
    D = n(453687),
    B = n(318713),
    L = n(304176),
    G = n(47930),
    U = n(935910),
    H = n(981631),
    z = n(388032),
    F = n(848697),
    V = n(121282);
function K(e) {
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
function q(e, t) {
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
function W(e) {
    let { avatarSrc: t, avatarDecorationSrc: n, compact: o, onClick: a, onContextMenu: l, onMouseDown: s, onMouseEnter: c, onMouseLeave: u, onKeyDown: d, showCommunicationDisabledStyles: p = !1, className: g, avatarImgRef: m } = e;
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)('img', {
                ref: m,
                onClick: a,
                onContextMenu: l,
                onKeyDown: d,
                onMouseDown: s,
                onMouseEnter: c,
                onMouseLeave: u,
                src: t,
                'aria-hidden': !0,
                className: i()(g, F.avatar, {
                    [F.compact]: o,
                    [F.clickable]: null != a,
                    [F.communicationDisabledOpacity]: p
                }),
                alt: ' '
            }),
            null == n || o
                ? null
                : (0, r.jsx)('img', {
                      className: F.avatarDecoration,
                      src: n,
                      alt: ' ',
                      'aria-hidden': !0
                  })
        ]
    });
}
let Y = o.memo(function (e) {
    let { message: t, author: n, channel: a, guildId: i, compact: l = !1, roleIconProps: u, showUsernamePopout: d, renderPopout: p, onClickUsername: f, onContextMenu: _, displayCompactAvatars: y = !1, onPopoutRequestClose: v, preview: O } = e,
        j = (0, Z.ZP)(t, n),
        x = o.useMemo(
            () =>
                (0, G.x)({
                    message: t,
                    channel: a,
                    user: null == t ? void 0 : t.author,
                    compact: l,
                    isRepliedMessage: !1
                }),
            [t, a, l]
        ),
        C = o.useRef(null),
        P = (0, s.e7)([w.Z], () => w.Z.getGuild(i)),
        T = o.useMemo(() => $(l, y, u, P), [l, y, u, P]),
        S = o.useMemo(
            () =>
                null == u
                    ? null
                    : 1 === T && null != P
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
                                    (0, r.jsx)(L.Z, {
                                        roleIcon: u,
                                        guild: P
                                    }),
                                clickTrap: !0,
                                children: (e) => {
                                    let { onClick: t } = e;
                                    return (0, r.jsx)(
                                        m.Z,
                                        q(K({ ref: C }, u), {
                                            className: F.roleIcon,
                                            onClick: t
                                        })
                                    );
                                }
                            },
                            'role-icon-children'
                        )
                      : 2 === T
                        ? (0, r.jsx)(m.Z, q(K({}, u), { className: F.roleIcon }), 'role-icon-children')
                        : null,
            [T, u, P]
        ),
        k = (0, s.e7)([I.default], () => I.default.getCurrentUser()),
        N = o.useMemo(() => {
            let e = [],
                n = R.ZP.isPremium(t.author),
                o = R.ZP.isPremium(k),
                i = null == a ? void 0 : a.isPrivate();
            return (
                (0, E.R)(null != u, 'Message Username') &&
                    n &&
                    !l &&
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
                null != S && e.push(S),
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
        }, [t, a, u, l, S, P, k]);
    return null == j
        ? null
        : (0, r.jsxs)(r.Fragment, {
              children: [
                  (0, r.jsx)(A.Z, {
                      message: t,
                      channel: a,
                      author: j,
                      compact: l,
                      roleIcon: u,
                      showPopout: d,
                      renderPopout: p,
                      onClick: f,
                      onContextMenu: _,
                      onPopoutRequestClose: v,
                      decorations: {
                          [A.a.SYSTEM_TAG]: x,
                          [A.a.BADGES]: N
                      },
                      renderRemixTag: !0,
                      previewGuildId: i,
                      preview: O
                  }),
                  l &&
                      (0, r.jsxs)(r.Fragment, {
                          children: [
                              (0, r.jsx)('i', {
                                  className: F.separator,
                                  children: ':'
                              }),
                              ' '
                          ]
                      })
              ]
          });
});
function Q(e, t, n) {
    let { message: o, channel: a, author: i, compact: l = !1, onContextMenu: s, showUsernamePopout: c, roleIcon: u, onClickUsername: d, onPopoutRequestClose: p } = e;
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(A.Z, {
                message: o,
                channel: a,
                author: i,
                compact: l,
                roleIcon: u,
                showPopout: c,
                renderPopout: t,
                onClick: d,
                onContextMenu: s,
                onPopoutRequestClose: p,
                decorations: n,
                preview: !0,
                renderRemixTag: !0
            }),
            l &&
                (0, r.jsxs)(r.Fragment, {
                    children: [
                        (0, r.jsx)('i', {
                            className: F.separator,
                            children: ':'
                        }),
                        ' '
                    ]
                })
        ]
    });
}
function X(e) {
    let { message: t, avatar: n, username: o, usernameSpanId: a, usernameClassName: l, compact: s, showTimestamp: u, showTimestampOnHover: d, ariaLabelledBy: g, ariaDescribedBy: m, className: f, messageClassname: b, badges: h } = e,
        _ = (0, M.yE)(t.flags, H.iLy.SENT_BY_SOCIAL_LAYER_INTEGRATION) ? t.applicationId : null,
        y = (0, p.q)(_);
    return (0, r.jsxs)(r.Fragment, {
        children: [
            !s && n,
            (0, r.jsxs)(c.H, {
                className: i()(F.header, f),
                'aria-describedby': m,
                'aria-labelledby': g,
                children: [
                    u &&
                        s &&
                        (0, r.jsx)(B.Z, {
                            id: (0, D.Dv)(t),
                            compact: !0,
                            timestamp: t.timestamp,
                            isVisibleOnlyOnHover: d,
                            className: b,
                            isInline: !1,
                            application: y
                        }),
                    s && n,
                    (0, r.jsx)('span', {
                        id: a,
                        className: l,
                        children: o
                    }),
                    u &&
                        !s &&
                        (0, r.jsx)(B.Z, {
                            id: (0, D.Dv)(t),
                            timestamp: t.timestamp,
                            className: b,
                            application: y
                        }),
                    null != h && h.length > 0
                        ? (0, r.jsx)('div', {
                              className: F.badgesContainer,
                              children: h
                          })
                        : null
                ]
            })
        ]
    });
}
let J = (e) => {
    e || (0, y.z)();
};
function $(e, t, n, r) {
    return (!e || t) && null != n && null != r ? 1 : (!e || t) && null != n ? 2 : 0;
}
let ee = o.memo(function (e) {
        let { currentUserIsPremium: t, author: n } = e,
            o = (0, s.e7)([j.Z], () => {
                var e;
                return null == (e = j.Z.getUserProfile(n.id)) ? void 0 : e.premiumSince;
            });
        return (0, r.jsx)(c.ua7, {
            tooltipClassName: F.nitroAuthorBadgeTootip,
            shouldShow: null != o,
            text: z.intl.formatToPlainString(z.t['8zbGNT'], { date: o }),
            onTooltipShow: () => (0, C.Z)(n.id),
            children: (e) =>
                (0, r.jsx)(c.P3F, {
                    className: F.nitroAuthorBadgeContainer,
                    onClick: () => J(t),
                    'aria-label': z.intl.formatToPlainString(z.t['8zbGNT'], { date: o }),
                    children: (0, r.jsx)(
                        'img',
                        K(
                            {
                                alt: '',
                                className: F.nitroBadgeSvg,
                                src: V
                            },
                            e
                        )
                    )
                })
        });
    }),
    et = o.memo(function (e) {
        let { message: t, repliedMessage: n, compact: a = !1, renderPopout: p, showTimestampOnHover: g, roleIcon: m, subscribeToGroupId: b, hideTimestamp: h, className: y, channel: j, preview: C } = e,
            I = o.useMemo(() => (null != p ? (e) => p(e, t) : void 0), [p, t]),
            [, R] = (0, f.ZP)(t.author.id, e.guildId),
            E = (0, s.e7)(
                [S.Z, w.Z],
                () => {
                    let n = w.Z.getGuild(e.guildId);
                    return null != t.author && null != n && S.Z.canManageUser(H.Plq.MODERATE_MEMBERS, t.author, n);
                },
                [t.author, e.guildId]
            ),
            Z = R && E,
            A = (function (e) {
                var t, n;
                let { props: a, guildId: i, handleRenderPopout: c, showCommunicationDisabledStyles: p = !1, className: g } = e,
                    { message: m, author: f, compact: b = !1, subscribeToGroupId: h, animate: _ = !0, onContextMenu: y, onClickAvatar: v, onPopoutRequestClose: O, showAvatarPopout: j } = a,
                    C = o.useRef(null),
                    [w, S] = o.useState(!1),
                    { analyticsLocations: I } = (0, d.ZP)(u.Z.AVATAR),
                    M = (0, s.e7)([T.ZP], () => {
                        var e;
                        return null != (e = a.displayCompactAvatars) ? e : T.ZP.displayCompactAvatars;
                    }),
                    R = m.author,
                    { id: E } = R,
                    Z = (0, U.Z)(m),
                    A = b ? 32 : 80,
                    {
                        avatarSrc: D,
                        avatarDecorationSrc: B,
                        eventHandlers: L
                    } = (0, x.Z)({
                        user: R,
                        guildId: i,
                        size: A,
                        animateOnHover: null != h ? !w : !_,
                        showPending: !0
                    }),
                    G = m.isInteractionPlaceholder(),
                    z = o.useMemo(() => {
                        var e, t;
                        return G &&
                            null == R.avatar &&
                            (null == (e = m.application) ? void 0 : e.icon) != null &&
                            null !=
                                (t = k.ZP.getApplicationIconURL({
                                    id: m.application.id,
                                    icon: m.application.icon,
                                    size: A,
                                    fallbackAvatar: !1
                                }))
                            ? t
                            : D;
                    }, [G, null == (t = m.application) ? void 0 : t.icon, null == (n = m.application) ? void 0 : n.id, R.avatar, A, D]);
                if (
                    (o.useEffect(() => {
                        if (null != h) return N.S.subscribeKeyed(H.LPv.ANIMATE_CHAT_AVATAR, ''.concat(h, ':').concat(E), S), () => void N.S.unsubscribeKeyed(H.LPv.ANIMATE_CHAT_AVATAR, ''.concat(h, ':').concat(E), S);
                    }, [E, h]),
                    !b || M)
                )
                    return null != c && null != j
                        ? (0, r.jsx)(d.Gt, {
                              value: I,
                              children: (0, r.jsx)(P.Z, {
                                  targetElementRef: C,
                                  user: m.author,
                                  guildId: i,
                                  channelId: m.channel_id,
                                  messageId: m.id,
                                  shouldShow: j,
                                  shouldPreload: Z,
                                  renderPopout: c,
                                  position: l.tq ? 'window_center' : 'right',
                                  avatarUrl:
                                      null != f.guildMemberAvatar && null != i
                                          ? k.ZP.getGuildMemberAvatarURLSimple({
                                                guildId: i,
                                                userId: m.author.id,
                                                avatar: f.guildMemberAvatar,
                                                size: 80
                                            })
                                          : m.author.getAvatarURL(void 0, 80, !1),
                                  onRequestClose: O,
                                  clickTrap: j,
                                  children: (e) =>
                                      W(
                                          q(K({}, L), {
                                              avatarSrc: z,
                                              avatarDecorationSrc: B,
                                              compact: b,
                                              onClick: v,
                                              onContextMenu: y,
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
                              value: I,
                              children: W(
                                  q(K({}, L), {
                                      avatarSrc: z,
                                      avatarDecorationSrc: B,
                                      compact: b,
                                      onClick: v,
                                      onContextMenu: y,
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
                handleRenderPopout: I,
                showCommunicationDisabledStyles: Z
            }),
            B = (0, s.e7)([T.ZP], () => {
                var t;
                return null != (t = e.displayCompactAvatars) ? t : T.ZP.displayCompactAvatars;
            }),
            L = o.useMemo(
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
            V = (0, s.e7)([w.Z], () => $(a, B, m, w.Z.getGuild(e.guildId)), [a, B, m, e.guildId]),
            Q = o.useMemo(() => {
                let e = [];
                return (0, M.yE)(t.flags, H.iLy.SUPPRESS_NOTIFICATIONS) && e.push((0, r.jsx)(O.Z, {}, 'suppress-notifications')), t.hasPotions() && e.push((0, r.jsx)(_.Z, { message: t })), e;
            }, [t]),
            J = (0, D.XX)(t, b),
            ee = (0, D.Dv)(t),
            et = h ? ''.concat(J) : ''.concat(J, ' ').concat(ee),
            en = (null == n ? void 0 : n.state) === v.Y.LOADED ? (0, D.Gq)(t) : void 0;
        return (0, r.jsx)(X, {
            message: t,
            avatar: A,
            username: (0, r.jsxs)(r.Fragment, {
                children: [
                    Z &&
                        (0, r.jsx)(c.ua7, {
                            text: z.intl.string(z.t.AeYyLy),
                            children: (e) =>
                                (0, r.jsxs)(r.Fragment, {
                                    children: [
                                        (0, r.jsx)(
                                            c.YlB,
                                            q(
                                                K(
                                                    {
                                                        size: 'xxs',
                                                        color: 'currentColor'
                                                    },
                                                    e
                                                ),
                                                { className: a ? F.compactCommunicationDisabled : F.communicationDisabled }
                                            )
                                        ),
                                        (0, r.jsx)(c.nn4, { children: z.intl.string(z.t.AmHag4) })
                                    ]
                                })
                        }),
                    (0, r.jsx)(
                        Y,
                        q(K({}, e), {
                            message: t,
                            channel: j,
                            compact: a,
                            roleIconProps: m,
                            renderPopout: I,
                            preview: C
                        })
                    )
                ]
            }),
            usernameSpanId: (0, D.XX)(t, b),
            usernameClassName: i()(F.headerText, {
                [F.hasRoleIcon]: 0 !== V,
                [F.hasBadges]: null != L || Q.length > 0
            }),
            compact: a,
            showTimestamp: !0 !== h,
            showTimestampOnHover: g,
            ariaLabelledBy: et,
            ariaDescribedBy: en,
            className: y,
            badges: Q
        });
    });
