let r = n(74509),
    i = n(46666),
    { ANY: a } = i,
    s = n(4144),
    o = n(481558),
    l = (e, t, n = {}) => {
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
    },
    c = [new i(">=0.0.0-0")],
    u = [new i(">=0.0.0")],
    d = (e, t, n) => {
        let r, i, l, d, _, h, m;
        if (e === t) return !0;
        if (1 === e.length && e[0].semver === a)
            if (1 === t.length && t[0].semver === a) return !0;
            else e = n.includePrerelease ? c : u;
        if (1 === t.length && t[0].semver === a)
            if (n.includePrerelease) return !0;
            else t = u;
        let g = new Set();
        for (let t of e)
            ">" === t.operator || ">=" === t.operator
                ? (r = f(r, t, n))
                : "<" === t.operator || "<=" === t.operator
                  ? (i = p(i, t, n))
                  : g.add(t.semver);
        if (g.size > 1) return null;
        if (r && i && ((l = o(r.semver, i.semver, n)) > 0 || (0 === l && (">=" !== r.operator || "<=" !== i.operator))))
            return null;
        for (let e of g) {
            if ((r && !s(e, String(r), n)) || (i && !s(e, String(i), n))) return null;
            for (let r of t) if (!s(e, String(r), n)) return !1;
            return !0;
        }
        let E = !!i && !n.includePrerelease && !!i.semver.prerelease.length && i.semver,
            b = !!r && !n.includePrerelease && !!r.semver.prerelease.length && r.semver;
        for (let e of (E && 1 === E.prerelease.length && "<" === i.operator && 0 === E.prerelease[0] && (E = !1), t)) {
            if (
                ((m = m || ">" === e.operator || ">=" === e.operator),
                (h = h || "<" === e.operator || "<=" === e.operator),
                r)
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
                    if ((d = f(r, e, n)) === e && d !== r) return !1;
                } else if (">=" === r.operator && !s(r.semver, String(e), n)) return !1;
            }
            if (i) {
                if (
                    (E &&
                        e.semver.prerelease &&
                        e.semver.prerelease.length &&
                        e.semver.major === E.major &&
                        e.semver.minor === E.minor &&
                        e.semver.patch === E.patch &&
                        (E = !1),
                    "<" === e.operator || "<=" === e.operator)
                ) {
                    if ((_ = p(i, e, n)) === e && _ !== i) return !1;
                } else if ("<=" === i.operator && !s(i.semver, String(e), n)) return !1;
            }
            if (!e.operator && (i || r) && 0 !== l) return !1;
        }
        return (!r || !h || !!i || 0 === l) && (!i || !m || !!r || 0 === l) && !b && !E && !0;
    },
    f = (e, t, n) => {
        if (!e) return t;
        let r = o(e.semver, t.semver, n);
        return r > 0 ? e : r < 0 || (">" === t.operator && ">=" === e.operator) ? t : e;
    },
    p = (e, t, n) => {
        if (!e) return t;
        let r = o(e.semver, t.semver, n);
        return r < 0 ? e : r > 0 || ("<" === t.operator && "<=" === e.operator) ? t : e;
    };
e.exports = l;
