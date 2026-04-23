"use strict";
n.d(t, { A: () => O }), n(321073);
var i = n(17928),
    r = n(228366),
    s = n(999903),
    a = n(181079),
    o = n(495544),
    l = n(734057),
    d = n(808728),
    _ = n(71393),
    u = n(652215);
let c = null,
    E = {},
    h = null;
function m() {
    return { _categories: [], null: [] };
}
let f = m();
function g(e, t) {
    e.index = t;
}
function p(e) {
    let t = d.Ay.getChannels(e),
        n = m(),
        i = (e) => {
            let { channel: t } = e;
            (n[null != t.parent_id ? t.parent_id : "null"] ?? n.null).push({ channel: t, index: -1 });
        };
    return (
        t[u.rbe.GUILD_CATEGORY].forEach((e) => {
            let { channel: t } = e;
            n._categories.push({ channel: t, index: -1 }), (n[t.id] = []);
        }),
        t[d.I6].forEach(i),
        t[d.vM].forEach(i),
        (0, s.A)(n._categories, n).forEach(g),
        (E[e] = n),
        n
    );
}
function A() {
    (E = {}), null != c && p(c);
}
function I(e) {
    let {
        guild: { id: t },
    } = e;
    (E[t] = void 0), c === t && p(t);
}
function T(e) {
    let {
        channel: { guild_id: t },
    } = e;
    if (null == t) return !1;
    (E[t] = void 0), c === t && p(t);
}
function S(e) {
    let { guildId: t } = e;
    (E[t] = void 0), t === c && p(t);
}
function N(e, t) {
    if (((h = t), null == e || null == e.getGuildId())) return !1;
    let n = e.getGuildId();
    return null != n && ((E[n] = void 0), n === c && p(n), !0);
}
function C() {
    p(u.YYv);
}
class R extends i.Ay.Store {
    static displayName = "GuildCategoryStore";
    initialize() {
        this.waitFor(d.Ay, _.A, o.default, l.A, a.A), this.syncWith([a.A], C);
    }
    getCategories(e) {
        return null != e ? (E[e] ?? p(e)) : f;
    }
}
let O = new R(r.h, {
    CHANNEL_SELECT: function (e) {
        let { guildId: t } = e;
        if (((c = t ?? null), null == t || null != E[t])) return !1;
        p(t);
    },
    CONNECTION_OPEN: A,
    OVERLAY_INITIALIZE: A,
    CACHE_LOADED_LAZY: A,
    GUILD_CREATE: I,
    GUILD_UPDATE: I,
    GUILD_DELETE: function (e) {
        let {
            guild: { id: t },
        } = e;
        delete E[t];
    },
    CHANNEL_CREATE: T,
    CHANNEL_DELETE: T,
    CHANNEL_UPDATES: function (e) {
        let { channels: t } = e,
            n = !1;
        for (let { guild_id: e } of t) null != e && ((E[e] = void 0), (n = !0), c === e && p(e));
        return n;
    },
    GUILD_MEMBER_UPDATE: function (e) {
        let { guildId: t, user: n } = e;
        if (o.default.getId() !== n.id) return !1;
        (E[t] = void 0), t === c && p(t);
    },
    CURRENT_USER_UPDATE: function () {
        if (null == c) return !1;
        p(c);
    },
    GUILD_ROLE_CREATE: S,
    GUILD_ROLE_UPDATE: S,
    GUILD_ROLE_DELETE: S,
    IMPERSONATE_UPDATE: S,
    IMPERSONATE_STOP: S,
    VOICE_CHANNEL_SELECT: function (e) {
        let { channelId: t } = e;
        return null == t && null != h ? N(l.A.getChannel(h), null) : N(l.A.getChannel(t), t);
    },
    VOICE_STATE_UPDATES: function (e) {
        let { voiceStates: t } = e;
        return t.reduce((e, t) => {
            let { channelId: n, sessionId: i } = t;
            return o.default.getSessionId() !== i ? e : N(l.A.getChannel(n), n) || e;
        }, !1);
    },
});
