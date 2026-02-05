"use strict";
n.d(t, { Ay: () => er, ix: () => J, tO: () => Q }), n(321073), n(938796);
var r = n(627968),
    i = n(64700),
    a = n(503698),
    s = n.n(a),
    o = n(607399),
    l = n(665260),
    u = n(311907),
    c = n(990078),
    d = n(397927),
    _ = n(793574),
    f = n(688810),
    p = n(429913),
    h = n(634202),
    m = n(870136),
    g = n(200759),
    E = n(87719),
    A = n(919395),
    I = n(9842),
    T = n(657048),
    y = n(93956),
    S = n(622543),
    v = n(352413),
    C = n(854627),
    b = n(576622),
    N = n(342296),
    R = n(964404),
    O = n(71393),
    D = n(576705),
    L = n(287809),
    w = n(486020),
    x = n(203982),
    P = n(927578),
    M = n(101750),
    k = n(763754),
    U = n(635071),
    G = n(860227),
    V = n(449859),
    F = n(855344),
    B = n(812299),
    j = n(109054),
    H = n(652215),
    Y = n(985018),
    W = n(679740),
    K = n(814803);
let z = 32,
    $ = 80;
function q(e) {
    let {
        avatarSrc: t,
        avatarDecorationSrc: n,
        compact: i,
        onClick: a,
        onContextMenu: o,
        onMouseDown: l,
        onMouseEnter: u,
        onMouseLeave: c,
        onKeyDown: d,
        showCommunicationDisabledStyles: _ = !1,
        className: f,
        avatarImgRef: p,
    } = e;
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)("img", {
                ref: p,
                onClick: a,
                onContextMenu: o,
                onKeyDown: d,
                onMouseDown: l,
                onMouseEnter: u,
                onMouseLeave: c,
                src: t,
                "aria-hidden": !0,
                className: s()(f, W.my, { [W.oE]: i, [W.vk]: null != a, [W.uU]: _ }),
                alt: " ",
            }),
            null == n || i ? null : (0, r.jsx)("img", { className: W.M, src: n, alt: " ", "aria-hidden": !0 }),
        ],
    });
}
let Z = i.memo(function (e) {
    let {
            message: t,
            author: n,
            channel: a,
            guildId: s,
            compact: o = !1,
            roleIconProps: l,
            showUsernamePopout: c,
            renderPopout: _,
            onClickUsername: f,
            onContextMenu: p,
            displayCompactAvatars: m = !1,
            onPopoutRequestClose: E,
            preview: A,
            subscribeToGroupId: I,
            hideGuildTag: y,
        } = e,
        S = (0, k.Ay)(t, n),
        v = i.useMemo(
            () => (0, B.y)({ message: t, channel: a, user: t?.author, compact: o, isRepliedMessage: !1 }),
            [t, a, o],
        ),
        C = i.useRef(null),
        b = (0, u.bG)([O.A], () => O.A.getGuild(s)),
        N = i.useMemo(() => et(o, m, l, b), [o, m, l, b]),
        R = i.useMemo(
            () =>
                null == l
                    ? null
                    : 1 === N && null != b
                      ? (0, r.jsx)(
                            d.YNO,
                            {
                                targetElementRef: C,
                                animation: d.YNO.Animation.TRANSLATE,
                                align: "center",
                                autoInvert: !0,
                                nudgeAlignIntoViewport: !0,
                                position: "right",
                                renderPopout: () => (0, r.jsx)(F.A, { roleIcon: l, guild: b }),
                                clickTrap: !0,
                                children: (e) => {
                                    let { onClick: t } = e;
                                    return (0, r.jsx)(T.A, { ref: C, ...l, className: W.UT, onClick: t });
                                },
                            },
                            "role-icon-children",
                        )
                      : 2 === N
                        ? (0, r.jsx)(T.A, { ...l, className: W.UT }, "role-icon-children")
                        : null,
            [N, l, b],
        ),
        D = (0, u.bG)([L.default], () => L.default.getCurrentUser()),
        w = i.useMemo(() => {
            let e = [],
                n = P.Ay.isPremium(t.author),
                i = P.Ay.isPremium(D),
                s = a?.isPrivate();
            return (
                (0, M.E)(null != l, "Message Username") &&
                    n &&
                    !o &&
                    !s &&
                    e.push((0, r.jsx)(en, { currentUserIsPremium: i, author: t.author }, "nitro-author")),
                null != R && e.push(R),
                null != b && e.push((0, r.jsx)(g.A, { guild: b, message: t }, "new-member")),
                null != a &&
                    null != b &&
                    e.push(
                        (0, r.jsx)(h.A, { guild: b, channel: a, userId: t.author.id, messageId: t.id }, "connections"),
                    ),
                e
            );
        }, [t, a, l, o, R, b, D]);
    return null == S
        ? null
        : (0, r.jsxs)(r.Fragment, {
              children: [
                  (0, r.jsx)(U.A, {
                      message: t,
                      channel: a,
                      author: S,
                      compact: o,
                      roleIcon: l,
                      showPopout: c,
                      renderPopout: _,
                      onClick: f,
                      onContextMenu: p,
                      onPopoutRequestClose: E,
                      decorations: { [U.w.SYSTEM_TAG]: v, [U.w.BADGES]: w },
                      previewGuildId: s,
                      preview: A,
                      subscribeToGroupId: I,
                      hideGuildTag: y,
                  }),
                  o &&
                      (0, r.jsxs)(r.Fragment, { children: [(0, r.jsx)("i", { className: W.me, children: ":" }), " "] }),
              ],
          });
});
function Q(e, t, n) {
    let {
        message: i,
        channel: a,
        author: s,
        compact: o = !1,
        onContextMenu: l,
        showUsernamePopout: u,
        roleIcon: c,
        onClickUsername: d,
        onPopoutRequestClose: _,
    } = e;
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(U.A, {
                message: i,
                channel: a,
                author: s,
                compact: o,
                roleIcon: c,
                showPopout: u,
                renderPopout: t,
                onClick: d,
                onContextMenu: l,
                onPopoutRequestClose: _,
                decorations: n,
                preview: !0,
            }),
            o && (0, r.jsxs)(r.Fragment, { children: [(0, r.jsx)("i", { className: W.me, children: ":" }), " "] }),
        ],
    });
}
function X(e) {
    let { props: t, guildId: n, handleRenderPopout: a, showCommunicationDisabledStyles: s = !1, className: l } = e,
        {
            message: c,
            author: d,
            compact: p = !1,
            subscribeToGroupId: h,
            animate: m = !0,
            onContextMenu: g,
            onClickAvatar: E,
            onPopoutRequestClose: I,
            showAvatarPopout: T,
        } = t,
        y = i.useRef(null),
        [S, b] = i.useState(!1),
        { analyticsLocations: O } = (0, f.Ay)(_.A.AVATAR),
        D = (0, u.bG)([L.default], () => L.default.getCurrentUser()),
        P = (0, u.bG)([R.Ay], () => t.displayCompactAvatars ?? R.Ay.displayCompactAvatars),
        M = (0, j.A)(c),
        k = p ? z : $,
        { pendingAvatarDecoration: U } = (0, v.A)({ guildId: n }),
        G = (0, A.lw)({
            pendingValue: c.author.id === D?.id ? U : void 0,
            userValue: c.author?.avatarDecoration,
            guildValue: d?.guildMemberAvatarDecoration,
            guildId: n,
        }),
        {
            avatarSrc: V,
            avatarDecorationSrc: F,
            eventHandlers: B,
        } = (0, C.A)({
            userId: c.author.id,
            guildId: n,
            size: k,
            animateOnHover: null != h ? !S : !m,
            avatarDecorationOverride: G,
            showPending: !0,
        }),
        Y = c.isInteractionPlaceholder(),
        W = i.useMemo(
            () =>
                Y && null == c.author.avatar && null == d.guildMemberAvatar && c.application?.icon != null
                    ? (w.Ay.getApplicationIconURL({
                          id: c.application.id,
                          icon: c.application.icon,
                          size: k,
                          fallbackAvatar: !1,
                      }) ?? V)
                    : null != c.webhookId && null == d.guildMemberAvatar
                      ? w.Ay.getUserAvatarURL(
                            {
                                avatar: c.author.avatar,
                                id: c.author.id,
                                discriminator: c.author.discriminator,
                                bot: !0,
                            },
                            !1,
                            k,
                        )
                      : V,
            [
                Y,
                c.author.avatar,
                c.author.id,
                c.author.discriminator,
                c.application?.icon,
                c.application?.id,
                c.webhookId,
                V,
                k,
                d.guildMemberAvatar,
            ],
        );
    if (
        (i.useEffect(() => {
            if (null != h)
                return (
                    x._.subscribeKeyed(H.zOV.ANIMATE_CHAT_AVATAR, `${h}:${c.author.id}`, b),
                    () => void x._.unsubscribeKeyed(H.zOV.ANIMATE_CHAT_AVATAR, `${h}:${c.author.id}`, b)
                );
        }, [c.author.id, h]),
        !p || P)
    )
        return null != a && null != T
            ? (0, r.jsx)(f.f5, {
                  value: O,
                  children: (0, r.jsx)(N.A, {
                      targetElementRef: y,
                      user: c.author,
                      guildId: n,
                      channelId: c.channel_id,
                      messageId: c.id,
                      shouldShow: T,
                      shouldPreload: M,
                      renderPopout: a,
                      position: o.Fr ? "window_center" : "right",
                      avatarUrl: W,
                      onRequestClose: I,
                      clickTrap: T,
                      children: (e) =>
                          q({
                              ...B,
                              avatarSrc: W,
                              avatarDecorationSrc: F,
                              compact: p,
                              onClick: E,
                              onContextMenu: g,
                              onMouseDown: e.onMouseDown,
                              onKeyDown: e.onKeyDown,
                              showCommunicationDisabledStyles: s,
                              className: l,
                              avatarImgRef: y,
                          }),
                  }),
              })
            : (0, r.jsx)(f.f5, {
                  value: O,
                  children: q({
                      ...B,
                      avatarSrc: W,
                      avatarDecorationSrc: F,
                      compact: p,
                      onClick: E,
                      onContextMenu: g,
                      onMouseDown: void 0,
                      onKeyDown: void 0,
                      showCommunicationDisabledStyles: s,
                      className: l,
                  }),
              });
}
function J(e) {
    let {
            message: t,
            avatar: n,
            username: i,
            usernameSpanId: a,
            usernameClassName: o,
            compact: u,
            showTimestamp: c,
            showTimestampOnHover: _,
            ariaLabelledBy: f,
            ariaDescribedBy: h,
            className: m,
            messageClassname: g,
            badges: E,
        } = e,
        A = (0, l.Lt)(t.flags, H.pr7.SENT_BY_SOCIAL_LAYER_INTEGRATION) ? t.applicationId : null,
        I = (0, p.h)(A);
    return (0, r.jsxs)(r.Fragment, {
        children: [
            !u && n,
            (0, r.jsxs)(d.H, {
                className: s()(W.wx, m),
                "aria-describedby": h,
                "aria-labelledby": f,
                children: [
                    c &&
                        u &&
                        (0, r.jsx)(V.A, {
                            id: (0, G.xl)(t),
                            compact: !0,
                            timestamp: t.timestamp,
                            isVisibleOnlyOnHover: _,
                            className: g,
                            isInline: !1,
                            application: I,
                        }),
                    u && n,
                    (0, r.jsx)("span", { id: a, className: o, children: i }),
                    c &&
                        !u &&
                        (0, r.jsx)(V.A, { id: (0, G.xl)(t), timestamp: t.timestamp, className: g, application: I }),
                    null != E && E.length > 0 ? (0, r.jsx)("div", { className: W.cV, children: E }) : null,
                ],
            }),
        ],
    });
}
let ee = (e) => {
    e || (0, E.e)();
};
function et(e, t, n, r) {
    return (!e || t) && null != n && null != r ? 1 : (!e || t) && null != n ? 2 : 0;
}
let en = i.memo(function (e) {
        let { currentUserIsPremium: t, author: n } = e,
            i = (0, u.bG)([S.A], () => S.A.getUserProfile(n.id)?.premiumSince);
        return (0, r.jsx)(c.m, {
            asContainer: !0,
            shouldShow: null != i,
            text: Y.intl.formatToPlainString(Y.t["8zbGNR"], { date: i }),
            onTooltipShow: () => (0, b.A)(n.id),
            children: (0, r.jsx)(d.DUT, {
                className: W.vu,
                onClick: () => ee(t),
                "aria-label": Y.intl.formatToPlainString(Y.t["8zbGNR"], { date: i }),
                children: (0, r.jsx)("img", { alt: "", className: W.MP, src: K }),
            }),
        });
    }),
    er = i.memo(function (e) {
        let {
                message: t,
                repliedMessage: n,
                compact: a = !1,
                renderPopout: o,
                showTimestampOnHover: _,
                roleIcon: f,
                subscribeToGroupId: p,
                hideTimestamp: h,
                hideGuildTag: g,
                className: E,
                channel: A,
                preview: T,
            } = e,
            S = i.useMemo(() => (null != o ? (e) => o(e, t) : void 0), [o, t]),
            [, v] = (0, m.Ay)(t.author.id, e.guildId),
            C = (0, u.bG)([D.A, O.A], () => {
                let n = O.A.getGuild(e.guildId);
                return null != t.author && null != n && D.A.canManageUser(H.xBc.MODERATE_MEMBERS, t.author, n);
            }, [t.author, e.guildId]),
            b = v && C,
            N = X({ props: e, guildId: e.guildId, handleRenderPopout: S, showCommunicationDisabledStyles: b }),
            L = (0, u.bG)([R.Ay], () => e.displayCompactAvatars ?? R.Ay.displayCompactAvatars),
            w = i.useMemo(
                () => (0, B.k)({ message: t, channel: A, user: t?.author, compact: a, isRepliedMessage: !1 }),
                [t, A, a],
            ),
            x = (0, u.bG)([O.A], () => et(a, L, f, O.A.getGuild(e.guildId)), [a, L, f, e.guildId]),
            P = i.useMemo(() => {
                let e = [];
                return (
                    (0, l.Lt)(t.flags, H.pr7.SUPPRESS_NOTIFICATIONS) &&
                        e.push((0, r.jsx)(y.A, {}, "suppress-notifications")),
                    e
                );
            }, [t]),
            M = (0, G.d$)(t, p),
            k = (0, G.xl)(t),
            U = h ? `${M}` : `${M} ${k}`,
            V = n?.state === I.a.LOADED ? (0, G.nS)(t) : void 0,
            F = !0 !== h;
        return (0, r.jsx)(J, {
            message: t,
            avatar: N,
            username: (0, r.jsxs)(r.Fragment, {
                children: [
                    b &&
                        (0, r.jsx)(c.m, {
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
                    (0, r.jsx)(Z, {
                        ...e,
                        message: t,
                        channel: A,
                        compact: a,
                        roleIconProps: f,
                        renderPopout: S,
                        preview: T,
                        subscribeToGroupId: p,
                        hideGuildTag: g,
                    }),
                ],
            }),
            usernameSpanId: (0, G.d$)(t, p),
            usernameClassName: s()(W.TK, { [W.yF]: 0 !== x, [W.hB]: null != w || P.length > 0 }),
            compact: a,
            showTimestamp: F,
            showTimestampOnHover: _,
            ariaLabelledBy: U,
            ariaDescribedBy: V,
            className: E,
            badges: P,
        });
    });
