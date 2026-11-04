var i = n(991690),
    r = n(91242),
    a = n(373677),
    s = n(165610);
let l = { type: i.U.APP_CHANNEL, channelId: "0" };
function o(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : i.U.APP_CHANNEL,
        n = (0, a.BR)(t);
    return n === i.U.APP_CHANNEL && null == e
        ? l
        : null == e
          ? { type: n, channelId: "0" }
          : { type: n, channelId: "0", guildId: e };
}
function d(e) {
    return a.Eb.map((t) => r.A.getFrame((0, s.VA)(e, o(void 0, t)))).filter((e) => null != e);
}
n.d(
    t,
    {},
    {
        Mm: d,
        Op: o,
        Q5: function (e) {
            return (e.type === i.U.APP_CHANNEL || e.type === i.U.VOICE_CHANNEL) && "0" === e.channelId;
        },
        Rc: function (e) {
            let t = d(e);
            return t.find(s.x1) ?? t[0];
        },
        Th: function (e) {
            let t = r.A.getFrame((0, s.VA)(e, s.ZN));
            return null != t && null == (0, s.zB)(t) ? t : void 0;
        },
        UT: function (e) {
            return e.surface.type === i.U.OVERLAY && null == (0, s.zB)(e);
        },
        jS: function (e) {
            return e?.install_scope === "guild" ? e.guild_id : void 0;
        },
    },
);
