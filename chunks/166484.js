n.d(t, { Z: () => c });
var r = n(828700),
    i = n(772848),
    l = n(626135),
    a = n(893607),
    s = n(981631);
function o(e, t, n) {
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
let c = new (class {
    trackPageView(e) {
        if (this.pageSequenceIndex >= 5) return;
        let { page: t, params: n } = (function (e) {
            if (!e.startsWith("/"))
                return {
                    page: e,
                    params: "",
                };
            if (e === s.Z5c.ME_ACTIVITY)
                return {
                    page: "me_activity",
                    params: "",
                };
            if (e === s.Z5c.FRIENDS)
                return {
                    page: "friends",
                    params: "",
                };
            if (e === s.Z5c.ICYMI)
                return {
                    page: "icymi",
                    params: "",
                };
            if (e.startsWith(s.Z5c.MESSAGE_REQUESTS))
                return {
                    page: "message-requests",
                    params: e.slice(s.Z5c.MESSAGE_REQUESTS.length + 1),
                };
            if (e.startsWith(s.Z5c.APPLICATION_LIBRARY))
                return {
                    page: "library",
                    params: e.slice(s.Z5c.APPLICATION_LIBRARY.length + 1),
                };
            if (e.startsWith(s.Z5c.APPLICATION_STORE))
                return {
                    page: "store",
                    params: e.slice(s.Z5c.APPLICATION_STORE.length + 1),
                };
            if (e.startsWith(s.Z5c.COLLECTIBLES_SHOP))
                return {
                    page: "shop",
                    params: e.slice(s.Z5c.COLLECTIBLES_SHOP.length + 1),
                };
            if (e.startsWith(s.Z5c.FAMILY_CENTER))
                return {
                    page: "family-center",
                    params: e.slice(s.Z5c.FAMILY_CENTER.length + 1),
                };
            if (e.startsWith(s.Z5c.QUEST_HOME_V2))
                return {
                    page: "quest-home",
                    params: e.slice(s.Z5c.QUEST_HOME_V2.length + 1),
                };
            if (e.startsWith(s.Z5c.QUEST_HOME))
                return {
                    page: "discovery/quests",
                    params: e.slice(s.Z5c.QUEST_HOME.length + 1),
                };
            let t = (0, r.LX)(e, {
                path: s.Z5c.CHANNEL(a.Hw.guildId(), a.Hw.channelId({ optional: !0 }), ":messageId?"),
                exact: !0,
            });
            if (null != t) {
                let { guildId: e, channelId: n, messageId: r } = t.params;
                return {
                    page: e === s.ME ? "dm" : "guild_channel",
                    params: [e, n, r].filter(Boolean).join("/"),
                };
            }
            let n = (0, r.LX)(e, {
                path: s.Z5c.CHANNEL_THREAD_VIEW(
                    a.Hw.guildId(),
                    a.Hw.channelId({ optional: !0 }),
                    ":threadId",
                    ":messageId?",
                ),
                exact: !0,
            });
            if (null != n) {
                let { guildId: e, channelId: t, threadId: r, messageId: i } = n.params;
                return {
                    page: "guild_channel",
                    params: [e, t, r, i].filter(Boolean).join("/"),
                };
            }
            return {
                page: "unsupported",
                params: "",
            };
        })(e);
        if (e !== s.Z5c.ME_DMS && null != t && (t !== this.lastPage || n !== this.lastParams)) {
            let e = Date.now();
            l.default.track(s.rMx.SESSION_START_PAGE_VIEWED, {
                session_id: this.sessionID,
                page: t,
                page_sequence_index: this.pageSequenceIndex,
                viewed_at_millis: e,
                time_on_page_millis: e - this.lastPageViewedAt,
            }),
                (this.lastPage = t),
                (this.lastParams = n),
                (this.lastPageViewedAt = e),
                this.pageSequenceIndex++;
        }
    }
    constructor() {
        o(this, "pageSequenceIndex", 0),
            o(this, "lastPage", null),
            o(this, "lastParams", null),
            o(this, "lastPageViewedAt", Date.now()),
            o(this, "sessionID", (0, i.Z)());
    }
})();
