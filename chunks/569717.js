o.d(d, { A: () => c });
var t = o(989349),
    e = o.n(t),
    r = o(954571),
    s = o(652215);
function c(a, d) {
    r.default.track(s.HAw.AGE_GATE_SUBMITTED, {
        dob: 18 > e()().diff(a, "years") ? a.format("YYYY-MM-DD") : null,
        dob_day: a.date(),
        dob_month: a.month() + 1,
        dob_year: a.year(),
        source: { section: d },
    });
}
