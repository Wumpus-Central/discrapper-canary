n.d(t, { b: () => o });
var r = n(989349),
    l = n.n(r),
    i = n(985018);
let o = [
    {
        getDueAt: () => l()().add(30, "minutes").toDate(),
        getLabel: () => i.intl.string(i.t["OV8l/H"]),
    },
    {
        getDueAt: () => l()().add(1, "hour").toDate(),
        getLabel: () => i.intl.string(i.t["zf0R+0"]),
    },
    {
        getDueAt: () => l()().add(4, "hour").toDate(),
        getLabel: () => i.intl.string(i.t["5gztZN"]),
    },
    {
        getDueAt: () => {
            let e = l()().startOf("day").add(9, "hours");
            return l()().hour() >= 9 ? e.add(1, "day").toDate() : e.toDate();
        },
        getLabel: () => (l()().hour() >= 9 ? i.intl.string(i.t["7MKr2P"]) : i.intl.string(i.t.FnFI3m)),
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
        getLabel: () => i.intl.string(i.t["q+Ls05"]),
    },
];
