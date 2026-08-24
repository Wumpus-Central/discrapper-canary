let n = r(74509),
    i = r(46666),
    { ANY: o } = i,
    a = r(4144),
    s = r(481558),
    l = [new i(">=0.0.0-0")],
    u = [new i(">=0.0.0")],
    c = (e, t, r) => {
        let n, i, c, p, h, m, v;
        if (e === t) return !0;
        if (1 === e.length && e[0].semver === o)
            if (1 === t.length && t[0].semver === o) return !0;
            else e = r.includePrerelease ? l : u;
        if (1 === t.length && t[0].semver === o)
            if (r.includePrerelease) return !0;
            else t = u;
        let y = new Set();
        for (let t of e)
            ">" === t.operator || ">=" === t.operator
                ? (n = f(n, t, r))
                : "<" === t.operator || "<=" === t.operator
                  ? (i = d(i, t, r))
                  : y.add(t.semver);
        if (y.size > 1) return null;
        if (n && i && ((c = s(n.semver, i.semver, r)) > 0 || (0 === c && (">=" !== n.operator || "<=" !== i.operator))))
            return null;
        for (let e of y) {
            if ((n && !a(e, String(n), r)) || (i && !a(e, String(i), r))) return null;
            for (let n of t) if (!a(e, String(n), r)) return !1;
            return !0;
        }
        let g = !!i && !r.includePrerelease && !!i.semver.prerelease.length && i.semver,
            b = !!n && !r.includePrerelease && !!n.semver.prerelease.length && n.semver;
        for (let e of (g && 1 === g.prerelease.length && "<" === i.operator && 0 === g.prerelease[0] && (g = !1), t)) {
            if (
                ((v = v || ">" === e.operator || ">=" === e.operator),
                (m = m || "<" === e.operator || "<=" === e.operator),
                n)
            ) {
                if (
                    (b &&
                        e.semver.prerelease &&
                        e.semver.prerelease.length &&
                        e.semver.major === b.major &&
                        e.semver.minor === b.minor &&
                        e.semver.patch === b.patch &&
                        (b = !1),
                    ">" === e.operator || ">=" === e.operator)
                ) {
                    if ((p = f(n, e, r)) === e && p !== n) return !1;
                } else if (">=" === n.operator && !a(n.semver, String(e), r)) return !1;
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
                    if ((h = d(i, e, r)) === e && h !== i) return !1;
                } else if ("<=" === i.operator && !a(i.semver, String(e), r)) return !1;
            }
            if (!e.operator && (i || n) && 0 !== c) return !1;
        }
        return (!n || !m || !!i || 0 === c) && (!i || !v || !!n || 0 === c) && !b && !g && !0;
    },
    f = (e, t, r) => {
        if (!e) return t;
        let n = s(e.semver, t.semver, r);
        return n > 0 ? e : n < 0 || (">" === t.operator && ">=" === e.operator) ? t : e;
    },
    d = (e, t, r) => {
        if (!e) return t;
        let n = s(e.semver, t.semver, r);
        return n < 0 ? e : n > 0 || ("<" === t.operator && "<=" === e.operator) ? t : e;
    };
e.exports = (e, t, r = {}) => {
    if (e === t) return !0;
    (e = new n(e, r)), (t = new n(t, r));
    let i = !1;
    n: for (let n of e.set) {
        for (let e of t.set) {
            let t = c(n, e, r);
            if (((i = i || null !== t), t)) continue n;
        }
        if (i) return !1;
    }
    return !0;
};
