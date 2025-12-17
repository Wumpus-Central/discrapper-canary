n.d(t, { Z: () => p });
var r = n(54381),
    i = n(473749),
    l = n(442837),
    a = n(592125),
    o = n(430824),
    s = n(375954),
    c = n(144725),
    u = n(351679),
    d = n(617821);
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
        g = (0, l.e7)([a.Z], () => (null != n ? a.Z.getChannel(n) : null), [n]),
        h = (0, l.e7)([o.Z], () => ((null == g ? void 0 : g.guild_id) != null ? o.Z.getGuild(g.guild_id) : null), [g]),
        m = (0, l.Wu)(
            [c.Z, s.Z],
            () =>
                null == n
                    ? []
                    : p
                          .map((e) => {
                              var t;
                              return null != (t = c.Z.getMessage(e)) ? t : s.Z.getMessage(n, e);
                          })
                          .filter((e) => null != e),
            [n, p],
        );
    return null == g || null == h || 0 === m.length
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
                                  channel: g,
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
