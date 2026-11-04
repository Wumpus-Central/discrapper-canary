n(321073);
var i = n(435558),
    r = n.n(i),
    a = n(803805),
    s = n(873298),
    l = n(813827),
    o = n(767589),
    d = n(355097);
n(652215);
let c = { [d.oD.PRELOADED_USER_SETTINGS]: s.nT, [d.oD.FRECENCY_AND_FAVORITES_SETTINGS]: a.aw };
function u(e, t) {
    if (null == t) return null;
    try {
        return (0, o.ii)(e, t);
    } catch (e) {
        throw Error(`Settings proto failed to deserialize (potentially corrupt): ${e}`);
    }
}
function _(e, t) {
    return (0, o.ob)(e, t);
}
function E(e, t, n) {
    return ((null == t || "null" === t) && (t = "0"), t in e.guilds || (e.guilds[t] = s.nx.create()), n(e.guilds[t]));
}
function A(e, t, n) {
    return (t in e.channels || (e.channels[t] = s.Ju.create()), n(e.channels[t]));
}
n.d(
    t,
    {},
    {
        $o: E,
        Gd: function (e) {
            return u(s.nT, e);
        },
        Mr: function (e, t) {
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
                ((n.frecency = t.frecency),
                    (n.recentUses = t.recentUses.filter((e) => null != e && e > 0).map(String)),
                    (n.score = Math.round(t.score)),
                    (n.totalUses = t.totalUses),
                    (i[e] = n));
            }
            return i;
        },
        RK: function (e, t, n) {
            for (let e in ((t = { ...t }), n)) delete t[e];
            return (e.mergePartial(t, n), t);
        },
        VB: A,
        Y5: function (e, t) {
            return null != t && e in c ? u(c[e], t) : null;
        },
        aw: function (e, t) {
            return _(c[e], t);
        },
        gc: function (e, t, n, i) {
            var r;
            return ((r = (e) => A(e, n, i)), null == e.guilds && (e.guilds = s.KJ.create()), E(e.guilds, t, r));
        },
        ii: u,
        ob: _,
        vI: function (e, t) {
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
                ((r = !0), null != n.cleanup && a.push(n.cleanup));
            }
            return { proto: e, isDirty: r, cleanupFuncs: a };
        },
    },
);
