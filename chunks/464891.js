n.d(t, {
    CF: () => en,
    ZP: () => el,
    nD: () => ei,
}),
    n(539854),
    n(388685),
    n(997841);
var r = n(951288),
    i = n(647438),
    a = n(120356),
    o = n.n(a),
    s = n(873546),
    l = n(442837),
    c = n(28664),
    u = n(481060),
    d = n(100527),
    f = n(906732),
    _ = n(835473),
    p = n(366030),
    h = n(71619),
    m = n(340797),
    g = n(397589),
    E = n(98278),
    b = n(150039),
    y = n(869765),
    O = n(48950),
    v = n(243317),
    I = n(621853),
    T = n(369111),
    S = n(518950),
    A = n(484459),
    C = n(456077),
    N = n(740492),
    R = n(430824),
    P = n(496675),
    D = n(594174),
    w = n(768581),
    x = n(585483),
    L = n(630388),
    M = n(74538),
    k = n(276554),
    j = n(739566),
    U = n(421399),
    G = n(453687),
    B = n(318713),
    Z = n(304176),
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
        className: _,
        avatarImgRef: p,
    } = e;
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)("img", {
                ref: p,
                onClick: a,
                onContextMenu: s,
                onKeyDown: d,
                onMouseDown: l,
                onMouseEnter: c,
                onMouseLeave: u,
                src: t,
                "aria-hidden": !0,
                className: o()(_, W.avatar, {
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
            roleIconProps: c,
            showUsernamePopout: d,
            renderPopout: f,
            onClickUsername: _,
            onContextMenu: h,
            displayCompactAvatars: g = !1,
            onPopoutRequestClose: E,
            preview: b,
            subscribeToGroupId: y,
            hideGuildTag: v,
        } = e,
        I = (0, j.ZP)(t, n),
        T = i.useMemo(
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
        S = i.useRef(null),
        A = (0, l.e7)([R.Z], () => R.Z.getGuild(o)),
        C = i.useMemo(() => eo(s, g, c, A), [s, g, c, A]),
        N = i.useMemo(
            () =>
                null == c
                    ? null
                    : 1 === C && null != A
                      ? (0, r.jsx)(
                            u.yRy,
                            {
                                targetElementRef: S,
                                animation: u.yRy.Animation.TRANSLATE,
                                align: "center",
                                autoInvert: !0,
                                nudgeAlignIntoViewport: !0,
                                position: "right",
                                renderPopout: () =>
                                    (0, r.jsx)(Z.Z, {
                                        roleIcon: c,
                                        guild: A,
                                    }),
                                clickTrap: !0,
                                children: (e) => {
                                    let { onClick: t } = e;
                                    return (0, r.jsx)(
                                        O.Z,
                                        Q(q({ ref: S }, c), {
                                            className: W.roleIcon,
                                            onClick: t,
                                        }),
                                    );
                                },
                            },
                            "role-icon-children",
                        )
                      : 2 === C
                        ? (0, r.jsx)(O.Z, Q(q({}, c), { className: W.roleIcon }), "role-icon-children")
                        : null,
            [C, c, A],
        ),
        P = (0, l.e7)([D.default], () => D.default.getCurrentUser()),
        w = i.useMemo(() => {
            let e = [],
                n = M.ZP.isPremium(t.author),
                i = M.ZP.isPremium(P),
                o = null == a ? void 0 : a.isPrivate();
            return (
                (0, k.R)(null != c, "Message Username") &&
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
                            m.Z,
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
                            p.Z,
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
        }, [t, a, c, s, N, A, P]);
    return null == I
        ? null
        : (0, r.jsxs)(r.Fragment, {
              children: [
                  (0, r.jsx)(U.Z, {
                      message: t,
                      channel: a,
                      author: I,
                      compact: s,
                      roleIcon: c,
                      showPopout: d,
                      renderPopout: f,
                      onClick: _,
                      onContextMenu: h,
                      onPopoutRequestClose: E,
                      decorations: {
                          [U.a.SYSTEM_TAG]: T,
                          [U.a.BADGES]: w,
                      },
                      previewGuildId: o,
                      preview: b,
                      subscribeToGroupId: y,
                      hideGuildTag: v,
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
    let { props: o, guildId: c, handleRenderPopout: u, showCommunicationDisabledStyles: _ = !1, className: p } = e,
        {
            message: h,
            author: m,
            compact: g = !1,
            subscribeToGroupId: E,
            animate: y = !0,
            onContextMenu: O,
            onClickAvatar: v,
            onPopoutRequestClose: I,
            showAvatarPopout: A,
        } = o,
        R = i.useRef(null),
        [P, L] = i.useState(!1),
        { analyticsLocations: M } = (0, f.ZP)(d.Z.AVATAR),
        k = (0, l.e7)([D.default], () => D.default.getCurrentUser()),
        j = (0, l.e7)([N.ZP], () => {
            var e;
            return null != (e = o.displayCompactAvatars) ? e : N.ZP.displayCompactAvatars;
        }),
        U = (0, V.Z)(h),
        G = g ? J : $,
        { pendingAvatarDecoration: B } = (0, T.Z)({ guildId: c }),
        Z = (0, b.Ys)({
            pendingValue: h.author.id === (null == k ? void 0 : k.id) ? B : void 0,
            userValue: null == (t = h.author) ? void 0 : t.avatarDecoration,
            guildValue: null == m ? void 0 : m.guildMemberAvatarDecoration,
            guildId: c,
        }),
        {
            avatarSrc: F,
            avatarDecorationSrc: Y,
            eventHandlers: W,
        } = (0, S.Z)({
            userId: h.author.id,
            guildId: c,
            size: G,
            animateOnHover: null != E ? !P : !y,
            avatarDecorationOverride: Z,
            showPending: !0,
        }),
        K = h.isInteractionPlaceholder(),
        z = i.useMemo(() => {
            var e, t;
            return K &&
                null == h.author.avatar &&
                null == m.guildMemberAvatar &&
                (null == (e = h.application) ? void 0 : e.icon) != null
                ? null !=
                  (t = w.ZP.getApplicationIconURL({
                      id: h.application.id,
                      icon: h.application.icon,
                      size: G,
                      fallbackAvatar: !1,
                  }))
                    ? t
                    : F
                : null != h.webhookId && null == m.guildMemberAvatar
                  ? w.ZP.getUserAvatarURL(
                        {
                            avatar: h.author.avatar,
                            id: h.author.id,
                            discriminator: h.author.discriminator,
                            bot: !0,
                        },
                        !1,
                        G,
                    )
                  : F;
        }, [
            K,
            h.author.avatar,
            h.author.id,
            h.author.discriminator,
            null == (n = h.application) ? void 0 : n.icon,
            null == (a = h.application) ? void 0 : a.id,
            h.webhookId,
            F,
            G,
            m.guildMemberAvatar,
        ]);
    if (
        (i.useEffect(() => {
            if (null != E)
                return (
                    x.S.subscribeKeyed(H.LPv.ANIMATE_CHAT_AVATAR, "".concat(E, ":").concat(h.author.id), L),
                    () => void x.S.unsubscribeKeyed(H.LPv.ANIMATE_CHAT_AVATAR, "".concat(E, ":").concat(h.author.id), L)
                );
        }, [h.author.id, E]),
        !g || j)
    )
        return null != u && null != A
            ? (0, r.jsx)(f.Gt, {
                  value: M,
                  children: (0, r.jsx)(C.Z, {
                      targetElementRef: R,
                      user: h.author,
                      guildId: c,
                      channelId: h.channel_id,
                      messageId: h.id,
                      shouldShow: A,
                      shouldPreload: U,
                      renderPopout: u,
                      position: s.tq ? "window_center" : "right",
                      avatarUrl: z,
                      onRequestClose: I,
                      clickTrap: A,
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
                                  showCommunicationDisabledStyles: _,
                                  className: p,
                                  avatarImgRef: R,
                              }),
                          ),
                  }),
              })
            : (0, r.jsx)(f.Gt, {
                  value: M,
                  children: ee(
                      Q(q({}, W), {
                          avatarSrc: z,
                          avatarDecorationSrc: Y,
                          compact: g,
                          onClick: v,
                          onContextMenu: O,
                          onMouseDown: void 0,
                          onKeyDown: void 0,
                          showCommunicationDisabledStyles: _,
                          className: p,
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
            compact: l,
            showTimestamp: c,
            showTimestampOnHover: d,
            ariaLabelledBy: f,
            ariaDescribedBy: p,
            className: h,
            messageClassname: m,
            badges: g,
        } = e,
        E = (0, L.yE)(t.flags, H.iLy.SENT_BY_SOCIAL_LAYER_INTEGRATION) ? t.applicationId : null,
        b = (0, _.q)(E);
    return (0, r.jsxs)(r.Fragment, {
        children: [
            !l && n,
            (0, r.jsxs)(u.H, {
                className: o()(W.header, h),
                "aria-describedby": p,
                "aria-labelledby": f,
                children: [
                    c &&
                        l &&
                        (0, r.jsx)(B.Z, {
                            id: (0, G.Dv)(t),
                            compact: !0,
                            timestamp: t.timestamp,
                            isVisibleOnlyOnHover: d,
                            className: m,
                            isInline: !1,
                            application: b,
                        }),
                    l && n,
                    (0, r.jsx)("span", {
                        id: a,
                        className: s,
                        children: i,
                    }),
                    c &&
                        !l &&
                        (0, r.jsx)(B.Z, {
                            id: (0, G.Dv)(t),
                            timestamp: t.timestamp,
                            className: m,
                            application: b,
                        }),
                    null != g && g.length > 0
                        ? (0, r.jsx)("div", {
                              className: W.badgesContainer,
                              children: g,
                          })
                        : null,
                ],
            }),
        ],
    });
}
let ea = (e) => {
    e || (0, E.z)();
};
function eo(e, t, n, r) {
    return (!e || t) && null != n && null != r ? 1 : (!e || t) && null != n ? 2 : 0;
}
let es = i.memo(function (e) {
        let { currentUserIsPremium: t, author: n } = e,
            i = (0, l.e7)([I.Z], () => {
                var e;
                return null == (e = I.Z.getUserProfile(n.id)) ? void 0 : e.premiumSince;
            });
        return (0, r.jsx)(c.u, {
            asContainer: !0,
            shouldShow: null != i,
            text: Y.intl.formatToPlainString(Y.t["8zbGNR"], { date: i }),
            onTooltipShow: () => (0, A.Z)(n.id),
            children: (0, r.jsx)(u.P3F, {
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
                showTimestampOnHover: d,
                roleIcon: f,
                subscribeToGroupId: _,
                hideTimestamp: p,
                hideGuildTag: m,
                className: E,
                channel: b,
                preview: O,
            } = e,
            I = i.useMemo(() => (null != s ? (e) => s(e, t) : void 0), [s, t]),
            [, T] = (0, h.ZP)(t.author.id, e.guildId),
            S = (0, l.e7)([P.Z, R.Z], () => {
                let n = R.Z.getGuild(e.guildId);
                return null != t.author && null != n && P.Z.canManageUser(H.Plq.MODERATE_MEMBERS, t.author, n);
            }, [t.author, e.guildId]),
            A = T && S,
            C = er({
                props: e,
                guildId: e.guildId,
                handleRenderPopout: I,
                showCommunicationDisabledStyles: A,
            }),
            D = (0, l.e7)([N.ZP], () => {
                var t;
                return null != (t = e.displayCompactAvatars) ? t : N.ZP.displayCompactAvatars;
            }),
            w = i.useMemo(
                () =>
                    (0, F.b)({
                        message: t,
                        channel: b,
                        user: null == t ? void 0 : t.author,
                        compact: a,
                        isRepliedMessage: !1,
                    }),
                [t, b, a],
            ),
            x = (0, l.e7)([R.Z], () => eo(a, D, f, R.Z.getGuild(e.guildId)), [a, D, f, e.guildId]),
            M = i.useMemo(() => {
                let e = [];
                return (
                    (0, L.yE)(t.flags, H.iLy.SUPPRESS_NOTIFICATIONS) &&
                        e.push((0, r.jsx)(v.Z, {}, "suppress-notifications")),
                    t.hasPotions() && e.push((0, r.jsx)(g.Z, { message: t })),
                    e
                );
            }, [t]),
            k = (0, G.XX)(t, _),
            j = (0, G.Dv)(t),
            U = p ? "".concat(k) : "".concat(k, " ").concat(j),
            B = (null == n ? void 0 : n.state) === y.Y.LOADED ? (0, G.Gq)(t) : void 0,
            Z = !0 !== p;
        return (0, r.jsx)(ei, {
            message: t,
            avatar: C,
            username: (0, r.jsxs)(r.Fragment, {
                children: [
                    A &&
                        (0, r.jsx)(c.u, {
                            text: Y.intl.string(Y.t["AeYyL+"]),
                            children: (0, r.jsxs)(r.Fragment, {
                                children: [
                                    (0, r.jsx)(u.YlB, {
                                        size: "xxs",
                                        color: "currentColor",
                                        className: a ? W.compactCommunicationDisabled : W.communicationDisabled,
                                    }),
                                    (0, r.jsx)(u.nn4, { children: Y.intl.string(Y.t.AmHag5) }),
                                ],
                            }),
                        }),
                    (0, r.jsx)(
                        et,
                        Q(q({}, e), {
                            message: t,
                            channel: b,
                            compact: a,
                            roleIconProps: f,
                            renderPopout: I,
                            preview: O,
                            subscribeToGroupId: _,
                            hideGuildTag: m,
                        }),
                    ),
                ],
            }),
            usernameSpanId: (0, G.XX)(t, _),
            usernameClassName: o()(W.headerText, {
                [W.hasRoleIcon]: 0 !== x,
                [W.hasBadges]: null != w || M.length > 0,
            }),
            compact: a,
            showTimestamp: Z,
            showTimestampOnHover: d,
            ariaLabelledBy: U,
            ariaDescribedBy: B,
            className: E,
            badges: M,
        });
    });
