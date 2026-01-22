n.d(t, {
    Ay: () => eo,
    ix: () => er,
    tO: () => et,
}),
    n(321073),
    n(896048),
    n(938796);
var r = n(627968),
    i = n(64700),
    a = n(503698),
    s = n.n(a),
    o = n(607399),
    l = n(665260),
    c = n(311907),
    u = n(990078),
    d = n(397927),
    f = n(793574),
    p = n(688810),
    _ = n(429913),
    h = n(634202),
    m = n(870136),
    g = n(200759),
    E = n(87719),
    b = n(919395),
    y = n(9842),
    O = n(657048),
    A = n(93956),
    v = n(622543),
    S = n(352413),
    I = n(854627),
    T = n(576622),
    C = n(342296),
    N = n(964404),
    R = n(71393),
    w = n(576705),
    P = n(287809),
    D = n(486020),
    x = n(203982),
    L = n(927578),
    j = n(101750),
    M = n(763754),
    k = n(635071),
    U = n(860227),
    G = n(449859),
    V = n(855344),
    F = n(812299),
    B = n(109054),
    H = n(652215),
    Y = n(985018),
    W = n(679740),
    K = n(814803);
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
function Z(e, t) {
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
let Q = 32,
    $ = 80;
function J(e) {
    let {
        avatarSrc: t,
        avatarDecorationSrc: n,
        compact: i,
        onClick: a,
        onContextMenu: o,
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
                onContextMenu: o,
                onKeyDown: d,
                onMouseDown: l,
                onMouseEnter: c,
                onMouseLeave: u,
                src: t,
                "aria-hidden": !0,
                className: s()(p, W.my, {
                    [W.oE]: i,
                    [W.vk]: null != a,
                    [W.uU]: f,
                }),
                alt: " ",
            }),
            null == n || i
                ? null
                : (0, r.jsx)("img", {
                      className: W.M,
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
            channel: a,
            guildId: s,
            compact: o = !1,
            roleIconProps: l,
            showUsernamePopout: u,
            renderPopout: f,
            onClickUsername: p,
            onContextMenu: _,
            displayCompactAvatars: m = !1,
            onPopoutRequestClose: E,
            preview: b,
            subscribeToGroupId: y,
            hideGuildTag: A,
        } = e,
        v = (0, M.Ay)(t, n),
        S = i.useMemo(
            () =>
                (0, F.y)({
                    message: t,
                    channel: a,
                    user: null == t ? void 0 : t.author,
                    compact: o,
                    isRepliedMessage: !1,
                }),
            [t, a, o],
        ),
        I = i.useRef(null),
        T = (0, c.bG)([R.A], () => R.A.getGuild(s)),
        C = i.useMemo(() => ea(o, m, l, T), [o, m, l, T]),
        N = i.useMemo(
            () =>
                null == l
                    ? null
                    : 1 === C && null != T
                      ? (0, r.jsx)(
                            d.YNO,
                            {
                                targetElementRef: I,
                                animation: d.YNO.Animation.TRANSLATE,
                                align: "center",
                                autoInvert: !0,
                                nudgeAlignIntoViewport: !0,
                                position: "right",
                                renderPopout: () =>
                                    (0, r.jsx)(V.A, {
                                        roleIcon: l,
                                        guild: T,
                                    }),
                                clickTrap: !0,
                                children: (e) => {
                                    let { onClick: t } = e;
                                    return (0, r.jsx)(
                                        O.A,
                                        Z(q({ ref: I }, l), {
                                            className: W.UT,
                                            onClick: t,
                                        }),
                                    );
                                },
                            },
                            "role-icon-children",
                        )
                      : 2 === C
                        ? (0, r.jsx)(O.A, Z(q({}, l), { className: W.UT }), "role-icon-children")
                        : null,
            [C, l, T],
        ),
        w = (0, c.bG)([P.default], () => P.default.getCurrentUser()),
        D = i.useMemo(() => {
            let e = [],
                n = L.Ay.isPremium(t.author),
                i = L.Ay.isPremium(w),
                s = null == a ? void 0 : a.isPrivate();
            return (
                (0, j.E)(null != l, "Message Username") &&
                    n &&
                    !o &&
                    !s &&
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
                null != T &&
                    e.push(
                        (0, r.jsx)(
                            g.A,
                            {
                                guild: T,
                                message: t,
                            },
                            "new-member",
                        ),
                    ),
                null != a &&
                    null != T &&
                    e.push(
                        (0, r.jsx)(
                            h.A,
                            {
                                guild: T,
                                channel: a,
                                userId: t.author.id,
                                messageId: t.id,
                            },
                            "connections",
                        ),
                    ),
                e
            );
        }, [t, a, l, o, N, T, w]);
    return null == v
        ? null
        : (0, r.jsxs)(r.Fragment, {
              children: [
                  (0, r.jsx)(k.A, {
                      message: t,
                      channel: a,
                      author: v,
                      compact: o,
                      roleIcon: l,
                      showPopout: u,
                      renderPopout: f,
                      onClick: p,
                      onContextMenu: _,
                      onPopoutRequestClose: E,
                      decorations: {
                          [k.w.SYSTEM_TAG]: S,
                          [k.w.BADGES]: D,
                      },
                      previewGuildId: s,
                      preview: b,
                      subscribeToGroupId: y,
                      hideGuildTag: A,
                  }),
                  o &&
                      (0, r.jsxs)(r.Fragment, {
                          children: [
                              (0, r.jsx)("i", {
                                  className: W.me,
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
        channel: a,
        author: s,
        compact: o = !1,
        onContextMenu: l,
        showUsernamePopout: c,
        roleIcon: u,
        onClickUsername: d,
        onPopoutRequestClose: f,
    } = e;
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(k.A, {
                message: i,
                channel: a,
                author: s,
                compact: o,
                roleIcon: u,
                showPopout: c,
                renderPopout: t,
                onClick: d,
                onContextMenu: l,
                onPopoutRequestClose: f,
                decorations: n,
                preview: !0,
            }),
            o &&
                (0, r.jsxs)(r.Fragment, {
                    children: [
                        (0, r.jsx)("i", {
                            className: W.me,
                            children: ":",
                        }),
                        " ",
                    ],
                }),
        ],
    });
}
function en(e) {
    var t, n, a;
    let { props: s, guildId: l, handleRenderPopout: u, showCommunicationDisabledStyles: d = !1, className: _ } = e,
        {
            message: h,
            author: m,
            compact: g = !1,
            subscribeToGroupId: E,
            animate: y = !0,
            onContextMenu: O,
            onClickAvatar: A,
            onPopoutRequestClose: v,
            showAvatarPopout: T,
        } = s,
        R = i.useRef(null),
        [w, L] = i.useState(!1),
        { analyticsLocations: j } = (0, p.Ay)(f.A.AVATAR),
        M = (0, c.bG)([P.default], () => P.default.getCurrentUser()),
        k = (0, c.bG)([N.Ay], () => {
            var e;
            return null != (e = s.displayCompactAvatars) ? e : N.Ay.displayCompactAvatars;
        }),
        U = (0, B.A)(h),
        G = g ? Q : $,
        { pendingAvatarDecoration: V } = (0, S.A)({ guildId: l }),
        F = (0, b.lw)({
            pendingValue: h.author.id === (null == M ? void 0 : M.id) ? V : void 0,
            userValue: null == (t = h.author) ? void 0 : t.avatarDecoration,
            guildValue: null == m ? void 0 : m.guildMemberAvatarDecoration,
            guildId: l,
        }),
        {
            avatarSrc: Y,
            avatarDecorationSrc: W,
            eventHandlers: K,
        } = (0, I.A)({
            userId: h.author.id,
            guildId: l,
            size: G,
            animateOnHover: null != E ? !w : !y,
            avatarDecorationOverride: F,
            showPending: !0,
        }),
        z = h.isInteractionPlaceholder(),
        X = i.useMemo(() => {
            var e, t;
            return z &&
                null == h.author.avatar &&
                null == m.guildMemberAvatar &&
                (null == (e = h.application) ? void 0 : e.icon) != null
                ? null !=
                  (t = D.Ay.getApplicationIconURL({
                      id: h.application.id,
                      icon: h.application.icon,
                      size: G,
                      fallbackAvatar: !1,
                  }))
                    ? t
                    : Y
                : null != h.webhookId && null == m.guildMemberAvatar
                  ? D.Ay.getUserAvatarURL(
                        {
                            avatar: h.author.avatar,
                            id: h.author.id,
                            discriminator: h.author.discriminator,
                            bot: !0,
                        },
                        !1,
                        G,
                    )
                  : Y;
        }, [
            z,
            h.author.avatar,
            h.author.id,
            h.author.discriminator,
            null == (n = h.application) ? void 0 : n.icon,
            null == (a = h.application) ? void 0 : a.id,
            h.webhookId,
            Y,
            G,
            m.guildMemberAvatar,
        ]);
    if (
        (i.useEffect(() => {
            if (null != E)
                return (
                    x._.subscribeKeyed(H.zOV.ANIMATE_CHAT_AVATAR, "".concat(E, ":").concat(h.author.id), L),
                    () => void x._.unsubscribeKeyed(H.zOV.ANIMATE_CHAT_AVATAR, "".concat(E, ":").concat(h.author.id), L)
                );
        }, [h.author.id, E]),
        !g || k)
    )
        return null != u && null != T
            ? (0, r.jsx)(p.f5, {
                  value: j,
                  children: (0, r.jsx)(C.A, {
                      targetElementRef: R,
                      user: h.author,
                      guildId: l,
                      channelId: h.channel_id,
                      messageId: h.id,
                      shouldShow: T,
                      shouldPreload: U,
                      renderPopout: u,
                      position: o.Fr ? "window_center" : "right",
                      avatarUrl: X,
                      onRequestClose: v,
                      clickTrap: T,
                      children: (e) =>
                          J(
                              Z(q({}, K), {
                                  avatarSrc: X,
                                  avatarDecorationSrc: W,
                                  compact: g,
                                  onClick: A,
                                  onContextMenu: O,
                                  onMouseDown: e.onMouseDown,
                                  onKeyDown: e.onKeyDown,
                                  showCommunicationDisabledStyles: d,
                                  className: _,
                                  avatarImgRef: R,
                              }),
                          ),
                  }),
              })
            : (0, r.jsx)(p.f5, {
                  value: j,
                  children: J(
                      Z(q({}, K), {
                          avatarSrc: X,
                          avatarDecorationSrc: W,
                          compact: g,
                          onClick: A,
                          onContextMenu: O,
                          onMouseDown: void 0,
                          onKeyDown: void 0,
                          showCommunicationDisabledStyles: d,
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
            usernameSpanId: a,
            usernameClassName: o,
            compact: c,
            showTimestamp: u,
            showTimestampOnHover: f,
            ariaLabelledBy: p,
            ariaDescribedBy: h,
            className: m,
            messageClassname: g,
            badges: E,
        } = e,
        b = (0, l.Lt)(t.flags, H.pr7.SENT_BY_SOCIAL_LAYER_INTEGRATION) ? t.applicationId : null,
        y = (0, _.h)(b);
    return (0, r.jsxs)(r.Fragment, {
        children: [
            !c && n,
            (0, r.jsxs)(d.H, {
                className: s()(W.wx, m),
                "aria-describedby": h,
                "aria-labelledby": p,
                children: [
                    u &&
                        c &&
                        (0, r.jsx)(G.A, {
                            id: (0, U.xl)(t),
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
                        className: o,
                        children: i,
                    }),
                    u &&
                        !c &&
                        (0, r.jsx)(G.A, {
                            id: (0, U.xl)(t),
                            timestamp: t.timestamp,
                            className: g,
                            application: y,
                        }),
                    null != E && E.length > 0
                        ? (0, r.jsx)("div", {
                              className: W.cV,
                              children: E,
                          })
                        : null,
                ],
            }),
        ],
    });
}
let ei = (e) => {
    e || (0, E.Z)();
};
function ea(e, t, n, r) {
    return (!e || t) && null != n && null != r ? 1 : (!e || t) && null != n ? 2 : 0;
}
let es = i.memo(function (e) {
        let { currentUserIsPremium: t, author: n } = e,
            i = (0, c.bG)([v.A], () => {
                var e;
                return null == (e = v.A.getUserProfile(n.id)) ? void 0 : e.premiumSince;
            });
        return (0, r.jsx)(u.m, {
            asContainer: !0,
            shouldShow: null != i,
            text: Y.intl.formatToPlainString(Y.t["8zbGNR"], { date: i }),
            onTooltipShow: () => (0, T.A)(n.id),
            children: (0, r.jsx)(d.DUT, {
                className: W.vu,
                onClick: () => ei(t),
                "aria-label": Y.intl.formatToPlainString(Y.t["8zbGNR"], { date: i }),
                children: (0, r.jsx)("img", {
                    alt: "",
                    className: W.MP,
                    src: K,
                }),
            }),
        });
    }),
    eo = i.memo(function (e) {
        let {
                message: t,
                repliedMessage: n,
                compact: a = !1,
                renderPopout: o,
                showTimestampOnHover: f,
                roleIcon: p,
                subscribeToGroupId: _,
                hideTimestamp: h,
                hideGuildTag: g,
                className: E,
                channel: b,
                preview: O,
            } = e,
            v = i.useMemo(() => (null != o ? (e) => o(e, t) : void 0), [o, t]),
            [, S] = (0, m.Ay)(t.author.id, e.guildId),
            I = (0, c.bG)([w.A, R.A], () => {
                let n = R.A.getGuild(e.guildId);
                return null != t.author && null != n && w.A.canManageUser(H.xBc.MODERATE_MEMBERS, t.author, n);
            }, [t.author, e.guildId]),
            T = S && I,
            C = en({
                props: e,
                guildId: e.guildId,
                handleRenderPopout: v,
                showCommunicationDisabledStyles: T,
            }),
            P = (0, c.bG)([N.Ay], () => {
                var t;
                return null != (t = e.displayCompactAvatars) ? t : N.Ay.displayCompactAvatars;
            }),
            D = i.useMemo(
                () =>
                    (0, F.k)({
                        message: t,
                        channel: b,
                        user: null == t ? void 0 : t.author,
                        compact: a,
                        isRepliedMessage: !1,
                    }),
                [t, b, a],
            ),
            x = (0, c.bG)([R.A], () => ea(a, P, p, R.A.getGuild(e.guildId)), [a, P, p, e.guildId]),
            L = i.useMemo(() => {
                let e = [];
                return (
                    (0, l.Lt)(t.flags, H.pr7.SUPPRESS_NOTIFICATIONS) &&
                        e.push((0, r.jsx)(A.A, {}, "suppress-notifications")),
                    e
                );
            }, [t]),
            j = (0, U.d$)(t, _),
            M = (0, U.xl)(t),
            k = h ? "".concat(j) : "".concat(j, " ").concat(M),
            G = (null == n ? void 0 : n.state) === y.a.LOADED ? (0, U.nS)(t) : void 0,
            V = !0 !== h;
        return (0, r.jsx)(er, {
            message: t,
            avatar: C,
            username: (0, r.jsxs)(r.Fragment, {
                children: [
                    T &&
                        (0, r.jsx)(u.m, {
                            text: Y.intl.string(Y.t["AeYyL+"]),
                            children: (0, r.jsxs)(r.Fragment, {
                                children: [
                                    (0, r.jsx)(d.gQi, {
                                        size: "xxs",
                                        color: "currentColor",
                                        className: a ? W.EI : W.bu,
                                    }),
                                    (0, r.jsx)(d.AC4, { children: Y.intl.string(Y.t.AmHag5) }),
                                ],
                            }),
                        }),
                    (0, r.jsx)(
                        ee,
                        Z(q({}, e), {
                            message: t,
                            channel: b,
                            compact: a,
                            roleIconProps: p,
                            renderPopout: v,
                            preview: O,
                            subscribeToGroupId: _,
                            hideGuildTag: g,
                        }),
                    ),
                ],
            }),
            usernameSpanId: (0, U.d$)(t, _),
            usernameClassName: s()(W.TK, {
                [W.yF]: 0 !== x,
                [W.hB]: null != D || L.length > 0,
            }),
            compact: a,
            showTimestamp: V,
            showTimestampOnHover: f,
            ariaLabelledBy: k,
            ariaDescribedBy: G,
            className: E,
            badges: L,
        });
    });
