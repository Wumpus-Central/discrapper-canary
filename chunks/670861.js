n.d(t, {
    A: () => p,
});
var r = n(627968),
    i = n(64700),
    l = n(311907),
    a = n(734057),
    s = n(71393),
    o = n(320501),
    c = n(883344),
    u = n(691611),
    d = n(659088);

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
        h = (0, l.bG)([a.A], () => (null != n ? a.A.getChannel(n) : null), [n]),
        A = (0, l.bG)([s.A], () => ((null == h ? void 0 : h.guild_id) != null ? s.A.getGuild(h.guild_id) : null), [h]),
        g = (0, l.yK)(
            [c.A, o.A],
            () =>
                null == n
                    ? []
                    : p
                          .map((e) => {
                              var t;
                              return null != (t = c.A.getMessage(e)) ? t : o.A.getMessage(n, e);
                          })
                          .filter((e) => null != e),
            [n, p],
        );
    return null == h || null == A || 0 === g.length
        ? null
        : (0, r.jsxs)("div", {
              className: d.kL,
              children: [
                  null != f
                      ? (0, r.jsx)("div", {
                            className: d.gn,
                            children: (0, r.jsx)("div", {
                                className: d.DD,
                                children: f,
                            }),
                        })
                      : null,
                  (0, r.jsx)("div", {
                      className: d.MJ,
                      children: g.map((e) =>
                          (0, r.jsx)(
                              u.A,
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
