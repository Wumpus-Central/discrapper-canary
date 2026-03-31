n.d(t, { r: () => s });
var i = n(627968);
n(64700);
var l = n(442433);
function s(e, t, s, a, r) {
    let o = s.getGuildId();
    return null != o
        ? (0, l.L3)(
              e,
              async () => {
                  let { default: e } = await n.e("52502").then(n.bind(n, 335253));
                  return (n) =>
                      (0, i.jsx)(e, {
                          ...n,
                          user: t,
                          channel: s,
                          guildId: o,
                          onInteraction: (e) => r("GuildVoiceUserContextMenu", e),
                      });
              },
              a,
          )
        : (0, l.L3)(
              e,
              async () => {
                  let { default: e } = await n.e("43076").then(n.bind(n, 661455));
                  return (n) =>
                      (0, i.jsx)(e, {
                          ...n,
                          user: t,
                          channel: s,
                          onInteraction: (e) => r("BaseVoiceUserContextMenu", e),
                      });
              },
              a,
          );
}
