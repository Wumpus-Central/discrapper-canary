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
    _ = n(906732),
    p = n(835473),
    h = n(366030),
    m = n(71619),
    g = n(340797),
    E = n(397589),
    b = n(98278),
    y = n(150039),
    O = n(869765),
    v = n(48950),
    I = n(243317),
    T = n(621853),
    S = n(369111),
    A = n(518950),
    C = n(484459),
    N = n(456077),
    R = n(740492),
    P = n(430824),
    D = n(496675),
    w = n(594174),
    L = n(768581),
    x = n(585483),
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
            roleIconProps: l,
            showUsernamePopout: u,
            renderPopout: f,
            onClickUsername: _,
            onContextMenu: p,
            displayCompactAvatars: m = !1,
            onPopoutRequestClose: E,
            preview: b,
            subscribeToGroupId: y,
            hideGuildTag: O,
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
        A = (0, c.e7)([P.Z], () => P.Z.getGuild(o)),
        C = i.useMemo(() => eo(s, m, l, A), [s, m, l, A]),
        N = i.useMemo(
            () =>
                null == l
                    ? null
                    : 1 === C && null != A
                      ? (0, r.jsx)(
                            d.yRy,
                            {
                                targetElementRef: S,
                                animation: d.yRy.Animation.TRANSLATE,
                                align: "center",
                                autoInvert: !0,
                                nudgeAlignIntoViewport: !0,
                                position: "right",
                                renderPopout: () =>
                                    (0, r.jsx)(Z.Z, {
                                        roleIcon: l,
                                        guild: A,
                                    }),
                                clickTrap: !0,
                                children: (e) => {
                                    let { onClick: t } = e;
                                    return (0, r.jsx)(
                                        v.Z,
                                        Q(q({ ref: S }, l), {
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
        R = (0, c.e7)([w.default], () => w.default.getCurrentUser()),
        D = i.useMemo(() => {
            let e = [],
                n = M.ZP.isPremium(t.author),
                i = M.ZP.isPremium(R),
                o = null == a ? void 0 : a.isPrivate();
            return (
                (0, k.R)(null != l, "Message Username") &&
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
                            h.Z,
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
        }, [t, a, l, s, N, A, R]);
    return null == I
        ? null
        : (0, r.jsxs)(r.Fragment, {
              children: [
                  (0, r.jsx)(U.Z, {
                      message: t,
                      channel: a,
                      author: I,
                      compact: s,
                      roleIcon: l,
                      showPopout: u,
                      renderPopout: f,
                      onClick: _,
                      onContextMenu: p,
                      onPopoutRequestClose: E,
                      decorations: {
                          [U.a.SYSTEM_TAG]: T,
                          [U.a.BADGES]: D,
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
    let { props: o, guildId: l, handleRenderPopout: u, showCommunicationDisabledStyles: d = !1, className: p } = e,
        {
            message: h,
            author: m,
            compact: g = !1,
            subscribeToGroupId: E,
            animate: b = !0,
            onContextMenu: O,
            onClickAvatar: v,
            onPopoutRequestClose: I,
            showAvatarPopout: T,
        } = o,
        C = i.useRef(null),
        [P, D] = i.useState(!1),
        { analyticsLocations: M } = (0, _.ZP)(f.Z.AVATAR),
        k = (0, c.e7)([w.default], () => w.default.getCurrentUser()),
        j = (0, c.e7)([R.ZP], () => {
            var e;
            return null != (e = o.displayCompactAvatars) ? e : R.ZP.displayCompactAvatars;
        }),
        U = (0, V.Z)(h),
        G = g ? J : $,
        { pendingAvatarDecoration: B } = (0, S.Z)({ guildId: l }),
        Z = (0, y.Ys)({
            pendingValue: h.author.id === (null == k ? void 0 : k.id) ? B : void 0,
            userValue: null == (t = h.author) ? void 0 : t.avatarDecoration,
            guildValue: null == m ? void 0 : m.guildMemberAvatarDecoration,
            guildId: l,
        }),
        {
            avatarSrc: F,
            avatarDecorationSrc: Y,
            eventHandlers: W,
        } = (0, A.Z)({
            userId: h.author.id,
            guildId: l,
            size: G,
            animateOnHover: null != E ? !P : !b,
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
                  (t = L.ZP.getApplicationIconURL({
                      id: h.application.id,
                      icon: h.application.icon,
                      size: G,
                      fallbackAvatar: !1,
                  }))
                    ? t
                    : F
                : null != h.webhookId && null == m.guildMemberAvatar
                  ? L.ZP.getUserAvatarURL(
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
                    x.S.subscribeKeyed(H.LPv.ANIMATE_CHAT_AVATAR, "".concat(E, ":").concat(h.author.id), D),
                    () => void x.S.unsubscribeKeyed(H.LPv.ANIMATE_CHAT_AVATAR, "".concat(E, ":").concat(h.author.id), D)
                );
        }, [h.author.id, E]),
        !g || j)
    )
        return null != u && null != T
            ? (0, r.jsx)(_.Gt, {
                  value: M,
                  children: (0, r.jsx)(N.Z, {
                      targetElementRef: C,
                      user: h.author,
                      guildId: l,
                      channelId: h.channel_id,
                      messageId: h.id,
                      shouldShow: T,
                      shouldPreload: U,
                      renderPopout: u,
                      position: s.tq ? "window_center" : "right",
                      avatarUrl: z,
                      onRequestClose: I,
                      clickTrap: T,
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
                                  className: p,
                                  avatarImgRef: C,
                              }),
                          ),
                  }),
              })
            : (0, r.jsx)(_.Gt, {
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
                          showCommunicationDisabledStyles: d,
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
            compact: c,
            showTimestamp: u,
            showTimestampOnHover: f,
            ariaLabelledBy: _,
            ariaDescribedBy: h,
            className: m,
            messageClassname: g,
            badges: E,
        } = e,
        b = (0, l.yE)(t.flags, H.iLy.SENT_BY_SOCIAL_LAYER_INTEGRATION) ? t.applicationId : null,
        y = (0, p.q)(b);
    return (0, r.jsxs)(r.Fragment, {
        children: [
            !c && n,
            (0, r.jsxs)(d.H, {
                className: o()(W.header, m),
                "aria-describedby": h,
                "aria-labelledby": _,
                children: [
                    u &&
                        c &&
                        (0, r.jsx)(B.Z, {
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
                        (0, r.jsx)(B.Z, {
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
            i = (0, c.e7)([T.Z], () => {
                var e;
                return null == (e = T.Z.getUserProfile(n.id)) ? void 0 : e.premiumSince;
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
                roleIcon: _,
                subscribeToGroupId: p,
                hideTimestamp: h,
                hideGuildTag: g,
                className: b,
                channel: y,
                preview: v,
            } = e,
            T = i.useMemo(() => (null != s ? (e) => s(e, t) : void 0), [s, t]),
            [, S] = (0, m.ZP)(t.author.id, e.guildId),
            A = (0, c.e7)([D.Z, P.Z], () => {
                let n = P.Z.getGuild(e.guildId);
                return null != t.author && null != n && D.Z.canManageUser(H.Plq.MODERATE_MEMBERS, t.author, n);
            }, [t.author, e.guildId]),
            C = S && A,
            N = er({
                props: e,
                guildId: e.guildId,
                handleRenderPopout: T,
                showCommunicationDisabledStyles: C,
            }),
            w = (0, c.e7)([R.ZP], () => {
                var t;
                return null != (t = e.displayCompactAvatars) ? t : R.ZP.displayCompactAvatars;
            }),
            L = i.useMemo(
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
            x = (0, c.e7)([P.Z], () => eo(a, w, _, P.Z.getGuild(e.guildId)), [a, w, _, e.guildId]),
            M = i.useMemo(() => {
                let e = [];
                return (
                    (0, l.yE)(t.flags, H.iLy.SUPPRESS_NOTIFICATIONS) &&
                        e.push((0, r.jsx)(I.Z, {}, "suppress-notifications")),
                    t.hasPotions() && e.push((0, r.jsx)(E.Z, { message: t })),
                    e
                );
            }, [t]),
            k = (0, G.XX)(t, p),
            j = (0, G.Dv)(t),
            U = h ? "".concat(k) : "".concat(k, " ").concat(j),
            B = (null == n ? void 0 : n.state) === O.Y.LOADED ? (0, G.Gq)(t) : void 0,
            Z = !0 !== h;
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
                            roleIconProps: _,
                            renderPopout: T,
                            preview: v,
                            subscribeToGroupId: p,
                            hideGuildTag: g,
                        }),
                    ),
                ],
            }),
            usernameSpanId: (0, G.XX)(t, p),
            usernameClassName: o()(W.headerText, {
                [W.hasRoleIcon]: 0 !== x,
                [W.hasBadges]: null != L || M.length > 0,
            }),
            compact: a,
            showTimestamp: Z,
            showTimestampOnHover: f,
            ariaLabelledBy: U,
            ariaDescribedBy: B,
            className: b,
            badges: M,
        });
    });
