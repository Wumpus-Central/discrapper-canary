"use strict";
n.d(t, { A: () => O }), n(321073);
var i = n(17928),
    r = n(228366),
    a = n(999903),
    s = n(181079),
    l = n(280450),
    o = n(734057),
    d = n(808728),
    c = n(71393),
    u = n(652215);
let _ = null,
    E = {},
    A = null;
function h() {
    return { _categories: [], null: [] };
}
let I = h();
function f(e, t) {
    e.index = t;
}
function p(e) {
    let t = d.Ay.getChannels(e),
        n = h();
    function i(e) {
        let { channel: t } = e;
        (n[null != t.parent_id ? t.parent_id : "null"] ?? n.null).push({ channel: t, index: -1 });
    }
    return (
        t[u.rbe.GUILD_CATEGORY].forEach((e) => {
            let { channel: t } = e;
            n._categories.push({ channel: t, index: -1 }), (n[t.id] = []);
        }),
        t[d.I6].forEach(i),
        t[d.vM].forEach(i),
        (0, a.A)(n._categories, n).forEach(f),
        (E[e] = n),
        n
    );
}
function T() {
    (E = {}), null != _ && p(_);
}
function m(e) {
    let {
        guild: { id: t },
    } = e;
    (E[t] = void 0), _ === t && p(t);
}
function g(e) {
    let {
        channel: { guild_id: t },
    } = e;
    if (null == t) return !1;
    (E[t] = void 0), _ === t && p(t);
}
function S(e) {
    let { guildId: t } = e;
    (E[t] = void 0), t === _ && p(t);
}
function N(e, t) {
    if (((A = t), null == e || null == e.getGuildId())) return !1;
    let n = e.getGuildId();
    return null != n && ((E[n] = void 0), n === _ && p(n), !0);
}
function C() {
    p(u.YYv);
}
class R extends i.Ay.Store {
    static displayName = "GuildCategoryStore";
    initialize() {
        this.waitFor(d.Ay, c.A, l.default, o.A, s.A), this.syncWith([s.A], C);
    }
    getCategories(e) {
        return null != e ? (E[e] ?? p(e)) : I;
    }
}
let O = new R(r.h, {
    CHANNEL_SELECT: function (e) {
        let { guildId: t } = e;
        if (((_ = t ?? null), null == t || null != E[t])) return !1;
        p(t);
    },
    CONNECTION_OPEN: T,
    OVERLAY_INITIALIZE: T,
    CACHE_LOADED_LAZY: T,
    GUILD_CREATE: m,
    GUILD_UPDATE: m,
    GUILD_DELETE: function (e) {
        let {
            guild: { id: t },
        } = e;
        delete E[t];
    },
    CHANNEL_CREATE: g,
    CHANNEL_DELETE: g,
    CHANNEL_UPDATES: function (e) {
        let { channels: t } = e,
            n = !1;
        for (let { guild_id: e } of t) null != e && ((E[e] = void 0), (n = !0), _ === e && p(e));
        return n;
    },
    GUILD_MEMBER_UPDATE: function (e) {
        let { guildId: t, user: n } = e;
        if (l.default.getId() !== n.id) return !1;
        (E[t] = void 0), t === _ && p(t);
    },
    CURRENT_USER_UPDATE: function () {
        if (null == _) return !1;
        p(_);
    },
    GUILD_ROLE_CREATE: S,
    GUILD_ROLE_UPDATE: S,
    GUILD_ROLE_DELETE: S,
    IMPERSONATE_UPDATE: S,
    IMPERSONATE_STOP: S,
    VOICE_CHANNEL_SELECT: function (e) {
        let { channelId: t } = e;
        return null == t && null != A ? N(o.A.getChannel(A), null) : N(o.A.getChannel(t), t);
    },
    VOICE_STATE_UPDATES: function (e) {
        let { voiceStates: t } = e;
        return t.reduce((e, t) => {
            let { channelId: n, sessionId: i } = t;
            return l.default.getSessionId() !== i ? e : N(o.A.getChannel(n), n) || e;
        }, !1);
    },
});
