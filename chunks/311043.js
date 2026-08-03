"use strict";
n.d(t, { A: () => I });
var i = n(17928),
    r = n(228366),
    a = n(998218),
    s = n(997013);
let l = new Map(),
    o = new Set(),
    d = new Set(),
    c = new Set();
function u(e) {
    let t = !1;
    return (
        e.mention_games?.forEach((e) => {
            !("game_flags" in e && "number" == typeof e.game_flags) ||
                l.has(e.id) ||
                (l.set(e.id, new s.A(e)), (t = !0), c.delete(e.id), d.delete(e.id));
        }),
        t
    );
}
function _(e) {
    let { messages: t } = e;
    return t.reduce((e, t) => u(t) || e, !1);
}
function E(e) {
    let { data: t } = e,
        n = !1;
    return (
        t.forEach((e) => {
            let { messages: t } = e;
            t.forEach((e) => {
                e.forEach((e) => {
                    n = u(e) || n;
                });
            });
        }),
        n
    );
}
function A(e) {
    let { message: t } = e;
    return u(t);
}
class h extends i.Ay.Store {
    static displayName = "NewGameStore";
    isFetching(e) {
        return o.has(e);
    }
    didFetchingFail(e) {
        return d.has(e);
    }
    getGame(e) {
        return l.get(e);
    }
    hasNoData(e) {
        return c.has(e);
    }
    getCoverImageUrl(e, t) {
        let n = l.get(e)?.getCoverURL();
        if (null == n) return null;
        if (null == t) return n;
        let i = a.A.toURLSafe(n);
        return null == i ? n : (i.searchParams.set("size", t.size.toString()), i.toString());
    }
}
let I = new h(r.h, {
    LOGOUT: function () {
        (l = new Map()), (o = new Set()), (d = new Set()), (c = new Set());
    },
    GAME_FETCH: function (e) {
        let { gameIds: t } = e;
        t.forEach((e) => {
            o.add(e), d.delete(e);
        });
    },
    GAME_FETCH_CANCELLED: function (e) {
        let { gameIds: t } = e;
        t.forEach((e) => o.delete(e));
    },
    GAME_FETCH_SUCCESS: function (e) {
        let { gameIds: t, games: n } = e,
            i = new Set(t);
        t.forEach((e) => {
            o.delete(e), d.delete(e);
        }),
            n.forEach((e) => {
                i.delete(e.id), l.set(e.id, new s.A(e));
            }),
            i.forEach((e) => {
                l.has(e) || c.add(e);
            });
    },
    GAME_FETCH_FAILURE: function (e) {
        let { gameIds: t } = e;
        t.forEach((e) => {
            o.delete(e), d.add(e);
        });
    },
    SEARCH_MESSAGES_SUCCESS: E,
    MOD_VIEW_SEARCH_MESSAGES_SUCCESS: E,
    LOAD_MESSAGES_SUCCESS: _,
    LOAD_MESSAGES_AROUND_SUCCESS: _,
    LOAD_RECENT_MENTIONS_SUCCESS: _,
    CONVERSATION_FETCH_SUCCESS: function (e) {
        let { messages: t, messageReferences: n } = e;
        return t.concat(n).reduce((e, t) => u(t) || e, !1);
    },
    CONVERSATIONS_FETCH_SUCCESS: function (e) {
        let { rawConversations: t } = e,
            n = !1;
        return (
            t.forEach((e) => {
                let { messages: t } = e;
                t?.forEach((e) => {
                    n = u(e) || n;
                });
            }),
            n
        );
    },
    LOAD_PINNED_MESSAGES_SUCCESS: function (e) {
        let { pins: t } = e;
        return t.reduce((e, t) => {
            let { message: n } = t;
            return u(n) || e;
        }, !1);
    },
    THREAD_LIST_SYNC: function (e) {
        let { mostRecentMessages: t } = e;
        return (t ?? []).reduce((e, t) => u(t) || e, !1);
    },
    MESSAGE_CREATE: A,
    MESSAGE_UPDATE: A,
    LOAD_FORUM_POSTS: function (e) {
        let { threads: t } = e,
            n = !1;
        return (
            Object.values(t).forEach((e) => {
                let { first_message: t, most_recent_message: i } = e;
                null != t && (n = u(t) || n), null != i && (n = u(i) || n);
            }),
            n
        );
    },
    LOAD_MESSAGE_REQUESTS_SUPPLEMENTAL_DATA_SUCCESS: function (e) {
        let { supplementalData: t } = e,
            n = !1;
        return (
            t.forEach((e) => {
                let { message_preview: t } = e;
                null != t && (n = u(t) || n);
            }),
            n
        );
    },
    LOAD_ICYMI_HYDRATED: function (e) {
        let { messageItems: t } = e,
            n = !1;
        return (
            t.forEach((e) => {
                null != e.message && (n = u(e.message) || n);
            }),
            n
        );
    },
});
