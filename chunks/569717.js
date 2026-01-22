n.d(t, {
    A: () => a,
});
var r = n(989349),
    i = n.n(r),
    s = n(954571),
    l = n(652215);

function a(e, t) {
    s.default.track(l.HAw.AGE_GATE_SUBMITTED, {
        dob: 18 > i()().diff(e, "years") ? e.format("YYYY-MM-DD") : null,
        dob_day: e.date(),
        dob_month: e.month() + 1,
        dob_year: e.year(),
        source: {
            section: t,
        },
    });
}
