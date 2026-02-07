"use strict";
n.d(t, { A: () => a });
var i = n(989349),
    s = n.n(i),
    r = n(954571),
    l = n(652215);
function a(e, t) {
    r.default.track(l.HAw.AGE_GATE_SUBMITTED, {
        dob: 18 > s()().diff(e, "years") ? e.format("YYYY-MM-DD") : null,
        dob_day: e.date(),
        dob_month: e.month() + 1,
        dob_year: e.year(),
        source: { section: t },
    });
}
