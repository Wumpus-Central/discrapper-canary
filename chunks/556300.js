"use strict";
n.d(t, { A: () => c });
var i = n(627968);
n(64700);
var r = n(192308),
    s = n(442433),
    a = n(332173),
    o = n(37632),
    l = n(734057),
    d = n(706083),
    _ = n(365526),
    u = n(652215);
function c(e) {
    return {
        react(t, c, E) {
            let h = l.A.getChannel(t.channelId),
                m = E.noStyleAndInteraction
                    ? void 0
                    : (n) => {
                          e.shouldStopPropagation && n?.stopPropagation(),
                              (0, d.o)(t.guildId, t.channelId, t.messageId),
                              e.shouldCloseDefaultModals && (0, r.closeAllModals)();
                      },
                f =
                    E.noStyleAndInteraction || null == t.channelId || (null == h && null == t.originalLink)
                        ? u.tEg
                        : (e) => {
                              (0, s.L3)(e, async () => {
                                  let { default: e } = await n.e("4391").then(n.bind(n, 254106));
                                  return (n) =>
                                      (0, i.jsx)(e, {
                                          ...n,
                                          channel: h,
                                          channelId: h?.id ?? t.channelId,
                                          originalLink: t.originalLink,
                                          messageId: t.messageId,
                                      });
                              });
                          };
            return (0, i.jsxs)(
                a.A,
                {
                    role: "link",
                    onClick: m,
                    onContextMenu: f,
                    className: "channelMention",
                    children: [
                        null != t.inContent ? c(t.inContent, E) : null,
                        null != t.inContent ? (0, i.jsx)(o.A, {}) : null,
                        (0, _.t)(t, c, E),
                    ],
                },
                E.key,
            );
        },
    };
}
