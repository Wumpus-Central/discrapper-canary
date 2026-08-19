let n = r(74509),
    o = r(46666),
    { ANY: i } = o,
    a = r(4144),
    s = r(481558),
    l = [new o(">=0.0.0-0")],
    u = [new o(">=0.0.0")],
    c = (e, t, r) => {
        let n, o, c, d, h, m, v;
        if (e === t) return !0;
        if (1 === e.length && e[0].semver === i)
            if (1 === t.length && t[0].semver === i) return !0;
            else e = r.includePrerelease ? l : u;
        if (1 === t.length && t[0].semver === i)
            if (r.includePrerelease) return !0;
            else t = u;
        let y = new Set();
        for (let t of e)
            ">" === t.operator || ">=" === t.operator
                ? (n = f(n, t, r))
                : "<" === t.operator || "<=" === t.operator
                  ? (o = p(o, t, r))
                  : y.add(t.semver);
        if (y.size > 1) return null;
        if (n && o && ((c = s(n.semver, o.semver, r)) > 0 || (0 === c && (">=" !== n.operator || "<=" !== o.operator))))
            return null;
        for (let e of y) {
            if ((n && !a(e, String(n), r)) || (o && !a(e, String(o), r))) return null;
            for (let n of t) if (!a(e, String(n), r)) return !1;
            return !0;
        }
        let g = !!o && !r.includePrerelease && !!o.semver.prerelease.length && o.semver,
            b = !!n && !r.includePrerelease && !!n.semver.prerelease.length && n.semver;
        for (let e of (g && 1 === g.prerelease.length && "<" === o.operator && 0 === g.prerelease[0] && (g = !1), t)) {
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
                    if ((d = f(n, e, r)) === e && d !== n) return !1;
                } else if (">=" === n.operator && !a(n.semver, String(e), r)) return !1;
            }
            if (o) {
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
                    if ((h = p(o, e, r)) === e && h !== o) return !1;
                } else if ("<=" === o.operator && !a(o.semver, String(e), r)) return !1;
            }
            if (!e.operator && (o || n) && 0 !== c) return !1;
        }
        return (!n || !m || !!o || 0 === c) && (!o || !v || !!n || 0 === c) && !b && !g && !0;
    },
    f = (e, t, r) => {
        if (!e) return t;
        let n = s(e.semver, t.semver, r);
        return n > 0 ? e : n < 0 || (">" === t.operator && ">=" === e.operator) ? t : e;
    },
    p = (e, t, r) => {
        if (!e) return t;
        let n = s(e.semver, t.semver, r);
        return n < 0 ? e : n > 0 || ("<" === t.operator && "<=" === e.operator) ? t : e;
    };
e.exports = (e, t, r = {}) => {
    if (e === t) return !0;
    (e = new n(e, r)), (t = new n(t, r));
    let o = !1;
    n: for (let n of e.set) {
        for (let e of t.set) {
            let t = c(n, e, r);
            if (((o = o || null !== t), t)) continue n;
        }
        if (o) return !1;
    }
    return !0;
};
