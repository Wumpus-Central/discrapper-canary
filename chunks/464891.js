r.d(n, {
    CF: function () {
        return X;
    },
    ZP: function () {
        return en;
    },
    nD: function () {
        return $;
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
    b = r(98278),
    y = r(869765),
    S = r(243317),
    A = r(621853),
    N = r(518950),
    C = r(484459),
    R = r(184301),
    O = r(740492),
    D = r(430824),
    L = r(496675),
    x = r(594174),
    w = r(768581),
    P = r(585483),
    M = r(630388),
    k = r(74538),
    U = r(276554),
    B = r(421399),
    G = r(453687),
    Z = r(318713),
    F = r(304176),
    V = r(47930),
    j = r(981631),
    H = r(388032),
    Y = r(507304),
    W = r(121282);
let K = 32,
    z = 80,
    q = 80;
function Q(e) {
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
                className: c()(h, Y.avatar, {
                    [Y.compact]: i,
                    [Y.clickable]: null != a,
                    [Y.communicationDisabledOpacity]: _
                }),
                alt: ' '
            }),
            null == r || i
                ? null
                : (0, o.jsx)('img', {
                      className: Y.avatarDecoration,
                      src: r,
                      alt: ' ',
                      'aria-hidden': !0
                  })
        ]
    });
}
function X(e, n, r) {
    let { message: i, channel: a, author: s, compact: l = !1, onContextMenu: u, showUsernamePopout: c, roleIcon: d, onClickUsername: f, onPopoutRequestClose: _ } = e;
    return (0, o.jsxs)(o.Fragment, {
        children: [
            (0, o.jsx)(B.Z, {
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
                            className: Y.separator,
                            children: ':'
                        }),
                        ' '
                    ]
                })
        ]
    });
}
function J(e) {
    var n, r;
    let { props: i, guildId: a, handleRenderPopout: s, showCommunicationDisabledStyles: u = !1, className: c } = e,
        { message: m, author: g, compact: E = !1, subscribeToGroupId: v, animate: I = !0, onContextMenu: T, onClickAvatar: b, onPopoutRequestClose: y, showAvatarPopout: S } = i,
        [A, C] = l.useState(!1),
        { analyticsLocations: D } = (0, p.ZP)(h.Z.AVATAR),
        L = (0, f.e7)([O.ZP], () => {
            var e;
            return null !== (e = i.displayCompactAvatars) && void 0 !== e ? e : O.ZP.displayCompactAvatars;
        }),
        x = null != m.messageReference && null != m.webhookId && m.hasFlag(j.iLy.IS_CROSSPOST),
        M = m.author,
        { id: k } = M,
        U = E ? K : z,
        {
            avatarSrc: B,
            avatarDecorationSrc: G,
            eventHandlers: Z
        } = (0, N.Z)({
            user: M,
            guildId: a,
            size: U,
            animateOnHover: null != v ? !A : !I,
            showPending: !0
        }),
        F = m.isInteractionPlaceholder(),
        V = l.useMemo(() => {
            var e, n;
            return F && null == M.avatar && (null === (e = m.application) || void 0 === e ? void 0 : e.icon) != null
                ? null !==
                      (n = w.ZP.getApplicationIconURL({
                          id: m.application.id,
                          icon: m.application.icon,
                          size: U,
                          fallbackAvatar: !1
                      })) && void 0 !== n
                    ? n
                    : B
                : B;
        }, [F, null === (n = m.application) || void 0 === n ? void 0 : n.icon, null === (r = m.application) || void 0 === r ? void 0 : r.id, M.avatar, U, B]);
    if (
        (l.useEffect(() => {
            if (null != v) return P.S.subscribeKeyed(j.LPv.ANIMATE_CHAT_AVATAR, ''.concat(v, ':').concat(k), C), () => void P.S.unsubscribeKeyed(j.LPv.ANIMATE_CHAT_AVATAR, ''.concat(v, ':').concat(k), C);
        }, [k, v]),
        !E || !!L)
    )
        return null != s && null != S
            ? (0, o.jsx)(p.Gt, {
                  value: D,
                  children: (0, o.jsx)(_.Popout, {
                      preload: x ? void 0 : H,
                      renderPopout: s,
                      shouldShow: S,
                      position: d.tq ? 'window_center' : 'right',
                      onRequestClose: y,
                      children: (e) =>
                          Q({
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
                  value: D,
                  children: Q({
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
    function H() {
        return (0, R.Z)(
            m.author.id,
            null != g.guildMemberAvatar && null != a
                ? w.ZP.getGuildMemberAvatarURLSimple({
                      guildId: a,
                      userId: m.author.id,
                      avatar: g.guildMemberAvatar,
                      size: q
                  })
                : m.author.getAvatarURL(void 0, q, !1),
            {
                guildId: a,
                channelId: m.channel_id
            }
        );
    }
}
function $(e) {
    let { message: n, avatar: r, username: i, usernameSpanId: a, usernameClassName: s, compact: l, showTimestamp: u, showTimestampOnHover: d, ariaLabelledBy: f, ariaDescribedBy: h, className: p, messageClassname: g, badges: E } = e,
        v = (0, m.q)(n.applicationId);
    return (
        null != v && !(0, M.yE)(v.flags, j.udG.SOCIAL_LAYER_INTEGRATION) && (v = null),
        (0, o.jsxs)(o.Fragment, {
            children: [
                !l && r,
                (0, o.jsxs)(_.H, {
                    className: c()(Y.header, p),
                    'aria-describedby': h,
                    'aria-labelledby': f,
                    children: [
                        u &&
                            l &&
                            (0, o.jsx)(Z.Z, {
                                id: (0, G.Dv)(n),
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
                            (0, o.jsx)(Z.Z, {
                                id: (0, G.Dv)(n),
                                timestamp: n.timestamp,
                                className: g,
                                application: v
                            }),
                        null != E && E.length > 0
                            ? (0, o.jsx)('div', {
                                  className: Y.badgesContainer,
                                  children: E
                              })
                            : null
                    ]
                })
            ]
        })
    );
}
let ee = (e) => {
    !e && (0, b.z)();
};
function et(e) {
    let { currentUserIsPremium: n, author: r } = e,
        i = (0, f.e7)([A.Z], () => {
            var e;
            return null === (e = A.Z.getUserProfile(r.id)) || void 0 === e ? void 0 : e.premiumSince;
        });
    return (0, o.jsx)(_.Tooltip, {
        tooltipClassName: Y.nitroAuthorBadgeTootip,
        shouldShow: null != i,
        text: H.intl.formatToPlainString(H.t['8zbGNT'], { date: i }),
        onTooltipShow: () => (0, C.Z)(r.id),
        children: (e) =>
            (0, o.jsx)(_.Clickable, {
                className: Y.nitroAuthorBadgeContainer,
                onClick: () => ee(n),
                'aria-label': H.intl.formatToPlainString(H.t['8zbGNT'], { date: i }),
                children: (0, o.jsx)('img', {
                    alt: '',
                    className: Y.nitroBadgeSvg,
                    src: W,
                    ...e
                })
            })
    });
}
function en(e) {
    let { message: n, repliedMessage: r, compact: i = !1, renderPopout: a, showTimestampOnHover: s, roleIcon: u, subscribeToGroupId: d, hideTimestamp: h, className: p, channel: m } = e,
        b = l.useMemo(() => (null != a ? (e) => a(e, n) : void 0), [a, n]),
        [, A] = (0, v.ZP)(n.author.id, e.guildId),
        N = (0, f.e7)([D.Z], () => D.Z.getGuild(e.guildId), [e.guildId]),
        C = null != n.author && null != N && L.Z.canManageUser(j.Plq.MODERATE_MEMBERS, n.author, N),
        R = A && C,
        w = J({
            props: e,
            guildId: e.guildId,
            handleRenderPopout: b,
            showCommunicationDisabledStyles: R
        }),
        P = (0, f.e7)([O.ZP], () => {
            var n;
            return null !== (n = e.displayCompactAvatars) && void 0 !== n ? n : O.ZP.displayCompactAvatars;
        }),
        Z =
            (!i || P) && null != u && null != N
                ? (0, o.jsx)(
                      _.Popout,
                      {
                          animation: _.Popout.Animation.TRANSLATE,
                          align: 'center',
                          autoInvert: !0,
                          nudgeAlignIntoViewport: !0,
                          position: 'right',
                          renderPopout: () =>
                              (0, o.jsx)(F.Z, {
                                  roleIcon: u,
                                  guild: N
                              }),
                          children: (e) => {
                              let { onClick: n } = e;
                              return (0, o.jsx)(E.Z, {
                                  ...u,
                                  className: Y.roleIcon,
                                  onClick: n
                              });
                          }
                      },
                      'role-icon-children'
                  )
                : (!i || P) && null != u
                  ? (0, o.jsx)(
                        E.Z,
                        {
                            ...u,
                            className: Y.roleIcon
                        },
                        'role-icon-children'
                    )
                  : null,
        W = (0, V.x)({
            message: n,
            channel: m,
            user: null == n ? void 0 : n.author,
            compact: i,
            isRepliedMessage: !1
        }),
        K = [],
        z = x.default.getCurrentUser(),
        q = k.ZP.isPremium(n.author),
        Q = k.ZP.isPremium(z),
        ee = null == m ? void 0 : m.isPrivate();
    (0, U.R)(null != u, 'Message Username') &&
        q &&
        !i &&
        !ee &&
        K.push(
            (0, o.jsx)(
                et,
                {
                    currentUserIsPremium: Q,
                    author: n.author
                },
                'nitro-author'
            )
        ),
        null != Z && K.push(Z),
        null != N &&
            (K.push(
                (0, o.jsx)(
                    I.Z,
                    {
                        guild: N,
                        message: n
                    },
                    'new-member'
                )
            ),
            K.push(
                (0, o.jsx)(
                    T.Z,
                    {
                        guild: N,
                        message: n
                    },
                    'leaderboard-champion'
                )
            )),
        null != m &&
            null != N &&
            K.push(
                (0, o.jsx)(
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
    let en = [];
    (0, M.yE)(n.flags, j.iLy.SUPPRESS_NOTIFICATIONS) && en.push((0, o.jsx)(S.Z, {}, 'suppress-notifications'));
    let er = {};
    (er[B.a.SYSTEM_TAG] = W), (er[B.a.BADGES] = K);
    let ei = X(e, b, er),
        ea = (0, G.XX)(n, d),
        es = (0, G.Dv)(n),
        eo = h ? ''.concat(ea) : ''.concat(ea, ' ').concat(es),
        el = (null == r ? void 0 : r.state) === y.Y.LOADED ? (0, G.Gq)(n) : void 0,
        eu = !0 !== h;
    return (0, o.jsx)($, {
        message: n,
        avatar: w,
        username: (0, o.jsxs)(o.Fragment, {
            children: [
                R &&
                    (0, o.jsx)(_.Tooltip, {
                        text: H.intl.string(H.t.AeYyLy),
                        children: (e) =>
                            (0, o.jsxs)(o.Fragment, {
                                children: [
                                    (0, o.jsx)(_.ClockWarningIcon, {
                                        size: 'xxs',
                                        color: 'currentColor',
                                        ...e,
                                        className: i ? Y.compactCommunicationDisabled : Y.communicationDisabled
                                    }),
                                    (0, o.jsx)(_.HiddenVisually, { children: H.intl.string(H.t.AmHag4) })
                                ]
                            })
                    }),
                ei
            ]
        }),
        usernameSpanId: (0, G.XX)(n, d),
        usernameClassName: c()(Y.headerText, {
            [Y.hasRoleIcon]: null != Z,
            [Y.hasBadges]: null != W || en.length > 0
        }),
        compact: i,
        showTimestamp: eu,
        showTimestampOnHover: s,
        ariaLabelledBy: eo,
        ariaDescribedBy: el,
        className: p,
        badges: en
    });
}
