n.d(t, {
    Uc: () => f,
    ac: () => m,
    cv: () => g,
    d5: () => h,
    i7: () => T,
    kI: () => p,
    re: () => v,
    tU: () => A,
    u0: () => I,
    uL: () => b,
    xU: () => E,
    xt: () => S
}),
    n(411104),
    n(47120),
    n(653041);
var i = n(647943),
    r = n(581282),
    a = n(392711),
    s = n.n(a),
    o = n(377108),
    l = n(524437),
    u = n(397696),
    c = n(526761),
    d = n(981631);
let f = { readerFactory: (e) => new i.o(e, new TextDecoder('utf-8')) },
    _ = {
        [c.yP.PRELOADED_USER_SETTINGS]: l.o8,
        [c.yP.FRECENCY_AND_FAVORITES_SETTINGS]: o.ji
    };
function p(e, t) {
    return null != t && e in _ ? h(_[e], t) : null;
}
function h(e, t) {
    if (null == t) return null;
    let n = (0, r.c)(t);
    try {
        return e.fromBinary(n, f);
    } catch (e) {
        throw Error('Settings proto failed to deserialize (potentially corrupt): '.concat(e));
    }
}
function m(e) {
    return h(l.o8, e);
}
function g(e, t) {
    return E(_[e], t);
}
function E(e, t) {
    return (0, r.m)(e.toBinary(t));
}
function v(e, t, n) {
    for (let e in ((t = { ...t }), n)) delete t[e];
    return e.mergePartial(t, n), t;
}
function y(e, t, n) {
    return null == e.guilds && (e.guilds = l.os.create()), I(e.guilds, t, n);
}
function I(e, t, n) {
    return (null == t || 'null' === t) && (t = d.aIL), t in e.guilds || (e.guilds[t] = l.C4.create()), n(e.guilds[t]);
}
function T(e, t, n, i) {
    return y(e, t, (e) => b(e, n, i));
}
function b(e, t, n) {
    return t in e.channels || (e.channels[t] = l.p5.create()), n(e.channels[t]);
}
function S(e, t) {
    null == e.versions && (e.versions = u.L.create());
    let n = 0;
    for (let e of t) {
        if (e.version <= n) throw Error('Migrations are out of order or there is a duplicate version');
        n = e.version;
    }
    let i = 0.1 > Math.random(),
        r = !1,
        a = [];
    for (let n of t) {
        var s, o;
        if (n.version <= e.versions.clientVersion) {
            i && (null === (s = n.cleanup) || void 0 === s || s.call(n));
            continue;
        }
        let t = n.run(e);
        if (((e.versions.clientVersion = n.version), !1 === t)) {
            null === (o = n.cleanup) || void 0 === o || o.call(n);
            continue;
        }
        (r = !0), null != n.cleanup && a.push(n.cleanup);
    }
    return {
        proto: e,
        isDirty: r,
        cleanupFuncs: a
    };
}
function A(e, t) {
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
        let n = o._F.create();
        (n.frecency = t.frecency), (n.recentUses = t.recentUses.filter((e) => null != e && e > 0).map(String)), (n.score = Math.round(t.score)), (n.totalUses = t.totalUses), (i[e] = n);
    }
    return i;
}
