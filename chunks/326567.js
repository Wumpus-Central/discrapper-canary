"use strict";
n.d(t, { r: () => l });
var i = n(627968);
n(64700);
var s = n(442433);
function l(e, t, l, r, a) {
    let o = l.getGuildId();
    return null != o
        ? (0, s.L3)(
              e,
              async () => {
                  let { default: e } = await n.e("52502").then(n.bind(n, 335253));
                  return (n) =>
                      (0, i.jsx)(e, {
                          ...n,
                          user: t,
                          channel: l,
                          guildId: o,
                          onInteraction: (e) => a("GuildVoiceUserContextMenu", e),
                      });
              },
              r,
          )
        : (0, s.L3)(
              e,
              async () => {
                  let { default: e } = await n.e("43076").then(n.bind(n, 661455));
                  return (n) =>
                      (0, i.jsx)(e, {
                          ...n,
                          user: t,
                          channel: l,
                          onInteraction: (e) => a("BaseVoiceUserContextMenu", e),
                      });
              },
              r,
          );
}
