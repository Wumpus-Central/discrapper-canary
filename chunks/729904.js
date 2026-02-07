i.d(e, { A: () => g }), i(667532);
var n = i(960488),
    r = i(311907),
    a = i(73153),
    s = i(463347),
    l = i(824865),
    o = i(545167),
    c = i(652215);
let d = [
        c.BVt.CHANNEL_THREAD_VIEW(s.pv.guildId(), s.pv.channelId({ optional: !0 }), ":threadId", ":messageId?"),
        c.BVt.CHANNEL(s.pv.guildId(), s.pv.channelId({ optional: !0 }), ":messageId?"),
        c.BVt.VOICE_CHAT_CHANNEL_PARTIAL(s.pv.guildId(), s.pv.channelId({ optional: !0 }), ":messageId?"),
        c.BVt.CHANNELS_GAME_SHOP(s.pv.guildId(), ":pageIndex", ":skuId?", ":slug?"),
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
        c.BVt.QUEST_HOME_V2,
        c.BVt.GLOBAL_DISCOVERY_SERVERS,
        c.BVt.GLOBAL_DISCOVERY_APPS,
    ],
    h = [],
    u = 0,
    C = !!(null != window && "navigation" in window) && (window.navigation.canGoBack ?? !1),
    E = !!(null != window && "navigation" in window) && (window.navigation.canGoForward ?? !1);
class _ extends r.Ay.Store {
    static displayName = "BackForwardNavStore";
    initialize() {
        (h = []), (u = 0);
    }
    get pastPlaces() {
        return h;
    }
    get canGoBack() {
        return (0, o.vY)({ location: "canGoBackForward" }) ? u < h.length - 1 : C;
    }
    get canGoForward() {
        return (0, o.vY)({ location: "canGoBackForward" }) ? u > 0 : E;
    }
    get backDestination() {
        return this.canGoBack ? h[u + 1] : null;
    }
    get forwardDestination() {
        return this.canGoForward ? h[u - 1] : null;
    }
}
let g = new _(a.h, {
    ROUTE_CHANGED: function (t) {
        let { location: e, action: i } = t;
        if (
            ("navigation" in window &&
                ((C = window.navigation.canGoBack ?? !1), (E = window.navigation.canGoForward ?? !1)),
            "POP" === i)
        ) {
            let t = h.findIndex((t) => t.path === e.pathname);
            if (-1 !== t) {
                u = t;
                return;
            }
        }
        if (e.source === l.A.USER_NAVIGATED_BACK) {
            u < h.length - 1 && u++;
            return;
        }
        if (e.source === l.A.USER_NAVIGATED_FORWARD) {
            u > 0 && u--;
            return;
        }
        let { pathname: r } = e,
            a = (0, n.B6)(r, d);
        if (null != a) {
            if ("REPLACE" === i && h.length > 0) {
                h[u] = { path: r, params: a.params };
                return;
            }
            if (h.length > 0) {
                if (r === h[u].path) return;
                let t = h.findIndex((t) => t.path === r);
                -1 !== t && (h.splice(t, 1), u >= t && (u -= 1));
            }
            for (
                u > 0 &&
                    (function (t, e) {
                        if (e < 0 || e >= t.length) throw RangeError("index out of bounds");
                        let i = 0,
                            n = e;
                        for (; i < n; ) ([t[i], t[n]] = [t[n], t[i]]), i++, n--;
                    })(h, u),
                    u = 0;
                h.length > 20;
            )
                h.pop();
            h.unshift({ path: r, params: a.params });
        }
    },
});
