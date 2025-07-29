(n.d(t, {
    LU: () => E,
    ZP: () => T
}),
    n(388685),
    n(35282),
    n(539854));
var r,
    i = n(392711),
    a = n.n(i),
    o = n(442837),
    s = n(570140),
    l = n(704907),
    c = n(581883);
n(689079);
var u = n(674563),
    d = n(526761);
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
function f(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        ('function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                _(e, t, n[t]);
            }));
    }
    return e;
}
function p(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        (t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r));
    }
    return n;
}
function h(e, t) {
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
let m = { pendingUsages: [] },
    g = new l.ZP({
        computeBonus: () => 1,
        computeWeight: (e) => (e <= 3 ? 100 : e <= 15 ? 70 : e <= 30 ? 50 : e <= 45 ? 30 : e <= 80 ? 10 : 1),
        lookupKey: (e) => e,
        afterCompute: () => {},
        numFrequentlyItems: u.yP
    });
function E(e, t) {
    return e
        .filter((e) => {
            if (e.includes(':'))
                if ((null == t ? void 0 : t.guild) != null) return t.guild.id === e.split(':')[1];
                else return !1;
            return !0;
        })
        .map((e) => e.split(':')[0]);
}
function b(e, t) {
    return 0 > Number(t.id) ? t.id : (null == e ? void 0 : e.guild) != null && null != t.guildId ? ''.concat(t.id, ':').concat(e.guild.id) : t.id;
}
function y(e) {
    let {
        settings: { type: t },
        wasSaved: n
    } = e;
    if (t !== d.yP.FRECENCY_AND_FAVORITES_SETTINGS || !n) return !1;
    m.pendingUsages = [];
}
function O(e) {
    let { command: t, context: n } = e,
        r = b(n, t);
    (m.pendingUsages.push({
        key: r,
        timestamp: Date.now()
    }),
        g.track(r),
        g.compute());
}
function v() {
    var e, t;
    let n = null != (t = null == (e = c.Z.frecencyWithoutFetchingLatest.applicationCommandFrecency) ? void 0 : e.applicationCommands) ? t : {};
    g.overwriteHistory(
        a().mapValues(n, (e) => h(f({}, e), { recentUses: e.recentUses.map(Number).filter((e) => e > 0) })),
        m.pendingUsages
    );
}
class I extends (r = o.ZP.PersistedStore) {
    initialize(e) {
        (null != e && (m = e), this.syncWith([c.Z], v));
    }
    getState() {
        return m;
    }
    hasPendingUsage() {
        return m.pendingUsages.length > 0;
    }
    getCommandFrecencyWithoutLoadingLatest() {
        return g;
    }
    getScoreWithoutLoadingLatest(e, t) {
        var n;
        return null != (n = g.getScore(b(e, t))) ? n : 0;
    }
    getTopCommandsWithoutLoadingLatest() {
        return g.frequently;
    }
}
(_(I, 'displayName', 'ApplicationCommandFrecencyStore'), _(I, 'persistKey', 'ApplicationCommandFrecencyV2'));
let T = new I(s.Z, {
    APPLICATION_COMMAND_USED: O,
    USER_SETTINGS_PROTO_UPDATE: y
});
