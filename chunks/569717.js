d.d(a, { A: () => s });
var e = d(536637),
    n = d.n(e),
    t = d(831167),
    c = d(174459),
    r = d(652215);
function s(o, a) {
    c.default.track(r.HAw.AGE_GATE_SUBMITTED, {
        dob: 18 > n()().diff(o, "years") ? (0, t.A)(o) : null,
        dob_day: o.date(),
        dob_month: o.month() + 1,
        dob_year: o.year(),
        source: { section: a },
    });
}
