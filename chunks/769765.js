"use strict";
n.d(t, { A: () => C }), n(321073);
var r = n(311907),
    i = n(73153),
    s = n(999903),
    a = n(181079),
    o = n(961350),
    l = n(734057),
    u = n(808728),
    c = n(71393),
    d = n(652215);
let _ = null,
    f = {},
    p = null;
function h() {
    return { _categories: [], null: [] };
}
let E = h();
function m(e, t) {
    e.index = t;
}
function g(e) {
    let t = u.Ay.getChannels(e),
        n = h(),
        r = (e) => {
            let { channel: t } = e;
            (n[null != t.parent_id ? t.parent_id : "null"] ?? n.null).push({ channel: t, index: -1 });
        };
    return (
        t[d.rbe.GUILD_CATEGORY].forEach((e) => {
            let { channel: t } = e;
            n._categories.push({ channel: t, index: -1 }), (n[t.id] = []);
        }),
        t[u.I6].forEach(r),
        t[u.vM].forEach(r),
        (0, s.A)(n._categories, n).forEach(m),
        (f[e] = n),
        n
    );
}
function A() {
    (f = {}), null != _ && g(_);
}
function I(e) {
    let {
        guild: { id: t },
    } = e;
    (f[t] = void 0), _ === t && g(t);
}
function T(e) {
    let {
        channel: { guild_id: t },
    } = e;
    if (null == t) return !1;
    (f[t] = void 0), _ === t && g(t);
}
function S(e) {
    let { guildId: t } = e;
    (f[t] = void 0), t === _ && g(t);
}
function y(e, t) {
    if (((p = t), null == e || null == e.getGuildId())) return !1;
    let n = e.getGuildId();
    return null != n && ((f[n] = void 0), n === _ && g(n), !0);
}
function N() {
    g(d.YYv);
}
class v extends r.Ay.Store {
    static displayName = "GuildCategoryStore";
    initialize() {
        this.waitFor(u.Ay, c.A, o.default, l.A, a.A), this.syncWith([a.A], N);
    }
    getCategories(e) {
        return null != e ? (f[e] ?? g(e)) : E;
    }
}
let C = new v(i.h, {
    CHANNEL_SELECT: function (e) {
        let { guildId: t } = e;
        if (((_ = t ?? null), null == t || null != f[t])) return !1;
        g(t);
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
        delete f[t];
    },
    CHANNEL_CREATE: T,
    CHANNEL_DELETE: T,
    CHANNEL_UPDATES: function (e) {
        let { channels: t } = e,
            n = !1;
        for (let { guild_id: e } of t) null != e && ((f[e] = void 0), (n = !0), _ === e && g(e));
        return n;
    },
    GUILD_MEMBER_UPDATE: function (e) {
        let { guildId: t, user: n } = e;
        if (o.default.getId() !== n.id) return !1;
        (f[t] = void 0), t === _ && g(t);
    },
    CURRENT_USER_UPDATE: function () {
        if (null == _) return !1;
        g(_);
    },
    GUILD_ROLE_CREATE: S,
    GUILD_ROLE_UPDATE: S,
    GUILD_ROLE_DELETE: S,
    IMPERSONATE_UPDATE: S,
    IMPERSONATE_STOP: S,
    VOICE_CHANNEL_SELECT: function (e) {
        let { channelId: t } = e;
        return null == t && null != p ? y(l.A.getChannel(p), null) : y(l.A.getChannel(t), t);
    },
    VOICE_STATE_UPDATES: function (e) {
        let { voiceStates: t } = e;
        return t.reduce((e, t) => {
            let { channelId: n, sessionId: r } = t;
            return o.default.getSessionId() !== r ? e : y(l.A.getChannel(n), n) || e;
        }, !1);
    },
});
