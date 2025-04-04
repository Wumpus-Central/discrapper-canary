n.d(t, { Z: () => D }), n(47120);
var r,
    i = n(392711),
    o = n.n(i),
    a = n(442837),
    s = n(570140),
    l = n(131704),
    c = n(592125),
    u = n(709054);
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
function f(e) {
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
                d(e, t, n[t]);
            });
    }
    return e;
}
function _(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
    }
    return n;
}
function p(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : _(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let h = {},
    m = new Set();
function g(e) {
    return {
        id: e.id,
        parentId: e.parent_id
    };
}
function E(e) {
    e in h && delete h[e];
}
function b(e) {
    null != e.threads && e.threads.length > 0 && ((h[e.id] = {}), e.threads.filter((e) => l.AW.has(e.type)).forEach((t) => y(e.id, t))), e.hasThreadsSubscription && m.add(e.id);
}
function y(e, t) {
    let n = h[e],
        r = t.parent_id;
    r in n || (n[r] = {}), (h[e][r][t.id] = g(t));
}
function v(e) {
    (h = {}),
        m.clear(),
        e.guilds.forEach((e) => {
            b(e);
        });
}
function O(e) {
    let { channels: t } = e;
    (h = {}),
        o()(t)
            .filter((e) => l.Ec.has(e.type))
            .groupBy('guild_id')
            .forEach((e, t) => {
                (h[t] = {}), e.forEach((e) => y(t, e));
            });
}
function I(e) {
    let { guild: t } = e;
    E(t.id), b(t);
}
function S(e) {
    let { guild: t } = e;
    E(t.id);
}
function T(e) {
    var t, n;
    let { channel: r } = e;
    if (!l.AW.has(r.type)) return !1;
    if ((null == (t = r.threadMetadata) ? void 0 : t.archived) === !0) return A(r);
    {
        let e = null != (n = h[r.guild_id]) ? n : {};
        h[r.guild_id] = p(f({}, e), { [r.parent_id]: p(f({}, e[r.parent_id]), { [r.id]: g(r) }) });
    }
}
function N(e) {
    let { guildId: t, threads: n, channelIds: r } = e;
    for (let e in (null == r && m.add(t), (h[t] = f({}, h[t])), h[t])) h[t][e] = f({}, h[t][e]);
    n.forEach((e) => y(t, e));
}
function A(e) {
    let { guild_id: t, parent_id: n, id: r } = e;
    if (null == t || null == n || !(t in h) || !(n in h[t]) || !(r in h[t][n])) return !1;
    (h[t] = p(f({}, h[t]), { [n]: f({}, h[t][n]) })), delete h[t][n][r], o().isEmpty(h[t][n]) && delete h[t][n];
}
function C(e) {
    let { channel: t } = e;
    return A(t);
}
function R(e) {
    let { channel: t } = e;
    if (null == t.guild_id || !(t.guild_id in h)) return !1;
    (h[t.guild_id] = f({}, h[t.guild_id])), delete h[t.guild_id][t.id];
}
let P = {};
class w extends (r = a.ZP.Store) {
    initialize() {
        this.waitFor(c.Z);
    }
    isActive(e, t, n) {
        return null != e && null != this.getThreadsForParent(e, t)[n];
    }
    getThreadsForGuild(e) {
        var t;
        return null != (t = h[e]) ? t : P;
    }
    getThreadsForParent(e, t) {
        var n;
        return null != (n = this.getThreadsForGuild(e)[t]) ? n : P;
    }
    hasThreadsForChannel(e, t) {
        return !o().isEmpty(this.getThreadsForParent(e, t));
    }
    forEachGuild(e) {
        u.default.keys(h).forEach((t) => {
            e(t, h[t]);
        });
    }
    hasLoaded(e) {
        return m.has(e);
    }
}
d(w, 'displayName', 'ActiveThreadsStore');
let D = new w(s.Z, {
    CONNECTION_OPEN: v,
    OVERLAY_INITIALIZE: O,
    GUILD_CREATE: I,
    GUILD_DELETE: S,
    THREAD_CREATE: T,
    THREAD_UPDATE: T,
    THREAD_LIST_SYNC: N,
    THREAD_DELETE: C,
    CHANNEL_DELETE: R
});
