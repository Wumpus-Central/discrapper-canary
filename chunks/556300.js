"use strict";
n.d(t, { A: () => _ });
var r = n(627968);
n(64700);
var i = n(192308),
    s = n(442433),
    a = n(332173),
    o = n(37632),
    l = n(734057),
    u = n(987877),
    c = n(365526),
    d = n(652215);
function _(e) {
    return {
        react(t, _, f) {
            let p = l.A.getChannel(t.channelId),
                h = f.noStyleAndInteraction
                    ? void 0
                    : (n) => {
                          e.shouldStopPropagation && n?.stopPropagation(),
                              (0, u.o)(t.guildId, t.channelId, t.messageId),
                              e.shouldCloseDefaultModals && (0, i.closeAllModals)();
                      },
                E =
                    f.noStyleAndInteraction || null == t.channelId || (null == p && null == t.originalLink)
                        ? d.tEg
                        : (e) => {
                              (0, s.L3)(e, async () => {
                                  let { default: e } = await n.e("99041").then(n.bind(n, 612856));
                                  return (n) =>
                                      (0, r.jsx)(e, {
                                          ...n,
                                          channel: p,
                                          channelId: p?.id ?? t.channelId,
                                          originalLink: t.originalLink,
                                          messageId: t.messageId,
                                      });
                              });
                          };
            return (0, r.jsxs)(
                a.A,
                {
                    role: "link",
                    onClick: h,
                    onContextMenu: E,
                    className: "channelMention",
                    children: [
                        null != t.inContent ? _(t.inContent, f) : null,
                        null != t.inContent ? (0, r.jsx)(o.A, {}) : null,
                        (0, c.t)(t, _, f),
                    ],
                },
                f.key,
            );
        },
    };
}
