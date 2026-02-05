n.d(t, { A: () => A });
var i = n(627968),
    r = n(64700),
    a = n(311907),
    l = n(734057),
    s = n(71393),
    o = n(320501),
    d = n(883344),
    c = n(691611),
    u = n(659088);
function A(e) {
    let { item: t } = e,
        {
            channelId: n,
            messageIds: A,
            title: h,
        } = r.useMemo(() => {
            switch (t.data.kind) {
                case "message":
                    return { channelId: t.data.message.channel_id, messageIds: [t.data.message.id], title: void 0 };
                case "generatedCandidate":
                    return {
                        channelId: t.data.item.channel_id,
                        messageIds: t.data.item.message_ids.slice(0, 1),
                        title: t.data.item.primary_text,
                    };
                case "forumThread":
                    return { channelId: t.data.threadChannel.id, messageIds: [t.data.message.id], title: void 0 };
                default:
                    return { channelId: void 0, messageIds: [], title: void 0 };
            }
        }, [t]),
        _ = (0, a.bG)([l.A], () => (null != n ? l.A.getChannel(n) : null), [n]),
        m = (0, a.bG)([s.A], () => (_?.guild_id != null ? s.A.getGuild(_.guild_id) : null), [_]),
        p = (0, a.yK)(
            [d.A, o.A],
            () => (null == n ? [] : A.map((e) => d.A.getMessage(e) ?? o.A.getMessage(n, e)).filter((e) => null != e)),
            [n, A],
        );
    return null == _ || null == m || 0 === p.length
        ? null
        : (0, i.jsxs)("div", {
              className: u.kL,
              children: [
                  null != h
                      ? (0, i.jsx)("div", {
                            className: u.gn,
                            children: (0, i.jsx)("div", { className: u.DD, children: h }),
                        })
                      : null,
                  (0, i.jsx)("div", {
                      className: u.MJ,
                      children: p.map((e) =>
                          (0, i.jsx)(
                              c.A,
                              {
                                  channel: _,
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
