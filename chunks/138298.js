a.d(s, { A: () => _ });
var i = a(228366),
    t = a(148494),
    p = a(56562),
    E = a(225142),
    d = a(547),
    l = a(976860),
    A = a(95701),
    I = a(734057),
    h = a(940382),
    n = a(652215),
    S = a(746080);
let _ = {
    openPrivateChannelAsSidebar(e) {
        let { channelId: s, messageId: a, baseChannelId: p, hasSingleMessageRequest: E } = e;
        i.h.dispatch({
            type: "SIDEBAR_VIEW_CHANNEL",
            sidebarType: h.PE.VIEW_MESSAGE_REQUEST,
            baseChannelId: p,
            channelId: s,
            details: { hasSingleMessageRequest: E },
        }),
            null != a
                ? t.A.jumpToMessage({ channelId: s, messageId: a, flash: !0 })
                : d.A.fetchMessages({ channelId: s });
    },
    openChannelAsSidebar(e) {
        let { guildId: s, channelId: a, baseChannelId: E, flash: l = !0, details: A } = e;
        i.h.dispatch({
            type: "SIDEBAR_VIEW_CHANNEL",
            sidebarType: h.PE.VIEW_CHANNEL,
            guildId: s,
            baseChannelId: E,
            channelId: a,
            details: A,
        }),
            null != A.initialMessageId
                ? t.A.jumpToMessage({ channelId: a, messageId: A.initialMessageId, flash: l, jumpType: p.vx.INSTANT })
                : d.A.fetchMessages({ guildId: s, channelId: a });
    },
    openResourceChannelAsSidebar(e) {
        let { guildId: s, channelId: a } = e;
        null != s &&
            ((0, E.bN)(s, a, !1),
            i.h.dispatch({
                type: "SIDEBAR_VIEW_CHANNEL",
                sidebarType: h.PE.VIEW_CHANNEL,
                guildId: s,
                baseChannelId: S.VV.GUILD_HOME,
                channelId: a,
                details: { type: h.kk.CHAT },
            }));
    },
    openModReportAsSidebar(e) {
        let { guildId: s, baseChannelId: a, channelId: E, flash: l = !0, details: A } = e;
        i.h.dispatch({
            type: "SIDEBAR_VIEW_CHANNEL",
            sidebarType: h.PE.VIEW_MOD_REPORT,
            baseChannelId: a,
            channelId: E,
            details: A,
        }),
            A?.initialMessageId != null
                ? t.A.jumpToMessage({ channelId: E, messageId: A.initialMessageId, flash: l, jumpType: p.vx.INSTANT })
                : d.A.fetchMessages({ guildId: s, channelId: E });
    },
    openThreadAsSidebar(e) {
        let { guildId: s, baseChannelId: a, channelId: E, flash: S = !0, details: _ } = e,
            N = I.A.getChannel(a);
        null != N && (0, A.oI)(N.type)
            ? (0, l.bG)(n.BVt.CHANNEL(s, E, _.initialMessageId ?? void 0))
            : (i.h.dispatch({
                  type: "SIDEBAR_VIEW_CHANNEL",
                  sidebarType: h.PE.VIEW_CHANNEL,
                  baseChannelId: a,
                  channelId: E,
                  details: _,
              }),
              null != _.initialMessageId
                  ? t.A.jumpToMessage({ channelId: E, messageId: _.initialMessageId, flash: S, jumpType: p.vx.INSTANT })
                  : d.A.fetchMessages({ guildId: s, channelId: E }));
    },
    closeChannelSidebar(e) {
        i.h.dispatch({ type: "SIDEBAR_CLOSE", baseChannelId: e });
    },
    openGuildSidebar(e) {
        let { guildId: s, baseChannelId: a, sidebarType: t, details: p } = e;
        return i.h.dispatch({ type: "SIDEBAR_VIEW_GUILD", sidebarType: t, baseChannelId: a, guildId: s, details: p });
    },
    closeGuildSidebar(e) {
        i.h.dispatch({ type: "SIDEBAR_CLOSE_GUILD", guildId: e });
    },
    setSelectedSearchContext(e) {
        i.h.dispatch({ type: "SIDEBAR_SET_SELECTED_SEARCH_CONTEXT", searchContextId: e });
    },
};
