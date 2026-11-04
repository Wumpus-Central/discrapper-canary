n(321073);
var i = n(73153);
function r(e, t, n) {
    i.h.dispatch({ type: "GUILD_SUBSCRIPTIONS_CHANNEL", guildId: e, channelId: t, ranges: n });
}
(n(36124),
    n.d(
        t,
        {},
        {
            Cf: function (e) {
                i.h.dispatch({ type: "GUILD_SUBSCRIPTIONS_ADD_MEMBER_UPDATES", guildId: e });
            },
            Ey: r,
            G9: function (e) {
                i.h.dispatch({ type: "GUILD_SUBSCRIPTIONS_REMOVE_MEMBER_UPDATES", guildId: e });
            },
            NE: function (e, t) {
                i.h.dispatch({ type: "GUILD_SUBSCRIPTIONS_MEMBERS_REMOVE", guildId: e, userIds: t });
            },
            NJ: function (e) {
                let { guildId: t, channelId: n, y: i, height: a, rowHeight: s } = e;
                function l(e) {
                    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
                    return Math.max(0, Math.ceil(Math.ceil(e / s)) + t);
                }
                let o = [];
                function d(e) {
                    let t = e + 99;
                    return (o.push([e, t]), t + 1);
                }
                let c = l(0.5 * a),
                    u = l(i, -c),
                    _ = l(i + a, c);
                for (u > 0 && (u = Math.max(d(0), u)), u = 100 * Math.floor(u / 100); u <= _;) u = d(u);
                r(t, n, o);
            },
            un: function (e, t) {
                i.h.dispatch({ type: "GUILD_SUBSCRIPTIONS_MEMBERS_ADD", guildId: e, userIds: t });
            },
        },
    ));
