n.d(t, { Z: () => k }), n(653041), n(47120), n(724458);
var i,
    r = n(442837),
    a = n(570140),
    s = n(740504),
    o = n(853856),
    l = n(314897),
    u = n(592125),
    c = n(984933),
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
function v(e, t) {
    e.index = t;
}
function y(e) {
    let t = c.ZP.getChannels(e),
        n = g(),
        i = (e) => {
            var t;
            let { channel: i } = e;
            (null !== (t = n[null != i.parent_id ? i.parent_id : 'null']) && void 0 !== t ? t : n.null).push({
                channel: i,
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
        t[c.sH].forEach(i),
        t[c.Zb].forEach(i),
        (0, s.Z)(n._categories, n).forEach(v),
        (h[e] = n),
        n
    );
}
function I() {
    (h = {}), null != p && y(p);
}
function T(e) {
    let {
        guild: { id: t }
    } = e;
    (h[t] = void 0), p === t && y(t);
}
function b(e) {
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
function A(e) {
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
function C() {
    if (null == p) return !1;
    y(p);
}
function R(e) {
    let { guildId: t } = e;
    (h[t] = void 0), t === p && y(t);
}
function O(e, t) {
    if (((m = t), null == e || null == e.getGuildId())) return !1;
    let n = e.getGuildId();
    return null != n && ((h[n] = void 0), n === p && y(n), !0);
}
function D(e) {
    let { channelId: t } = e;
    return null == t && null != m ? O(u.Z.getChannel(m), null) : O(u.Z.getChannel(t), t);
}
function x(e) {
    let { voiceStates: t } = e;
    return t.reduce((e, t) => {
        let { channelId: n, sessionId: i } = t;
        return l.default.getSessionId() !== i ? e : O(u.Z.getChannel(n), n) || e;
    }, !1);
}
function L(e) {
    let { guildId: t } = e;
    if (((p = null != t ? t : null), null == t || null != h[t])) return !1;
    y(t);
}
function P() {
    y(f.I_8);
}
function w(e) {
    let t = h[e];
    return null != t ? t : y(e);
}
class M extends (i = r.ZP.Store) {
    initialize() {
        this.waitFor(c.ZP, d.Z, l.default, u.Z, o.Z), this.syncWith([o.Z], P);
    }
    getCategories(e) {
        return null != e ? w(e) : E;
    }
}
_(M, 'displayName', 'GuildCategoryStore');
let k = new M(a.Z, {
    CHANNEL_SELECT: L,
    CONNECTION_OPEN: I,
    OVERLAY_INITIALIZE: I,
    CACHE_LOADED_LAZY: I,
    GUILD_CREATE: T,
    GUILD_UPDATE: T,
    GUILD_DELETE: b,
    CHANNEL_CREATE: S,
    CHANNEL_DELETE: S,
    CHANNEL_UPDATES: A,
    GUILD_MEMBER_UPDATE: N,
    CURRENT_USER_UPDATE: C,
    GUILD_ROLE_CREATE: R,
    GUILD_ROLE_UPDATE: R,
    GUILD_ROLE_DELETE: R,
    IMPERSONATE_UPDATE: R,
    IMPERSONATE_STOP: R,
    VOICE_CHANNEL_SELECT: D,
    VOICE_STATE_UPDATES: x
});
