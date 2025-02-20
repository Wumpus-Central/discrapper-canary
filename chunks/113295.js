let r = n(40231),
    i = n(721919),
    { ANY: o } = i,
    a = n(889658),
    s = n(839525),
    l = n(393808),
    c = n(690217),
    u = n(689478),
    d = n(725616),
    f = (e, t, n, f) => {
        let p, _, h, m, g;
        switch (((e = new r(e, f)), (t = new a(t, f)), n)) {
            case '>':
                (p = l), (_ = u), (h = c), (m = '>'), (g = '>=');
                break;
            case '<':
                (p = c), (_ = d), (h = l), (m = '<'), (g = '<=');
                break;
            default:
                throw TypeError('Must provide a hilo val of "<" or ">"');
        }
        if (s(e, t, f)) return !1;
        for (let n = 0; n < t.set.length; ++n) {
            let r = t.set[n],
                a = null,
                s = null;
            if (
                (r.forEach((e) => {
                    e.semver === o && (e = new i('>=0.0.0')), (a = a || e), (s = s || e), p(e.semver, a.semver, f) ? (a = e) : h(e.semver, s.semver, f) && (s = e);
                }),
                a.operator === m || a.operator === g || ((!s.operator || s.operator === m) && _(e, s.semver)) || (s.operator === g && h(e, s.semver)))
            )
                return !1;
        }
        return !0;
    };
e.exports = f;
