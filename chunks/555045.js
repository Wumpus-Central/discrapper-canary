n.d(t, { e: () => s });
var r = n(64700),
    i = n(71393);
function a(e) {
    return "contextless" === e.type
        ? {
              channel: void 0,
              guild: void 0,
          }
        : {
              channel: e.channel,
              guild: i.A.getGuild(e.channel.guild_id),
          };
}
function s(e) {
    return r.useMemo(() => a(e), [e]);
}
