"use strict";
n.d(t, { Ay: () => q, ix: () => W, tO: () => K }), n(321073), n(938796);
var l = n(627968),
    i = n(64700),
    s = n(503698),
    a = n.n(s),
    r = n(607399),
    o = n(665260),
    u = n(311907),
    c = n(990078),
    d = n(397927),
    m = n(793574),
    g = n(688810),
    h = n(429913),
    A = n(593643),
    f = n(802341),
    p = n(634202),
    x = n(17447),
    v = n(908247),
    C = n(870136),
    N = n(200759),
    E = n(919395),
    I = n(9842),
    _ = n(657048),
    b = n(93956),
    S = n(352413),
    j = n(854627),
    T = n(342296),
    y = n(964404),
    R = n(71393),
    M = n(576705),
    O = n(287809),
    w = n(486020),
    L = n(203982),
    k = n(763754),
    G = n(635071),
    D = n(860227),
    U = n(449859),
    P = n(855344),
    H = n(812299),
    V = n(109054),
    F = n(652215),
    B = n(985018),
    $ = n(767283);
function z(e) {
    let {
        avatarSrc: t,
        avatarDecorationSrc: n,
        compact: i,
        onClick: s,
        onContextMenu: r,
        onMouseDown: o,
        onMouseEnter: u,
        onMouseLeave: c,
        onKeyDown: d,
        showCommunicationDisabledStyles: m = !1,
        className: g,
        avatarImgRef: h,
    } = e;
    return (0, l.jsxs)(l.Fragment, {
        children: [
            (0, l.jsx)("img", {
                ref: h,
                onClick: s,
                onContextMenu: r,
                onKeyDown: d,
                onMouseDown: o,
                onMouseEnter: u,
                onMouseLeave: c,
                src: t,
                "aria-hidden": !0,
                className: a()(g, $.my, { [$.oE]: i, [$.vk]: null != s, [$.uU]: m }),
                alt: " ",
            }),
            null == n || i ? null : (0, l.jsx)("img", { className: $.M, src: n, alt: " ", "aria-hidden": !0 }),
        ],
    });
}
let J = i.memo(function (e) {
    let {
            message: t,
            author: n,
            channel: s,
            guildId: a,
            compact: r = !1,
            roleIconProps: o,
            showUsernamePopout: c,
            renderPopout: m,
            onClickUsername: g,
            onContextMenu: h,
            displayCompactAvatars: C = !1,
            onPopoutRequestClose: E,
            preview: I,
            subscribeToGroupId: b,
            hideGuildTag: S,
        } = e,
        j = (0, k.Ay)(t, n),
        T = i.useMemo(
            () => (0, H.y)({ message: t, channel: s, user: t?.author, compact: r, isRepliedMessage: !1 }),
            [t, s, r],
        ),
        y = i.useRef(null),
        M = (0, u.bG)([R.A], () => R.A.getGuild(a)),
        O = i.useMemo(() => Y(r, C, o, M), [r, C, o, M]),
        w = i.useMemo(
            () =>
                null == o
                    ? null
                    : 1 === O && null != M
                      ? (0, l.jsx)(
                            d.YNO,
                            {
                                targetElementRef: y,
                                animation: d.YNO.Animation.TRANSLATE,
                                align: "center",
                                autoInvert: !0,
                                nudgeAlignIntoViewport: !0,
                                position: "right",
                                renderPopout: () => (0, l.jsx)(P.A, { roleIcon: o, guild: M }),
                                clickTrap: !0,
                                children: (e) => {
                                    let { onClick: t } = e;
                                    return (0, l.jsx)(_.A, { ref: y, ...o, className: $.UT, onClick: t });
                                },
                            },
                            "role-icon-children",
                        )
                      : 2 === O
                        ? (0, l.jsx)(_.A, { ...o, className: $.UT }, "role-icon-children")
                        : null,
            [O, o, M],
        ),
        { enabled: L } = (0, A.D8)({ guildId: M?.id, location: "MessageHeader" }),
        D = x.L.useConfig({ location: "message_header" }).enabled,
        U = i.useMemo(() => {
            let e = [];
            return (
                null != w && e.push(w),
                null != M &&
                    (e.push((0, l.jsx)(N.A, { guild: M, message: t }, "new-member")),
                    L && e.push((0, l.jsx)(f.A, { guild: M, message: t }, "voice-channel"))),
                null != s &&
                    null != M &&
                    e.push(
                        (0, l.jsx)(p.A, { guild: M, channel: s, userId: t.author.id, messageId: t.id }, "connections"),
                    ),
                D && null != s && e.push((0, l.jsx)(v.A, { channelId: s.id, messageId: t.id }, "moderation-label")),
                e
            );
        }, [t, s, w, M, L, D]);
    return null == j
        ? null
        : (0, l.jsxs)(l.Fragment, {
              children: [
                  (0, l.jsx)(G.A, {
                      message: t,
                      channel: s,
                      author: j,
                      compact: r,
                      roleIcon: o,
                      showPopout: c,
                      renderPopout: m,
                      onClick: g,
                      onContextMenu: h,
                      onPopoutRequestClose: E,
                      decorations: { [G.w.SYSTEM_TAG]: T, [G.w.BADGES]: U },
                      previewGuildId: a,
                      preview: I,
                      subscribeToGroupId: b,
                      hideGuildTag: S,
                  }),
                  r &&
                      (0, l.jsxs)(l.Fragment, { children: [(0, l.jsx)("i", { className: $.me, children: ":" }), " "] }),
              ],
          });
});
function K(e, t, n) {
    let {
        message: i,
        channel: s,
        author: a,
        compact: r = !1,
        onContextMenu: o,
        showUsernamePopout: u,
        roleIcon: c,
        onClickUsername: d,
        onPopoutRequestClose: m,
    } = e;
    return (0, l.jsxs)(l.Fragment, {
        children: [
            (0, l.jsx)(G.A, {
                message: i,
                channel: s,
                author: a,
                compact: r,
                roleIcon: c,
                showPopout: u,
                renderPopout: t,
                onClick: d,
                onContextMenu: o,
                onPopoutRequestClose: m,
                decorations: n,
                preview: !0,
            }),
            r && (0, l.jsxs)(l.Fragment, { children: [(0, l.jsx)("i", { className: $.me, children: ":" }), " "] }),
        ],
    });
}
function W(e) {
    let {
            message: t,
            avatar: n,
            username: i,
            usernameSpanId: s,
            usernameClassName: r,
            compact: u,
            showTimestamp: c,
            showTimestampOnHover: m,
            ariaLabelledBy: g,
            ariaDescribedBy: A,
            className: f,
            messageClassname: p,
            badges: x,
        } = e,
        v = (0, o.Lt)(t.flags, F.pr7.SENT_BY_SOCIAL_LAYER_INTEGRATION) ? t.applicationId : null,
        C = (0, h.h)(v);
    return (0, l.jsxs)(l.Fragment, {
        children: [
            !u && n,
            (0, l.jsxs)(d.H, {
                className: a()($.wx, f),
                "aria-describedby": A,
                "aria-labelledby": g,
                children: [
                    c &&
                        u &&
                        (0, l.jsx)(U.A, {
                            id: (0, D.xl)(t),
                            compact: !0,
                            timestamp: t.timestamp,
                            isVisibleOnlyOnHover: m,
                            className: p,
                            isInline: !1,
                            application: C,
                        }),
                    u && n,
                    (0, l.jsx)("span", { id: s, className: r, children: i }),
                    c &&
                        !u &&
                        (0, l.jsx)(U.A, { id: (0, D.xl)(t), timestamp: t.timestamp, className: p, application: C }),
                    null != x && x.length > 0 ? (0, l.jsx)("div", { className: $.cV, children: x }) : null,
                ],
            }),
        ],
    });
}
function Y(e, t, n, l) {
    return (!e || t) && null != n && null != l ? 1 : (!e || t) && null != n ? 2 : 0;
}
let q = i.memo(function (e) {
    let {
            message: t,
            repliedMessage: n,
            compact: s = !1,
            renderPopout: h,
            showTimestampOnHover: A,
            roleIcon: f,
            subscribeToGroupId: p,
            hideTimestamp: x,
            hideGuildTag: v,
            className: N,
            channel: _,
            preview: k,
        } = e,
        G = i.useMemo(() => (null != h ? (e) => h(e, t) : void 0), [h, t]),
        [, U] = (0, C.Ay)(t.author.id, e.guildId),
        P = (0, u.bG)([M.A, R.A], () => {
            let n = R.A.getGuild(e.guildId);
            return null != t.author && null != n && M.A.canManageUser(F.xBc.MODERATE_MEMBERS, t.author, n);
        }, [t.author, e.guildId]),
        K = U && P,
        q = (function (e) {
            let {
                    props: t,
                    guildId: n,
                    handleRenderPopout: s,
                    showCommunicationDisabledStyles: a = !1,
                    className: o,
                } = e,
                {
                    message: c,
                    author: d,
                    compact: h = !1,
                    subscribeToGroupId: A,
                    animate: f = !0,
                    onContextMenu: p,
                    onClickAvatar: x,
                    onPopoutRequestClose: v,
                    showAvatarPopout: C,
                } = t,
                N = i.useRef(null),
                [I, _] = i.useState(!1),
                { analyticsLocations: b } = (0, g.Ay)(m.A.AVATAR),
                R = (0, u.bG)([O.default], () => O.default.getCurrentUser()),
                M = (0, u.bG)([y.Ay], () => t.displayCompactAvatars ?? y.Ay.displayCompactAvatars),
                k = (0, V.A)(c),
                G = h ? 32 : 80,
                { pendingAvatarDecoration: D } = (0, S.A)({ guildId: n }),
                U = (0, E.lw)({
                    pendingValue: c.author.id === R?.id ? D : void 0,
                    userValue: c.author?.avatarDecoration,
                    guildValue: d?.guildMemberAvatarDecoration,
                    guildId: n,
                }),
                {
                    avatarSrc: P,
                    avatarDecorationSrc: H,
                    eventHandlers: B,
                } = (0, j.A)({
                    userId: c.author.id,
                    guildId: n,
                    size: G,
                    animateOnHover: null != A ? !I : !f,
                    avatarDecorationOverride: U,
                    showPending: !0,
                }),
                $ = c.isInteractionPlaceholder(),
                J = i.useMemo(
                    () =>
                        $ && null == c.author.avatar && null == d.guildMemberAvatar && c.application?.icon != null
                            ? (w.Ay.getApplicationIconURL({
                                  id: c.application.id,
                                  icon: c.application.icon,
                                  size: G,
                                  fallbackAvatar: !1,
                              }) ?? P)
                            : null != c.webhookId && null == d.guildMemberAvatar
                              ? w.Ay.getUserAvatarURL(
                                    {
                                        avatar: c.author.avatar,
                                        id: c.author.id,
                                        discriminator: c.author.discriminator,
                                        bot: !0,
                                    },
                                    !1,
                                    G,
                                )
                              : P,
                    [
                        $,
                        c.author.avatar,
                        c.author.id,
                        c.author.discriminator,
                        c.application?.icon,
                        c.application?.id,
                        c.webhookId,
                        P,
                        G,
                        d.guildMemberAvatar,
                    ],
                );
            if (
                (i.useEffect(() => {
                    if (null != A)
                        return (
                            L._.subscribeKeyed(F.zOV.ANIMATE_CHAT_AVATAR, `${A}:${c.author.id}`, _),
                            () => void L._.unsubscribeKeyed(F.zOV.ANIMATE_CHAT_AVATAR, `${A}:${c.author.id}`, _)
                        );
                }, [c.author.id, A]),
                !h || M)
            )
                return null != s && null != C
                    ? (0, l.jsx)(g.f5, {
                          value: b,
                          children: (0, l.jsx)(T.A, {
                              targetElementRef: N,
                              user: c.author,
                              guildId: n,
                              channelId: c.channel_id,
                              messageId: c.id,
                              shouldShow: C,
                              shouldPreload: k,
                              renderPopout: s,
                              position: r.Fr ? "window_center" : "right",
                              avatarUrl: J,
                              onRequestClose: v,
                              clickTrap: C,
                              children: (e) =>
                                  z({
                                      ...B,
                                      avatarSrc: J,
                                      avatarDecorationSrc: H,
                                      compact: h,
                                      onClick: x,
                                      onContextMenu: p,
                                      onMouseDown: e.onMouseDown,
                                      onKeyDown: e.onKeyDown,
                                      showCommunicationDisabledStyles: a,
                                      className: o,
                                      avatarImgRef: N,
                                  }),
                          }),
                      })
                    : (0, l.jsx)(g.f5, {
                          value: b,
                          children: z({
                              ...B,
                              avatarSrc: J,
                              avatarDecorationSrc: H,
                              compact: h,
                              onClick: x,
                              onContextMenu: p,
                              onMouseDown: void 0,
                              onKeyDown: void 0,
                              showCommunicationDisabledStyles: a,
                              className: o,
                          }),
                      });
        })({ props: e, guildId: e.guildId, handleRenderPopout: G, showCommunicationDisabledStyles: K }),
        X = (0, u.bG)([y.Ay], () => e.displayCompactAvatars ?? y.Ay.displayCompactAvatars),
        Q = i.useMemo(
            () => (0, H.k)({ message: t, channel: _, user: t?.author, compact: s, isRepliedMessage: !1 }),
            [t, _, s],
        ),
        Z = (0, u.bG)([R.A], () => Y(s, X, f, R.A.getGuild(e.guildId)), [s, X, f, e.guildId]),
        ee = i.useMemo(() => {
            let e = [];
            return (
                (0, o.Lt)(t.flags, F.pr7.SUPPRESS_NOTIFICATIONS) &&
                    e.push((0, l.jsx)(b.A, {}, "suppress-notifications")),
                e
            );
        }, [t]),
        et = (0, D.d$)(t, p),
        en = (0, D.xl)(t),
        el = x ? `${et}` : `${et} ${en}`,
        ei = n?.state === I.a.LOADED ? (0, D.nS)(t) : void 0;
    return (0, l.jsx)(W, {
        message: t,
        avatar: q,
        username: (0, l.jsxs)(l.Fragment, {
            children: [
                K &&
                    (0, l.jsx)(c.m, {
                        text: B.intl.string(B.t["AeYyL+"]),
                        children: (0, l.jsxs)(l.Fragment, {
                            children: [
                                (0, l.jsx)(d.gQi, { size: "xxs", color: "currentColor", className: s ? $.EI : $.bu }),
                                (0, l.jsx)(d.AC4, { children: B.intl.string(B.t.AmHag5) }),
                            ],
                        }),
                    }),
                (0, l.jsx)(J, {
                    ...e,
                    message: t,
                    channel: _,
                    compact: s,
                    roleIconProps: f,
                    renderPopout: G,
                    preview: k,
                    subscribeToGroupId: p,
                    hideGuildTag: v,
                }),
            ],
        }),
        usernameSpanId: (0, D.d$)(t, p),
        usernameClassName: a()($.TK, { [$.yF]: 0 !== Z, [$.hB]: null != Q || ee.length > 0 }),
        compact: s,
        showTimestamp: !0 !== x,
        showTimestampOnHover: A,
        ariaLabelledBy: el,
        ariaDescribedBy: ei,
        className: N,
        badges: ee,
    });
});
