"use strict";
n.d(t, {
    $o: () => m,
    Gd: () => I,
    Mr: () => C,
    RK: () => T,
    Su: () => _,
    VB: () => S,
    Y5: () => A,
    aw: () => f,
    gc: () => g,
    ii: () => h,
    ob: () => p,
    vI: () => N,
}),
    n(321073);
var i = n(638504),
    r = n(65412),
    a = n(435558),
    s = n.n(a),
    l = n(803805),
    o = n(873298),
    d = n(813827),
    c = n(355097),
    u = n(652215);
let _ = { readerFactory: (e) => new i.V(e, new TextDecoder("utf-8")) },
    E = { [c.oD.PRELOADED_USER_SETTINGS]: o.nT, [c.oD.FRECENCY_AND_FAVORITES_SETTINGS]: l.aw };
function A(e, t) {
    return null != t && e in E ? h(E[e], t) : null;
}
function h(e, t) {
    if (null == t) return null;
    let n = (0, r.A)(t);
    try {
        return e.fromBinary(n, _);
    } catch (e) {
        throw Error(`Settings proto failed to deserialize (potentially corrupt): ${e}`);
    }
}
function I(e) {
    return h(o.nT, e);
}
function f(e, t) {
    return p(E[e], t);
}
function p(e, t) {
    return (0, r.C)(e.toBinary(t));
}
function T(e, t, n) {
    for (let e in ((t = { ...t }), n)) delete t[e];
    return e.mergePartial(t, n), t;
}
function m(e, t, n) {
    return (null == t || "null" === t) && (t = u.D0I), t in e.guilds || (e.guilds[t] = o.nx.create()), n(e.guilds[t]);
}
function g(e, t, n, i) {
    var r;
    return (r = (e) => S(e, n, i)), null == e.guilds && (e.guilds = o.KJ.create()), m(e.guilds, t, r);
}
function S(e, t, n) {
    return t in e.channels || (e.channels[t] = o.Ju.create()), n(e.channels[t]);
}
function N(e, t) {
    null == e.versions && (e.versions = d.u.create());
    let n = 0;
    for (let e of t) {
        if (e.version <= n) throw Error("Migrations are out of order or there is a duplicate version");
        n = e.version;
    }
    let i = 0.1 > Math.random(),
        r = !1,
        a = [];
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
        (r = !0), null != n.cleanup && a.push(n.cleanup);
    }
    return { proto: e, isDirty: r, cleanupFuncs: a };
}
function C(e, t) {
    let n = Object.entries(e);
    if (n.length > t)
        for (
            n = s()
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
        let n = l.zT.create();
        (n.frecency = t.frecency),
            (n.recentUses = t.recentUses.filter((e) => null != e && e > 0).map(String)),
            (n.score = Math.round(t.score)),
            (n.totalUses = t.totalUses),
            (i[e] = n);
    }
    return i;
}
