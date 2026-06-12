let i = n(74509),
    r = n(46666),
    { ANY: s } = r,
    a = n(4144),
    o = n(481558),
    l = [new r(">=0.0.0-0")],
    u = [new r(">=0.0.0")],
    c = (e, t, n) => {
        let i, r, c, h, f, p, E;
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
                ? (i = d(i, t, n))
                : "<" === t.operator || "<=" === t.operator
                  ? (r = _(r, t, n))
                  : m.add(t.semver);
        if (m.size > 1) return null;
        if (i && r && ((c = o(i.semver, r.semver, n)) > 0 || (0 === c && (">=" !== i.operator || "<=" !== r.operator))))
            return null;
        for (let e of m) {
            if ((i && !a(e, String(i), n)) || (r && !a(e, String(r), n))) return null;
            for (let i of t) if (!a(e, String(i), n)) return !1;
            return !0;
        }
        let g = !!r && !n.includePrerelease && !!r.semver.prerelease.length && r.semver,
            A = !!i && !n.includePrerelease && !!i.semver.prerelease.length && i.semver;
        for (let e of (g && 1 === g.prerelease.length && "<" === r.operator && 0 === g.prerelease[0] && (g = !1), t)) {
            if (
                ((E = E || ">" === e.operator || ">=" === e.operator),
                (p = p || "<" === e.operator || "<=" === e.operator),
                i)
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
                    if ((h = d(i, e, n)) === e && h !== i) return !1;
                } else if (">=" === i.operator && !a(i.semver, String(e), n)) return !1;
            }
            if (r) {
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
                    if ((f = _(r, e, n)) === e && f !== r) return !1;
                } else if ("<=" === r.operator && !a(r.semver, String(e), n)) return !1;
            }
            if (!e.operator && (r || i) && 0 !== c) return !1;
        }
        return (!i || !p || !!r || 0 === c) && (!r || !E || !!i || 0 === c) && !A && !g && !0;
    },
    d = (e, t, n) => {
        if (!e) return t;
        let i = o(e.semver, t.semver, n);
        return i > 0 ? e : i < 0 || (">" === t.operator && ">=" === e.operator) ? t : e;
    },
    _ = (e, t, n) => {
        if (!e) return t;
        let i = o(e.semver, t.semver, n);
        return i < 0 ? e : i > 0 || ("<" === t.operator && "<=" === e.operator) ? t : e;
    };
e.exports = (e, t, n = {}) => {
    if (e === t) return !0;
    (e = new i(e, n)), (t = new i(t, n));
    let r = !1;
    o: for (let i of e.set) {
        for (let e of t.set) {
            let t = c(i, e, n);
            if (((r = r || null !== t), t)) continue o;
        }
        if (r) return !1;
    }
    return !0;
};
