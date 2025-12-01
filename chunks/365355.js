n.d(t, { Z: () => O }), n(415506), n(388685), n(290780);
var r,
    i = n(828700),
    a = n(442837),
    o = n(570140),
    s = n(710845),
    l = n(893607),
    c = n(981631);
function u(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
let d = new s.Z("BackForwardNavStore"),
    f = 20,
    p = [
        c.Z5c.CHANNEL_THREAD_VIEW(l.Hw.guildId(), l.Hw.channelId({ optional: !0 }), ":threadId", ":messageId?"),
        c.Z5c.CHANNEL(l.Hw.guildId(), l.Hw.channelId({ optional: !0 }), ":messageId?"),
        c.Z5c.VOICE_CHAT_CHANNEL_PARTIAL(l.Hw.guildId(), l.Hw.channelId({ optional: !0 }), ":messageId?"),
        c.Z5c.NOTIFICATIONS,
        c.Z5c.FRIENDS,
        c.Z5c.ME,
        c.Z5c.MESSAGE_REQUESTS,
        c.Z5c.GUILD_DISCOVERY,
        c.Z5c.APPLICATION_STORE,
        c.Z5c.COLLECTIBLES_SHOP,
        c.Z5c.USERS(":userId"),
        c.Z5c.GUILD_DISCOVERY,
        c.Z5c.GLOBAL_DISCOVERY,
        c.Z5c.QUEST_HOME,
        c.Z5c.GLOBAL_DISCOVERY_SERVERS,
        c.Z5c.GLOBAL_DISCOVERY_APPS,
    ],
    _ = [],
    m = 0;
function h(e, t) {
    if (t < 0 || t >= e.length) throw RangeError("index out of bounds");
    let n = 0,
        r = t;
    for (; n < r; ) ([e[n], e[r]] = [e[r], e[n]]), n++, r--;
    return e;
}
function g(e) {
    let { path: t } = e,
        n = (0, i.LX)(t, p);
    if (null == n) return !1;
    if (n.params.guildId === c.STv && void 0 === n.params.messageId)
        return d.verbose("Ignoring weird notification sidebar route lacking messageId"), !1;
    if (_.length > 0) {
        if (t === _[m].path) return !1;
        let e = _.findIndex((e) => e.path === t);
        -1 !== e && (m >= e && (m -= 1), _.splice(e, 1));
    }
    for (n.params.guildId !== c.STv && (m > 0 && h(_, m), (m = 0)); _.length > f; ) _.pop();
    _.unshift({
        path: t,
        params: n.params,
    });
}
function E(e) {
    m < _.length - 1 && m++;
}
function b(e) {
    m > 0 && m--;
}
class y extends (r = a.ZP.Store) {
    initialize() {
        (_ = []), (m = 0);
    }
    get pastPlaces() {
        return _;
    }
    get canGoBack() {
        return m < _.length - 1;
    }
    get canGoForward() {
        return m > 0;
    }
    get backDestination() {
        return this.canGoBack ? _[m + 1] : null;
    }
    get forwardDestination() {
        return this.canGoForward ? _[m - 1] : null;
    }
}
u(y, "displayName", "BackForwardNavStore");
let O = new y(o.Z, {
    ROUTE_CHANGED: g,
    GO_BACK: E,
    GO_FORWARD: b,
});
