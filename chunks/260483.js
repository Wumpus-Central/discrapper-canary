n.d(t, { Z: () => L }), n(47120);
var i,
    r = n(392711),
    a = n.n(r),
    s = n(442837),
    o = n(570140),
    l = n(131704),
    u = n(592125);
function c(e, t, n) {
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
let d = {};
function f(e) {
    d = a().omitBy(d, (t) => t.guildId === e);
}
function _(e) {
    d = a().omitBy(d, (t) => t.parentId === e);
}
function p(e) {
    var t;
    null === (t = e.threads) || void 0 === t || t.forEach(m);
}
function h(e) {
    if (!(e.id in d)) {
        var t, n;
        d[e.id] = {
            guildId: e.guild_id,
            parentId: e.parent_id,
            memberCount: null !== (t = e.memberCount) && void 0 !== t ? t : 0,
            memberIdsPreview: null !== (n = e.memberIdsPreview) && void 0 !== n ? n : []
        };
    }
    return d[e.id];
}
function m(e) {
    if (!l.AW.has(e.type)) return !1;
    let t = h(e);
    null != e.memberCount && (t.memberCount = e.memberCount), null != e.memberIdsPreview && (t.memberIdsPreview = e.memberIdsPreview);
}
function g(e) {
    (d = {}), e.guilds.forEach(p);
}
function E(e) {
    let { threadMembers: t } = e;
    d = { ...t };
}
function v(e) {
    let { guild: t } = e;
    p(t);
}
function y(e) {
    let { guild: t } = e;
    f(t.id);
}
function I(e) {
    let { channel: t } = e;
    return m(t);
}
function T(e) {
    let { threads: t } = e;
    t.forEach(m);
}
function b(e) {
    let { threads: t } = e;
    t.forEach(R);
}
function S(e) {
    let { channel: t } = e;
    _(t.id);
}
function A(e) {
    let { channel: t } = e;
    delete d[t.id];
}
function N(e) {
    let t = !1;
    for (let n of e.messages) t = R(n.thread) || t;
    return t;
}
function C(e) {
    let t = !1;
    for (let n of e.messages) for (let e of n) t = R(e.thread) || t;
    return (
        e.threads.forEach((e) => {
            t = R(e) || t;
        }),
        t
    );
}
function R(e) {
    if (null != e && !(e.id in d)) {
        let t = u.Z.getChannel(e.id);
        if (null != t) return m(t), !0;
    }
    return !1;
}
function O(e) {
    let t = d[e.id];
    if (null == t) return !1;
    null != e.memberIdsPreview && (t.memberIdsPreview = e.memberIdsPreview), (t.memberCount = e.memberCount);
}
class D extends (i = s.ZP.Store) {
    initialize() {
        this.waitFor(u.Z);
    }
    getMemberCount(e) {
        var t, n;
        return null !== (n = null === (t = d[e]) || void 0 === t ? void 0 : t.memberCount) && void 0 !== n ? n : null;
    }
    getMemberIdsPreview(e) {
        var t, n;
        return null !== (n = null === (t = d[e]) || void 0 === t ? void 0 : t.memberIdsPreview) && void 0 !== n ? n : null;
    }
    getInitialOverlayState() {
        return d;
    }
}
c(D, 'displayName', 'ThreadMembersStore');
let L = new D(o.Z, {
    CONNECTION_OPEN: g,
    OVERLAY_INITIALIZE: E,
    GUILD_CREATE: v,
    GUILD_DELETE: y,
    CHANNEL_DELETE: S,
    THREAD_CREATE: I,
    THREAD_UPDATE: I,
    THREAD_LIST_SYNC: T,
    THREAD_MEMBERS_UPDATE: O,
    SEARCH_FINISH: C,
    MOD_VIEW_SEARCH_FINISH: C,
    LOAD_THREADS_SUCCESS: b,
    LOAD_ARCHIVED_THREADS_SUCCESS: b,
    THREAD_DELETE: A,
    LOAD_MESSAGES_SUCCESS: N
});
