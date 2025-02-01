n.d(t, { Z: () => O }), n(47120);
var i,
    r = n(392711),
    a = n.n(r),
    s = n(442837),
    o = n(570140),
    l = n(131704),
    u = n(592125),
    c = n(709054);
function d(e, t, n) {
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
let f = {},
    _ = new Set();
function p(e) {
    return {
        id: e.id,
        parentId: e.parent_id
    };
}
function h(e) {
    e in f && delete f[e];
}
function m(e) {
    null != e.threads && e.threads.length > 0 && ((f[e.id] = {}), e.threads.filter((e) => l.AW.has(e.type)).forEach((t) => g(e.id, t))), e.hasThreadsSubscription && _.add(e.id);
}
function g(e, t) {
    let n = f[e],
        i = t.parent_id;
    i in n || (n[i] = {}), (f[e][i][t.id] = p(t));
}
function E(e) {
    (f = {}),
        _.clear(),
        e.guilds.forEach((e) => {
            m(e);
        });
}
function v(e) {
    let { channels: t } = e;
    (f = {}),
        a()(t)
            .filter((e) => l.Ec.has(e.type))
            .groupBy('guild_id')
            .forEach((e, t) => {
                (f[t] = {}), e.forEach((e) => g(t, e));
            });
}
function y(e) {
    let { guild: t } = e;
    h(t.id), m(t);
}
function I(e) {
    let { guild: t } = e;
    h(t.id);
}
function T(e) {
    var t, n;
    let { channel: i } = e;
    if (!l.AW.has(i.type)) return !1;
    if ((null === (t = i.threadMetadata) || void 0 === t ? void 0 : t.archived) === !0) return S(i);
    {
        let e = null !== (n = f[i.guild_id]) && void 0 !== n ? n : {};
        f[i.guild_id] = {
            ...e,
            [i.parent_id]: {
                ...e[i.parent_id],
                [i.id]: p(i)
            }
        };
    }
}
function b(e) {
    let { guildId: t, threads: n, channelIds: i } = e;
    for (let e in (null == i && _.add(t), (f[t] = { ...f[t] }), f[t])) f[t][e] = { ...f[t][e] };
    n.forEach((e) => g(t, e));
}
function S(e) {
    let { guild_id: t, parent_id: n, id: i } = e;
    if (null == t || null == n || !(t in f) || !(n in f[t]) || !(i in f[t][n])) return !1;
    (f[t] = {
        ...f[t],
        [n]: { ...f[t][n] }
    }),
        delete f[t][n][i],
        a().isEmpty(f[t][n]) && delete f[t][n];
}
function A(e) {
    let { channel: t } = e;
    return S(t);
}
function N(e) {
    let { channel: t } = e;
    if (null == t.guild_id || !(t.guild_id in f)) return !1;
    (f[t.guild_id] = { ...f[t.guild_id] }), delete f[t.guild_id][t.id];
}
let C = {};
class R extends (i = s.ZP.Store) {
    initialize() {
        this.waitFor(u.Z);
    }
    isActive(e, t, n) {
        return null != e && null != this.getThreadsForParent(e, t)[n];
    }
    getThreadsForGuild(e) {
        var t;
        return null !== (t = f[e]) && void 0 !== t ? t : C;
    }
    getThreadsForParent(e, t) {
        var n;
        return null !== (n = this.getThreadsForGuild(e)[t]) && void 0 !== n ? n : C;
    }
    hasThreadsForChannel(e, t) {
        return !a().isEmpty(this.getThreadsForParent(e, t));
    }
    forEachGuild(e) {
        c.default.keys(f).forEach((t) => {
            e(t, f[t]);
        });
    }
    hasLoaded(e) {
        return _.has(e);
    }
}
d(R, 'displayName', 'ActiveThreadsStore');
let O = new R(o.Z, {
    CONNECTION_OPEN: E,
    OVERLAY_INITIALIZE: v,
    GUILD_CREATE: y,
    GUILD_DELETE: I,
    THREAD_CREATE: T,
    THREAD_UPDATE: T,
    THREAD_LIST_SYNC: b,
    THREAD_DELETE: A,
    CHANNEL_DELETE: N
});
