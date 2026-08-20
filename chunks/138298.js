a.d(s, { A: () => A });
var t = a(228366),
    i = a(148494),
    E = a(56562),
    p = a(225142),
    d = a(547),
    l = a(940382),
    h = a(746080);
let A = {
    openPrivateChannelAsSidebar(e) {
        let { channelId: s, messageId: a, baseChannelId: E, hasSingleMessageRequest: p } = e;
        t.h.dispatch({
            type: "SIDEBAR_VIEW_CHANNEL",
            sidebarType: l.PE.VIEW_MESSAGE_REQUEST,
            baseChannelId: E,
            channelId: s,
            details: { type: l.LU.MESSAGE_REQUEST, hasSingleMessageRequest: p },
        }),
            null != a
                ? i.A.jumpToMessage({ channelId: s, messageId: a, flash: !0 })
                : d.A.fetchMessages({ channelId: s });
    },
    openChannelAsSidebar(e) {
        let { guildId: s, channelId: a, baseChannelId: p, flash: h = !0, details: A } = e;
        t.h.dispatch({
            type: "SIDEBAR_VIEW_CHANNEL",
            sidebarType: l.PE.VIEW_CHANNEL,
            guildId: s,
            baseChannelId: p,
            channelId: a,
            details: A,
        });
        let n = A?.initialMessageId;
        null != n
            ? i.A.jumpToMessage({ channelId: a, messageId: n, flash: h, jumpType: E.vx.INSTANT })
            : d.A.fetchMessages({ guildId: s, channelId: a });
    },
    openResourceChannelAsSidebar(e) {
        let { guildId: s, channelId: a } = e;
        null != s &&
            ((0, p.bN)(s, a, !1),
            t.h.dispatch({
                type: "SIDEBAR_VIEW_CHANNEL",
                sidebarType: l.PE.VIEW_CHANNEL,
                guildId: s,
                baseChannelId: h.VV.GUILD_HOME,
                channelId: a,
            }));
    },
    openModReportAsSidebar(e) {
        let { guildId: s, baseChannelId: a, channelId: p, flash: h = !0, details: A } = e;
        t.h.dispatch({
            type: "SIDEBAR_VIEW_CHANNEL",
            sidebarType: l.PE.VIEW_MOD_REPORT,
            baseChannelId: a,
            channelId: p,
            details: A,
        }),
            A?.initialMessageId != null
                ? i.A.jumpToMessage({ channelId: p, messageId: A.initialMessageId, flash: h, jumpType: E.vx.INSTANT })
                : d.A.fetchMessages({ guildId: s, channelId: p });
    },
    openThreadAsSidebar(e) {
        let { guildId: s, baseChannelId: a, channelId: p, flash: h = !0, details: A } = e;
        t.h.dispatch({
            type: "SIDEBAR_VIEW_CHANNEL",
            sidebarType: l.PE.VIEW_THREAD,
            baseChannelId: a,
            channelId: p,
            details: A,
        }),
            A?.initialMessageId != null
                ? i.A.jumpToMessage({ channelId: p, messageId: A.initialMessageId, flash: h, jumpType: E.vx.INSTANT })
                : d.A.fetchMessages({ guildId: s, channelId: p });
    },
    closeChannelSidebar(e) {
        t.h.dispatch({ type: "SIDEBAR_CLOSE", baseChannelId: e });
    },
    openGuildSidebar(e) {
        let { guildId: s, baseChannelId: a, sidebarType: i, details: E } = e;
        return t.h.dispatch({ type: "SIDEBAR_VIEW_GUILD", sidebarType: i, baseChannelId: a, guildId: s, details: E });
    },
    closeGuildSidebar(e) {
        t.h.dispatch({ type: "SIDEBAR_CLOSE_GUILD", guildId: e });
    },
    setSelectedSearchContext(e) {
        t.h.dispatch({ type: "SIDEBAR_SET_SELECTED_SEARCH_CONTEXT", searchContextId: e });
    },
};
