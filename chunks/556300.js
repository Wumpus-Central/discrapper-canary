"use strict";
n.d(t, { A: () => h });
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
function h(e) {
    return {
        react(t, h, m) {
            let f = o.A.getChannel(t.channelId),
                p = m.noStyleAndInteraction
                    ? void 0
                    : (n) => {
                          e.shouldStopPropagation && n?.stopPropagation(),
                              (0, u.o)(t.guildId, t.channelId, t.messageId),
                              e.shouldCloseDefaultModals && (0, i.closeAllModals)();
                      },
                g =
                    m.noStyleAndInteraction || null == t.channelId || (null == f && null == t.originalLink)
                        ? d.tEg
                        : (e) => {
                              (0, s.L3)(e, async () => {
                                  let { default: e } = await Promise.all([n.e("343266"), n.e("404391")]).then(
                                      n.bind(n, 254106),
                                  );
                                  return (n) =>
                                      (0, l.jsx)(e, {
                                          ...n,
                                          channel: f,
                                          channelId: f?.id ?? t.channelId,
                                          originalLink: t.originalLink,
                                          messageId: t.messageId,
                                      });
                              });
                          };
            return (0, l.jsxs)(
                r.A,
                {
                    role: "link",
                    onClick: p,
                    onContextMenu: g,
                    className: "channelMention",
                    children: [
                        null != t.inContent ? h(t.inContent, m) : null,
                        null != t.inContent ? (0, l.jsx)(a.A, {}) : null,
                        (0, c.t)(t, h, m),
                    ],
                },
                m.key,
            );
        },
    };
}
