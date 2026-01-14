n.d(t, {
    CF: () => et,
    ZP: () => es,
    nD: () => er,
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
    E = n(98278),
    b = n(150039),
    y = n(869765),
    O = n(48950),
    v = n(243317),
    S = n(621853),
    I = n(369111),
    T = n(518950),
    C = n(484459),
    A = n(670188),
    N = n(740492),
    P = n(430824),
    R = n(496675),
    w = n(594174),
    D = n(768581),
    x = n(585483),
    L = n(74538),
    j = n(276554),
    M = n(739566),
    k = n(421399),
    U = n(453687),
    G = n(318713),
    Z = n(304176),
    F = n(47930),
    B = n(935910),
    V = n(981631),
    H = n(388032),
    Y = n(549578),
    W = n(121282);
function K(e, t, n) {
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
function z(e) {
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
                K(e, t, n[t]);
            });
    }
    return e;
}
function q(e, t) {
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
            : q(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let X = 32,
    J = 80;
function $(e) {
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
                className: o()(p, Y.avatar, {
                    [Y.compact]: i,
                    [Y.clickable]: null != a,
                    [Y.communicationDisabledOpacity]: f,
                }),
                alt: " ",
            }),
            null == n || i
                ? null
                : (0, r.jsx)("img", {
                      className: Y.avatarDecoration,
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
            hideGuildTag: v,
        } = e,
        S = (0, M.ZP)(t, n),
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
        C = (0, c.e7)([P.Z], () => P.Z.getGuild(o)),
        A = i.useMemo(() => ea(s, h, l, C), [s, h, l, C]),
        N = i.useMemo(
            () =>
                null == l
                    ? null
                    : 1 === A && null != C
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
                                    (0, r.jsx)(Z.Z, {
                                        roleIcon: l,
                                        guild: C,
                                    }),
                                clickTrap: !0,
                                children: (e) => {
                                    let { onClick: t } = e;
                                    return (0, r.jsx)(
                                        O.Z,
                                        Q(z({ ref: T }, l), {
                                            className: Y.roleIcon,
                                            onClick: t,
                                        }),
                                    );
                                },
                            },
                            "role-icon-children",
                        )
                      : 2 === A
                        ? (0, r.jsx)(O.Z, Q(z({}, l), { className: Y.roleIcon }), "role-icon-children")
                        : null,
            [A, l, C],
        ),
        R = (0, c.e7)([w.default], () => w.default.getCurrentUser()),
        D = i.useMemo(() => {
            let e = [],
                n = L.ZP.isPremium(t.author),
                i = L.ZP.isPremium(R),
                o = null == a ? void 0 : a.isPrivate();
            return (
                (0, j.R)(null != l, "Message Username") &&
                    n &&
                    !s &&
                    !o &&
                    e.push(
                        (0, r.jsx)(
                            eo,
                            {
                                currentUserIsPremium: i,
                                author: t.author,
                            },
                            "nitro-author",
                        ),
                    ),
                null != N && e.push(N),
                null != C &&
                    e.push(
                        (0, r.jsx)(
                            g.Z,
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
                            m.Z,
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
        }, [t, a, l, s, N, C, R]);
    return null == S
        ? null
        : (0, r.jsxs)(r.Fragment, {
              children: [
                  (0, r.jsx)(k.Z, {
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
                          [k.a.SYSTEM_TAG]: I,
                          [k.a.BADGES]: D,
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
                                  className: Y.separator,
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
            (0, r.jsx)(k.Z, {
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
                            className: Y.separator,
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
    let { props: o, guildId: l, handleRenderPopout: u, showCommunicationDisabledStyles: d = !1, className: _ } = e,
        {
            message: m,
            author: h,
            compact: g = !1,
            subscribeToGroupId: E,
            animate: y = !0,
            onContextMenu: O,
            onClickAvatar: v,
            onPopoutRequestClose: S,
            showAvatarPopout: C,
        } = o,
        P = i.useRef(null),
        [R, L] = i.useState(!1),
        { analyticsLocations: j } = (0, p.ZP)(f.Z.AVATAR),
        M = (0, c.e7)([w.default], () => w.default.getCurrentUser()),
        k = (0, c.e7)([N.ZP], () => {
            var e;
            return null != (e = o.displayCompactAvatars) ? e : N.ZP.displayCompactAvatars;
        }),
        U = (0, B.Z)(m),
        G = g ? X : J,
        { pendingAvatarDecoration: Z } = (0, I.Z)({ guildId: l }),
        F = (0, b.Ys)({
            pendingValue: m.author.id === (null == M ? void 0 : M.id) ? Z : void 0,
            userValue: null == (t = m.author) ? void 0 : t.avatarDecoration,
            guildValue: null == h ? void 0 : h.guildMemberAvatarDecoration,
            guildId: l,
        }),
        {
            avatarSrc: H,
            avatarDecorationSrc: Y,
            eventHandlers: W,
        } = (0, T.Z)({
            userId: m.author.id,
            guildId: l,
            size: G,
            animateOnHover: null != E ? !R : !y,
            avatarDecorationOverride: F,
            showPending: !0,
        }),
        K = m.isInteractionPlaceholder(),
        q = i.useMemo(() => {
            var e, t;
            return K &&
                null == m.author.avatar &&
                null == h.guildMemberAvatar &&
                (null == (e = m.application) ? void 0 : e.icon) != null
                ? null !=
                  (t = D.ZP.getApplicationIconURL({
                      id: m.application.id,
                      icon: m.application.icon,
                      size: G,
                      fallbackAvatar: !1,
                  }))
                    ? t
                    : H
                : null != m.webhookId && null == h.guildMemberAvatar
                  ? D.ZP.getUserAvatarURL(
                        {
                            avatar: m.author.avatar,
                            id: m.author.id,
                            discriminator: m.author.discriminator,
                            bot: !0,
                        },
                        !1,
                        G,
                    )
                  : H;
        }, [
            K,
            m.author.avatar,
            m.author.id,
            m.author.discriminator,
            null == (n = m.application) ? void 0 : n.icon,
            null == (a = m.application) ? void 0 : a.id,
            m.webhookId,
            H,
            G,
            h.guildMemberAvatar,
        ]);
    if (
        (i.useEffect(() => {
            if (null != E)
                return (
                    x.S.subscribeKeyed(V.LPv.ANIMATE_CHAT_AVATAR, "".concat(E, ":").concat(m.author.id), L),
                    () => void x.S.unsubscribeKeyed(V.LPv.ANIMATE_CHAT_AVATAR, "".concat(E, ":").concat(m.author.id), L)
                );
        }, [m.author.id, E]),
        !g || k)
    )
        return null != u && null != C
            ? (0, r.jsx)(p.Gt, {
                  value: j,
                  children: (0, r.jsx)(A.Z, {
                      targetElementRef: P,
                      user: m.author,
                      guildId: l,
                      channelId: m.channel_id,
                      messageId: m.id,
                      shouldShow: C,
                      shouldPreload: U,
                      renderPopout: u,
                      position: s.tq ? "window_center" : "right",
                      avatarUrl: q,
                      onRequestClose: S,
                      clickTrap: C,
                      children: (e) =>
                          $(
                              Q(z({}, W), {
                                  avatarSrc: q,
                                  avatarDecorationSrc: Y,
                                  compact: g,
                                  onClick: v,
                                  onContextMenu: O,
                                  onMouseDown: e.onMouseDown,
                                  onKeyDown: e.onKeyDown,
                                  showCommunicationDisabledStyles: d,
                                  className: _,
                                  avatarImgRef: P,
                              }),
                          ),
                  }),
              })
            : (0, r.jsx)(p.Gt, {
                  value: j,
                  children: $(
                      Q(z({}, W), {
                          avatarSrc: q,
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
function er(e) {
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
        b = (0, l.yE)(t.flags, V.iLy.SENT_BY_SOCIAL_LAYER_INTEGRATION) ? t.applicationId : null,
        y = (0, _.q)(b);
    return (0, r.jsxs)(r.Fragment, {
        children: [
            !c && n,
            (0, r.jsxs)(d.H, {
                className: o()(Y.header, h),
                "aria-describedby": m,
                "aria-labelledby": p,
                children: [
                    u &&
                        c &&
                        (0, r.jsx)(G.Z, {
                            id: (0, U.Dv)(t),
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
                        (0, r.jsx)(G.Z, {
                            id: (0, U.Dv)(t),
                            timestamp: t.timestamp,
                            className: g,
                            application: y,
                        }),
                    null != E && E.length > 0
                        ? (0, r.jsx)("div", {
                              className: Y.badgesContainer,
                              children: E,
                          })
                        : null,
                ],
            }),
        ],
    });
}
let ei = (e) => {
    e || (0, E.z)();
};
function ea(e, t, n, r) {
    return (!e || t) && null != n && null != r ? 1 : (!e || t) && null != n ? 2 : 0;
}
let eo = i.memo(function (e) {
        let { currentUserIsPremium: t, author: n } = e,
            i = (0, c.e7)([S.Z], () => {
                var e;
                return null == (e = S.Z.getUserProfile(n.id)) ? void 0 : e.premiumSince;
            });
        return (0, r.jsx)(u.u, {
            asContainer: !0,
            shouldShow: null != i,
            text: H.intl.formatToPlainString(H.t["8zbGNR"], { date: i }),
            onTooltipShow: () => (0, C.Z)(n.id),
            children: (0, r.jsx)(d.P3F, {
                className: Y.nitroAuthorBadgeContainer,
                onClick: () => ei(t),
                "aria-label": H.intl.formatToPlainString(H.t["8zbGNR"], { date: i }),
                children: (0, r.jsx)("img", {
                    alt: "",
                    className: Y.nitroBadgeSvg,
                    src: W,
                }),
            }),
        });
    }),
    es = i.memo(function (e) {
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
                className: E,
                channel: b,
                preview: O,
            } = e,
            S = i.useMemo(() => (null != s ? (e) => s(e, t) : void 0), [s, t]),
            [, I] = (0, h.ZP)(t.author.id, e.guildId),
            T = (0, c.e7)([R.Z, P.Z], () => {
                let n = P.Z.getGuild(e.guildId);
                return null != t.author && null != n && R.Z.canManageUser(V.Plq.MODERATE_MEMBERS, t.author, n);
            }, [t.author, e.guildId]),
            C = I && T,
            A = en({
                props: e,
                guildId: e.guildId,
                handleRenderPopout: S,
                showCommunicationDisabledStyles: C,
            }),
            w = (0, c.e7)([N.ZP], () => {
                var t;
                return null != (t = e.displayCompactAvatars) ? t : N.ZP.displayCompactAvatars;
            }),
            D = i.useMemo(
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
            x = (0, c.e7)([P.Z], () => ea(a, w, p, P.Z.getGuild(e.guildId)), [a, w, p, e.guildId]),
            L = i.useMemo(() => {
                let e = [];
                return (
                    (0, l.yE)(t.flags, V.iLy.SUPPRESS_NOTIFICATIONS) &&
                        e.push((0, r.jsx)(v.Z, {}, "suppress-notifications")),
                    e
                );
            }, [t]),
            j = (0, U.XX)(t, _),
            M = (0, U.Dv)(t),
            k = m ? "".concat(j) : "".concat(j, " ").concat(M),
            G = (null == n ? void 0 : n.state) === y.Y.LOADED ? (0, U.Gq)(t) : void 0,
            Z = !0 !== m;
        return (0, r.jsx)(er, {
            message: t,
            avatar: A,
            username: (0, r.jsxs)(r.Fragment, {
                children: [
                    C &&
                        (0, r.jsx)(u.u, {
                            text: H.intl.string(H.t["AeYyL+"]),
                            children: (0, r.jsxs)(r.Fragment, {
                                children: [
                                    (0, r.jsx)(d.YlB, {
                                        size: "xxs",
                                        color: "currentColor",
                                        className: a ? Y.compactCommunicationDisabled : Y.communicationDisabled,
                                    }),
                                    (0, r.jsx)(d.nn4, { children: H.intl.string(H.t.AmHag5) }),
                                ],
                            }),
                        }),
                    (0, r.jsx)(
                        ee,
                        Q(z({}, e), {
                            message: t,
                            channel: b,
                            compact: a,
                            roleIconProps: p,
                            renderPopout: S,
                            preview: O,
                            subscribeToGroupId: _,
                            hideGuildTag: g,
                        }),
                    ),
                ],
            }),
            usernameSpanId: (0, U.XX)(t, _),
            usernameClassName: o()(Y.headerText, {
                [Y.hasRoleIcon]: 0 !== x,
                [Y.hasBadges]: null != D || L.length > 0,
            }),
            compact: a,
            showTimestamp: Z,
            showTimestampOnHover: f,
            ariaLabelledBy: k,
            ariaDescribedBy: G,
            className: E,
            badges: L,
        });
    });
