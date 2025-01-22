var i = r(570140),
    a = r(904245),
    o = r(593472),
    s = r(526120),
    l = r(348245),
    u = r(897473),
    c = r(176505);
n.Z = {
    openPrivateChannelAsSidebar(e) {
        let { channelId: n, messageId: r, baseChannelId: o, hasSingleMessageRequest: s } = e;
        i.Z.dispatch({
            type: 'SIDEBAR_VIEW_CHANNEL',
            sidebarType: u.tI.VIEW_MESSAGE_REQUEST,
            baseChannelId: o,
            channelId: n,
            details: {
                type: u.Ff.MESSAGE_REQUEST,
                hasSingleMessageRequest: s
            }
        }),
            null != r
                ? a.Z.jumpToMessage({
                      channelId: n,
                      messageId: r,
                      flash: !0
                  })
                : l.Z.fetchMessages({ channelId: n });
    },
    openChannelAsSidebar(e) {
        let { guildId: n, channelId: r, baseChannelId: s, flash: c = !0, details: d } = e;
        i.Z.dispatch({
            type: 'SIDEBAR_VIEW_CHANNEL',
            sidebarType: u.tI.VIEW_CHANNEL,
            guildId: n,
            baseChannelId: s,
            channelId: r,
            details: d
        });
        let f = null == d ? void 0 : d.initialMessageId;
        null != f
            ? a.Z.jumpToMessage({
                  channelId: r,
                  messageId: f,
                  flash: c,
                  jumpType: o.SR.INSTANT
              })
            : l.Z.fetchMessages({
                  guildId: n,
                  channelId: r
              });
    },
    openResourceChannelAsSidebar(e) {
        let { guildId: n, channelId: r } = e;
        null != n &&
            ((0, s.C3)(n, r, !1),
            i.Z.dispatch({
                type: 'SIDEBAR_VIEW_CHANNEL',
                sidebarType: u.tI.VIEW_CHANNEL,
                guildId: n,
                baseChannelId: c.oC.GUILD_HOME,
                channelId: r
            }));
    },
    openThreadAsSidebar(e) {
        let { guildId: n, baseChannelId: r, channelId: s, flash: c = !0, details: d } = e;
        i.Z.dispatch({
            type: 'SIDEBAR_VIEW_CHANNEL',
            sidebarType: u.tI.VIEW_THREAD,
            baseChannelId: r,
            channelId: s,
            details: d
        }),
            (null == d ? void 0 : d.initialMessageId) != null
                ? a.Z.jumpToMessage({
                      channelId: s,
                      messageId: d.initialMessageId,
                      flash: c,
                      jumpType: o.SR.INSTANT
                  })
                : l.Z.fetchMessages({
                      guildId: n,
                      channelId: s
                  });
    },
    closeChannelSidebar(e) {
        i.Z.dispatch({
            type: 'SIDEBAR_CLOSE',
            baseChannelId: e
        });
    },
    openGuildSidebar(e) {
        let { guildId: n, baseChannelId: r, sidebarType: a, details: o } = e;
        return i.Z.dispatch({
            type: 'SIDEBAR_VIEW_GUILD',
            sidebarType: a,
            baseChannelId: r,
            guildId: n,
            details: o
        });
    },
    closeGuildSidebar(e) {
        i.Z.dispatch({
            type: 'SIDEBAR_CLOSE_GUILD',
            guildId: e
        });
    }
};
