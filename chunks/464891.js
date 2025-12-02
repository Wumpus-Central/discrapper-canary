n.d(t, {
    CF: () => en,
    ZP: () => el,
    nD: () => ei,
}),
    n(539854),
    n(388685),
    n(997841);
var r = n(54381),
    i = n(473749),
    a = n(120356),
    o = n.n(a),
    s = n(873546),
    l = n(95015),
    c = n(442837),
    u = n(28664),
    d = n(481060),
    f = n(100527),
    p = n(906732),
    _ = n(835473),
    m = n(366030),
    h = n(71619),
    g = n(340797),
    E = n(397589),
    b = n(98278),
    y = n(150039),
    O = n(869765),
    v = n(48950),
    S = n(243317),
    I = n(621853),
    T = n(369111),
    A = n(518950),
    C = n(484459),
    N = n(670188),
    P = n(740492),
    R = n(430824),
    w = n(496675),
    D = n(594174),
    x = n(768581),
    L = n(585483),
    j = n(74538),
    M = n(276554),
    k = n(739566),
    U = n(421399),
    G = n(453687),
    Z = n(318713),
    B = n(304176),
    F = n(47930),
    V = n(935910),
    H = n(981631),
    Y = n(388032),
    W = n(724913),
    K = n(121282);
function z(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
function q(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            r.forEach(function (t) {
                z(e, t, n[t]);
            });
    }
    return e;
}
function X(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
    }
    return n;
}
function Q(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : X(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let J = 32,
    $ = 80;
function ee(e) {
    let {
        avatarSrc: t,
        avatarDecorationSrc: n,
        compact: i,
        onClick: a,
        onContextMenu: s,
        onMouseDown: l,
        onMouseEnter: c,
        onMouseLeave: u,
        onKeyDown: d,
        showCommunicationDisabledStyles: f = !1,
        className: p,
        avatarImgRef: _,
    } = e;
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)("img", {
                ref: _,
                onClick: a,
                onContextMenu: s,
                onKeyDown: d,
                onMouseDown: l,
                onMouseEnter: c,
                onMouseLeave: u,
                src: t,
                "aria-hidden": !0,
                className: o()(p, W.avatar, {
                    [W.compact]: i,
                    [W.clickable]: null != a,
                    [W.communicationDisabledOpacity]: f,
                }),
                alt: " ",
            }),
            null == n || i
                ? null
                : (0, r.jsx)("img", {
                      className: W.avatarDecoration,
                      src: n,
                      alt: " ",
                      "aria-hidden": !0,
                  }),
        ],
    });
}
let et = i.memo(function (e) {
    let {
            message: t,
            author: n,
            channel: a,
            guildId: o,
            compact: s = !1,
            roleIconProps: l,
            showUsernamePopout: u,
            renderPopout: f,
            onClickUsername: p,
            onContextMenu: _,
            displayCompactAvatars: h = !1,
            onPopoutRequestClose: E,
            preview: b,
            subscribeToGroupId: y,
            hideGuildTag: O,
        } = e,
        S = (0, k.ZP)(t, n),
        I = i.useMemo(
            () =>
                (0, F.x)({
                    message: t,
                    channel: a,
                    user: null == t ? void 0 : t.author,
                    compact: s,
                    isRepliedMessage: !1,
                }),
            [t, a, s],
        ),
        T = i.useRef(null),
        A = (0, c.e7)([R.Z], () => R.Z.getGuild(o)),
        C = i.useMemo(() => eo(s, h, l, A), [s, h, l, A]),
        N = i.useMemo(
            () =>
                null == l
                    ? null
                    : 1 === C && null != A
                      ? (0, r.jsx)(
                            d.yRy,
                            {
                                targetElementRef: T,
                                animation: d.yRy.Animation.TRANSLATE,
                                align: "center",
                                autoInvert: !0,
                                nudgeAlignIntoViewport: !0,
                                position: "right",
                                renderPopout: () =>
                                    (0, r.jsx)(B.Z, {
                                        roleIcon: l,
                                        guild: A,
                                    }),
                                clickTrap: !0,
                                children: (e) => {
                                    let { onClick: t } = e;
                                    return (0, r.jsx)(
                                        v.Z,
                                        Q(q({ ref: T }, l), {
                                            className: W.roleIcon,
                                            onClick: t,
                                        }),
                                    );
                                },
                            },
                            "role-icon-children",
                        )
                      : 2 === C
                        ? (0, r.jsx)(v.Z, Q(q({}, l), { className: W.roleIcon }), "role-icon-children")
                        : null,
            [C, l, A],
        ),
        P = (0, c.e7)([D.default], () => D.default.getCurrentUser()),
        w = i.useMemo(() => {
            let e = [],
                n = j.ZP.isPremium(t.author),
                i = j.ZP.isPremium(P),
                o = null == a ? void 0 : a.isPrivate();
            return (
                (0, M.R)(null != l, "Message Username") &&
                    n &&
                    !s &&
                    !o &&
                    e.push(
                        (0, r.jsx)(
                            es,
                            {
                                currentUserIsPremium: i,
                                author: t.author,
                            },
                            "nitro-author",
                        ),
                    ),
                null != N && e.push(N),
                null != A &&
                    e.push(
                        (0, r.jsx)(
                            g.Z,
                            {
                                guild: A,
                                message: t,
                            },
                            "new-member",
                        ),
                    ),
                null != a &&
                    null != A &&
                    e.push(
                        (0, r.jsx)(
                            m.Z,
                            {
                                guild: A,
                                channel: a,
                                userId: t.author.id,
                                messageId: t.id,
                            },
                            "connections",
                        ),
                    ),
                e
            );
        }, [t, a, l, s, N, A, P]);
    return null == S
        ? null
        : (0, r.jsxs)(r.Fragment, {
              children: [
                  (0, r.jsx)(U.Z, {
                      message: t,
                      channel: a,
                      author: S,
                      compact: s,
                      roleIcon: l,
                      showPopout: u,
                      renderPopout: f,
                      onClick: p,
                      onContextMenu: _,
                      onPopoutRequestClose: E,
                      decorations: {
                          [U.a.SYSTEM_TAG]: I,
                          [U.a.BADGES]: w,
                      },
                      previewGuildId: o,
                      preview: b,
                      subscribeToGroupId: y,
                      hideGuildTag: O,
                  }),
                  s &&
                      (0, r.jsxs)(r.Fragment, {
                          children: [
                              (0, r.jsx)("i", {
                                  className: W.separator,
                                  children: ":",
                              }),
                              " ",
                          ],
                      }),
              ],
          });
});
function en(e, t, n) {
    let {
        message: i,
        channel: a,
        author: o,
        compact: s = !1,
        onContextMenu: l,
        showUsernamePopout: c,
        roleIcon: u,
        onClickUsername: d,
        onPopoutRequestClose: f,
    } = e;
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(U.Z, {
                message: i,
                channel: a,
                author: o,
                compact: s,
                roleIcon: u,
                showPopout: c,
                renderPopout: t,
                onClick: d,
                onContextMenu: l,
                onPopoutRequestClose: f,
                decorations: n,
                preview: !0,
            }),
            s &&
                (0, r.jsxs)(r.Fragment, {
                    children: [
                        (0, r.jsx)("i", {
                            className: W.separator,
                            children: ":",
                        }),
                        " ",
                    ],
                }),
        ],
    });
}
function er(e) {
    var t, n, a;
    let { props: o, guildId: l, handleRenderPopout: u, showCommunicationDisabledStyles: d = !1, className: _ } = e,
        {
            message: m,
            author: h,
            compact: g = !1,
            subscribeToGroupId: E,
            animate: b = !0,
            onContextMenu: O,
            onClickAvatar: v,
            onPopoutRequestClose: S,
            showAvatarPopout: I,
        } = o,
        C = i.useRef(null),
        [R, w] = i.useState(!1),
        { analyticsLocations: j } = (0, p.ZP)(f.Z.AVATAR),
        M = (0, c.e7)([D.default], () => D.default.getCurrentUser()),
        k = (0, c.e7)([P.ZP], () => {
            var e;
            return null != (e = o.displayCompactAvatars) ? e : P.ZP.displayCompactAvatars;
        }),
        U = (0, V.Z)(m),
        G = g ? J : $,
        { pendingAvatarDecoration: Z } = (0, T.Z)({ guildId: l }),
        B = (0, y.Ys)({
            pendingValue: m.author.id === (null == M ? void 0 : M.id) ? Z : void 0,
            userValue: null == (t = m.author) ? void 0 : t.avatarDecoration,
            guildValue: null == h ? void 0 : h.guildMemberAvatarDecoration,
            guildId: l,
        }),
        {
            avatarSrc: F,
            avatarDecorationSrc: Y,
            eventHandlers: W,
        } = (0, A.Z)({
            userId: m.author.id,
            guildId: l,
            size: G,
            animateOnHover: null != E ? !R : !b,
            avatarDecorationOverride: B,
            showPending: !0,
        }),
        K = m.isInteractionPlaceholder(),
        z = i.useMemo(() => {
            var e, t;
            return K &&
                null == m.author.avatar &&
                null == h.guildMemberAvatar &&
                (null == (e = m.application) ? void 0 : e.icon) != null
                ? null !=
                  (t = x.ZP.getApplicationIconURL({
                      id: m.application.id,
                      icon: m.application.icon,
                      size: G,
                      fallbackAvatar: !1,
                  }))
                    ? t
                    : F
                : null != m.webhookId && null == h.guildMemberAvatar
                  ? x.ZP.getUserAvatarURL(
                        {
                            avatar: m.author.avatar,
                            id: m.author.id,
                            discriminator: m.author.discriminator,
                            bot: !0,
                        },
                        !1,
                        G,
                    )
                  : F;
        }, [
            K,
            m.author.avatar,
            m.author.id,
            m.author.discriminator,
            null == (n = m.application) ? void 0 : n.icon,
            null == (a = m.application) ? void 0 : a.id,
            m.webhookId,
            F,
            G,
            h.guildMemberAvatar,
        ]);
    if (
        (i.useEffect(() => {
            if (null != E)
                return (
                    L.S.subscribeKeyed(H.LPv.ANIMATE_CHAT_AVATAR, "".concat(E, ":").concat(m.author.id), w),
                    () => void L.S.unsubscribeKeyed(H.LPv.ANIMATE_CHAT_AVATAR, "".concat(E, ":").concat(m.author.id), w)
                );
        }, [m.author.id, E]),
        !g || k)
    )
        return null != u && null != I
            ? (0, r.jsx)(p.Gt, {
                  value: j,
                  children: (0, r.jsx)(N.Z, {
                      targetElementRef: C,
                      user: m.author,
                      guildId: l,
                      channelId: m.channel_id,
                      messageId: m.id,
                      shouldShow: I,
                      shouldPreload: U,
                      renderPopout: u,
                      position: s.tq ? "window_center" : "right",
                      avatarUrl: z,
                      onRequestClose: S,
                      clickTrap: I,
                      children: (e) =>
                          ee(
                              Q(q({}, W), {
                                  avatarSrc: z,
                                  avatarDecorationSrc: Y,
                                  compact: g,
                                  onClick: v,
                                  onContextMenu: O,
                                  onMouseDown: e.onMouseDown,
                                  onKeyDown: e.onKeyDown,
                                  showCommunicationDisabledStyles: d,
                                  className: _,
                                  avatarImgRef: C,
                              }),
                          ),
                  }),
              })
            : (0, r.jsx)(p.Gt, {
                  value: j,
                  children: ee(
                      Q(q({}, W), {
                          avatarSrc: z,
                          avatarDecorationSrc: Y,
                          compact: g,
                          onClick: v,
                          onContextMenu: O,
                          onMouseDown: void 0,
                          onKeyDown: void 0,
                          showCommunicationDisabledStyles: d,
                          className: _,
                      }),
                  ),
              });
}
function ei(e) {
    let {
            message: t,
            avatar: n,
            username: i,
            usernameSpanId: a,
            usernameClassName: s,
            compact: c,
            showTimestamp: u,
            showTimestampOnHover: f,
            ariaLabelledBy: p,
            ariaDescribedBy: m,
            className: h,
            messageClassname: g,
            badges: E,
        } = e,
        b = (0, l.yE)(t.flags, H.iLy.SENT_BY_SOCIAL_LAYER_INTEGRATION) ? t.applicationId : null,
        y = (0, _.q)(b);
    return (0, r.jsxs)(r.Fragment, {
        children: [
            !c && n,
            (0, r.jsxs)(d.H, {
                className: o()(W.header, h),
                "aria-describedby": m,
                "aria-labelledby": p,
                children: [
                    u &&
                        c &&
                        (0, r.jsx)(Z.Z, {
                            id: (0, G.Dv)(t),
                            compact: !0,
                            timestamp: t.timestamp,
                            isVisibleOnlyOnHover: f,
                            className: g,
                            isInline: !1,
                            application: y,
                        }),
                    c && n,
                    (0, r.jsx)("span", {
                        id: a,
                        className: s,
                        children: i,
                    }),
                    u &&
                        !c &&
                        (0, r.jsx)(Z.Z, {
                            id: (0, G.Dv)(t),
                            timestamp: t.timestamp,
                            className: g,
                            application: y,
                        }),
                    null != E && E.length > 0
                        ? (0, r.jsx)("div", {
                              className: W.badgesContainer,
                              children: E,
                          })
                        : null,
                ],
            }),
        ],
    });
}
let ea = (e) => {
    e || (0, b.z)();
};
function eo(e, t, n, r) {
    return (!e || t) && null != n && null != r ? 1 : (!e || t) && null != n ? 2 : 0;
}
let es = i.memo(function (e) {
        let { currentUserIsPremium: t, author: n } = e,
            i = (0, c.e7)([I.Z], () => {
                var e;
                return null == (e = I.Z.getUserProfile(n.id)) ? void 0 : e.premiumSince;
            });
        return (0, r.jsx)(u.u, {
            asContainer: !0,
            shouldShow: null != i,
            text: Y.intl.formatToPlainString(Y.t["8zbGNR"], { date: i }),
            onTooltipShow: () => (0, C.Z)(n.id),
            children: (0, r.jsx)(d.P3F, {
                className: W.nitroAuthorBadgeContainer,
                onClick: () => ea(t),
                "aria-label": Y.intl.formatToPlainString(Y.t["8zbGNR"], { date: i }),
                children: (0, r.jsx)("img", {
                    alt: "",
                    className: W.nitroBadgeSvg,
                    src: K,
                }),
            }),
        });
    }),
    el = i.memo(function (e) {
        let {
                message: t,
                repliedMessage: n,
                compact: a = !1,
                renderPopout: s,
                showTimestampOnHover: f,
                roleIcon: p,
                subscribeToGroupId: _,
                hideTimestamp: m,
                hideGuildTag: g,
                className: b,
                channel: y,
                preview: v,
            } = e,
            I = i.useMemo(() => (null != s ? (e) => s(e, t) : void 0), [s, t]),
            [, T] = (0, h.ZP)(t.author.id, e.guildId),
            A = (0, c.e7)([w.Z, R.Z], () => {
                let n = R.Z.getGuild(e.guildId);
                return null != t.author && null != n && w.Z.canManageUser(H.Plq.MODERATE_MEMBERS, t.author, n);
            }, [t.author, e.guildId]),
            C = T && A,
            N = er({
                props: e,
                guildId: e.guildId,
                handleRenderPopout: I,
                showCommunicationDisabledStyles: C,
            }),
            D = (0, c.e7)([P.ZP], () => {
                var t;
                return null != (t = e.displayCompactAvatars) ? t : P.ZP.displayCompactAvatars;
            }),
            x = i.useMemo(
                () =>
                    (0, F.b)({
                        message: t,
                        channel: y,
                        user: null == t ? void 0 : t.author,
                        compact: a,
                        isRepliedMessage: !1,
                    }),
                [t, y, a],
            ),
            L = (0, c.e7)([R.Z], () => eo(a, D, p, R.Z.getGuild(e.guildId)), [a, D, p, e.guildId]),
            j = i.useMemo(() => {
                let e = [];
                return (
                    (0, l.yE)(t.flags, H.iLy.SUPPRESS_NOTIFICATIONS) &&
                        e.push((0, r.jsx)(S.Z, {}, "suppress-notifications")),
                    t.hasPotions() && e.push((0, r.jsx)(E.Z, { message: t })),
                    e
                );
            }, [t]),
            M = (0, G.XX)(t, _),
            k = (0, G.Dv)(t),
            U = m ? "".concat(M) : "".concat(M, " ").concat(k),
            Z = (null == n ? void 0 : n.state) === O.Y.LOADED ? (0, G.Gq)(t) : void 0,
            B = !0 !== m;
        return (0, r.jsx)(ei, {
            message: t,
            avatar: N,
            username: (0, r.jsxs)(r.Fragment, {
                children: [
                    C &&
                        (0, r.jsx)(u.u, {
                            text: Y.intl.string(Y.t["AeYyL+"]),
                            children: (0, r.jsxs)(r.Fragment, {
                                children: [
                                    (0, r.jsx)(d.YlB, {
                                        size: "xxs",
                                        color: "currentColor",
                                        className: a ? W.compactCommunicationDisabled : W.communicationDisabled,
                                    }),
                                    (0, r.jsx)(d.nn4, { children: Y.intl.string(Y.t.AmHag5) }),
                                ],
                            }),
                        }),
                    (0, r.jsx)(
                        et,
                        Q(q({}, e), {
                            message: t,
                            channel: y,
                            compact: a,
                            roleIconProps: p,
                            renderPopout: I,
                            preview: v,
                            subscribeToGroupId: _,
                            hideGuildTag: g,
                        }),
                    ),
                ],
            }),
            usernameSpanId: (0, G.XX)(t, _),
            usernameClassName: o()(W.headerText, {
                [W.hasRoleIcon]: 0 !== L,
                [W.hasBadges]: null != x || j.length > 0,
            }),
            compact: a,
            showTimestamp: B,
            showTimestampOnHover: f,
            ariaLabelledBy: U,
            ariaDescribedBy: Z,
            className: b,
            badges: j,
        });
    });
