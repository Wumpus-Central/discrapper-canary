a.d(s, { A: () => _ });
var i = a(228366),
    t = a(148494),
    d = a(56562),
    p = a(225142),
    l = a(547),
    E = a(976860),
    h = a(95701),
    n = a(734057),
    A = a(940382),
    I = a(652215),
    r = a(746080);
let _ = {
    openPrivateChannelAsSidebar(e) {
        let { channelId: s, messageId: a, baseChannelId: d, hasSingleMessageRequest: p } = e;
        i.h.dispatch({
            type: "SIDEBAR_VIEW_CHANNEL",
            sidebarType: A.PE.VIEW_MESSAGE_REQUEST,
            baseChannelId: d,
            channelId: s,
            details: { hasSingleMessageRequest: p },
        }),
            null != a
                ? t.A.jumpToMessage({ channelId: s, messageId: a, flash: !0 })
                : l.A.fetchMessages({ channelId: s });
    },
    openChannelAsSidebar(e) {
        let { guildId: s, channelId: a, baseChannelId: p, flash: E = !0, details: h } = e;
        i.h.dispatch({
            type: "SIDEBAR_VIEW_CHANNEL",
            sidebarType: A.PE.VIEW_CHANNEL,
            guildId: s,
            baseChannelId: p,
            channelId: a,
            details: h,
        }),
            null != h.initialMessageId
                ? t.A.jumpToMessage({ channelId: a, messageId: h.initialMessageId, flash: E, jumpType: d.vx.INSTANT })
                : l.A.fetchMessages({ guildId: s, channelId: a });
    },
    openResourceChannelAsSidebar(e) {
        let { guildId: s, channelId: a } = e;
        null != s &&
            ((0, p.bN)(s, a, !1),
            i.h.dispatch({
                type: "SIDEBAR_VIEW_CHANNEL",
                sidebarType: A.PE.VIEW_CHANNEL,
                guildId: s,
                baseChannelId: r.VV.GUILD_HOME,
                channelId: a,
                details: { type: A.kk.CHAT },
            }));
    },
    openModReportAsSidebar(e) {
        let { guildId: s, baseChannelId: a, channelId: p, flash: E = !0, details: h } = e;
        i.h.dispatch({
            type: "SIDEBAR_VIEW_CHANNEL",
            sidebarType: A.PE.VIEW_MOD_REPORT,
            baseChannelId: a,
            channelId: p,
            details: h,
        }),
            h?.initialMessageId != null
                ? t.A.jumpToMessage({ channelId: p, messageId: h.initialMessageId, flash: E, jumpType: d.vx.INSTANT })
                : l.A.fetchMessages({ guildId: s, channelId: p });
    },
    openThreadAsSidebar(e) {
        let { guildId: s, baseChannelId: a, channelId: p, flash: r = !0, details: _ } = e,
            S = n.A.getChannel(a);
        null != S && (0, h.oI)(S.type)
            ? (0, E.bG)(I.BVt.CHANNEL(s, p, _.initialMessageId ?? void 0))
            : (i.h.dispatch({
                  type: "SIDEBAR_VIEW_CHANNEL",
                  sidebarType: A.PE.VIEW_CHANNEL,
                  baseChannelId: a,
                  channelId: p,
                  details: _,
              }),
              null != _.initialMessageId
                  ? t.A.jumpToMessage({ channelId: p, messageId: _.initialMessageId, flash: r, jumpType: d.vx.INSTANT })
                  : l.A.fetchMessages({ guildId: s, channelId: p }));
    },
    closeChannelSidebar(e) {
        i.h.dispatch({ type: "SIDEBAR_CLOSE", baseChannelId: e });
    },
    openGuildSidebar(e) {
        let { guildId: s, baseChannelId: a, sidebarType: t, details: d } = e;
        return i.h.dispatch({ type: "SIDEBAR_VIEW_GUILD", sidebarType: t, baseChannelId: a, guildId: s, details: d });
    },
    closeGuildSidebar(e) {
        i.h.dispatch({ type: "SIDEBAR_CLOSE_GUILD", guildId: e });
    },
    setSelectedSearchContext(e) {
        i.h.dispatch({ type: "SIDEBAR_SET_SELECTED_SEARCH_CONTEXT", searchContextId: e });
    },
};
