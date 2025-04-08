function r(e) {
    if (null != e) return 'channel_id' in e ? e.channel_id : void 0;
}
function i(e) {
    if (null != e) return 'guild_id' in e ? e.guild_id : void 0;
}
function o(e) {
    if (null != e) return 'starting_channel_id' in e ? e.starting_channel_id : void 0;
}
function a(e) {
    if (null != e) return 'starting_guild_id' in e ? e.starting_guild_id : void 0;
}
n.d(t, {
    Bt: () => l,
    hu: () => a,
    jS: () => i,
    pY: () => r,
    wq: () => o
}),
    n(35282);
let s = /^i-[^-]+-cl-[^-]+-\d+-(\d+)$/;
function l(e) {
    if ('string' != typeof e) return;
    let t = e.match(s),
        n = null != t ? t[1] : void 0;
    return '0' === n ? void 0 : n;
}
