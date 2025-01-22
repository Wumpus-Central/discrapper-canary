let i = r(40231),
    a = r(721919),
    { ANY: o } = a,
    s = r(889658),
    l = r(839525),
    u = r(393808),
    c = r(690217),
    d = r(689478),
    f = r(725616),
    p = (e, n, r, p) => {
        let h, _, m, g, E;
        switch (((e = new i(e, p)), (n = new s(n, p)), r)) {
            case '>':
                (h = u), (_ = d), (m = c), (g = '>'), (E = '>=');
                break;
            case '<':
                (h = c), (_ = f), (m = u), (g = '<'), (E = '<=');
                break;
            default:
                throw TypeError('Must provide a hilo val of "<" or ">"');
        }
        if (l(e, n, p)) return !1;
        for (let r = 0; r < n.set.length; ++r) {
            let i = n.set[r],
                s = null,
                l = null;
            if (
                (i.forEach((e) => {
                    e.semver === o && (e = new a('>=0.0.0')), (s = s || e), (l = l || e), h(e.semver, s.semver, p) ? (s = e) : m(e.semver, l.semver, p) && (l = e);
                }),
                s.operator === g || s.operator === E)
            )
                return !1;
            if ((!l.operator || l.operator === g) && _(e, l.semver)) return !1;
            if (l.operator === E && m(e, l.semver)) return !1;
        }
        return !0;
    };
e.exports = p;
