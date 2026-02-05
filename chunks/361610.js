"use strict";
n.d(t, { Cf: () => o, Ey: () => u, G9: () => l, NE: () => s, NJ: () => c, un: () => a }), n(321073);
var r = n(73153),
    i = n(36124);
function a(e, t) {
    r.h.dispatch({ type: "GUILD_SUBSCRIPTIONS_MEMBERS_ADD", guildId: e, userIds: t });
}
function s(e, t) {
    r.h.dispatch({ type: "GUILD_SUBSCRIPTIONS_MEMBERS_REMOVE", guildId: e, userIds: t });
}
function o(e) {
    r.h.dispatch({ type: "GUILD_SUBSCRIPTIONS_ADD_MEMBER_UPDATES", guildId: e });
}
function l(e) {
    r.h.dispatch({ type: "GUILD_SUBSCRIPTIONS_REMOVE_MEMBER_UPDATES", guildId: e });
}
function u(e, t, n) {
    r.h.dispatch({ type: "GUILD_SUBSCRIPTIONS_CHANNEL", guildId: e, channelId: t, ranges: n });
}
function c(e) {
    let { guildId: t, channelId: n, y: r, height: a, rowHeight: s } = e;
    function o(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return Math.max(0, Math.ceil(Math.ceil(e / s)) + t);
    }
    let l = [];
    function c(e) {
        let t = e + (i.JM - 1);
        return l.push([e, t]), t + 1;
    }
    let d = o(0.5 * a),
        _ = o(r, -d),
        f = o(r + a, d);
    for (_ > 0 && (_ = Math.max(c(0), _)), _ = Math.floor(_ / i.JM) * i.JM; _ <= f; ) _ = c(_);
    u(t, n, l);
}
