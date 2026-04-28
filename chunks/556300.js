"use strict";
n.d(t, { A: () => h });
var l = n(627968);
n(64700);
var i = n(192308),
    s = n(442433),
    a = n(332173),
    r = n(37632),
    o = n(734057),
    c = n(706083),
    u = n(365526),
    d = n(652215);
function h(e) {
    return {
        react(t, h, m) {
            let p = o.A.getChannel(t.channelId),
                f = m.noStyleAndInteraction
                    ? void 0
                    : (n) => {
                          e.shouldStopPropagation && n?.stopPropagation(),
                              (0, c.o)(t.guildId, t.channelId, t.messageId),
                              e.shouldCloseDefaultModals && (0, i.closeAllModals)();
                      },
                g =
                    m.noStyleAndInteraction || null == t.channelId || (null == p && null == t.originalLink)
                        ? d.tEg
                        : (e) => {
                              (0, s.L3)(e, async () => {
                                  let { default: e } = await Promise.all([n.e("43266"), n.e("4391")]).then(
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
                a.A,
                {
                    role: "link",
                    onClick: f,
                    onContextMenu: g,
                    className: "channelMention",
                    children: [
                        null != t.inContent ? h(t.inContent, m) : null,
                        null != t.inContent ? (0, l.jsx)(r.A, {}) : null,
                        (0, u.t)(t, h, m),
                    ],
                },
                m.key,
            );
        },
    };
}
