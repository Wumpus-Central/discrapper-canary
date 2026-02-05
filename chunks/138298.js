"use strict";
n.d(t, { A: () => c });
var r = n(73153),
    i = n(843472),
    a = n(56562),
    s = n(225142),
    o = n(547),
    l = n(940382),
    u = n(746080);
let c = {
    openPrivateChannelAsSidebar(e) {
        let { channelId: t, messageId: n, baseChannelId: a, hasSingleMessageRequest: s } = e;
        r.h.dispatch({
            type: "SIDEBAR_VIEW_CHANNEL",
            sidebarType: l.PE.VIEW_MESSAGE_REQUEST,
            baseChannelId: a,
            channelId: t,
            details: { type: l.LU.MESSAGE_REQUEST, hasSingleMessageRequest: s },
        }),
            null != n
                ? i.A.jumpToMessage({ channelId: t, messageId: n, flash: !0 })
                : o.A.fetchMessages({ channelId: t });
    },
    openChannelAsSidebar(e) {
        let { guildId: t, channelId: n, baseChannelId: s, flash: u = !0, details: c } = e;
        r.h.dispatch({
            type: "SIDEBAR_VIEW_CHANNEL",
            sidebarType: l.PE.VIEW_CHANNEL,
            guildId: t,
            baseChannelId: s,
            channelId: n,
            details: c,
        });
        let d = c?.initialMessageId;
        null != d
            ? i.A.jumpToMessage({ channelId: n, messageId: d, flash: u, jumpType: a.US.INSTANT })
            : o.A.fetchMessages({ guildId: t, channelId: n });
    },
    openResourceChannelAsSidebar(e) {
        let { guildId: t, channelId: n } = e;
        null != t &&
            ((0, s.bN)(t, n, !1),
            r.h.dispatch({
                type: "SIDEBAR_VIEW_CHANNEL",
                sidebarType: l.PE.VIEW_CHANNEL,
                guildId: t,
                baseChannelId: u.VV.GUILD_HOME,
                channelId: n,
            }));
    },
    openModReportAsSidebar(e) {
        let { guildId: t, baseChannelId: n, channelId: s, flash: u = !0, details: c } = e;
        r.h.dispatch({
            type: "SIDEBAR_VIEW_CHANNEL",
            sidebarType: l.PE.VIEW_MOD_REPORT,
            baseChannelId: n,
            channelId: s,
            details: c,
        }),
            c?.initialMessageId != null
                ? i.A.jumpToMessage({ channelId: s, messageId: c.initialMessageId, flash: u, jumpType: a.US.INSTANT })
                : o.A.fetchMessages({ guildId: t, channelId: s });
    },
    openThreadAsSidebar(e) {
        let { guildId: t, baseChannelId: n, channelId: s, flash: u = !0, details: c } = e;
        r.h.dispatch({
            type: "SIDEBAR_VIEW_CHANNEL",
            sidebarType: l.PE.VIEW_THREAD,
            baseChannelId: n,
            channelId: s,
            details: c,
        }),
            c?.initialMessageId != null
                ? i.A.jumpToMessage({ channelId: s, messageId: c.initialMessageId, flash: u, jumpType: a.US.INSTANT })
                : o.A.fetchMessages({ guildId: t, channelId: s });
    },
    closeChannelSidebar(e) {
        r.h.dispatch({ type: "SIDEBAR_CLOSE", baseChannelId: e });
    },
    openGuildSidebar(e) {
        let { guildId: t, baseChannelId: n, sidebarType: i, details: a } = e;
        return r.h.dispatch({ type: "SIDEBAR_VIEW_GUILD", sidebarType: i, baseChannelId: n, guildId: t, details: a });
    },
    closeGuildSidebar(e) {
        r.h.dispatch({ type: "SIDEBAR_CLOSE_GUILD", guildId: e });
    },
    setSelectedSearchContext(e) {
        r.h.dispatch({ type: "SIDEBAR_SET_SELECTED_SEARCH_CONTEXT", searchContextId: e });
    },
};
