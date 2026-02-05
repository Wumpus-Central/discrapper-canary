"use strict";
n.d(t, { A: () => P }), n(321073);
var r = n(311907),
    i = n(73153),
    a = n(999903),
    s = n(181079),
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
let m = h();
function g(e, t) {
    e.index = t;
}
function E(e) {
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
        (0, a.A)(n._categories, n).forEach(g),
        (f[e] = n),
        n
    );
}
function A() {
    (f = {}), null != _ && E(_);
}
function I(e) {
    let {
        guild: { id: t },
    } = e;
    (f[t] = void 0), _ === t && E(t);
}
function T(e) {
    let {
        guild: { id: t },
    } = e;
    delete f[t];
}
function y(e) {
    let {
        channel: { guild_id: t },
    } = e;
    if (null == t) return !1;
    (f[t] = void 0), _ === t && E(t);
}
function S(e) {
    let { channels: t } = e,
        n = !1;
    for (let { guild_id: e } of t) null != e && ((f[e] = void 0), (n = !0), _ === e && E(e));
    return n;
}
function v(e) {
    let { guildId: t, user: n } = e;
    if (o.default.getId() !== n.id) return !1;
    (f[t] = void 0), t === _ && E(t);
}
function C() {
    if (null == _) return !1;
    E(_);
}
function b(e) {
    let { guildId: t } = e;
    (f[t] = void 0), t === _ && E(t);
}
function N(e, t) {
    if (((p = t), null == e || null == e.getGuildId())) return !1;
    let n = e.getGuildId();
    return null != n && ((f[n] = void 0), n === _ && E(n), !0);
}
function R(e) {
    let { channelId: t } = e;
    return null == t && null != p ? N(l.A.getChannel(p), null) : N(l.A.getChannel(t), t);
}
function O(e) {
    let { voiceStates: t } = e;
    return t.reduce((e, t) => {
        let { channelId: n, sessionId: r } = t;
        return o.default.getSessionId() !== r ? e : N(l.A.getChannel(n), n) || e;
    }, !1);
}
function D(e) {
    let { guildId: t } = e;
    if (((_ = t ?? null), null == t || null != f[t])) return !1;
    E(t);
}
function L() {
    E(d.YYv);
}
function w(e) {
    return f[e] ?? E(e);
}
class x extends r.Ay.Store {
    static displayName = "GuildCategoryStore";
    initialize() {
        this.waitFor(u.Ay, c.A, o.default, l.A, s.A), this.syncWith([s.A], L);
    }
    getCategories(e) {
        return null != e ? w(e) : m;
    }
}
let P = new x(i.h, {
    CHANNEL_SELECT: D,
    CONNECTION_OPEN: A,
    OVERLAY_INITIALIZE: A,
    CACHE_LOADED_LAZY: A,
    GUILD_CREATE: I,
    GUILD_UPDATE: I,
    GUILD_DELETE: T,
    CHANNEL_CREATE: y,
    CHANNEL_DELETE: y,
    CHANNEL_UPDATES: S,
    GUILD_MEMBER_UPDATE: v,
    CURRENT_USER_UPDATE: C,
    GUILD_ROLE_CREATE: b,
    GUILD_ROLE_UPDATE: b,
    GUILD_ROLE_DELETE: b,
    IMPERSONATE_UPDATE: b,
    IMPERSONATE_STOP: b,
    VOICE_CHANNEL_SELECT: R,
    VOICE_STATE_UPDATES: O,
});
