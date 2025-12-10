n.d(t, { B: () => o });
var r = n(913527),
    i = n.n(r),
    l = n(388032);
let o = [
    {
        getDueAt: () => i()().add(30, "minutes").toDate(),
        getLabel: () => l.intl.string(l.t["OV8l/H"]),
    },
    {
        getDueAt: () => i()().add(1, "hour").toDate(),
        getLabel: () => l.intl.string(l.t["zf0R+0"]),
    },
    {
        getDueAt: () => i()().add(4, "hour").toDate(),
        getLabel: () => l.intl.string(l.t["5gztZN"]),
    },
    {
        getDueAt: () => {
            let e = i()().startOf("day").add(9, "hours");
            return i()().hour() >= 9 ? e.add(1, "day").toDate() : e.toDate();
        },
        getLabel: () => (i()().hour() >= 9 ? l.intl.string(l.t["7MKr2P"]) : l.intl.string(l.t.FnFI3m)),
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
        getLabel: () => l.intl.string(l.t["q+Ls05"]),
    },
];
