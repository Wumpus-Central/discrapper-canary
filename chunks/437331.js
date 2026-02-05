n.d(t, { V: () => R });
var l = n(627968),
    i = n(64700),
    s = n(311907),
    r = n(397927),
    a = n(47167),
    u = n(713654),
    o = n(941971),
    d = n(309632),
    c = n(734057),
    h = n(71393),
    g = n(290863),
    I = n(222823),
    E = n(287809),
    A = n(914853),
    f = n(1404),
    m = n(102983),
    S = n(578093),
    p = n(912156),
    N = n(67103),
    T = n(576420),
    _ = n(549866),
    y = n(336148),
    C = n(783346);
function x(e) {
    return (0, l.jsx)(r.hVq, { count: e });
}
function v(e) {
    let { channelId: t, listItemId: n, mentionCount: i, unread: s } = e,
        u = (0, a.Ay)(c.A.getChannel(t) ?? void 0, !0) ?? "???";
    return (0, l.jsx)(f.D, {
        listItemId: n,
        leftIndicator: (0, l.jsx)(o.A, { unread: s }),
        avatar: (0, l.jsx)(r.euF, { src: void 0, "aria-hidden": !0, size: r._3J.SIZE_32 }),
        primaryText: (0, l.jsx)("span", {
            children: (0, l.jsx)(r.Text, {
                className: C.Xh,
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
        T = t.id,
        v = (0, a.Ay)(t, !1) ?? "???",
        M = (0, y.X)(t),
        D = (0, d.A)(t, !1),
        {
            user: R,
            status: U,
            isMobile: O,
        } = (0, s.cf)([E.default, g.A], () => {
            if (!t.isDM()) return { user: null, status: null, isMobile: !1 };
            let e = t.getRecipientId(),
                n = null != e ? E.default.getUser(e) : null;
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
            I?.({ type: N.c.OPEN_TEXT_CHAT_CHANNEL, channelId: T, guildId: null });
        }, [T, I]);
    return (0, l.jsx)(f.D, {
        listItemId: n,
        leftIndicator: (0, l.jsx)(o.A, { unread: h }),
        onClick: w,
        onContextMenu: G,
        avatar: (0, l.jsx)(m.h, {
            channel: t,
            user: R,
            "aria-hidden": !0,
            size: r._3J.SIZE_32,
            status: U,
            isMobile: O,
            isTyping: M,
            mentionCount: u,
            isMentionLowImportance: c,
        }),
        primaryText: (0, l.jsx)("div", {
            className: C.QV,
            children: (0, l.jsx)(r.Text, {
                className: C.Xh,
                variant: "text-sm/medium",
                color: h || u > 0 ? "text-strong" : "text-muted",
                children: v,
            }),
        }),
        secondaryText:
            null != D
                ? (0, l.jsx)(r.Text, {
                      variant: "text-xs/normal",
                      color: "text-muted",
                      children: (0, l.jsx)(_.b, { channel: t, message: D }),
                  })
                : null,
        rightActions: (e) =>
            (0, l.jsxs)(l.Fragment, {
                children: [u > 0 ? x(u) : null, e && b ? (0, l.jsx)(S.j, { tab: A.x.MESSAGES, targetId: T }) : null],
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
            recentlyAddedTimestampMs: E,
            onPrimaryAction: m,
            onContextMenu: T,
        } = e,
        v = n.id,
        M = n.getGuildId?.() ?? null,
        D = (0, s.bG)([h.A], () => (null != M ? (h.A.getGuild(M) ?? null) : null), [M]),
        R = (0, a.Ay)(n, !1) ?? "???",
        U = (0, y.X)(n),
        O = (0, d.A)(n, !1),
        G = (0, r.rdh)(r.LU0.colors.TEXT_STRONG),
        b = (0, r.rdh)(r.LU0.colors.TEXT_MUTED),
        w = I || g > 0 ? "text-strong" : "text-muted",
        L = I || g > 0 ? G : b,
        k = i.useCallback(
            (e) => {
                T?.({ type: N.K.GUILD_TEXT_CHANNEL, event: e, channel: n, guild: D });
            },
            [n, D, T],
        ),
        F = i.useCallback(() => {
            m?.({ type: N.c.OPEN_TEXT_CHAT_CHANNEL, channelId: v, guildId: M });
        }, [v, M, m]);
    return (0, l.jsx)(f.D, {
        listItemId: c,
        recentlyAddedTimestampMs: E,
        leftIndicator: (0, l.jsx)(o.A, { unread: I }),
        onClick: F,
        onContextMenu: k,
        avatar: (0, l.jsx)(p.A, { channel: n, guild: D ?? void 0, size: p.Q.SMALL_32, isTyping: U }),
        primaryText: (0, l.jsxs)("div", {
            className: C.QV,
            children: [
                null == (t = (0, u.gU)(n, D)) ? null : (0, l.jsx)(t, { color: L.hex(), size: "xxs", className: C.p }),
                (0, l.jsx)(r.Text, { className: C.Xh, variant: "text-sm/medium", color: w, children: R }),
            ],
        }),
        secondaryText:
            null != O
                ? (0, l.jsx)(r.Text, {
                      variant: "text-xs/normal",
                      color: "text-muted",
                      children: (0, l.jsx)(_.b, { channel: n, message: O }),
                  })
                : null,
        rightActions: (e) =>
            (0, l.jsxs)(l.Fragment, {
                children: [g > 0 ? x(g) : null, e ? (0, l.jsx)(S.j, { tab: A.x.MESSAGES, targetId: v }) : null],
            }),
    });
}
function R(e) {
    let { channelId: t, listItemId: n, shouldHighlightIfRecentlyAdded: i, onPrimaryAction: r, onContextMenu: a } = e,
        u = (0, s.bG)([c.A], () => c.A.getChannel(t), [t]),
        {
            mentionCount: o,
            unread: d,
            isMentionLowImportance: h,
        } = (0, s.cf)(
            [I.Ay],
            () => ({
                mentionCount: I.Ay.getMentionCount(t),
                isMentionLowImportance: I.Ay.getIsMentionLowImportance(t),
                unread: I.Ay.hasUnread(t),
            }),
            [t],
        ),
        g = (0, T.A2)(t);
    return null == u
        ? (0, l.jsx)(v, { channelId: t, listItemId: n, mentionCount: o, unread: d })
        : u.isPrivate()
          ? (0, l.jsx)(M, {
                channel: u,
                listItemId: n,
                mentionCount: o,
                isMentionLowImportance: h,
                unread: d,
                onPrimaryAction: r,
                onContextMenu: a,
            })
          : (0, l.jsx)(D, {
                channel: u,
                listItemId: n,
                mentionCount: o,
                unread: d,
                recentlyAddedTimestampMs: i ? g : null,
                onPrimaryAction: r,
                onContextMenu: a,
            });
}
