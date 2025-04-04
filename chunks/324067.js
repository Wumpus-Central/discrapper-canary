n.d(t, { Z: () => k }), n(653041), n(47120);
var r,
    i = n(442837),
    o = n(570140),
    a = n(740504),
    s = n(853856),
    l = n(314897),
    c = n(592125),
    u = n(984933),
    d = n(430824),
    f = n(981631);
function _(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
let p = null,
    h = {},
    m = null;
function g() {
    return {
        _categories: [],
        null: []
    };
}
let E = g();
function b(e, t) {
    e.index = t;
}
function y(e) {
    let t = u.ZP.getChannels(e),
        n = g(),
        r = (e) => {
            var t;
            let { channel: r } = e;
            (null != (t = n[null != r.parent_id ? r.parent_id : 'null']) ? t : n.null).push({
                channel: r,
                index: -1
            });
        };
    return (
        t[f.d4z.GUILD_CATEGORY].forEach((e) => {
            let { channel: t } = e;
            n._categories.push({
                channel: t,
                index: -1
            }),
                (n[t.id] = []);
        }),
        t[u.sH].forEach(r),
        t[u.Zb].forEach(r),
        (0, a.Z)(n._categories, n).forEach(b),
        (h[e] = n),
        n
    );
}
function v() {
    (h = {}), null != p && y(p);
}
function O(e) {
    let {
        guild: { id: t }
    } = e;
    (h[t] = void 0), p === t && y(t);
}
function I(e) {
    let {
        guild: { id: t }
    } = e;
    delete h[t];
}
function S(e) {
    let {
        channel: { guild_id: t }
    } = e;
    if (null == t) return !1;
    (h[t] = void 0), p === t && y(t);
}
function T(e) {
    let { channels: t } = e,
        n = !1;
    for (let { guild_id: e } of t) null != e && ((h[e] = void 0), (n = !0), p === e && y(e));
    return n;
}
function N(e) {
    let { guildId: t, user: n } = e;
    if (l.default.getId() !== n.id) return !1;
    (h[t] = void 0), t === p && y(t);
}
function A() {
    if (null == p) return !1;
    y(p);
}
function C(e) {
    let { guildId: t } = e;
    (h[t] = void 0), t === p && y(t);
}
function R(e, t) {
    if (((m = t), null == e || null == e.getGuildId())) return !1;
    let n = e.getGuildId();
    return null != n && ((h[n] = void 0), n === p && y(n), !0);
}
function P(e) {
    let { channelId: t } = e;
    return null == t && null != m ? R(c.Z.getChannel(m), null) : R(c.Z.getChannel(t), t);
}
function w(e) {
    let { voiceStates: t } = e;
    return t.reduce((e, t) => {
        let { channelId: n, sessionId: r } = t;
        return l.default.getSessionId() !== r ? e : R(c.Z.getChannel(n), n) || e;
    }, !1);
}
function D(e) {
    let { guildId: t } = e;
    if (((p = null != t ? t : null), null == t || null != h[t])) return !1;
    y(t);
}
function L() {
    y(f.I_8);
}
function x(e) {
    let t = h[e];
    return null != t ? t : y(e);
}
class M extends (r = i.ZP.Store) {
    initialize() {
        this.waitFor(u.ZP, d.Z, l.default, c.Z, s.Z), this.syncWith([s.Z], L);
    }
    getCategories(e) {
        return null != e ? x(e) : E;
    }
}
_(M, 'displayName', 'GuildCategoryStore');
let k = new M(o.Z, {
    CHANNEL_SELECT: D,
    CONNECTION_OPEN: v,
    OVERLAY_INITIALIZE: v,
    CACHE_LOADED_LAZY: v,
    GUILD_CREATE: O,
    GUILD_UPDATE: O,
    GUILD_DELETE: I,
    CHANNEL_CREATE: S,
    CHANNEL_DELETE: S,
    CHANNEL_UPDATES: T,
    GUILD_MEMBER_UPDATE: N,
    CURRENT_USER_UPDATE: A,
    GUILD_ROLE_CREATE: C,
    GUILD_ROLE_UPDATE: C,
    GUILD_ROLE_DELETE: C,
    IMPERSONATE_UPDATE: C,
    IMPERSONATE_STOP: C,
    VOICE_CHANNEL_SELECT: P,
    VOICE_STATE_UPDATES: w
});
