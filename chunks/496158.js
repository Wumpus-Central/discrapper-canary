n.d(t, { D: () => o });
var r = n(647438),
    i = n(430824);
function a(e) {
    return "contextless" === e.type
        ? {
              channel: void 0,
              guild: void 0,
          }
        : {
              channel: e.channel,
              guild: i.Z.getGuild(e.channel.guild_id),
          };
}
function o(e) {
    return r.useMemo(() => a(e), [e]);
}
