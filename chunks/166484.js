n.d(t, { Z: () => c });
var r = n(828700),
    i = n(772848),
    l = n(626135),
    a = n(893607),
    o = n(981631);
function s(e, t, n) {
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
            if (e === o.Z5c.ME_ACTIVITY)
                return {
                    page: "me_activity",
                    params: "",
                };
            if (e === o.Z5c.FRIENDS)
                return {
                    page: "friends",
                    params: "",
                };
            if (e === o.Z5c.ICYMI)
                return {
                    page: "icymi",
                    params: "",
                };
            if (e.startsWith(o.Z5c.MESSAGE_REQUESTS))
                return {
                    page: "message-requests",
                    params: e.slice(o.Z5c.MESSAGE_REQUESTS.length + 1),
                };
            if (e.startsWith(o.Z5c.APPLICATION_LIBRARY))
                return {
                    page: "library",
                    params: e.slice(o.Z5c.APPLICATION_LIBRARY.length + 1),
                };
            if (e.startsWith(o.Z5c.APPLICATION_STORE))
                return {
                    page: "store",
                    params: e.slice(o.Z5c.APPLICATION_STORE.length + 1),
                };
            if (e.startsWith(o.Z5c.COLLECTIBLES_SHOP))
                return {
                    page: "shop",
                    params: e.slice(o.Z5c.COLLECTIBLES_SHOP.length + 1),
                };
            if (e.startsWith(o.Z5c.FAMILY_CENTER))
                return {
                    page: "family-center",
                    params: e.slice(o.Z5c.FAMILY_CENTER.length + 1),
                };
            if (e.startsWith(o.Z5c.QUEST_HOME_V2))
                return {
                    page: "quest-home",
                    params: e.slice(o.Z5c.QUEST_HOME_V2.length + 1),
                };
            if (e.startsWith(o.Z5c.QUEST_HOME))
                return {
                    page: "discovery/quests",
                    params: e.slice(o.Z5c.QUEST_HOME.length + 1),
                };
            let t = (0, r.LX)(e, {
                path: o.Z5c.CHANNEL(a.Hw.guildId(), a.Hw.channelId({ optional: !0 }), ":messageId?"),
                exact: !0,
            });
            if (null != t) {
                let { guildId: e, channelId: n, messageId: r } = t.params;
                return {
                    page: e === o.ME ? "dm" : "guild_channel",
                    params: [e, n, r].filter(Boolean).join("/"),
                };
            }
            let n = (0, r.LX)(e, {
                path: o.Z5c.CHANNEL_THREAD_VIEW(
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
        if (e !== o.Z5c.ME_DMS && null != t && (t !== this.lastPage || n !== this.lastParams)) {
            let e = Date.now();
            l.default.track(o.rMx.SESSION_START_PAGE_VIEWED, {
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
        s(this, "pageSequenceIndex", 0),
            s(this, "lastPage", null),
            s(this, "lastParams", null),
            s(this, "lastPageViewedAt", Date.now()),
            s(this, "sessionID", (0, i.Z)());
    }
})();
