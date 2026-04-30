n.d(t, { Cf: () => a, Ey: () => u, G9: () => o, NE: () => s, NJ: () => d, un: () => r }), n(321073);
var i = n(228366),
    l = n(36124);
function r(e, t) {
    i.h.dispatch({ type: "GUILD_SUBSCRIPTIONS_MEMBERS_ADD", guildId: e, userIds: t });
}
function s(e, t) {
    i.h.dispatch({ type: "GUILD_SUBSCRIPTIONS_MEMBERS_REMOVE", guildId: e, userIds: t });
}
function a(e) {
    i.h.dispatch({ type: "GUILD_SUBSCRIPTIONS_ADD_MEMBER_UPDATES", guildId: e });
}
function o(e) {
    i.h.dispatch({ type: "GUILD_SUBSCRIPTIONS_REMOVE_MEMBER_UPDATES", guildId: e });
}
function u(e, t, n) {
    i.h.dispatch({ type: "GUILD_SUBSCRIPTIONS_CHANNEL", guildId: e, channelId: t, ranges: n });
}
function d(e) {
    let { guildId: t, channelId: n, y: i, height: r, rowHeight: s } = e;
    function a(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return Math.max(0, Math.ceil(Math.ceil(e / s)) + t);
    }
    let o = [];
    function d(e) {
        let t = e + (l.JM - 1);
        return o.push([e, t]), t + 1;
    }
    let c = a(0.5 * r),
        h = a(i, -c),
        p = a(i + r, c);
    for (h > 0 && (h = Math.max(d(0), h)), h = Math.floor(h / l.JM) * l.JM; h <= p; ) h = d(h);
    u(t, n, o);
}
