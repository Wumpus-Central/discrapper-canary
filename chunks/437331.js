n.d(t, { V: () => R });
var l = n(627968),
    i = n(64700),
    r = n(311907),
    s = n(397927),
    a = n(47167),
    u = n(713654),
    o = n(941971),
    d = n(309632),
    c = n(734057),
    h = n(71393),
    g = n(290863),
    I = n(222823),
    f = n(287809),
    A = n(914853),
    E = n(1404),
    m = n(102983),
    S = n(578093),
    p = n(912156),
    N = n(67103),
    T = n(953013),
    _ = n(576420),
    C = n(336148),
    y = n(783346);
function x(e) {
    return (0, l.jsx)(s.hVq, { count: e });
}
function v(e) {
    let { channelId: t, listItemId: n, mentionCount: i, unread: r } = e,
        u = (0, a.Ay)(c.A.getChannel(t) ?? void 0, !0) ?? "???";
    return (0, l.jsx)(E.D, {
        listItemId: n,
        leftIndicator: (0, l.jsx)(o.A, { unread: r }),
        avatar: (0, l.jsx)(s.euF, { src: void 0, "aria-hidden": !0, size: s._3J.SIZE_32 }),
        primaryText: (0, l.jsx)("span", {
            children: (0, l.jsx)(s.Text, {
                className: y.Xh,
                variant: "text-sm/medium",
                color: "text-muted",
                children: u,
            }),
        }),
        rightActions: () => (i > 0 ? x(i) : null),
    });
}
function M(e) {
    let {
            channel: t,
            listItemId: n,
            mentionCount: u,
            isMentionLowImportance: c,
            unread: h,
            onPrimaryAction: I,
            onContextMenu: p,
        } = e,
        _ = t.id,
        v = (0, a.Ay)(t, !1) ?? "???",
        M = (0, C.X6)(t),
        D = (0, d.A)(t, !1),
        {
            user: R,
            status: U,
            isMobile: O,
        } = (0, r.cf)([f.default, g.A], () => {
            if (!t.isDM()) return { user: null, status: null, isMobile: !1 };
            let e = t.getRecipientId(),
                n = null != e ? f.default.getUser(e) : null;
            return {
                user: n,
                status: null != e ? g.A.getStatus(e) : null,
                isMobile: null != e && g.A.isMobileOnline(e),
            };
        }, [t]),
        G = i.useCallback(
            (e) => {
                let n = t.isMultiUserDM() ? N.K.GROUP_DM_CHANNEL : N.K.DM_CHANNEL;
                p?.({ type: n, event: e, channel: t, user: R ?? void 0 });
            },
            [t, p, R],
        ),
        b = t.isMultiUserDM() || (t.isPrivate() && t.recipients.length >= 2),
        w = i.useCallback(() => {
            I?.({ type: N.c.OPEN_TEXT_CHAT_CHANNEL, channelId: _, guildId: null });
        }, [_, I]);
    return (0, l.jsx)(E.D, {
        listItemId: n,
        leftIndicator: (0, l.jsx)(o.A, { unread: h }),
        onClick: w,
        onContextMenu: G,
        avatar: (0, l.jsx)(m.h, {
            channel: t,
            user: R,
            "aria-hidden": !0,
            size: s._3J.SIZE_32,
            status: U,
            isMobile: O,
            isTyping: M,
            mentionCount: u,
            isMentionLowImportance: c,
        }),
        primaryText: (0, l.jsx)("div", {
            className: y.QV,
            children: (0, l.jsx)(s.Text, {
                className: y.Xh,
                variant: "text-sm/medium",
                color: h || u > 0 ? "text-strong" : "text-muted",
                children: v,
            }),
        }),
        secondaryText:
            null != D
                ? (0, l.jsx)(s.Text, {
                      variant: "text-xs/normal",
                      color: "text-muted",
                      children: (0, l.jsx)(T.o, { channel: t, message: D }),
                  })
                : null,
        rightActions: (e) =>
            (0, l.jsxs)(l.Fragment, {
                children: [u > 0 ? x(u) : null, e && b ? (0, l.jsx)(S.j, { tab: A.x.MESSAGES, targetId: _ }) : null],
            }),
    });
}
function D(e) {
    let t,
        {
            channel: n,
            listItemId: c,
            mentionCount: g,
            unread: I,
            recentlyAddedTimestampMs: f,
            onPrimaryAction: m,
            onContextMenu: _,
        } = e,
        v = n.id,
        M = n.getGuildId?.() ?? null,
        D = (0, r.bG)([h.A], () => (null != M ? (h.A.getGuild(M) ?? null) : null), [M]),
        R = (0, a.Ay)(n, !1) ?? "???",
        U = (0, C.X6)(n),
        O = (0, C.DL)(n),
        G = (0, d.A)(n, !1),
        b = (0, s.rdh)(s.LU0.colors.TEXT_STRONG),
        w = (0, s.rdh)(s.LU0.colors.TEXT_MUTED),
        L = I || g > 0 ? "text-strong" : "text-muted",
        F = I || g > 0 ? b : w,
        k = i.useCallback(
            (e) => {
                _?.({ type: N.K.GUILD_TEXT_CHANNEL, event: e, channel: n, guild: D });
            },
            [n, D, _],
        ),
        P = i.useCallback(() => {
            m?.({ type: N.c.OPEN_TEXT_CHAT_CHANNEL, channelId: v, guildId: M });
        }, [v, M, m]);
    return (0, l.jsx)(E.D, {
        listItemId: c,
        recentlyAddedTimestampMs: f,
        leftIndicator: (0, l.jsx)(o.A, { unread: I }),
        onClick: P,
        onContextMenu: k,
        avatar: (0, l.jsx)(p.A, {
            channel: n,
            guild: D ?? void 0,
            size: p.Q.SMALL_32,
            isTyping: U,
            typingFillColor: O ?? void 0,
        }),
        primaryText: (0, l.jsxs)("div", {
            className: y.QV,
            children: [
                null == (t = (0, u.gU)(n, D)) ? null : (0, l.jsx)(t, { color: F.hex(), size: "xxs", className: y.p }),
                (0, l.jsx)(s.Text, { className: y.Xh, variant: "text-sm/medium", color: L, children: R }),
            ],
        }),
        secondaryText: (0, l.jsx)(s.Text, {
            variant: "text-xs/normal",
            color: "text-muted",
            children: (0, l.jsx)(T.o, { channel: n, message: G, showTypingPreview: !0 }),
        }),
        rightActions: (e) =>
            (0, l.jsxs)(l.Fragment, {
                children: [g > 0 ? x(g) : null, e ? (0, l.jsx)(S.j, { tab: A.x.MESSAGES, targetId: v }) : null],
            }),
    });
}
function R(e) {
    let { channelId: t, listItemId: n, shouldHighlightIfRecentlyAdded: i, onPrimaryAction: s, onContextMenu: a } = e,
        u = (0, r.bG)([c.A], () => c.A.getChannel(t), [t]),
        {
            mentionCount: o,
            unread: d,
            isMentionLowImportance: h,
        } = (0, r.cf)(
            [I.Ay],
            () => ({
                mentionCount: I.Ay.getMentionCount(t),
                isMentionLowImportance: I.Ay.getIsMentionLowImportance(t),
                unread: I.Ay.hasUnread(t),
            }),
            [t],
        ),
        g = (0, _.A2)(t);
    return null == u
        ? (0, l.jsx)(v, { channelId: t, listItemId: n, mentionCount: o, unread: d })
        : u.isPrivate()
          ? (0, l.jsx)(M, {
                channel: u,
                listItemId: n,
                mentionCount: o,
                isMentionLowImportance: h,
                unread: d,
                onPrimaryAction: s,
                onContextMenu: a,
            })
          : (0, l.jsx)(D, {
                channel: u,
                listItemId: n,
                mentionCount: o,
                unread: d,
                recentlyAddedTimestampMs: i ? g : null,
                onPrimaryAction: s,
                onContextMenu: a,
            });
}
