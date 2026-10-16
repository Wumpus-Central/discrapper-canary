e.d(t, { Mm: () => A, Op: () => o, Q5: () => p, Rc: () => h, jS: () => a, kG: () => d });
var i = e(991690),
    l = e(91242),
    u = e(373677),
    c = e(165610);
let d = "0",
    r = { type: i.U.APP_CHANNEL, channelId: d };
function p(n) {
    return (n.type === i.U.APP_CHANNEL || n.type === i.U.VOICE_CHANNEL) && n.channelId === d;
}
function a(n) {
    return n?.install_scope === "guild" ? n.guild_id : void 0;
}
function o(n) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : i.U.APP_CHANNEL,
        e = (0, u.BR)(t);
    return e === i.U.APP_CHANNEL && null == n
        ? r
        : null == n
          ? { type: e, channelId: d }
          : { type: e, channelId: d, guildId: n };
}
function A(n) {
    return u.Eb.map((t) => l.A.getFrame((0, c.VA)(n, o(void 0, t)))).filter((n) => null != n);
}
function h(n) {
    let t = A(n);
    return t.find(c.x1) ?? t[0];
}
