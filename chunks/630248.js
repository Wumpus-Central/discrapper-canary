n.d(t, { A: () => C }), n(321073);
var r,
    i = n(735438),
    a = n.n(i),
    s = n(311907),
    o = n(73153),
    l = n(155718),
    c = n(283047),
    u = n(933958),
    d = n(617617),
    f = n(705751),
    p = n(355097);
function _(e, t, n) {
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
function h(e) {
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
                _(e, t, n[t]);
            });
    }
    return e;
}
function m(e, t) {
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
function g(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : m(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let E = [l.kc.CHAT, l.kc.PRIMARY_ENTRY_POINT],
    b = { pendingUsages: [] },
    y = new c.A({
        computeBonus: () => 100,
        lookupKey: (e) => e,
        afterCompute: () => {},
        numFrequentlyItems: f.h2,
    });
function O(e) {
    let {
        settings: { type: t },
        wasSaved: n,
    } = e;
    if (t !== p.oD.FRECENCY_AND_FAVORITES_SETTINGS || !n) return !1;
    b.pendingUsages = [];
}
function A(e) {
    var t;
    let { command: n } = e;
    if (!E.includes(n.type) || (null == (t = u.Ay.getLaunchState(n.applicationId)) ? void 0 : t.isLaunching)) return !1;
    S(n.applicationId);
}
function v(e) {
    let { applicationId: t } = e;
    S(t);
}
function S(e) {
    b.pendingUsages.push({
        key: e,
        timestamp: Date.now(),
    }),
        y.track(e),
        y.compute();
}
function I() {
    var e, t;
    let n =
        null != (e = null == (t = d.A.frecencyWithoutFetchingLatest.applicationFrecency) ? void 0 : t.applications)
            ? e
            : {};
    y.overwriteHistory(
        a().mapValues(n, (e) => g(h({}, e), { recentUses: e.recentUses.map(Number).filter((e) => e > 0) })),
        b.pendingUsages,
    );
}
class T extends (r = s.Ay.PersistedStore) {
    initialize(e) {
        null != e && (b = e), this.waitFor(u.Ay, d.A), this.syncWith([d.A], I);
    }
    getState() {
        return b;
    }
    hasPendingUsage() {
        return b.pendingUsages.length > 0;
    }
    getApplicationFrecencyWithoutLoadingLatest() {
        return y;
    }
    getScoreWithoutLoadingLatest(e) {
        var t;
        return null != (t = y.getScore(e)) ? t : 0;
    }
    getTopApplicationsWithoutLoadingLatest() {
        return y.frequently;
    }
}
_(T, "displayName", "ApplicationFrecencyStore"), _(T, "persistKey", "ApplicationFrecency");
let C = new T(o.h, {
    APPLICATION_COMMAND_USED: A,
    EMBEDDED_ACTIVITY_OPEN: v,
    USER_SETTINGS_PROTO_UPDATE: O,
});
