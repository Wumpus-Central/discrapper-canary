n.d(t, { Z: () => w }), n(388685);
var r,
    i = n(392711),
    a = n.n(i),
    o = n(442837),
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
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
function f(e) {
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
                d(e, t, n[t]);
            });
    }
    return e;
}
function p(e, t) {
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
function _(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : p(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let m = {},
    h = new Set();
function g(e) {
    return {
        id: e.id,
        parentId: e.parent_id,
    };
}
function E(e) {
    e in m && delete m[e];
}
function b(e) {
    null != e.threads &&
        e.threads.length > 0 &&
        ((m[e.id] = {}), e.threads.filter((e) => l.AW.has(e.type)).forEach((t) => y(e.id, t))),
        e.hasThreadsSubscription && h.add(e.id);
}
function y(e, t) {
    let n = m[e],
        r = t.parent_id;
    r in n || (n[r] = {}), (m[e][r][t.id] = g(t));
}
function O(e) {
    (m = {}),
        h.clear(),
        e.guilds.forEach((e) => {
            b(e);
        });
}
function v(e) {
    let { channels: t } = e;
    (m = {}),
        a()(t)
            .filter((e) => l.Ec.has(e.type))
            .groupBy("guild_id")
            .forEach((e, t) => {
                (m[t] = {}), e.forEach((e) => y(t, e));
            });
}
function S(e) {
    let { guild: t } = e;
    E(t.id), b(t);
}
function I(e) {
    let { guild: t } = e;
    E(t.id);
}
function T(e) {
    var t, n;
    let { channel: r } = e;
    if (!l.AW.has(r.type)) return !1;
    if ((null == (t = r.threadMetadata) ? void 0 : t.archived) === !0) return C(r);
    {
        let e = null != (n = m[r.guild_id]) ? n : {};
        m[r.guild_id] = _(f({}, e), { [r.parent_id]: _(f({}, e[r.parent_id]), { [r.id]: g(r) }) });
    }
}
function A(e) {
    let { guildId: t, threads: n, channelIds: r } = e;
    for (let e in (null == r && h.add(t), (m[t] = f({}, m[t])), m[t])) m[t][e] = f({}, m[t][e]);
    n.forEach((e) => y(t, e));
}
function C(e) {
    let { guild_id: t, parent_id: n, id: r } = e;
    if (null == t || null == n || !(t in m) || !(n in m[t]) || !(r in m[t][n])) return !1;
    (m[t] = _(f({}, m[t]), { [n]: f({}, m[t][n]) })), delete m[t][n][r], a().isEmpty(m[t][n]) && delete m[t][n];
}
function N(e) {
    let { channel: t } = e;
    return C(t);
}
function P(e) {
    let { channel: t } = e;
    if (null == t.guild_id || !(t.guild_id in m)) return !1;
    (m[t.guild_id] = f({}, m[t.guild_id])), delete m[t.guild_id][t.id];
}
let R = {};
class D extends (r = o.ZP.Store) {
    initialize() {
        this.waitFor(c.Z);
    }
    isActive(e, t, n) {
        return null != e && null != this.getThreadsForParent(e, t)[n];
    }
    getThreadsForGuild(e) {
        var t;
        return null != (t = m[e]) ? t : R;
    }
    getThreadsForParent(e, t) {
        var n;
        return null != (n = this.getThreadsForGuild(e)[t]) ? n : R;
    }
    hasThreadsForChannel(e, t) {
        return !a().isEmpty(this.getThreadsForParent(e, t));
    }
    forEachGuild(e) {
        u.default.keys(m).forEach((t) => {
            e(t, m[t]);
        });
    }
    hasLoaded(e) {
        return h.has(e);
    }
}
d(D, "displayName", "ActiveThreadsStore");
let w = new D(s.Z, {
    CONNECTION_OPEN: O,
    OVERLAY_INITIALIZE: v,
    GUILD_CREATE: S,
    GUILD_DELETE: I,
    THREAD_CREATE: T,
    THREAD_UPDATE: T,
    THREAD_LIST_SYNC: A,
    THREAD_DELETE: N,
    CHANNEL_DELETE: P,
});
