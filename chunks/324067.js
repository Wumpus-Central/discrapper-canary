var i,
    a = r(653041);
var o = r(47120);
var s = r(724458);
var l = r(442837),
    u = r(570140),
    c = r(740504),
    d = r(853856),
    f = r(314897),
    p = r(592125),
    h = r(984933),
    _ = r(430824),
    m = r(981631);
function g(e, n, r) {
    return (
        n in e
            ? Object.defineProperty(e, n, {
                  value: r,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[n] = r),
        e
    );
}
let E = null,
    v = {},
    y = null;
function b() {
    return {
        _categories: [],
        null: []
    };
}
let I = b();
function T(e, n) {
    e.index = n;
}
function S(e) {
    let n = h.ZP.getChannels(e),
        r = b(),
        i = (e) => {
            var n;
            let { channel: i } = e;
            (null !== (n = r[null != i.parent_id ? i.parent_id : 'null']) && void 0 !== n ? n : r.null).push({
                channel: i,
                index: -1
            });
        };
    return (
        n[m.d4z.GUILD_CATEGORY].forEach((e) => {
            let { channel: n } = e;
            r._categories.push({
                channel: n,
                index: -1
            }),
                (r[n.id] = []);
        }),
        n[h.sH].forEach(i),
        n[h.Zb].forEach(i),
        (0, c.Z)(r._categories, r).forEach(T),
        (v[e] = r),
        r
    );
}
function A() {
    (v = {}), null != E && S(E);
}
function C(e) {
    let {
        guild: { id: n }
    } = e;
    (v[n] = void 0), E === n && S(n);
}
function N(e) {
    let {
        guild: { id: n }
    } = e;
    delete v[n];
}
function R(e) {
    let {
        channel: { guild_id: n }
    } = e;
    if (null == n) return !1;
    (v[n] = void 0), E === n && S(n);
}
function O(e) {
    let { channels: n } = e,
        r = !1;
    for (let { guild_id: e } of n) null != e && ((v[e] = void 0), (r = !0), E === e && S(e));
    return r;
}
function D(e) {
    let { guildId: n, user: r } = e;
    if (f.default.getId() !== r.id) return !1;
    (v[n] = void 0), n === E && S(n);
}
function x() {
    if (null == E) return !1;
    S(E);
}
function L(e) {
    let { guildId: n } = e;
    (v[n] = void 0), n === E && S(n);
}
function w(e, n) {
    if (((y = n), null == e || null == e.getGuildId())) return !1;
    let r = e.getGuildId();
    return null != r && ((v[r] = void 0), r === E && S(r), !0);
}
function P(e) {
    let { channelId: n } = e;
    return null == n && null != y ? w(p.Z.getChannel(y), null) : w(p.Z.getChannel(n), n);
}
function M(e) {
    let { voiceStates: n } = e;
    return n.reduce((e, n) => {
        let { channelId: r, sessionId: i } = n;
        return f.default.getSessionId() !== i ? e : w(p.Z.getChannel(r), r) || e;
    }, !1);
}
function k(e) {
    let { guildId: n } = e;
    if (((E = null != n ? n : null), null == n || null != v[n])) return !1;
    S(n);
}
function U() {
    S(m.I_8);
}
function B(e) {
    let n = v[e];
    return null != n ? n : S(e);
}
class G extends (i = l.ZP.Store) {
    initialize() {
        this.waitFor(h.ZP, _.Z, f.default, p.Z, d.Z), this.syncWith([d.Z], U);
    }
    getCategories(e) {
        return null != e ? B(e) : I;
    }
}
g(G, 'displayName', 'GuildCategoryStore'),
    (n.Z = new G(u.Z, {
        CHANNEL_SELECT: k,
        CONNECTION_OPEN: A,
        OVERLAY_INITIALIZE: A,
        CACHE_LOADED_LAZY: A,
        GUILD_CREATE: C,
        GUILD_UPDATE: C,
        GUILD_DELETE: N,
        CHANNEL_CREATE: R,
        CHANNEL_DELETE: R,
        CHANNEL_UPDATES: O,
        GUILD_MEMBER_UPDATE: D,
        CURRENT_USER_UPDATE: x,
        GUILD_ROLE_CREATE: L,
        GUILD_ROLE_UPDATE: L,
        GUILD_ROLE_DELETE: L,
        IMPERSONATE_UPDATE: L,
        IMPERSONATE_STOP: L,
        VOICE_CHANNEL_SELECT: P,
        VOICE_STATE_UPDATES: M
    }));
