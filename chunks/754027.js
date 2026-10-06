n.d(t, { Op: () => c, Q5: () => o, Rc: () => u, jS: () => d, kG: () => s });
var i = n(991690),
    r = n(91242),
    a = n(165610);
let s = "0",
    l = { type: i.U.APP_CHANNEL, channelId: s };
function o(e) {
    return e.type === i.U.APP_CHANNEL && e.channelId === s;
}
function d(e) {
    return e?.install_scope === "guild" ? e.guild_id : void 0;
}
function c(e) {
    return null == e ? l : { type: i.U.APP_CHANNEL, channelId: s, guildId: e };
}
function u(e) {
    return r.A.getFrame((0, a.VA)(e, l));
}
