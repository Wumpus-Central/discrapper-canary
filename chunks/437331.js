n.d(t, { V: () => w });
var l = n(627968),
    i = n(64700),
    r = n(311907),
    s = n(777666),
    a = n(97808),
    u = n(778712),
    o = n(834730),
    d = n(602853),
    c = n(827734),
    h = n(47167),
    g = n(713654),
    m = n(941971),
    I = n(309632),
    E = n(734057),
    A = n(71393),
    f = n(290863),
    p = n(222823),
    S = n(287809),
    N = n(914853),
    x = n(1404),
    T = n(102983),
    _ = n(578093),
    y = n(912156),
    v = n(67103),
    C = n(953013),
    R = n(576420),
    D = n(336148),
    b = n(760023);
function j(e) {
    return (0, l.jsx)(s.hV, { count: e });
}
function M(e) {
    let { channelId: t, listItemId: n, mentionCount: i, unread: r } = e,
        s = (0, h.Ay)(E.A.getChannel(t) ?? void 0, !0) ?? "???";
    return (0, l.jsx)(x.D, {
        listItemId: n,
        leftIndicator: (0, l.jsx)(m.A, { unread: r }),
        avatar: (0, l.jsx)(a.eu, { src: void 0, "aria-hidden": !0, size: u._3.SIZE_32 }),
        primaryText: (0, l.jsx)("span", {
            children: (0, l.jsx)(o.E, { className: b.Xh, variant: "text-sm/medium", color: "text-muted", children: s }),
        }),
        rightActions: () => (i > 0 ? j(i) : null),
    });
}
function k(e) {
    let {
            channel: t,
            listItemId: n,
            mentionCount: s,
            isMentionLowImportance: a,
            unread: d,
            onPrimaryAction: c,
            onContextMenu: g,
        } = e,
        E = t.id,
        A = (0, h.Ay)(t, !1) ?? "???",
        p = (0, D.X6)(t),
        y = (0, I.A)(t, !1),
        {
            user: R,
            status: M,
            isMobile: k,
        } = (0, r.cf)([S.default, f.A], () => {
            if (!t.isDM()) return { user: null, status: null, isMobile: !1 };
            let e = t.getRecipientId(),
                n = null != e ? S.default.getUser(e) : null;
            return {
                user: n,
                status: null != e ? f.A.getStatus(e) : null,
                isMobile: null != e && f.A.isMobileOnline(e),
            };
        }, [t]),
        O = i.useCallback(
            (e) => {
                let n = t.isMultiUserDM() ? v.K.GROUP_DM_CHANNEL : v.K.DM_CHANNEL;
                g?.({ type: n, event: e, channel: t, user: R ?? void 0 });
            },
            [t, g, R],
        ),
        w = t.isMultiUserDM() || (t.isPrivate() && t.recipients.length >= 2),
        L = i.useCallback(() => {
            c?.({ type: v.c.OPEN_TEXT_CHAT_CHANNEL, channelId: E, guildId: null });
        }, [E, c]);
    return (0, l.jsx)(x.D, {
        listItemId: n,
        leftIndicator: (0, l.jsx)(m.A, { unread: d }),
        onClick: L,
        onContextMenu: O,
        avatar: (0, l.jsx)(T.h, {
            channel: t,
            user: R,
            "aria-hidden": !0,
            size: u._3.SIZE_32,
            status: M,
            isMobile: k,
            isTyping: p,
            mentionCount: s,
            isMentionLowImportance: a,
        }),
        primaryText: (0, l.jsx)("div", {
            className: b.QV,
            children: (0, l.jsx)(o.E, {
                className: b.Xh,
                variant: "text-sm/medium",
                color: d || s > 0 ? "text-strong" : "text-muted",
                children: A,
            }),
        }),
        secondaryText:
            null != y
                ? (0, l.jsx)(o.E, {
                      variant: "text-xs/normal",
                      color: "text-muted",
                      children: (0, l.jsx)(C.o, { channel: t, message: y }),
                  })
                : null,
        rightActions: (e) =>
            (0, l.jsxs)(l.Fragment, {
                children: [s > 0 ? j(s) : null, e && w ? (0, l.jsx)(_.j, { tab: N.x.MESSAGES, targetId: E }) : null],
            }),
    });
}
function O(e) {
    let t,
        {
            channel: n,
            listItemId: s,
            mentionCount: a,
            unread: u,
            recentlyAddedTimestampMs: E,
            onPrimaryAction: f,
            onContextMenu: p,
        } = e,
        S = n.id,
        T = n.getGuildId?.() ?? null,
        R = (0, r.bG)([A.A], () => (null != T ? (A.A.getGuild(T) ?? null) : null), [T]),
        M = (0, h.Ay)(n, !1) ?? "???",
        k = (0, D.X6)(n),
        O = (0, D.DL)(n),
        w = (0, I.A)(n, !1),
        L = (0, d.r)(c.A.colors.TEXT_STRONG),
        F = (0, d.r)(c.A.colors.TEXT_MUTED),
        G = u || a > 0 ? "text-strong" : "text-muted",
        U = u || a > 0 ? L : F,
        P = i.useCallback(
            (e) => {
                p?.({ type: v.K.GUILD_TEXT_CHANNEL, event: e, channel: n, guild: R });
            },
            [n, R, p],
        ),
        V = i.useCallback(() => {
            f?.({ type: v.c.OPEN_TEXT_CHAT_CHANNEL, channelId: S, guildId: T });
        }, [S, T, f]);
    return (0, l.jsx)(x.D, {
        listItemId: s,
        recentlyAddedTimestampMs: E,
        leftIndicator: (0, l.jsx)(m.A, { unread: u }),
        onClick: V,
        onContextMenu: P,
        avatar: (0, l.jsx)(y.A, {
            channel: n,
            guild: R ?? void 0,
            size: y.Q.SMALL_32,
            isTyping: k,
            typingFillColor: O ?? void 0,
        }),
        primaryText: (0, l.jsxs)("div", {
            className: b.QV,
            children: [
                null == (t = (0, g.gU)(n, R)) ? null : (0, l.jsx)(t, { color: U.hex(), size: "xxs", className: b.p }),
                (0, l.jsx)(o.E, { className: b.Xh, variant: "text-sm/medium", color: G, children: M }),
            ],
        }),
        secondaryText: (0, l.jsx)(o.E, {
            variant: "text-xs/normal",
            color: "text-muted",
            children: (0, l.jsx)(C.o, { channel: n, message: w, showTypingPreview: !0 }),
        }),
        rightActions: (e) =>
            (0, l.jsxs)(l.Fragment, {
                children: [a > 0 ? j(a) : null, e ? (0, l.jsx)(_.j, { tab: N.x.MESSAGES, targetId: S }) : null],
            }),
    });
}
function w(e) {
    let { channelId: t, listItemId: n, shouldHighlightIfRecentlyAdded: i, onPrimaryAction: s, onContextMenu: a } = e,
        u = (0, r.bG)([E.A], () => E.A.getChannel(t), [t]),
        {
            mentionCount: o,
            unread: d,
            isMentionLowImportance: c,
        } = (0, r.cf)(
            [p.Ay],
            () => ({
                mentionCount: p.Ay.getMentionCount(t),
                isMentionLowImportance: p.Ay.getIsMentionLowImportance(t),
                unread: p.Ay.hasUnread(t),
            }),
            [t],
        ),
        h = (0, R.A2)(t);
    return null == u
        ? (0, l.jsx)(M, { channelId: t, listItemId: n, mentionCount: o, unread: d })
        : u.isPrivate()
          ? (0, l.jsx)(k, {
                channel: u,
                listItemId: n,
                mentionCount: o,
                isMentionLowImportance: c,
                unread: d,
                onPrimaryAction: s,
                onContextMenu: a,
            })
          : (0, l.jsx)(O, {
                channel: u,
                listItemId: n,
                mentionCount: o,
                unread: d,
                recentlyAddedTimestampMs: i ? h : null,
                onPrimaryAction: s,
                onContextMenu: a,
            });
}
