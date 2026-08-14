"use strict";
n.d(t, { A: () => g }), n(321073), n(938796);
var i = n(665260),
    r = n(17928),
    a = n(228366),
    s = n(734057),
    l = n(696451),
    o = n(71393),
    d = n(994500),
    c = n(287809),
    u = n(320095),
    _ = n(652215);
let E = {};
function A(e, t) {
    let n = s.A.getChannel(e)?.getGuildId();
    if (null == n) return null;
    let i = E[n];
    if (null == i) return null;
    let r = i.messages[t];
    return null == r ? null : { guildId: n, message: r };
}
function h(e, t) {
    let n = E[e];
    null != n && (E = { ...E, [e]: { ...n, ...t(n) } });
}
function I(e, t) {
    h(e, (e) => ({ ids: [t.id, ...e.ids], messages: { ...e.messages, [t.id]: t } }));
}
function f(e, t) {
    h(e, (e) => ({ messages: { ...e.messages, [t.id]: t } }));
}
function p(e) {
    let { channel: t } = e,
        n = t.guild_id;
    if (null == n) return !1;
    let i = E[n];
    if (null == i) return !1;
    let r = [],
        a = { ...i.messages };
    for (let e of i.ids) i.messages[e]?.channel_id === t.id ? delete a[e] : r.push(e);
    if (r.length === i.ids.length) return !1;
    h(n, () => ({ ids: r, messages: a }));
}
function T() {
    let e = {},
        t = !1;
    for (let n of Object.keys(E)) {
        let i = E[n],
            r = null;
        for (let e of i.ids) {
            let t = i.messages[e];
            if (null == t) continue;
            let n = d.A.isBlockedForMessage(t),
                a = d.A.isIgnoredForMessage(t);
            (t.blocked !== n || t.ignored !== a) &&
                (null == r && (r = { ...i.messages }), (r[e] = t.merge({ blocked: n, ignored: a })));
        }
        null == r ? (e[n] = i) : ((e[n] = { ...i, messages: r }), (t = !0));
    }
    if (!t) return !1;
    E = e;
}
class m extends r.Ay.Store {
    static displayName = "GuildOfficialMessagesStore";
    initialize() {
        this.waitFor(s.A, l.Ay, o.A, d.A, c.default);
    }
    getState(e) {
        return E[e];
    }
    getMessage(e, t) {
        return E[e]?.messages[t];
    }
    getMessages(e) {
        let t = E[e];
        return null == t ? [] : t.ids.map((e) => t.messages[e]).filter((e) => null != e);
    }
    isLoading(e) {
        return E[e]?.loading ?? !1;
    }
    isLoaded(e) {
        return E[e]?.loaded ?? !1;
    }
    hasMore(e) {
        return E[e]?.hasMore ?? !1;
    }
}
let g = new m(a.h, {
    CONNECTION_OPEN: function () {
        E = {};
    },
    LOAD_OFFICIAL_MESSAGES: function (e) {
        let { guildId: t, before: n } = e,
            i = E[t];
        if (i?.loading === !0) return !1;
        if (null != n) {
            if (null == i) return !1;
            E = { ...E, [t]: { ...i, loading: !0 } };
        } else E = { ...E, [t]: { ids: [], messages: {}, hasMore: !1, loading: !0, loaded: !1, error: !1 } };
    },
    LOAD_OFFICIAL_MESSAGES_SUCCESS: function (e) {
        let { guildId: t, messages: n, hasMore: i, before: r } = e;
        if (null == E[t]) return !1;
        h(t, (e) => {
            let t = null != r ? [...e.ids] : [],
                a = null != r ? { ...e.messages } : {};
            for (let e of n) {
                let n = (0, u.rh)(e);
                null == a[n.id] && t.push(n.id), (a[n.id] = n);
            }
            return { ids: t, messages: a, hasMore: i, loading: !1, loaded: !0, error: !1 };
        });
    },
    LOAD_OFFICIAL_MESSAGES_FAILURE: function (e) {
        let { guildId: t, before: n } = e;
        if (null == E[t]) return !1;
        null != n ? h(t, () => ({ loading: !1 })) : h(t, () => ({ loading: !1, error: !0 }));
    },
    GUILD_DELETE: function (e) {
        let { guild: t } = e;
        if (null == E[t.id]) return !1;
        let n = { ...E };
        delete n[t.id], (E = n);
    },
    CHANNEL_DELETE: p,
    THREAD_DELETE: p,
    MESSAGE_CREATE: function (e) {
        let { message: t, guildId: n, optimistic: r, isPushNotification: a } = e;
        if (r || a || null == n || !(0, i.Lt)(t.flags ?? 0, _.pr7.IS_GUILD_OFFICIAL)) return !1;
        let s = E[n];
        if (null == s || null != s.messages[t.id]) return !1;
        I(n, (0, u.rh)(t));
    },
    MESSAGE_UPDATE: function (e) {
        let { message: t } = e;
        if (null == t.id) return !1;
        let n = s.A.getChannel(t.channel_id),
            r = n?.getGuildId();
        if (null == r) return !1;
        let a = E[r];
        if (null == a) return !1;
        let l = a.messages[t.id];
        if (null == t.author) return null != l && void f(r, (0, u.IU)(l, t));
        let o = (0, i.Lt)(t.flags ?? 0, _.pr7.IS_GUILD_OFFICIAL);
        if (o && null == l) return void I(r, (0, u.rh)(t));
        if (!o && null != l) {
            let e = t.id;
            h(r, (t) => {
                let n = { ...t.messages };
                return delete n[e], { ids: t.ids.filter((t) => t !== e), messages: n };
            });
            return;
        }
        return !!o && null != l && void f(r, (0, u.IU)(l, t));
    },
    MESSAGE_REACTION_ADD: function (e) {
        let { channelId: t, messageId: n, userId: i, emoji: r, optimistic: a, reactionType: s, colors: l } = e,
            o = c.default.getCurrentUser()?.id === i;
        if (a && !o) return !1;
        let d = A(t, n);
        if (null == d) return !1;
        let u = d.message.addReaction(r, o, { colors: l, reactionType: s });
        f(d.guildId, u);
    },
    MESSAGE_REACTION_REMOVE: function (e) {
        let { channelId: t, messageId: n, userId: i, emoji: r, optimistic: a, reactionType: s } = e,
            l = c.default.getCurrentUser()?.id === i;
        if (a && !l) return !1;
        let o = A(t, n);
        if (null == o) return !1;
        let d = o.message.removeReaction(r, l, s);
        f(o.guildId, d);
    },
    MESSAGE_REACTION_REMOVE_ALL: function (e) {
        let { channelId: t, messageId: n } = e,
            i = A(t, n);
        if (null == i) return !1;
        let r = i.message.set("reactions", []);
        f(i.guildId, r);
    },
    MESSAGE_REACTION_REMOVE_EMOJI: function (e) {
        let { channelId: t, messageId: n, emoji: i } = e,
            r = A(t, n);
        if (null == r) return !1;
        let a = r.message.removeReactionsForEmoji(i);
        f(r.guildId, a);
    },
    MESSAGE_DELETE: function (e) {
        let { id: t, guildId: n } = e;
        if (null == n || E[n]?.messages[t] == null) return !1;
        h(n, (e) => {
            let n = { ...e.messages };
            return delete n[t], { ids: e.ids.filter((e) => e !== t), messages: n };
        });
    },
    MESSAGE_DELETE_BULK: function (e) {
        let { ids: t, guildId: n } = e;
        if (null == n) return !1;
        let i = E[n];
        if (null == i) return !1;
        let r = new Set(t),
            a = i.ids.filter((e) => !r.has(e));
        if (a.length === i.ids.length) return !1;
        let s = { ...i.messages };
        for (let e of i.ids) r.has(e) && delete s[e];
        h(n, () => ({ ids: a, messages: s }));
    },
    RELATIONSHIP_ADD: T,
    RELATIONSHIP_REMOVE: T,
    RELATIONSHIP_UPDATE: T,
});
