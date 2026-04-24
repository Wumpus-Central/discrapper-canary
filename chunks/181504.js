n.d(t, { b: () => l });
var a = n(989349),
    i = n.n(a),
    s = n(985018);
let l = [
    { getDueAt: () => i()().add(30, "minutes").toDate(), getLabel: () => s.intl.string(s.t["OV8l/H"]) },
    { getDueAt: () => i()().add(1, "hour").toDate(), getLabel: () => s.intl.string(s.t["zf0R+0"]) },
    { getDueAt: () => i()().add(4, "hour").toDate(), getLabel: () => s.intl.string(s.t["5gztZN"]) },
    {
        getDueAt: () => {
            let e = i()().startOf("day").add(9, "hours");
            return i()().hour() >= 9 ? e.add(1, "day").toDate() : e.toDate();
        },
        getLabel: () => (i()().hour() >= 9 ? s.intl.string(s.t["7MKr2P"]) : s.intl.string(s.t.FnFI3m)),
    },
    {
        getDueAt: () => {
            let e,
                t = i()().day();
            return (
                (e = 0 === t || (1 === t && i()().startOf("day").add(9, "hours").isAfter(i()())) ? 1 : 8),
                i()().day(e).startOf("day").add(9, "hours").toDate()
            );
        },
        getLabel: () => s.intl.string(s.t["q+Ls05"]),
    },
];
