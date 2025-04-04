n.d(t, { Z: () => D }), n(47120);
var r,
    i = n(392711),
    o = n.n(i),
    a = n(442837),
    s = n(570140),
    l = n(131704),
    c = n(592125);
function u(e, t, n) {
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
function d(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        'function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                u(e, t, n[t]);
            });
    }
    return e;
}
let f = {};
function _(e) {
    f = o().omitBy(f, (t) => t.guildId === e);
}
function p(e) {
    f = o().omitBy(f, (t) => t.parentId === e);
}
function h(e) {
    var t;
    null == (t = e.threads) || t.forEach(g);
}
function m(e) {
    if (!(e.id in f)) {
        var t, n;
        f[e.id] = {
            guildId: e.guild_id,
            parentId: e.parent_id,
            memberCount: null != (t = e.memberCount) ? t : 0,
            memberIdsPreview: null != (n = e.memberIdsPreview) ? n : []
        };
    }
    return f[e.id];
}
function g(e) {
    if (!l.AW.has(e.type)) return !1;
    let t = m(e);
    null != e.memberCount && (t.memberCount = e.memberCount), null != e.memberIdsPreview && (t.memberIdsPreview = e.memberIdsPreview);
}
function E(e) {
    (f = {}), e.guilds.forEach(h);
}
function b(e) {
    let { threadMembers: t } = e;
    f = d({}, t);
}
function y(e) {
    let { guild: t } = e;
    h(t);
}
function v(e) {
    let { guild: t } = e;
    _(t.id);
}
function O(e) {
    let { channel: t } = e;
    return g(t);
}
function I(e) {
    let { threads: t } = e;
    t.forEach(g);
}
function S(e) {
    let { threads: t } = e;
    t.forEach(R);
}
function T(e) {
    let { channel: t } = e;
    p(t.id);
}
function N(e) {
    let { channel: t } = e;
    delete f[t.id];
}
function A(e) {
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
    if (null != e && !(e.id in f)) {
        let t = c.Z.getChannel(e.id);
        if (null != t) return g(t), !0;
    }
    return !1;
}
function P(e) {
    let t = f[e.id];
    if (null == t) return !1;
    null != e.memberIdsPreview && (t.memberIdsPreview = e.memberIdsPreview), (t.memberCount = e.memberCount);
}
class w extends (r = a.ZP.Store) {
    initialize() {
        this.waitFor(c.Z);
    }
    getMemberCount(e) {
        var t, n;
        return null != (n = null == (t = f[e]) ? void 0 : t.memberCount) ? n : null;
    }
    getMemberIdsPreview(e) {
        var t, n;
        return null != (n = null == (t = f[e]) ? void 0 : t.memberIdsPreview) ? n : null;
    }
    getInitialOverlayState() {
        return f;
    }
}
u(w, 'displayName', 'ThreadMembersStore');
let D = new w(s.Z, {
    CONNECTION_OPEN: E,
    OVERLAY_INITIALIZE: b,
    GUILD_CREATE: y,
    GUILD_DELETE: v,
    CHANNEL_DELETE: T,
    THREAD_CREATE: O,
    THREAD_UPDATE: O,
    THREAD_LIST_SYNC: I,
    THREAD_MEMBERS_UPDATE: P,
    SEARCH_FINISH: C,
    MOD_VIEW_SEARCH_FINISH: C,
    LOAD_THREADS_SUCCESS: S,
    LOAD_ARCHIVED_THREADS_SUCCESS: S,
    THREAD_DELETE: N,
    LOAD_MESSAGES_SUCCESS: A
});
