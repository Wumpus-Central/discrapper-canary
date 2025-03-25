n.d(t, {
    CF: () => Y,
    ZP: () => ee,
    nD: () => Q
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
    u = n(493773),
    d = n(100527),
    p = n(906732),
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
    z = n(228168),
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
function X(e) {
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
function Y(e, t, n) {
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
                            className: F.separator,
                            children: ':'
                        }),
                        ' '
                    ]
                })
        ]
    });
}
function Q(e) {
    let { message: t, avatar: n, username: o, usernameSpanId: a, usernameClassName: s, compact: c, showTimestamp: u, showTimestampOnHover: d, ariaLabelledBy: p, ariaDescribedBy: m, className: f, messageClassname: _, badges: b } = e,
        h = (0, E.yE)(t.flags, U.iLy.SENT_BY_SOCIAL_LAYER_INTEGRATION) ? t.applicationId : null,
        y = (0, g.q)(h);
    return (0, r.jsxs)(r.Fragment, {
        children: [
            !c && n,
            (0, r.jsxs)(l.H, {
                className: i()(F.header, f),
                'aria-describedby': m,
                'aria-labelledby': p,
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
let J = (e) => {
    e || (0, v.z)();
};
function $(e) {
    let { currentUserIsPremium: t, author: n } = e,
        o = (0, c.e7)([C.Z], () => {
            var e;
            return null === (e = C.Z.getUserProfile(n.id)) || void 0 === e ? void 0 : e.premiumSince;
        });
    return (0, r.jsx)(l.ua7, {
        tooltipClassName: F.nitroAuthorBadgeTootip,
        shouldShow: null != o,
        text: H.NW.formatToPlainString(H.t['8zbGNT'], { date: o }),
        onTooltipShow: () => (0, T.Z)(n.id),
        children: (e) =>
            (0, r.jsx)(l.P3F, {
                className: F.nitroAuthorBadgeContainer,
                onClick: () => J(t),
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
}
function ee(e) {
    let { message: t, repliedMessage: n, compact: a = !1, renderPopout: g, showTimestampOnHover: v, roleIcon: C, subscribeToGroupId: T, hideTimestamp: L, className: V, channel: J } = e,
        ee = o.useMemo(() => (null != g ? (e) => g(e, t) : void 0), [g, t]),
        [, et] = (0, _.ZP)(t.author.id, e.guildId),
        en = (0, c.e7)([S.Z], () => S.Z.getGuild(e.guildId), [e.guildId]),
        er = null != t.author && null != en && w.Z.canManageUser(U.Plq.MODERATE_MEMBERS, t.author, en),
        eo = et && er,
        ea = (function (e) {
            var t, n;
            let { props: a, guildId: i, handleRenderPopout: g, showCommunicationDisabledStyles: m = !1, className: f } = e,
                { message: _, author: b, compact: h = !1, subscribeToGroupId: y, animate: v = !0, onContextMenu: O, onClickAvatar: x, onPopoutRequestClose: C, showAvatarPopout: T } = a,
                [S, w] = o.useState(!1),
                { analyticsLocations: k } = (0, p.ZP)(d.Z.AVATAR),
                E = (0, c.e7)([I.ZP], () => {
                    var e;
                    return null !== (e = a.displayCompactAvatars) && void 0 !== e ? e : I.ZP.displayCompactAvatars;
                }),
                Z = null != _.messageReference && null != _.webhookId && _.hasFlag(U.iLy.IS_CROSSPOST),
                A = _.author,
                { id: D } = A,
                B = h ? 32 : 80,
                {
                    avatarSrc: L,
                    avatarDecorationSrc: G,
                    eventHandlers: W
                } = (0, P.Z)({
                    user: A,
                    guildId: i,
                    size: B,
                    animateOnHover: null != y ? !S : !v,
                    showPending: !0
                }),
                H = _.isInteractionPlaceholder(),
                F = o.useMemo(() => {
                    var e, t;
                    return H &&
                        null == A.avatar &&
                        (null === (e = _.application) || void 0 === e ? void 0 : e.icon) != null &&
                        null !==
                            (t = M.ZP.getApplicationIconURL({
                                id: _.application.id,
                                icon: _.application.icon,
                                size: B,
                                fallbackAvatar: !1
                            })) &&
                        void 0 !== t
                        ? t
                        : L;
                }, [H, null === (t = _.application) || void 0 === t ? void 0 : t.icon, null === (n = _.application) || void 0 === n ? void 0 : n.id, A.avatar, B, L]),
                V = (0, j.nT)({ location: 'MessageHeader' }),
                [Y, Q] = o.useState(!1),
                J = o.useRef(!1),
                $ = o.useRef(void 0),
                ee = o.useRef(void 0),
                et = o.useRef(void 0);
            if (
                ((0, u.ZP)(() => () => {
                    clearTimeout($.current), clearTimeout(ee.current), clearTimeout(et.current);
                }),
                o.useEffect(() => {
                    if (null != y) return R.S.subscribeKeyed(U.LPv.ANIMATE_CHAT_AVATAR, ''.concat(y, ':').concat(D), w), () => void R.S.unsubscribeKeyed(U.LPv.ANIMATE_CHAT_AVATAR, ''.concat(y, ':').concat(D), w);
                }, [D, y]),
                !h || E)
            ) {
                if (null != g && null != T) {
                    let e = (0, r.jsx)(p.Gt, {
                        value: k,
                        children: (0, r.jsx)(l.yRy, {
                            preload: Z ? void 0 : en,
                            renderPopout: g,
                            shouldShow: T || Y,
                            position: s.tq ? 'window_center' : 'right',
                            onRequestClose: C,
                            clickTrap: T,
                            children: (e) =>
                                X(
                                    q(K({}, W), {
                                        avatarSrc: F,
                                        avatarDecorationSrc: G,
                                        compact: h,
                                        onClick: x,
                                        onContextMenu: O,
                                        onMouseDown: e.onMouseDown,
                                        onKeyDown: e.onKeyDown,
                                        showCommunicationDisabledStyles: m,
                                        className: f
                                    })
                                )
                        })
                    });
                    return V
                        ? (0, r.jsx)('div', {
                              onMouseEnter: () => {
                                  V &&
                                      ((J.current = !0),
                                      ($.current = setTimeout(() => {
                                          J.current && en();
                                      }, z.a6)),
                                      (ee.current = setTimeout(() => {
                                          J.current && Q(!0);
                                      }, z.JX)));
                              },
                              onMouseLeave: () => {
                                  V &&
                                      ((J.current = !1),
                                      (et.current = setTimeout(() => {
                                          J.current || Q(!1);
                                      }, z.Ig)));
                              },
                              children: e
                          })
                        : e;
                }
                return (0, r.jsx)(p.Gt, {
                    value: k,
                    children: X(
                        q(K({}, W), {
                            avatarSrc: F,
                            avatarDecorationSrc: G,
                            compact: h,
                            onClick: x,
                            onContextMenu: O,
                            onMouseDown: void 0,
                            onKeyDown: void 0,
                            showCommunicationDisabledStyles: m,
                            className: f
                        })
                    )
                });
            }
            function en() {
                return (0, N.Z)(
                    _.author.id,
                    null != b.guildMemberAvatar && null != i
                        ? M.ZP.getGuildMemberAvatarURLSimple({
                              guildId: i,
                              userId: _.author.id,
                              avatar: b.guildMemberAvatar,
                              size: 80
                          })
                        : _.author.getAvatarURL(void 0, 80, !1),
                    {
                        guildId: i,
                        channelId: _.channel_id
                    }
                );
            }
        })({
            props: e,
            guildId: e.guildId,
            handleRenderPopout: ee,
            showCommunicationDisabledStyles: eo
        }),
        ei = (0, c.e7)([I.ZP], () => {
            var t;
            return null !== (t = e.displayCompactAvatars) && void 0 !== t ? t : I.ZP.displayCompactAvatars;
        }),
        es =
            (!a || ei) && null != C && null != en
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
                                  roleIcon: C,
                                  guild: en
                              }),
                          clickTrap: !0,
                          children: (e) => {
                              let { onClick: t } = e;
                              return (0, r.jsx)(
                                  f.Z,
                                  q(K({}, C), {
                                      className: F.roleIcon,
                                      onClick: t
                                  })
                              );
                          }
                      },
                      'role-icon-children'
                  )
                : (!a || ei) && null != C
                  ? (0, r.jsx)(f.Z, q(K({}, C), { className: F.roleIcon }), 'role-icon-children')
                  : null,
        ec = (0, W.x)({
            message: t,
            channel: J,
            user: null == t ? void 0 : t.author,
            compact: a,
            isRepliedMessage: !1
        }),
        el = [],
        eu = k.default.getCurrentUser(),
        ed = Z.ZP.isPremium(t.author),
        ep = Z.ZP.isPremium(eu),
        eg = null == J ? void 0 : J.isPrivate();
    (0, A.R)(null != C, 'Message Username') &&
        ed &&
        !a &&
        !eg &&
        el.push(
            (0, r.jsx)(
                $,
                {
                    currentUserIsPremium: ep,
                    author: t.author
                },
                'nitro-author'
            )
        ),
        null != es && el.push(es),
        null != en &&
            (el.push(
                (0, r.jsx)(
                    b.Z,
                    {
                        guild: en,
                        message: t
                    },
                    'new-member'
                )
            ),
            el.push(
                (0, r.jsx)(
                    h.Z,
                    {
                        guild: en,
                        message: t
                    },
                    'leaderboard-champion'
                )
            )),
        null != J &&
            null != en &&
            el.push(
                (0, r.jsx)(
                    m.Z,
                    {
                        guild: en,
                        channel: J,
                        userId: t.author.id,
                        messageId: t.id
                    },
                    'connections'
                )
            );
    let em = [];
    (0, E.yE)(t.flags, U.iLy.SUPPRESS_NOTIFICATIONS) && em.push((0, r.jsx)(x.Z, {}, 'suppress-notifications')), t.hasPotions() && em.push((0, r.jsx)(y.Z, { message: t }));
    let ef = {};
    (ef[D.a.SYSTEM_TAG] = ec), (ef[D.a.BADGES] = el);
    let e_ = Y(e, ee, ef),
        eb = (0, B.XX)(t, T),
        eh = (0, B.Dv)(t),
        ey = L ? ''.concat(eb) : ''.concat(eb, ' ').concat(eh),
        ev = (null == n ? void 0 : n.state) === O.Y.LOADED ? (0, B.Gq)(t) : void 0;
    return (0, r.jsx)(Q, {
        message: t,
        avatar: ea,
        username: (0, r.jsxs)(r.Fragment, {
            children: [
                eo &&
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
                e_
            ]
        }),
        usernameSpanId: (0, B.XX)(t, T),
        usernameClassName: i()(F.headerText, {
            [F.hasRoleIcon]: null != es,
            [F.hasBadges]: null != ec || em.length > 0
        }),
        compact: a,
        showTimestamp: !0 !== L,
        showTimestampOnHover: v,
        ariaLabelledBy: ey,
        ariaDescribedBy: ev,
        className: V,
        badges: em
    });
}
