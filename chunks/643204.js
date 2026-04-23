"use strict";
n.d(t, { Ay: () => Q, ix: () => Z, tO: () => q }), n(321073), n(938796);
var l = n(627968),
    a = n(64700),
    s = n(503698),
    i = n.n(s),
    r = n(607399),
    o = n(665260),
    c = n(311907),
    u = n(990078),
    d = n(265872),
    m = n(707554),
    g = n(60270),
    h = n(140735),
    p = n(793574),
    A = n(688810),
    _ = n(429913),
    f = n(593643),
    v = n(802341),
    x = n(634202),
    C = n(17447),
    I = n(908247),
    N = n(870136),
    E = n(200759),
    b = n(919395),
    T = n(9842),
    S = n(657048),
    y = n(93956),
    j = n(352413),
    R = n(854627),
    M = n(342296),
    w = n(964404),
    O = n(71393),
    D = n(576705),
    L = n(287809),
    k = n(486020),
    G = n(203982),
    U = n(763754),
    P = n(635071),
    V = n(860227),
    F = n(449859),
    H = n(855344),
    B = n(812299),
    $ = n(109054),
    z = n(652215),
    K = n(985018),
    W = n(334211);
function J(e) {
    let {
        avatarSrc: t,
        avatarDecorationSrc: n,
        compact: a,
        onClick: s,
        onContextMenu: r,
        onMouseDown: o,
        onMouseEnter: c,
        onMouseLeave: u,
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
                onMouseEnter: c,
                onMouseLeave: u,
                src: t,
                "aria-hidden": !0,
                className: i()(g, W.my, { [W.oE]: a, [W.vk]: null != s, [W.uU]: m }),
                alt: " ",
            }),
            null == n || a ? null : (0, l.jsx)("img", { className: W.M, src: n, alt: " ", "aria-hidden": !0 }),
        ],
    });
}
let Y = a.memo(function (e) {
    let {
            message: t,
            author: n,
            channel: s,
            guildId: i,
            compact: r = !1,
            roleIconProps: o,
            showUsernamePopout: u,
            renderPopout: m,
            onClickUsername: g,
            onContextMenu: h,
            displayCompactAvatars: p = !1,
            onPopoutRequestClose: A,
            preview: _,
            subscribeToGroupId: N,
            hideGuildTag: b,
        } = e,
        T = (0, U.Ay)(t, n),
        y = a.useMemo(
            () => (0, B.y)({ message: t, channel: s, user: t?.author, compact: r, isRepliedMessage: !1 }),
            [t, s, r],
        ),
        j = a.useRef(null),
        R = (0, c.bG)([O.A], () => O.A.getGuild(i)),
        M = a.useMemo(() => X(r, p, o, R), [r, p, o, R]),
        w = a.useMemo(
            () =>
                null == o
                    ? null
                    : 1 === M && null != R
                      ? (0, l.jsx)(
                            d.Y,
                            {
                                targetElementRef: j,
                                animation: d.Y.Animation.TRANSLATE,
                                align: "center",
                                autoInvert: !0,
                                nudgeAlignIntoViewport: !0,
                                position: "right",
                                renderPopout: () => (0, l.jsx)(H.A, { roleIcon: o, guild: R }),
                                clickTrap: !0,
                                children: (e) => {
                                    let { onClick: t } = e;
                                    return (0, l.jsx)(S.A, { ref: j, ...o, className: W.UT, onClick: t });
                                },
                            },
                            "role-icon-children",
                        )
                      : 2 === M
                        ? (0, l.jsx)(S.A, { ...o, className: W.UT }, "role-icon-children")
                        : null,
            [M, o, R],
        ),
        { enabled: D } = (0, f.D8)({ guildId: R?.id, location: "MessageHeader" }),
        L = C.L.useConfig({ location: "message_header" }).enabled,
        k = a.useMemo(() => {
            let e = [];
            return (
                null != w && e.push(w),
                null != R &&
                    (e.push((0, l.jsx)(E.A, { guild: R, message: t }, "new-member")),
                    D && e.push((0, l.jsx)(v.A, { guild: R, message: t }, "voice-channel"))),
                null != s &&
                    null != R &&
                    e.push(
                        (0, l.jsx)(x.A, { guild: R, channel: s, userId: t.author.id, messageId: t.id }, "connections"),
                    ),
                L && null != s && e.push((0, l.jsx)(I.A, { channelId: s.id, messageId: t.id }, "moderation-label")),
                e
            );
        }, [t, s, w, R, D, L]);
    return null == T
        ? null
        : (0, l.jsxs)(l.Fragment, {
              children: [
                  (0, l.jsx)(P.A, {
                      message: t,
                      channel: s,
                      author: T,
                      compact: r,
                      roleIcon: o,
                      showPopout: u,
                      renderPopout: m,
                      onClick: g,
                      onContextMenu: h,
                      onPopoutRequestClose: A,
                      decorations: { [P.w.SYSTEM_TAG]: y, [P.w.BADGES]: k },
                      previewGuildId: i,
                      preview: _,
                      subscribeToGroupId: N,
                      hideGuildTag: b,
                  }),
                  r &&
                      (0, l.jsxs)(l.Fragment, { children: [(0, l.jsx)("i", { className: W.me, children: ":" }), " "] }),
              ],
          });
});
function q(e, t, n) {
    let {
        message: a,
        channel: s,
        author: i,
        compact: r = !1,
        onContextMenu: o,
        showUsernamePopout: c,
        roleIcon: u,
        onClickUsername: d,
        onPopoutRequestClose: m,
    } = e;
    return (0, l.jsxs)(l.Fragment, {
        children: [
            (0, l.jsx)(P.A, {
                message: a,
                channel: s,
                author: i,
                compact: r,
                roleIcon: u,
                showPopout: c,
                renderPopout: t,
                onClick: d,
                onContextMenu: o,
                onPopoutRequestClose: m,
                decorations: n,
                preview: !0,
            }),
            r && (0, l.jsxs)(l.Fragment, { children: [(0, l.jsx)("i", { className: W.me, children: ":" }), " "] }),
        ],
    });
}
function Z(e) {
    let {
            message: t,
            avatar: n,
            username: a,
            usernameSpanId: s,
            usernameClassName: r,
            compact: c,
            showTimestamp: u,
            showTimestampOnHover: d,
            ariaLabelledBy: g,
            ariaDescribedBy: h,
            className: p,
            messageClassname: A,
            badges: f,
        } = e,
        v = (0, o.Lt)(t.flags, z.pr7.SENT_BY_SOCIAL_LAYER_INTEGRATION) ? t.applicationId : null,
        x = (0, _.h)(v);
    return (0, l.jsxs)(l.Fragment, {
        children: [
            !c && n,
            (0, l.jsxs)(m.H, {
                className: i()(W.wx, p),
                "aria-describedby": h,
                "aria-labelledby": g,
                children: [
                    u &&
                        c &&
                        (0, l.jsx)(F.A, {
                            id: (0, V.xl)(t),
                            compact: !0,
                            timestamp: t.timestamp,
                            isVisibleOnlyOnHover: d,
                            className: A,
                            isInline: !1,
                            application: x,
                        }),
                    c && n,
                    (0, l.jsx)("span", { id: s, className: r, children: a }),
                    u &&
                        !c &&
                        (0, l.jsx)(F.A, { id: (0, V.xl)(t), timestamp: t.timestamp, className: A, application: x }),
                    null != f && f.length > 0 ? (0, l.jsx)("div", { className: W.cV, children: f }) : null,
                ],
            }),
        ],
    });
}
function X(e, t, n, l) {
    return (!e || t) && null != n && null != l ? 1 : (!e || t) && null != n ? 2 : 0;
}
let Q = a.memo(function (e) {
    let {
            message: t,
            repliedMessage: n,
            compact: s = !1,
            renderPopout: d,
            showTimestampOnHover: m,
            roleIcon: _,
            subscribeToGroupId: f,
            hideTimestamp: v,
            hideGuildTag: x,
            className: C,
            channel: I,
            preview: E,
        } = e,
        S = a.useMemo(() => (null != d ? (e) => d(e, t) : void 0), [d, t]),
        [, U] = (0, N.Ay)(t.author.id, e.guildId),
        P = (0, c.bG)([D.A, O.A], () => {
            let n = O.A.getGuild(e.guildId);
            return null != t.author && null != n && D.A.canManageUser(z.xBc.MODERATE_MEMBERS, t.author, n);
        }, [t.author, e.guildId]),
        F = U && P,
        H = (function (e) {
            let {
                    props: t,
                    guildId: n,
                    handleRenderPopout: s,
                    showCommunicationDisabledStyles: i = !1,
                    className: o,
                } = e,
                {
                    message: u,
                    author: d,
                    compact: m = !1,
                    subscribeToGroupId: g,
                    animate: h = !0,
                    onContextMenu: _,
                    onClickAvatar: f,
                    onPopoutRequestClose: v,
                    showAvatarPopout: x,
                } = t,
                C = a.useRef(null),
                [I, N] = a.useState(!1),
                { analyticsLocations: E } = (0, A.Ay)(p.A.AVATAR),
                T = (0, c.bG)([L.default], () => L.default.getCurrentUser()),
                S = (0, c.bG)([w.Ay], () => t.displayCompactAvatars ?? w.Ay.displayCompactAvatars),
                y = (0, $.A)(u),
                O = m ? 32 : 80,
                { pendingAvatarDecoration: D } = (0, j.A)({ guildId: n }),
                U = (0, b.lw)({
                    pendingValue: u.author.id === T?.id ? D : void 0,
                    userValue: u.author?.avatarDecoration,
                    guildValue: d?.guildMemberAvatarDecoration,
                    guildId: n,
                }),
                {
                    avatarSrc: P,
                    avatarDecorationSrc: V,
                    eventHandlers: F,
                } = (0, R.A)({
                    userId: u.author.id,
                    guildId: n,
                    size: O,
                    animateOnHover: null != g ? !I : !h,
                    avatarDecorationOverride: U,
                    showPending: !0,
                }),
                H = u.isInteractionPlaceholder(),
                B = a.useMemo(
                    () =>
                        H && null == u.author.avatar && null == d.guildMemberAvatar && u.application?.icon != null
                            ? (k.Ay.getApplicationIconURL({
                                  id: u.application.id,
                                  icon: u.application.icon,
                                  size: O,
                                  fallbackAvatar: !1,
                              }) ?? P)
                            : null != u.webhookId && null == d.guildMemberAvatar
                              ? k.Ay.getUserAvatarURL(
                                    {
                                        avatar: u.author.avatar,
                                        id: u.author.id,
                                        discriminator: u.author.discriminator,
                                        bot: !0,
                                    },
                                    !1,
                                    O,
                                )
                              : P,
                    [
                        H,
                        u.author.avatar,
                        u.author.id,
                        u.author.discriminator,
                        u.application?.icon,
                        u.application?.id,
                        u.webhookId,
                        P,
                        O,
                        d.guildMemberAvatar,
                    ],
                );
            if (
                (a.useEffect(() => {
                    if (null != g)
                        return (
                            G._.subscribeKeyed(z.zOV.ANIMATE_CHAT_AVATAR, `${g}:${u.author.id}`, N),
                            () => void G._.unsubscribeKeyed(z.zOV.ANIMATE_CHAT_AVATAR, `${g}:${u.author.id}`, N)
                        );
                }, [u.author.id, g]),
                !m || S)
            )
                return null != s && null != x
                    ? (0, l.jsx)(A.f5, {
                          value: E,
                          children: (0, l.jsx)(M.A, {
                              targetElementRef: C,
                              user: u.author,
                              guildId: n,
                              channelId: u.channel_id,
                              messageId: u.id,
                              shouldShow: x,
                              shouldPreload: y,
                              renderPopout: s,
                              position: r.Fr ? "window_center" : "right",
                              avatarUrl: B,
                              onRequestClose: v,
                              clickTrap: x,
                              children: (e) =>
                                  J({
                                      ...F,
                                      avatarSrc: B,
                                      avatarDecorationSrc: V,
                                      compact: m,
                                      onClick: f,
                                      onContextMenu: _,
                                      onMouseDown: e.onMouseDown,
                                      onKeyDown: e.onKeyDown,
                                      showCommunicationDisabledStyles: i,
                                      className: o,
                                      avatarImgRef: C,
                                  }),
                          }),
                      })
                    : (0, l.jsx)(A.f5, {
                          value: E,
                          children: J({
                              ...F,
                              avatarSrc: B,
                              avatarDecorationSrc: V,
                              compact: m,
                              onClick: f,
                              onContextMenu: _,
                              onMouseDown: void 0,
                              onKeyDown: void 0,
                              showCommunicationDisabledStyles: i,
                              className: o,
                          }),
                      });
        })({ props: e, guildId: e.guildId, handleRenderPopout: S, showCommunicationDisabledStyles: F }),
        q = (0, c.bG)([w.Ay], () => e.displayCompactAvatars ?? w.Ay.displayCompactAvatars),
        Q = a.useMemo(
            () => (0, B.k)({ message: t, channel: I, user: t?.author, compact: s, isRepliedMessage: !1 }),
            [t, I, s],
        ),
        ee = (0, c.bG)([O.A], () => X(s, q, _, O.A.getGuild(e.guildId)), [s, q, _, e.guildId]),
        et = a.useMemo(() => {
            let e = [];
            return (
                (0, o.Lt)(t.flags, z.pr7.SUPPRESS_NOTIFICATIONS) &&
                    e.push((0, l.jsx)(y.A, {}, "suppress-notifications")),
                e
            );
        }, [t]),
        en = (0, V.d$)(t, f),
        el = (0, V.xl)(t),
        ea = v ? `${en}` : `${en} ${el}`,
        es = n?.state === T.a.LOADED ? (0, V.nS)(t) : void 0;
    return (0, l.jsx)(Z, {
        message: t,
        avatar: H,
        username: (0, l.jsxs)(l.Fragment, {
            children: [
                F &&
                    (0, l.jsx)(u.m, {
                        text: K.intl.string(K.t["AeYyL+"]),
                        children: (0, l.jsxs)(l.Fragment, {
                            children: [
                                (0, l.jsx)(g.g, { size: "xxs", color: "currentColor", className: s ? W.EI : W.bu }),
                                (0, l.jsx)(h.A, { children: K.intl.string(K.t.AmHag5) }),
                            ],
                        }),
                    }),
                (0, l.jsx)(Y, {
                    ...e,
                    message: t,
                    channel: I,
                    compact: s,
                    roleIconProps: _,
                    renderPopout: S,
                    preview: E,
                    subscribeToGroupId: f,
                    hideGuildTag: x,
                }),
            ],
        }),
        usernameSpanId: (0, V.d$)(t, f),
        usernameClassName: i()(W.TK, { [W.yF]: 0 !== ee, [W.hB]: null != Q || et.length > 0 }),
        compact: s,
        showTimestamp: !0 !== v,
        showTimestampOnHover: m,
        ariaLabelledBy: ea,
        ariaDescribedBy: es,
        className: C,
        badges: et,
    });
});
