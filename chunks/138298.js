l.d(t, { A: () => d });
var n = l(228366),
    i = l(148494),
    r = l(56562),
    a = l(225142),
    s = l(547),
    o = l(940382),
    c = l(746080);
let d = {
    openPrivateChannelAsSidebar(e) {
        let { channelId: t, messageId: l, baseChannelId: r, hasSingleMessageRequest: a } = e;
        n.h.dispatch({
            type: "SIDEBAR_VIEW_CHANNEL",
            sidebarType: o.PE.VIEW_MESSAGE_REQUEST,
            baseChannelId: r,
            channelId: t,
            details: { type: o.LU.MESSAGE_REQUEST, hasSingleMessageRequest: a },
        }),
            null != l
                ? i.A.jumpToMessage({ channelId: t, messageId: l, flash: !0 })
                : s.A.fetchMessages({ channelId: t });
    },
    openChannelAsSidebar(e) {
        let { guildId: t, channelId: l, baseChannelId: a, flash: c = !0, details: d } = e;
        n.h.dispatch({
            type: "SIDEBAR_VIEW_CHANNEL",
            sidebarType: o.PE.VIEW_CHANNEL,
            guildId: t,
            baseChannelId: a,
            channelId: l,
            details: d,
        });
        let u = d?.initialMessageId;
        null != u
            ? i.A.jumpToMessage({ channelId: l, messageId: u, flash: c, jumpType: r.vx.INSTANT })
            : s.A.fetchMessages({ guildId: t, channelId: l });
    },
    openResourceChannelAsSidebar(e) {
        let { guildId: t, channelId: l } = e;
        null != t &&
            ((0, a.bN)(t, l, !1),
            n.h.dispatch({
                type: "SIDEBAR_VIEW_CHANNEL",
                sidebarType: o.PE.VIEW_CHANNEL,
                guildId: t,
                baseChannelId: c.VV.GUILD_HOME,
                channelId: l,
            }));
    },
    openModReportAsSidebar(e) {
        let { guildId: t, baseChannelId: l, channelId: a, flash: c = !0, details: d } = e;
        n.h.dispatch({
            type: "SIDEBAR_VIEW_CHANNEL",
            sidebarType: o.PE.VIEW_MOD_REPORT,
            baseChannelId: l,
            channelId: a,
            details: d,
        }),
            d?.initialMessageId != null
                ? i.A.jumpToMessage({ channelId: a, messageId: d.initialMessageId, flash: c, jumpType: r.vx.INSTANT })
                : s.A.fetchMessages({ guildId: t, channelId: a });
    },
    openThreadAsSidebar(e) {
        let { guildId: t, baseChannelId: l, channelId: a, flash: c = !0, details: d } = e;
        n.h.dispatch({
            type: "SIDEBAR_VIEW_CHANNEL",
            sidebarType: o.PE.VIEW_THREAD,
            baseChannelId: l,
            channelId: a,
            details: d,
        }),
            d?.initialMessageId != null
                ? i.A.jumpToMessage({ channelId: a, messageId: d.initialMessageId, flash: c, jumpType: r.vx.INSTANT })
                : s.A.fetchMessages({ guildId: t, channelId: a });
    },
    closeChannelSidebar(e) {
        n.h.dispatch({ type: "SIDEBAR_CLOSE", baseChannelId: e });
    },
    openGuildSidebar(e) {
        let { guildId: t, baseChannelId: l, sidebarType: i, details: r } = e;
        return n.h.dispatch({ type: "SIDEBAR_VIEW_GUILD", sidebarType: i, baseChannelId: l, guildId: t, details: r });
    },
    closeGuildSidebar(e) {
        n.h.dispatch({ type: "SIDEBAR_CLOSE_GUILD", guildId: e });
    },
    setSelectedSearchContext(e) {
        n.h.dispatch({ type: "SIDEBAR_SET_SELECTED_SEARCH_CONTEXT", searchContextId: e });
    },
};
