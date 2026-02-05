"use strict";
n.d(t, {
    $o: () => T,
    Gd: () => m,
    Mr: () => C,
    RK: () => A,
    Su: () => _,
    VB: () => S,
    Y5: () => p,
    aw: () => g,
    gc: () => y,
    ii: () => h,
    ob: () => E,
    vI: () => v,
}),
    n(321073);
var r = n(638504),
    i = n(65412),
    a = n(735438),
    s = n.n(a),
    o = n(803805),
    l = n(873298),
    u = n(813827),
    c = n(355097),
    d = n(652215);
let _ = { readerFactory: (e) => new r.V(e, new TextDecoder("utf-8")) },
    f = { [c.oD.PRELOADED_USER_SETTINGS]: l.nT, [c.oD.FRECENCY_AND_FAVORITES_SETTINGS]: o.aw };
function p(e, t) {
    return null != t && e in f ? h(f[e], t) : null;
}
function h(e, t) {
    if (null == t) return null;
    let n = (0, i.A)(t);
    try {
        return e.fromBinary(n, _);
    } catch (e) {
        throw Error(`Settings proto failed to deserialize (potentially corrupt): ${e}`);
    }
}
function m(e) {
    return h(l.nT, e);
}
function g(e, t) {
    return E(f[e], t);
}
function E(e, t) {
    return (0, i.C)(e.toBinary(t));
}
function A(e, t, n) {
    for (let e in ((t = { ...t }), n)) delete t[e];
    return e.mergePartial(t, n), t;
}
function I(e, t, n) {
    return null == e.guilds && (e.guilds = l.KJ.create()), T(e.guilds, t, n);
}
function T(e, t, n) {
    return (null == t || "null" === t) && (t = d.D0I), t in e.guilds || (e.guilds[t] = l.nx.create()), n(e.guilds[t]);
}
function y(e, t, n, r) {
    return I(e, t, (e) => S(e, n, r));
}
function S(e, t, n) {
    return t in e.channels || (e.channels[t] = l.Ju.create()), n(e.channels[t]);
}
function v(e, t) {
    null == e.versions && (e.versions = u.u.create());
    let n = 0;
    for (let e of t) {
        if (e.version <= n) throw Error("Migrations are out of order or there is a duplicate version");
        n = e.version;
    }
    let r = 0.1 > Math.random(),
        i = !1,
        a = [];
    for (let n of t) {
        if (n.version <= e.versions.clientVersion) {
            r && n.cleanup?.();
            continue;
        }
        let t = n.run(e);
        if (((e.versions.clientVersion = n.version), !1 === t)) {
            n.cleanup?.();
            continue;
        }
        (i = !0), null != n.cleanup && a.push(n.cleanup);
    }
    return { proto: e, isDirty: i, cleanupFuncs: a };
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
    let r = {};
    for (let [e, t] of n) {
        let n = o.zT.create();
        (n.frecency = t.frecency),
            (n.recentUses = t.recentUses.filter((e) => null != e && e > 0).map(String)),
            (n.score = Math.round(t.score)),
            (n.totalUses = t.totalUses),
            (r[e] = n);
    }
    return r;
}
