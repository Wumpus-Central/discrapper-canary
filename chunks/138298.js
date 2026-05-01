"use strict";
n.d(t, { A: () => c });
var i = n(228366),
    r = n(720149),
    s = n(56562),
    a = n(225142),
    o = n(547),
    l = n(940382),
    u = n(746080);
let c = {
    openPrivateChannelAsSidebar(e) {
        let { channelId: t, messageId: n, baseChannelId: s, hasSingleMessageRequest: a } = e;
        i.h.dispatch({
            type: "SIDEBAR_VIEW_CHANNEL",
            sidebarType: l.PE.VIEW_MESSAGE_REQUEST,
            baseChannelId: s,
            channelId: t,
            details: { type: l.LU.MESSAGE_REQUEST, hasSingleMessageRequest: a },
        }),
            null != n
                ? r.A.jumpToMessage({ channelId: t, messageId: n, flash: !0 })
                : o.A.fetchMessages({ channelId: t });
    },
    openChannelAsSidebar(e) {
        let { guildId: t, channelId: n, baseChannelId: a, flash: u = !0, details: c } = e;
        i.h.dispatch({
            type: "SIDEBAR_VIEW_CHANNEL",
            sidebarType: l.PE.VIEW_CHANNEL,
            guildId: t,
            baseChannelId: a,
            channelId: n,
            details: c,
        });
        let d = c?.initialMessageId;
        null != d
            ? r.A.jumpToMessage({ channelId: n, messageId: d, flash: u, jumpType: s.US.INSTANT })
            : o.A.fetchMessages({ guildId: t, channelId: n });
    },
    openResourceChannelAsSidebar(e) {
        let { guildId: t, channelId: n } = e;
        null != t &&
            ((0, a.bN)(t, n, !1),
            i.h.dispatch({
                type: "SIDEBAR_VIEW_CHANNEL",
                sidebarType: l.PE.VIEW_CHANNEL,
                guildId: t,
                baseChannelId: u.VV.GUILD_HOME,
                channelId: n,
            }));
    },
    openModReportAsSidebar(e) {
        let { guildId: t, baseChannelId: n, channelId: a, flash: u = !0, details: c } = e;
        i.h.dispatch({
            type: "SIDEBAR_VIEW_CHANNEL",
            sidebarType: l.PE.VIEW_MOD_REPORT,
            baseChannelId: n,
            channelId: a,
            details: c,
        }),
            c?.initialMessageId != null
                ? r.A.jumpToMessage({ channelId: a, messageId: c.initialMessageId, flash: u, jumpType: s.US.INSTANT })
                : o.A.fetchMessages({ guildId: t, channelId: a });
    },
    openThreadAsSidebar(e) {
        let { guildId: t, baseChannelId: n, channelId: a, flash: u = !0, details: c } = e;
        i.h.dispatch({
            type: "SIDEBAR_VIEW_CHANNEL",
            sidebarType: l.PE.VIEW_THREAD,
            baseChannelId: n,
            channelId: a,
            details: c,
        }),
            c?.initialMessageId != null
                ? r.A.jumpToMessage({ channelId: a, messageId: c.initialMessageId, flash: u, jumpType: s.US.INSTANT })
                : o.A.fetchMessages({ guildId: t, channelId: a });
    },
    closeChannelSidebar(e) {
        i.h.dispatch({ type: "SIDEBAR_CLOSE", baseChannelId: e });
    },
    openGuildSidebar(e) {
        let { guildId: t, baseChannelId: n, sidebarType: r, details: s } = e;
        return i.h.dispatch({ type: "SIDEBAR_VIEW_GUILD", sidebarType: r, baseChannelId: n, guildId: t, details: s });
    },
    closeGuildSidebar(e) {
        i.h.dispatch({ type: "SIDEBAR_CLOSE_GUILD", guildId: e });
    },
    setSelectedSearchContext(e) {
        i.h.dispatch({ type: "SIDEBAR_SET_SELECTED_SEARCH_CONTEXT", searchContextId: e });
    },
};
