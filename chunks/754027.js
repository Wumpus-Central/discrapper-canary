n.d(t, { Op: () => o, Rc: () => d, jS: () => l });
var i = n(991690),
    r = n(91242),
    a = n(165610);
let s = { type: i.U.APP_CHANNEL };
function l(e) {
    return e?.install_scope === "guild" ? e.guild_id : void 0;
}
function o(e) {
    return null == e ? s : { type: i.U.APP_CHANNEL, guildId: e };
}
function d(e) {
    return r.A.getFrame((0, a.VA)(e, s));
}
