"use strict";
n.d(t, {
    $o: () => I,
    Gd: () => E,
    Mr: () => y,
    RK: () => A,
    Su: () => _,
    VB: () => S,
    Y5: () => h,
    aw: () => m,
    gc: () => T,
    ii: () => p,
    ob: () => g,
    vI: () => N,
}),
    n(321073);
var i = n(638504),
    r = n(65412),
    s = n(735438),
    a = n.n(s),
    o = n(803805),
    l = n(873298),
    u = n(813827),
    c = n(355097),
    d = n(652215);
let _ = { readerFactory: (e) => new i.V(e, new TextDecoder("utf-8")) },
    f = { [c.oD.PRELOADED_USER_SETTINGS]: l.nT, [c.oD.FRECENCY_AND_FAVORITES_SETTINGS]: o.aw };
function h(e, t) {
    return null != t && e in f ? p(f[e], t) : null;
}
function p(e, t) {
    if (null == t) return null;
    let n = (0, r.A)(t);
    try {
        return e.fromBinary(n, _);
    } catch (e) {
        throw Error(`Settings proto failed to deserialize (potentially corrupt): ${e}`);
    }
}
function E(e) {
    return p(l.nT, e);
}
function m(e, t) {
    return g(f[e], t);
}
function g(e, t) {
    return (0, r.C)(e.toBinary(t));
}
function A(e, t, n) {
    for (let e in ((t = { ...t }), n)) delete t[e];
    return e.mergePartial(t, n), t;
}
function I(e, t, n) {
    return (null == t || "null" === t) && (t = d.D0I), t in e.guilds || (e.guilds[t] = l.nx.create()), n(e.guilds[t]);
}
function T(e, t, n, i) {
    var r;
    return (r = (e) => S(e, n, i)), null == e.guilds && (e.guilds = l.KJ.create()), I(e.guilds, t, r);
}
function S(e, t, n) {
    return t in e.channels || (e.channels[t] = l.Ju.create()), n(e.channels[t]);
}
function N(e, t) {
    null == e.versions && (e.versions = u.u.create());
    let n = 0;
    for (let e of t) {
        if (e.version <= n) throw Error("Migrations are out of order or there is a duplicate version");
        n = e.version;
    }
    let i = 0.1 > Math.random(),
        r = !1,
        s = [];
    for (let n of t) {
        if (n.version <= e.versions.clientVersion) {
            i && n.cleanup?.();
            continue;
        }
        let t = n.run(e);
        if (((e.versions.clientVersion = n.version), !1 === t)) {
            n.cleanup?.();
            continue;
        }
        (r = !0), null != n.cleanup && s.push(n.cleanup);
    }
    return { proto: e, isDirty: r, cleanupFuncs: s };
}
function y(e, t) {
    let n = Object.entries(e);
    if (n.length > t)
        for (
            n = a()
                .sortBy(n, (e) => {
                    let [t, n] = e;
                    return n.recentUses[n.recentUses.length - 1];
                })
                .reverse();
            n.length > t;
        )
            n.pop();
    let i = {};
    for (let [e, t] of n) {
        let n = o.zT.create();
        (n.frecency = t.frecency),
            (n.recentUses = t.recentUses.filter((e) => null != e && e > 0).map(String)),
            (n.score = Math.round(t.score)),
            (n.totalUses = t.totalUses),
            (i[e] = n);
    }
    return i;
}
