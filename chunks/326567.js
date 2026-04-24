"use strict";
n.d(t, { r: () => r });
var i = n(627968);
n(64700);
var l = n(442433);
function r(e, t, r, a, s) {
    let o = r.getGuildId();
    return null != o
        ? (0, l.L3)(
              e,
              async () => {
                  let { default: e } = await Promise.all([n.e("78178"), n.e("43076"), n.e("82250")]).then(
                      n.bind(n, 335253),
                  );
                  return (n) =>
                      (0, i.jsx)(e, {
                          ...n,
                          user: t,
                          channel: r,
                          guildId: o,
                          onInteraction: (e) => s("GuildVoiceUserContextMenu", e),
                      });
              },
              a,
          )
        : (0, l.L3)(
              e,
              async () => {
                  let { default: e } = await Promise.all([n.e("43076"), n.e("4197")]).then(n.bind(n, 661455));
                  return (n) =>
                      (0, i.jsx)(e, {
                          ...n,
                          user: t,
                          channel: r,
                          onInteraction: (e) => s("BaseVoiceUserContextMenu", e),
                      });
              },
              a,
          );
}
