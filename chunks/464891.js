r.d(n, {
    CF: function () {
        return J;
    },
    ZP: function () {
        return er;
    },
    nD: function () {
        return ee;
    }
});
var i = r(47120);
var a = r(789020);
var o = r(653041);
var s = r(200651),
    l = r(192379),
    u = r(120356),
    c = r.n(u),
    d = r(873546),
    f = r(442837),
    p = r(481060),
    h = r(100527),
    _ = r(906732),
    m = r(835473),
    g = r(366030),
    E = r(91218),
    v = r(71619),
    y = r(340797),
    b = r(913834),
    I = r(397589),
    T = r(98278),
    S = r(869765),
    A = r(243317),
    C = r(621853),
    N = r(518950),
    R = r(484459),
    O = r(184301),
    D = r(740492),
    x = r(430824),
    L = r(496675),
    w = r(594174),
    P = r(768581),
    M = r(585483),
    k = r(630388),
    U = r(74538),
    B = r(276554),
    G = r(421399),
    Z = r(453687),
    F = r(318713),
    V = r(304176),
    j = r(47930),
    H = r(981631),
    Y = r(388032),
    W = r(507304),
    K = r(121282);
let z = 32,
    q = 80,
    Q = 80;
function X(e) {
    let { avatarSrc: n, avatarDecorationSrc: r, compact: i, onClick: a, onContextMenu: o, onMouseDown: l, onMouseEnter: u, onMouseLeave: d, onKeyDown: f, showCommunicationDisabledStyles: p = !1, className: h } = e;
    return (0, s.jsxs)(s.Fragment, {
        children: [
            (0, s.jsx)('img', {
                onClick: a,
                onContextMenu: o,
                onMouseDown: l,
                onKeyDown: f,
                onMouseEnter: u,
                onMouseLeave: d,
                src: n,
                'aria-hidden': !0,
                className: c()(h, W.avatar, {
                    [W.compact]: i,
                    [W.clickable]: null != a,
                    [W.communicationDisabledOpacity]: p
                }),
                alt: ' '
            }),
            null == r || i
                ? null
                : (0, s.jsx)('img', {
                      className: W.avatarDecoration,
                      src: r,
                      alt: ' ',
                      'aria-hidden': !0
                  })
        ]
    });
}
function J(e, n, r) {
    let { message: i, channel: a, author: o, compact: l = !1, onContextMenu: u, showUsernamePopout: c, roleIcon: d, onClickUsername: f, onPopoutRequestClose: p } = e;
    return (0, s.jsxs)(s.Fragment, {
        children: [
            (0, s.jsx)(G.Z, {
                message: i,
                channel: a,
                author: o,
                compact: l,
                roleIcon: d,
                showPopout: c,
                renderPopout: n,
                onClick: f,
                onContextMenu: u,
                onPopoutRequestClose: p,
                decorations: r,
                renderRemixTag: !0
            }),
            l &&
                (0, s.jsxs)(s.Fragment, {
                    children: [
                        (0, s.jsx)('i', {
                            className: W.separator,
                            children: ':'
                        }),
                        ' '
                    ]
                })
        ]
    });
}
function $(e) {
    var n, r;
    let { props: i, guildId: a, handleRenderPopout: o, showCommunicationDisabledStyles: u = !1, className: c } = e,
        { message: m, author: g, compact: E = !1, subscribeToGroupId: v, animate: y = !0, onContextMenu: b, onClickAvatar: I, onPopoutRequestClose: T, showAvatarPopout: S } = i,
        [A, C] = l.useState(!1),
        { analyticsLocations: R } = (0, _.ZP)(h.Z.AVATAR),
        x = (0, f.e7)([D.ZP], () => {
            var e;
            return null !== (e = i.displayCompactAvatars) && void 0 !== e ? e : D.ZP.displayCompactAvatars;
        }),
        L = null != m.messageReference && null != m.webhookId && m.hasFlag(H.iLy.IS_CROSSPOST),
        w = m.author,
        { id: k } = w,
        U = E ? z : q,
        {
            avatarSrc: B,
            avatarDecorationSrc: G,
            eventHandlers: Z
        } = (0, N.Z)({
            user: w,
            guildId: a,
            size: U,
            animateOnHover: null != v ? !A : !y,
            showPending: !0
        }),
        F = m.isInteractionPlaceholder(),
        V = l.useMemo(() => {
            var e, n;
            return F && null == w.avatar && (null === (e = m.application) || void 0 === e ? void 0 : e.icon) != null
                ? null !==
                      (n = P.ZP.getApplicationIconURL({
                          id: m.application.id,
                          icon: m.application.icon,
                          size: U,
                          fallbackAvatar: !1
                      })) && void 0 !== n
                    ? n
                    : B
                : B;
        }, [F, null === (n = m.application) || void 0 === n ? void 0 : n.icon, null === (r = m.application) || void 0 === r ? void 0 : r.id, w.avatar, U, B]);
    if (
        (l.useEffect(() => {
            if (null != v) return M.S.subscribeKeyed(H.LPv.ANIMATE_CHAT_AVATAR, ''.concat(v, ':').concat(k), C), () => void M.S.unsubscribeKeyed(H.LPv.ANIMATE_CHAT_AVATAR, ''.concat(v, ':').concat(k), C);
        }, [k, v]),
        !E || !!x)
    )
        return null != o && null != S
            ? (0, s.jsx)(_.Gt, {
                  value: R,
                  children: (0, s.jsx)(p.Popout, {
                      preload: L ? void 0 : j,
                      renderPopout: o,
                      shouldShow: S,
                      position: d.tq ? 'window_center' : 'right',
                      onRequestClose: T,
                      clickTrap: !0,
                      children: (e) =>
                          X({
                              ...Z,
                              avatarSrc: V,
                              avatarDecorationSrc: G,
                              compact: E,
                              onClick: I,
                              onContextMenu: b,
                              onMouseDown: e.onMouseDown,
                              onKeyDown: e.onKeyDown,
                              showCommunicationDisabledStyles: u,
                              className: c
                          })
                  })
              })
            : (0, s.jsx)(_.Gt, {
                  value: R,
                  children: X({
                      ...Z,
                      avatarSrc: V,
                      avatarDecorationSrc: G,
                      compact: E,
                      onClick: I,
                      onContextMenu: b,
                      onMouseDown: void 0,
                      onKeyDown: void 0,
                      showCommunicationDisabledStyles: u,
                      className: c
                  })
              });
    function j() {
        return (0, O.Z)(
            m.author.id,
            null != g.guildMemberAvatar && null != a
                ? P.ZP.getGuildMemberAvatarURLSimple({
                      guildId: a,
                      userId: m.author.id,
                      avatar: g.guildMemberAvatar,
                      size: Q
                  })
                : m.author.getAvatarURL(void 0, Q, !1),
            {
                guildId: a,
                channelId: m.channel_id
            }
        );
    }
}
function ee(e) {
    let { message: n, avatar: r, username: i, usernameSpanId: a, usernameClassName: o, compact: l, showTimestamp: u, showTimestampOnHover: d, ariaLabelledBy: f, ariaDescribedBy: h, className: _, messageClassname: g, badges: E } = e,
        v = (0, m.q)(n.applicationId);
    return (
        null != v && !(0, k.yE)(v.flags, H.udG.SOCIAL_LAYER_INTEGRATION) && (v = null),
        (0, s.jsxs)(s.Fragment, {
            children: [
                !l && r,
                (0, s.jsxs)(p.H, {
                    className: c()(W.header, _),
                    'aria-describedby': h,
                    'aria-labelledby': f,
                    children: [
                        u &&
                            l &&
                            (0, s.jsx)(F.Z, {
                                id: (0, Z.Dv)(n),
                                compact: !0,
                                timestamp: n.timestamp,
                                isVisibleOnlyOnHover: d,
                                className: g,
                                isInline: !1,
                                application: v
                            }),
                        l && r,
                        (0, s.jsx)('span', {
                            id: a,
                            className: o,
                            children: i
                        }),
                        u &&
                            !l &&
                            (0, s.jsx)(F.Z, {
                                id: (0, Z.Dv)(n),
                                timestamp: n.timestamp,
                                className: g,
                                application: v
                            }),
                        null != E && E.length > 0
                            ? (0, s.jsx)('div', {
                                  className: W.badgesContainer,
                                  children: E
                              })
                            : null
                    ]
                })
            ]
        })
    );
}
let et = (e) => {
    !e && (0, T.z)();
};
function en(e) {
    let { currentUserIsPremium: n, author: r } = e,
        i = (0, f.e7)([C.Z], () => {
            var e;
            return null === (e = C.Z.getUserProfile(r.id)) || void 0 === e ? void 0 : e.premiumSince;
        });
    return (0, s.jsx)(p.Tooltip, {
        tooltipClassName: W.nitroAuthorBadgeTootip,
        shouldShow: null != i,
        text: Y.intl.formatToPlainString(Y.t['8zbGNT'], { date: i }),
        onTooltipShow: () => (0, R.Z)(r.id),
        children: (e) =>
            (0, s.jsx)(p.Clickable, {
                className: W.nitroAuthorBadgeContainer,
                onClick: () => et(n),
                'aria-label': Y.intl.formatToPlainString(Y.t['8zbGNT'], { date: i }),
                children: (0, s.jsx)('img', {
                    alt: '',
                    className: W.nitroBadgeSvg,
                    src: K,
                    ...e
                })
            })
    });
}
function er(e) {
    let { message: n, repliedMessage: r, compact: i = !1, renderPopout: a, showTimestampOnHover: o, roleIcon: u, subscribeToGroupId: d, hideTimestamp: h, className: _, channel: m } = e,
        T = l.useMemo(() => (null != a ? (e) => a(e, n) : void 0), [a, n]),
        [, C] = (0, v.ZP)(n.author.id, e.guildId),
        N = (0, f.e7)([x.Z], () => x.Z.getGuild(e.guildId), [e.guildId]),
        R = null != n.author && null != N && L.Z.canManageUser(H.Plq.MODERATE_MEMBERS, n.author, N),
        O = C && R,
        P = $({
            props: e,
            guildId: e.guildId,
            handleRenderPopout: T,
            showCommunicationDisabledStyles: O
        }),
        M = (0, f.e7)([D.ZP], () => {
            var n;
            return null !== (n = e.displayCompactAvatars) && void 0 !== n ? n : D.ZP.displayCompactAvatars;
        }),
        F =
            (!i || M) && null != u && null != N
                ? (0, s.jsx)(
                      p.Popout,
                      {
                          animation: p.Popout.Animation.TRANSLATE,
                          align: 'center',
                          autoInvert: !0,
                          nudgeAlignIntoViewport: !0,
                          position: 'right',
                          renderPopout: () =>
                              (0, s.jsx)(V.Z, {
                                  roleIcon: u,
                                  guild: N
                              }),
                          clickTrap: !0,
                          children: (e) => {
                              let { onClick: n } = e;
                              return (0, s.jsx)(E.Z, {
                                  ...u,
                                  className: W.roleIcon,
                                  onClick: n
                              });
                          }
                      },
                      'role-icon-children'
                  )
                : (!i || M) && null != u
                  ? (0, s.jsx)(
                        E.Z,
                        {
                            ...u,
                            className: W.roleIcon
                        },
                        'role-icon-children'
                    )
                  : null,
        K = (0, j.x)({
            message: n,
            channel: m,
            user: null == n ? void 0 : n.author,
            compact: i,
            isRepliedMessage: !1
        }),
        z = [],
        q = w.default.getCurrentUser(),
        Q = U.ZP.isPremium(n.author),
        X = U.ZP.isPremium(q),
        et = null == m ? void 0 : m.isPrivate();
    (0, B.R)(null != u, 'Message Username') &&
        Q &&
        !i &&
        !et &&
        z.push(
            (0, s.jsx)(
                en,
                {
                    currentUserIsPremium: X,
                    author: n.author
                },
                'nitro-author'
            )
        ),
        null != F && z.push(F),
        null != N &&
            (z.push(
                (0, s.jsx)(
                    y.Z,
                    {
                        guild: N,
                        message: n
                    },
                    'new-member'
                )
            ),
            z.push(
                (0, s.jsx)(
                    b.Z,
                    {
                        guild: N,
                        message: n
                    },
                    'leaderboard-champion'
                )
            )),
        null != m &&
            null != N &&
            z.push(
                (0, s.jsx)(
                    g.Z,
                    {
                        guild: N,
                        channel: m,
                        userId: n.author.id,
                        messageId: n.id
                    },
                    'connections'
                )
            );
    let er = [];
    (0, k.yE)(n.flags, H.iLy.SUPPRESS_NOTIFICATIONS) && er.push((0, s.jsx)(A.Z, {}, 'suppress-notifications')), n.hasPotions() && er.push((0, s.jsx)(I.Z, { message: n }));
    let ei = {};
    (ei[G.a.SYSTEM_TAG] = K), (ei[G.a.BADGES] = z);
    let ea = J(e, T, ei),
        eo = (0, Z.XX)(n, d),
        es = (0, Z.Dv)(n),
        el = h ? ''.concat(eo) : ''.concat(eo, ' ').concat(es),
        eu = (null == r ? void 0 : r.state) === S.Y.LOADED ? (0, Z.Gq)(n) : void 0,
        ec = !0 !== h;
    return (0, s.jsx)(ee, {
        message: n,
        avatar: P,
        username: (0, s.jsxs)(s.Fragment, {
            children: [
                O &&
                    (0, s.jsx)(p.Tooltip, {
                        text: Y.intl.string(Y.t.AeYyLy),
                        children: (e) =>
                            (0, s.jsxs)(s.Fragment, {
                                children: [
                                    (0, s.jsx)(p.ClockWarningIcon, {
                                        size: 'xxs',
                                        color: 'currentColor',
                                        ...e,
                                        className: i ? W.compactCommunicationDisabled : W.communicationDisabled
                                    }),
                                    (0, s.jsx)(p.HiddenVisually, { children: Y.intl.string(Y.t.AmHag4) })
                                ]
                            })
                    }),
                ea
            ]
        }),
        usernameSpanId: (0, Z.XX)(n, d),
        usernameClassName: c()(W.headerText, {
            [W.hasRoleIcon]: null != F,
            [W.hasBadges]: null != K || er.length > 0
        }),
        compact: i,
        showTimestamp: ec,
        showTimestampOnHover: o,
        ariaLabelledBy: el,
        ariaDescribedBy: eu,
        className: _,
        badges: er
    });
}
