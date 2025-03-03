n.d(t, {
    CF: () => q,
    ZP: () => J,
    nD: () => Y
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
    C = n(621853),
    x = n(823415),
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
    z = n(432957),
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
function Y(e) {
    let { message: t, avatar: n, username: o, usernameSpanId: a, usernameClassName: s, compact: c, showTimestamp: u, showTimestampOnHover: d, ariaLabelledBy: g, ariaDescribedBy: m, className: f, messageClassname: _, badges: b } = e,
        h = (0, R.yE)(t.flags, W.iLy.SENT_BY_SOCIAL_LAYER_INTEGRATION) ? t.applicationId : null,
        y = (0, p.q)(h);
    return (0, r.jsxs)(r.Fragment, {
        children: [
            !c && n,
            (0, r.jsxs)(l.H, {
                className: i()(z.header, f),
                'aria-describedby': m,
                'aria-labelledby': g,
                children: [
                    u &&
                        c &&
                        (0, r.jsx)(B.Z, {
                            id: (0, D.Dv)(t),
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
                        (0, r.jsx)(B.Z, {
                            id: (0, D.Dv)(t),
                            timestamp: t.timestamp,
                            className: _,
                            application: y
                        }),
                    null != b && b.length > 0
                        ? (0, r.jsx)('div', {
                              className: z.badgesContainer,
                              children: b
                          })
                        : null
                ]
            })
        ]
    });
}
let X = (e) => {
    e || (0, y.z)();
};
function Q(e) {
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
                onClick: () => X(t),
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
    let { message: t, repliedMessage: n, compact: a = !1, renderPopout: p, showTimestampOnHover: y, roleIcon: C, subscribeToGroupId: P, hideTimestamp: B, className: H, channel: X } = e,
        J = o.useMemo(() => (null != p ? (e) => p(e, t) : void 0), [p, t]),
        [, $] = (0, f.ZP)(t.author.id, e.guildId),
        ee = (0, c.e7)([I.Z], () => I.Z.getGuild(e.guildId), [e.guildId]),
        et = null != t.author && null != ee && S.Z.canManageUser(W.Plq.MODERATE_MEMBERS, t.author, ee),
        en = $ && et,
        er = (function (e) {
            var t, n;
            let { props: a, guildId: i, handleRenderPopout: p, showCommunicationDisabledStyles: g = !1, className: m } = e,
                { message: f, author: _, compact: b = !1, subscribeToGroupId: h, animate: y = !0, onContextMenu: v, onClickAvatar: O, onPopoutRequestClose: C, showAvatarPopout: P } = a,
                [I, S] = o.useState(!1),
                { analyticsLocations: w } = (0, d.ZP)(u.Z.AVATAR),
                R = (0, c.e7)([N.ZP], () => {
                    var e;
                    return null !== (e = a.displayCompactAvatars) && void 0 !== e ? e : N.ZP.displayCompactAvatars;
                }),
                E = null != f.messageReference && null != f.webhookId && f.hasFlag(W.iLy.IS_CROSSPOST),
                Z = f.author,
                { id: A } = Z,
                D = b ? 32 : 80,
                {
                    avatarSrc: B,
                    avatarDecorationSrc: L,
                    eventHandlers: G
                } = (0, j.Z)({
                    user: Z,
                    guildId: i,
                    size: D,
                    animateOnHover: null != h ? !I : !y,
                    showPending: !0
                }),
                U = f.isInteractionPlaceholder(),
                z = o.useMemo(() => {
                    var e, t;
                    return U &&
                        null == Z.avatar &&
                        (null === (e = f.application) || void 0 === e ? void 0 : e.icon) != null &&
                        null !==
                            (t = k.ZP.getApplicationIconURL({
                                id: f.application.id,
                                icon: f.application.icon,
                                size: D,
                                fallbackAvatar: !1
                            })) &&
                        void 0 !== t
                        ? t
                        : B;
                }, [U, null === (t = f.application) || void 0 === t ? void 0 : t.icon, null === (n = f.application) || void 0 === n ? void 0 : n.id, Z.avatar, D, B]),
                H = (0, x.nT)({ location: 'MessageHeader' }),
                [q, Y] = o.useState(!1),
                X = o.useRef(!1);
            if (
                (o.useEffect(() => {
                    if (null != h) return M.S.subscribeKeyed(W.LPv.ANIMATE_CHAT_AVATAR, ''.concat(h, ':').concat(A), S), () => void M.S.unsubscribeKeyed(W.LPv.ANIMATE_CHAT_AVATAR, ''.concat(h, ':').concat(A), S);
                }, [A, h]),
                !b || R)
            ) {
                if (null != p && null != P) {
                    let e = (0, r.jsx)(d.Gt, {
                        value: w,
                        children: (0, r.jsx)(l.yRy, {
                            preload: E ? void 0 : Q,
                            renderPopout: p,
                            shouldShow: P || q,
                            position: s.tq ? 'window_center' : 'right',
                            onRequestClose: C,
                            clickTrap: P,
                            children: (e) =>
                                K(
                                    V(F({}, G), {
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
                                      X.current = !0;
                                      let e = setTimeout(() => {
                                              X.current && Q();
                                          }, 100),
                                          t = setTimeout(() => {
                                              X.current && Y(!0);
                                          }, 750);
                                      return () => {
                                          clearTimeout(e), clearTimeout(t);
                                      };
                                  }
                              },
                              onMouseLeave: () => {
                                  if (H) {
                                      X.current = !1;
                                      let e = setTimeout(() => {
                                          X.current || Y(!1);
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
                    children: K(
                        V(F({}, G), {
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
            function Q() {
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
            }
        })({
            props: e,
            guildId: e.guildId,
            handleRenderPopout: J,
            showCommunicationDisabledStyles: en
        }),
        eo = (0, c.e7)([N.ZP], () => {
            var t;
            return null !== (t = e.displayCompactAvatars) && void 0 !== t ? t : N.ZP.displayCompactAvatars;
        }),
        ea =
            (!a || eo) && null != C && null != ee
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
                                  roleIcon: C,
                                  guild: ee
                              }),
                          clickTrap: !0,
                          children: (e) => {
                              let { onClick: t } = e;
                              return (0, r.jsx)(
                                  m.Z,
                                  V(F({}, C), {
                                      className: z.roleIcon,
                                      onClick: t
                                  })
                              );
                          }
                      },
                      'role-icon-children'
                  )
                : (!a || eo) && null != C
                  ? (0, r.jsx)(m.Z, V(F({}, C), { className: z.roleIcon }), 'role-icon-children')
                  : null,
        ei = (0, G.x)({
            message: t,
            channel: X,
            user: null == t ? void 0 : t.author,
            compact: a,
            isRepliedMessage: !1
        }),
        es = [],
        ec = w.default.getCurrentUser(),
        el = E.ZP.isPremium(t.author),
        eu = E.ZP.isPremium(ec),
        ed = null == X ? void 0 : X.isPrivate();
    (0, Z.R)(null != C, 'Message Username') &&
        el &&
        !a &&
        !ed &&
        es.push(
            (0, r.jsx)(
                Q,
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
                    _.Z,
                    {
                        guild: ee,
                        message: t
                    },
                    'new-member'
                )
            ),
            es.push(
                (0, r.jsx)(
                    b.Z,
                    {
                        guild: ee,
                        message: t
                    },
                    'leaderboard-champion'
                )
            )),
        null != X &&
            null != ee &&
            es.push(
                (0, r.jsx)(
                    g.Z,
                    {
                        guild: ee,
                        channel: X,
                        userId: t.author.id,
                        messageId: t.id
                    },
                    'connections'
                )
            );
    let ep = [];
    (0, R.yE)(t.flags, W.iLy.SUPPRESS_NOTIFICATIONS) && ep.push((0, r.jsx)(O.Z, {}, 'suppress-notifications')), t.hasPotions() && ep.push((0, r.jsx)(h.Z, { message: t }));
    let eg = {};
    (eg[A.a.SYSTEM_TAG] = ei), (eg[A.a.BADGES] = es);
    let em = q(e, J, eg),
        ef = (0, D.XX)(t, P),
        e_ = (0, D.Dv)(t),
        eb = B ? ''.concat(ef) : ''.concat(ef, ' ').concat(e_),
        eh = (null == n ? void 0 : n.state) === v.Y.LOADED ? (0, D.Gq)(t) : void 0;
    return (0, r.jsx)(Y, {
        message: t,
        avatar: er,
        username: (0, r.jsxs)(r.Fragment, {
            children: [
                en &&
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
                em
            ]
        }),
        usernameSpanId: (0, D.XX)(t, P),
        usernameClassName: i()(z.headerText, {
            [z.hasRoleIcon]: null != ea,
            [z.hasBadges]: null != ei || ep.length > 0
        }),
        compact: a,
        showTimestamp: !0 !== B,
        showTimestampOnHover: y,
        ariaLabelledBy: eb,
        ariaDescribedBy: eh,
        className: H,
        badges: ep
    });
}
