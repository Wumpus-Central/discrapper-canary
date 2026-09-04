n.d(t, {
    $o: () => p,
    Gd: () => A,
    Mr: () => S,
    RK: () => f,
    VB: () => m,
    Y5: () => _,
    aw: () => h,
    gc: () => T,
    ii: () => E,
    ob: () => I,
    vI: () => g,
}),
    n(321073);
var i = n(435558),
    r = n.n(i),
    a = n(803805),
    s = n(873298),
    l = n(813827),
    o = n(767589),
    d = n(355097),
    c = n(652215);
let u = { [d.oD.PRELOADED_USER_SETTINGS]: s.nT, [d.oD.FRECENCY_AND_FAVORITES_SETTINGS]: a.aw };
function _(e, t) {
    return null != t && e in u ? E(u[e], t) : null;
}
function E(e, t) {
    if (null == t) return null;
    try {
        return (0, o.ii)(e, t);
    } catch (e) {
        throw Error(`Settings proto failed to deserialize (potentially corrupt): ${e}`);
    }
}
function A(e) {
    return E(s.nT, e);
}
function h(e, t) {
    return I(u[e], t);
}
function I(e, t) {
    return (0, o.ob)(e, t);
}
function f(e, t, n) {
    for (let e in ((t = { ...t }), n)) delete t[e];
    return e.mergePartial(t, n), t;
}
function p(e, t, n) {
    return (null == t || "null" === t) && (t = c.D0I), t in e.guilds || (e.guilds[t] = s.nx.create()), n(e.guilds[t]);
}
function T(e, t, n, i) {
    var r;
    return (r = (e) => m(e, n, i)), null == e.guilds && (e.guilds = s.KJ.create()), p(e.guilds, t, r);
}
function m(e, t, n) {
    return t in e.channels || (e.channels[t] = s.Ju.create()), n(e.channels[t]);
}
function g(e, t) {
    null == e.versions && (e.versions = l.u.create());
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
function S(e, t) {
    let n = Object.entries(e);
    if (n.length > t)
        for (
            n = r()
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
        let n = a.zT.create();
        (n.frecency = t.frecency),
            (n.recentUses = t.recentUses.filter((e) => null != e && e > 0).map(String)),
            (n.score = Math.round(t.score)),
            (n.totalUses = t.totalUses),
            (i[e] = n);
    }
    return i;
}
