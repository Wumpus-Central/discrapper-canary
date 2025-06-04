n.d(t, { Z: () => u });
var r = n(570140),
    i = n(904245),
    o = n(593472),
    a = n(526120),
    s = n(348245),
    l = n(897473),
    c = n(176505);
let u = {
    openPrivateChannelAsSidebar(e) {
        let { channelId: t, messageId: n, baseChannelId: o, hasSingleMessageRequest: a } = e;
        r.Z.dispatch({
            type: 'SIDEBAR_VIEW_CHANNEL',
            sidebarType: l.tI.VIEW_MESSAGE_REQUEST,
            baseChannelId: o,
            channelId: t,
            details: {
                type: l.Ff.MESSAGE_REQUEST,
                hasSingleMessageRequest: a
            }
        }),
            null != n
                ? i.Z.jumpToMessage({
                      channelId: t,
                      messageId: n,
                      flash: !0
                  })
                : s.Z.fetchMessages({ channelId: t });
    },
    openChannelAsSidebar(e) {
        let { guildId: t, channelId: n, baseChannelId: a, flash: c = !0, details: u } = e;
        r.Z.dispatch({
            type: 'SIDEBAR_VIEW_CHANNEL',
            sidebarType: l.tI.VIEW_CHANNEL,
            guildId: t,
            baseChannelId: a,
            channelId: n,
            details: u
        });
        let d = null == u ? void 0 : u.initialMessageId;
        null != d
            ? i.Z.jumpToMessage({
                  channelId: n,
                  messageId: d,
                  flash: c,
                  jumpType: o.SR.INSTANT
              })
            : s.Z.fetchMessages({
                  guildId: t,
                  channelId: n
              });
    },
    openResourceChannelAsSidebar(e) {
        let { guildId: t, channelId: n } = e;
        null != t &&
            ((0, a.C3)(t, n, !1),
            r.Z.dispatch({
                type: 'SIDEBAR_VIEW_CHANNEL',
                sidebarType: l.tI.VIEW_CHANNEL,
                guildId: t,
                baseChannelId: c.oC.GUILD_HOME,
                channelId: n
            }));
    },
    openThreadAsSidebar(e) {
        let { guildId: t, baseChannelId: n, channelId: a, flash: c = !0, details: u } = e;
        r.Z.dispatch({
            type: 'SIDEBAR_VIEW_CHANNEL',
            sidebarType: l.tI.VIEW_THREAD,
            baseChannelId: n,
            channelId: a,
            details: u
        }),
            (null == u ? void 0 : u.initialMessageId) != null
                ? i.Z.jumpToMessage({
                      channelId: a,
                      messageId: u.initialMessageId,
                      flash: c,
                      jumpType: o.SR.INSTANT
                  })
                : s.Z.fetchMessages({
                      guildId: t,
                      channelId: a
                  });
    },
    closeChannelSidebar(e) {
        r.Z.dispatch({
            type: 'SIDEBAR_CLOSE',
            baseChannelId: e
        });
    },
    openGuildSidebar(e) {
        let { guildId: t, baseChannelId: n, sidebarType: i, details: o } = e;
        return r.Z.dispatch({
            type: 'SIDEBAR_VIEW_GUILD',
            sidebarType: i,
            baseChannelId: n,
            guildId: t,
            details: o
        });
    },
    closeGuildSidebar(e) {
        r.Z.dispatch({
            type: 'SIDEBAR_CLOSE_GUILD',
            guildId: e
        });
    }
};
