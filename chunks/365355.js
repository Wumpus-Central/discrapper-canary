n.d(t, { Z: () => E }), n(290780);
var r,
    i = n(843611),
    a = n(442837),
    o = n(570140),
    s = n(893607),
    l = n(981631);
function c(e, t, n) {
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
let u = 20,
    d = [
        l.Z5c.CHANNEL_THREAD_VIEW(s.Hw.guildId(), s.Hw.channelId({ optional: !0 }), ":threadId", ":messageId?"),
        l.Z5c.CHANNEL(s.Hw.guildId(), s.Hw.channelId({ optional: !0 }), ":messageId?"),
        l.Z5c.VOICE_CHAT_CHANNEL_PARTIAL(s.Hw.guildId(), s.Hw.channelId({ optional: !0 }), ":messageId?"),
        l.Z5c.NOTIFICATIONS,
        l.Z5c.FRIENDS,
        l.Z5c.ME,
        l.Z5c.MESSAGE_REQUESTS,
        l.Z5c.GUILD_DISCOVERY,
        l.Z5c.APPLICATION_STORE,
        l.Z5c.COLLECTIBLES_SHOP,
    ],
    f = [],
    _ = 0;
function p(e) {
    let { path: t } = e;
    if (f.length > 0) {
        if (t === f[_].path) return !1;
        let e = f.findIndex((e) => e.path === t);
        -1 !== e && f.splice(e, 1);
    }
    (_ = 0), f.length > u && (f = f.slice(0, u));
    let n = (0, i.LX)(t, d);
    null != n &&
        f.unshift({
            path: t,
            params: n.params,
        });
}
function h(e) {
    _ < f.length - 1 && _++;
}
function m(e) {
    _ > 0 && _--;
}
class g extends (r = a.ZP.Store) {
    initialize() {
        (f = []), (_ = 0);
    }
    get recentPlaces() {
        return f.slice(1);
    }
    get canGoBack() {
        return _ < f.length - 1;
    }
    get canGoForward() {
        return _ > 0;
    }
    get backDestination() {
        return this.canGoBack ? f[_ + 1] : null;
    }
    get forwardDestination() {
        return this.canGoForward ? f[_ - 1] : null;
    }
}
c(g, "displayName", "BackForwardNavStore");
let E = new g(o.Z, {
    ROUTE_CHANGED: p,
    GO_BACK: h,
    GO_FORWARD: m,
});
