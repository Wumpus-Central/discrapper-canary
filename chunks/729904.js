n.d(t, {
    A: () => O,
}),
    n(65821),
    n(896048),
    n(667532);
var r,
    i = n(960488),
    a = n(311907),
    s = n(73153),
    o = n(626584),
    l = n(463347),
    c = n(652215);

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
let d = new o.A("BackForwardNavStore"),
    f = 20,
    p = [
        c.BVt.CHANNEL_THREAD_VIEW(
            l.pv.guildId(),
            l.pv.channelId({
                optional: !0,
            }),
            ":threadId",
            ":messageId?",
        ),
        c.BVt.CHANNEL(
            l.pv.guildId(),
            l.pv.channelId({
                optional: !0,
            }),
            ":messageId?",
        ),
        c.BVt.VOICE_CHAT_CHANNEL_PARTIAL(
            l.pv.guildId(),
            l.pv.channelId({
                optional: !0,
            }),
            ":messageId?",
        ),
        c.BVt.CHANNELS_GAME_SHOP(l.pv.guildId(), ":pageIndex", ":skuId?", ":slug?"),
        c.BVt.NOTIFICATIONS,
        c.BVt.FRIENDS,
        c.BVt.ME,
        c.BVt.MESSAGE_REQUESTS,
        c.BVt.GUILD_DISCOVERY,
        c.BVt.APPLICATION_STORE,
        c.BVt.COLLECTIBLES_SHOP,
        c.BVt.USERS(":userId"),
        c.BVt.GUILD_DISCOVERY,
        c.BVt.GLOBAL_DISCOVERY,
        c.BVt.QUEST_HOME,
        c.BVt.GLOBAL_DISCOVERY_SERVERS,
        c.BVt.GLOBAL_DISCOVERY_APPS,
    ],
    _ = [],
    h = 0;

function m(e, t) {
    if (t < 0 || t >= e.length) throw RangeError("index out of bounds");
    let n = 0,
        r = t;
    for (; n < r; ) ([e[n], e[r]] = [e[r], e[n]]), n++, r--;
    return e;
}

function g(e) {
    let { path: t, isReplace: n } = e,
        r = (0, i.B6)(t, p);
    if (null == r) return !1;
    if (r.params.guildId === c.gNP && void 0 === r.params.messageId)
        return d.verbose("Ignoring weird notification sidebar route lacking messageId"), !1;
    if (n && _.length > 0)
        return (
            (_[h] = {
                path: t,
                params: r.params,
            }),
            !0
        );
    if (_.length > 0) {
        if (t === _[h].path) return !1;
        let e = _.findIndex((e) => e.path === t);
        -1 !== e && (h >= e && (h -= 1), _.splice(e, 1));
    }
    for (r.params.guildId !== c.gNP && (h > 0 && m(_, h), (h = 0)); _.length > f; ) _.pop();
    _.unshift({
        path: t,
        params: r.params,
    });
}

function E(e) {
    h < _.length - 1 && h++;
}

function b(e) {
    h > 0 && h--;
}
class y extends (r = a.Ay.Store) {
    initialize() {
        (_ = []), (h = 0);
    }
    get pastPlaces() {
        return _;
    }
    get canGoBack() {
        return h < _.length - 1;
    }
    get canGoForward() {
        return h > 0;
    }
    get backDestination() {
        return this.canGoBack ? _[h + 1] : null;
    }
    get forwardDestination() {
        return this.canGoForward ? _[h - 1] : null;
    }
}
u(y, "displayName", "BackForwardNavStore");
let O = new y(s.h, {
    ROUTE_CHANGED: g,
    GO_BACK: E,
    GO_FORWARD: b,
});
