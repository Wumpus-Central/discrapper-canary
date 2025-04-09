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
    C = n(518950),
    P = n(484459),
    T = n(670188),
    N = n(740492),
    I = n(430824),
    w = n(496675),
    S = n(594174),
    k = n(768581),
    M = n(585483),
    R = n(630388),
    E = n(74538),
    Z = n(276554),
    A = n(739566),
    D = n(421399),
    B = n(453687),
    L = n(318713),
    G = n(304176),
    W = n(47930),
    U = n(935910),
    z = n(981631),
    H = n(388032),
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
    let { message: t, author: n, channel: a, guildId: i, compact: s = !1, roleIconProps: u, showUsernamePopout: d, renderPopout: p, onClickUsername: f, onContextMenu: h, displayCompactAvatars: y = !1, onPopoutRequestClose: v, preview: O } = e,
        x = (0, A.ZP)(t, n),
        j = o.useMemo(
            () =>
                (0, W.x)({
                    message: t,
                    channel: a,
                    user: null == t ? void 0 : t.author,
                    compact: s,
                    isRepliedMessage: !1
                }),
            [t, a, s]
        ),
        C = o.useRef(null),
        P = (0, c.e7)([I.Z], () => I.Z.getGuild(i)),
        T = o.useMemo(() => ee(s, y, u, P), [s, y, u, P]),
        N = o.useMemo(
            () =>
                null == u
                    ? null
                    : 1 === T && null != P
                      ? (0, r.jsx)(
                            l.yRy,
                            {
                                targetElementRef: C,
                                animation: l.yRy.Animation.TRANSLATE,
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
                      : 2 === T
                        ? (0, r.jsx)(m.Z, q(K({}, u), { className: F.roleIcon }), 'role-icon-children')
                        : null,
            [T, u, P]
        ),
        w = (0, c.e7)([S.default], () => S.default.getCurrentUser()),
        k = o.useMemo(() => {
            let e = [],
                n = E.ZP.isPremium(t.author),
                o = E.ZP.isPremium(w),
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
                null != N && e.push(N),
                null != P &&
                    (e.push(
                        (0, r.jsx)(
                            _.Z,
                            {
                                guild: P,
                                message: t
                            },
                            'new-member'
                        )
                    ),
                    e.push(
                        (0, r.jsx)(
                            b.Z,
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
        }, [t, a, u, s, N, P, w]);
    return null == x
        ? null
        : (0, r.jsxs)(r.Fragment, {
              children: [
                  (0, r.jsx)(D.Z, {
                      message: t,
                      channel: a,
                      author: x,
                      compact: s,
                      roleIcon: u,
                      showPopout: d,
                      renderPopout: p,
                      onClick: f,
                      onContextMenu: h,
                      onPopoutRequestClose: v,
                      decorations: {
                          [D.a.SYSTEM_TAG]: j,
                          [D.a.BADGES]: k
                      },
                      renderRemixTag: !0,
                      previewGuildId: i,
                      preview: O
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
    let { message: o, channel: a, author: i, compact: s = !1, onContextMenu: c, showUsernamePopout: l, roleIcon: u, onClickUsername: d, onPopoutRequestClose: p } = e;
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(D.Z, {
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
    let { message: t, avatar: n, username: o, usernameSpanId: a, usernameClassName: s, compact: c, showTimestamp: u, showTimestampOnHover: d, ariaLabelledBy: g, ariaDescribedBy: m, className: f, messageClassname: _, badges: b } = e,
        h = (0, R.yE)(t.flags, z.iLy.SENT_BY_SOCIAL_LAYER_INTEGRATION) ? t.applicationId : null,
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
                        (0, r.jsx)(L.Z, {
                            id: (0, B.Dv)(t),
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
                        (0, r.jsx)(L.Z, {
                            id: (0, B.Dv)(t),
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
                return null == (e = x.Z.getUserProfile(n.id)) ? void 0 : e.premiumSince;
            });
        return (0, r.jsx)(l.ua7, {
            tooltipClassName: F.nitroAuthorBadgeTootip,
            shouldShow: null != o,
            text: H.NW.formatToPlainString(H.t['8zbGNT'], { date: o }),
            onTooltipShow: () => (0, P.Z)(n.id),
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
        let { message: t, repliedMessage: n, compact: a = !1, renderPopout: p, showTimestampOnHover: g, roleIcon: m, subscribeToGroupId: _, hideTimestamp: b, className: y, channel: x, preview: P } = e,
            S = o.useMemo(() => (null != p ? (e) => p(e, t) : void 0), [p, t]),
            [, E] = (0, f.ZP)(t.author.id, e.guildId),
            Z = (0, c.e7)(
                [w.Z, I.Z],
                () => {
                    let n = I.Z.getGuild(e.guildId);
                    return null != t.author && null != n && w.Z.canManageUser(z.Plq.MODERATE_MEMBERS, t.author, n);
                },
                [t.author, e.guildId]
            ),
            A = E && Z,
            D = (function (e) {
                var t, n;
                let { props: a, guildId: i, handleRenderPopout: l, showCommunicationDisabledStyles: p = !1, className: g } = e,
                    { message: m, author: f, compact: _ = !1, subscribeToGroupId: b, animate: h = !0, onContextMenu: y, onClickAvatar: v, onPopoutRequestClose: O, showAvatarPopout: x } = a,
                    P = o.useRef(null),
                    [I, w] = o.useState(!1),
                    { analyticsLocations: S } = (0, d.ZP)(u.Z.AVATAR),
                    R = (0, c.e7)([N.ZP], () => {
                        var e;
                        return null != (e = a.displayCompactAvatars) ? e : N.ZP.displayCompactAvatars;
                    }),
                    E = m.author,
                    { id: Z } = E,
                    A = (0, j.ic)({ location: 'MessageHeader' }),
                    D = (0, U.Z)(m),
                    B = _ ? 32 : 80,
                    {
                        avatarSrc: L,
                        avatarDecorationSrc: G,
                        eventHandlers: W
                    } = (0, C.Z)({
                        user: E,
                        guildId: i,
                        size: B,
                        animateOnHover: null != b ? !I : !h,
                        showPending: !0
                    }),
                    H = m.isInteractionPlaceholder(),
                    F = o.useMemo(() => {
                        var e, t;
                        return H &&
                            null == E.avatar &&
                            (null == (e = m.application) ? void 0 : e.icon) != null &&
                            null !=
                                (t = k.ZP.getApplicationIconURL({
                                    id: m.application.id,
                                    icon: m.application.icon,
                                    size: B,
                                    fallbackAvatar: !1
                                }))
                            ? t
                            : L;
                    }, [H, null == (t = m.application) ? void 0 : t.icon, null == (n = m.application) ? void 0 : n.id, E.avatar, B, L]);
                if (
                    (o.useEffect(() => {
                        if (null != b) return M.S.subscribeKeyed(z.LPv.ANIMATE_CHAT_AVATAR, ''.concat(b, ':').concat(Z), w), () => void M.S.unsubscribeKeyed(z.LPv.ANIMATE_CHAT_AVATAR, ''.concat(b, ':').concat(Z), w);
                    }, [Z, b]),
                    !_ || R)
                )
                    return null != l && null != x
                        ? (0, r.jsx)(d.Gt, {
                              value: S,
                              children: (0, r.jsx)(T.Z, {
                                  targetElementRef: P,
                                  user: m.author,
                                  guildId: i,
                                  channelId: m.channel_id,
                                  messageId: m.id,
                                  shouldShow: x,
                                  shouldShowOnHover: D && A,
                                  shouldPreload: D,
                                  renderPopout: l,
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
                                  onRequestClose: O,
                                  clickTrap: x,
                                  children: (e) =>
                                      Y(
                                          q(K({}, W), {
                                              avatarSrc: F,
                                              avatarDecorationSrc: G,
                                              compact: _,
                                              onClick: v,
                                              onContextMenu: y,
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
                              value: S,
                              children: Y(
                                  q(K({}, W), {
                                      avatarSrc: F,
                                      avatarDecorationSrc: G,
                                      compact: _,
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
                handleRenderPopout: S,
                showCommunicationDisabledStyles: A
            }),
            L = (0, c.e7)([N.ZP], () => {
                var t;
                return null != (t = e.displayCompactAvatars) ? t : N.ZP.displayCompactAvatars;
            }),
            G = o.useMemo(
                () =>
                    (0, W.b)({
                        message: t,
                        channel: x,
                        user: null == t ? void 0 : t.author,
                        compact: a,
                        isRepliedMessage: !1
                    }),
                [t, x, a]
            ),
            V = (0, c.e7)([I.Z], () => ee(a, L, m, I.Z.getGuild(e.guildId)), [a, L, m, e.guildId]),
            Q = o.useMemo(() => {
                let e = [];
                return (0, R.yE)(t.flags, z.iLy.SUPPRESS_NOTIFICATIONS) && e.push((0, r.jsx)(O.Z, {}, 'suppress-notifications')), t.hasPotions() && e.push((0, r.jsx)(h.Z, { message: t })), e;
            }, [t]),
            $ = (0, B.XX)(t, _),
            et = (0, B.Dv)(t),
            en = b ? ''.concat($) : ''.concat($, ' ').concat(et),
            er = (null == n ? void 0 : n.state) === v.Y.LOADED ? (0, B.Gq)(t) : void 0;
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
                            renderPopout: S,
                            preview: P
                        })
                    )
                ]
            }),
            usernameSpanId: (0, B.XX)(t, _),
            usernameClassName: i()(F.headerText, {
                [F.hasRoleIcon]: 0 !== V,
                [F.hasBadges]: null != G || Q.length > 0
            }),
            compact: a,
            showTimestamp: !0 !== b,
            showTimestampOnHover: g,
            ariaLabelledBy: en,
            ariaDescribedBy: er,
            className: y,
            badges: Q
        });
    });
