var i,
    a = r(47120);
var o = r(392711),
    s = r.n(o),
    l = r(442837),
    u = r(570140),
    c = r(131704),
    d = r(592125),
    f = r(709054);
function p(e, n, r) {
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
let h = {},
    _ = new Set();
function m(e) {
    return {
        id: e.id,
        parentId: e.parent_id
    };
}
function g(e) {
    e in h && delete h[e];
}
function E(e) {
    null != e.threads && e.threads.length > 0 && ((h[e.id] = {}), e.threads.filter((e) => c.AW.has(e.type)).forEach((n) => v(e.id, n))), e.hasThreadsSubscription && _.add(e.id);
}
function v(e, n) {
    let r = h[e],
        i = n.parent_id;
    !(i in r) && (r[i] = {}), (h[e][i][n.id] = m(n));
}
function y(e) {
    (h = {}),
        _.clear(),
        e.guilds.forEach((e) => {
            E(e);
        });
}
function b(e) {
    let { channels: n } = e;
    (h = {}),
        s()(n)
            .filter((e) => c.Ec.has(e.type))
            .groupBy('guild_id')
            .forEach((e, n) => {
                (h[n] = {}), e.forEach((e) => v(n, e));
            });
}
function I(e) {
    let { guild: n } = e;
    g(n.id), E(n);
}
function T(e) {
    let { guild: n } = e;
    g(n.id);
}
function S(e) {
    var n, r;
    let { channel: i } = e;
    if (!c.AW.has(i.type)) return !1;
    if ((null === (n = i.threadMetadata) || void 0 === n ? void 0 : n.archived) === !0) return C(i);
    {
        let e = null !== (r = h[i.guild_id]) && void 0 !== r ? r : {};
        h[i.guild_id] = {
            ...e,
            [i.parent_id]: {
                ...e[i.parent_id],
                [i.id]: m(i)
            }
        };
    }
}
function A(e) {
    let { guildId: n, threads: r, channelIds: i } = e;
    for (let e in (null == i && _.add(n), (h[n] = { ...h[n] }), h[n])) h[n][e] = { ...h[n][e] };
    r.forEach((e) => v(n, e));
}
function C(e) {
    let { guild_id: n, parent_id: r, id: i } = e;
    if (null == n || null == r || !(n in h) || !(r in h[n]) || !(i in h[n][r])) return !1;
    (h[n] = {
        ...h[n],
        [r]: { ...h[n][r] }
    }),
        delete h[n][r][i],
        s().isEmpty(h[n][r]) && delete h[n][r];
}
function N(e) {
    let { channel: n } = e;
    return C(n);
}
function R(e) {
    let { channel: n } = e;
    if (null == n.guild_id || !(n.guild_id in h)) return !1;
    (h[n.guild_id] = { ...h[n.guild_id] }), delete h[n.guild_id][n.id];
}
let O = {};
class D extends (i = l.ZP.Store) {
    initialize() {
        this.waitFor(d.Z);
    }
    isActive(e, n, r) {
        return null != e && null != this.getThreadsForParent(e, n)[r];
    }
    getThreadsForGuild(e) {
        var n;
        return null !== (n = h[e]) && void 0 !== n ? n : O;
    }
    getThreadsForParent(e, n) {
        var r;
        return null !== (r = this.getThreadsForGuild(e)[n]) && void 0 !== r ? r : O;
    }
    hasThreadsForChannel(e, n) {
        return !s().isEmpty(this.getThreadsForParent(e, n));
    }
    forEachGuild(e) {
        f.default.keys(h).forEach((n) => {
            e(n, h[n]);
        });
    }
    hasLoaded(e) {
        return _.has(e);
    }
}
p(D, 'displayName', 'ActiveThreadsStore'),
    (n.Z = new D(u.Z, {
        CONNECTION_OPEN: y,
        OVERLAY_INITIALIZE: b,
        GUILD_CREATE: I,
        GUILD_DELETE: T,
        THREAD_CREATE: S,
        THREAD_UPDATE: S,
        THREAD_LIST_SYNC: A,
        THREAD_DELETE: N,
        CHANNEL_DELETE: R
    }));
