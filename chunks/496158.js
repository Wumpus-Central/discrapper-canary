n.d(t, { D: () => a });
var r = n(73800),
    i = n(430824);
function o(e) {
    return 'contextless' === e.type
        ? {
              channel: void 0,
              guild: void 0
          }
        : {
              channel: e.channel,
              guild: i.Z.getGuild(e.channel.guild_id)
          };
}
function a(e) {
    return r.useMemo(() => o(e), [e]);
}
