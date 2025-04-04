n.d(t, {
    Uc: () => p,
    ac: () => E,
    cv: () => b,
    d5: () => g,
    i7: () => S,
    kI: () => m,
    re: () => v,
    tU: () => A,
    u0: () => I,
    uL: () => T,
    xU: () => y,
    xt: () => N
}),
    n(411104),
    n(47120),
    n(653041),
    n(978209);
var r = n(647943),
    i = n(581282),
    o = n(392711),
    a = n.n(o),
    s = n(377108),
    l = n(524437),
    c = n(397696),
    u = n(526761),
    d = n(981631);
function f(e, t, n) {
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
function _(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        'function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                f(e, t, n[t]);
            });
    }
    return e;
}
let p = { readerFactory: (e) => new r.o(e, new TextDecoder('utf-8')) },
    h = {
        [u.yP.PRELOADED_USER_SETTINGS]: l.o8,
        [u.yP.FRECENCY_AND_FAVORITES_SETTINGS]: s.ji
    };
function m(e, t) {
    return null != t && e in h ? g(h[e], t) : null;
}
function g(e, t) {
    if (null == t) return null;
    let n = (0, i.c)(t);
    try {
        return e.fromBinary(n, p);
    } catch (e) {
        throw Error('Settings proto failed to deserialize (potentially corrupt): '.concat(e));
    }
}
function E(e) {
    return g(l.o8, e);
}
function b(e, t) {
    return y(h[e], t);
}
function y(e, t) {
    return (0, i.m)(e.toBinary(t));
}
function v(e, t, n) {
    for (let e in ((t = _({}, t)), n)) delete t[e];
    return e.mergePartial(t, n), t;
}
function O(e, t, n) {
    return null == e.guilds && (e.guilds = l.os.create()), I(e.guilds, t, n);
}
function I(e, t, n) {
    return (null == t || 'null' === t) && (t = d.aIL), t in e.guilds || (e.guilds[t] = l.C4.create()), n(e.guilds[t]);
}
function S(e, t, n, r) {
    return O(e, t, (e) => T(e, n, r));
}
function T(e, t, n) {
    return t in e.channels || (e.channels[t] = l.p5.create()), n(e.channels[t]);
}
function N(e, t) {
    null == e.versions && (e.versions = c.L.create());
    let n = 0;
    for (let e of t) {
        if (e.version <= n) throw Error('Migrations are out of order or there is a duplicate version');
        n = e.version;
    }
    let r = 0.1 > Math.random(),
        i = !1,
        o = [];
    for (let n of t) {
        var a, s;
        if (n.version <= e.versions.clientVersion) {
            r && (null == (a = n.cleanup) || a.call(n));
            continue;
        }
        let t = n.run(e);
        if (((e.versions.clientVersion = n.version), !1 === t)) {
            null == (s = n.cleanup) || s.call(n);
            continue;
        }
        (i = !0), null != n.cleanup && o.push(n.cleanup);
    }
    return {
        proto: e,
        isDirty: i,
        cleanupFuncs: o
    };
}
function A(e, t) {
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
    let r = {};
    for (let [e, t] of n) {
        let n = s._F.create();
        (n.frecency = t.frecency), (n.recentUses = t.recentUses.filter((e) => null != e && e > 0).map(String)), (n.score = Math.round(t.score)), (n.totalUses = t.totalUses), (r[e] = n);
    }
    return r;
}
