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
var s = r(653041);
var o = r(200651),
    l = r(192379),
    u = r(120356),
    c = r.n(u),
    d = r(873546),
    f = r(442837),
    _ = r(481060),
    h = r(100527),
    p = r(906732),
    m = r(835473),
    g = r(366030),
    E = r(91218),
    v = r(71619),
    I = r(340797),
    T = r(913834),
    b = r(397589),
    y = r(98278),
    S = r(869765),
    A = r(243317),
    N = r(621853),
    C = r(518950),
    R = r(484459),
    O = r(184301),
    D = r(740492),
    L = r(430824),
    x = r(496675),
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
    let { avatarSrc: n, avatarDecorationSrc: r, compact: i, onClick: a, onContextMenu: s, onMouseDown: l, onMouseEnter: u, onMouseLeave: d, onKeyDown: f, showCommunicationDisabledStyles: _ = !1, className: h } = e;
    return (0, o.jsxs)(o.Fragment, {
        children: [
            (0, o.jsx)('img', {
                onClick: a,
                onContextMenu: s,
                onMouseDown: l,
                onKeyDown: f,
                onMouseEnter: u,
                onMouseLeave: d,
                src: n,
                'aria-hidden': !0,
                className: c()(h, W.avatar, {
                    [W.compact]: i,
                    [W.clickable]: null != a,
                    [W.communicationDisabledOpacity]: _
                }),
                alt: ' '
            }),
            null == r || i
                ? null
                : (0, o.jsx)('img', {
                      className: W.avatarDecoration,
                      src: r,
                      alt: ' ',
                      'aria-hidden': !0
                  })
        ]
    });
}
function J(e, n, r) {
    let { message: i, channel: a, author: s, compact: l = !1, onContextMenu: u, showUsernamePopout: c, roleIcon: d, onClickUsername: f, onPopoutRequestClose: _ } = e;
    return (0, o.jsxs)(o.Fragment, {
        children: [
            (0, o.jsx)(G.Z, {
                message: i,
                channel: a,
                author: s,
                compact: l,
                roleIcon: d,
                showPopout: c,
                renderPopout: n,
                onClick: f,
                onContextMenu: u,
                onPopoutRequestClose: _,
                decorations: r,
                renderRemixTag: !0
            }),
            l &&
                (0, o.jsxs)(o.Fragment, {
                    children: [
                        (0, o.jsx)('i', {
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
    let { props: i, guildId: a, handleRenderPopout: s, showCommunicationDisabledStyles: u = !1, className: c } = e,
        { message: m, author: g, compact: E = !1, subscribeToGroupId: v, animate: I = !0, onContextMenu: T, onClickAvatar: b, onPopoutRequestClose: y, showAvatarPopout: S } = i,
        [A, N] = l.useState(!1),
        { analyticsLocations: R } = (0, p.ZP)(h.Z.AVATAR),
        L = (0, f.e7)([D.ZP], () => {
            var e;
            return null !== (e = i.displayCompactAvatars) && void 0 !== e ? e : D.ZP.displayCompactAvatars;
        }),
        x = null != m.messageReference && null != m.webhookId && m.hasFlag(H.iLy.IS_CROSSPOST),
        w = m.author,
        { id: k } = w,
        U = E ? z : q,
        {
            avatarSrc: B,
            avatarDecorationSrc: G,
            eventHandlers: Z
        } = (0, C.Z)({
            user: w,
            guildId: a,
            size: U,
            animateOnHover: null != v ? !A : !I,
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
            if (null != v) return M.S.subscribeKeyed(H.LPv.ANIMATE_CHAT_AVATAR, ''.concat(v, ':').concat(k), N), () => void M.S.unsubscribeKeyed(H.LPv.ANIMATE_CHAT_AVATAR, ''.concat(v, ':').concat(k), N);
        }, [k, v]),
        !E || !!L)
    )
        return null != s && null != S
            ? (0, o.jsx)(p.Gt, {
                  value: R,
                  children: (0, o.jsx)(_.Popout, {
                      preload: x ? void 0 : j,
                      renderPopout: s,
                      shouldShow: S,
                      position: d.tq ? 'window_center' : 'right',
                      onRequestClose: y,
                      children: (e) =>
                          X({
                              ...Z,
                              avatarSrc: V,
                              avatarDecorationSrc: G,
                              compact: E,
                              onClick: b,
                              onContextMenu: T,
                              onMouseDown: e.onMouseDown,
                              onKeyDown: e.onKeyDown,
                              showCommunicationDisabledStyles: u,
                              className: c
                          })
                  })
              })
            : (0, o.jsx)(p.Gt, {
                  value: R,
                  children: X({
                      ...Z,
                      avatarSrc: V,
                      avatarDecorationSrc: G,
                      compact: E,
                      onClick: b,
                      onContextMenu: T,
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
    let { message: n, avatar: r, username: i, usernameSpanId: a, usernameClassName: s, compact: l, showTimestamp: u, showTimestampOnHover: d, ariaLabelledBy: f, ariaDescribedBy: h, className: p, messageClassname: g, badges: E } = e,
        v = (0, m.q)(n.applicationId);
    return (
        null != v && !(0, k.yE)(v.flags, H.udG.SOCIAL_LAYER_INTEGRATION) && (v = null),
        (0, o.jsxs)(o.Fragment, {
            children: [
                !l && r,
                (0, o.jsxs)(_.H, {
                    className: c()(W.header, p),
                    'aria-describedby': h,
                    'aria-labelledby': f,
                    children: [
                        u &&
                            l &&
                            (0, o.jsx)(F.Z, {
                                id: (0, Z.Dv)(n),
                                compact: !0,
                                timestamp: n.timestamp,
                                isVisibleOnlyOnHover: d,
                                className: g,
                                isInline: !1,
                                application: v
                            }),
                        l && r,
                        (0, o.jsx)('span', {
                            id: a,
                            className: s,
                            children: i
                        }),
                        u &&
                            !l &&
                            (0, o.jsx)(F.Z, {
                                id: (0, Z.Dv)(n),
                                timestamp: n.timestamp,
                                className: g,
                                application: v
                            }),
                        null != E && E.length > 0
                            ? (0, o.jsx)('div', {
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
    !e && (0, y.z)();
};
function en(e) {
    let { currentUserIsPremium: n, author: r } = e,
        i = (0, f.e7)([N.Z], () => {
            var e;
            return null === (e = N.Z.getUserProfile(r.id)) || void 0 === e ? void 0 : e.premiumSince;
        });
    return (0, o.jsx)(_.Tooltip, {
        tooltipClassName: W.nitroAuthorBadgeTootip,
        shouldShow: null != i,
        text: Y.intl.formatToPlainString(Y.t['8zbGNT'], { date: i }),
        onTooltipShow: () => (0, R.Z)(r.id),
        children: (e) =>
            (0, o.jsx)(_.Clickable, {
                className: W.nitroAuthorBadgeContainer,
                onClick: () => et(n),
                'aria-label': Y.intl.formatToPlainString(Y.t['8zbGNT'], { date: i }),
                children: (0, o.jsx)('img', {
                    alt: '',
                    className: W.nitroBadgeSvg,
                    src: K,
                    ...e
                })
            })
    });
}
function er(e) {
    let { message: n, repliedMessage: r, compact: i = !1, renderPopout: a, showTimestampOnHover: s, roleIcon: u, subscribeToGroupId: d, hideTimestamp: h, className: p, channel: m } = e,
        y = l.useMemo(() => (null != a ? (e) => a(e, n) : void 0), [a, n]),
        [, N] = (0, v.ZP)(n.author.id, e.guildId),
        C = (0, f.e7)([L.Z], () => L.Z.getGuild(e.guildId), [e.guildId]),
        R = null != n.author && null != C && x.Z.canManageUser(H.Plq.MODERATE_MEMBERS, n.author, C),
        O = N && R,
        P = $({
            props: e,
            guildId: e.guildId,
            handleRenderPopout: y,
            showCommunicationDisabledStyles: O
        }),
        M = (0, f.e7)([D.ZP], () => {
            var n;
            return null !== (n = e.displayCompactAvatars) && void 0 !== n ? n : D.ZP.displayCompactAvatars;
        }),
        F =
            (!i || M) && null != u && null != C
                ? (0, o.jsx)(
                      _.Popout,
                      {
                          animation: _.Popout.Animation.TRANSLATE,
                          align: 'center',
                          autoInvert: !0,
                          nudgeAlignIntoViewport: !0,
                          position: 'right',
                          renderPopout: () =>
                              (0, o.jsx)(V.Z, {
                                  roleIcon: u,
                                  guild: C
                              }),
                          children: (e) => {
                              let { onClick: n } = e;
                              return (0, o.jsx)(E.Z, {
                                  ...u,
                                  className: W.roleIcon,
                                  onClick: n
                              });
                          }
                      },
                      'role-icon-children'
                  )
                : (!i || M) && null != u
                  ? (0, o.jsx)(
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
            (0, o.jsx)(
                en,
                {
                    currentUserIsPremium: X,
                    author: n.author
                },
                'nitro-author'
            )
        ),
        null != F && z.push(F),
        null != C &&
            (z.push(
                (0, o.jsx)(
                    I.Z,
                    {
                        guild: C,
                        message: n
                    },
                    'new-member'
                )
            ),
            z.push(
                (0, o.jsx)(
                    T.Z,
                    {
                        guild: C,
                        message: n
                    },
                    'leaderboard-champion'
                )
            )),
        null != m &&
            null != C &&
            z.push(
                (0, o.jsx)(
                    g.Z,
                    {
                        guild: C,
                        channel: m,
                        userId: n.author.id,
                        messageId: n.id
                    },
                    'connections'
                )
            );
    let er = [];
    (0, k.yE)(n.flags, H.iLy.SUPPRESS_NOTIFICATIONS) && er.push((0, o.jsx)(A.Z, {}, 'suppress-notifications')), n.hasPotions() && er.push((0, o.jsx)(b.Z, { message: n }));
    let ei = {};
    (ei[G.a.SYSTEM_TAG] = K), (ei[G.a.BADGES] = z);
    let ea = J(e, y, ei),
        es = (0, Z.XX)(n, d),
        eo = (0, Z.Dv)(n),
        el = h ? ''.concat(es) : ''.concat(es, ' ').concat(eo),
        eu = (null == r ? void 0 : r.state) === S.Y.LOADED ? (0, Z.Gq)(n) : void 0,
        ec = !0 !== h;
    return (0, o.jsx)(ee, {
        message: n,
        avatar: P,
        username: (0, o.jsxs)(o.Fragment, {
            children: [
                O &&
                    (0, o.jsx)(_.Tooltip, {
                        text: Y.intl.string(Y.t.AeYyLy),
                        children: (e) =>
                            (0, o.jsxs)(o.Fragment, {
                                children: [
                                    (0, o.jsx)(_.ClockWarningIcon, {
                                        size: 'xxs',
                                        color: 'currentColor',
                                        ...e,
                                        className: i ? W.compactCommunicationDisabled : W.communicationDisabled
                                    }),
                                    (0, o.jsx)(_.HiddenVisually, { children: Y.intl.string(Y.t.AmHag4) })
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
        showTimestampOnHover: s,
        ariaLabelledBy: el,
        ariaDescribedBy: eu,
        className: p,
        badges: er
    });
}
