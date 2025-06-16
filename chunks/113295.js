let r = n(40231),
    i = n(721919),
    { ANY: a } = i,
    o = n(889658),
    s = n(839525),
    l = n(393808),
    c = n(690217),
    u = n(689478),
    d = n(725616);
e.exports = (e, t, n, f) => {
    let _, p, h, m, g;
    switch (((e = new r(e, f)), (t = new o(t, f)), n)) {
        case '>':
            (_ = l), (p = u), (h = c), (m = '>'), (g = '>=');
            break;
        case '<':
            (_ = c), (p = d), (h = l), (m = '<'), (g = '<=');
            break;
        default:
            throw TypeError('Must provide a hilo val of "<" or ">"');
    }
    if (s(e, t, f)) return !1;
    for (let n = 0; n < t.set.length; ++n) {
        let r = t.set[n],
            o = null,
            s = null;
        if (
            (r.forEach((e) => {
                e.semver === a && (e = new i('>=0.0.0')), (o = o || e), (s = s || e), _(e.semver, o.semver, f) ? (o = e) : h(e.semver, s.semver, f) && (s = e);
            }),
            o.operator === m || o.operator === g || ((!s.operator || s.operator === m) && p(e, s.semver)) || (s.operator === g && h(e, s.semver)))
        )
            return !1;
    }
    return !0;
};
