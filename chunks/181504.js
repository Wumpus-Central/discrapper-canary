n.d(t, { b: () => r });
var i = n(989349),
    l = n.n(i),
    a = n(985018);
let r = [
    { getDueAt: () => l()().add(30, "minutes").toDate(), getLabel: () => a.intl.string(a.t["OV8l/H"]) },
    { getDueAt: () => l()().add(1, "hour").toDate(), getLabel: () => a.intl.string(a.t["zf0R+0"]) },
    { getDueAt: () => l()().add(4, "hour").toDate(), getLabel: () => a.intl.string(a.t["5gztZN"]) },
    {
        getDueAt: () => {
            let e = l()().startOf("day").add(9, "hours");
            return l()().hour() >= 9 ? e.add(1, "day").toDate() : e.toDate();
        },
        getLabel: () => (l()().hour() >= 9 ? a.intl.string(a.t["7MKr2P"]) : a.intl.string(a.t.FnFI3m)),
    },
    {
        getDueAt: () => {
            let e,
                t = l()().day();
            return (
                (e = 0 === t || (1 === t && l()().startOf("day").add(9, "hours").isAfter(l()())) ? 1 : 8),
                l()().day(e).startOf("day").add(9, "hours").toDate()
            );
        },
        getLabel: () => a.intl.string(a.t["q+Ls05"]),
    },
];
