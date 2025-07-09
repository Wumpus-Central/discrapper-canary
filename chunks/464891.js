(n.d(t, {
    CF: () => Y,
    ZP: () => et,
    nD: () => Q
}),
    n(539854),
    n(388685),
    n(997841));
var r = n(255367),
    l = n(73800),
    o = n(120356),
    i = n.n(o),
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
    v = n(869765),
    j = n(243317),
    P = n(621853),
    x = n(518950),
    C = n(484459),
    w = n(670188),
    S = n(740492),
    E = n(430824),
    N = n(496675),
    T = n(594174),
    Z = n(768581),
    R = n(585483),
    _ = n(630388),
    I = n(74538),
    k = n(276554),
    M = n(739566),
    D = n(421399),
    A = n(453687),
    L = n(318713),
    G = n(304176),
    B = n(47930),
    U = n(935910),
    F = n(981631),
    H = n(388032),
    z = n(848697),
    V = n(121282);
function K(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        ('function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                var r;
                ((r = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: r,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
                          })
                        : (e[t] = r));
            }));
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
    let { avatarSrc: t, avatarDecorationSrc: n, compact: l, onClick: o, onContextMenu: s, onMouseDown: a, onMouseEnter: c, onMouseLeave: u, onKeyDown: d, showCommunicationDisabledStyles: p = !1, className: m, avatarImgRef: g } = e;
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)('img', {
                ref: g,
                onClick: o,
                onContextMenu: s,
                onKeyDown: d,
                onMouseDown: a,
                onMouseEnter: c,
                onMouseLeave: u,
                src: t,
                'aria-hidden': !0,
                className: i()(m, z.avatar, {
                    [z.compact]: l,
                    [z.clickable]: null != o,
                    [z.communicationDisabledOpacity]: p
                }),
                alt: ' '
            }),
            null == n || l
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
let X = l.memo(function (e) {
    let { message: t, author: n, channel: o, guildId: i, compact: s = !1, roleIconProps: u, showUsernamePopout: d, renderPopout: p, onClickUsername: f, onContextMenu: O, displayCompactAvatars: y = !1, onPopoutRequestClose: v, preview: j, subscribeToGroupId: P } = e,
        x = (0, M.ZP)(t, n),
        C = l.useMemo(
            () =>
                (0, B.x)({
                    message: t,
                    channel: o,
                    user: null == t ? void 0 : t.author,
                    compact: s,
                    isRepliedMessage: !1
                }),
            [t, o, s]
        ),
        w = l.useRef(null),
        S = (0, a.e7)([E.Z], () => E.Z.getGuild(i)),
        N = l.useMemo(() => $(s, y, u, S), [s, y, u, S]),
        Z = l.useMemo(
            () =>
                null == u
                    ? null
                    : 1 === N && null != S
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
                                            className: z.roleIcon,
                                            onClick: t
                                        })
                                    );
                                }
                            },
                            'role-icon-children'
                        )
                      : 2 === N
                        ? (0, r.jsx)(g.Z, W(K({}, u), { className: z.roleIcon }), 'role-icon-children')
                        : null,
            [N, u, S]
        ),
        R = (0, a.e7)([T.default], () => T.default.getCurrentUser()),
        _ = l.useMemo(() => {
            let e = [],
                n = I.ZP.isPremium(t.author),
                l = I.ZP.isPremium(R),
                i = null == o ? void 0 : o.isPrivate();
            return (
                (0, k.R)(null != u, 'Message Username') &&
                    n &&
                    !s &&
                    !i &&
                    e.push(
                        (0, r.jsx)(
                            ee,
                            {
                                currentUserIsPremium: l,
                                author: t.author
                            },
                            'nitro-author'
                        )
                    ),
                null != Z && e.push(Z),
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
                null != o &&
                    null != S &&
                    e.push(
                        (0, r.jsx)(
                            m.Z,
                            {
                                guild: S,
                                channel: o,
                                userId: t.author.id,
                                messageId: t.id
                            },
                            'connections'
                        )
                    ),
                e
            );
        }, [t, o, u, s, Z, S, R]);
    return null == x
        ? null
        : (0, r.jsxs)(r.Fragment, {
              children: [
                  (0, r.jsx)(D.Z, {
                      message: t,
                      channel: o,
                      author: x,
                      compact: s,
                      roleIcon: u,
                      showPopout: d,
                      renderPopout: p,
                      onClick: f,
                      onContextMenu: O,
                      onPopoutRequestClose: v,
                      decorations: {
                          [D.a.SYSTEM_TAG]: C,
                          [D.a.BADGES]: _
                      },
                      renderRemixTag: !0,
                      previewGuildId: i,
                      preview: j,
                      subscribeToGroupId: P
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
function Y(e, t, n) {
    let { message: l, channel: o, author: i, compact: s = !1, onContextMenu: a, showUsernamePopout: c, roleIcon: u, onClickUsername: d, onPopoutRequestClose: p } = e;
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(D.Z, {
                message: l,
                channel: o,
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
    let { message: t, avatar: n, username: l, usernameSpanId: o, usernameClassName: s, compact: a, showTimestamp: u, showTimestampOnHover: d, ariaLabelledBy: m, ariaDescribedBy: g, className: f, messageClassname: b, badges: h } = e,
        O = (0, _.yE)(t.flags, F.iLy.SENT_BY_SOCIAL_LAYER_INTEGRATION) ? t.applicationId : null,
        y = (0, p.q)(O);
    return (0, r.jsxs)(r.Fragment, {
        children: [
            !a && n,
            (0, r.jsxs)(c.H, {
                className: i()(z.header, f),
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
                        id: o,
                        className: s,
                        children: l
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
    e || (0, y.z)();
};
function $(e, t, n, r) {
    return (!e || t) && null != n && null != r ? 1 : (!e || t) && null != n ? 2 : 0;
}
let ee = l.memo(function (e) {
        let { currentUserIsPremium: t, author: n } = e,
            l = (0, a.e7)([P.Z], () => {
                var e;
                return null == (e = P.Z.getUserProfile(n.id)) ? void 0 : e.premiumSince;
            });
        return (0, r.jsx)(c.ua7, {
            tooltipClassName: z.nitroAuthorBadgeTootip,
            shouldShow: null != l,
            text: H.intl.formatToPlainString(H.t['8zbGNT'], { date: l }),
            onTooltipShow: () => (0, C.Z)(n.id),
            children: (e) =>
                (0, r.jsx)(c.P3F, {
                    className: z.nitroAuthorBadgeContainer,
                    onClick: () => J(t),
                    'aria-label': H.intl.formatToPlainString(H.t['8zbGNT'], { date: l }),
                    children: (0, r.jsx)(
                        'img',
                        K(
                            {
                                alt: '',
                                className: z.nitroBadgeSvg,
                                src: V
                            },
                            e
                        )
                    )
                })
        });
    }),
    et = l.memo(function (e) {
        let { message: t, repliedMessage: n, compact: o = !1, renderPopout: p, showTimestampOnHover: m, roleIcon: g, subscribeToGroupId: b, hideTimestamp: h, className: y, channel: P, preview: C } = e,
            T = l.useMemo(() => (null != p ? (e) => p(e, t) : void 0), [p, t]),
            [, I] = (0, f.ZP)(t.author.id, e.guildId),
            k = (0, a.e7)(
                [N.Z, E.Z],
                () => {
                    let n = E.Z.getGuild(e.guildId);
                    return null != t.author && null != n && N.Z.canManageUser(F.Plq.MODERATE_MEMBERS, t.author, n);
                },
                [t.author, e.guildId]
            ),
            M = I && k,
            D = (function (e) {
                var t, n;
                let { props: o, guildId: i, handleRenderPopout: c, showCommunicationDisabledStyles: p = !1, className: m } = e,
                    { message: g, author: f, compact: b = !1, subscribeToGroupId: h, animate: O = !0, onContextMenu: y, onClickAvatar: v, onPopoutRequestClose: j, showAvatarPopout: P } = o,
                    C = l.useRef(null),
                    [E, N] = l.useState(!1),
                    { analyticsLocations: T } = (0, d.ZP)(u.Z.AVATAR),
                    _ = (0, a.e7)([S.ZP], () => {
                        var e;
                        return null != (e = o.displayCompactAvatars) ? e : S.ZP.displayCompactAvatars;
                    }),
                    I = g.author,
                    { id: k } = I,
                    M = (0, U.Z)(g),
                    D = b ? 32 : 80,
                    {
                        avatarSrc: A,
                        avatarDecorationSrc: L,
                        eventHandlers: G
                    } = (0, x.Z)({
                        user: I,
                        guildId: i,
                        size: D,
                        animateOnHover: null != h ? !E : !O,
                        showPending: !0
                    }),
                    B = g.isInteractionPlaceholder(),
                    H = l.useMemo(() => {
                        var e, t;
                        return B &&
                            null == I.avatar &&
                            (null == (e = g.application) ? void 0 : e.icon) != null &&
                            null !=
                                (t = Z.ZP.getApplicationIconURL({
                                    id: g.application.id,
                                    icon: g.application.icon,
                                    size: D,
                                    fallbackAvatar: !1
                                }))
                            ? t
                            : A;
                    }, [B, null == (t = g.application) ? void 0 : t.icon, null == (n = g.application) ? void 0 : n.id, I.avatar, D, A]);
                if (
                    (l.useEffect(() => {
                        if (null != h) return (R.S.subscribeKeyed(F.LPv.ANIMATE_CHAT_AVATAR, ''.concat(h, ':').concat(k), N), () => void R.S.unsubscribeKeyed(F.LPv.ANIMATE_CHAT_AVATAR, ''.concat(h, ':').concat(k), N));
                    }, [k, h]),
                    !b || _)
                )
                    return null != c && null != P
                        ? (0, r.jsx)(d.Gt, {
                              value: T,
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
                                          ? Z.ZP.getGuildMemberAvatarURLSimple({
                                                guildId: i,
                                                userId: g.author.id,
                                                avatar: f.guildMemberAvatar,
                                                size: 80
                                            })
                                          : g.author.getAvatarURL(void 0, 80, !1),
                                  onRequestClose: j,
                                  clickTrap: P,
                                  children: (e) =>
                                      q(
                                          W(K({}, G), {
                                              avatarSrc: H,
                                              avatarDecorationSrc: L,
                                              compact: b,
                                              onClick: v,
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
                              value: T,
                              children: q(
                                  W(K({}, G), {
                                      avatarSrc: H,
                                      avatarDecorationSrc: L,
                                      compact: b,
                                      onClick: v,
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
                handleRenderPopout: T,
                showCommunicationDisabledStyles: M
            }),
            L = (0, a.e7)([S.ZP], () => {
                var t;
                return null != (t = e.displayCompactAvatars) ? t : S.ZP.displayCompactAvatars;
            }),
            G = l.useMemo(
                () =>
                    (0, B.b)({
                        message: t,
                        channel: P,
                        user: null == t ? void 0 : t.author,
                        compact: o,
                        isRepliedMessage: !1
                    }),
                [t, P, o]
            ),
            V = (0, a.e7)([E.Z], () => $(o, L, g, E.Z.getGuild(e.guildId)), [o, L, g, e.guildId]),
            Y = l.useMemo(() => {
                let e = [];
                return ((0, _.yE)(t.flags, F.iLy.SUPPRESS_NOTIFICATIONS) && e.push((0, r.jsx)(j.Z, {}, 'suppress-notifications')), t.hasPotions() && e.push((0, r.jsx)(O.Z, { message: t })), e);
            }, [t]),
            J = (0, A.XX)(t, b),
            ee = (0, A.Dv)(t),
            et = h ? ''.concat(J) : ''.concat(J, ' ').concat(ee),
            en = (null == n ? void 0 : n.state) === v.Y.LOADED ? (0, A.Gq)(t) : void 0;
        return (0, r.jsx)(Q, {
            message: t,
            avatar: D,
            username: (0, r.jsxs)(r.Fragment, {
                children: [
                    M &&
                        (0, r.jsx)(c.ua7, {
                            text: H.intl.string(H.t.AeYyLy),
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
                                                { className: o ? z.compactCommunicationDisabled : z.communicationDisabled }
                                            )
                                        ),
                                        (0, r.jsx)(c.nn4, { children: H.intl.string(H.t.AmHag4) })
                                    ]
                                })
                        }),
                    (0, r.jsx)(
                        X,
                        W(K({}, e), {
                            message: t,
                            channel: P,
                            compact: o,
                            roleIconProps: g,
                            renderPopout: T,
                            preview: C,
                            subscribeToGroupId: b
                        })
                    )
                ]
            }),
            usernameSpanId: (0, A.XX)(t, b),
            usernameClassName: i()(z.headerText, {
                [z.hasRoleIcon]: 0 !== V,
                [z.hasBadges]: null != G || Y.length > 0
            }),
            compact: o,
            showTimestamp: !0 !== h,
            showTimestampOnHover: m,
            ariaLabelledBy: et,
            ariaDescribedBy: en,
            className: y,
            badges: Y
        });
    });
