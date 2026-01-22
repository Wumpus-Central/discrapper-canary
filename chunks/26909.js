n.d(t, {
    Ay: () => S,
    RG: () => E,
}),
    n(896048),
    n(747238),
    n(321073);
var r,
    i = n(735438),
    a = n.n(i),
    s = n(311907),
    o = n(73153),
    l = n(283047),
    c = n(617617);
n(73510);
var u = n(705751),
    d = n(355097);
function f(e, t, n) {
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
function p(e) {
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
                f(e, t, n[t]);
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
function h(e, t) {
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
let m = { pendingUsages: [] },
    g = new l.A({
        computeBonus: () => 1,
        lookupKey: (e) => e,
        afterCompute: () => {},
        numFrequentlyItems: u.h2,
    });
function E(e, t) {
    return e
        .filter((e) => {
            if (e.includes(":"))
                if ((null == t ? void 0 : t.guild) != null) return t.guild.id === e.split(":")[1];
                else return !1;
            return !0;
        })
        .map((e) => e.split(":")[0]);
}
function b(e, t) {
    return 0 > Number(t.id)
        ? t.id
        : (null == e ? void 0 : e.guild) != null && null != t.guildId
          ? "".concat(t.id, ":").concat(e.guild.id)
          : t.id;
}
function y(e) {
    let {
        settings: { type: t },
        wasSaved: n,
    } = e;
    if (t !== d.oD.FRECENCY_AND_FAVORITES_SETTINGS || !n) return !1;
    m.pendingUsages = [];
}
function O(e) {
    let { command: t, context: n } = e,
        r = b(n, t);
    m.pendingUsages.push({
        key: r,
        timestamp: Date.now(),
    }),
        g.track(r),
        g.compute();
}
function A() {
    var e, t;
    let n =
        null !=
        (e =
            null == (t = c.A.frecencyWithoutFetchingLatest.applicationCommandFrecency) ? void 0 : t.applicationCommands)
            ? e
            : {};
    g.overwriteHistory(
        a().mapValues(n, (e) => h(p({}, e), { recentUses: e.recentUses.map(Number).filter((e) => e > 0) })),
        m.pendingUsages,
    );
}
class v extends (r = s.Ay.PersistedStore) {
    initialize(e) {
        null != e && (m = e), this.syncWith([c.A], A);
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
f(v, "displayName", "ApplicationCommandFrecencyStore"), f(v, "persistKey", "ApplicationCommandFrecencyV2");
let S = new v(o.h, {
    APPLICATION_COMMAND_USED: O,
    USER_SETTINGS_PROTO_UPDATE: y,
});
