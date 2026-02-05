"use strict";
n.d(t, { A: () => A });
var r = n(627968);
n(64700);
var i = n(397927),
    a = n(442433),
    s = n(956793),
    o = n(235393),
    l = n(376943),
    u = n(22007),
    c = n(332173),
    d = n(37632),
    _ = n(95701),
    f = n(734057),
    p = n(71393),
    h = n(449054),
    m = n(365526),
    g = n(652215);
async function E(e, t, n) {
    if (null == t) return;
    if ((o.A.trackDiscordLinkClicked({ guildId: e, channelId: t, messageId: n }), null != e)) {
        let r = p.A.getGuild(e);
        if (r?.joinedAt == null)
            try {
                await h.Z2(e, {}, { channelId: t, messageId: n });
                return;
            } catch {}
    }
    let r = f.A.getChannel(t);
    null != r && null == n && (0, _.ay)(r.type) && (0, l.nc)(r)
        ? s.default.selectVoiceChannel(r.id)
        : (0, u.A)(g.BVt.CHANNEL(e, t, n));
}
function A(e) {
    return {
        react(t, s, o) {
            let l = f.A.getChannel(t.channelId),
                u = o.noStyleAndInteraction
                    ? void 0
                    : (n) => {
                          e.shouldStopPropagation && n?.stopPropagation(),
                              E(t.guildId, t.channelId, t.messageId),
                              e.shouldCloseDefaultModals && (0, i.s7G)();
                      },
                _ =
                    o.noStyleAndInteraction || null == t.channelId || (null == l && null == t.originalLink)
                        ? g.tEg
                        : (e) => {
                              (0, a.L3)(e, async () => {
                                  let { default: e } = await n.e("99041").then(n.bind(n, 612856));
                                  return (n) =>
                                      (0, r.jsx)(e, {
                                          ...n,
                                          channel: l,
                                          channelId: l?.id ?? t.channelId,
                                          originalLink: t.originalLink,
                                          messageId: t.messageId,
                                      });
                              });
                          };
            return (0, r.jsxs)(
                c.A,
                {
                    role: "link",
                    onClick: u,
                    onContextMenu: _,
                    className: "channelMention",
                    children: [
                        null != t.inContent ? s(t.inContent, o) : null,
                        null != t.inContent ? (0, r.jsx)(d.A, {}) : null,
                        (0, m.t)(t, s, o),
                    ],
                },
                o.key,
            );
        },
    };
}
