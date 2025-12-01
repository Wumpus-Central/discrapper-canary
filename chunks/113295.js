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
    let p, _, m, h, g;
    switch (((e = new r(e, f)), (t = new o(t, f)), n)) {
        case ">":
            (p = l), (_ = u), (m = c), (h = ">"), (g = ">=");
            break;
        case "<":
            (p = c), (_ = d), (m = l), (h = "<"), (g = "<=");
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
                e.semver === a && (e = new i(">=0.0.0")),
                    (o = o || e),
                    (s = s || e),
                    p(e.semver, o.semver, f) ? (o = e) : m(e.semver, s.semver, f) && (s = e);
            }),
            o.operator === h ||
                o.operator === g ||
                ((!s.operator || s.operator === h) && _(e, s.semver)) ||
                (s.operator === g && m(e, s.semver)))
        )
            return !1;
    }
    return !0;
};
