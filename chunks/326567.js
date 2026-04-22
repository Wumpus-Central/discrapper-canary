t.d(n, { r: () => a });
var l = t(627968);
t(64700);
var i = t(442433);
function a(e, n, a, s, r) {
    let o = a.getGuildId();
    return null != o
        ? (0, i.L3)(
              e,
              async () => {
                  let { default: e } = await Promise.all([t.e("43076"), t.e("14058")]).then(t.bind(t, 335253));
                  return (t) =>
                      (0, l.jsx)(e, {
                          ...t,
                          user: n,
                          channel: a,
                          guildId: o,
                          onInteraction: (e) => r("GuildVoiceUserContextMenu", e),
                      });
              },
              s,
          )
        : (0, i.L3)(
              e,
              async () => {
                  let { default: e } = await Promise.all([t.e("43076"), t.e("2062")]).then(t.bind(t, 661455));
                  return (t) =>
                      (0, l.jsx)(e, {
                          ...t,
                          user: n,
                          channel: a,
                          onInteraction: (e) => r("BaseVoiceUserContextMenu", e),
                      });
              },
              s,
          );
}
