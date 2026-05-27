"use strict";
n.d(t, { A: () => T }), n(321073), n(938796);
var i = n(665260),
    r = n(17928),
    s = n(228366),
    a = n(734057),
    o = n(696451),
    l = n(71393),
    u = n(994500),
    c = n(287809),
    d = n(320095),
    _ = n(652215);
let f = {};
function h(e, t) {
    let n = a.A.getChannel(e)?.getGuildId();
    if (null == n) return null;
    let i = f[n];
    if (null == i) return null;
    let r = i.messages[t];
    return null == r ? null : { guildId: n, message: r };
}
function p(e, t) {
    let n = f[e];
    null != n && (f = { ...f, [e]: { ...n, ...t(n) } });
}
function E(e, t) {
    p(e, (e) => ({ ids: [t.id, ...e.ids], messages: { ...e.messages, [t.id]: t } }));
}
function m(e, t) {
    p(e, (e) => ({ messages: { ...e.messages, [t.id]: t } }));
}
function g(e) {
    let { channel: t } = e,
        n = t.guild_id;
    if (null == n) return !1;
    let i = f[n];
    if (null == i) return !1;
    let r = [],
        s = { ...i.messages };
    for (let e of i.ids) i.messages[e]?.channel_id === t.id ? delete s[e] : r.push(e);
    if (r.length === i.ids.length) return !1;
    p(n, () => ({ ids: r, messages: s }));
}
function A() {
    let e = {},
        t = !1;
    for (let n of Object.keys(f)) {
        let i = f[n],
            r = null;
        for (let e of i.ids) {
            let t = i.messages[e];
            if (null == t) continue;
            let n = u.A.isBlockedForMessage(t),
                s = u.A.isIgnoredForMessage(t);
            (t.blocked !== n || t.ignored !== s) &&
                (null == r && (r = { ...i.messages }), (r[e] = t.merge({ blocked: n, ignored: s })));
        }
        null == r ? (e[n] = i) : ((e[n] = { ...i, messages: r }), (t = !0));
    }
    if (!t) return !1;
    f = e;
}
class I extends r.Ay.Store {
    static displayName = "GuildOfficialMessagesStore";
    initialize() {
        this.waitFor(a.A, o.Ay, l.A, u.A, c.default);
    }
    getState(e) {
        return f[e];
    }
    getMessage(e, t) {
        return f[e]?.messages[t];
    }
    getMessages(e) {
        let t = f[e];
        return null == t ? [] : t.ids.map((e) => t.messages[e]).filter((e) => null != e);
    }
    isLoading(e) {
        return f[e]?.loading ?? !1;
    }
    isLoaded(e) {
        return f[e]?.loaded ?? !1;
    }
    hasMore(e) {
        return f[e]?.hasMore ?? !1;
    }
}
let T = new I(s.h, {
    CONNECTION_OPEN: function () {
        f = {};
    },
    LOAD_OFFICIAL_MESSAGES: function (e) {
        let { guildId: t, before: n } = e,
            i = f[t];
        if (i?.loading === !0) return !1;
        if (null != n) {
            if (null == i) return !1;
            f = { ...f, [t]: { ...i, loading: !0 } };
        } else f = { ...f, [t]: { ids: [], messages: {}, hasMore: !1, loading: !0, loaded: !1, error: !1 } };
    },
    LOAD_OFFICIAL_MESSAGES_SUCCESS: function (e) {
        let { guildId: t, items: n, hasMore: i, before: r } = e;
        if (null == f[t]) return !1;
        p(t, (e) => {
            let t = null != r ? [...e.ids] : [],
                s = null != r ? { ...e.messages } : {};
            for (let e of n) {
                let n = (0, d.rh)(e);
                null == s[n.id] && t.push(n.id), (s[n.id] = n);
            }
            return { ids: t, messages: s, hasMore: i, loading: !1, loaded: !0, error: !1 };
        });
    },
    LOAD_OFFICIAL_MESSAGES_FAILURE: function (e) {
        let { guildId: t, before: n } = e;
        if (null == f[t]) return !1;
        null != n ? p(t, () => ({ loading: !1 })) : p(t, () => ({ loading: !1, error: !0 }));
    },
    GUILD_DELETE: function (e) {
        let { guild: t } = e;
        if (null == f[t.id]) return !1;
        let n = { ...f };
        delete n[t.id], (f = n);
    },
    CHANNEL_DELETE: g,
    THREAD_DELETE: g,
    MESSAGE_CREATE: function (e) {
        let { message: t, guildId: n, optimistic: r, isPushNotification: s } = e;
        if (r || s || null == n || !(0, i.Lt)(t.flags ?? 0, _.pr7.IS_GUILD_OFFICIAL)) return !1;
        let a = f[n];
        if (null == a || null != a.messages[t.id]) return !1;
        E(n, (0, d.rh)(t));
    },
    MESSAGE_UPDATE: function (e) {
        let { message: t } = e;
        if (null == t.id) return !1;
        let n = a.A.getChannel(t.channel_id),
            r = n?.getGuildId();
        if (null == r) return !1;
        let s = f[r];
        if (null == s) return !1;
        let o = s.messages[t.id];
        if (null == t.author) return null != o && void m(r, (0, d.IU)(o, t));
        let l = (0, i.Lt)(t.flags ?? 0, _.pr7.IS_GUILD_OFFICIAL);
        if (l && null == o) return void E(r, (0, d.rh)(t));
        if (!l && null != o) {
            let e = t.id;
            p(r, (t) => {
                let n = { ...t.messages };
                return delete n[e], { ids: t.ids.filter((t) => t !== e), messages: n };
            });
            return;
        }
        return !!l && null != o && void m(r, (0, d.IU)(o, t));
    },
    MESSAGE_REACTION_ADD: function (e) {
        let { channelId: t, messageId: n, userId: i, emoji: r, optimistic: s, reactionType: a, colors: o } = e,
            l = c.default.getCurrentUser()?.id === i;
        if (s && !l) return !1;
        let u = h(t, n);
        if (null == u) return !1;
        let d = u.message.addReaction(r, l, o, a);
        m(u.guildId, d);
    },
    MESSAGE_REACTION_REMOVE: function (e) {
        let { channelId: t, messageId: n, userId: i, emoji: r, optimistic: s, reactionType: a } = e,
            o = c.default.getCurrentUser()?.id === i;
        if (s && !o) return !1;
        let l = h(t, n);
        if (null == l) return !1;
        let u = l.message.removeReaction(r, o, a);
        m(l.guildId, u);
    },
    MESSAGE_REACTION_REMOVE_ALL: function (e) {
        let { channelId: t, messageId: n } = e,
            i = h(t, n);
        if (null == i) return !1;
        let r = i.message.set("reactions", []);
        m(i.guildId, r);
    },
    MESSAGE_REACTION_REMOVE_EMOJI: function (e) {
        let { channelId: t, messageId: n, emoji: i } = e,
            r = h(t, n);
        if (null == r) return !1;
        let s = r.message.removeReactionsForEmoji(i);
        m(r.guildId, s);
    },
    MESSAGE_DELETE: function (e) {
        let { id: t, guildId: n } = e;
        if (null == n || f[n]?.messages[t] == null) return !1;
        p(n, (e) => {
            let n = { ...e.messages };
            return delete n[t], { ids: e.ids.filter((e) => e !== t), messages: n };
        });
    },
    MESSAGE_DELETE_BULK: function (e) {
        let { ids: t, guildId: n } = e;
        if (null == n) return !1;
        let i = f[n];
        if (null == i) return !1;
        let r = new Set(t),
            s = i.ids.filter((e) => !r.has(e));
        if (s.length === i.ids.length) return !1;
        let a = { ...i.messages };
        for (let e of i.ids) r.has(e) && delete a[e];
        p(n, () => ({ ids: s, messages: a }));
    },
    RELATIONSHIP_ADD: A,
    RELATIONSHIP_REMOVE: A,
    RELATIONSHIP_UPDATE: A,
});
