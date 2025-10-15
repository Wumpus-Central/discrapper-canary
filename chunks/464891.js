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
    c = n(28664),
    u = n(481060),
    d = n(100527),
    f = n(906732),
    _ = n(835473),
    p = n(366030),
    h = n(91218),
    m = n(71619),
    g = n(340797),
    E = n(397589),
    b = n(98278),
    y = n(869765),
    O = n(243317),
    v = n(621853),
    I = n(518950),
    T = n(484459),
    S = n(670188),
    A = n(740492),
    C = n(430824),
    N = n(496675),
    R = n(594174),
    P = n(768581),
    w = n(585483),
    D = n(630388),
    L = n(74538),
    x = n(276554),
    M = n(739566),
    j = n(421399),
    k = n(453687),
    U = n(318713),
    G = n(304176),
    B = n(47930),
    Z = n(935910),
    F = n(981631),
    V = n(388032),
    H = n(724913),
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
                className: o()(_, H.avatar, {
                    [H.compact]: i,
                    [H.clickable]: null != a,
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
let $ = i.memo(function (e) {
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
            onContextMenu: m,
            displayCompactAvatars: E = !1,
            onPopoutRequestClose: b,
            preview: y,
            subscribeToGroupId: O,
            hideGuildTag: v,
        } = e,
        I = (0, M.ZP)(t, n),
        T = i.useMemo(
            () =>
                (0, B.x)({
                    message: t,
                    channel: a,
                    user: null == t ? void 0 : t.author,
                    compact: s,
                    isRepliedMessage: !1,
                }),
            [t, a, s],
        ),
        S = i.useRef(null),
        A = (0, l.e7)([C.Z], () => C.Z.getGuild(o)),
        N = i.useMemo(() => ei(s, E, c, A), [s, E, c, A]),
        P = i.useMemo(
            () =>
                null == c
                    ? null
                    : 1 === N && null != A
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
                                    (0, r.jsx)(G.Z, {
                                        roleIcon: c,
                                        guild: A,
                                    }),
                                clickTrap: !0,
                                children: (e) => {
                                    let { onClick: t } = e;
                                    return (0, r.jsx)(
                                        h.Z,
                                        q(K({ ref: S }, c), {
                                            className: H.roleIcon,
                                            onClick: t,
                                        }),
                                    );
                                },
                            },
                            "role-icon-children",
                        )
                      : 2 === N
                        ? (0, r.jsx)(h.Z, q(K({}, c), { className: H.roleIcon }), "role-icon-children")
                        : null,
            [N, c, A],
        ),
        w = (0, l.e7)([R.default], () => R.default.getCurrentUser()),
        D = i.useMemo(() => {
            let e = [],
                n = L.ZP.isPremium(t.author),
                i = L.ZP.isPremium(w),
                o = null == a ? void 0 : a.isPrivate();
            return (
                (0, x.R)(null != c, "Message Username") &&
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
        }, [t, a, c, s, P, A, w]);
    return null == I
        ? null
        : (0, r.jsxs)(r.Fragment, {
              children: [
                  (0, r.jsx)(j.Z, {
                      message: t,
                      channel: a,
                      author: I,
                      compact: s,
                      roleIcon: c,
                      showPopout: d,
                      renderPopout: f,
                      onClick: _,
                      onContextMenu: m,
                      onPopoutRequestClose: b,
                      decorations: {
                          [j.a.SYSTEM_TAG]: T,
                          [j.a.BADGES]: D,
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
                                  className: H.separator,
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
                            className: H.separator,
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
    let { props: a, guildId: o, handleRenderPopout: c, showCommunicationDisabledStyles: u = !1, className: _ } = e,
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
        } = a,
        T = i.useRef(null),
        [C, N] = i.useState(!1),
        { analyticsLocations: R } = (0, f.ZP)(d.Z.AVATAR),
        D = (0, l.e7)([A.ZP], () => {
            var e;
            return null != (e = a.displayCompactAvatars) ? e : A.ZP.displayCompactAvatars;
        }),
        L = (0, Z.Z)(p),
        x = m ? X : Q,
        {
            avatarSrc: M,
            avatarDecorationSrc: j,
            eventHandlers: k,
        } = (0, I.Z)({
            userId: p.author.id,
            guildId: o,
            size: x,
            animateOnHover: null != g ? !C : !E,
            showPending: !0,
        }),
        U = p.isInteractionPlaceholder(),
        G = i.useMemo(() => {
            var e, t;
            return U &&
                null == p.author.avatar &&
                null == h.guildMemberAvatar &&
                (null == (e = p.application) ? void 0 : e.icon) != null
                ? null !=
                  (t = P.ZP.getApplicationIconURL({
                      id: p.application.id,
                      icon: p.application.icon,
                      size: x,
                      fallbackAvatar: !1,
                  }))
                    ? t
                    : M
                : null != p.webhookId && null == h.guildMemberAvatar
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
            h.guildMemberAvatar,
        ]);
    if (
        (i.useEffect(() => {
            if (null != g)
                return (
                    w.S.subscribeKeyed(F.LPv.ANIMATE_CHAT_AVATAR, "".concat(g, ":").concat(p.author.id), N),
                    () => void w.S.unsubscribeKeyed(F.LPv.ANIMATE_CHAT_AVATAR, "".concat(g, ":").concat(p.author.id), N)
                );
        }, [p.author.id, g]),
        !m || D)
    )
        return null != c && null != v
            ? (0, r.jsx)(f.Gt, {
                  value: R,
                  children: (0, r.jsx)(S.Z, {
                      targetElementRef: T,
                      user: p.author,
                      guildId: o,
                      channelId: p.channel_id,
                      messageId: p.id,
                      shouldShow: v,
                      shouldPreload: L,
                      renderPopout: c,
                      position: s.tq ? "window_center" : "right",
                      avatarUrl: G,
                      onRequestClose: O,
                      clickTrap: v,
                      children: (e) =>
                          J(
                              q(K({}, k), {
                                  avatarSrc: G,
                                  avatarDecorationSrc: j,
                                  compact: m,
                                  onClick: y,
                                  onContextMenu: b,
                                  onMouseDown: e.onMouseDown,
                                  onKeyDown: e.onKeyDown,
                                  showCommunicationDisabledStyles: u,
                                  className: _,
                                  avatarImgRef: T,
                              }),
                          ),
                  }),
              })
            : (0, r.jsx)(f.Gt, {
                  value: R,
                  children: J(
                      q(K({}, k), {
                          avatarSrc: G,
                          avatarDecorationSrc: j,
                          compact: m,
                          onClick: y,
                          onContextMenu: b,
                          onMouseDown: void 0,
                          onKeyDown: void 0,
                          showCommunicationDisabledStyles: u,
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
            showTimestamp: c,
            showTimestampOnHover: d,
            ariaLabelledBy: f,
            ariaDescribedBy: p,
            className: h,
            messageClassname: m,
            badges: g,
        } = e,
        E = (0, D.yE)(t.flags, F.iLy.SENT_BY_SOCIAL_LAYER_INTEGRATION) ? t.applicationId : null,
        b = (0, _.q)(E);
    return (0, r.jsxs)(r.Fragment, {
        children: [
            !l && n,
            (0, r.jsxs)(u.H, {
                className: o()(H.header, h),
                "aria-describedby": p,
                "aria-labelledby": f,
                children: [
                    c &&
                        l &&
                        (0, r.jsx)(U.Z, {
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
                    c &&
                        !l &&
                        (0, r.jsx)(U.Z, {
                            id: (0, k.Dv)(t),
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
let er = (e) => {
    e || (0, b.z)();
};
function ei(e, t, n, r) {
    return (!e || t) && null != n && null != r ? 1 : (!e || t) && null != n ? 2 : 0;
}
let ea = i.memo(function (e) {
        let { currentUserIsPremium: t, author: n } = e,
            i = (0, l.e7)([v.Z], () => {
                var e;
                return null == (e = v.Z.getUserProfile(n.id)) ? void 0 : e.premiumSince;
            });
        return (0, r.jsx)(c.u, {
            asContainer: !0,
            shouldShow: null != i,
            text: V.intl.formatToPlainString(V.t["8zbGNT"], { date: i }),
            onTooltipShow: () => (0, T.Z)(n.id),
            children: (0, r.jsx)(u.P3F, {
                className: H.nitroAuthorBadgeContainer,
                onClick: () => er(t),
                "aria-label": V.intl.formatToPlainString(V.t["8zbGNT"], { date: i }),
                children: (0, r.jsx)("img", {
                    alt: "",
                    className: H.nitroBadgeSvg,
                    src: Y,
                }),
            }),
        });
    }),
    eo = i.memo(function (e) {
        let {
                message: t,
                repliedMessage: n,
                compact: a = !1,
                renderPopout: s,
                showTimestampOnHover: d,
                roleIcon: f,
                subscribeToGroupId: _,
                hideTimestamp: p,
                hideGuildTag: h,
                className: g,
                channel: b,
                preview: v,
            } = e,
            I = i.useMemo(() => (null != s ? (e) => s(e, t) : void 0), [s, t]),
            [, T] = (0, m.ZP)(t.author.id, e.guildId),
            S = (0, l.e7)([N.Z, C.Z], () => {
                let n = C.Z.getGuild(e.guildId);
                return null != t.author && null != n && N.Z.canManageUser(F.Plq.MODERATE_MEMBERS, t.author, n);
            }, [t.author, e.guildId]),
            R = T && S,
            P = et({
                props: e,
                guildId: e.guildId,
                handleRenderPopout: I,
                showCommunicationDisabledStyles: R,
            }),
            w = (0, l.e7)([A.ZP], () => {
                var t;
                return null != (t = e.displayCompactAvatars) ? t : A.ZP.displayCompactAvatars;
            }),
            L = i.useMemo(
                () =>
                    (0, B.b)({
                        message: t,
                        channel: b,
                        user: null == t ? void 0 : t.author,
                        compact: a,
                        isRepliedMessage: !1,
                    }),
                [t, b, a],
            ),
            x = (0, l.e7)([C.Z], () => ei(a, w, f, C.Z.getGuild(e.guildId)), [a, w, f, e.guildId]),
            M = i.useMemo(() => {
                let e = [];
                return (
                    (0, D.yE)(t.flags, F.iLy.SUPPRESS_NOTIFICATIONS) &&
                        e.push((0, r.jsx)(O.Z, {}, "suppress-notifications")),
                    t.hasPotions() && e.push((0, r.jsx)(E.Z, { message: t })),
                    e
                );
            }, [t]),
            j = (0, k.XX)(t, _),
            U = (0, k.Dv)(t),
            G = p ? "".concat(j) : "".concat(j, " ").concat(U),
            Z = (null == n ? void 0 : n.state) === y.Y.LOADED ? (0, k.Gq)(t) : void 0,
            Y = !0 !== p;
        return (0, r.jsx)(en, {
            message: t,
            avatar: P,
            username: (0, r.jsxs)(r.Fragment, {
                children: [
                    R &&
                        (0, r.jsx)(c.u, {
                            text: V.intl.string(V.t.AeYyLy),
                            children: (0, r.jsxs)(r.Fragment, {
                                children: [
                                    (0, r.jsx)(u.YlB, {
                                        size: "xxs",
                                        color: "currentColor",
                                        className: a ? H.compactCommunicationDisabled : H.communicationDisabled,
                                    }),
                                    (0, r.jsx)(u.nn4, { children: V.intl.string(V.t.AmHag4) }),
                                ],
                            }),
                        }),
                    (0, r.jsx)(
                        $,
                        q(K({}, e), {
                            message: t,
                            channel: b,
                            compact: a,
                            roleIconProps: f,
                            renderPopout: I,
                            preview: v,
                            subscribeToGroupId: _,
                            hideGuildTag: h,
                        }),
                    ),
                ],
            }),
            usernameSpanId: (0, k.XX)(t, _),
            usernameClassName: o()(H.headerText, {
                [H.hasRoleIcon]: 0 !== x,
                [H.hasBadges]: null != L || M.length > 0,
            }),
            compact: a,
            showTimestamp: Y,
            showTimestampOnHover: d,
            ariaLabelledBy: G,
            ariaDescribedBy: Z,
            className: g,
            badges: M,
        });
    });
