a.d(e, { b: () => i });
var r = a(989349),
    d = a.n(r),
    s = a(985018);
let i = [
    { getDueAt: () => d()().add(30, "minutes").toDate(), getLabel: () => s.intl.string(s.t["OV8l/H"]) },
    { getDueAt: () => d()().add(1, "hour").toDate(), getLabel: () => s.intl.string(s.t["zf0R+0"]) },
    { getDueAt: () => d()().add(4, "hour").toDate(), getLabel: () => s.intl.string(s.t["5gztZN"]) },
    {
        getDueAt: () => {
            let t = d()().startOf("day").add(9, "hours");
            return d()().hour() >= 9 ? t.add(1, "day").toDate() : t.toDate();
        },
        getLabel: () => (d()().hour() >= 9 ? s.intl.string(s.t["7MKr2P"]) : s.intl.string(s.t.FnFI3m)),
    },
    {
        getDueAt: () => {
            let t,
                e = d()().day();
            return (
                (t = 0 === e || (1 === e && d()().startOf("day").add(9, "hours").isAfter(d()())) ? 1 : 8),
                d()().day(t).startOf("day").add(9, "hours").toDate()
            );
        },
        getLabel: () => s.intl.string(s.t["q+Ls05"]),
    },
];
