n.d(t, {
    CF: () => X,
    ZP: () => et,
    nD: () => Q
}),
    n(539854),
    n(388685),
    n(997841);
var r = n(255367),
    o = n(73800),
    l = n(120356),
    i = n.n(l),
    s = n(873546),
    a = n(442837),
    c = n(481060),
    u = n(100527),
    d = n(906732),
    p = n(835473),
    m = n(366030),
    g = n(91218),
    f = n(71619),
    b = n(340797),
    h = n(913834),
    O = n(397589),
    y = n(98278),
    j = n(869765),
    v = n(243317),
    P = n(621853),
    x = n(518950),
    C = n(484459),
    w = n(670188),
    S = n(740492),
    N = n(430824),
    E = n(496675),
    R = n(594174),
    T = n(768581),
    Z = n(585483),
    _ = n(630388),
    k = n(74538),
    I = n(276554),
    M = n(739566),
    D = n(421399),
    A = n(453687),
    L = n(318713),
    G = n(304176),
    B = n(47930),
    U = n(935910),
    F = n(981631),
    z = n(388032),
    H = n(161441),
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
function W(e, t) {
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
    let { avatarSrc: t, avatarDecorationSrc: n, compact: o, onClick: l, onContextMenu: s, onMouseDown: a, onMouseEnter: c, onMouseLeave: u, onKeyDown: d, showCommunicationDisabledStyles: p = !1, className: m, avatarImgRef: g } = e;
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)('img', {
                ref: g,
                onClick: l,
                onContextMenu: s,
                onKeyDown: d,
                onMouseDown: a,
                onMouseEnter: c,
                onMouseLeave: u,
                src: t,
                'aria-hidden': !0,
                className: i()(m, H.avatar, {
                    [H.compact]: o,
                    [H.clickable]: null != l,
                    [H.communicationDisabledOpacity]: p
                }),
                alt: ' '
            }),
            null == n || o
                ? null
                : (0, r.jsx)('img', {
                      className: H.avatarDecoration,
                      src: n,
                      alt: ' ',
                      'aria-hidden': !0
                  })
        ]
    });
}
let Y = o.memo(function (e) {
    let { message: t, author: n, channel: l, guildId: i, compact: s = !1, roleIconProps: u, showUsernamePopout: d, renderPopout: p, onClickUsername: f, onContextMenu: O, displayCompactAvatars: y = !1, onPopoutRequestClose: j, preview: v, subscribeToGroupId: P } = e,
        x = (0, M.ZP)(t, n),
        C = o.useMemo(
            () =>
                (0, B.x)({
                    message: t,
                    channel: l,
                    user: null == t ? void 0 : t.author,
                    compact: s,
                    isRepliedMessage: !1
                }),
            [t, l, s]
        ),
        w = o.useRef(null),
        S = (0, a.e7)([N.Z], () => N.Z.getGuild(i)),
        E = o.useMemo(() => $(s, y, u, S), [s, y, u, S]),
        T = o.useMemo(
            () =>
                null == u
                    ? null
                    : 1 === E && null != S
                      ? (0, r.jsx)(
                            c.yRy,
                            {
                                targetElementRef: w,
                                animation: c.yRy.Animation.TRANSLATE,
                                align: 'center',
                                autoInvert: !0,
                                nudgeAlignIntoViewport: !0,
                                position: 'right',
                                renderPopout: () =>
                                    (0, r.jsx)(G.Z, {
                                        roleIcon: u,
                                        guild: S
                                    }),
                                clickTrap: !0,
                                children: (e) => {
                                    let { onClick: t } = e;
                                    return (0, r.jsx)(
                                        g.Z,
                                        W(K({ ref: w }, u), {
                                            className: H.roleIcon,
                                            onClick: t
                                        })
                                    );
                                }
                            },
                            'role-icon-children'
                        )
                      : 2 === E
                        ? (0, r.jsx)(g.Z, W(K({}, u), { className: H.roleIcon }), 'role-icon-children')
                        : null,
            [E, u, S]
        ),
        Z = (0, a.e7)([R.default], () => R.default.getCurrentUser()),
        _ = o.useMemo(() => {
            let e = [],
                n = k.ZP.isPremium(t.author),
                o = k.ZP.isPremium(Z),
                i = null == l ? void 0 : l.isPrivate();
            return (
                (0, I.R)(null != u, 'Message Username') &&
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
                null != T && e.push(T),
                null != S &&
                    (e.push(
                        (0, r.jsx)(
                            b.Z,
                            {
                                guild: S,
                                message: t
                            },
                            'new-member'
                        )
                    ),
                    e.push(
                        (0, r.jsx)(
                            h.Z,
                            {
                                guild: S,
                                message: t
                            },
                            'leaderboard-champion'
                        )
                    )),
                null != l &&
                    null != S &&
                    e.push(
                        (0, r.jsx)(
                            m.Z,
                            {
                                guild: S,
                                channel: l,
                                userId: t.author.id,
                                messageId: t.id
                            },
                            'connections'
                        )
                    ),
                e
            );
        }, [t, l, u, s, T, S, Z]);
    return null == x
        ? null
        : (0, r.jsxs)(r.Fragment, {
              children: [
                  (0, r.jsx)(D.Z, {
                      message: t,
                      channel: l,
                      author: x,
                      compact: s,
                      roleIcon: u,
                      showPopout: d,
                      renderPopout: p,
                      onClick: f,
                      onContextMenu: O,
                      onPopoutRequestClose: j,
                      decorations: {
                          [D.a.SYSTEM_TAG]: C,
                          [D.a.BADGES]: _
                      },
                      renderRemixTag: !0,
                      previewGuildId: i,
                      preview: v,
                      subscribeToGroupId: P
                  }),
                  s &&
                      (0, r.jsxs)(r.Fragment, {
                          children: [
                              (0, r.jsx)('i', {
                                  className: H.separator,
                                  children: ':'
                              }),
                              ' '
                          ]
                      })
              ]
          });
});
function X(e, t, n) {
    let { message: o, channel: l, author: i, compact: s = !1, onContextMenu: a, showUsernamePopout: c, roleIcon: u, onClickUsername: d, onPopoutRequestClose: p } = e;
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(D.Z, {
                message: o,
                channel: l,
                author: i,
                compact: s,
                roleIcon: u,
                showPopout: c,
                renderPopout: t,
                onClick: d,
                onContextMenu: a,
                onPopoutRequestClose: p,
                decorations: n,
                preview: !0,
                renderRemixTag: !0
            }),
            s &&
                (0, r.jsxs)(r.Fragment, {
                    children: [
                        (0, r.jsx)('i', {
                            className: H.separator,
                            children: ':'
                        }),
                        ' '
                    ]
                })
        ]
    });
}
function Q(e) {
    let { message: t, avatar: n, username: o, usernameSpanId: l, usernameClassName: s, compact: a, showTimestamp: u, showTimestampOnHover: d, ariaLabelledBy: m, ariaDescribedBy: g, className: f, messageClassname: b, badges: h } = e,
        O = (0, _.yE)(t.flags, F.iLy.SENT_BY_SOCIAL_LAYER_INTEGRATION) ? t.applicationId : null,
        y = (0, p.q)(O);
    return (0, r.jsxs)(r.Fragment, {
        children: [
            !a && n,
            (0, r.jsxs)(c.H, {
                className: i()(H.header, f),
                'aria-describedby': g,
                'aria-labelledby': m,
                children: [
                    u &&
                        a &&
                        (0, r.jsx)(L.Z, {
                            id: (0, A.Dv)(t),
                            compact: !0,
                            timestamp: t.timestamp,
                            isVisibleOnlyOnHover: d,
                            className: b,
                            isInline: !1,
                            application: y
                        }),
                    a && n,
                    (0, r.jsx)('span', {
                        id: l,
                        className: s,
                        children: o
                    }),
                    u &&
                        !a &&
                        (0, r.jsx)(L.Z, {
                            id: (0, A.Dv)(t),
                            timestamp: t.timestamp,
                            className: b,
                            application: y
                        }),
                    null != h && h.length > 0
                        ? (0, r.jsx)('div', {
                              className: H.badgesContainer,
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
            o = (0, a.e7)([P.Z], () => {
                var e;
                return null == (e = P.Z.getUserProfile(n.id)) ? void 0 : e.premiumSince;
            });
        return (0, r.jsx)(c.ua7, {
            tooltipClassName: H.nitroAuthorBadgeTootip,
            shouldShow: null != o,
            text: z.intl.formatToPlainString(z.t['8zbGNT'], { date: o }),
            onTooltipShow: () => (0, C.Z)(n.id),
            children: (e) =>
                (0, r.jsx)(c.P3F, {
                    className: H.nitroAuthorBadgeContainer,
                    onClick: () => J(t),
                    'aria-label': z.intl.formatToPlainString(z.t['8zbGNT'], { date: o }),
                    children: (0, r.jsx)(
                        'img',
                        K(
                            {
                                alt: '',
                                className: H.nitroBadgeSvg,
                                src: V
                            },
                            e
                        )
                    )
                })
        });
    }),
    et = o.memo(function (e) {
        let { message: t, repliedMessage: n, compact: l = !1, renderPopout: p, showTimestampOnHover: m, roleIcon: g, subscribeToGroupId: b, hideTimestamp: h, className: y, channel: P, preview: C } = e,
            R = o.useMemo(() => (null != p ? (e) => p(e, t) : void 0), [p, t]),
            [, k] = (0, f.ZP)(t.author.id, e.guildId),
            I = (0, a.e7)(
                [E.Z, N.Z],
                () => {
                    let n = N.Z.getGuild(e.guildId);
                    return null != t.author && null != n && E.Z.canManageUser(F.Plq.MODERATE_MEMBERS, t.author, n);
                },
                [t.author, e.guildId]
            ),
            M = k && I,
            D = (function (e) {
                var t, n;
                let { props: l, guildId: i, handleRenderPopout: c, showCommunicationDisabledStyles: p = !1, className: m } = e,
                    { message: g, author: f, compact: b = !1, subscribeToGroupId: h, animate: O = !0, onContextMenu: y, onClickAvatar: j, onPopoutRequestClose: v, showAvatarPopout: P } = l,
                    C = o.useRef(null),
                    [N, E] = o.useState(!1),
                    { analyticsLocations: R } = (0, d.ZP)(u.Z.AVATAR),
                    _ = (0, a.e7)([S.ZP], () => {
                        var e;
                        return null != (e = l.displayCompactAvatars) ? e : S.ZP.displayCompactAvatars;
                    }),
                    k = g.author,
                    { id: I } = k,
                    M = (0, U.Z)(g),
                    D = b ? 32 : 80,
                    {
                        avatarSrc: A,
                        avatarDecorationSrc: L,
                        eventHandlers: G
                    } = (0, x.Z)({
                        user: k,
                        guildId: i,
                        size: D,
                        animateOnHover: null != h ? !N : !O,
                        showPending: !0
                    }),
                    B = g.isInteractionPlaceholder(),
                    z = o.useMemo(() => {
                        var e, t;
                        return B &&
                            null == k.avatar &&
                            (null == (e = g.application) ? void 0 : e.icon) != null &&
                            null !=
                                (t = T.ZP.getApplicationIconURL({
                                    id: g.application.id,
                                    icon: g.application.icon,
                                    size: D,
                                    fallbackAvatar: !1
                                }))
                            ? t
                            : A;
                    }, [B, null == (t = g.application) ? void 0 : t.icon, null == (n = g.application) ? void 0 : n.id, k.avatar, D, A]);
                if (
                    (o.useEffect(() => {
                        if (null != h) return Z.S.subscribeKeyed(F.LPv.ANIMATE_CHAT_AVATAR, ''.concat(h, ':').concat(I), E), () => void Z.S.unsubscribeKeyed(F.LPv.ANIMATE_CHAT_AVATAR, ''.concat(h, ':').concat(I), E);
                    }, [I, h]),
                    !b || _)
                )
                    return null != c && null != P
                        ? (0, r.jsx)(d.Gt, {
                              value: R,
                              children: (0, r.jsx)(w.Z, {
                                  targetElementRef: C,
                                  user: g.author,
                                  guildId: i,
                                  channelId: g.channel_id,
                                  messageId: g.id,
                                  shouldShow: P,
                                  shouldPreload: M,
                                  renderPopout: c,
                                  position: s.tq ? 'window_center' : 'right',
                                  avatarUrl:
                                      null != f.guildMemberAvatar && null != i
                                          ? T.ZP.getGuildMemberAvatarURLSimple({
                                                guildId: i,
                                                userId: g.author.id,
                                                avatar: f.guildMemberAvatar,
                                                size: 80
                                            })
                                          : g.author.getAvatarURL(void 0, 80, !1),
                                  onRequestClose: v,
                                  clickTrap: P,
                                  children: (e) =>
                                      q(
                                          W(K({}, G), {
                                              avatarSrc: z,
                                              avatarDecorationSrc: L,
                                              compact: b,
                                              onClick: j,
                                              onContextMenu: y,
                                              onMouseDown: e.onMouseDown,
                                              onKeyDown: e.onKeyDown,
                                              showCommunicationDisabledStyles: p,
                                              className: m,
                                              avatarImgRef: C
                                          })
                                      )
                              })
                          })
                        : (0, r.jsx)(d.Gt, {
                              value: R,
                              children: q(
                                  W(K({}, G), {
                                      avatarSrc: z,
                                      avatarDecorationSrc: L,
                                      compact: b,
                                      onClick: j,
                                      onContextMenu: y,
                                      onMouseDown: void 0,
                                      onKeyDown: void 0,
                                      showCommunicationDisabledStyles: p,
                                      className: m
                                  })
                              )
                          });
            })({
                props: e,
                guildId: e.guildId,
                handleRenderPopout: R,
                showCommunicationDisabledStyles: M
            }),
            L = (0, a.e7)([S.ZP], () => {
                var t;
                return null != (t = e.displayCompactAvatars) ? t : S.ZP.displayCompactAvatars;
            }),
            G = o.useMemo(
                () =>
                    (0, B.b)({
                        message: t,
                        channel: P,
                        user: null == t ? void 0 : t.author,
                        compact: l,
                        isRepliedMessage: !1
                    }),
                [t, P, l]
            ),
            V = (0, a.e7)([N.Z], () => $(l, L, g, N.Z.getGuild(e.guildId)), [l, L, g, e.guildId]),
            X = o.useMemo(() => {
                let e = [];
                return (0, _.yE)(t.flags, F.iLy.SUPPRESS_NOTIFICATIONS) && e.push((0, r.jsx)(v.Z, {}, 'suppress-notifications')), t.hasPotions() && e.push((0, r.jsx)(O.Z, { message: t })), e;
            }, [t]),
            J = (0, A.XX)(t, b),
            ee = (0, A.Dv)(t),
            et = h ? ''.concat(J) : ''.concat(J, ' ').concat(ee),
            en = (null == n ? void 0 : n.state) === j.Y.LOADED ? (0, A.Gq)(t) : void 0;
        return (0, r.jsx)(Q, {
            message: t,
            avatar: D,
            username: (0, r.jsxs)(r.Fragment, {
                children: [
                    M &&
                        (0, r.jsx)(c.ua7, {
                            text: z.intl.string(z.t.AeYyLy),
                            children: (e) =>
                                (0, r.jsxs)(r.Fragment, {
                                    children: [
                                        (0, r.jsx)(
                                            c.YlB,
                                            W(
                                                K(
                                                    {
                                                        size: 'xxs',
                                                        color: 'currentColor'
                                                    },
                                                    e
                                                ),
                                                { className: l ? H.compactCommunicationDisabled : H.communicationDisabled }
                                            )
                                        ),
                                        (0, r.jsx)(c.nn4, { children: z.intl.string(z.t.AmHag4) })
                                    ]
                                })
                        }),
                    (0, r.jsx)(
                        Y,
                        W(K({}, e), {
                            message: t,
                            channel: P,
                            compact: l,
                            roleIconProps: g,
                            renderPopout: R,
                            preview: C,
                            subscribeToGroupId: b
                        })
                    )
                ]
            }),
            usernameSpanId: (0, A.XX)(t, b),
            usernameClassName: i()(H.headerText, {
                [H.hasRoleIcon]: 0 !== V,
                [H.hasBadges]: null != G || X.length > 0
            }),
            compact: l,
            showTimestamp: !0 !== h,
            showTimestampOnHover: m,
            ariaLabelledBy: et,
            ariaDescribedBy: en,
            className: y,
            badges: X
        });
    });
