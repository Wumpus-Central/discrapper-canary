n.d(t, {
    CF: () => V,
    ZP: () => X,
    nD: () => W
}),
    n(47120),
    n(789020),
    n(653041);
var a = n(200651),
    o = n(192379),
    i = n(120356),
    r = n.n(i),
    s = n(873546),
    l = n(442837),
    c = n(481060),
    u = n(100527),
    d = n(906732),
    p = n(835473),
    m = n(366030),
    g = n(91218),
    _ = n(71619),
    h = n(340797),
    f = n(913834),
    C = n(397589),
    x = n(98278),
    v = n(869765),
    b = n(243317),
    T = n(621853),
    I = n(518950),
    y = n(484459),
    N = n(184301),
    M = n(740492),
    k = n(430824),
    R = n(496675),
    j = n(594174),
    P = n(768581),
    S = n(585483),
    Z = n(630388),
    A = n(74538),
    E = n(276554),
    B = n(421399),
    L = n(453687),
    w = n(318713),
    O = n(304176),
    D = n(47930),
    G = n(981631),
    U = n(388032),
    z = n(732175),
    H = n(121282);
function F(e) {
    let { avatarSrc: t, avatarDecorationSrc: n, compact: o, onClick: i, onContextMenu: s, onMouseDown: l, onMouseEnter: c, onMouseLeave: u, onKeyDown: d, showCommunicationDisabledStyles: p = !1, className: m } = e;
    return (0, a.jsxs)(a.Fragment, {
        children: [
            (0, a.jsx)('img', {
                onClick: i,
                onContextMenu: s,
                onMouseDown: l,
                onKeyDown: d,
                onMouseEnter: c,
                onMouseLeave: u,
                src: t,
                'aria-hidden': !0,
                className: r()(m, z.avatar, {
                    [z.compact]: o,
                    [z.clickable]: null != i,
                    [z.communicationDisabledOpacity]: p
                }),
                alt: ' '
            }),
            null == n || o
                ? null
                : (0, a.jsx)('img', {
                      className: z.avatarDecoration,
                      src: n,
                      alt: ' ',
                      'aria-hidden': !0
                  })
        ]
    });
}
function V(e, t, n) {
    let { message: o, channel: i, author: r, compact: s = !1, onContextMenu: l, showUsernamePopout: c, roleIcon: u, onClickUsername: d, onPopoutRequestClose: p } = e;
    return (0, a.jsxs)(a.Fragment, {
        children: [
            (0, a.jsx)(B.Z, {
                message: o,
                channel: i,
                author: r,
                compact: s,
                roleIcon: u,
                showPopout: c,
                renderPopout: t,
                onClick: d,
                onContextMenu: l,
                onPopoutRequestClose: p,
                decorations: n,
                renderRemixTag: !0
            }),
            s &&
                (0, a.jsxs)(a.Fragment, {
                    children: [
                        (0, a.jsx)('i', {
                            className: z.separator,
                            children: ':'
                        }),
                        ' '
                    ]
                })
        ]
    });
}
function W(e) {
    let { message: t, avatar: n, username: o, usernameSpanId: i, usernameClassName: s, compact: l, showTimestamp: u, showTimestampOnHover: d, ariaLabelledBy: m, ariaDescribedBy: g, className: _, messageClassname: h, badges: f } = e,
        C = (0, p.q)(t.applicationId);
    return (
        null == C || (0, Z.yE)(C.flags, G.udG.SOCIAL_LAYER_INTEGRATION) || (C = null),
        (0, a.jsxs)(a.Fragment, {
            children: [
                !l && n,
                (0, a.jsxs)(c.H, {
                    className: r()(z.header, _),
                    'aria-describedby': g,
                    'aria-labelledby': m,
                    children: [
                        u &&
                            l &&
                            (0, a.jsx)(w.Z, {
                                id: (0, L.Dv)(t),
                                compact: !0,
                                timestamp: t.timestamp,
                                isVisibleOnlyOnHover: d,
                                className: h,
                                isInline: !1,
                                application: C
                            }),
                        l && n,
                        (0, a.jsx)('span', {
                            id: i,
                            className: s,
                            children: o
                        }),
                        u &&
                            !l &&
                            (0, a.jsx)(w.Z, {
                                id: (0, L.Dv)(t),
                                timestamp: t.timestamp,
                                className: h,
                                application: C
                            }),
                        null != f && f.length > 0
                            ? (0, a.jsx)('div', {
                                  className: z.badgesContainer,
                                  children: f
                              })
                            : null
                    ]
                })
            ]
        })
    );
}
let K = (e) => {
    e || (0, x.z)();
};
function q(e) {
    let { currentUserIsPremium: t, author: n } = e,
        o = (0, l.e7)([T.Z], () => {
            var e;
            return null === (e = T.Z.getUserProfile(n.id)) || void 0 === e ? void 0 : e.premiumSince;
        });
    return (0, a.jsx)(c.ua7, {
        tooltipClassName: z.nitroAuthorBadgeTootip,
        shouldShow: null != o,
        text: U.intl.formatToPlainString(U.t['8zbGNT'], { date: o }),
        onTooltipShow: () => (0, y.Z)(n.id),
        children: (e) =>
            (0, a.jsx)(c.P3F, {
                className: z.nitroAuthorBadgeContainer,
                onClick: () => K(t),
                'aria-label': U.intl.formatToPlainString(U.t['8zbGNT'], { date: o }),
                children: (0, a.jsx)('img', {
                    alt: '',
                    className: z.nitroBadgeSvg,
                    src: H,
                    ...e
                })
            })
    });
}
function X(e) {
    let { message: t, repliedMessage: n, compact: i = !1, renderPopout: p, showTimestampOnHover: x, roleIcon: T, subscribeToGroupId: y, hideTimestamp: w, className: H, channel: K } = e,
        X = o.useMemo(() => (null != p ? (e) => p(e, t) : void 0), [p, t]),
        [, Y] = (0, _.ZP)(t.author.id, e.guildId),
        Q = (0, l.e7)([k.Z], () => k.Z.getGuild(e.guildId), [e.guildId]),
        J = null != t.author && null != Q && R.Z.canManageUser(G.Plq.MODERATE_MEMBERS, t.author, Q),
        $ = Y && J,
        ee = (function (e) {
            var t, n;
            let { props: i, guildId: r, handleRenderPopout: p, showCommunicationDisabledStyles: m = !1, className: g } = e,
                { message: _, author: h, compact: f = !1, subscribeToGroupId: C, animate: x = !0, onContextMenu: v, onClickAvatar: b, onPopoutRequestClose: T, showAvatarPopout: y } = i,
                [k, R] = o.useState(!1),
                { analyticsLocations: j } = (0, d.ZP)(u.Z.AVATAR),
                Z = (0, l.e7)([M.ZP], () => {
                    var e;
                    return null !== (e = i.displayCompactAvatars) && void 0 !== e ? e : M.ZP.displayCompactAvatars;
                }),
                A = null != _.messageReference && null != _.webhookId && _.hasFlag(G.iLy.IS_CROSSPOST),
                E = _.author,
                { id: B } = E,
                L = f ? 32 : 80,
                {
                    avatarSrc: w,
                    avatarDecorationSrc: O,
                    eventHandlers: D
                } = (0, I.Z)({
                    user: E,
                    guildId: r,
                    size: L,
                    animateOnHover: null != C ? !k : !x,
                    showPending: !0
                }),
                U = _.isInteractionPlaceholder(),
                z = o.useMemo(() => {
                    var e, t;
                    return U &&
                        null == E.avatar &&
                        (null === (e = _.application) || void 0 === e ? void 0 : e.icon) != null &&
                        null !==
                            (t = P.ZP.getApplicationIconURL({
                                id: _.application.id,
                                icon: _.application.icon,
                                size: L,
                                fallbackAvatar: !1
                            })) &&
                        void 0 !== t
                        ? t
                        : w;
                }, [U, null === (t = _.application) || void 0 === t ? void 0 : t.icon, null === (n = _.application) || void 0 === n ? void 0 : n.id, E.avatar, L, w]);
            return (o.useEffect(() => {
                if (null != C) return S.S.subscribeKeyed(G.LPv.ANIMATE_CHAT_AVATAR, ''.concat(C, ':').concat(B), R), () => void S.S.unsubscribeKeyed(G.LPv.ANIMATE_CHAT_AVATAR, ''.concat(C, ':').concat(B), R);
            }, [B, C]),
            f && !Z)
                ? void 0
                : null != p && null != y
                  ? (0, a.jsx)(d.Gt, {
                        value: j,
                        children: (0, a.jsx)(c.yRy, {
                            preload: A
                                ? void 0
                                : function () {
                                      return (0, N.Z)(
                                          _.author.id,
                                          null != h.guildMemberAvatar && null != r
                                              ? P.ZP.getGuildMemberAvatarURLSimple({
                                                    guildId: r,
                                                    userId: _.author.id,
                                                    avatar: h.guildMemberAvatar,
                                                    size: 80
                                                })
                                              : _.author.getAvatarURL(void 0, 80, !1),
                                          {
                                              guildId: r,
                                              channelId: _.channel_id
                                          }
                                      );
                                  },
                            renderPopout: p,
                            shouldShow: y,
                            position: s.tq ? 'window_center' : 'right',
                            onRequestClose: T,
                            clickTrap: !0,
                            children: (e) =>
                                F({
                                    ...D,
                                    avatarSrc: z,
                                    avatarDecorationSrc: O,
                                    compact: f,
                                    onClick: b,
                                    onContextMenu: v,
                                    onMouseDown: e.onMouseDown,
                                    onKeyDown: e.onKeyDown,
                                    showCommunicationDisabledStyles: m,
                                    className: g
                                })
                        })
                    })
                  : (0, a.jsx)(d.Gt, {
                        value: j,
                        children: F({
                            ...D,
                            avatarSrc: z,
                            avatarDecorationSrc: O,
                            compact: f,
                            onClick: b,
                            onContextMenu: v,
                            onMouseDown: void 0,
                            onKeyDown: void 0,
                            showCommunicationDisabledStyles: m,
                            className: g
                        })
                    });
        })({
            props: e,
            guildId: e.guildId,
            handleRenderPopout: X,
            showCommunicationDisabledStyles: $
        }),
        et = (0, l.e7)([M.ZP], () => {
            var t;
            return null !== (t = e.displayCompactAvatars) && void 0 !== t ? t : M.ZP.displayCompactAvatars;
        }),
        en =
            (!i || et) && null != T && null != Q
                ? (0, a.jsx)(
                      c.yRy,
                      {
                          animation: c.yRy.Animation.TRANSLATE,
                          align: 'center',
                          autoInvert: !0,
                          nudgeAlignIntoViewport: !0,
                          position: 'right',
                          renderPopout: () =>
                              (0, a.jsx)(O.Z, {
                                  roleIcon: T,
                                  guild: Q
                              }),
                          clickTrap: !0,
                          children: (e) => {
                              let { onClick: t } = e;
                              return (0, a.jsx)(g.Z, {
                                  ...T,
                                  className: z.roleIcon,
                                  onClick: t
                              });
                          }
                      },
                      'role-icon-children'
                  )
                : (!i || et) && null != T
                  ? (0, a.jsx)(
                        g.Z,
                        {
                            ...T,
                            className: z.roleIcon
                        },
                        'role-icon-children'
                    )
                  : null,
        ea = (0, D.x)({
            message: t,
            channel: K,
            user: null == t ? void 0 : t.author,
            compact: i,
            isRepliedMessage: !1
        }),
        eo = [],
        ei = j.default.getCurrentUser(),
        er = A.ZP.isPremium(t.author),
        es = A.ZP.isPremium(ei),
        el = null == K ? void 0 : K.isPrivate();
    (0, E.R)(null != T, 'Message Username') &&
        er &&
        !i &&
        !el &&
        eo.push(
            (0, a.jsx)(
                q,
                {
                    currentUserIsPremium: es,
                    author: t.author
                },
                'nitro-author'
            )
        ),
        null != en && eo.push(en),
        null != Q &&
            (eo.push(
                (0, a.jsx)(
                    h.Z,
                    {
                        guild: Q,
                        message: t
                    },
                    'new-member'
                )
            ),
            eo.push(
                (0, a.jsx)(
                    f.Z,
                    {
                        guild: Q,
                        message: t
                    },
                    'leaderboard-champion'
                )
            )),
        null != K &&
            null != Q &&
            eo.push(
                (0, a.jsx)(
                    m.Z,
                    {
                        guild: Q,
                        channel: K,
                        userId: t.author.id,
                        messageId: t.id
                    },
                    'connections'
                )
            );
    let ec = [];
    (0, Z.yE)(t.flags, G.iLy.SUPPRESS_NOTIFICATIONS) && ec.push((0, a.jsx)(b.Z, {}, 'suppress-notifications')), t.hasPotions() && ec.push((0, a.jsx)(C.Z, { message: t }));
    let eu = {};
    (eu[B.a.SYSTEM_TAG] = ea), (eu[B.a.BADGES] = eo);
    let ed = V(e, X, eu),
        ep = (0, L.XX)(t, y),
        em = (0, L.Dv)(t),
        eg = w ? ''.concat(ep) : ''.concat(ep, ' ').concat(em),
        e_ = (null == n ? void 0 : n.state) === v.Y.LOADED ? (0, L.Gq)(t) : void 0;
    return (0, a.jsx)(W, {
        message: t,
        avatar: ee,
        username: (0, a.jsxs)(a.Fragment, {
            children: [
                $ &&
                    (0, a.jsx)(c.ua7, {
                        text: U.intl.string(U.t.AeYyLy),
                        children: (e) =>
                            (0, a.jsxs)(a.Fragment, {
                                children: [
                                    (0, a.jsx)(c.YlB, {
                                        size: 'xxs',
                                        color: 'currentColor',
                                        ...e,
                                        className: i ? z.compactCommunicationDisabled : z.communicationDisabled
                                    }),
                                    (0, a.jsx)(c.nn4, { children: U.intl.string(U.t.AmHag4) })
                                ]
                            })
                    }),
                ed
            ]
        }),
        usernameSpanId: (0, L.XX)(t, y),
        usernameClassName: r()(z.headerText, {
            [z.hasRoleIcon]: null != en,
            [z.hasBadges]: null != ea || ec.length > 0
        }),
        compact: i,
        showTimestamp: !0 !== w,
        showTimestampOnHover: x,
        ariaLabelledBy: eg,
        ariaDescribedBy: e_,
        className: H,
        badges: ec
    });
}
