n.d(t, { A: () => h });
var i = n(73153),
    r = n(148494),
    a = n(56562),
    s = n(964167),
    l = n(225142),
    o = n(547),
    d = n(976860),
    c = n(95701),
    u = n(734057),
    _ = n(940382),
    E = n(652215),
    A = n(746080);
let h = {
    openPrivateChannelAsSidebar(e) {
        let { channelId: t, messageId: n, baseChannelId: a, hasSingleMessageRequest: s } = e;
        (i.h.dispatch({
            type: "SIDEBAR_VIEW_CHANNEL",
            sidebarType: _.PE.VIEW_MESSAGE_REQUEST,
            baseChannelId: a,
            channelId: t,
            details: { hasSingleMessageRequest: s },
        }),
            null != n
                ? r.A.jumpToMessage({ channelId: t, messageId: n, flash: !0 })
                : o.A.fetchMessages({ channelId: t }));
    },
    openChannelAsSidebar(e) {
        let { guildId: t, channelId: n, baseChannelId: s, flash: l = !0, details: d } = e;
        (i.h.dispatch({
            type: "SIDEBAR_VIEW_CHANNEL",
            sidebarType: _.PE.VIEW_CHANNEL,
            guildId: t,
            baseChannelId: s,
            channelId: n,
            details: d,
        }),
            null != d.initialMessageId
                ? r.A.jumpToMessage({ channelId: n, messageId: d.initialMessageId, flash: l, jumpType: a.vx.INSTANT })
                : o.A.fetchMessages({ guildId: t, channelId: n }));
    },
    openResourceChannelAsSidebar(e) {
        let { guildId: t, channelId: n } = e;
        null != t &&
            ((0, l.bN)(t, n, !1),
            i.h.dispatch({
                type: "SIDEBAR_VIEW_CHANNEL",
                sidebarType: _.PE.VIEW_CHANNEL,
                guildId: t,
                baseChannelId: A.VV.GUILD_HOME,
                channelId: n,
                details: { type: _.kk.CHAT },
            }));
    },
    openModReportAsSidebar(e) {
        let { guildId: t, baseChannelId: n, channelId: s, flash: l = !0, details: d } = e;
        (i.h.dispatch({
            type: "SIDEBAR_VIEW_CHANNEL",
            sidebarType: _.PE.VIEW_MOD_REPORT,
            baseChannelId: n,
            channelId: s,
            details: d,
        }),
            d?.initialMessageId != null
                ? r.A.jumpToMessage({ channelId: s, messageId: d.initialMessageId, flash: l, jumpType: a.vx.INSTANT })
                : o.A.fetchMessages({ guildId: t, channelId: s }));
    },
    openThreadAsSidebar(e) {
        let { guildId: t, baseChannelId: n, channelId: l, flash: A = !0, details: h } = e,
            f = u.A.getChannel(n);
        null != f && (0, c.oI)(f.type) && !(0, s.rm)()
            ? (0, d.bG)(E.BVt.CHANNEL(t, l, h.initialMessageId ?? void 0))
            : (i.h.dispatch({
                  type: "SIDEBAR_VIEW_CHANNEL",
                  sidebarType: _.PE.VIEW_CHANNEL,
                  baseChannelId: n,
                  channelId: l,
                  details: h,
              }),
              null != h.initialMessageId
                  ? r.A.jumpToMessage({ channelId: l, messageId: h.initialMessageId, flash: A, jumpType: a.vx.INSTANT })
                  : o.A.fetchMessages({ guildId: t, channelId: l }));
    },
    closeChannelSidebar(e) {
        i.h.dispatch({ type: "SIDEBAR_CLOSE", baseChannelId: e });
    },
    openGuildSidebar(e) {
        let { guildId: t, baseChannelId: n, sidebarType: r, details: a } = e;
        return i.h.dispatch({ type: "SIDEBAR_VIEW_GUILD", sidebarType: r, baseChannelId: n, guildId: t, details: a });
    },
    closeGuildSidebar(e) {
        i.h.dispatch({ type: "SIDEBAR_CLOSE_GUILD", guildId: e });
    },
    setSelectedSearchContext(e) {
        i.h.dispatch({ type: "SIDEBAR_SET_SELECTED_SEARCH_CONTEXT", searchContextId: e });
    },
};
