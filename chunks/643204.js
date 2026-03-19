"use strict";
n.d(t, { Ay: () => X, ix: () => Y, tO: () => J }), n(321073), n(938796);
var l = n(627968),
    s = n(64700),
    i = n(503698),
    r = n.n(i),
    a = n(607399),
    o = n(665260),
    u = n(311907),
    c = n(990078),
    d = n(397927),
    m = n(793574),
    h = n(688810),
    g = n(429913),
    A = n(593643),
    f = n(802341),
    p = n(634202),
    x = n(17447),
    v = n(908247),
    C = n(870136),
    N = n(200759),
    b = n(919395),
    T = n(9842),
    E = n(657048),
    j = n(93956),
    I = n(352413),
    _ = n(854627),
    S = n(342296),
    R = n(964404),
    y = n(71393),
    M = n(576705),
    O = n(287809),
    w = n(486020),
    k = n(203982),
    L = n(763754),
    G = n(635071),
    D = n(860227),
    P = n(449859),
    U = n(855344),
    H = n(812299),
    V = n(109054),
    F = n(652215),
    $ = n(985018),
    B = n(679740);
function z(e) {
    let {
        avatarSrc: t,
        avatarDecorationSrc: n,
        compact: s,
        onClick: i,
        onContextMenu: a,
        onMouseDown: o,
        onMouseEnter: u,
        onMouseLeave: c,
        onKeyDown: d,
        showCommunicationDisabledStyles: m = !1,
        className: h,
        avatarImgRef: g,
    } = e;
    return (0, l.jsxs)(l.Fragment, {
        children: [
            (0, l.jsx)("img", {
                ref: g,
                onClick: i,
                onContextMenu: a,
                onKeyDown: d,
                onMouseDown: o,
                onMouseEnter: u,
                onMouseLeave: c,
                src: t,
                "aria-hidden": !0,
                className: r()(h, B.my, { [B.oE]: s, [B.vk]: null != i, [B.uU]: m }),
                alt: " ",
            }),
            null == n || s ? null : (0, l.jsx)("img", { className: B.M, src: n, alt: " ", "aria-hidden": !0 }),
        ],
    });
}
let K = s.memo(function (e) {
    let {
            message: t,
            author: n,
            channel: i,
            guildId: r,
            compact: a = !1,
            roleIconProps: o,
            showUsernamePopout: c,
            renderPopout: m,
            onClickUsername: h,
            onContextMenu: g,
            displayCompactAvatars: C = !1,
            onPopoutRequestClose: b,
            preview: T,
            subscribeToGroupId: j,
            hideGuildTag: I,
        } = e,
        _ = (0, L.Ay)(t, n),
        S = s.useMemo(
            () => (0, H.y)({ message: t, channel: i, user: t?.author, compact: a, isRepliedMessage: !1 }),
            [t, i, a],
        ),
        R = s.useRef(null),
        M = (0, u.bG)([y.A], () => y.A.getGuild(r)),
        O = s.useMemo(() => W(a, C, o, M), [a, C, o, M]),
        w = s.useMemo(
            () =>
                null == o
                    ? null
                    : 1 === O && null != M
                      ? (0, l.jsx)(
                            d.YNO,
                            {
                                targetElementRef: R,
                                animation: d.YNO.Animation.TRANSLATE,
                                align: "center",
                                autoInvert: !0,
                                nudgeAlignIntoViewport: !0,
                                position: "right",
                                renderPopout: () => (0, l.jsx)(U.A, { roleIcon: o, guild: M }),
                                clickTrap: !0,
                                children: (e) => {
                                    let { onClick: t } = e;
                                    return (0, l.jsx)(E.A, { ref: R, ...o, className: B.UT, onClick: t });
                                },
                            },
                            "role-icon-children",
                        )
                      : 2 === O
                        ? (0, l.jsx)(E.A, { ...o, className: B.UT }, "role-icon-children")
                        : null,
            [O, o, M],
        ),
        { enabled: k } = (0, A.D8)({ guildId: M?.id, location: "MessageHeader" }),
        D = x.L.useConfig({ location: "message_header" }).enabled,
        P = s.useMemo(() => {
            let e = [];
            return (
                null != w && e.push(w),
                null != M &&
                    (e.push((0, l.jsx)(N.A, { guild: M, message: t }, "new-member")),
                    k && e.push((0, l.jsx)(f.A, { guild: M, message: t }, "voice-channel"))),
                null != i &&
                    null != M &&
                    e.push(
                        (0, l.jsx)(p.A, { guild: M, channel: i, userId: t.author.id, messageId: t.id }, "connections"),
                    ),
                D && null != i && e.push((0, l.jsx)(v.A, { channelId: i.id, messageId: t.id }, "moderation-label")),
                e
            );
        }, [t, i, w, M, k, D]);
    return null == _
        ? null
        : (0, l.jsxs)(l.Fragment, {
              children: [
                  (0, l.jsx)(G.A, {
                      message: t,
                      channel: i,
                      author: _,
                      compact: a,
                      roleIcon: o,
                      showPopout: c,
                      renderPopout: m,
                      onClick: h,
                      onContextMenu: g,
                      onPopoutRequestClose: b,
                      decorations: { [G.w.SYSTEM_TAG]: S, [G.w.BADGES]: P },
                      previewGuildId: r,
                      preview: T,
                      subscribeToGroupId: j,
                      hideGuildTag: I,
                  }),
                  a &&
                      (0, l.jsxs)(l.Fragment, { children: [(0, l.jsx)("i", { className: B.me, children: ":" }), " "] }),
              ],
          });
});
function J(e, t, n) {
    let {
        message: s,
        channel: i,
        author: r,
        compact: a = !1,
        onContextMenu: o,
        showUsernamePopout: u,
        roleIcon: c,
        onClickUsername: d,
        onPopoutRequestClose: m,
    } = e;
    return (0, l.jsxs)(l.Fragment, {
        children: [
            (0, l.jsx)(G.A, {
                message: s,
                channel: i,
                author: r,
                compact: a,
                roleIcon: c,
                showPopout: u,
                renderPopout: t,
                onClick: d,
                onContextMenu: o,
                onPopoutRequestClose: m,
                decorations: n,
                preview: !0,
            }),
            a && (0, l.jsxs)(l.Fragment, { children: [(0, l.jsx)("i", { className: B.me, children: ":" }), " "] }),
        ],
    });
}
function Y(e) {
    let {
            message: t,
            avatar: n,
            username: s,
            usernameSpanId: i,
            usernameClassName: a,
            compact: u,
            showTimestamp: c,
            showTimestampOnHover: m,
            ariaLabelledBy: h,
            ariaDescribedBy: A,
            className: f,
            messageClassname: p,
            badges: x,
        } = e,
        v = (0, o.Lt)(t.flags, F.pr7.SENT_BY_SOCIAL_LAYER_INTEGRATION) ? t.applicationId : null,
        C = (0, g.h)(v);
    return (0, l.jsxs)(l.Fragment, {
        children: [
            !u && n,
            (0, l.jsxs)(d.H, {
                className: r()(B.wx, f),
                "aria-describedby": A,
                "aria-labelledby": h,
                children: [
                    c &&
                        u &&
                        (0, l.jsx)(P.A, {
                            id: (0, D.xl)(t),
                            compact: !0,
                            timestamp: t.timestamp,
                            isVisibleOnlyOnHover: m,
                            className: p,
                            isInline: !1,
                            application: C,
                        }),
                    u && n,
                    (0, l.jsx)("span", { id: i, className: a, children: s }),
                    c &&
                        !u &&
                        (0, l.jsx)(P.A, { id: (0, D.xl)(t), timestamp: t.timestamp, className: p, application: C }),
                    null != x && x.length > 0 ? (0, l.jsx)("div", { className: B.cV, children: x }) : null,
                ],
            }),
        ],
    });
}
function W(e, t, n, l) {
    return (!e || t) && null != n && null != l ? 1 : (!e || t) && null != n ? 2 : 0;
}
let X = s.memo(function (e) {
    let {
            message: t,
            repliedMessage: n,
            compact: i = !1,
            renderPopout: g,
            showTimestampOnHover: A,
            roleIcon: f,
            subscribeToGroupId: p,
            hideTimestamp: x,
            hideGuildTag: v,
            className: N,
            channel: E,
            preview: L,
        } = e,
        G = s.useMemo(() => (null != g ? (e) => g(e, t) : void 0), [g, t]),
        [, P] = (0, C.Ay)(t.author.id, e.guildId),
        U = (0, u.bG)([M.A, y.A], () => {
            let n = y.A.getGuild(e.guildId);
            return null != t.author && null != n && M.A.canManageUser(F.xBc.MODERATE_MEMBERS, t.author, n);
        }, [t.author, e.guildId]),
        J = P && U,
        X = (function (e) {
            let {
                    props: t,
                    guildId: n,
                    handleRenderPopout: i,
                    showCommunicationDisabledStyles: r = !1,
                    className: o,
                } = e,
                {
                    message: c,
                    author: d,
                    compact: g = !1,
                    subscribeToGroupId: A,
                    animate: f = !0,
                    onContextMenu: p,
                    onClickAvatar: x,
                    onPopoutRequestClose: v,
                    showAvatarPopout: C,
                } = t,
                N = s.useRef(null),
                [T, E] = s.useState(!1),
                { analyticsLocations: j } = (0, h.Ay)(m.A.AVATAR),
                y = (0, u.bG)([O.default], () => O.default.getCurrentUser()),
                M = (0, u.bG)([R.Ay], () => t.displayCompactAvatars ?? R.Ay.displayCompactAvatars),
                L = (0, V.A)(c),
                G = g ? 32 : 80,
                { pendingAvatarDecoration: D } = (0, I.A)({ guildId: n }),
                P = (0, b.lw)({
                    pendingValue: c.author.id === y?.id ? D : void 0,
                    userValue: c.author?.avatarDecoration,
                    guildValue: d?.guildMemberAvatarDecoration,
                    guildId: n,
                }),
                {
                    avatarSrc: U,
                    avatarDecorationSrc: H,
                    eventHandlers: $,
                } = (0, _.A)({
                    userId: c.author.id,
                    guildId: n,
                    size: G,
                    animateOnHover: null != A ? !T : !f,
                    avatarDecorationOverride: P,
                    showPending: !0,
                }),
                B = c.isInteractionPlaceholder(),
                K = s.useMemo(
                    () =>
                        B && null == c.author.avatar && null == d.guildMemberAvatar && c.application?.icon != null
                            ? (w.Ay.getApplicationIconURL({
                                  id: c.application.id,
                                  icon: c.application.icon,
                                  size: G,
                                  fallbackAvatar: !1,
                              }) ?? U)
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
                              : U,
                    [
                        B,
                        c.author.avatar,
                        c.author.id,
                        c.author.discriminator,
                        c.application?.icon,
                        c.application?.id,
                        c.webhookId,
                        U,
                        G,
                        d.guildMemberAvatar,
                    ],
                );
            if (
                (s.useEffect(() => {
                    if (null != A)
                        return (
                            k._.subscribeKeyed(F.zOV.ANIMATE_CHAT_AVATAR, `${A}:${c.author.id}`, E),
                            () => void k._.unsubscribeKeyed(F.zOV.ANIMATE_CHAT_AVATAR, `${A}:${c.author.id}`, E)
                        );
                }, [c.author.id, A]),
                !g || M)
            )
                return null != i && null != C
                    ? (0, l.jsx)(h.f5, {
                          value: j,
                          children: (0, l.jsx)(S.A, {
                              targetElementRef: N,
                              user: c.author,
                              guildId: n,
                              channelId: c.channel_id,
                              messageId: c.id,
                              shouldShow: C,
                              shouldPreload: L,
                              renderPopout: i,
                              position: a.Fr ? "window_center" : "right",
                              avatarUrl: K,
                              onRequestClose: v,
                              clickTrap: C,
                              children: (e) =>
                                  z({
                                      ...$,
                                      avatarSrc: K,
                                      avatarDecorationSrc: H,
                                      compact: g,
                                      onClick: x,
                                      onContextMenu: p,
                                      onMouseDown: e.onMouseDown,
                                      onKeyDown: e.onKeyDown,
                                      showCommunicationDisabledStyles: r,
                                      className: o,
                                      avatarImgRef: N,
                                  }),
                          }),
                      })
                    : (0, l.jsx)(h.f5, {
                          value: j,
                          children: z({
                              ...$,
                              avatarSrc: K,
                              avatarDecorationSrc: H,
                              compact: g,
                              onClick: x,
                              onContextMenu: p,
                              onMouseDown: void 0,
                              onKeyDown: void 0,
                              showCommunicationDisabledStyles: r,
                              className: o,
                          }),
                      });
        })({ props: e, guildId: e.guildId, handleRenderPopout: G, showCommunicationDisabledStyles: J }),
        q = (0, u.bG)([R.Ay], () => e.displayCompactAvatars ?? R.Ay.displayCompactAvatars),
        Q = s.useMemo(
            () => (0, H.k)({ message: t, channel: E, user: t?.author, compact: i, isRepliedMessage: !1 }),
            [t, E, i],
        ),
        Z = (0, u.bG)([y.A], () => W(i, q, f, y.A.getGuild(e.guildId)), [i, q, f, e.guildId]),
        ee = s.useMemo(() => {
            let e = [];
            return (
                (0, o.Lt)(t.flags, F.pr7.SUPPRESS_NOTIFICATIONS) &&
                    e.push((0, l.jsx)(j.A, {}, "suppress-notifications")),
                e
            );
        }, [t]),
        et = (0, D.d$)(t, p),
        en = (0, D.xl)(t),
        el = x ? `${et}` : `${et} ${en}`,
        es = n?.state === T.a.LOADED ? (0, D.nS)(t) : void 0;
    return (0, l.jsx)(Y, {
        message: t,
        avatar: X,
        username: (0, l.jsxs)(l.Fragment, {
            children: [
                J &&
                    (0, l.jsx)(c.m, {
                        text: $.intl.string($.t["AeYyL+"]),
                        children: (0, l.jsxs)(l.Fragment, {
                            children: [
                                (0, l.jsx)(d.gQi, { size: "xxs", color: "currentColor", className: i ? B.EI : B.bu }),
                                (0, l.jsx)(d.AC4, { children: $.intl.string($.t.AmHag5) }),
                            ],
                        }),
                    }),
                (0, l.jsx)(K, {
                    ...e,
                    message: t,
                    channel: E,
                    compact: i,
                    roleIconProps: f,
                    renderPopout: G,
                    preview: L,
                    subscribeToGroupId: p,
                    hideGuildTag: v,
                }),
            ],
        }),
        usernameSpanId: (0, D.d$)(t, p),
        usernameClassName: r()(B.TK, { [B.yF]: 0 !== Z, [B.hB]: null != Q || ee.length > 0 }),
        compact: i,
        showTimestamp: !0 !== x,
        showTimestampOnHover: A,
        ariaLabelledBy: el,
        ariaDescribedBy: es,
        className: N,
        badges: ee,
    });
});
