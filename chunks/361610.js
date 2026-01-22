n.d(t, {
    Cf: () => o,
    Ey: () => c,
    G9: () => l,
    NE: () => s,
    NJ: () => u,
    un: () => a,
}),
    n(321073);
var r = n(73153),
    i = n(36124);

function a(e, t) {
    r.h.dispatch({
        type: "GUILD_SUBSCRIPTIONS_MEMBERS_ADD",
        guildId: e,
        userIds: t,
    });
}

function s(e, t) {
    r.h.dispatch({
        type: "GUILD_SUBSCRIPTIONS_MEMBERS_REMOVE",
        guildId: e,
        userIds: t,
    });
}

function o(e) {
    r.h.dispatch({
        type: "GUILD_SUBSCRIPTIONS_ADD_MEMBER_UPDATES",
        guildId: e,
    });
}

function l(e) {
    r.h.dispatch({
        type: "GUILD_SUBSCRIPTIONS_REMOVE_MEMBER_UPDATES",
        guildId: e,
    });
}

function c(e, t, n) {
    r.h.dispatch({
        type: "GUILD_SUBSCRIPTIONS_CHANNEL",
        guildId: e,
        channelId: t,
        ranges: n,
    });
}

function u(e) {
    let { guildId: t, channelId: n, y: r, height: a, rowHeight: s } = e;

    function o(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return Math.max(0, Math.ceil(Math.ceil(e / s)) + t);
    }
    let l = [];

    function u(e) {
        let t = e + (i.JM - 1);
        return l.push([e, t]), t + 1;
    }
    let d = o(0.5 * a),
        f = o(r, -d),
        p = o(r + a, d);
    for (f > 0 && (f = Math.max(u(0), f)), f = Math.floor(f / i.JM) * i.JM; f <= p; ) f = u(f);
    c(t, n, l);
}
