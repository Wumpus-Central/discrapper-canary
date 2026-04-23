n.d(t, { A: () => m });
var a = n(627968),
    i = n(64700),
    s = n(311907),
    l = n(734057),
    r = n(71393),
    d = n(320501),
    o = n(883344),
    c = n(691611),
    u = n(165553);
function m(e) {
    let { item: t } = e,
        {
            channelId: n,
            messageIds: m,
            title: h,
        } = i.useMemo(() => {
            switch (t.data.kind) {
                case "message":
                    return { channelId: t.data.message.channel_id, messageIds: [t.data.message.id], title: void 0 };
                case "forumThread":
                    return { channelId: t.data.threadChannel.id, messageIds: [t.data.message.id], title: void 0 };
                default:
                    return { channelId: void 0, messageIds: [], title: void 0 };
            }
        }, [t]),
        g = (0, s.bG)([l.A], () => (null != n ? l.A.getChannel(n) : null), [n]),
        p = (0, s.bG)([r.A], () => (g?.guild_id != null ? r.A.getGuild(g.guild_id) : null), [g]),
        v = (0, s.yK)(
            [o.A, d.A],
            () => (null == n ? [] : m.map((e) => o.A.getMessage(e) ?? d.A.getMessage(n, e)).filter((e) => null != e)),
            [n, m],
        );
    return null == g || null == p || 0 === v.length
        ? null
        : (0, a.jsxs)("div", {
              className: u.kL,
              children: [
                  null != h
                      ? (0, a.jsx)("div", {
                            className: u.gn,
                            children: (0, a.jsx)("div", { className: u.DD, children: h }),
                        })
                      : null,
                  (0, a.jsx)("div", {
                      className: u.MJ,
                      children: v.map((e) =>
                          (0, a.jsx)(
                              c.A,
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
