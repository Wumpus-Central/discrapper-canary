let r = n(74509),
    i = n(46666),
    { ANY: s } = i,
    a = n(4144),
    o = n(481558),
    l = [new i(">=0.0.0-0")],
    u = [new i(">=0.0.0")],
    d = (e, t, n) => {
        let r, i, d, f, E, h, p;
        if (e === t) return !0;
        if (1 === e.length && e[0].semver === s)
            if (1 === t.length && t[0].semver === s) return !0;
            else e = n.includePrerelease ? l : u;
        if (1 === t.length && t[0].semver === s)
            if (n.includePrerelease) return !0;
            else t = u;
        let m = new Set();
        for (let t of e)
            ">" === t.operator || ">=" === t.operator
                ? (r = c(r, t, n))
                : "<" === t.operator || "<=" === t.operator
                  ? (i = _(i, t, n))
                  : m.add(t.semver);
        if (m.size > 1) return null;
        if (r && i && ((d = o(r.semver, i.semver, n)) > 0 || (0 === d && (">=" !== r.operator || "<=" !== i.operator))))
            return null;
        for (let e of m) {
            if ((r && !a(e, String(r), n)) || (i && !a(e, String(i), n))) return null;
            for (let r of t) if (!a(e, String(r), n)) return !1;
            return !0;
        }
        let g = !!i && !n.includePrerelease && !!i.semver.prerelease.length && i.semver,
            A = !!r && !n.includePrerelease && !!r.semver.prerelease.length && r.semver;
        for (let e of (g && 1 === g.prerelease.length && "<" === i.operator && 0 === g.prerelease[0] && (g = !1), t)) {
            if (
                ((p = p || ">" === e.operator || ">=" === e.operator),
                (h = h || "<" === e.operator || "<=" === e.operator),
                r)
            ) {
                if (
                    (A &&
                        e.semver.prerelease &&
                        e.semver.prerelease.length &&
                        e.semver.major === A.major &&
                        e.semver.minor === A.minor &&
                        e.semver.patch === A.patch &&
                        (A = !1),
                    ">" === e.operator || ">=" === e.operator)
                ) {
                    if ((f = c(r, e, n)) === e && f !== r) return !1;
                } else if (">=" === r.operator && !a(r.semver, String(e), n)) return !1;
            }
            if (i) {
                if (
                    (g &&
                        e.semver.prerelease &&
                        e.semver.prerelease.length &&
                        e.semver.major === g.major &&
                        e.semver.minor === g.minor &&
                        e.semver.patch === g.patch &&
                        (g = !1),
                    "<" === e.operator || "<=" === e.operator)
                ) {
                    if ((E = _(i, e, n)) === e && E !== i) return !1;
                } else if ("<=" === i.operator && !a(i.semver, String(e), n)) return !1;
            }
            if (!e.operator && (i || r) && 0 !== d) return !1;
        }
        return (!r || !h || !!i || 0 === d) && (!i || !p || !!r || 0 === d) && !A && !g && !0;
    },
    c = (e, t, n) => {
        if (!e) return t;
        let r = o(e.semver, t.semver, n);
        return r > 0 ? e : r < 0 || (">" === t.operator && ">=" === e.operator) ? t : e;
    },
    _ = (e, t, n) => {
        if (!e) return t;
        let r = o(e.semver, t.semver, n);
        return r < 0 ? e : r > 0 || ("<" === t.operator && "<=" === e.operator) ? t : e;
    };
e.exports = (e, t, n = {}) => {
    if (e === t) return !0;
    (e = new r(e, n)), (t = new r(t, n));
    let i = !1;
    o: for (let r of e.set) {
        for (let e of t.set) {
            let t = d(r, e, n);
            if (((i = i || null !== t), t)) continue o;
        }
        if (i) return !1;
    }
    return !0;
};
