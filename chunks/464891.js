n.d(t, {
    CF: () => Q,
    ZP: () => en,
    nD: () => J
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
    x = n(823415),
    C = n(518950),
    P = n(484459),
    N = n(670188),
    T = n(740492),
    w = n(430824),
    S = n(496675),
    I = n(594174),
    k = n(768581),
    M = n(585483),
    R = n(630388),
    E = n(74538),
    Z = n(276554),
    A = n(739566),
    D = n(421399),
    L = n(453687),
    B = n(318713),
    G = n(304176),
    U = n(47930),
    W = n(935910),
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
function Y(e) {
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
function X(e) {
    let { message: t, author: n, channel: a, guildId: i, compact: s = !1, roleIconProps: u, showUsernamePopout: d, renderPopout: p, onClickUsername: f, onContextMenu: y, displayCompactAvatars: _ = !1, onPopoutRequestClose: O, preview: v } = e,
        j = (0, A.ZP)(t, n),
        x = o.useMemo(
            () =>
                (0, U.x)({
                    message: t,
                    channel: a,
                    user: null == t ? void 0 : t.author,
                    compact: s,
                    isRepliedMessage: !1
                }),
            [t, a, s]
        ),
        C = o.useRef(null),
        P = (0, l.e7)([w.Z], () => w.Z.getGuild(i)),
        N = o.useMemo(() => ee(s, _, u, P), [s, _, u, P]),
        T = o.useMemo(
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
                                    (0, r.jsx)(G.Z, {
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
                      : 2 === N
                        ? (0, r.jsx)(m.Z, q(K({}, u), { className: F.roleIcon }), 'role-icon-children')
                        : null,
            [N, u, P]
        ),
        S = (0, l.e7)([I.default], () => I.default.getCurrentUser()),
        k = o.useMemo(() => {
            let e = [],
                n = E.ZP.isPremium(t.author),
                o = E.ZP.isPremium(S),
                i = null == a ? void 0 : a.isPrivate();
            return (
                (0, Z.R)(null != u, 'Message Username') &&
                    n &&
                    !s &&
                    !i &&
                    e.push(
                        (0, r.jsx)(
                            et,
                            {
                                currentUserIsPremium: o,
                                author: t.author
                            },
                            'nitro-author'
                        )
                    ),
                null != T && e.push(T),
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
        }, [t, a, u, s, T, P, S]);
    return null == j
        ? null
        : (0, r.jsxs)(r.Fragment, {
              children: [
                  (0, r.jsx)(D.Z, {
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
                          [D.a.SYSTEM_TAG]: x,
                          [D.a.BADGES]: k
                      },
                      renderRemixTag: !0,
                      previewGuildId: i,
                      preview: v
                  }),
                  s &&
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
function Q(e, t, n) {
    let { message: o, channel: a, author: i, compact: s = !1, onContextMenu: l, showUsernamePopout: c, roleIcon: u, onClickUsername: d, onPopoutRequestClose: p } = e;
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(D.Z, {
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
                            className: F.separator,
                            children: ':'
                        }),
                        ' '
                    ]
                })
        ]
    });
}
function J(e) {
    let { message: t, avatar: n, username: o, usernameSpanId: a, usernameClassName: s, compact: l, showTimestamp: u, showTimestampOnHover: d, ariaLabelledBy: g, ariaDescribedBy: m, className: f, messageClassname: b, badges: h } = e,
        y = (0, R.yE)(t.flags, H.iLy.SENT_BY_SOCIAL_LAYER_INTEGRATION) ? t.applicationId : null,
        _ = (0, p.q)(y);
    return (0, r.jsxs)(r.Fragment, {
        children: [
            !l && n,
            (0, r.jsxs)(c.H, {
                className: i()(F.header, f),
                'aria-describedby': m,
                'aria-labelledby': g,
                children: [
                    u &&
                        l &&
                        (0, r.jsx)(B.Z, {
                            id: (0, L.Dv)(t),
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
                        (0, r.jsx)(B.Z, {
                            id: (0, L.Dv)(t),
                            timestamp: t.timestamp,
                            className: b,
                            application: _
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
let $ = (e) => {
    e || (0, _.z)();
};
function ee(e, t, n, r) {
    return (!e || t) && null != n && null != r ? 1 : (!e || t) && null != n ? 2 : 0;
}
let et = o.memo(function (e) {
        let { currentUserIsPremium: t, author: n } = e,
            o = (0, l.e7)([j.Z], () => {
                var e;
                return null == (e = j.Z.getUserProfile(n.id)) ? void 0 : e.premiumSince;
            });
        return (0, r.jsx)(c.ua7, {
            tooltipClassName: F.nitroAuthorBadgeTootip,
            shouldShow: null != o,
            text: z.NW.formatToPlainString(z.t['8zbGNT'], { date: o }),
            onTooltipShow: () => (0, P.Z)(n.id),
            children: (e) =>
                (0, r.jsx)(c.P3F, {
                    className: F.nitroAuthorBadgeContainer,
                    onClick: () => $(t),
                    'aria-label': z.NW.formatToPlainString(z.t['8zbGNT'], { date: o }),
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
    en = o.memo(function (e) {
        let { message: t, repliedMessage: n, compact: a = !1, renderPopout: p, showTimestampOnHover: g, roleIcon: m, subscribeToGroupId: b, hideTimestamp: h, className: _, channel: j, preview: P } = e,
            I = o.useMemo(() => (null != p ? (e) => p(e, t) : void 0), [p, t]),
            [, E] = (0, f.ZP)(t.author.id, e.guildId),
            Z = (0, l.e7)(
                [S.Z, w.Z],
                () => {
                    let n = w.Z.getGuild(e.guildId);
                    return null != t.author && null != n && S.Z.canManageUser(H.Plq.MODERATE_MEMBERS, t.author, n);
                },
                [t.author, e.guildId]
            ),
            A = E && Z,
            D = (function (e) {
                var t, n;
                let { props: a, guildId: i, handleRenderPopout: c, showCommunicationDisabledStyles: p = !1, className: g } = e,
                    { message: m, author: f, compact: b = !1, subscribeToGroupId: h, animate: y = !0, onContextMenu: _, onClickAvatar: O, onPopoutRequestClose: v, showAvatarPopout: j } = a,
                    P = o.useRef(null),
                    [w, S] = o.useState(!1),
                    { analyticsLocations: I } = (0, d.ZP)(u.Z.AVATAR),
                    R = (0, l.e7)([T.ZP], () => {
                        var e;
                        return null != (e = a.displayCompactAvatars) ? e : T.ZP.displayCompactAvatars;
                    }),
                    E = m.author,
                    { id: Z } = E,
                    A = (0, x.ic)({ location: 'MessageHeader' }),
                    D = (0, W.Z)(m),
                    L = b ? 32 : 80,
                    {
                        avatarSrc: B,
                        avatarDecorationSrc: G,
                        eventHandlers: U
                    } = (0, C.Z)({
                        user: E,
                        guildId: i,
                        size: L,
                        animateOnHover: null != h ? !w : !y,
                        showPending: !0
                    }),
                    z = m.isInteractionPlaceholder(),
                    F = o.useMemo(() => {
                        var e, t;
                        return z &&
                            null == E.avatar &&
                            (null == (e = m.application) ? void 0 : e.icon) != null &&
                            null !=
                                (t = k.ZP.getApplicationIconURL({
                                    id: m.application.id,
                                    icon: m.application.icon,
                                    size: L,
                                    fallbackAvatar: !1
                                }))
                            ? t
                            : B;
                    }, [z, null == (t = m.application) ? void 0 : t.icon, null == (n = m.application) ? void 0 : n.id, E.avatar, L, B]);
                if (
                    (o.useEffect(() => {
                        if (null != h) return M.S.subscribeKeyed(H.LPv.ANIMATE_CHAT_AVATAR, ''.concat(h, ':').concat(Z), S), () => void M.S.unsubscribeKeyed(H.LPv.ANIMATE_CHAT_AVATAR, ''.concat(h, ':').concat(Z), S);
                    }, [Z, h]),
                    !b || R)
                )
                    return null != c && null != j
                        ? (0, r.jsx)(d.Gt, {
                              value: I,
                              children: (0, r.jsx)(N.Z, {
                                  targetElementRef: P,
                                  user: m.author,
                                  guildId: i,
                                  channelId: m.channel_id,
                                  messageId: m.id,
                                  shouldShow: j,
                                  shouldShowOnHover: D && A,
                                  shouldPreload: D,
                                  renderPopout: c,
                                  position: s.tq ? 'window_center' : 'right',
                                  avatarUrl:
                                      null != f.guildMemberAvatar && null != i
                                          ? k.ZP.getGuildMemberAvatarURLSimple({
                                                guildId: i,
                                                userId: m.author.id,
                                                avatar: f.guildMemberAvatar,
                                                size: 80
                                            })
                                          : m.author.getAvatarURL(void 0, 80, !1),
                                  onRequestClose: v,
                                  clickTrap: j,
                                  children: (e) =>
                                      Y(
                                          q(K({}, U), {
                                              avatarSrc: F,
                                              avatarDecorationSrc: G,
                                              compact: b,
                                              onClick: O,
                                              onContextMenu: _,
                                              onMouseDown: e.onMouseDown,
                                              onKeyDown: e.onKeyDown,
                                              showCommunicationDisabledStyles: p,
                                              className: g,
                                              avatarImgRef: P
                                          })
                                      )
                              })
                          })
                        : (0, r.jsx)(d.Gt, {
                              value: I,
                              children: Y(
                                  q(K({}, U), {
                                      avatarSrc: F,
                                      avatarDecorationSrc: G,
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
                handleRenderPopout: I,
                showCommunicationDisabledStyles: A
            }),
            B = (0, l.e7)([T.ZP], () => {
                var t;
                return null != (t = e.displayCompactAvatars) ? t : T.ZP.displayCompactAvatars;
            }),
            G = o.useMemo(
                () =>
                    (0, U.b)({
                        message: t,
                        channel: j,
                        user: null == t ? void 0 : t.author,
                        compact: a,
                        isRepliedMessage: !1
                    }),
                [t, j, a]
            ),
            V = (0, l.e7)([w.Z], () => ee(a, B, m, w.Z.getGuild(e.guildId)), [a, B, m, e.guildId]),
            Q = o.useMemo(() => {
                let e = [];
                return (0, R.yE)(t.flags, H.iLy.SUPPRESS_NOTIFICATIONS) && e.push((0, r.jsx)(v.Z, {}, 'suppress-notifications')), t.hasPotions() && e.push((0, r.jsx)(y.Z, { message: t })), e;
            }, [t]),
            $ = (0, L.XX)(t, b),
            et = (0, L.Dv)(t),
            en = h ? ''.concat($) : ''.concat($, ' ').concat(et),
            er = (null == n ? void 0 : n.state) === O.Y.LOADED ? (0, L.Gq)(t) : void 0;
        return (0, r.jsx)(J, {
            message: t,
            avatar: D,
            username: (0, r.jsxs)(r.Fragment, {
                children: [
                    A &&
                        (0, r.jsx)(c.ua7, {
                            text: z.NW.string(z.t.AeYyLy),
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
                                        (0, r.jsx)(c.nn4, { children: z.NW.string(z.t.AmHag4) })
                                    ]
                                })
                        }),
                    (0, r.jsx)(
                        X,
                        q(K({}, e), {
                            message: t,
                            channel: j,
                            compact: a,
                            roleIconProps: m,
                            renderPopout: I,
                            preview: P
                        })
                    )
                ]
            }),
            usernameSpanId: (0, L.XX)(t, b),
            usernameClassName: i()(F.headerText, {
                [F.hasRoleIcon]: 0 !== V,
                [F.hasBadges]: null != G || Q.length > 0
            }),
            compact: a,
            showTimestamp: !0 !== h,
            showTimestampOnHover: g,
            ariaLabelledBy: en,
            ariaDescribedBy: er,
            className: _,
            badges: Q
        });
    });
