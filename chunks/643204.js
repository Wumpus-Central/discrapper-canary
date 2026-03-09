"use strict";
n.d(t, { Ay: () => et, ix: () => Q, tO: () => q }), n(321073), n(938796);
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
    f = n(634202),
    x = n(870136),
    v = n(200759),
    j = n(87719),
    N = n(919395),
    b = n(9842),
    C = n(657048),
    E = n(93956),
    I = n(622543),
    R = n(352413),
    T = n(854627),
    y = n(576622),
    _ = n(342296),
    S = n(964404),
    M = n(71393),
    k = n(576705),
    O = n(287809),
    P = n(486020),
    w = n(203982),
    G = n(927578),
    D = n(101750),
    L = n(763754),
    U = n(635071),
    B = n(860227),
    $ = n(449859),
    H = n(855344),
    V = n(812299),
    F = n(109054),
    z = n(652215),
    K = n(985018),
    J = n(222590),
    Y = n(814803);
function W(e) {
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
                className: a()(h, J.my, { [J.oE]: i, [J.vk]: null != s, [J.uU]: m }),
                alt: " ",
            }),
            null == n || i ? null : (0, l.jsx)("img", { className: J.M, src: n, alt: " ", "aria-hidden": !0 }),
        ],
    });
}
let X = i.memo(function (e) {
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
            displayCompactAvatars: x = !1,
            onPopoutRequestClose: j,
            preview: N,
            subscribeToGroupId: b,
            hideGuildTag: E,
        } = e,
        I = (0, L.Ay)(t, n),
        R = i.useMemo(
            () => (0, V.y)({ message: t, channel: s, user: t?.author, compact: r, isRepliedMessage: !1 }),
            [t, s, r],
        ),
        T = i.useRef(null),
        y = (0, u.bG)([M.A], () => M.A.getGuild(a)),
        _ = i.useMemo(() => Z(r, x, o, y), [r, x, o, y]),
        S = i.useMemo(
            () =>
                null == o
                    ? null
                    : 1 === _ && null != y
                      ? (0, l.jsx)(
                            d.YNO,
                            {
                                targetElementRef: T,
                                animation: d.YNO.Animation.TRANSLATE,
                                align: "center",
                                autoInvert: !0,
                                nudgeAlignIntoViewport: !0,
                                position: "right",
                                renderPopout: () => (0, l.jsx)(H.A, { roleIcon: o, guild: y }),
                                clickTrap: !0,
                                children: (e) => {
                                    let { onClick: t } = e;
                                    return (0, l.jsx)(C.A, { ref: T, ...o, className: J.UT, onClick: t });
                                },
                            },
                            "role-icon-children",
                        )
                      : 2 === _
                        ? (0, l.jsx)(C.A, { ...o, className: J.UT }, "role-icon-children")
                        : null,
            [_, o, y],
        ),
        { enabled: k } = (0, p.D8)({ guildId: y?.id, location: "MessageHeader" }),
        P = (0, u.bG)([O.default], () => O.default.getCurrentUser()),
        w = i.useMemo(() => {
            let e = [],
                n = G.Ay.isPremium(t.author),
                i = G.Ay.isPremium(P),
                a = s?.isPrivate();
            return (
                (0, D.E)(null != o, "Message Username") &&
                    n &&
                    !r &&
                    !a &&
                    e.push((0, l.jsx)(ee, { currentUserIsPremium: i, author: t.author }, "nitro-author")),
                null != S && e.push(S),
                null != y &&
                    (e.push((0, l.jsx)(v.A, { guild: y, message: t }, "new-member")),
                    k && e.push((0, l.jsx)(A.A, { guild: y, message: t }, "voice-channel"))),
                null != s &&
                    null != y &&
                    e.push(
                        (0, l.jsx)(f.A, { guild: y, channel: s, userId: t.author.id, messageId: t.id }, "connections"),
                    ),
                e
            );
        }, [t, s, o, r, S, y, P, k]);
    return null == I
        ? null
        : (0, l.jsxs)(l.Fragment, {
              children: [
                  (0, l.jsx)(U.A, {
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
                      decorations: { [U.w.SYSTEM_TAG]: R, [U.w.BADGES]: w },
                      previewGuildId: a,
                      preview: N,
                      subscribeToGroupId: b,
                      hideGuildTag: E,
                  }),
                  r &&
                      (0, l.jsxs)(l.Fragment, { children: [(0, l.jsx)("i", { className: J.me, children: ":" }), " "] }),
              ],
          });
});
function q(e, t, n) {
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
            (0, l.jsx)(U.A, {
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
            r && (0, l.jsxs)(l.Fragment, { children: [(0, l.jsx)("i", { className: J.me, children: ":" }), " "] }),
        ],
    });
}
function Q(e) {
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
            messageClassname: f,
            badges: x,
        } = e,
        v = (0, o.Lt)(t.flags, z.pr7.SENT_BY_SOCIAL_LAYER_INTEGRATION) ? t.applicationId : null,
        j = (0, g.h)(v);
    return (0, l.jsxs)(l.Fragment, {
        children: [
            !u && n,
            (0, l.jsxs)(d.H, {
                className: a()(J.wx, A),
                "aria-describedby": p,
                "aria-labelledby": h,
                children: [
                    c &&
                        u &&
                        (0, l.jsx)($.A, {
                            id: (0, B.xl)(t),
                            compact: !0,
                            timestamp: t.timestamp,
                            isVisibleOnlyOnHover: m,
                            className: f,
                            isInline: !1,
                            application: j,
                        }),
                    u && n,
                    (0, l.jsx)("span", { id: s, className: r, children: i }),
                    c &&
                        !u &&
                        (0, l.jsx)($.A, { id: (0, B.xl)(t), timestamp: t.timestamp, className: f, application: j }),
                    null != x && x.length > 0 ? (0, l.jsx)("div", { className: J.cV, children: x }) : null,
                ],
            }),
        ],
    });
}
function Z(e, t, n, l) {
    return (!e || t) && null != n && null != l ? 1 : (!e || t) && null != n ? 2 : 0;
}
let ee = i.memo(function (e) {
        let { currentUserIsPremium: t, author: n } = e,
            i = (0, u.bG)([I.A], () => I.A.getUserProfile(n.id)?.premiumSince);
        return (0, l.jsx)(c.m, {
            asContainer: !0,
            shouldShow: null != i,
            text: K.intl.formatToPlainString(K.t["8zbGNR"], { date: i }),
            onTooltipShow: () => (0, y.A)(n.id),
            children: (0, l.jsx)(d.DUT, {
                className: J.vu,
                onClick: () => {
                    t || (0, j.e)();
                },
                "aria-label": K.intl.formatToPlainString(K.t["8zbGNR"], { date: i }),
                children: (0, l.jsx)("img", { alt: "", className: J.MP, src: Y }),
            }),
        });
    }),
    et = i.memo(function (e) {
        let {
                message: t,
                repliedMessage: n,
                compact: s = !1,
                renderPopout: g,
                showTimestampOnHover: p,
                roleIcon: A,
                subscribeToGroupId: f,
                hideTimestamp: v,
                hideGuildTag: j,
                className: C,
                channel: I,
                preview: y,
            } = e,
            G = i.useMemo(() => (null != g ? (e) => g(e, t) : void 0), [g, t]),
            [, D] = (0, x.Ay)(t.author.id, e.guildId),
            L = (0, u.bG)([k.A, M.A], () => {
                let n = M.A.getGuild(e.guildId);
                return null != t.author && null != n && k.A.canManageUser(z.xBc.MODERATE_MEMBERS, t.author, n);
            }, [t.author, e.guildId]),
            U = D && L,
            $ = (function (e) {
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
                        onContextMenu: f,
                        onClickAvatar: x,
                        onPopoutRequestClose: v,
                        showAvatarPopout: j,
                    } = t,
                    b = i.useRef(null),
                    [C, E] = i.useState(!1),
                    { analyticsLocations: I } = (0, h.Ay)(m.A.AVATAR),
                    y = (0, u.bG)([O.default], () => O.default.getCurrentUser()),
                    M = (0, u.bG)([S.Ay], () => t.displayCompactAvatars ?? S.Ay.displayCompactAvatars),
                    k = (0, F.A)(c),
                    G = g ? 32 : 80,
                    { pendingAvatarDecoration: D } = (0, R.A)({ guildId: n }),
                    L = (0, N.lw)({
                        pendingValue: c.author.id === y?.id ? D : void 0,
                        userValue: c.author?.avatarDecoration,
                        guildValue: d?.guildMemberAvatarDecoration,
                        guildId: n,
                    }),
                    {
                        avatarSrc: U,
                        avatarDecorationSrc: B,
                        eventHandlers: $,
                    } = (0, T.A)({
                        userId: c.author.id,
                        guildId: n,
                        size: G,
                        animateOnHover: null != p ? !C : !A,
                        avatarDecorationOverride: L,
                        showPending: !0,
                    }),
                    H = c.isInteractionPlaceholder(),
                    V = i.useMemo(
                        () =>
                            H && null == c.author.avatar && null == d.guildMemberAvatar && c.application?.icon != null
                                ? (P.Ay.getApplicationIconURL({
                                      id: c.application.id,
                                      icon: c.application.icon,
                                      size: G,
                                      fallbackAvatar: !1,
                                  }) ?? U)
                                : null != c.webhookId && null == d.guildMemberAvatar
                                  ? P.Ay.getUserAvatarURL(
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
                            H,
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
                    (i.useEffect(() => {
                        if (null != p)
                            return (
                                w._.subscribeKeyed(z.zOV.ANIMATE_CHAT_AVATAR, `${p}:${c.author.id}`, E),
                                () => void w._.unsubscribeKeyed(z.zOV.ANIMATE_CHAT_AVATAR, `${p}:${c.author.id}`, E)
                            );
                    }, [c.author.id, p]),
                    !g || M)
                )
                    return null != s && null != j
                        ? (0, l.jsx)(h.f5, {
                              value: I,
                              children: (0, l.jsx)(_.A, {
                                  targetElementRef: b,
                                  user: c.author,
                                  guildId: n,
                                  channelId: c.channel_id,
                                  messageId: c.id,
                                  shouldShow: j,
                                  shouldPreload: k,
                                  renderPopout: s,
                                  position: r.Fr ? "window_center" : "right",
                                  avatarUrl: V,
                                  onRequestClose: v,
                                  clickTrap: j,
                                  children: (e) =>
                                      W({
                                          ...$,
                                          avatarSrc: V,
                                          avatarDecorationSrc: B,
                                          compact: g,
                                          onClick: x,
                                          onContextMenu: f,
                                          onMouseDown: e.onMouseDown,
                                          onKeyDown: e.onKeyDown,
                                          showCommunicationDisabledStyles: a,
                                          className: o,
                                          avatarImgRef: b,
                                      }),
                              }),
                          })
                        : (0, l.jsx)(h.f5, {
                              value: I,
                              children: W({
                                  ...$,
                                  avatarSrc: V,
                                  avatarDecorationSrc: B,
                                  compact: g,
                                  onClick: x,
                                  onContextMenu: f,
                                  onMouseDown: void 0,
                                  onKeyDown: void 0,
                                  showCommunicationDisabledStyles: a,
                                  className: o,
                              }),
                          });
            })({ props: e, guildId: e.guildId, handleRenderPopout: G, showCommunicationDisabledStyles: U }),
            H = (0, u.bG)([S.Ay], () => e.displayCompactAvatars ?? S.Ay.displayCompactAvatars),
            Y = i.useMemo(
                () => (0, V.k)({ message: t, channel: I, user: t?.author, compact: s, isRepliedMessage: !1 }),
                [t, I, s],
            ),
            q = (0, u.bG)([M.A], () => Z(s, H, A, M.A.getGuild(e.guildId)), [s, H, A, e.guildId]),
            ee = i.useMemo(() => {
                let e = [];
                return (
                    (0, o.Lt)(t.flags, z.pr7.SUPPRESS_NOTIFICATIONS) &&
                        e.push((0, l.jsx)(E.A, {}, "suppress-notifications")),
                    e
                );
            }, [t]),
            et = (0, B.d$)(t, f),
            en = (0, B.xl)(t),
            el = v ? `${et}` : `${et} ${en}`,
            ei = n?.state === b.a.LOADED ? (0, B.nS)(t) : void 0;
        return (0, l.jsx)(Q, {
            message: t,
            avatar: $,
            username: (0, l.jsxs)(l.Fragment, {
                children: [
                    U &&
                        (0, l.jsx)(c.m, {
                            text: K.intl.string(K.t["AeYyL+"]),
                            children: (0, l.jsxs)(l.Fragment, {
                                children: [
                                    (0, l.jsx)(d.gQi, {
                                        size: "xxs",
                                        color: "currentColor",
                                        className: s ? J.EI : J.bu,
                                    }),
                                    (0, l.jsx)(d.AC4, { children: K.intl.string(K.t.AmHag5) }),
                                ],
                            }),
                        }),
                    (0, l.jsx)(X, {
                        ...e,
                        message: t,
                        channel: I,
                        compact: s,
                        roleIconProps: A,
                        renderPopout: G,
                        preview: y,
                        subscribeToGroupId: f,
                        hideGuildTag: j,
                    }),
                ],
            }),
            usernameSpanId: (0, B.d$)(t, f),
            usernameClassName: a()(J.TK, { [J.yF]: 0 !== q, [J.hB]: null != Y || ee.length > 0 }),
            compact: s,
            showTimestamp: !0 !== v,
            showTimestampOnHover: p,
            ariaLabelledBy: el,
            ariaDescribedBy: ei,
            className: C,
            badges: ee,
        });
    });
