n.d(t, { Z: () => p });
var r = n(54381),
    i = n(473749),
    l = n(442837),
    a = n(592125),
    s = n(430824),
    o = n(375954),
    c = n(144725),
    u = n(351679),
    d = n(372539);
function p(e) {
    let { item: t } = e,
        {
            channelId: n,
            messageIds: p,
            title: f,
        } = i.useMemo(() => {
            switch (t.data.kind) {
                case "message":
                    return {
                        channelId: t.data.message.channel_id,
                        messageIds: [t.data.message.id],
                        title: void 0,
                    };
                case "channelSummary":
                    return {
                        channelId: t.data.topic.channelId,
                        messageIds: [t.data.topic.startId],
                        title: t.data.topic.topic,
                    };
                case "generatedCandidate":
                    return {
                        channelId: t.data.item.channel_id,
                        messageIds: t.data.item.message_ids.slice(0, 1),
                        title: t.data.item.primary_text,
                    };
                case "forumThread":
                    return {
                        channelId: t.data.threadChannel.id,
                        messageIds: [t.data.message.id],
                        title: void 0,
                    };
                default:
                    return {
                        channelId: void 0,
                        messageIds: [],
                        title: void 0,
                    };
            }
        }, [t]),
        h = (0, l.e7)([a.Z], () => (null != n ? a.Z.getChannel(n) : null), [n]),
        g = (0, l.e7)([s.Z], () => ((null == h ? void 0 : h.guild_id) != null ? s.Z.getGuild(h.guild_id) : null), [h]),
        m = (0, l.Wu)(
            [c.Z, o.Z],
            () =>
                null == n
                    ? []
                    : p
                          .map((e) => {
                              var t;
                              return null != (t = c.Z.getMessage(e)) ? t : o.Z.getMessage(n, e);
                          })
                          .filter((e) => null != e),
            [n, p],
        );
    return null == h || null == g || 0 === m.length
        ? null
        : (0, r.jsxs)("div", {
              className: d.container,
              children: [
                  null != f
                      ? (0, r.jsx)("div", {
                            className: d.titleContainer,
                            children: (0, r.jsx)("div", {
                                className: d.title,
                                children: f,
                            }),
                        })
                      : null,
                  (0, r.jsx)("div", {
                      className: d.messagesContainer,
                      children: m.map((e) =>
                          (0, r.jsx)(
                              u.Z,
                              {
                                  channel: h,
                                  message: e,
                                  renderThreadAccessory: !1,
                                  disableReactionCreates: !1,
                                  disableReactionUpdates: !1,
                              },
                              e.id,
                          ),
                      ),
                  }),
              ],
          });
}
