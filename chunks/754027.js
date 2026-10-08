n.d(t, { Mm: () => _, Op: () => u, Q5: () => d, Rc: () => E, jS: () => c, kG: () => l });
var i = n(991690),
    r = n(91242),
    a = n(373677),
    s = n(165610);
let l = "0",
    o = { type: i.U.APP_CHANNEL, channelId: l };
function d(e) {
    return (e.type === i.U.APP_CHANNEL || e.type === i.U.VOICE_CHANNEL) && e.channelId === l;
}
function c(e) {
    return e?.install_scope === "guild" ? e.guild_id : void 0;
}
function u(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : i.U.APP_CHANNEL,
        n = (0, a.BR)(t);
    return n === i.U.APP_CHANNEL && null == e
        ? o
        : null == e
          ? { type: n, channelId: l }
          : { type: n, channelId: l, guildId: e };
}
function _(e) {
    return a.Eb.map((t) => r.A.getFrame((0, s.VA)(e, u(void 0, t)))).filter((e) => null != e);
}
function E(e) {
    let t = _(e);
    return t.find(s.x1) ?? t[0];
}
