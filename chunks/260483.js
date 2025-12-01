n.d(t, { Z: () => D }), n(388685);
var r,
    i = n(392711),
    a = n.n(i),
    o = n(442837),
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
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
function d(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            r.forEach(function (t) {
                u(e, t, n[t]);
            });
    }
    return e;
}
let f = {};
function p(e) {
    f = a().omitBy(f, (t) => t.guildId === e);
}
function _(e) {
    f = a().omitBy(f, (t) => t.parentId === e);
}
function m(e) {
    var t;
    null == (t = e.threads) || t.forEach(g);
}
function h(e) {
    if (!(e.id in f)) {
        var t, n;
        f[e.id] = {
            guildId: e.guild_id,
            parentId: e.parent_id,
            memberCount: null != (t = e.memberCount) ? t : 0,
            memberIdsPreview: null != (n = e.memberIdsPreview) ? n : [],
        };
    }
    return f[e.id];
}
function g(e) {
    if (!l.AW.has(e.type)) return !1;
    let t = h(e);
    null != e.memberCount && (t.memberCount = e.memberCount),
        null != e.memberIdsPreview && (t.memberIdsPreview = e.memberIdsPreview);
}
function E(e) {
    (f = {}), e.guilds.forEach(m);
}
function b(e) {
    let { threadMembers: t } = e;
    f = d({}, t);
}
function y(e) {
    let { guild: t } = e;
    m(t);
}
function O(e) {
    let { guild: t } = e;
    p(t.id);
}
function v(e) {
    let { channel: t } = e;
    return g(t);
}
function S(e) {
    let { threads: t } = e;
    t.forEach(g);
}
function I(e) {
    let { threads: t } = e;
    t.forEach(P);
}
function T(e) {
    let { channel: t } = e;
    _(t.id);
}
function A(e) {
    let { channel: t } = e;
    delete f[t.id];
}
function C(e) {
    let t = !1;
    for (let n of e.messages) t = P(n.thread) || t;
    return t;
}
function N(e) {
    let { data: t } = e,
        n = !1;
    return (
        t.forEach((e) => {
            let { threads: t, messages: r } = e;
            r.forEach((e) => {
                e.forEach((e) => {
                    n = P(e.thread) || n;
                });
            }),
                t.forEach((e) => {
                    n = P(e) || n;
                });
        }),
        n
    );
}
function P(e) {
    if (null != e && !(e.id in f)) {
        let t = c.Z.getChannel(e.id);
        if (null != t) return g(t), !0;
    }
    return !1;
}
function R(e) {
    let t = f[e.id];
    if (null == t) return !1;
    null != e.memberIdsPreview && (t.memberIdsPreview = e.memberIdsPreview), (t.memberCount = e.memberCount);
}
class w extends (r = o.ZP.Store) {
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
u(w, "displayName", "ThreadMembersStore");
let D = new w(s.Z, {
    CONNECTION_OPEN: E,
    OVERLAY_INITIALIZE: b,
    GUILD_CREATE: y,
    GUILD_DELETE: O,
    CHANNEL_DELETE: T,
    THREAD_CREATE: v,
    THREAD_UPDATE: v,
    THREAD_LIST_SYNC: S,
    THREAD_MEMBERS_UPDATE: R,
    SEARCH_MESSAGES_SUCCESS: N,
    MOD_VIEW_SEARCH_MESSAGES_SUCCESS: N,
    LOAD_THREADS_SUCCESS: I,
    LOAD_ARCHIVED_THREADS_SUCCESS: I,
    THREAD_DELETE: A,
    LOAD_MESSAGES_SUCCESS: C,
});
