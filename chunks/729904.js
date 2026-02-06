"use strict";
n.d(t, { A: () => A }), n(667532);
var r = n(960488),
    i = n(311907),
    a = n(73153),
    s = n(463347),
    o = n(824865),
    l = n(545167),
    u = n(652215);
let c = 20,
    d = [
        u.BVt.CHANNEL_THREAD_VIEW(s.pv.guildId(), s.pv.channelId({ optional: !0 }), ":threadId", ":messageId?"),
        u.BVt.CHANNEL(s.pv.guildId(), s.pv.channelId({ optional: !0 }), ":messageId?"),
        u.BVt.VOICE_CHAT_CHANNEL_PARTIAL(s.pv.guildId(), s.pv.channelId({ optional: !0 }), ":messageId?"),
        u.BVt.CHANNELS_GAME_SHOP(s.pv.guildId(), ":pageIndex", ":skuId?", ":slug?"),
        u.BVt.NOTIFICATIONS,
        u.BVt.FRIENDS,
        u.BVt.ME,
        u.BVt.MESSAGE_REQUESTS,
        u.BVt.GUILD_DISCOVERY,
        u.BVt.APPLICATION_STORE,
        u.BVt.COLLECTIBLES_SHOP,
        u.BVt.USERS(":userId"),
        u.BVt.GUILD_DISCOVERY,
        u.BVt.GLOBAL_DISCOVERY,
        u.BVt.QUEST_HOME,
        u.BVt.QUEST_HOME_V2,
        u.BVt.GLOBAL_DISCOVERY_SERVERS,
        u.BVt.GLOBAL_DISCOVERY_APPS,
    ],
    _ = [],
    f = 0,
    p = !!(null != window && "navigation" in window) && (window.navigation.canGoBack ?? !1),
    h = !!(null != window && "navigation" in window) && (window.navigation.canGoForward ?? !1);
function m(e, t) {
    if (t < 0 || t >= e.length) throw RangeError("index out of bounds");
    let n = 0,
        r = t;
    for (; n < r; ) ([e[n], e[r]] = [e[r], e[n]]), n++, r--;
    return e;
}
function g(e) {
    let { location: t, action: n } = e;
    if (
        ("navigation" in window &&
            ((p = window.navigation.canGoBack ?? !1), (h = window.navigation.canGoForward ?? !1)),
        "POP" === n)
    ) {
        let e = _.findIndex((e) => e.path === t.pathname);
        if (-1 !== e) {
            f = e;
            return;
        }
    }
    if (t.source === o.A.USER_NAVIGATED_BACK) {
        f < _.length - 1 && f++;
        return;
    }
    if (t.source === o.A.USER_NAVIGATED_FORWARD) {
        f > 0 && f--;
        return;
    }
    let { pathname: i } = t,
        a = "REPLACE" === n,
        s = (0, r.B6)(i, d);
    if (null != s) {
        if (a && _.length > 0) {
            _[f] = { path: i, params: s.params };
            return;
        }
        if (_.length > 0) {
            if (i === _[f].path) return;
            let e = _.findIndex((e) => e.path === i);
            -1 !== e && (_.splice(e, 1), f >= e && (f -= 1));
        }
        for (f > 0 && m(_, f), f = 0; _.length > c; ) _.pop();
        _.unshift({ path: i, params: s.params });
    }
}
class E extends i.Ay.Store {
    static displayName = "BackForwardNavStore";
    initialize() {
        (_ = []), (f = 0);
    }
    get pastPlaces() {
        return _;
    }
    get canGoBack() {
        return (0, l.vY)({ location: "canGoBackForward" }) ? f < _.length - 1 : p;
    }
    get canGoForward() {
        return (0, l.vY)({ location: "canGoBackForward" }) ? f > 0 : h;
    }
    get backDestination() {
        return this.canGoBack ? _[f + 1] : null;
    }
    get forwardDestination() {
        return this.canGoForward ? _[f - 1] : null;
    }
}
let A = new E(a.h, { ROUTE_CHANGED: g });
