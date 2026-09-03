n.d(t, { Cf: () => l, Ey: () => d, G9: () => o, NE: () => s, NJ: () => c, un: () => a }), n(321073);
var i = n(228366),
    r = n(36124);
function a(e, t) {
    i.h.dispatch({ type: "GUILD_SUBSCRIPTIONS_MEMBERS_ADD", guildId: e, userIds: t });
}
function s(e, t) {
    i.h.dispatch({ type: "GUILD_SUBSCRIPTIONS_MEMBERS_REMOVE", guildId: e, userIds: t });
}
function l(e) {
    i.h.dispatch({ type: "GUILD_SUBSCRIPTIONS_ADD_MEMBER_UPDATES", guildId: e });
}
function o(e) {
    i.h.dispatch({ type: "GUILD_SUBSCRIPTIONS_REMOVE_MEMBER_UPDATES", guildId: e });
}
function d(e, t, n) {
    i.h.dispatch({ type: "GUILD_SUBSCRIPTIONS_CHANNEL", guildId: e, channelId: t, ranges: n });
}
function c(e) {
    let { guildId: t, channelId: n, y: i, height: a, rowHeight: s } = e;
    function l(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return Math.max(0, Math.ceil(Math.ceil(e / s)) + t);
    }
    let o = [];
    function c(e) {
        let t = e + (r.JM - 1);
        return o.push([e, t]), t + 1;
    }
    let u = l(0.5 * a),
        _ = l(i, -u),
        E = l(i + a, u);
    for (_ > 0 && (_ = Math.max(c(0), _)), _ = Math.floor(_ / r.JM) * r.JM; _ <= E; ) _ = c(_);
    d(t, n, o);
}
