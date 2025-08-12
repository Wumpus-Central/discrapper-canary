n.d(t, {
    CF: () => et,
    ZP: () => es,
    nD: () => er,
}),
    n(539854),
    n(388685),
    n(997841);
var r = n(255367),
    i = n(73800),
    o = n(120356),
    a = n.n(o),
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
    g = n(913834),
    E = n(397589),
    b = n(98278),
    y = n(869765),
    O = n(243317),
    v = n(621853),
    I = n(518950),
    T = n(484459),
    S = n(670188),
    A = n(740492),
    N = n(430824),
    C = n(496675),
    R = n(594174),
    P = n(768581),
    w = n(585483),
    D = n(630388),
    L = n(74538),
    x = n(276554),
    M = n(739566),
    k = n(421399),
    j = n(453687),
    U = n(318713),
    G = n(304176),
    B = n(47930),
    Z = n(935910),
    F = n(981631),
    V = n(388032),
    H = n(966661),
    Y = n(121282);
function W(e, t, n) {
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
function K(e) {
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
                W(e, t, n[t]);
            });
    }
    return e;
}
function z(e, t) {
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
function q(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : z(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let X = 32,
    Q = 80,
    J = 80;
function $(e) {
    let {
        avatarSrc: t,
        avatarDecorationSrc: n,
        compact: i,
        onClick: o,
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
                onClick: o,
                onContextMenu: s,
                onKeyDown: d,
                onMouseDown: l,
                onMouseEnter: c,
                onMouseLeave: u,
                src: t,
                "aria-hidden": !0,
                className: a()(_, H.avatar, {
                    [H.compact]: i,
                    [H.clickable]: null != o,
                    [H.communicationDisabledOpacity]: f,
                }),
                alt: " ",
            }),
            null == n || i
                ? null
                : (0, r.jsx)("img", {
                      className: H.avatarDecoration,
                      src: n,
                      alt: " ",
                      "aria-hidden": !0,
                  }),
        ],
    });
}
let ee = i.memo(function (e) {
    let {
            message: t,
            author: n,
            channel: o,
            guildId: a,
            compact: s = !1,
            roleIconProps: u,
            showUsernamePopout: d,
            renderPopout: f,
            onClickUsername: h,
            onContextMenu: E,
            displayCompactAvatars: b = !1,
            onPopoutRequestClose: y,
            preview: O,
            subscribeToGroupId: v,
            hideGuildTag: I,
        } = e,
        T = (0, M.ZP)(t, n),
        S = i.useMemo(
            () =>
                (0, B.x)({
                    message: t,
                    channel: o,
                    user: null == t ? void 0 : t.author,
                    compact: s,
                    isRepliedMessage: !1,
                }),
            [t, o, s],
        ),
        A = i.useRef(null),
        C = (0, l.e7)([N.Z], () => N.Z.getGuild(a)),
        P = i.useMemo(() => eo(s, b, u, C), [s, b, u, C]),
        w = i.useMemo(
            () =>
                null == u
                    ? null
                    : 1 === P && null != C
                      ? (0, r.jsx)(
                            c.yRy,
                            {
                                targetElementRef: A,
                                animation: c.yRy.Animation.TRANSLATE,
                                align: "center",
                                autoInvert: !0,
                                nudgeAlignIntoViewport: !0,
                                position: "right",
                                renderPopout: () =>
                                    (0, r.jsx)(G.Z, {
                                        roleIcon: u,
                                        guild: C,
                                    }),
                                clickTrap: !0,
                                children: (e) => {
                                    let { onClick: t } = e;
                                    return (0, r.jsx)(
                                        p.Z,
                                        q(K({ ref: A }, u), {
                                            className: H.roleIcon,
                                            onClick: t,
                                        }),
                                    );
                                },
                            },
                            "role-icon-children",
                        )
                      : 2 === P
                        ? (0, r.jsx)(p.Z, q(K({}, u), { className: H.roleIcon }), "role-icon-children")
                        : null,
            [P, u, C],
        ),
        D = (0, l.e7)([R.default], () => R.default.getCurrentUser()),
        j = i.useMemo(() => {
            let e = [],
                n = L.ZP.isPremium(t.author),
                i = L.ZP.isPremium(D),
                a = null == o ? void 0 : o.isPrivate();
            return (
                (0, x.R)(null != u, "Message Username") &&
                    n &&
                    !s &&
                    !a &&
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
                null != w && e.push(w),
                null != C &&
                    (e.push(
                        (0, r.jsx)(
                            m.Z,
                            {
                                guild: C,
                                message: t,
                            },
                            "new-member",
                        ),
                    ),
                    e.push(
                        (0, r.jsx)(
                            g.Z,
                            {
                                guild: C,
                                message: t,
                            },
                            "leaderboard-champion",
                        ),
                    )),
                null != o &&
                    null != C &&
                    e.push(
                        (0, r.jsx)(
                            _.Z,
                            {
                                guild: C,
                                channel: o,
                                userId: t.author.id,
                                messageId: t.id,
                            },
                            "connections",
                        ),
                    ),
                e
            );
        }, [t, o, u, s, w, C, D]);
    return null == T
        ? null
        : (0, r.jsxs)(r.Fragment, {
              children: [
                  (0, r.jsx)(k.Z, {
                      message: t,
                      channel: o,
                      author: T,
                      compact: s,
                      roleIcon: u,
                      showPopout: d,
                      renderPopout: f,
                      onClick: h,
                      onContextMenu: E,
                      onPopoutRequestClose: y,
                      decorations: {
                          [k.a.SYSTEM_TAG]: S,
                          [k.a.BADGES]: j,
                      },
                      renderRemixTag: !0,
                      previewGuildId: a,
                      preview: O,
                      subscribeToGroupId: v,
                      hideGuildTag: I,
                  }),
                  s &&
                      (0, r.jsxs)(r.Fragment, {
                          children: [
                              (0, r.jsx)("i", {
                                  className: H.separator,
                                  children: ":",
                              }),
                              " ",
                          ],
                      }),
              ],
          });
});
function et(e, t, n) {
    let {
        message: i,
        channel: o,
        author: a,
        compact: s = !1,
        onContextMenu: l,
        showUsernamePopout: c,
        roleIcon: u,
        onClickUsername: d,
        onPopoutRequestClose: f,
    } = e;
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(k.Z, {
                message: i,
                channel: o,
                author: a,
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
                            className: H.separator,
                            children: ":",
                        }),
                        " ",
                    ],
                }),
        ],
    });
}
function en(e) {
    var t, n;
    let { props: o, guildId: a, handleRenderPopout: c, showCommunicationDisabledStyles: f = !1, className: _ } = e,
        {
            message: p,
            author: h,
            compact: m = !1,
            subscribeToGroupId: g,
            animate: E = !0,
            onContextMenu: b,
            onClickAvatar: y,
            onPopoutRequestClose: O,
            showAvatarPopout: v,
        } = o,
        T = i.useRef(null),
        [N, C] = i.useState(!1),
        { analyticsLocations: R } = (0, d.ZP)(u.Z.AVATAR),
        D = (0, l.e7)([A.ZP], () => {
            var e;
            return null != (e = o.displayCompactAvatars) ? e : A.ZP.displayCompactAvatars;
        }),
        L = (0, Z.Z)(p),
        x = m ? X : Q,
        {
            avatarSrc: M,
            avatarDecorationSrc: k,
            eventHandlers: j,
        } = (0, I.Z)({
            userId: p.author.id,
            guildId: a,
            size: x,
            animateOnHover: null != g ? !N : !E,
            showPending: !0,
        }),
        U = p.isInteractionPlaceholder(),
        G = i.useMemo(() => {
            var e, t;
            return U && null == p.author.avatar && (null == (e = p.application) ? void 0 : e.icon) != null
                ? null !=
                  (t = P.ZP.getApplicationIconURL({
                      id: p.application.id,
                      icon: p.application.icon,
                      size: x,
                      fallbackAvatar: !1,
                  }))
                    ? t
                    : M
                : null != p.webhookId
                  ? P.ZP.getUserAvatarURL(
                        {
                            avatar: p.author.avatar,
                            id: p.author.id,
                            discriminator: p.author.discriminator,
                            bot: !0,
                        },
                        !1,
                        x,
                    )
                  : M;
        }, [
            U,
            p.author.avatar,
            p.author.id,
            p.author.discriminator,
            null == (t = p.application) ? void 0 : t.icon,
            null == (n = p.application) ? void 0 : n.id,
            p.webhookId,
            M,
            x,
        ]);
    if (
        (i.useEffect(() => {
            if (null != g)
                return (
                    w.S.subscribeKeyed(F.LPv.ANIMATE_CHAT_AVATAR, "".concat(g, ":").concat(p.author.id), C),
                    () => void w.S.unsubscribeKeyed(F.LPv.ANIMATE_CHAT_AVATAR, "".concat(g, ":").concat(p.author.id), C)
                );
        }, [p.author.id, g]),
        !m || D)
    )
        return null != c && null != v
            ? (0, r.jsx)(d.Gt, {
                  value: R,
                  children: (0, r.jsx)(S.Z, {
                      targetElementRef: T,
                      user: p.author,
                      guildId: a,
                      channelId: p.channel_id,
                      messageId: p.id,
                      shouldShow: v,
                      shouldPreload: L,
                      renderPopout: c,
                      position: s.tq ? "window_center" : "right",
                      avatarUrl:
                          null != h.guildMemberAvatar && null != a
                              ? P.ZP.getGuildMemberAvatarURLSimple({
                                    guildId: a,
                                    userId: p.author.id,
                                    avatar: h.guildMemberAvatar,
                                    size: J,
                                })
                              : p.author.getAvatarURL(void 0, J, !1),
                      onRequestClose: O,
                      clickTrap: v,
                      children: (e) =>
                          $(
                              q(K({}, j), {
                                  avatarSrc: G,
                                  avatarDecorationSrc: k,
                                  compact: m,
                                  onClick: y,
                                  onContextMenu: b,
                                  onMouseDown: e.onMouseDown,
                                  onKeyDown: e.onKeyDown,
                                  showCommunicationDisabledStyles: f,
                                  className: _,
                                  avatarImgRef: T,
                              }),
                          ),
                  }),
              })
            : (0, r.jsx)(d.Gt, {
                  value: R,
                  children: $(
                      q(K({}, j), {
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
function er(e) {
    let {
            message: t,
            avatar: n,
            username: i,
            usernameSpanId: o,
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
        E = (0, D.yE)(t.flags, F.iLy.SENT_BY_SOCIAL_LAYER_INTEGRATION) ? t.applicationId : null,
        b = (0, f.q)(E);
    return (0, r.jsxs)(r.Fragment, {
        children: [
            !l && n,
            (0, r.jsxs)(c.H, {
                className: a()(H.header, h),
                "aria-describedby": p,
                "aria-labelledby": _,
                children: [
                    u &&
                        l &&
                        (0, r.jsx)(U.Z, {
                            id: (0, j.Dv)(t),
                            compact: !0,
                            timestamp: t.timestamp,
                            isVisibleOnlyOnHover: d,
                            className: m,
                            isInline: !1,
                            application: b,
                        }),
                    l && n,
                    (0, r.jsx)("span", {
                        id: o,
                        className: s,
                        children: i,
                    }),
                    u &&
                        !l &&
                        (0, r.jsx)(U.Z, {
                            id: (0, j.Dv)(t),
                            timestamp: t.timestamp,
                            className: m,
                            application: b,
                        }),
                    null != g && g.length > 0
                        ? (0, r.jsx)("div", {
                              className: H.badgesContainer,
                              children: g,
                          })
                        : null,
                ],
            }),
        ],
    });
}
let ei = (e) => {
    e || (0, b.z)();
};
function eo(e, t, n, r) {
    return (!e || t) && null != n && null != r ? 1 : (!e || t) && null != n ? 2 : 0;
}
let ea = i.memo(function (e) {
        let { currentUserIsPremium: t, author: n } = e,
            i = (0, l.e7)([v.Z], () => {
                var e;
                return null == (e = v.Z.getUserProfile(n.id)) ? void 0 : e.premiumSince;
            });
        return (0, r.jsx)(c.ua7, {
            tooltipClassName: H.nitroAuthorBadgeTootip,
            shouldShow: null != i,
            text: V.intl.formatToPlainString(V.t["8zbGNT"], { date: i }),
            onTooltipShow: () => (0, T.Z)(n.id),
            children: (e) =>
                (0, r.jsx)(c.P3F, {
                    className: H.nitroAuthorBadgeContainer,
                    onClick: () => ei(t),
                    "aria-label": V.intl.formatToPlainString(V.t["8zbGNT"], { date: i }),
                    children: (0, r.jsx)(
                        "img",
                        K(
                            {
                                alt: "",
                                className: H.nitroBadgeSvg,
                                src: Y,
                            },
                            e,
                        ),
                    ),
                }),
        });
    }),
    es = i.memo(function (e) {
        let {
                message: t,
                repliedMessage: n,
                compact: o = !1,
                renderPopout: s,
                showTimestampOnHover: u,
                roleIcon: d,
                subscribeToGroupId: f,
                hideTimestamp: _,
                hideGuildTag: p,
                className: m,
                channel: g,
                preview: b,
            } = e,
            v = i.useMemo(() => (null != s ? (e) => s(e, t) : void 0), [s, t]),
            [, I] = (0, h.ZP)(t.author.id, e.guildId),
            T = (0, l.e7)([C.Z, N.Z], () => {
                let n = N.Z.getGuild(e.guildId);
                return null != t.author && null != n && C.Z.canManageUser(F.Plq.MODERATE_MEMBERS, t.author, n);
            }, [t.author, e.guildId]),
            S = I && T,
            R = en({
                props: e,
                guildId: e.guildId,
                handleRenderPopout: v,
                showCommunicationDisabledStyles: S,
            }),
            P = (0, l.e7)([A.ZP], () => {
                var t;
                return null != (t = e.displayCompactAvatars) ? t : A.ZP.displayCompactAvatars;
            }),
            w = i.useMemo(
                () =>
                    (0, B.b)({
                        message: t,
                        channel: g,
                        user: null == t ? void 0 : t.author,
                        compact: o,
                        isRepliedMessage: !1,
                    }),
                [t, g, o],
            ),
            L = (0, l.e7)([N.Z], () => eo(o, P, d, N.Z.getGuild(e.guildId)), [o, P, d, e.guildId]),
            x = i.useMemo(() => {
                let e = [];
                return (
                    (0, D.yE)(t.flags, F.iLy.SUPPRESS_NOTIFICATIONS) &&
                        e.push((0, r.jsx)(O.Z, {}, "suppress-notifications")),
                    t.hasPotions() && e.push((0, r.jsx)(E.Z, { message: t })),
                    e
                );
            }, [t]),
            M = (0, j.XX)(t, f),
            k = (0, j.Dv)(t),
            U = _ ? "".concat(M) : "".concat(M, " ").concat(k),
            G = (null == n ? void 0 : n.state) === y.Y.LOADED ? (0, j.Gq)(t) : void 0,
            Z = !0 !== _;
        return (0, r.jsx)(er, {
            message: t,
            avatar: R,
            username: (0, r.jsxs)(r.Fragment, {
                children: [
                    S &&
                        (0, r.jsx)(c.ua7, {
                            text: V.intl.string(V.t.AeYyLy),
                            children: (e) =>
                                (0, r.jsxs)(r.Fragment, {
                                    children: [
                                        (0, r.jsx)(
                                            c.YlB,
                                            q(
                                                K(
                                                    {
                                                        size: "xxs",
                                                        color: "currentColor",
                                                    },
                                                    e,
                                                ),
                                                {
                                                    className: o
                                                        ? H.compactCommunicationDisabled
                                                        : H.communicationDisabled,
                                                },
                                            ),
                                        ),
                                        (0, r.jsx)(c.nn4, { children: V.intl.string(V.t.AmHag4) }),
                                    ],
                                }),
                        }),
                    (0, r.jsx)(
                        ee,
                        q(K({}, e), {
                            message: t,
                            channel: g,
                            compact: o,
                            roleIconProps: d,
                            renderPopout: v,
                            preview: b,
                            subscribeToGroupId: f,
                            hideGuildTag: p,
                        }),
                    ),
                ],
            }),
            usernameSpanId: (0, j.XX)(t, f),
            usernameClassName: a()(H.headerText, {
                [H.hasRoleIcon]: 0 !== L,
                [H.hasBadges]: null != w || x.length > 0,
            }),
            compact: o,
            showTimestamp: Z,
            showTimestampOnHover: u,
            ariaLabelledBy: U,
            ariaDescribedBy: G,
            className: m,
            badges: x,
        });
    });
