n.d(t, {
    $o: () => v,
    Gd: () => E,
    Mr: () => C,
    RK: () => O,
    Su: () => _,
    VB: () => I,
    Y5: () => m,
    aw: () => b,
    gc: () => S,
    ii: () => g,
    ob: () => y,
    vI: () => T,
}),
    n(65821),
    n(896048),
    n(321073),
    n(264879);
var r = n(638504),
    i = n(65412),
    a = n(735438),
    s = n.n(a),
    o = n(803805),
    l = n(873298),
    c = n(813827),
    u = n(355097),
    d = n(652215);

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
let _ = {
        readerFactory: (e) => new r.V(e, new TextDecoder("utf-8")),
    },
    h = {
        [u.oD.PRELOADED_USER_SETTINGS]: l.nT,
        [u.oD.FRECENCY_AND_FAVORITES_SETTINGS]: o.aw,
    };

function m(e, t) {
    return null != t && e in h ? g(h[e], t) : null;
}

function g(e, t) {
    if (null == t) return null;
    let n = (0, i.A)(t);
    try {
        return e.fromBinary(n, _);
    } catch (e) {
        throw Error("Settings proto failed to deserialize (potentially corrupt): ".concat(e));
    }
}

function E(e) {
    return g(l.nT, e);
}

function b(e, t) {
    return y(h[e], t);
}

function y(e, t) {
    return (0, i.C)(e.toBinary(t));
}

function O(e, t, n) {
    for (let e in ((t = p({}, t)), n)) delete t[e];
    return e.mergePartial(t, n), t;
}

function A(e, t, n) {
    return null == e.guilds && (e.guilds = l.KJ.create()), v(e.guilds, t, n);
}

function v(e, t, n) {
    return (null == t || "null" === t) && (t = d.D0I), t in e.guilds || (e.guilds[t] = l.nx.create()), n(e.guilds[t]);
}

function S(e, t, n, r) {
    return A(e, t, (e) => I(e, n, r));
}

function I(e, t, n) {
    return t in e.channels || (e.channels[t] = l.Ju.create()), n(e.channels[t]);
}

function T(e, t) {
    null == e.versions && (e.versions = c.u.create());
    let n = 0;
    for (let e of t) {
        if (e.version <= n) throw Error("Migrations are out of order or there is a duplicate version");
        n = e.version;
    }
    let r = 0.1 > Math.random(),
        i = !1,
        a = [];
    for (let n of t) {
        var s, o;
        if (n.version <= e.versions.clientVersion) {
            r && (null == (s = n.cleanup) || s.call(n));
            continue;
        }
        let t = n.run(e);
        if (((e.versions.clientVersion = n.version), !1 === t)) {
            null == (o = n.cleanup) || o.call(n);
            continue;
        }
        (i = !0), null != n.cleanup && a.push(n.cleanup);
    }
    return {
        proto: e,
        isDirty: i,
        cleanupFuncs: a,
    };
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
