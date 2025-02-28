n.d(t, {
    CF: () => X,
    ZP: () => $,
    nD: () => Q
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
    j = n(823415),
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
    D = n(421399),
    B = n(453687),
    L = n(318713),
    G = n(304176),
    W = n(47930),
    U = n(981631),
    z = n(388032),
    H = n(432957),
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
                className: i()(g, H.avatar, {
                    [H.compact]: o,
                    [H.clickable]: null != a,
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
function X(e, t, n) {
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
    let { message: t, avatar: n, username: o, usernameSpanId: a, usernameClassName: s, compact: c, showTimestamp: u, showTimestampOnHover: d, ariaLabelledBy: m, ariaDescribedBy: f, className: _, messageClassname: b, badges: h } = e,
        y = (0, g.q)(t.applicationId);
    return (
        null == y || (0, p.Z)(y) || (y = null),
        (0, r.jsxs)(r.Fragment, {
            children: [
                !c && n,
                (0, r.jsxs)(l.H, {
                    className: i()(H.header, _),
                    'aria-describedby': f,
                    'aria-labelledby': m,
                    children: [
                        u &&
                            c &&
                            (0, r.jsx)(L.Z, {
                                id: (0, B.Dv)(t),
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
                            (0, r.jsx)(L.Z, {
                                id: (0, B.Dv)(t),
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
        })
    );
}
let Y = (e) => {
    e || (0, v.z)();
};
function J(e) {
    let { currentUserIsPremium: t, author: n } = e,
        o = (0, c.e7)([C.Z], () => {
            var e;
            return null === (e = C.Z.getUserProfile(n.id)) || void 0 === e ? void 0 : e.premiumSince;
        });
    return (0, r.jsx)(l.ua7, {
        tooltipClassName: H.nitroAuthorBadgeTootip,
        shouldShow: null != o,
        text: z.NW.formatToPlainString(z.t['8zbGNT'], { date: o }),
        onTooltipShow: () => (0, T.Z)(n.id),
        children: (e) =>
            (0, r.jsx)(l.P3F, {
                className: H.nitroAuthorBadgeContainer,
                onClick: () => Y(t),
                'aria-label': z.NW.formatToPlainString(z.t['8zbGNT'], { date: o }),
                children: (0, r.jsx)(
                    'img',
                    V(
                        {
                            alt: '',
                            className: H.nitroBadgeSvg,
                            src: F
                        },
                        e
                    )
                )
            })
    });
}
function $(e) {
    let { message: t, repliedMessage: n, compact: a = !1, renderPopout: p, showTimestampOnHover: g, roleIcon: v, subscribeToGroupId: C, hideTimestamp: T, className: L, channel: F } = e,
        Y = o.useMemo(() => (null != p ? (e) => p(e, t) : void 0), [p, t]),
        [, $] = (0, _.ZP)(t.author.id, e.guildId),
        ee = (0, c.e7)([S.Z], () => S.Z.getGuild(e.guildId), [e.guildId]),
        et = null != t.author && null != ee && w.Z.canManageUser(U.Plq.MODERATE_MEMBERS, t.author, ee),
        en = $ && et,
        er = (function (e) {
            var t, n;
            let { props: a, guildId: i, handleRenderPopout: p, showCommunicationDisabledStyles: g = !1, className: m } = e,
                { message: f, author: _, compact: b = !1, subscribeToGroupId: h, animate: y = !0, onContextMenu: v, onClickAvatar: O, onPopoutRequestClose: x, showAvatarPopout: C } = a,
                [T, S] = o.useState(!1),
                { analyticsLocations: w } = (0, d.ZP)(u.Z.AVATAR),
                k = (0, c.e7)([I.ZP], () => {
                    var e;
                    return null !== (e = a.displayCompactAvatars) && void 0 !== e ? e : I.ZP.displayCompactAvatars;
                }),
                E = null != f.messageReference && null != f.webhookId && f.hasFlag(U.iLy.IS_CROSSPOST),
                Z = f.author,
                { id: A } = Z,
                D = b ? 32 : 80,
                {
                    avatarSrc: B,
                    avatarDecorationSrc: L,
                    eventHandlers: G
                } = (0, P.Z)({
                    user: Z,
                    guildId: i,
                    size: D,
                    animateOnHover: null != h ? !T : !y,
                    showPending: !0
                }),
                W = f.isInteractionPlaceholder(),
                z = o.useMemo(() => {
                    var e, t;
                    return W &&
                        null == Z.avatar &&
                        (null === (e = f.application) || void 0 === e ? void 0 : e.icon) != null &&
                        null !==
                            (t = M.ZP.getApplicationIconURL({
                                id: f.application.id,
                                icon: f.application.icon,
                                size: D,
                                fallbackAvatar: !1
                            })) &&
                        void 0 !== t
                        ? t
                        : B;
                }, [W, null === (t = f.application) || void 0 === t ? void 0 : t.icon, null === (n = f.application) || void 0 === n ? void 0 : n.id, Z.avatar, D, B]),
                H = (0, j.nT)({ location: 'MessageHeader' }),
                [F, X] = o.useState(!1),
                Q = o.useRef(!1);
            if (
                (o.useEffect(() => {
                    if (null != h) return R.S.subscribeKeyed(U.LPv.ANIMATE_CHAT_AVATAR, ''.concat(h, ':').concat(A), S), () => void R.S.unsubscribeKeyed(U.LPv.ANIMATE_CHAT_AVATAR, ''.concat(h, ':').concat(A), S);
                }, [A, h]),
                !b || k)
            ) {
                if (null != p && null != C) {
                    let e = (0, r.jsx)(d.Gt, {
                        value: w,
                        children: (0, r.jsx)(l.yRy, {
                            preload: E ? void 0 : Y,
                            renderPopout: p,
                            shouldShow: C || F,
                            position: s.tq ? 'window_center' : 'right',
                            onRequestClose: x,
                            clickTrap: C,
                            children: (e) =>
                                q(
                                    K(V({}, G), {
                                        avatarSrc: z,
                                        avatarDecorationSrc: L,
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
                    });
                    return H
                        ? (0, r.jsx)('div', {
                              onMouseEnter: () => {
                                  if (H) {
                                      Q.current = !0;
                                      let e = setTimeout(() => {
                                              Q.current && Y();
                                          }, 100),
                                          t = setTimeout(() => {
                                              Q.current && X(!0);
                                          }, 750);
                                      return () => {
                                          clearTimeout(e), clearTimeout(t);
                                      };
                                  }
                              },
                              onMouseLeave: () => {
                                  if (H) {
                                      Q.current = !1;
                                      let e = setTimeout(() => {
                                          Q.current || X(!1);
                                      }, 100);
                                      return () => clearTimeout(e);
                                  }
                              },
                              children: e
                          })
                        : e;
                }
                return (0, r.jsx)(d.Gt, {
                    value: w,
                    children: q(
                        K(V({}, G), {
                            avatarSrc: z,
                            avatarDecorationSrc: L,
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
            function Y() {
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
            handleRenderPopout: Y,
            showCommunicationDisabledStyles: en
        }),
        eo = (0, c.e7)([I.ZP], () => {
            var t;
            return null !== (t = e.displayCompactAvatars) && void 0 !== t ? t : I.ZP.displayCompactAvatars;
        }),
        ea =
            (!a || eo) && null != v && null != ee
                ? (0, r.jsx)(
                      l.yRy,
                      {
                          animation: l.yRy.Animation.TRANSLATE,
                          align: 'center',
                          autoInvert: !0,
                          nudgeAlignIntoViewport: !0,
                          position: 'right',
                          renderPopout: () =>
                              (0, r.jsx)(G.Z, {
                                  roleIcon: v,
                                  guild: ee
                              }),
                          clickTrap: !0,
                          children: (e) => {
                              let { onClick: t } = e;
                              return (0, r.jsx)(
                                  f.Z,
                                  K(V({}, v), {
                                      className: H.roleIcon,
                                      onClick: t
                                  })
                              );
                          }
                      },
                      'role-icon-children'
                  )
                : (!a || eo) && null != v
                  ? (0, r.jsx)(f.Z, K(V({}, v), { className: H.roleIcon }), 'role-icon-children')
                  : null,
        ei = (0, W.x)({
            message: t,
            channel: F,
            user: null == t ? void 0 : t.author,
            compact: a,
            isRepliedMessage: !1
        }),
        es = [],
        ec = k.default.getCurrentUser(),
        el = Z.ZP.isPremium(t.author),
        eu = Z.ZP.isPremium(ec),
        ed = null == F ? void 0 : F.isPrivate();
    (0, A.R)(null != v, 'Message Username') &&
        el &&
        !a &&
        !ed &&
        es.push(
            (0, r.jsx)(
                J,
                {
                    currentUserIsPremium: eu,
                    author: t.author
                },
                'nitro-author'
            )
        ),
        null != ea && es.push(ea),
        null != ee &&
            (es.push(
                (0, r.jsx)(
                    b.Z,
                    {
                        guild: ee,
                        message: t
                    },
                    'new-member'
                )
            ),
            es.push(
                (0, r.jsx)(
                    h.Z,
                    {
                        guild: ee,
                        message: t
                    },
                    'leaderboard-champion'
                )
            )),
        null != F &&
            null != ee &&
            es.push(
                (0, r.jsx)(
                    m.Z,
                    {
                        guild: ee,
                        channel: F,
                        userId: t.author.id,
                        messageId: t.id
                    },
                    'connections'
                )
            );
    let ep = [];
    (0, E.yE)(t.flags, U.iLy.SUPPRESS_NOTIFICATIONS) && ep.push((0, r.jsx)(x.Z, {}, 'suppress-notifications')), t.hasPotions() && ep.push((0, r.jsx)(y.Z, { message: t }));
    let eg = {};
    (eg[D.a.SYSTEM_TAG] = ei), (eg[D.a.BADGES] = es);
    let em = X(e, Y, eg),
        ef = (0, B.XX)(t, C),
        e_ = (0, B.Dv)(t),
        eb = T ? ''.concat(ef) : ''.concat(ef, ' ').concat(e_),
        eh = (null == n ? void 0 : n.state) === O.Y.LOADED ? (0, B.Gq)(t) : void 0;
    return (0, r.jsx)(Q, {
        message: t,
        avatar: er,
        username: (0, r.jsxs)(r.Fragment, {
            children: [
                en &&
                    (0, r.jsx)(l.ua7, {
                        text: z.NW.string(z.t.AeYyLy),
                        children: (e) =>
                            (0, r.jsxs)(r.Fragment, {
                                children: [
                                    (0, r.jsx)(
                                        l.YlB,
                                        K(
                                            V(
                                                {
                                                    size: 'xxs',
                                                    color: 'currentColor'
                                                },
                                                e
                                            ),
                                            { className: a ? H.compactCommunicationDisabled : H.communicationDisabled }
                                        )
                                    ),
                                    (0, r.jsx)(l.nn4, { children: z.NW.string(z.t.AmHag4) })
                                ]
                            })
                    }),
                em
            ]
        }),
        usernameSpanId: (0, B.XX)(t, C),
        usernameClassName: i()(H.headerText, {
            [H.hasRoleIcon]: null != ea,
            [H.hasBadges]: null != ei || ep.length > 0
        }),
        compact: a,
        showTimestamp: !0 !== T,
        showTimestampOnHover: g,
        ariaLabelledBy: eb,
        ariaDescribedBy: eh,
        className: L,
        badges: ep
    });
}
