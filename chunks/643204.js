"use strict";
n.d(t, { Ay: () => ei, ix: () => ee, tO: () => Q }), n(321073), n(938796);
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
    h = n(429913),
    p = n(634202),
    g = n(870136),
    E = n(200759),
    A = n(87719),
    I = n(919395),
    T = n(9842),
    y = n(657048),
    S = n(93956),
    v = n(622543),
    C = n(352413),
    b = n(854627),
    N = n(576622),
    R = n(342296),
    O = n(964404),
    D = n(71393),
    L = n(576705),
    w = n(287809),
    x = n(486020),
    P = n(203982),
    M = n(927578),
    k = n(101750),
    U = n(763754),
    G = n(635071),
    F = n(860227),
    V = n(449859),
    B = n(855344),
    j = n(812299),
    H = n(109054),
    Y = n(652215),
    W = n(985018),
    K = n(679740),
    $ = n(814803);
let z = 32,
    q = 80;
function X(e) {
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
        avatarImgRef: h,
    } = e;
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)("img", {
                ref: h,
                onClick: a,
                onContextMenu: o,
                onKeyDown: d,
                onMouseDown: l,
                onMouseEnter: u,
                onMouseLeave: c,
                src: t,
                "aria-hidden": !0,
                className: s()(f, K.my, { [K.oE]: i, [K.vk]: null != a, [K.uU]: _ }),
                alt: " ",
            }),
            null == n || i ? null : (0, r.jsx)("img", { className: K.M, src: n, alt: " ", "aria-hidden": !0 }),
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
            onContextMenu: h,
            displayCompactAvatars: g = !1,
            onPopoutRequestClose: A,
            preview: I,
            subscribeToGroupId: T,
            hideGuildTag: S,
        } = e,
        v = (0, U.Ay)(t, n),
        C = i.useMemo(
            () => (0, j.y)({ message: t, channel: a, user: t?.author, compact: o, isRepliedMessage: !1 }),
            [t, a, o],
        ),
        b = i.useRef(null),
        N = (0, u.bG)([D.A], () => D.A.getGuild(s)),
        R = i.useMemo(() => en(o, g, l, N), [o, g, l, N]),
        O = i.useMemo(
            () =>
                null == l
                    ? null
                    : 1 === R && null != N
                      ? (0, r.jsx)(
                            d.YNO,
                            {
                                targetElementRef: b,
                                animation: d.YNO.Animation.TRANSLATE,
                                align: "center",
                                autoInvert: !0,
                                nudgeAlignIntoViewport: !0,
                                position: "right",
                                renderPopout: () => (0, r.jsx)(B.A, { roleIcon: l, guild: N }),
                                clickTrap: !0,
                                children: (e) => {
                                    let { onClick: t } = e;
                                    return (0, r.jsx)(y.A, { ref: b, ...l, className: K.UT, onClick: t });
                                },
                            },
                            "role-icon-children",
                        )
                      : 2 === R
                        ? (0, r.jsx)(y.A, { ...l, className: K.UT }, "role-icon-children")
                        : null,
            [R, l, N],
        ),
        L = (0, u.bG)([w.default], () => w.default.getCurrentUser()),
        x = i.useMemo(() => {
            let e = [],
                n = M.Ay.isPremium(t.author),
                i = M.Ay.isPremium(L),
                s = a?.isPrivate();
            return (
                (0, k.E)(null != l, "Message Username") &&
                    n &&
                    !o &&
                    !s &&
                    e.push((0, r.jsx)(er, { currentUserIsPremium: i, author: t.author }, "nitro-author")),
                null != O && e.push(O),
                null != N && e.push((0, r.jsx)(E.A, { guild: N, message: t }, "new-member")),
                null != a &&
                    null != N &&
                    e.push(
                        (0, r.jsx)(p.A, { guild: N, channel: a, userId: t.author.id, messageId: t.id }, "connections"),
                    ),
                e
            );
        }, [t, a, l, o, O, N, L]);
    return null == v
        ? null
        : (0, r.jsxs)(r.Fragment, {
              children: [
                  (0, r.jsx)(G.A, {
                      message: t,
                      channel: a,
                      author: v,
                      compact: o,
                      roleIcon: l,
                      showPopout: c,
                      renderPopout: _,
                      onClick: f,
                      onContextMenu: h,
                      onPopoutRequestClose: A,
                      decorations: { [G.w.SYSTEM_TAG]: C, [G.w.BADGES]: x },
                      previewGuildId: s,
                      preview: I,
                      subscribeToGroupId: T,
                      hideGuildTag: S,
                  }),
                  o &&
                      (0, r.jsxs)(r.Fragment, { children: [(0, r.jsx)("i", { className: K.me, children: ":" }), " "] }),
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
            (0, r.jsx)(G.A, {
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
            o && (0, r.jsxs)(r.Fragment, { children: [(0, r.jsx)("i", { className: K.me, children: ":" }), " "] }),
        ],
    });
}
function J(e) {
    let { props: t, guildId: n, handleRenderPopout: a, showCommunicationDisabledStyles: s = !1, className: l } = e,
        {
            message: c,
            author: d,
            compact: h = !1,
            subscribeToGroupId: p,
            animate: g = !0,
            onContextMenu: E,
            onClickAvatar: A,
            onPopoutRequestClose: T,
            showAvatarPopout: y,
        } = t,
        S = i.useRef(null),
        [v, N] = i.useState(!1),
        { analyticsLocations: D } = (0, f.Ay)(_.A.AVATAR),
        L = (0, u.bG)([w.default], () => w.default.getCurrentUser()),
        M = (0, u.bG)([O.Ay], () => t.displayCompactAvatars ?? O.Ay.displayCompactAvatars),
        k = (0, H.A)(c),
        U = h ? z : q,
        { pendingAvatarDecoration: G } = (0, C.A)({ guildId: n }),
        F = (0, I.lw)({
            pendingValue: c.author.id === L?.id ? G : void 0,
            userValue: c.author?.avatarDecoration,
            guildValue: d?.guildMemberAvatarDecoration,
            guildId: n,
        }),
        {
            avatarSrc: V,
            avatarDecorationSrc: B,
            eventHandlers: j,
        } = (0, b.A)({
            userId: c.author.id,
            guildId: n,
            size: U,
            animateOnHover: null != p ? !v : !g,
            avatarDecorationOverride: F,
            showPending: !0,
        }),
        W = c.isInteractionPlaceholder(),
        K = i.useMemo(
            () =>
                W && null == c.author.avatar && null == d.guildMemberAvatar && c.application?.icon != null
                    ? (x.Ay.getApplicationIconURL({
                          id: c.application.id,
                          icon: c.application.icon,
                          size: U,
                          fallbackAvatar: !1,
                      }) ?? V)
                    : null != c.webhookId && null == d.guildMemberAvatar
                      ? x.Ay.getUserAvatarURL(
                            {
                                avatar: c.author.avatar,
                                id: c.author.id,
                                discriminator: c.author.discriminator,
                                bot: !0,
                            },
                            !1,
                            U,
                        )
                      : V,
            [
                W,
                c.author.avatar,
                c.author.id,
                c.author.discriminator,
                c.application?.icon,
                c.application?.id,
                c.webhookId,
                V,
                U,
                d.guildMemberAvatar,
            ],
        );
    if (
        (i.useEffect(() => {
            if (null != p)
                return (
                    P._.subscribeKeyed(Y.zOV.ANIMATE_CHAT_AVATAR, `${p}:${c.author.id}`, N),
                    () => void P._.unsubscribeKeyed(Y.zOV.ANIMATE_CHAT_AVATAR, `${p}:${c.author.id}`, N)
                );
        }, [c.author.id, p]),
        !h || M)
    )
        return null != a && null != y
            ? (0, r.jsx)(f.f5, {
                  value: D,
                  children: (0, r.jsx)(R.A, {
                      targetElementRef: S,
                      user: c.author,
                      guildId: n,
                      channelId: c.channel_id,
                      messageId: c.id,
                      shouldShow: y,
                      shouldPreload: k,
                      renderPopout: a,
                      position: o.Fr ? "window_center" : "right",
                      avatarUrl: K,
                      onRequestClose: T,
                      clickTrap: y,
                      children: (e) =>
                          X({
                              ...j,
                              avatarSrc: K,
                              avatarDecorationSrc: B,
                              compact: h,
                              onClick: A,
                              onContextMenu: E,
                              onMouseDown: e.onMouseDown,
                              onKeyDown: e.onKeyDown,
                              showCommunicationDisabledStyles: s,
                              className: l,
                              avatarImgRef: S,
                          }),
                  }),
              })
            : (0, r.jsx)(f.f5, {
                  value: D,
                  children: X({
                      ...j,
                      avatarSrc: K,
                      avatarDecorationSrc: B,
                      compact: h,
                      onClick: A,
                      onContextMenu: E,
                      onMouseDown: void 0,
                      onKeyDown: void 0,
                      showCommunicationDisabledStyles: s,
                      className: l,
                  }),
              });
}
function ee(e) {
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
            ariaDescribedBy: p,
            className: g,
            messageClassname: E,
            badges: A,
        } = e,
        I = (0, l.Lt)(t.flags, Y.pr7.SENT_BY_SOCIAL_LAYER_INTEGRATION) ? t.applicationId : null,
        T = (0, h.h)(I);
    return (0, r.jsxs)(r.Fragment, {
        children: [
            !u && n,
            (0, r.jsxs)(d.H, {
                className: s()(K.wx, g),
                "aria-describedby": p,
                "aria-labelledby": f,
                children: [
                    c &&
                        u &&
                        (0, r.jsx)(V.A, {
                            id: (0, F.xl)(t),
                            compact: !0,
                            timestamp: t.timestamp,
                            isVisibleOnlyOnHover: _,
                            className: E,
                            isInline: !1,
                            application: T,
                        }),
                    u && n,
                    (0, r.jsx)("span", { id: a, className: o, children: i }),
                    c &&
                        !u &&
                        (0, r.jsx)(V.A, { id: (0, F.xl)(t), timestamp: t.timestamp, className: E, application: T }),
                    null != A && A.length > 0 ? (0, r.jsx)("div", { className: K.cV, children: A }) : null,
                ],
            }),
        ],
    });
}
let et = (e) => {
    e || (0, A.e)();
};
function en(e, t, n, r) {
    return (!e || t) && null != n && null != r ? 1 : (!e || t) && null != n ? 2 : 0;
}
let er = i.memo(function (e) {
        let { currentUserIsPremium: t, author: n } = e,
            i = (0, u.bG)([v.A], () => v.A.getUserProfile(n.id)?.premiumSince);
        return (0, r.jsx)(c.m, {
            asContainer: !0,
            shouldShow: null != i,
            text: W.intl.formatToPlainString(W.t["8zbGNR"], { date: i }),
            onTooltipShow: () => (0, N.A)(n.id),
            children: (0, r.jsx)(d.DUT, {
                className: K.vu,
                onClick: () => et(t),
                "aria-label": W.intl.formatToPlainString(W.t["8zbGNR"], { date: i }),
                children: (0, r.jsx)("img", { alt: "", className: K.MP, src: $ }),
            }),
        });
    }),
    ei = i.memo(function (e) {
        let {
                message: t,
                repliedMessage: n,
                compact: a = !1,
                renderPopout: o,
                showTimestampOnHover: _,
                roleIcon: f,
                subscribeToGroupId: h,
                hideTimestamp: p,
                hideGuildTag: E,
                className: A,
                channel: I,
                preview: y,
            } = e,
            v = i.useMemo(() => (null != o ? (e) => o(e, t) : void 0), [o, t]),
            [, C] = (0, g.Ay)(t.author.id, e.guildId),
            b = (0, u.bG)([L.A, D.A], () => {
                let n = D.A.getGuild(e.guildId);
                return null != t.author && null != n && L.A.canManageUser(Y.xBc.MODERATE_MEMBERS, t.author, n);
            }, [t.author, e.guildId]),
            N = C && b,
            R = J({ props: e, guildId: e.guildId, handleRenderPopout: v, showCommunicationDisabledStyles: N }),
            w = (0, u.bG)([O.Ay], () => e.displayCompactAvatars ?? O.Ay.displayCompactAvatars),
            x = i.useMemo(
                () => (0, j.k)({ message: t, channel: I, user: t?.author, compact: a, isRepliedMessage: !1 }),
                [t, I, a],
            ),
            P = (0, u.bG)([D.A], () => en(a, w, f, D.A.getGuild(e.guildId)), [a, w, f, e.guildId]),
            M = i.useMemo(() => {
                let e = [];
                return (
                    (0, l.Lt)(t.flags, Y.pr7.SUPPRESS_NOTIFICATIONS) &&
                        e.push((0, r.jsx)(S.A, {}, "suppress-notifications")),
                    e
                );
            }, [t]),
            k = (0, F.d$)(t, h),
            U = (0, F.xl)(t),
            G = p ? `${k}` : `${k} ${U}`,
            V = n?.state === T.a.LOADED ? (0, F.nS)(t) : void 0,
            B = !0 !== p;
        return (0, r.jsx)(ee, {
            message: t,
            avatar: R,
            username: (0, r.jsxs)(r.Fragment, {
                children: [
                    N &&
                        (0, r.jsx)(c.m, {
                            text: W.intl.string(W.t["AeYyL+"]),
                            children: (0, r.jsxs)(r.Fragment, {
                                children: [
                                    (0, r.jsx)(d.gQi, {
                                        size: "xxs",
                                        color: "currentColor",
                                        className: a ? K.EI : K.bu,
                                    }),
                                    (0, r.jsx)(d.AC4, { children: W.intl.string(W.t.AmHag5) }),
                                ],
                            }),
                        }),
                    (0, r.jsx)(Z, {
                        ...e,
                        message: t,
                        channel: I,
                        compact: a,
                        roleIconProps: f,
                        renderPopout: v,
                        preview: y,
                        subscribeToGroupId: h,
                        hideGuildTag: E,
                    }),
                ],
            }),
            usernameSpanId: (0, F.d$)(t, h),
            usernameClassName: s()(K.TK, { [K.yF]: 0 !== P, [K.hB]: null != x || M.length > 0 }),
            compact: a,
            showTimestamp: B,
            showTimestampOnHover: _,
            ariaLabelledBy: G,
            ariaDescribedBy: V,
            className: A,
            badges: M,
        });
    });
