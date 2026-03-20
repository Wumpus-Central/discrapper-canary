n.d(t, { A: () => A });
var i = n(627968),
    a = n(64700),
    l = n(311907),
    r = n(734057),
    s = n(71393),
    o = n(320501),
    d = n(883344),
    c = n(691611),
    u = n(514782);
function A(e) {
    let { item: t } = e,
        {
            channelId: n,
            messageIds: A,
            title: h,
        } = a.useMemo(() => {
            switch (t.data.kind) {
                case "message":
                    return { channelId: t.data.message.channel_id, messageIds: [t.data.message.id], title: void 0 };
                case "forumThread":
                    return { channelId: t.data.threadChannel.id, messageIds: [t.data.message.id], title: void 0 };
                default:
                    return { channelId: void 0, messageIds: [], title: void 0 };
            }
        }, [t]),
        _ = (0, l.bG)([r.A], () => (null != n ? r.A.getChannel(n) : null), [n]),
        m = (0, l.bG)([s.A], () => (_?.guild_id != null ? s.A.getGuild(_.guild_id) : null), [_]),
        g = (0, l.yK)(
            [d.A, o.A],
            () => (null == n ? [] : A.map((e) => d.A.getMessage(e) ?? o.A.getMessage(n, e)).filter((e) => null != e)),
            [n, A],
        );
    return null == _ || null == m || 0 === g.length
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
                      children: g.map((e) =>
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
