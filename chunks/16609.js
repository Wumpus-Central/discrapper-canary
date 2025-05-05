function r(e) {
    if (null != e) return 'channel_id' in e ? e.channel_id : void 0;
}
function i(e) {
    if (null != e) return 'guild_id' in e ? e.guild_id : void 0;
}
function a(e) {
    if (null != e) return 'starting_channel_id' in e ? e.starting_channel_id : void 0;
}
function o(e) {
    if (null != e) return 'starting_guild_id' in e ? e.starting_guild_id : void 0;
}
n.d(t, {
    Bt: () => c,
    dK: () => l,
    hu: () => o,
    jS: () => i,
    pY: () => r,
    wq: () => a
}),
    n(35282);
let s = /^i-[^-]+-cl-[^-]+-(\d+)-(\d+)$/;
function l(e) {
    if ('string' != typeof e)
        return {
            guildId: void 0,
            channelId: void 0
        };
    let t = e.match(s);
    return null == t
        ? {
              guildId: void 0,
              channelId: void 0
          }
        : {
              guildId: '0' === t[1] ? void 0 : t[1],
              channelId: '0' === t[2] ? void 0 : t[2]
          };
}
function c(e) {
    return l(e).channelId;
}
