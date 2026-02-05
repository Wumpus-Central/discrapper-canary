"use strict";
n.d(t, { A: () => m }), n(667532);
var r = n(960488),
    i = n(311907),
    a = n(73153),
    s = n(463347),
    o = n(824865),
    l = n(652215);
let u = 20,
    c = [
        l.BVt.CHANNEL_THREAD_VIEW(s.pv.guildId(), s.pv.channelId({ optional: !0 }), ":threadId", ":messageId?"),
        l.BVt.CHANNEL(s.pv.guildId(), s.pv.channelId({ optional: !0 }), ":messageId?"),
        l.BVt.VOICE_CHAT_CHANNEL_PARTIAL(s.pv.guildId(), s.pv.channelId({ optional: !0 }), ":messageId?"),
        l.BVt.CHANNELS_GAME_SHOP(s.pv.guildId(), ":pageIndex", ":skuId?", ":slug?"),
        l.BVt.NOTIFICATIONS,
        l.BVt.FRIENDS,
        l.BVt.ME,
        l.BVt.MESSAGE_REQUESTS,
        l.BVt.GUILD_DISCOVERY,
        l.BVt.APPLICATION_STORE,
        l.BVt.COLLECTIBLES_SHOP,
        l.BVt.USERS(":userId"),
        l.BVt.GUILD_DISCOVERY,
        l.BVt.GLOBAL_DISCOVERY,
        l.BVt.QUEST_HOME,
        l.BVt.GLOBAL_DISCOVERY_SERVERS,
        l.BVt.GLOBAL_DISCOVERY_APPS,
    ],
    d = [],
    _ = 0;
function f(e, t) {
    if (t < 0 || t >= e.length) throw RangeError("index out of bounds");
    let n = 0,
        r = t;
    for (; n < r; ) ([e[n], e[r]] = [e[r], e[n]]), n++, r--;
    return e;
}
function p(e) {
    let { location: t, action: n } = e;
    if ("POP" === n) {
        let e = d.findIndex((e) => e.path === t.pathname);
        if (-1 !== e) return (_ = e), !0;
    }
    if (t.source === o.A.USER_NAVIGATED_BACK) {
        _ < d.length - 1 && _++;
        return;
    }
    if (t.source === o.A.USER_NAVIGATED_FORWARD) {
        _ > 0 && _--;
        return;
    }
    let { pathname: i } = t,
        a = "REPLACE" === n,
        s = (0, r.B6)(i, c);
    if (null == s) return !1;
    if (a && d.length > 0) return (d[_] = { path: i, params: s.params }), !0;
    if (d.length > 0) {
        if (i === d[_].path) return !1;
        let e = d.findIndex((e) => e.path === i);
        -1 !== e && (d.splice(e, 1), _ >= e && (_ -= 1));
    }
    for (_ > 0 && f(d, _), _ = 0; d.length > u; ) d.pop();
    d.unshift({ path: i, params: s.params });
}
class h extends i.Ay.Store {
    static displayName = "BackForwardNavStore";
    initialize() {
        (d = []), (_ = 0);
    }
    get pastPlaces() {
        return d;
    }
    get canGoBack() {
        return _ < d.length - 1;
    }
    get canGoForward() {
        return _ > 0;
    }
    get backDestination() {
        return this.canGoBack ? d[_ + 1] : null;
    }
    get forwardDestination() {
        return this.canGoForward ? d[_ - 1] : null;
    }
}
let m = new h(a.h, { ROUTE_CHANGED: p });
