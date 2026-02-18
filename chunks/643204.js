"use strict";
n.d(t, { Ay: () => Z, ix: () => X, tO: () => Y }), n(321073), n(938796);
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
    p = n(634202),
    A = n(870136),
    f = n(200759),
    x = n(87719),
    v = n(919395),
    N = n(9842),
    b = n(657048),
    j = n(93956),
    C = n(622543),
    E = n(352413),
    R = n(854627),
    I = n(576622),
    T = n(342296),
    y = n(964404),
    _ = n(71393),
    S = n(576705),
    M = n(287809),
    k = n(486020),
    O = n(203982),
    w = n(927578),
    P = n(101750),
    G = n(763754),
    D = n(635071),
    L = n(860227),
    U = n(449859),
    $ = n(855344),
    B = n(812299),
    H = n(109054),
    F = n(652215),
    V = n(985018),
    z = n(679740),
    K = n(814803);
function J(e) {
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
                className: r()(h, z.my, { [z.oE]: s, [z.vk]: null != i, [z.uU]: m }),
                alt: " ",
            }),
            null == n || s ? null : (0, l.jsx)("img", { className: z.M, src: n, alt: " ", "aria-hidden": !0 }),
        ],
    });
}
let W = s.memo(function (e) {
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
            displayCompactAvatars: A = !1,
            onPopoutRequestClose: x,
            preview: v,
            subscribeToGroupId: N,
            hideGuildTag: j,
        } = e,
        C = (0, G.Ay)(t, n),
        E = s.useMemo(
            () => (0, B.y)({ message: t, channel: i, user: t?.author, compact: a, isRepliedMessage: !1 }),
            [t, i, a],
        ),
        R = s.useRef(null),
        I = (0, u.bG)([_.A], () => _.A.getGuild(r)),
        T = s.useMemo(() => q(a, A, o, I), [a, A, o, I]),
        y = s.useMemo(
            () =>
                null == o
                    ? null
                    : 1 === T && null != I
                      ? (0, l.jsx)(
                            d.YNO,
                            {
                                targetElementRef: R,
                                animation: d.YNO.Animation.TRANSLATE,
                                align: "center",
                                autoInvert: !0,
                                nudgeAlignIntoViewport: !0,
                                position: "right",
                                renderPopout: () => (0, l.jsx)($.A, { roleIcon: o, guild: I }),
                                clickTrap: !0,
                                children: (e) => {
                                    let { onClick: t } = e;
                                    return (0, l.jsx)(b.A, { ref: R, ...o, className: z.UT, onClick: t });
                                },
                            },
                            "role-icon-children",
                        )
                      : 2 === T
                        ? (0, l.jsx)(b.A, { ...o, className: z.UT }, "role-icon-children")
                        : null,
            [T, o, I],
        ),
        S = (0, u.bG)([M.default], () => M.default.getCurrentUser()),
        k = s.useMemo(() => {
            let e = [],
                n = w.Ay.isPremium(t.author),
                s = w.Ay.isPremium(S),
                r = i?.isPrivate();
            return (
                (0, P.E)(null != o, "Message Username") &&
                    n &&
                    !a &&
                    !r &&
                    e.push((0, l.jsx)(Q, { currentUserIsPremium: s, author: t.author }, "nitro-author")),
                null != y && e.push(y),
                null != I && e.push((0, l.jsx)(f.A, { guild: I, message: t }, "new-member")),
                null != i &&
                    null != I &&
                    e.push(
                        (0, l.jsx)(p.A, { guild: I, channel: i, userId: t.author.id, messageId: t.id }, "connections"),
                    ),
                e
            );
        }, [t, i, o, a, y, I, S]);
    return null == C
        ? null
        : (0, l.jsxs)(l.Fragment, {
              children: [
                  (0, l.jsx)(D.A, {
                      message: t,
                      channel: i,
                      author: C,
                      compact: a,
                      roleIcon: o,
                      showPopout: c,
                      renderPopout: m,
                      onClick: h,
                      onContextMenu: g,
                      onPopoutRequestClose: x,
                      decorations: { [D.w.SYSTEM_TAG]: E, [D.w.BADGES]: k },
                      previewGuildId: r,
                      preview: v,
                      subscribeToGroupId: N,
                      hideGuildTag: j,
                  }),
                  a &&
                      (0, l.jsxs)(l.Fragment, { children: [(0, l.jsx)("i", { className: z.me, children: ":" }), " "] }),
              ],
          });
});
function Y(e, t, n) {
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
            (0, l.jsx)(D.A, {
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
            a && (0, l.jsxs)(l.Fragment, { children: [(0, l.jsx)("i", { className: z.me, children: ":" }), " "] }),
        ],
    });
}
function X(e) {
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
            ariaDescribedBy: p,
            className: A,
            messageClassname: f,
            badges: x,
        } = e,
        v = (0, o.Lt)(t.flags, F.pr7.SENT_BY_SOCIAL_LAYER_INTEGRATION) ? t.applicationId : null,
        N = (0, g.h)(v);
    return (0, l.jsxs)(l.Fragment, {
        children: [
            !u && n,
            (0, l.jsxs)(d.H, {
                className: r()(z.wx, A),
                "aria-describedby": p,
                "aria-labelledby": h,
                children: [
                    c &&
                        u &&
                        (0, l.jsx)(U.A, {
                            id: (0, L.xl)(t),
                            compact: !0,
                            timestamp: t.timestamp,
                            isVisibleOnlyOnHover: m,
                            className: f,
                            isInline: !1,
                            application: N,
                        }),
                    u && n,
                    (0, l.jsx)("span", { id: i, className: a, children: s }),
                    c &&
                        !u &&
                        (0, l.jsx)(U.A, { id: (0, L.xl)(t), timestamp: t.timestamp, className: f, application: N }),
                    null != x && x.length > 0 ? (0, l.jsx)("div", { className: z.cV, children: x }) : null,
                ],
            }),
        ],
    });
}
function q(e, t, n, l) {
    return (!e || t) && null != n && null != l ? 1 : (!e || t) && null != n ? 2 : 0;
}
let Q = s.memo(function (e) {
        let { currentUserIsPremium: t, author: n } = e,
            s = (0, u.bG)([C.A], () => C.A.getUserProfile(n.id)?.premiumSince);
        return (0, l.jsx)(c.m, {
            asContainer: !0,
            shouldShow: null != s,
            text: V.intl.formatToPlainString(V.t["8zbGNR"], { date: s }),
            onTooltipShow: () => (0, I.A)(n.id),
            children: (0, l.jsx)(d.DUT, {
                className: z.vu,
                onClick: () => {
                    t || (0, x.e)();
                },
                "aria-label": V.intl.formatToPlainString(V.t["8zbGNR"], { date: s }),
                children: (0, l.jsx)("img", { alt: "", className: z.MP, src: K }),
            }),
        });
    }),
    Z = s.memo(function (e) {
        let {
                message: t,
                repliedMessage: n,
                compact: i = !1,
                renderPopout: g,
                showTimestampOnHover: p,
                roleIcon: f,
                subscribeToGroupId: x,
                hideTimestamp: b,
                hideGuildTag: C,
                className: I,
                channel: w,
                preview: P,
            } = e,
            G = s.useMemo(() => (null != g ? (e) => g(e, t) : void 0), [g, t]),
            [, D] = (0, A.Ay)(t.author.id, e.guildId),
            U = (0, u.bG)([S.A, _.A], () => {
                let n = _.A.getGuild(e.guildId);
                return null != t.author && null != n && S.A.canManageUser(F.xBc.MODERATE_MEMBERS, t.author, n);
            }, [t.author, e.guildId]),
            $ = D && U,
            K = (function (e) {
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
                        subscribeToGroupId: p,
                        animate: A = !0,
                        onContextMenu: f,
                        onClickAvatar: x,
                        onPopoutRequestClose: N,
                        showAvatarPopout: b,
                    } = t,
                    j = s.useRef(null),
                    [C, I] = s.useState(!1),
                    { analyticsLocations: _ } = (0, h.Ay)(m.A.AVATAR),
                    S = (0, u.bG)([M.default], () => M.default.getCurrentUser()),
                    w = (0, u.bG)([y.Ay], () => t.displayCompactAvatars ?? y.Ay.displayCompactAvatars),
                    P = (0, H.A)(c),
                    G = g ? 32 : 80,
                    { pendingAvatarDecoration: D } = (0, E.A)({ guildId: n }),
                    L = (0, v.lw)({
                        pendingValue: c.author.id === S?.id ? D : void 0,
                        userValue: c.author?.avatarDecoration,
                        guildValue: d?.guildMemberAvatarDecoration,
                        guildId: n,
                    }),
                    {
                        avatarSrc: U,
                        avatarDecorationSrc: $,
                        eventHandlers: B,
                    } = (0, R.A)({
                        userId: c.author.id,
                        guildId: n,
                        size: G,
                        animateOnHover: null != p ? !C : !A,
                        avatarDecorationOverride: L,
                        showPending: !0,
                    }),
                    V = c.isInteractionPlaceholder(),
                    z = s.useMemo(
                        () =>
                            V && null == c.author.avatar && null == d.guildMemberAvatar && c.application?.icon != null
                                ? (k.Ay.getApplicationIconURL({
                                      id: c.application.id,
                                      icon: c.application.icon,
                                      size: G,
                                      fallbackAvatar: !1,
                                  }) ?? U)
                                : null != c.webhookId && null == d.guildMemberAvatar
                                  ? k.Ay.getUserAvatarURL(
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
                            V,
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
                        if (null != p)
                            return (
                                O._.subscribeKeyed(F.zOV.ANIMATE_CHAT_AVATAR, `${p}:${c.author.id}`, I),
                                () => void O._.unsubscribeKeyed(F.zOV.ANIMATE_CHAT_AVATAR, `${p}:${c.author.id}`, I)
                            );
                    }, [c.author.id, p]),
                    !g || w)
                )
                    return null != i && null != b
                        ? (0, l.jsx)(h.f5, {
                              value: _,
                              children: (0, l.jsx)(T.A, {
                                  targetElementRef: j,
                                  user: c.author,
                                  guildId: n,
                                  channelId: c.channel_id,
                                  messageId: c.id,
                                  shouldShow: b,
                                  shouldPreload: P,
                                  renderPopout: i,
                                  position: a.Fr ? "window_center" : "right",
                                  avatarUrl: z,
                                  onRequestClose: N,
                                  clickTrap: b,
                                  children: (e) =>
                                      J({
                                          ...B,
                                          avatarSrc: z,
                                          avatarDecorationSrc: $,
                                          compact: g,
                                          onClick: x,
                                          onContextMenu: f,
                                          onMouseDown: e.onMouseDown,
                                          onKeyDown: e.onKeyDown,
                                          showCommunicationDisabledStyles: r,
                                          className: o,
                                          avatarImgRef: j,
                                      }),
                              }),
                          })
                        : (0, l.jsx)(h.f5, {
                              value: _,
                              children: J({
                                  ...B,
                                  avatarSrc: z,
                                  avatarDecorationSrc: $,
                                  compact: g,
                                  onClick: x,
                                  onContextMenu: f,
                                  onMouseDown: void 0,
                                  onKeyDown: void 0,
                                  showCommunicationDisabledStyles: r,
                                  className: o,
                              }),
                          });
            })({ props: e, guildId: e.guildId, handleRenderPopout: G, showCommunicationDisabledStyles: $ }),
            Y = (0, u.bG)([y.Ay], () => e.displayCompactAvatars ?? y.Ay.displayCompactAvatars),
            Q = s.useMemo(
                () => (0, B.k)({ message: t, channel: w, user: t?.author, compact: i, isRepliedMessage: !1 }),
                [t, w, i],
            ),
            Z = (0, u.bG)([_.A], () => q(i, Y, f, _.A.getGuild(e.guildId)), [i, Y, f, e.guildId]),
            ee = s.useMemo(() => {
                let e = [];
                return (
                    (0, o.Lt)(t.flags, F.pr7.SUPPRESS_NOTIFICATIONS) &&
                        e.push((0, l.jsx)(j.A, {}, "suppress-notifications")),
                    e
                );
            }, [t]),
            et = (0, L.d$)(t, x),
            en = (0, L.xl)(t),
            el = b ? `${et}` : `${et} ${en}`,
            es = n?.state === N.a.LOADED ? (0, L.nS)(t) : void 0;
        return (0, l.jsx)(X, {
            message: t,
            avatar: K,
            username: (0, l.jsxs)(l.Fragment, {
                children: [
                    $ &&
                        (0, l.jsx)(c.m, {
                            text: V.intl.string(V.t["AeYyL+"]),
                            children: (0, l.jsxs)(l.Fragment, {
                                children: [
                                    (0, l.jsx)(d.gQi, {
                                        size: "xxs",
                                        color: "currentColor",
                                        className: i ? z.EI : z.bu,
                                    }),
                                    (0, l.jsx)(d.AC4, { children: V.intl.string(V.t.AmHag5) }),
                                ],
                            }),
                        }),
                    (0, l.jsx)(W, {
                        ...e,
                        message: t,
                        channel: w,
                        compact: i,
                        roleIconProps: f,
                        renderPopout: G,
                        preview: P,
                        subscribeToGroupId: x,
                        hideGuildTag: C,
                    }),
                ],
            }),
            usernameSpanId: (0, L.d$)(t, x),
            usernameClassName: r()(z.TK, { [z.yF]: 0 !== Z, [z.hB]: null != Q || ee.length > 0 }),
            compact: i,
            showTimestamp: !0 !== b,
            showTimestampOnHover: p,
            ariaLabelledBy: el,
            ariaDescribedBy: es,
            className: I,
            badges: ee,
        });
    });
