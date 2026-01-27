n.d(t, {
    A: () => O,
}),
    n(65821),
    n(896048),
    n(667532);
var r,
    i,
    l = n(960488),
    s = n(311907),
    o = n(73153),
    a = n(463347),
    c = n(824865),
    u = n(652215);
let d = [
        u.BVt.CHANNEL_THREAD_VIEW(
            a.pv.guildId(),
            a.pv.channelId({
                optional: !0,
            }),
            ":threadId",
            ":messageId?",
        ),
        u.BVt.CHANNEL(
            a.pv.guildId(),
            a.pv.channelId({
                optional: !0,
            }),
            ":messageId?",
        ),
        u.BVt.VOICE_CHAT_CHANNEL_PARTIAL(
            a.pv.guildId(),
            a.pv.channelId({
                optional: !0,
            }),
            ":messageId?",
        ),
        u.BVt.CHANNELS_GAME_SHOP(a.pv.guildId(), ":pageIndex", ":skuId?", ":slug?"),
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
        u.BVt.GLOBAL_DISCOVERY_SERVERS,
        u.BVt.GLOBAL_DISCOVERY_APPS,
    ],
    h = [],
    p = 0;
class C extends (r = s.Ay.Store) {
    initialize() {
        (h = []), (p = 0);
    }
    get pastPlaces() {
        return h;
    }
    get canGoBack() {
        return p < h.length - 1;
    }
    get canGoForward() {
        return p > 0;
    }
    get backDestination() {
        return this.canGoBack ? h[p + 1] : null;
    }
    get forwardDestination() {
        return this.canGoForward ? h[p - 1] : null;
    }
}
(i = "displayName") in C
    ? Object.defineProperty(C, i, {
          value: "BackForwardNavStore",
          enumerable: !0,
          configurable: !0,
          writable: !0,
      })
    : (C[i] = "BackForwardNavStore");
let O = new C(o.h, {
    ROUTE_CHANGED: function (e) {
        let { location: t, action: n } = e;
        if ("POP" === n) {
            let e = h.findIndex((e) => e.path === t.pathname);
            if (-1 !== e) return (p = e), !0;
        }
        if (t.source === c.A.USER_NAVIGATED_BACK) {
            p < h.length - 1 && p++;
            return;
        }
        if (t.source === c.A.USER_NAVIGATED_FORWARD) {
            p > 0 && p--;
            return;
        }
        let { pathname: r } = t,
            i = (0, l.B6)(r, d);
        if (null == i) return !1;
        if ("REPLACE" === n && h.length > 0)
            return (
                (h[p] = {
                    path: r,
                    params: i.params,
                }),
                !0
            );
        if (h.length > 0) {
            if (r === h[p].path) return !1;
            let e = h.findIndex((e) => e.path === r);
            -1 !== e && (h.splice(e, 1), p >= e && (p -= 1));
        }
        for (
            p > 0 &&
                (function (e, t) {
                    if (t < 0 || t >= e.length) throw RangeError("index out of bounds");
                    let n = 0,
                        r = t;
                    for (; n < r; ) ([e[n], e[r]] = [e[r], e[n]]), n++, r--;
                })(h, p),
                p = 0;
            h.length > 20;
        )
            h.pop();
        h.unshift({
            path: r,
            params: i.params,
        });
    },
});
