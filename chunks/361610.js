n.d(t, { Cf: () => _, Ey: () => o, G9: () => l, NE: () => s, NJ: () => E, un: () => a }), n(321073);
var i = n(228366),
    r = n(36124);
function a(e, t) {
    i.h.dispatch({ type: "GUILD_SUBSCRIPTIONS_MEMBERS_ADD", guildId: e, userIds: t });
}
function s(e, t) {
    i.h.dispatch({ type: "GUILD_SUBSCRIPTIONS_MEMBERS_REMOVE", guildId: e, userIds: t });
}
function _(e) {
    i.h.dispatch({ type: "GUILD_SUBSCRIPTIONS_ADD_MEMBER_UPDATES", guildId: e });
}
function l(e) {
    i.h.dispatch({ type: "GUILD_SUBSCRIPTIONS_REMOVE_MEMBER_UPDATES", guildId: e });
}
function o(e, t, n) {
    i.h.dispatch({ type: "GUILD_SUBSCRIPTIONS_CHANNEL", guildId: e, channelId: t, ranges: n });
}
function E(e) {
    let { guildId: t, channelId: n, y: i, height: a, rowHeight: s } = e;
    function _(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return Math.max(0, Math.ceil(Math.ceil(e / s)) + t);
    }
    let l = [];
    function E(e) {
        let t = e + (r.JM - 1);
        return l.push([e, t]), t + 1;
    }
    let d = _(0.5 * a),
        c = _(i, -d),
        u = _(i + a, d);
    for (c > 0 && (c = Math.max(E(0), c)), c = Math.floor(c / r.JM) * r.JM; c <= u; ) c = E(c);
    o(t, n, l);
}
