"use strict";
n.d(t, { Cf: () => o, Ey: () => u, G9: () => l, NE: () => a, NJ: () => c, un: () => s }), n(321073);
var i = n(228366),
    r = n(36124);
function s(e, t) {
    i.h.dispatch({ type: "GUILD_SUBSCRIPTIONS_MEMBERS_ADD", guildId: e, userIds: t });
}
function a(e, t) {
    i.h.dispatch({ type: "GUILD_SUBSCRIPTIONS_MEMBERS_REMOVE", guildId: e, userIds: t });
}
function o(e) {
    i.h.dispatch({ type: "GUILD_SUBSCRIPTIONS_ADD_MEMBER_UPDATES", guildId: e });
}
function l(e) {
    i.h.dispatch({ type: "GUILD_SUBSCRIPTIONS_REMOVE_MEMBER_UPDATES", guildId: e });
}
function u(e, t, n) {
    i.h.dispatch({ type: "GUILD_SUBSCRIPTIONS_CHANNEL", guildId: e, channelId: t, ranges: n });
}
function c(e) {
    let { guildId: t, channelId: n, y: i, height: s, rowHeight: a } = e;
    function o(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return Math.max(0, Math.ceil(Math.ceil(e / a)) + t);
    }
    let l = [];
    function c(e) {
        let t = e + (r.JM - 1);
        return l.push([e, t]), t + 1;
    }
    let d = o(0.5 * s),
        _ = o(i, -d),
        f = o(i + s, d);
    for (_ > 0 && (_ = Math.max(c(0), _)), _ = Math.floor(_ / r.JM) * r.JM; _ <= f; ) _ = c(_);
    u(t, n, l);
}
