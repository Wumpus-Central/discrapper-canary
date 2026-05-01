n.d(t, {
    $o: () => f,
    Gd: () => T,
    Mr: () => C,
    RK: () => N,
    Su: () => E,
    VB: () => m,
    Y5: () => A,
    aw: () => h,
    gc: () => p,
    ii: () => I,
    ob: () => S,
    vI: () => O,
}),
    n(321073);
var i = n(638504),
    a = n(65412),
    r = n(735438),
    s = n.n(r),
    l = n(803805),
    o = n(873298),
    d = n(813827),
    c = n(355097),
    _ = n(652215);
let E = { readerFactory: (e) => new i.V(e, new TextDecoder("utf-8")) },
    u = { [c.oD.PRELOADED_USER_SETTINGS]: o.nT, [c.oD.FRECENCY_AND_FAVORITES_SETTINGS]: l.aw };
function A(e, t) {
    return null != t && e in u ? I(u[e], t) : null;
}
function I(e, t) {
    if (null == t) return null;
    let n = (0, a.A)(t);
    try {
        return e.fromBinary(n, E);
    } catch (e) {
        throw Error(`Settings proto failed to deserialize (potentially corrupt): ${e}`);
    }
}
function T(e) {
    return I(o.nT, e);
}
function h(e, t) {
    return S(u[e], t);
}
function S(e, t) {
    return (0, a.C)(e.toBinary(t));
}
function N(e, t, n) {
    for (let e in ((t = { ...t }), n)) delete t[e];
    return e.mergePartial(t, n), t;
}
function f(e, t, n) {
    return (null == t || "null" === t) && (t = _.D0I), t in e.guilds || (e.guilds[t] = o.nx.create()), n(e.guilds[t]);
}
function p(e, t, n, i) {
    var a;
    return (a = (e) => m(e, n, i)), null == e.guilds && (e.guilds = o.KJ.create()), f(e.guilds, t, a);
}
function m(e, t, n) {
    return t in e.channels || (e.channels[t] = o.Ju.create()), n(e.channels[t]);
}
function O(e, t) {
    null == e.versions && (e.versions = d.u.create());
    let n = 0;
    for (let e of t) {
        if (e.version <= n) throw Error("Migrations are out of order or there is a duplicate version");
        n = e.version;
    }
    let i = 0.1 > Math.random(),
        a = !1,
        r = [];
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
        (a = !0), null != n.cleanup && r.push(n.cleanup);
    }
    return { proto: e, isDirty: a, cleanupFuncs: r };
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
