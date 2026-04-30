i.d(t, { A: () => d });
var n = i(228366),
    l = i(720149),
    r = i(56562),
    s = i(225142),
    a = i(547),
    u = i(940382),
    o = i(746080);
let d = {
    openPrivateChannelAsSidebar(e) {
        let { channelId: t, messageId: i, baseChannelId: r, hasSingleMessageRequest: s } = e;
        n.h.dispatch({
            type: "SIDEBAR_VIEW_CHANNEL",
            sidebarType: u.PE.VIEW_MESSAGE_REQUEST,
            baseChannelId: r,
            channelId: t,
            details: { type: u.LU.MESSAGE_REQUEST, hasSingleMessageRequest: s },
        }),
            null != i
                ? l.A.jumpToMessage({ channelId: t, messageId: i, flash: !0 })
                : a.A.fetchMessages({ channelId: t });
    },
    openChannelAsSidebar(e) {
        let { guildId: t, channelId: i, baseChannelId: s, flash: o = !0, details: d } = e;
        n.h.dispatch({
            type: "SIDEBAR_VIEW_CHANNEL",
            sidebarType: u.PE.VIEW_CHANNEL,
            guildId: t,
            baseChannelId: s,
            channelId: i,
            details: d,
        });
        let c = d?.initialMessageId;
        null != c
            ? l.A.jumpToMessage({ channelId: i, messageId: c, flash: o, jumpType: r.US.INSTANT })
            : a.A.fetchMessages({ guildId: t, channelId: i });
    },
    openResourceChannelAsSidebar(e) {
        let { guildId: t, channelId: i } = e;
        null != t &&
            ((0, s.bN)(t, i, !1),
            n.h.dispatch({
                type: "SIDEBAR_VIEW_CHANNEL",
                sidebarType: u.PE.VIEW_CHANNEL,
                guildId: t,
                baseChannelId: o.VV.GUILD_HOME,
                channelId: i,
            }));
    },
    openModReportAsSidebar(e) {
        let { guildId: t, baseChannelId: i, channelId: s, flash: o = !0, details: d } = e;
        n.h.dispatch({
            type: "SIDEBAR_VIEW_CHANNEL",
            sidebarType: u.PE.VIEW_MOD_REPORT,
            baseChannelId: i,
            channelId: s,
            details: d,
        }),
            d?.initialMessageId != null
                ? l.A.jumpToMessage({ channelId: s, messageId: d.initialMessageId, flash: o, jumpType: r.US.INSTANT })
                : a.A.fetchMessages({ guildId: t, channelId: s });
    },
    openThreadAsSidebar(e) {
        let { guildId: t, baseChannelId: i, channelId: s, flash: o = !0, details: d } = e;
        n.h.dispatch({
            type: "SIDEBAR_VIEW_CHANNEL",
            sidebarType: u.PE.VIEW_THREAD,
            baseChannelId: i,
            channelId: s,
            details: d,
        }),
            d?.initialMessageId != null
                ? l.A.jumpToMessage({ channelId: s, messageId: d.initialMessageId, flash: o, jumpType: r.US.INSTANT })
                : a.A.fetchMessages({ guildId: t, channelId: s });
    },
    closeChannelSidebar(e) {
        n.h.dispatch({ type: "SIDEBAR_CLOSE", baseChannelId: e });
    },
    openGuildSidebar(e) {
        let { guildId: t, baseChannelId: i, sidebarType: l, details: r } = e;
        return n.h.dispatch({ type: "SIDEBAR_VIEW_GUILD", sidebarType: l, baseChannelId: i, guildId: t, details: r });
    },
    closeGuildSidebar(e) {
        n.h.dispatch({ type: "SIDEBAR_CLOSE_GUILD", guildId: e });
    },
    setSelectedSearchContext(e) {
        n.h.dispatch({ type: "SIDEBAR_SET_SELECTED_SEARCH_CONTEXT", searchContextId: e });
    },
};
