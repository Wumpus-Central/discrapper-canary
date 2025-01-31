n.d(t, {
    CF: () => z,
    ZP: () => $,
    nD: () => Q
}),
    n(47120),
    n(789020),
    n(653041);
var i = n(200651),
    r = n(192379),
    a = n(120356),
    s = n.n(a),
    o = n(873546),
    l = n(442837),
    u = n(481060),
    c = n(100527),
    d = n(906732),
    f = n(835473),
    _ = n(366030),
    p = n(91218),
    h = n(71619),
    m = n(340797),
    g = n(913834),
    E = n(397589),
    v = n(98278),
    y = n(869765),
    I = n(243317),
    b = n(621853),
    T = n(518950),
    S = n(484459),
    A = n(184301),
    N = n(740492),
    C = n(430824),
    R = n(496675),
    O = n(594174),
    D = n(768581),
    x = n(585483),
    L = n(630388),
    P = n(74538),
    w = n(276554),
    M = n(421399),
    k = n(453687),
    U = n(318713),
    G = n(304176),
    B = n(47930),
    Z = n(981631),
    F = n(388032),
    V = n(507304),
    j = n(121282);
let H = 32,
    Y = 80,
    W = 80;
function K(e) {
    let { avatarSrc: t, avatarDecorationSrc: n, compact: r, onClick: a, onContextMenu: o, onMouseDown: l, onMouseEnter: u, onMouseLeave: c, onKeyDown: d, showCommunicationDisabledStyles: f = !1, className: _ } = e;
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)('img', {
                onClick: a,
                onContextMenu: o,
                onMouseDown: l,
                onKeyDown: d,
                onMouseEnter: u,
                onMouseLeave: c,
                src: t,
                'aria-hidden': !0,
                className: s()(_, V.avatar, {
                    [V.compact]: r,
                    [V.clickable]: null != a,
                    [V.communicationDisabledOpacity]: f
                }),
                alt: ' '
            }),
            null == n || r
                ? null
                : (0, i.jsx)('img', {
                      className: V.avatarDecoration,
                      src: n,
                      alt: ' ',
                      'aria-hidden': !0
                  })
        ]
    });
}
function z(e, t, n) {
    let { message: r, channel: a, author: s, compact: o = !1, onContextMenu: l, showUsernamePopout: u, roleIcon: c, onClickUsername: d, onPopoutRequestClose: f } = e;
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)(M.Z, {
                message: r,
                channel: a,
                author: s,
                compact: o,
                roleIcon: c,
                showPopout: u,
                renderPopout: t,
                onClick: d,
                onContextMenu: l,
                onPopoutRequestClose: f,
                decorations: n,
                renderRemixTag: !0
            }),
            o &&
                (0, i.jsxs)(i.Fragment, {
                    children: [
                        (0, i.jsx)('i', {
                            className: V.separator,
                            children: ':'
                        }),
                        ' '
                    ]
                })
        ]
    });
}
function q(e) {
    var t, n;
    let { props: a, guildId: s, handleRenderPopout: f, showCommunicationDisabledStyles: _ = !1, className: p } = e,
        { message: h, author: m, compact: g = !1, subscribeToGroupId: E, animate: v = !0, onContextMenu: y, onClickAvatar: I, onPopoutRequestClose: b, showAvatarPopout: S } = a,
        [C, R] = r.useState(!1),
        { analyticsLocations: O } = (0, d.ZP)(c.Z.AVATAR),
        L = (0, l.e7)([N.ZP], () => {
            var e;
            return null !== (e = a.displayCompactAvatars) && void 0 !== e ? e : N.ZP.displayCompactAvatars;
        }),
        P = null != h.messageReference && null != h.webhookId && h.hasFlag(Z.iLy.IS_CROSSPOST),
        w = h.author,
        { id: M } = w,
        k = g ? H : Y,
        {
            avatarSrc: U,
            avatarDecorationSrc: G,
            eventHandlers: B
        } = (0, T.Z)({
            user: w,
            guildId: s,
            size: k,
            animateOnHover: null != E ? !C : !v,
            showPending: !0
        }),
        F = h.isInteractionPlaceholder(),
        V = r.useMemo(() => {
            var e, t;
            return F &&
                null == w.avatar &&
                (null === (e = h.application) || void 0 === e ? void 0 : e.icon) != null &&
                null !==
                    (t = D.ZP.getApplicationIconURL({
                        id: h.application.id,
                        icon: h.application.icon,
                        size: k,
                        fallbackAvatar: !1
                    })) &&
                void 0 !== t
                ? t
                : U;
        }, [F, null === (t = h.application) || void 0 === t ? void 0 : t.icon, null === (n = h.application) || void 0 === n ? void 0 : n.id, w.avatar, k, U]);
    if (
        (r.useEffect(() => {
            if (null != E) return x.S.subscribeKeyed(Z.LPv.ANIMATE_CHAT_AVATAR, ''.concat(E, ':').concat(M), R), () => void x.S.unsubscribeKeyed(Z.LPv.ANIMATE_CHAT_AVATAR, ''.concat(E, ':').concat(M), R);
        }, [M, E]),
        !g || L)
    )
        return null != f && null != S
            ? (0, i.jsx)(d.Gt, {
                  value: O,
                  children: (0, i.jsx)(u.yRy, {
                      preload: P ? void 0 : j,
                      renderPopout: f,
                      shouldShow: S,
                      position: o.tq ? 'window_center' : 'right',
                      onRequestClose: b,
                      clickTrap: !0,
                      children: (e) =>
                          K({
                              ...B,
                              avatarSrc: V,
                              avatarDecorationSrc: G,
                              compact: g,
                              onClick: I,
                              onContextMenu: y,
                              onMouseDown: e.onMouseDown,
                              onKeyDown: e.onKeyDown,
                              showCommunicationDisabledStyles: _,
                              className: p
                          })
                  })
              })
            : (0, i.jsx)(d.Gt, {
                  value: O,
                  children: K({
                      ...B,
                      avatarSrc: V,
                      avatarDecorationSrc: G,
                      compact: g,
                      onClick: I,
                      onContextMenu: y,
                      onMouseDown: void 0,
                      onKeyDown: void 0,
                      showCommunicationDisabledStyles: _,
                      className: p
                  })
              });
    function j() {
        return (0, A.Z)(
            h.author.id,
            null != m.guildMemberAvatar && null != s
                ? D.ZP.getGuildMemberAvatarURLSimple({
                      guildId: s,
                      userId: h.author.id,
                      avatar: m.guildMemberAvatar,
                      size: W
                  })
                : h.author.getAvatarURL(void 0, W, !1),
            {
                guildId: s,
                channelId: h.channel_id
            }
        );
    }
}
function Q(e) {
    let { message: t, avatar: n, username: r, usernameSpanId: a, usernameClassName: o, compact: l, showTimestamp: c, showTimestampOnHover: d, ariaLabelledBy: _, ariaDescribedBy: p, className: h, messageClassname: m, badges: g } = e,
        E = (0, f.q)(t.applicationId);
    return (
        null == E || (0, L.yE)(E.flags, Z.udG.SOCIAL_LAYER_INTEGRATION) || (E = null),
        (0, i.jsxs)(i.Fragment, {
            children: [
                !l && n,
                (0, i.jsxs)(u.H, {
                    className: s()(V.header, h),
                    'aria-describedby': p,
                    'aria-labelledby': _,
                    children: [
                        c &&
                            l &&
                            (0, i.jsx)(U.Z, {
                                id: (0, k.Dv)(t),
                                compact: !0,
                                timestamp: t.timestamp,
                                isVisibleOnlyOnHover: d,
                                className: m,
                                isInline: !1,
                                application: E
                            }),
                        l && n,
                        (0, i.jsx)('span', {
                            id: a,
                            className: o,
                            children: r
                        }),
                        c &&
                            !l &&
                            (0, i.jsx)(U.Z, {
                                id: (0, k.Dv)(t),
                                timestamp: t.timestamp,
                                className: m,
                                application: E
                            }),
                        null != g && g.length > 0
                            ? (0, i.jsx)('div', {
                                  className: V.badgesContainer,
                                  children: g
                              })
                            : null
                    ]
                })
            ]
        })
    );
}
let X = (e) => {
    e || (0, v.z)();
};
function J(e) {
    let { currentUserIsPremium: t, author: n } = e,
        r = (0, l.e7)([b.Z], () => {
            var e;
            return null === (e = b.Z.getUserProfile(n.id)) || void 0 === e ? void 0 : e.premiumSince;
        });
    return (0, i.jsx)(u.ua7, {
        tooltipClassName: V.nitroAuthorBadgeTootip,
        shouldShow: null != r,
        text: F.intl.formatToPlainString(F.t['8zbGNT'], { date: r }),
        onTooltipShow: () => (0, S.Z)(n.id),
        children: (e) =>
            (0, i.jsx)(u.P3F, {
                className: V.nitroAuthorBadgeContainer,
                onClick: () => X(t),
                'aria-label': F.intl.formatToPlainString(F.t['8zbGNT'], { date: r }),
                children: (0, i.jsx)('img', {
                    alt: '',
                    className: V.nitroBadgeSvg,
                    src: j,
                    ...e
                })
            })
    });
}
function $(e) {
    let { message: t, repliedMessage: n, compact: a = !1, renderPopout: o, showTimestampOnHover: c, roleIcon: d, subscribeToGroupId: f, hideTimestamp: v, className: b, channel: T } = e,
        S = r.useMemo(() => (null != o ? (e) => o(e, t) : void 0), [o, t]),
        [, A] = (0, h.ZP)(t.author.id, e.guildId),
        D = (0, l.e7)([C.Z], () => C.Z.getGuild(e.guildId), [e.guildId]),
        x = null != t.author && null != D && R.Z.canManageUser(Z.Plq.MODERATE_MEMBERS, t.author, D),
        U = A && x,
        j = q({
            props: e,
            guildId: e.guildId,
            handleRenderPopout: S,
            showCommunicationDisabledStyles: U
        }),
        H = (0, l.e7)([N.ZP], () => {
            var t;
            return null !== (t = e.displayCompactAvatars) && void 0 !== t ? t : N.ZP.displayCompactAvatars;
        }),
        Y =
            (!a || H) && null != d && null != D
                ? (0, i.jsx)(
                      u.yRy,
                      {
                          animation: u.yRy.Animation.TRANSLATE,
                          align: 'center',
                          autoInvert: !0,
                          nudgeAlignIntoViewport: !0,
                          position: 'right',
                          renderPopout: () =>
                              (0, i.jsx)(G.Z, {
                                  roleIcon: d,
                                  guild: D
                              }),
                          clickTrap: !0,
                          children: (e) => {
                              let { onClick: t } = e;
                              return (0, i.jsx)(p.Z, {
                                  ...d,
                                  className: V.roleIcon,
                                  onClick: t
                              });
                          }
                      },
                      'role-icon-children'
                  )
                : (!a || H) && null != d
                  ? (0, i.jsx)(
                        p.Z,
                        {
                            ...d,
                            className: V.roleIcon
                        },
                        'role-icon-children'
                    )
                  : null,
        W = (0, B.x)({
            message: t,
            channel: T,
            user: null == t ? void 0 : t.author,
            compact: a,
            isRepliedMessage: !1
        }),
        K = [],
        X = O.default.getCurrentUser(),
        $ = P.ZP.isPremium(t.author),
        ee = P.ZP.isPremium(X),
        et = null == T ? void 0 : T.isPrivate();
    (0, w.R)(null != d, 'Message Username') &&
        $ &&
        !a &&
        !et &&
        K.push(
            (0, i.jsx)(
                J,
                {
                    currentUserIsPremium: ee,
                    author: t.author
                },
                'nitro-author'
            )
        ),
        null != Y && K.push(Y),
        null != D &&
            (K.push(
                (0, i.jsx)(
                    m.Z,
                    {
                        guild: D,
                        message: t
                    },
                    'new-member'
                )
            ),
            K.push(
                (0, i.jsx)(
                    g.Z,
                    {
                        guild: D,
                        message: t
                    },
                    'leaderboard-champion'
                )
            )),
        null != T &&
            null != D &&
            K.push(
                (0, i.jsx)(
                    _.Z,
                    {
                        guild: D,
                        channel: T,
                        userId: t.author.id,
                        messageId: t.id
                    },
                    'connections'
                )
            );
    let en = [];
    (0, L.yE)(t.flags, Z.iLy.SUPPRESS_NOTIFICATIONS) && en.push((0, i.jsx)(I.Z, {}, 'suppress-notifications')), t.hasPotions() && en.push((0, i.jsx)(E.Z, { message: t }));
    let ei = {};
    (ei[M.a.SYSTEM_TAG] = W), (ei[M.a.BADGES] = K);
    let er = z(e, S, ei),
        ea = (0, k.XX)(t, f),
        es = (0, k.Dv)(t),
        eo = v ? ''.concat(ea) : ''.concat(ea, ' ').concat(es),
        el = (null == n ? void 0 : n.state) === y.Y.LOADED ? (0, k.Gq)(t) : void 0,
        eu = !0 !== v;
    return (0, i.jsx)(Q, {
        message: t,
        avatar: j,
        username: (0, i.jsxs)(i.Fragment, {
            children: [
                U &&
                    (0, i.jsx)(u.ua7, {
                        text: F.intl.string(F.t.AeYyLy),
                        children: (e) =>
                            (0, i.jsxs)(i.Fragment, {
                                children: [
                                    (0, i.jsx)(u.YlB, {
                                        size: 'xxs',
                                        color: 'currentColor',
                                        ...e,
                                        className: a ? V.compactCommunicationDisabled : V.communicationDisabled
                                    }),
                                    (0, i.jsx)(u.nn4, { children: F.intl.string(F.t.AmHag4) })
                                ]
                            })
                    }),
                er
            ]
        }),
        usernameSpanId: (0, k.XX)(t, f),
        usernameClassName: s()(V.headerText, {
            [V.hasRoleIcon]: null != Y,
            [V.hasBadges]: null != W || en.length > 0
        }),
        compact: a,
        showTimestamp: eu,
        showTimestampOnHover: c,
        ariaLabelledBy: eo,
        ariaDescribedBy: el,
        className: b,
        badges: en
    });
}
