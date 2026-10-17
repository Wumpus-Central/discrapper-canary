a.d(s, { A: () => N });
var i = a(73153),
    t = a(148494),
    p = a(56562),
    E = a(964167),
    d = a(225142),
    l = a(547),
    A = a(976860),
    I = a(95701),
    h = a(734057),
    n = a(940382),
    S = a(652215),
    _ = a(746080);
let N = {
    openPrivateChannelAsSidebar(e) {
        let { channelId: s, messageId: a, baseChannelId: p, hasSingleMessageRequest: E } = e;
        (i.h.dispatch({
            type: "SIDEBAR_VIEW_CHANNEL",
            sidebarType: n.PE.VIEW_MESSAGE_REQUEST,
            baseChannelId: p,
            channelId: s,
            details: { hasSingleMessageRequest: E },
        }),
            null != a
                ? t.A.jumpToMessage({ channelId: s, messageId: a, flash: !0 })
                : l.A.fetchMessages({ channelId: s }));
    },
    openChannelAsSidebar(e) {
        let { guildId: s, channelId: a, baseChannelId: E, flash: d = !0, details: A } = e;
        (i.h.dispatch({
            type: "SIDEBAR_VIEW_CHANNEL",
            sidebarType: n.PE.VIEW_CHANNEL,
            guildId: s,
            baseChannelId: E,
            channelId: a,
            details: A,
        }),
            null != A.initialMessageId
                ? t.A.jumpToMessage({ channelId: a, messageId: A.initialMessageId, flash: d, jumpType: p.vx.INSTANT })
                : l.A.fetchMessages({ guildId: s, channelId: a }));
    },
    openResourceChannelAsSidebar(e) {
        let { guildId: s, channelId: a } = e;
        null != s &&
            ((0, d.bN)(s, a, !1),
            i.h.dispatch({
                type: "SIDEBAR_VIEW_CHANNEL",
                sidebarType: n.PE.VIEW_CHANNEL,
                guildId: s,
                baseChannelId: _.VV.GUILD_HOME,
                channelId: a,
                details: { type: n.kk.CHAT },
            }));
    },
    openModReportAsSidebar(e) {
        let { guildId: s, baseChannelId: a, channelId: E, flash: d = !0, details: A } = e;
        (i.h.dispatch({
            type: "SIDEBAR_VIEW_CHANNEL",
            sidebarType: n.PE.VIEW_MOD_REPORT,
            baseChannelId: a,
            channelId: E,
            details: A,
        }),
            A?.initialMessageId != null
                ? t.A.jumpToMessage({ channelId: E, messageId: A.initialMessageId, flash: d, jumpType: p.vx.INSTANT })
                : l.A.fetchMessages({ guildId: s, channelId: E }));
    },
    openThreadAsSidebar(e) {
        let { guildId: s, baseChannelId: a, channelId: d, flash: _ = !0, details: N } = e,
            T = h.A.getChannel(a);
        null != T && (0, I.oI)(T.type) && !(0, E.rm)()
            ? (0, A.bG)(S.BVt.CHANNEL(s, d, N.initialMessageId ?? void 0))
            : (i.h.dispatch({
                  type: "SIDEBAR_VIEW_CHANNEL",
                  sidebarType: n.PE.VIEW_CHANNEL,
                  baseChannelId: a,
                  channelId: d,
                  details: N,
              }),
              null != N.initialMessageId
                  ? t.A.jumpToMessage({ channelId: d, messageId: N.initialMessageId, flash: _, jumpType: p.vx.INSTANT })
                  : l.A.fetchMessages({ guildId: s, channelId: d }));
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
