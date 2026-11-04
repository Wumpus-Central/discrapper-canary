var l = t(477900);
t(582128);
var a = t(192308),
    i = t(442433),
    r = t(332173),
    s = t(37632),
    o = t(734057),
    c = t(987877),
    u = t(143145),
    d = t(652215);
t.d(
    n,
    {},
    {
        A: function (e) {
            return {
                react(n, m, h) {
                    let p = o.A.getChannel(n.channelId),
                        x = h.noStyleAndInteraction
                            ? void 0
                            : (t) => {
                                  (e.shouldStopPropagation && t?.stopPropagation(),
                                      (0, c.o)(n.guildId, n.channelId, n.messageId, n.conversationId),
                                      e.shouldCloseDefaultModals && (0, a.s7)());
                              },
                        g =
                            h.noStyleAndInteraction || null == n.channelId || (null == p && null == n.originalLink)
                                ? d.tEg
                                : (e) => {
                                      (0, i.L3)(e, async () => {
                                          let { default: e } = await Promise.all([
                                              t.e(476662),
                                              t.e(253044),
                                              t.e(311913),
                                              t.e(881717),
                                              t.e(363269),
                                              t.e(474172),
                                              t.e(489218),
                                              t.e(912875),
                                              t.e(862782),
                                              t.e(55348),
                                              t.e(638221),
                                              t.e(343266),
                                              t.e(941427),
                                          ]).then(t.bind(t, 223998));
                                          return (t) =>
                                              (0, l.jsx)(e, {
                                                  ...t,
                                                  channel: p,
                                                  channelId: p?.id ?? n.channelId,
                                                  originalLink: n.originalLink,
                                                  messageId: n.messageId,
                                              });
                                      });
                                  };
                    return (0, l.jsxs)(
                        r.A,
                        {
                            role: "link",
                            onClick: x,
                            onContextMenu: g,
                            className: "channelMention",
                            children: [
                                null != n.inContent ? m(n.inContent, h) : null,
                                null != n.inContent ? (0, l.jsx)(s.A, {}) : null,
                                (0, u.tj)(n, m, h),
                            ],
                        },
                        h.key,
                    );
                },
            };
        },
    },
);
