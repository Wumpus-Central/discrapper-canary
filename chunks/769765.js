n.d(t, { A: () => M }), n(321073), n(896048);
var r,
    i = n(311907),
    a = n(73153),
    s = n(999903),
    o = n(181079),
    l = n(961350),
    c = n(734057),
    u = n(808728),
    d = n(71393),
    f = n(652215);
function p(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
let _ = null,
    h = {},
    m = null;
function g() {
    return {
        _categories: [],
        null: [],
    };
}
let E = g();
function b(e, t) {
    e.index = t;
}
function y(e) {
    let t = u.Ay.getChannels(e),
        n = g(),
        r = (e) => {
            var t;
            let { channel: r } = e;
            (null != (t = n[null != r.parent_id ? r.parent_id : "null"]) ? t : n.null).push({
                channel: r,
                index: -1,
            });
        };
    return (
        t[f.rbe.GUILD_CATEGORY].forEach((e) => {
            let { channel: t } = e;
            n._categories.push({
                channel: t,
                index: -1,
            }),
                (n[t.id] = []);
        }),
        t[u.I6].forEach(r),
        t[u.vM].forEach(r),
        (0, s.A)(n._categories, n).forEach(b),
        (h[e] = n),
        n
    );
}
function O() {
    (h = {}), null != _ && y(_);
}
function A(e) {
    let {
        guild: { id: t },
    } = e;
    (h[t] = void 0), _ === t && y(t);
}
function v(e) {
    let {
        guild: { id: t },
    } = e;
    delete h[t];
}
function S(e) {
    let {
        channel: { guild_id: t },
    } = e;
    if (null == t) return !1;
    (h[t] = void 0), _ === t && y(t);
}
function I(e) {
    let { channels: t } = e,
        n = !1;
    for (let { guild_id: e } of t) null != e && ((h[e] = void 0), (n = !0), _ === e && y(e));
    return n;
}
function T(e) {
    let { guildId: t, user: n } = e;
    if (l.default.getId() !== n.id) return !1;
    (h[t] = void 0), t === _ && y(t);
}
function C() {
    if (null == _) return !1;
    y(_);
}
function N(e) {
    let { guildId: t } = e;
    (h[t] = void 0), t === _ && y(t);
}
function R(e, t) {
    if (((m = t), null == e || null == e.getGuildId())) return !1;
    let n = e.getGuildId();
    return null != n && ((h[n] = void 0), n === _ && y(n), !0);
}
function w(e) {
    let { channelId: t } = e;
    return null == t && null != m ? R(c.A.getChannel(m), null) : R(c.A.getChannel(t), t);
}
function P(e) {
    let { voiceStates: t } = e;
    return t.reduce((e, t) => {
        let { channelId: n, sessionId: r } = t;
        return l.default.getSessionId() !== r ? e : R(c.A.getChannel(n), n) || e;
    }, !1);
}
function D(e) {
    let { guildId: t } = e;
    if (((_ = null != t ? t : null), null == t || null != h[t])) return !1;
    y(t);
}
function x() {
    y(f.YYv);
}
function L(e) {
    let t = h[e];
    return null != t ? t : y(e);
}
class j extends (r = i.Ay.Store) {
    initialize() {
        this.waitFor(u.Ay, d.A, l.default, c.A, o.A), this.syncWith([o.A], x);
    }
    getCategories(e) {
        return null != e ? L(e) : E;
    }
}
p(j, "displayName", "GuildCategoryStore");
let M = new j(a.h, {
    CHANNEL_SELECT: D,
    CONNECTION_OPEN: O,
    OVERLAY_INITIALIZE: O,
    CACHE_LOADED_LAZY: O,
    GUILD_CREATE: A,
    GUILD_UPDATE: A,
    GUILD_DELETE: v,
    CHANNEL_CREATE: S,
    CHANNEL_DELETE: S,
    CHANNEL_UPDATES: I,
    GUILD_MEMBER_UPDATE: T,
    CURRENT_USER_UPDATE: C,
    GUILD_ROLE_CREATE: N,
    GUILD_ROLE_UPDATE: N,
    GUILD_ROLE_DELETE: N,
    IMPERSONATE_UPDATE: N,
    IMPERSONATE_STOP: N,
    VOICE_CHANNEL_SELECT: w,
    VOICE_STATE_UPDATES: P,
});
