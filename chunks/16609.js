function i(e) {
    if (null != e) return 'channel_id' in e ? e.channel_id : void 0;
}
function r(e) {
    if (null != e) return 'guild_id' in e ? e.guild_id : void 0;
}
function a(e) {
    if (null != e) return 'starting_channel_id' in e ? e.starting_channel_id : void 0;
}
function s(e) {
    if (null != e) return 'starting_guild_id' in e ? e.starting_guild_id : void 0;
}
n.d(t, {
    hu: () => s,
    jS: () => r,
    pY: () => i,
    wq: () => a
});
