"use strict";
n.d(t, { A: () => v }), n(321073);
var i = n(17928),
    r = n(228366),
    s = n(999903),
    a = n(181079),
    o = n(495544),
    l = n(734057),
    u = n(808728),
    c = n(71393),
    d = n(652215);
let _ = null,
    h = {},
    f = null;
function p() {
    return { _categories: [], null: [] };
}
let E = p();
function m(e, t) {
    e.index = t;
}
function g(e) {
    let t = u.Ay.getChannels(e),
        n = p(),
        i = (e) => {
            let { channel: t } = e;
            (n[null != t.parent_id ? t.parent_id : "null"] ?? n.null).push({ channel: t, index: -1 });
        };
    return (
        t[d.rbe.GUILD_CATEGORY].forEach((e) => {
            let { channel: t } = e;
            n._categories.push({ channel: t, index: -1 }), (n[t.id] = []);
        }),
        t[u.I6].forEach(i),
        t[u.vM].forEach(i),
        (0, s.A)(n._categories, n).forEach(m),
        (h[e] = n),
        n
    );
}
function A() {
    (h = {}), null != _ && g(_);
}
function I(e) {
    let {
        guild: { id: t },
    } = e;
    (h[t] = void 0), _ === t && g(t);
}
function T(e) {
    let {
        channel: { guild_id: t },
    } = e;
    if (null == t) return !1;
    (h[t] = void 0), _ === t && g(t);
}
function S(e) {
    let { guildId: t } = e;
    (h[t] = void 0), t === _ && g(t);
}
function y(e, t) {
    if (((f = t), null == e || null == e.getGuildId())) return !1;
    let n = e.getGuildId();
    return null != n && ((h[n] = void 0), n === _ && g(n), !0);
}
function C() {
    g(d.YYv);
}
class N extends i.Ay.Store {
    static displayName = "GuildCategoryStore";
    initialize() {
        this.waitFor(u.Ay, c.A, o.default, l.A, a.A), this.syncWith([a.A], C);
    }
    getCategories(e) {
        return null != e ? (h[e] ?? g(e)) : E;
    }
}
let v = new N(r.h, {
    CHANNEL_SELECT: function (e) {
        let { guildId: t } = e;
        if (((_ = t ?? null), null == t || null != h[t])) return !1;
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
        delete h[t];
    },
    CHANNEL_CREATE: T,
    CHANNEL_DELETE: T,
    CHANNEL_UPDATES: function (e) {
        let { channels: t } = e,
            n = !1;
        for (let { guild_id: e } of t) null != e && ((h[e] = void 0), (n = !0), _ === e && g(e));
        return n;
    },
    GUILD_MEMBER_UPDATE: function (e) {
        let { guildId: t, user: n } = e;
        if (o.default.getId() !== n.id) return !1;
        (h[t] = void 0), t === _ && g(t);
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
        return null == t && null != f ? y(l.A.getChannel(f), null) : y(l.A.getChannel(t), t);
    },
    VOICE_STATE_UPDATES: function (e) {
        let { voiceStates: t } = e;
        return t.reduce((e, t) => {
            let { channelId: n, sessionId: i } = t;
            return o.default.getSessionId() !== i ? e : y(l.A.getChannel(n), n) || e;
        }, !1);
    },
});
