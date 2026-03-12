"use strict";
n.d(t, { Ay: () => Y, ix: () => K, tO: () => z }), n(321073), n(938796);
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
    h = n(688810),
    g = n(429913),
    p = n(593643),
    A = n(802341),
    x = n(634202),
    f = n(870136),
    v = n(200759),
    j = n(919395),
    N = n(9842),
    C = n(657048),
    b = n(93956),
    E = n(352413),
    I = n(854627),
    y = n(342296),
    T = n(964404),
    R = n(71393),
    _ = n(576705),
    S = n(287809),
    M = n(486020),
    k = n(203982),
    O = n(763754),
    w = n(635071),
    G = n(860227),
    D = n(449859),
    P = n(855344),
    L = n(812299),
    U = n(109054),
    $ = n(652215),
    H = n(985018),
    V = n(222590);
function B(e) {
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
        className: h,
        avatarImgRef: g,
    } = e;
    return (0, l.jsxs)(l.Fragment, {
        children: [
            (0, l.jsx)("img", {
                ref: g,
                onClick: s,
                onContextMenu: r,
                onKeyDown: d,
                onMouseDown: o,
                onMouseEnter: u,
                onMouseLeave: c,
                src: t,
                "aria-hidden": !0,
                className: a()(h, V.my, { [V.oE]: i, [V.vk]: null != s, [V.uU]: m }),
                alt: " ",
            }),
            null == n || i ? null : (0, l.jsx)("img", { className: V.M, src: n, alt: " ", "aria-hidden": !0 }),
        ],
    });
}
let F = i.memo(function (e) {
    let {
            message: t,
            author: n,
            channel: s,
            guildId: a,
            compact: r = !1,
            roleIconProps: o,
            showUsernamePopout: c,
            renderPopout: m,
            onClickUsername: h,
            onContextMenu: g,
            displayCompactAvatars: f = !1,
            onPopoutRequestClose: j,
            preview: N,
            subscribeToGroupId: b,
            hideGuildTag: E,
        } = e,
        I = (0, O.Ay)(t, n),
        y = i.useMemo(
            () => (0, L.y)({ message: t, channel: s, user: t?.author, compact: r, isRepliedMessage: !1 }),
            [t, s, r],
        ),
        T = i.useRef(null),
        _ = (0, u.bG)([R.A], () => R.A.getGuild(a)),
        S = i.useMemo(() => J(r, f, o, _), [r, f, o, _]),
        M = i.useMemo(
            () =>
                null == o
                    ? null
                    : 1 === S && null != _
                      ? (0, l.jsx)(
                            d.YNO,
                            {
                                targetElementRef: T,
                                animation: d.YNO.Animation.TRANSLATE,
                                align: "center",
                                autoInvert: !0,
                                nudgeAlignIntoViewport: !0,
                                position: "right",
                                renderPopout: () => (0, l.jsx)(P.A, { roleIcon: o, guild: _ }),
                                clickTrap: !0,
                                children: (e) => {
                                    let { onClick: t } = e;
                                    return (0, l.jsx)(C.A, { ref: T, ...o, className: V.UT, onClick: t });
                                },
                            },
                            "role-icon-children",
                        )
                      : 2 === S
                        ? (0, l.jsx)(C.A, { ...o, className: V.UT }, "role-icon-children")
                        : null,
            [S, o, _],
        ),
        { enabled: k } = (0, p.D8)({ guildId: _?.id, location: "MessageHeader" }),
        G = i.useMemo(() => {
            let e = [];
            return (
                null != M && e.push(M),
                null != _ &&
                    (e.push((0, l.jsx)(v.A, { guild: _, message: t }, "new-member")),
                    k && e.push((0, l.jsx)(A.A, { guild: _, message: t }, "voice-channel"))),
                null != s &&
                    null != _ &&
                    e.push(
                        (0, l.jsx)(x.A, { guild: _, channel: s, userId: t.author.id, messageId: t.id }, "connections"),
                    ),
                e
            );
        }, [t, s, M, _, k]);
    return null == I
        ? null
        : (0, l.jsxs)(l.Fragment, {
              children: [
                  (0, l.jsx)(w.A, {
                      message: t,
                      channel: s,
                      author: I,
                      compact: r,
                      roleIcon: o,
                      showPopout: c,
                      renderPopout: m,
                      onClick: h,
                      onContextMenu: g,
                      onPopoutRequestClose: j,
                      decorations: { [w.w.SYSTEM_TAG]: y, [w.w.BADGES]: G },
                      previewGuildId: a,
                      preview: N,
                      subscribeToGroupId: b,
                      hideGuildTag: E,
                  }),
                  r &&
                      (0, l.jsxs)(l.Fragment, { children: [(0, l.jsx)("i", { className: V.me, children: ":" }), " "] }),
              ],
          });
});
function z(e, t, n) {
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
            (0, l.jsx)(w.A, {
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
            r && (0, l.jsxs)(l.Fragment, { children: [(0, l.jsx)("i", { className: V.me, children: ":" }), " "] }),
        ],
    });
}
function K(e) {
    let {
            message: t,
            avatar: n,
            username: i,
            usernameSpanId: s,
            usernameClassName: r,
            compact: u,
            showTimestamp: c,
            showTimestampOnHover: m,
            ariaLabelledBy: h,
            ariaDescribedBy: p,
            className: A,
            messageClassname: x,
            badges: f,
        } = e,
        v = (0, o.Lt)(t.flags, $.pr7.SENT_BY_SOCIAL_LAYER_INTEGRATION) ? t.applicationId : null,
        j = (0, g.h)(v);
    return (0, l.jsxs)(l.Fragment, {
        children: [
            !u && n,
            (0, l.jsxs)(d.H, {
                className: a()(V.wx, A),
                "aria-describedby": p,
                "aria-labelledby": h,
                children: [
                    c &&
                        u &&
                        (0, l.jsx)(D.A, {
                            id: (0, G.xl)(t),
                            compact: !0,
                            timestamp: t.timestamp,
                            isVisibleOnlyOnHover: m,
                            className: x,
                            isInline: !1,
                            application: j,
                        }),
                    u && n,
                    (0, l.jsx)("span", { id: s, className: r, children: i }),
                    c &&
                        !u &&
                        (0, l.jsx)(D.A, { id: (0, G.xl)(t), timestamp: t.timestamp, className: x, application: j }),
                    null != f && f.length > 0 ? (0, l.jsx)("div", { className: V.cV, children: f }) : null,
                ],
            }),
        ],
    });
}
function J(e, t, n, l) {
    return (!e || t) && null != n && null != l ? 1 : (!e || t) && null != n ? 2 : 0;
}
let Y = i.memo(function (e) {
    let {
            message: t,
            repliedMessage: n,
            compact: s = !1,
            renderPopout: g,
            showTimestampOnHover: p,
            roleIcon: A,
            subscribeToGroupId: x,
            hideTimestamp: v,
            hideGuildTag: C,
            className: O,
            channel: w,
            preview: D,
        } = e,
        P = i.useMemo(() => (null != g ? (e) => g(e, t) : void 0), [g, t]),
        [, z] = (0, f.Ay)(t.author.id, e.guildId),
        Y = (0, u.bG)([_.A, R.A], () => {
            let n = R.A.getGuild(e.guildId);
            return null != t.author && null != n && _.A.canManageUser($.xBc.MODERATE_MEMBERS, t.author, n);
        }, [t.author, e.guildId]),
        W = z && Y,
        X = (function (e) {
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
                    compact: g = !1,
                    subscribeToGroupId: p,
                    animate: A = !0,
                    onContextMenu: x,
                    onClickAvatar: f,
                    onPopoutRequestClose: v,
                    showAvatarPopout: N,
                } = t,
                C = i.useRef(null),
                [b, R] = i.useState(!1),
                { analyticsLocations: _ } = (0, h.Ay)(m.A.AVATAR),
                O = (0, u.bG)([S.default], () => S.default.getCurrentUser()),
                w = (0, u.bG)([T.Ay], () => t.displayCompactAvatars ?? T.Ay.displayCompactAvatars),
                G = (0, U.A)(c),
                D = g ? 32 : 80,
                { pendingAvatarDecoration: P } = (0, E.A)({ guildId: n }),
                L = (0, j.lw)({
                    pendingValue: c.author.id === O?.id ? P : void 0,
                    userValue: c.author?.avatarDecoration,
                    guildValue: d?.guildMemberAvatarDecoration,
                    guildId: n,
                }),
                {
                    avatarSrc: H,
                    avatarDecorationSrc: V,
                    eventHandlers: F,
                } = (0, I.A)({
                    userId: c.author.id,
                    guildId: n,
                    size: D,
                    animateOnHover: null != p ? !b : !A,
                    avatarDecorationOverride: L,
                    showPending: !0,
                }),
                z = c.isInteractionPlaceholder(),
                K = i.useMemo(
                    () =>
                        z && null == c.author.avatar && null == d.guildMemberAvatar && c.application?.icon != null
                            ? (M.Ay.getApplicationIconURL({
                                  id: c.application.id,
                                  icon: c.application.icon,
                                  size: D,
                                  fallbackAvatar: !1,
                              }) ?? H)
                            : null != c.webhookId && null == d.guildMemberAvatar
                              ? M.Ay.getUserAvatarURL(
                                    {
                                        avatar: c.author.avatar,
                                        id: c.author.id,
                                        discriminator: c.author.discriminator,
                                        bot: !0,
                                    },
                                    !1,
                                    D,
                                )
                              : H,
                    [
                        z,
                        c.author.avatar,
                        c.author.id,
                        c.author.discriminator,
                        c.application?.icon,
                        c.application?.id,
                        c.webhookId,
                        H,
                        D,
                        d.guildMemberAvatar,
                    ],
                );
            if (
                (i.useEffect(() => {
                    if (null != p)
                        return (
                            k._.subscribeKeyed($.zOV.ANIMATE_CHAT_AVATAR, `${p}:${c.author.id}`, R),
                            () => void k._.unsubscribeKeyed($.zOV.ANIMATE_CHAT_AVATAR, `${p}:${c.author.id}`, R)
                        );
                }, [c.author.id, p]),
                !g || w)
            )
                return null != s && null != N
                    ? (0, l.jsx)(h.f5, {
                          value: _,
                          children: (0, l.jsx)(y.A, {
                              targetElementRef: C,
                              user: c.author,
                              guildId: n,
                              channelId: c.channel_id,
                              messageId: c.id,
                              shouldShow: N,
                              shouldPreload: G,
                              renderPopout: s,
                              position: r.Fr ? "window_center" : "right",
                              avatarUrl: K,
                              onRequestClose: v,
                              clickTrap: N,
                              children: (e) =>
                                  B({
                                      ...F,
                                      avatarSrc: K,
                                      avatarDecorationSrc: V,
                                      compact: g,
                                      onClick: f,
                                      onContextMenu: x,
                                      onMouseDown: e.onMouseDown,
                                      onKeyDown: e.onKeyDown,
                                      showCommunicationDisabledStyles: a,
                                      className: o,
                                      avatarImgRef: C,
                                  }),
                          }),
                      })
                    : (0, l.jsx)(h.f5, {
                          value: _,
                          children: B({
                              ...F,
                              avatarSrc: K,
                              avatarDecorationSrc: V,
                              compact: g,
                              onClick: f,
                              onContextMenu: x,
                              onMouseDown: void 0,
                              onKeyDown: void 0,
                              showCommunicationDisabledStyles: a,
                              className: o,
                          }),
                      });
        })({ props: e, guildId: e.guildId, handleRenderPopout: P, showCommunicationDisabledStyles: W }),
        q = (0, u.bG)([T.Ay], () => e.displayCompactAvatars ?? T.Ay.displayCompactAvatars),
        Q = i.useMemo(
            () => (0, L.k)({ message: t, channel: w, user: t?.author, compact: s, isRepliedMessage: !1 }),
            [t, w, s],
        ),
        Z = (0, u.bG)([R.A], () => J(s, q, A, R.A.getGuild(e.guildId)), [s, q, A, e.guildId]),
        ee = i.useMemo(() => {
            let e = [];
            return (
                (0, o.Lt)(t.flags, $.pr7.SUPPRESS_NOTIFICATIONS) &&
                    e.push((0, l.jsx)(b.A, {}, "suppress-notifications")),
                e
            );
        }, [t]),
        et = (0, G.d$)(t, x),
        en = (0, G.xl)(t),
        el = v ? `${et}` : `${et} ${en}`,
        ei = n?.state === N.a.LOADED ? (0, G.nS)(t) : void 0;
    return (0, l.jsx)(K, {
        message: t,
        avatar: X,
        username: (0, l.jsxs)(l.Fragment, {
            children: [
                W &&
                    (0, l.jsx)(c.m, {
                        text: H.intl.string(H.t["AeYyL+"]),
                        children: (0, l.jsxs)(l.Fragment, {
                            children: [
                                (0, l.jsx)(d.gQi, { size: "xxs", color: "currentColor", className: s ? V.EI : V.bu }),
                                (0, l.jsx)(d.AC4, { children: H.intl.string(H.t.AmHag5) }),
                            ],
                        }),
                    }),
                (0, l.jsx)(F, {
                    ...e,
                    message: t,
                    channel: w,
                    compact: s,
                    roleIconProps: A,
                    renderPopout: P,
                    preview: D,
                    subscribeToGroupId: x,
                    hideGuildTag: C,
                }),
            ],
        }),
        usernameSpanId: (0, G.d$)(t, x),
        usernameClassName: a()(V.TK, { [V.yF]: 0 !== Z, [V.hB]: null != Q || ee.length > 0 }),
        compact: s,
        showTimestamp: !0 !== v,
        showTimestampOnHover: p,
        ariaLabelledBy: el,
        ariaDescribedBy: ei,
        className: O,
        badges: ee,
    });
});
