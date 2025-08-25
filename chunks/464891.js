n.d(t, {
    CF: () => ee,
    ZP: () => eo,
    nD: () => en,
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
    c = n(481060),
    u = n(100527),
    d = n(906732),
    f = n(835473),
    _ = n(366030),
    p = n(91218),
    h = n(71619),
    m = n(340797),
    g = n(397589),
    E = n(98278),
    b = n(869765),
    y = n(243317),
    O = n(621853),
    v = n(518950),
    I = n(484459),
    T = n(670188),
    S = n(740492),
    A = n(430824),
    C = n(496675),
    N = n(594174),
    R = n(768581),
    P = n(585483),
    w = n(630388),
    D = n(74538),
    x = n(276554),
    L = n(739566),
    j = n(421399),
    k = n(453687),
    M = n(318713),
    U = n(304176),
    G = n(47930),
    B = n(935910),
    Z = n(981631),
    V = n(388032),
    F = n(724913),
    H = n(121282);
function Y(e, t, n) {
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
function W(e) {
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
                Y(e, t, n[t]);
            });
    }
    return e;
}
function K(e, t) {
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
function z(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : K(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let q = 32,
    X = 80,
    Q = 80;
function J(e) {
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
                className: o()(_, F.avatar, {
                    [F.compact]: i,
                    [F.clickable]: null != a,
                    [F.communicationDisabledOpacity]: f,
                }),
                alt: " ",
            }),
            null == n || i
                ? null
                : (0, r.jsx)("img", {
                      className: F.avatarDecoration,
                      src: n,
                      alt: " ",
                      "aria-hidden": !0,
                  }),
        ],
    });
}
let $ = i.memo(function (e) {
    let {
            message: t,
            author: n,
            channel: a,
            guildId: o,
            compact: s = !1,
            roleIconProps: u,
            showUsernamePopout: d,
            renderPopout: f,
            onClickUsername: h,
            onContextMenu: g,
            displayCompactAvatars: E = !1,
            onPopoutRequestClose: b,
            preview: y,
            subscribeToGroupId: O,
            hideGuildTag: v,
        } = e,
        I = (0, L.ZP)(t, n),
        T = i.useMemo(
            () =>
                (0, G.x)({
                    message: t,
                    channel: a,
                    user: null == t ? void 0 : t.author,
                    compact: s,
                    isRepliedMessage: !1,
                }),
            [t, a, s],
        ),
        S = i.useRef(null),
        C = (0, l.e7)([A.Z], () => A.Z.getGuild(o)),
        R = i.useMemo(() => ei(s, E, u, C), [s, E, u, C]),
        P = i.useMemo(
            () =>
                null == u
                    ? null
                    : 1 === R && null != C
                      ? (0, r.jsx)(
                            c.yRy,
                            {
                                targetElementRef: S,
                                animation: c.yRy.Animation.TRANSLATE,
                                align: "center",
                                autoInvert: !0,
                                nudgeAlignIntoViewport: !0,
                                position: "right",
                                renderPopout: () =>
                                    (0, r.jsx)(U.Z, {
                                        roleIcon: u,
                                        guild: C,
                                    }),
                                clickTrap: !0,
                                children: (e) => {
                                    let { onClick: t } = e;
                                    return (0, r.jsx)(
                                        p.Z,
                                        z(W({ ref: S }, u), {
                                            className: F.roleIcon,
                                            onClick: t,
                                        }),
                                    );
                                },
                            },
                            "role-icon-children",
                        )
                      : 2 === R
                        ? (0, r.jsx)(p.Z, z(W({}, u), { className: F.roleIcon }), "role-icon-children")
                        : null,
            [R, u, C],
        ),
        w = (0, l.e7)([N.default], () => N.default.getCurrentUser()),
        k = i.useMemo(() => {
            let e = [],
                n = D.ZP.isPremium(t.author),
                i = D.ZP.isPremium(w),
                o = null == a ? void 0 : a.isPrivate();
            return (
                (0, x.R)(null != u, "Message Username") &&
                    n &&
                    !s &&
                    !o &&
                    e.push(
                        (0, r.jsx)(
                            ea,
                            {
                                currentUserIsPremium: i,
                                author: t.author,
                            },
                            "nitro-author",
                        ),
                    ),
                null != P && e.push(P),
                null != C &&
                    e.push(
                        (0, r.jsx)(
                            m.Z,
                            {
                                guild: C,
                                message: t,
                            },
                            "new-member",
                        ),
                    ),
                null != a &&
                    null != C &&
                    e.push(
                        (0, r.jsx)(
                            _.Z,
                            {
                                guild: C,
                                channel: a,
                                userId: t.author.id,
                                messageId: t.id,
                            },
                            "connections",
                        ),
                    ),
                e
            );
        }, [t, a, u, s, P, C, w]);
    return null == I
        ? null
        : (0, r.jsxs)(r.Fragment, {
              children: [
                  (0, r.jsx)(j.Z, {
                      message: t,
                      channel: a,
                      author: I,
                      compact: s,
                      roleIcon: u,
                      showPopout: d,
                      renderPopout: f,
                      onClick: h,
                      onContextMenu: g,
                      onPopoutRequestClose: b,
                      decorations: {
                          [j.a.SYSTEM_TAG]: T,
                          [j.a.BADGES]: k,
                      },
                      renderRemixTag: !0,
                      previewGuildId: o,
                      preview: y,
                      subscribeToGroupId: O,
                      hideGuildTag: v,
                  }),
                  s &&
                      (0, r.jsxs)(r.Fragment, {
                          children: [
                              (0, r.jsx)("i", {
                                  className: F.separator,
                                  children: ":",
                              }),
                              " ",
                          ],
                      }),
              ],
          });
});
function ee(e, t, n) {
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
            (0, r.jsx)(j.Z, {
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
                renderRemixTag: !0,
            }),
            s &&
                (0, r.jsxs)(r.Fragment, {
                    children: [
                        (0, r.jsx)("i", {
                            className: F.separator,
                            children: ":",
                        }),
                        " ",
                    ],
                }),
        ],
    });
}
function et(e) {
    var t, n;
    let { props: a, guildId: o, handleRenderPopout: c, showCommunicationDisabledStyles: f = !1, className: _ } = e,
        {
            message: p,
            author: h,
            compact: m = !1,
            subscribeToGroupId: g,
            animate: E = !0,
            onContextMenu: b,
            onClickAvatar: y,
            onPopoutRequestClose: O,
            showAvatarPopout: I,
        } = a,
        A = i.useRef(null),
        [C, N] = i.useState(!1),
        { analyticsLocations: w } = (0, d.ZP)(u.Z.AVATAR),
        D = (0, l.e7)([S.ZP], () => {
            var e;
            return null != (e = a.displayCompactAvatars) ? e : S.ZP.displayCompactAvatars;
        }),
        x = (0, B.Z)(p),
        L = m ? q : X,
        {
            avatarSrc: j,
            avatarDecorationSrc: k,
            eventHandlers: M,
        } = (0, v.Z)({
            userId: p.author.id,
            guildId: o,
            size: L,
            animateOnHover: null != g ? !C : !E,
            showPending: !0,
        }),
        U = p.isInteractionPlaceholder(),
        G = i.useMemo(() => {
            var e, t;
            return U && null == p.author.avatar && (null == (e = p.application) ? void 0 : e.icon) != null
                ? null !=
                  (t = R.ZP.getApplicationIconURL({
                      id: p.application.id,
                      icon: p.application.icon,
                      size: L,
                      fallbackAvatar: !1,
                  }))
                    ? t
                    : j
                : null != p.webhookId
                  ? R.ZP.getUserAvatarURL(
                        {
                            avatar: p.author.avatar,
                            id: p.author.id,
                            discriminator: p.author.discriminator,
                            bot: !0,
                        },
                        !1,
                        L,
                    )
                  : j;
        }, [
            U,
            p.author.avatar,
            p.author.id,
            p.author.discriminator,
            null == (t = p.application) ? void 0 : t.icon,
            null == (n = p.application) ? void 0 : n.id,
            p.webhookId,
            j,
            L,
        ]);
    if (
        (i.useEffect(() => {
            if (null != g)
                return (
                    P.S.subscribeKeyed(Z.LPv.ANIMATE_CHAT_AVATAR, "".concat(g, ":").concat(p.author.id), N),
                    () => void P.S.unsubscribeKeyed(Z.LPv.ANIMATE_CHAT_AVATAR, "".concat(g, ":").concat(p.author.id), N)
                );
        }, [p.author.id, g]),
        !m || D)
    )
        return null != c && null != I
            ? (0, r.jsx)(d.Gt, {
                  value: w,
                  children: (0, r.jsx)(T.Z, {
                      targetElementRef: A,
                      user: p.author,
                      guildId: o,
                      channelId: p.channel_id,
                      messageId: p.id,
                      shouldShow: I,
                      shouldPreload: x,
                      renderPopout: c,
                      position: s.tq ? "window_center" : "right",
                      avatarUrl:
                          null != h.guildMemberAvatar && null != o
                              ? R.ZP.getGuildMemberAvatarURLSimple({
                                    guildId: o,
                                    userId: p.author.id,
                                    avatar: h.guildMemberAvatar,
                                    size: Q,
                                })
                              : p.author.getAvatarURL(void 0, Q, !1),
                      onRequestClose: O,
                      clickTrap: I,
                      children: (e) =>
                          J(
                              z(W({}, M), {
                                  avatarSrc: G,
                                  avatarDecorationSrc: k,
                                  compact: m,
                                  onClick: y,
                                  onContextMenu: b,
                                  onMouseDown: e.onMouseDown,
                                  onKeyDown: e.onKeyDown,
                                  showCommunicationDisabledStyles: f,
                                  className: _,
                                  avatarImgRef: A,
                              }),
                          ),
                  }),
              })
            : (0, r.jsx)(d.Gt, {
                  value: w,
                  children: J(
                      z(W({}, M), {
                          avatarSrc: G,
                          avatarDecorationSrc: k,
                          compact: m,
                          onClick: y,
                          onContextMenu: b,
                          onMouseDown: void 0,
                          onKeyDown: void 0,
                          showCommunicationDisabledStyles: f,
                          className: _,
                      }),
                  ),
              });
}
function en(e) {
    let {
            message: t,
            avatar: n,
            username: i,
            usernameSpanId: a,
            usernameClassName: s,
            compact: l,
            showTimestamp: u,
            showTimestampOnHover: d,
            ariaLabelledBy: _,
            ariaDescribedBy: p,
            className: h,
            messageClassname: m,
            badges: g,
        } = e,
        E = (0, w.yE)(t.flags, Z.iLy.SENT_BY_SOCIAL_LAYER_INTEGRATION) ? t.applicationId : null,
        b = (0, f.q)(E);
    return (0, r.jsxs)(r.Fragment, {
        children: [
            !l && n,
            (0, r.jsxs)(c.H, {
                className: o()(F.header, h),
                "aria-describedby": p,
                "aria-labelledby": _,
                children: [
                    u &&
                        l &&
                        (0, r.jsx)(M.Z, {
                            id: (0, k.Dv)(t),
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
                    u &&
                        !l &&
                        (0, r.jsx)(M.Z, {
                            id: (0, k.Dv)(t),
                            timestamp: t.timestamp,
                            className: m,
                            application: b,
                        }),
                    null != g && g.length > 0
                        ? (0, r.jsx)("div", {
                              className: F.badgesContainer,
                              children: g,
                          })
                        : null,
                ],
            }),
        ],
    });
}
let er = (e) => {
    e || (0, E.z)();
};
function ei(e, t, n, r) {
    return (!e || t) && null != n && null != r ? 1 : (!e || t) && null != n ? 2 : 0;
}
let ea = i.memo(function (e) {
        let { currentUserIsPremium: t, author: n } = e,
            i = (0, l.e7)([O.Z], () => {
                var e;
                return null == (e = O.Z.getUserProfile(n.id)) ? void 0 : e.premiumSince;
            });
        return (0, r.jsx)(c.ua7, {
            tooltipClassName: F.nitroAuthorBadgeTootip,
            shouldShow: null != i,
            text: V.intl.formatToPlainString(V.t["8zbGNT"], { date: i }),
            onTooltipShow: () => (0, I.Z)(n.id),
            children: (e) =>
                (0, r.jsx)(c.P3F, {
                    className: F.nitroAuthorBadgeContainer,
                    onClick: () => er(t),
                    "aria-label": V.intl.formatToPlainString(V.t["8zbGNT"], { date: i }),
                    children: (0, r.jsx)(
                        "img",
                        W(
                            {
                                alt: "",
                                className: F.nitroBadgeSvg,
                                src: H,
                            },
                            e,
                        ),
                    ),
                }),
        });
    }),
    eo = i.memo(function (e) {
        let {
                message: t,
                repliedMessage: n,
                compact: a = !1,
                renderPopout: s,
                showTimestampOnHover: u,
                roleIcon: d,
                subscribeToGroupId: f,
                hideTimestamp: _,
                hideGuildTag: p,
                className: m,
                channel: E,
                preview: O,
            } = e,
            v = i.useMemo(() => (null != s ? (e) => s(e, t) : void 0), [s, t]),
            [, I] = (0, h.ZP)(t.author.id, e.guildId),
            T = (0, l.e7)([C.Z, A.Z], () => {
                let n = A.Z.getGuild(e.guildId);
                return null != t.author && null != n && C.Z.canManageUser(Z.Plq.MODERATE_MEMBERS, t.author, n);
            }, [t.author, e.guildId]),
            N = I && T,
            R = et({
                props: e,
                guildId: e.guildId,
                handleRenderPopout: v,
                showCommunicationDisabledStyles: N,
            }),
            P = (0, l.e7)([S.ZP], () => {
                var t;
                return null != (t = e.displayCompactAvatars) ? t : S.ZP.displayCompactAvatars;
            }),
            D = i.useMemo(
                () =>
                    (0, G.b)({
                        message: t,
                        channel: E,
                        user: null == t ? void 0 : t.author,
                        compact: a,
                        isRepliedMessage: !1,
                    }),
                [t, E, a],
            ),
            x = (0, l.e7)([A.Z], () => ei(a, P, d, A.Z.getGuild(e.guildId)), [a, P, d, e.guildId]),
            L = i.useMemo(() => {
                let e = [];
                return (
                    (0, w.yE)(t.flags, Z.iLy.SUPPRESS_NOTIFICATIONS) &&
                        e.push((0, r.jsx)(y.Z, {}, "suppress-notifications")),
                    t.hasPotions() && e.push((0, r.jsx)(g.Z, { message: t })),
                    e
                );
            }, [t]),
            j = (0, k.XX)(t, f),
            M = (0, k.Dv)(t),
            U = _ ? "".concat(j) : "".concat(j, " ").concat(M),
            B = (null == n ? void 0 : n.state) === b.Y.LOADED ? (0, k.Gq)(t) : void 0,
            H = !0 !== _;
        return (0, r.jsx)(en, {
            message: t,
            avatar: R,
            username: (0, r.jsxs)(r.Fragment, {
                children: [
                    N &&
                        (0, r.jsx)(c.ua7, {
                            text: V.intl.string(V.t.AeYyLy),
                            children: (e) =>
                                (0, r.jsxs)(r.Fragment, {
                                    children: [
                                        (0, r.jsx)(
                                            c.YlB,
                                            z(
                                                W(
                                                    {
                                                        size: "xxs",
                                                        color: "currentColor",
                                                    },
                                                    e,
                                                ),
                                                {
                                                    className: a
                                                        ? F.compactCommunicationDisabled
                                                        : F.communicationDisabled,
                                                },
                                            ),
                                        ),
                                        (0, r.jsx)(c.nn4, { children: V.intl.string(V.t.AmHag4) }),
                                    ],
                                }),
                        }),
                    (0, r.jsx)(
                        $,
                        z(W({}, e), {
                            message: t,
                            channel: E,
                            compact: a,
                            roleIconProps: d,
                            renderPopout: v,
                            preview: O,
                            subscribeToGroupId: f,
                            hideGuildTag: p,
                        }),
                    ),
                ],
            }),
            usernameSpanId: (0, k.XX)(t, f),
            usernameClassName: o()(F.headerText, {
                [F.hasRoleIcon]: 0 !== x,
                [F.hasBadges]: null != D || L.length > 0,
            }),
            compact: a,
            showTimestamp: H,
            showTimestampOnHover: u,
            ariaLabelledBy: U,
            ariaDescribedBy: B,
            className: m,
            badges: L,
        });
    });
