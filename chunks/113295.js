let i = n(40231),
    r = n(721919),
    { ANY: a } = r,
    s = n(889658),
    o = n(839525),
    l = n(393808),
    u = n(690217),
    c = n(689478),
    d = n(725616),
    f = (e, t, n, f) => {
        let _, p, h, m, g;
        switch (((e = new i(e, f)), (t = new s(t, f)), n)) {
            case '>':
                (_ = l), (p = c), (h = u), (m = '>'), (g = '>=');
                break;
            case '<':
                (_ = u), (p = d), (h = l), (m = '<'), (g = '<=');
                break;
            default:
                throw TypeError('Must provide a hilo val of "<" or ">"');
        }
        if (o(e, t, f)) return !1;
        for (let n = 0; n < t.set.length; ++n) {
            let i = t.set[n],
                s = null,
                o = null;
            if (
                (i.forEach((e) => {
                    e.semver === a && (e = new r('>=0.0.0')), (s = s || e), (o = o || e), _(e.semver, s.semver, f) ? (s = e) : h(e.semver, o.semver, f) && (o = e);
                }),
                s.operator === m || s.operator === g || ((!o.operator || o.operator === m) && p(e, o.semver)) || (o.operator === g && h(e, o.semver)))
            )
                return !1;
        }
        return !0;
    };
e.exports = f;
