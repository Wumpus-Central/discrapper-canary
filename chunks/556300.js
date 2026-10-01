t.d(n, { A: () => m });
var l = t(477900);
t(582128);
var r = t(192308),
    a = t(442433),
    i = t(332173),
    o = t(37632),
    s = t(734057),
    c = t(706083),
    u = t(143145),
    d = t(652215);
function m(e) {
    return {
        react(n, m, h) {
            let p = s.A.getChannel(n.channelId),
                g = h.noStyleAndInteraction
                    ? void 0
                    : (t) => {
                          (e.shouldStopPropagation && t?.stopPropagation(),
                              (0, c.o)(n.guildId, n.channelId, n.messageId),
                              e.shouldCloseDefaultModals && (0, r.closeAllModals)());
                      },
                f =
                    h.noStyleAndInteraction || null == n.channelId || (null == p && null == n.originalLink)
                        ? d.tEg
                        : (e) => {
                              (0, a.L3)(e, async () => {
                                  let { default: e } = await Promise.all([
                                      t.e("638221"),
                                      t.e("343266"),
                                      t.e("404391"),
                                  ]).then(t.bind(t, 254106));
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
                i.A,
                {
                    role: "link",
                    onClick: g,
                    onContextMenu: f,
                    className: "channelMention",
                    children: [
                        null != n.inContent ? m(n.inContent, h) : null,
                        null != n.inContent ? (0, l.jsx)(o.A, {}) : null,
                        (0, u.t)(n, m, h),
                    ],
                },
                h.key,
            );
        },
    };
}
