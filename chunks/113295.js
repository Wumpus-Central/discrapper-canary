let i = r(40231),
    a = r(721919),
    { ANY: s } = a,
    o = r(889658),
    l = r(839525),
    u = r(393808),
    c = r(690217),
    d = r(689478),
    f = r(725616),
    _ = (e, n, r, _) => {
        let h, p, m, g, E;
        switch (((e = new i(e, _)), (n = new o(n, _)), r)) {
            case '>':
                (h = u), (p = d), (m = c), (g = '>'), (E = '>=');
                break;
            case '<':
                (h = c), (p = f), (m = u), (g = '<'), (E = '<=');
                break;
            default:
                throw TypeError('Must provide a hilo val of "<" or ">"');
        }
        if (l(e, n, _)) return !1;
        for (let r = 0; r < n.set.length; ++r) {
            let i = n.set[r],
                o = null,
                l = null;
            if (
                (i.forEach((e) => {
                    e.semver === s && (e = new a('>=0.0.0')), (o = o || e), (l = l || e), h(e.semver, o.semver, _) ? (o = e) : m(e.semver, l.semver, _) && (l = e);
                }),
                o.operator === g || o.operator === E)
            )
                return !1;
            if ((!l.operator || l.operator === g) && p(e, l.semver)) return !1;
            if (l.operator === E && m(e, l.semver)) return !1;
        }
        return !0;
    };
e.exports = _;
