n.d(t, { A: () => m });
var l = n(477900);
n(582128);
var i = n(192308),
    s = n(442433),
    r = n(332173),
    a = n(37632),
    o = n(734057),
    u = n(706083),
    c = n(143145),
    d = n(652215);
function m(e) {
    return {
        react(t, m, h) {
            let p = o.A.getChannel(t.channelId),
                f = h.noStyleAndInteraction
                    ? void 0
                    : (n) => {
                          (e.shouldStopPropagation && n?.stopPropagation(),
                              (0, u.o)(t.guildId, t.channelId, t.messageId),
                              e.shouldCloseDefaultModals && (0, i.closeAllModals)());
                      },
                g =
                    h.noStyleAndInteraction || null == t.channelId || (null == p && null == t.originalLink)
                        ? d.tEg
                        : (e) => {
                              (0, s.L3)(e, async () => {
                                  let { default: e } = await Promise.all([n.e("343266"), n.e("404391")]).then(
                                      n.bind(n, 254106),
                                  );
                                  return (n) =>
                                      (0, l.jsx)(e, {
                                          ...n,
                                          channel: p,
                                          channelId: p?.id ?? t.channelId,
                                          originalLink: t.originalLink,
                                          messageId: t.messageId,
                                      });
                              });
                          };
            return (0, l.jsxs)(
                r.A,
                {
                    role: "link",
                    onClick: f,
                    onContextMenu: g,
                    className: "channelMention",
                    children: [
                        null != t.inContent ? m(t.inContent, h) : null,
                        null != t.inContent ? (0, l.jsx)(a.A, {}) : null,
                        (0, c.t)(t, m, h),
                    ],
                },
                h.key,
            );
        },
    };
}
