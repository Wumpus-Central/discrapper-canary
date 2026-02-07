r.d(t, { A: () => d });
var a = r(989349),
    e = r.n(a),
    o = r(954571),
    n = r(652215);
function d(c, t) {
    o.default.track(n.HAw.AGE_GATE_SUBMITTED, {
        dob: 18 > e()().diff(c, "years") ? c.format("YYYY-MM-DD") : null,
        dob_day: c.date(),
        dob_month: c.month() + 1,
        dob_year: c.year(),
        source: { section: t },
    });
}
