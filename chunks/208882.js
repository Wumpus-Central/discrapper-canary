"use strict";
n.d(t, {
    BA: () => _,
    FA: () => f,
    LH: () => C,
    Se: () => m,
    WD: () => p,
    YS: () => A,
    Yc: () => h,
    ZM: () => g,
    uU: () => x,
});
var i = n(111956),
    s = n.n(i),
    l = n(110259),
    r = n(562465),
    a = n(73153),
    o = n(499785),
    c = n(938764),
    d = n(946116),
    u = n(652215);
let h = s()(async (e, t) => {
        try {
            a.h.dispatch({ type: "GUILD_DIRECTORY_FETCH_START" });
            let n = await r.Bo.get({
                url: u.Rsh.DIRECTORY_CHANNEL_ENTRIES(e),
                query: { category_id: t },
                rejectWithError: !0,
            });
            a.h.dispatch({ type: "GUILD_DIRECTORY_FETCH_SUCCESS", channelId: e, entries: n.body });
        } catch (e) {
            a.h.dispatch({ type: "GUILD_DIRECTORY_FETCH_FAILURE" });
        }
    }, 200),
    A = s()(async (e) => {
        try {
            let t = await r.Bo.get({ url: u.Rsh.DIRECTORY_CHANNEL_CATEGORY_COUNTS(e), rejectWithError: !0 });
            a.h.dispatch({ type: "GUILD_DIRECTORY_COUNTS_FETCH_SUCCESS", channelId: e, counts: t.body });
        } catch (e) {}
    }, 200);
async function p(e, t, n) {
    let i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : d.mU.UNCATEGORIZED,
        s = await o.A.post({
            url: u.Rsh.DIRECTORY_CHANNEL_ENTRY(e, t),
            body: { description: n, primary_category_id: i },
            trackedActionData: {
                event: l.NetworkActionNames.DIRECTORY_GUILD_ENTRY_CREATE,
                properties: { directory_channel_id: e, guild_id: t, primary_category_id: i },
            },
            rejectWithError: !1,
        });
    a.h.dispatch({ type: "GUILD_DIRECTORY_ENTRY_CREATE", channelId: e, entry: s.body });
}
function g(e, t) {
    o.A.delete({
        url: u.Rsh.DIRECTORY_CHANNEL_ENTRY(e, t),
        trackedActionData: {
            event: l.NetworkActionNames.DIRECTORY_GUILD_ENTRY_DELETE,
            properties: { directory_channel_id: e, guild_id: t },
        },
        rejectWithError: !0,
    }),
        a.h.dispatch({ type: "GUILD_DIRECTORY_ENTRY_DELETE", channelId: e, guildId: t });
}
let m = s()(async (e, t) => {
        if (!c.A.shouldFetch(e, t))
            return void a.h.dispatch({ type: "GUILD_DIRECTORY_CACHED_SEARCH", channelId: e, query: t });
        try {
            a.h.dispatch({ type: "GUILD_DIRECTORY_SEARCH_START", channelId: e, query: t });
            let n = await r.Bo.get({
                url: u.Rsh.DIRECTORY_ENTRIES_SEARCH(e),
                query: { query: t },
                rejectWithError: !0,
            });
            a.h.dispatch({ type: "GUILD_DIRECTORY_SEARCH_SUCCESS", channelId: e, query: t, results: n.body });
        } catch (e) {
            a.h.dispatch({ type: "GUILD_DIRECTORY_FETCH_FAILURE" });
        }
    }, 200),
    _ = (e) => {
        a.h.dispatch({ type: "GUILD_DIRECTORY_SEARCH_CLEAR", channelId: e });
    },
    f = async function (e, t, n) {
        let i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : d.mU.UNCATEGORIZED,
            s = await r.Bo.patch({
                url: u.Rsh.DIRECTORY_CHANNEL_ENTRY(e, t),
                body: { description: n, primary_category_id: i },
                rejectWithError: !1,
            });
        a.h.dispatch({ type: "GUILD_DIRECTORY_ENTRY_UPDATE", channelId: e, entry: s.body });
    },
    x = (e, t) => {
        a.h.dispatch({ type: "GUILD_DIRECTORY_CATEGORY_SELECT", channelId: e, categoryId: t });
    },
    C = async (e, t) => {
        try {
            let n = await r.Bo.get({
                url: u.Rsh.DIRECTORY_CHANNEL_LIST_BY_ID(e),
                query: { entity_ids: t },
                rejectWithError: !0,
            });
            a.h.dispatch({ type: "GUILD_DIRECTORY_ADMIN_ENTRIES_FETCH_SUCCESS", channelId: e, entries: n.body });
        } catch (e) {}
    };
