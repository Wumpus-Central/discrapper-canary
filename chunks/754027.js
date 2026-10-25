n.d(t, { Mm: () => E, Op: () => _, Q5: () => c, Rc: () => A, Th: () => f, UT: () => h, jS: () => u, kG: () => o });
var i = n(991690),
    r = n(91242),
    a = n(260498),
    s = n(373677),
    l = n(165610);
let o = "0",
    d = { type: i.U.APP_CHANNEL, channelId: o };
function c(e) {
    return (e.type === i.U.APP_CHANNEL || e.type === i.U.VOICE_CHANNEL) && e.channelId === o;
}
function u(e) {
    return e?.install_scope === "guild" ? e.guild_id : void 0;
}
function _(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : i.U.APP_CHANNEL,
        n = (0, s.BR)(t);
    return n === i.U.APP_CHANNEL && null == e
        ? d
        : null == e
          ? { type: n, channelId: o }
          : { type: n, channelId: o, guildId: e };
}
function E(e) {
    return s.Eb.map((t) => r.A.getFrame((0, l.VA)(e, _(void 0, t)))).filter((e) => null != e);
}
function A(e) {
    let t = E(e);
    return t.find(l.x1) ?? t[0];
}
function h(e) {
    return (
        e.surface.type === i.U.OVERLAY &&
        null == (0, l.zB)(e) &&
        a.Ay.findProjectByApplicationId(e.applicationId)?.preview_application_id === e.applicationId
    );
}
function f(e) {
    let t = r.A.getFrame((0, l.VA)(e, l.ZN));
    return null != t && null == (0, l.zB)(t) ? t : void 0;
}
