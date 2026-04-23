n.d(t, {
    $o: () => R,
    Gd: () => T,
    Mr: () => m,
    RK: () => O,
    Su: () => c,
    VB: () => C,
    Y5: () => I,
    aw: () => S,
    gc: () => f,
    ii: () => A,
    ob: () => N,
    vI: () => p,
}),
    n(321073);
var i = n(638504),
    r = n(65412),
    a = n(735438),
    s = n.n(a),
    _ = n(803805),
    l = n(873298),
    o = n(813827),
    E = n(355097),
    d = n(652215);
let c = { readerFactory: (e) => new i.V(e, new TextDecoder("utf-8")) },
    u = { [E.oD.PRELOADED_USER_SETTINGS]: l.nT, [E.oD.FRECENCY_AND_FAVORITES_SETTINGS]: _.aw };
function I(e, t) {
    return null != t && e in u ? A(u[e], t) : null;
}
function A(e, t) {
    if (null == t) return null;
    let n = (0, r.A)(t);
    try {
        return e.fromBinary(n, c);
    } catch (e) {
        throw Error(`Settings proto failed to deserialize (potentially corrupt): ${e}`);
    }
}
function T(e) {
    return A(l.nT, e);
}
function S(e, t) {
    return N(u[e], t);
}
function N(e, t) {
    return (0, r.C)(e.toBinary(t));
}
function O(e, t, n) {
    for (let e in ((t = { ...t }), n)) delete t[e];
    return e.mergePartial(t, n), t;
}
function R(e, t, n) {
    return (null == t || "null" === t) && (t = d.D0I), t in e.guilds || (e.guilds[t] = l.nx.create()), n(e.guilds[t]);
}
function f(e, t, n, i) {
    var r;
    return (r = (e) => C(e, n, i)), null == e.guilds && (e.guilds = l.KJ.create()), R(e.guilds, t, r);
}
function C(e, t, n) {
    return t in e.channels || (e.channels[t] = l.Ju.create()), n(e.channels[t]);
}
function p(e, t) {
    null == e.versions && (e.versions = o.u.create());
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
function m(e, t) {
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
        let n = _.zT.create();
        (n.frecency = t.frecency),
            (n.recentUses = t.recentUses.filter((e) => null != e && e > 0).map(String)),
            (n.score = Math.round(t.score)),
            (n.totalUses = t.totalUses),
            (i[e] = n);
    }
    return i;
}
