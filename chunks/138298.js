n.d(t, { A: () => c });
var i = n(228366),
    l = n(720149),
    r = n(56562),
    a = n(225142),
    s = n(547),
    u = n(940382),
    o = n(746080);
let c = {
    openPrivateChannelAsSidebar(e) {
        let { channelId: t, messageId: n, baseChannelId: r, hasSingleMessageRequest: a } = e;
        i.h.dispatch({
            type: "SIDEBAR_VIEW_CHANNEL",
            sidebarType: u.PE.VIEW_MESSAGE_REQUEST,
            baseChannelId: r,
            channelId: t,
            details: { type: u.LU.MESSAGE_REQUEST, hasSingleMessageRequest: a },
        }),
            null != n
                ? l.A.jumpToMessage({ channelId: t, messageId: n, flash: !0 })
                : s.A.fetchMessages({ channelId: t });
    },
    openChannelAsSidebar(e) {
        let { guildId: t, channelId: n, baseChannelId: a, flash: o = !0, details: c } = e;
        i.h.dispatch({
            type: "SIDEBAR_VIEW_CHANNEL",
            sidebarType: u.PE.VIEW_CHANNEL,
            guildId: t,
            baseChannelId: a,
            channelId: n,
            details: c,
        });
        let d = c?.initialMessageId;
        null != d
            ? l.A.jumpToMessage({ channelId: n, messageId: d, flash: o, jumpType: r.US.INSTANT })
            : s.A.fetchMessages({ guildId: t, channelId: n });
    },
    openResourceChannelAsSidebar(e) {
        let { guildId: t, channelId: n } = e;
        null != t &&
            ((0, a.bN)(t, n, !1),
            i.h.dispatch({
                type: "SIDEBAR_VIEW_CHANNEL",
                sidebarType: u.PE.VIEW_CHANNEL,
                guildId: t,
                baseChannelId: o.VV.GUILD_HOME,
                channelId: n,
            }));
    },
    openModReportAsSidebar(e) {
        let { guildId: t, baseChannelId: n, channelId: a, flash: o = !0, details: c } = e;
        i.h.dispatch({
            type: "SIDEBAR_VIEW_CHANNEL",
            sidebarType: u.PE.VIEW_MOD_REPORT,
            baseChannelId: n,
            channelId: a,
            details: c,
        }),
            c?.initialMessageId != null
                ? l.A.jumpToMessage({ channelId: a, messageId: c.initialMessageId, flash: o, jumpType: r.US.INSTANT })
                : s.A.fetchMessages({ guildId: t, channelId: a });
    },
    openThreadAsSidebar(e) {
        let { guildId: t, baseChannelId: n, channelId: a, flash: o = !0, details: c } = e;
        i.h.dispatch({
            type: "SIDEBAR_VIEW_CHANNEL",
            sidebarType: u.PE.VIEW_THREAD,
            baseChannelId: n,
            channelId: a,
            details: c,
        }),
            c?.initialMessageId != null
                ? l.A.jumpToMessage({ channelId: a, messageId: c.initialMessageId, flash: o, jumpType: r.US.INSTANT })
                : s.A.fetchMessages({ guildId: t, channelId: a });
    },
    closeChannelSidebar(e) {
        i.h.dispatch({ type: "SIDEBAR_CLOSE", baseChannelId: e });
    },
    openGuildSidebar(e) {
        let { guildId: t, baseChannelId: n, sidebarType: l, details: r } = e;
        return i.h.dispatch({ type: "SIDEBAR_VIEW_GUILD", sidebarType: l, baseChannelId: n, guildId: t, details: r });
    },
    closeGuildSidebar(e) {
        i.h.dispatch({ type: "SIDEBAR_CLOSE_GUILD", guildId: e });
    },
    setSelectedSearchContext(e) {
        i.h.dispatch({ type: "SIDEBAR_SET_SELECTED_SEARCH_CONTEXT", searchContextId: e });
    },
};
