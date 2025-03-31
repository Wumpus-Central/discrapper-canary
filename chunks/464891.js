n.d(t, {
    CF: () => Q,
    ZP: () => en,
    nD: () => J
}),
    n(653041),
    n(47120),
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
    j = n(823415),
    C = n(754047),
    P = n(518950),
    T = n(484459),
    N = n(184301),
    I = n(740492),
    S = n(430824),
    w = n(496675),
    k = n(594174),
    M = n(768581),
    R = n(585483),
    E = n(630388),
    Z = n(74538),
    A = n(276554),
    D = n(739566),
    B = n(421399),
    L = n(453687),
    G = n(318713),
    W = n(304176),
    U = n(47930),
    z = n(981631),
    H = n(388032),
    F = n(432957),
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
    let { avatarSrc: t, avatarDecorationSrc: n, compact: o, onClick: a, onContextMenu: s, onMouseDown: c, onMouseEnter: l, onMouseLeave: u, onKeyDown: d, showCommunicationDisabledStyles: p = !1, className: g, avatarImgRef: m } = e;
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)('img', {
                ref: m,
                onClick: a,
                onContextMenu: s,
                onKeyDown: d,
                onMouseDown: c,
                onMouseEnter: l,
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
    let { message: t, channel: n, guildId: a, compact: i = !1, roleIconProps: s, showUsernamePopout: u, renderPopout: d, onClickUsername: p, onContextMenu: f, displayCompactAvatars: h = !1, onPopoutRequestClose: y } = e,
        v = (0, D.ZP)(t),
        O = o.useMemo(
            () =>
                (0, U.x)({
                    message: t,
                    channel: n,
                    user: null == t ? void 0 : t.author,
                    compact: i,
                    isRepliedMessage: !1
                }),
            [t, n, i]
        ),
        x = o.useRef(null),
        j = (0, c.e7)([S.Z], () => ee(i, h, s, S.Z.getGuild(a)), [i, h, s, a]),
        C = (0, c.e7)(
            [S.Z],
            () => {
                let e = S.Z.getGuild(a);
                return null == s
                    ? null
                    : 1 === j && null != e
                      ? (0, r.jsx)(
                            l.yRy,
                            {
                                targetElementRef: x,
                                animation: l.yRy.Animation.TRANSLATE,
                                align: 'center',
                                autoInvert: !0,
                                nudgeAlignIntoViewport: !0,
                                position: 'right',
                                renderPopout: () =>
                                    (0, r.jsx)(W.Z, {
                                        roleIcon: s,
                                        guild: e
                                    }),
                                clickTrap: !0,
                                children: (e) => {
                                    let { onClick: t } = e;
                                    return (0, r.jsx)(
                                        m.Z,
                                        q(K({ ref: x }, s), {
                                            className: F.roleIcon,
                                            onClick: t
                                        })
                                    );
                                }
                            },
                            'role-icon-children'
                        )
                      : 2 === j
                        ? (0, r.jsx)(m.Z, q(K({}, s), { className: F.roleIcon }), 'role-icon-children')
                        : null;
            },
            [j, s, a]
        ),
        P = (0, c.Wu)(
            [k.default, S.Z],
            () => {
                let e = [],
                    o = S.Z.getGuild(a),
                    c = k.default.getCurrentUser(),
                    l = Z.ZP.isPremium(t.author),
                    u = Z.ZP.isPremium(c),
                    d = null == n ? void 0 : n.isPrivate();
                return (
                    (0, A.R)(null != s, 'Message Username') &&
                        l &&
                        !i &&
                        !d &&
                        e.push(
                            (0, r.jsx)(
                                et,
                                {
                                    currentUserIsPremium: u,
                                    author: t.author
                                },
                                'nitro-author'
                            )
                        ),
                    null != C && e.push(C),
                    null != o &&
                        (e.push(
                            (0, r.jsx)(
                                _.Z,
                                {
                                    guild: o,
                                    message: t
                                },
                                'new-member'
                            )
                        ),
                        e.push(
                            (0, r.jsx)(
                                b.Z,
                                {
                                    guild: o,
                                    message: t
                                },
                                'leaderboard-champion'
                            )
                        )),
                    null != n &&
                        null != o &&
                        e.push(
                            (0, r.jsx)(
                                g.Z,
                                {
                                    guild: o,
                                    channel: n,
                                    userId: t.author.id,
                                    messageId: t.id
                                },
                                'connections'
                            )
                        ),
                    e
                );
            },
            [t, n, s, i, C, a]
        );
    return null == v
        ? null
        : (0, r.jsxs)(r.Fragment, {
              children: [
                  (0, r.jsx)(B.Z, {
                      message: t,
                      channel: n,
                      author: v,
                      compact: i,
                      roleIcon: s,
                      showPopout: u,
                      renderPopout: d,
                      onClick: p,
                      onContextMenu: f,
                      onPopoutRequestClose: y,
                      decorations: {
                          [B.a.SYSTEM_TAG]: O,
                          [B.a.BADGES]: P
                      },
                      renderRemixTag: !0
                  }),
                  i &&
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
    let { message: o, channel: a, author: i, compact: s = !1, onContextMenu: c, showUsernamePopout: l, roleIcon: u, onClickUsername: d, onPopoutRequestClose: p } = e;
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(B.Z, {
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
    let { message: t, avatar: n, username: o, usernameSpanId: a, usernameClassName: s, compact: c, showTimestamp: u, showTimestampOnHover: d, ariaLabelledBy: g, ariaDescribedBy: m, className: f, messageClassname: _, badges: b } = e,
        h = (0, E.yE)(t.flags, z.iLy.SENT_BY_SOCIAL_LAYER_INTEGRATION) ? t.applicationId : null,
        y = (0, p.q)(h);
    return (0, r.jsxs)(r.Fragment, {
        children: [
            !c && n,
            (0, r.jsxs)(l.H, {
                className: i()(F.header, f),
                'aria-describedby': m,
                'aria-labelledby': g,
                children: [
                    u &&
                        c &&
                        (0, r.jsx)(G.Z, {
                            id: (0, L.Dv)(t),
                            compact: !0,
                            timestamp: t.timestamp,
                            isVisibleOnlyOnHover: d,
                            className: _,
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
                        (0, r.jsx)(G.Z, {
                            id: (0, L.Dv)(t),
                            timestamp: t.timestamp,
                            className: _,
                            application: y
                        }),
                    null != b && b.length > 0
                        ? (0, r.jsx)('div', {
                              className: F.badgesContainer,
                              children: b
                          })
                        : null
                ]
            })
        ]
    });
}
let $ = (e) => {
    e || (0, y.z)();
};
function ee(e, t, n, r) {
    return (!e || t) && null != n && null != r ? 1 : (!e || t) && null != n ? 2 : 0;
}
let et = o.memo(function (e) {
        let { currentUserIsPremium: t, author: n } = e,
            o = (0, c.e7)([x.Z], () => {
                var e;
                return null === (e = x.Z.getUserProfile(n.id)) || void 0 === e ? void 0 : e.premiumSince;
            });
        return (0, r.jsx)(l.ua7, {
            tooltipClassName: F.nitroAuthorBadgeTootip,
            shouldShow: null != o,
            text: H.NW.formatToPlainString(H.t['8zbGNT'], { date: o }),
            onTooltipShow: () => (0, T.Z)(n.id),
            children: (e) =>
                (0, r.jsx)(l.P3F, {
                    className: F.nitroAuthorBadgeContainer,
                    onClick: () => $(t),
                    'aria-label': H.NW.formatToPlainString(H.t['8zbGNT'], { date: o }),
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
        let { message: t, repliedMessage: n, compact: a = !1, renderPopout: p, showTimestampOnHover: g, roleIcon: m, subscribeToGroupId: _, hideTimestamp: b, className: y, channel: x } = e,
            T = o.useMemo(() => (null != p ? (e) => p(e, t) : void 0), [p, t]),
            [, k] = (0, f.ZP)(t.author.id, e.guildId),
            Z = (0, c.e7)(
                [w.Z, S.Z],
                () => {
                    let n = S.Z.getGuild(e.guildId);
                    return null != t.author && null != n && w.Z.canManageUser(z.Plq.MODERATE_MEMBERS, t.author, n);
                },
                [t.author, e.guildId]
            ),
            A = k && Z,
            D = (function (e) {
                var t, n;
                let { props: a, guildId: i, handleRenderPopout: p, showCommunicationDisabledStyles: g = !1, className: m } = e,
                    { message: f, author: _, compact: b = !1, subscribeToGroupId: h, animate: y = !0, onContextMenu: v, onClickAvatar: O, onPopoutRequestClose: x, showAvatarPopout: T } = a,
                    S = o.useRef(null),
                    [w, k] = o.useState(!1),
                    { analyticsLocations: E } = (0, d.ZP)(u.Z.AVATAR),
                    Z = (0, c.e7)([I.ZP], () => {
                        var e;
                        return null !== (e = a.displayCompactAvatars) && void 0 !== e ? e : I.ZP.displayCompactAvatars;
                    }),
                    A = null != f.messageReference && null != f.webhookId && f.hasFlag(z.iLy.IS_CROSSPOST),
                    D = f.author,
                    { id: B } = D,
                    L = b ? 32 : 80,
                    {
                        avatarSrc: G,
                        avatarDecorationSrc: W,
                        eventHandlers: U
                    } = (0, P.Z)({
                        user: D,
                        guildId: i,
                        size: L,
                        animateOnHover: null != h ? !w : !y,
                        showPending: !0
                    }),
                    H = f.isInteractionPlaceholder(),
                    F = o.useMemo(() => {
                        var e, t;
                        return H &&
                            null == D.avatar &&
                            (null === (e = f.application) || void 0 === e ? void 0 : e.icon) != null &&
                            null !==
                                (t = M.ZP.getApplicationIconURL({
                                    id: f.application.id,
                                    icon: f.application.icon,
                                    size: L,
                                    fallbackAvatar: !1
                                })) &&
                            void 0 !== t
                            ? t
                            : G;
                    }, [H, null === (t = f.application) || void 0 === t ? void 0 : t.icon, null === (n = f.application) || void 0 === n ? void 0 : n.id, D.avatar, L, G]),
                    V = (0, j.nT)({ location: 'MessageHeader' }),
                    {
                        showPopoutFromHover: X,
                        onRequestClose: Q,
                        onMouseEnter: J,
                        onMouseLeave: $
                    } = (0, C.Z)({
                        shouldShowPopoutOnHover: V,
                        handlePreload: ee
                    });
                if (
                    (o.useEffect(() => {
                        if (null != h) return R.S.subscribeKeyed(z.LPv.ANIMATE_CHAT_AVATAR, ''.concat(h, ':').concat(B), k), () => void R.S.unsubscribeKeyed(z.LPv.ANIMATE_CHAT_AVATAR, ''.concat(h, ':').concat(B), k);
                    }, [B, h]),
                    !b || Z)
                ) {
                    if (null != p && null != T) {
                        let e = (0, r.jsx)(d.Gt, {
                            value: E,
                            children: (0, r.jsx)(l.yRy, {
                                targetElementRef: S,
                                preload: A || T || X ? void 0 : ee,
                                renderPopout: p,
                                shouldShow: T || X,
                                position: s.tq ? 'window_center' : 'right',
                                onRequestClose: () => {
                                    null == Q || Q(), null == x || x();
                                },
                                clickTrap: T,
                                children: (e) =>
                                    Y(
                                        q(K({}, U), {
                                            avatarSrc: F,
                                            avatarDecorationSrc: W,
                                            compact: b,
                                            onClick: O,
                                            onContextMenu: v,
                                            onMouseDown: e.onMouseDown,
                                            onKeyDown: e.onKeyDown,
                                            showCommunicationDisabledStyles: g,
                                            className: m,
                                            avatarImgRef: S
                                        })
                                    )
                            })
                        });
                        return V
                            ? (0, r.jsx)('div', {
                                  onMouseEnter: J,
                                  onMouseLeave: $,
                                  children: e
                              })
                            : e;
                    }
                    return (0, r.jsx)(d.Gt, {
                        value: E,
                        children: Y(
                            q(K({}, U), {
                                avatarSrc: F,
                                avatarDecorationSrc: W,
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
                }
                function ee() {
                    return (0, N.Z)(
                        f.author.id,
                        null != _.guildMemberAvatar && null != i
                            ? M.ZP.getGuildMemberAvatarURLSimple({
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
                }
            })({
                props: e,
                guildId: e.guildId,
                handleRenderPopout: T,
                showCommunicationDisabledStyles: A
            }),
            B = (0, c.e7)([I.ZP], () => {
                var t;
                return null !== (t = e.displayCompactAvatars) && void 0 !== t ? t : I.ZP.displayCompactAvatars;
            }),
            G = o.useMemo(
                () =>
                    (0, U.b)({
                        message: t,
                        channel: x,
                        user: null == t ? void 0 : t.author,
                        compact: a,
                        isRepliedMessage: !1
                    }),
                [t, x, a]
            ),
            W = (0, c.e7)([S.Z], () => ee(a, B, m, S.Z.getGuild(e.guildId)), [a, B, m, e.guildId]),
            V = o.useMemo(() => {
                let e = [];
                return (0, E.yE)(t.flags, z.iLy.SUPPRESS_NOTIFICATIONS) && e.push((0, r.jsx)(O.Z, {}, 'suppress-notifications')), t.hasPotions() && e.push((0, r.jsx)(h.Z, { message: t })), e;
            }, [t]),
            Q = (0, L.XX)(t, _),
            $ = (0, L.Dv)(t),
            et = b ? ''.concat(Q) : ''.concat(Q, ' ').concat($),
            en = (null == n ? void 0 : n.state) === v.Y.LOADED ? (0, L.Gq)(t) : void 0;
        return (0, r.jsx)(J, {
            message: t,
            avatar: D,
            username: (0, r.jsxs)(r.Fragment, {
                children: [
                    A &&
                        (0, r.jsx)(l.ua7, {
                            text: H.NW.string(H.t.AeYyLy),
                            children: (e) =>
                                (0, r.jsxs)(r.Fragment, {
                                    children: [
                                        (0, r.jsx)(
                                            l.YlB,
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
                                        (0, r.jsx)(l.nn4, { children: H.NW.string(H.t.AmHag4) })
                                    ]
                                })
                        }),
                    (0, r.jsx)(
                        X,
                        q(K({}, e), {
                            message: t,
                            channel: x,
                            compact: a,
                            roleIconProps: m,
                            renderPopout: T
                        })
                    )
                ]
            }),
            usernameSpanId: (0, L.XX)(t, _),
            usernameClassName: i()(F.headerText, {
                [F.hasRoleIcon]: 0 !== W,
                [F.hasBadges]: null != G || V.length > 0
            }),
            compact: a,
            showTimestamp: !0 !== b,
            showTimestampOnHover: g,
            ariaLabelledBy: et,
            ariaDescribedBy: en,
            className: y,
            badges: V
        });
    });
