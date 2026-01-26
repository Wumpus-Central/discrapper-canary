n.d(t, {
    A: () => E,
}),
    n(65821),
    n(896048),
    n(667532);
var r,
    i = n(960488),
    a = n(311907),
    s = n(73153),
    o = n(463347),
    l = n(824865),
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
let d = 20,
    f = [
        c.BVt.CHANNEL_THREAD_VIEW(
            o.pv.guildId(),
            o.pv.channelId({
                optional: !0,
            }),
            ":threadId",
            ":messageId?",
        ),
        c.BVt.CHANNEL(
            o.pv.guildId(),
            o.pv.channelId({
                optional: !0,
            }),
            ":messageId?",
        ),
        c.BVt.VOICE_CHAT_CHANNEL_PARTIAL(
            o.pv.guildId(),
            o.pv.channelId({
                optional: !0,
            }),
            ":messageId?",
        ),
        c.BVt.CHANNELS_GAME_SHOP(o.pv.guildId(), ":pageIndex", ":skuId?", ":slug?"),
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
    p = [],
    _ = 0;

function h(e, t) {
    if (t < 0 || t >= e.length) throw RangeError("index out of bounds");
    let n = 0,
        r = t;
    for (; n < r; ) ([e[n], e[r]] = [e[r], e[n]]), n++, r--;
    return e;
}

function m(e) {
    let { location: t, action: n } = e;
    if ("POP" === n) {
        let e = p.findIndex((e) => e.path === t.pathname);
        if (-1 !== e) return (_ = e), !0;
    }
    if (t.source === l.A.USER_NAVIGATED_BACK) {
        _ < p.length - 1 && _++;
        return;
    }
    if (t.source === l.A.USER_NAVIGATED_FORWARD) {
        _ > 0 && _--;
        return;
    }
    let { pathname: r } = t,
        a = "REPLACE" === n,
        s = (0, i.B6)(r, f);
    if (null == s) return !1;
    if (a && p.length > 0)
        return (
            (p[_] = {
                path: r,
                params: s.params,
            }),
            !0
        );
    if (p.length > 0) {
        if (r === p[_].path) return !1;
        let e = p.findIndex((e) => e.path === r);
        -1 !== e && (p.splice(e, 1), _ >= e && (_ -= 1));
    }
    for (_ > 0 && h(p, _), _ = 0; p.length > d; ) p.pop();
    p.unshift({
        path: r,
        params: s.params,
    });
}
class g extends (r = a.Ay.Store) {
    initialize() {
        (p = []), (_ = 0);
    }
    get pastPlaces() {
        return p;
    }
    get canGoBack() {
        return _ < p.length - 1;
    }
    get canGoForward() {
        return _ > 0;
    }
    get backDestination() {
        return this.canGoBack ? p[_ + 1] : null;
    }
    get forwardDestination() {
        return this.canGoForward ? p[_ - 1] : null;
    }
}
u(g, "displayName", "BackForwardNavStore");
let E = new g(s.h, {
    ROUTE_CHANGED: m,
});
