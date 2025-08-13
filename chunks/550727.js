n.d(t, { B: () => a });
var r = n(913527),
    i = n.n(r),
    o = n(388032);
let a = [
    {
        getDueAt: () => i()().add(30, "minutes").toDate(),
        getLabel: () => o.intl.string(o.t["OV8l/P"]),
    },
    {
        getDueAt: () => i()().add(1, "hour").toDate(),
        getLabel: () => o.intl.string(o.t["zf0R+/"]),
    },
    {
        getDueAt: () => i()().add(4, "hour").toDate(),
        getLabel: () => o.intl.string(o.t["5gztZG"]),
    },
    {
        getDueAt: () => {
            let e = i()().startOf("day").add(9, "hours");
            return i()().hour() >= 9 ? e.add(1, "day").toDate() : e.toDate();
        },
        getLabel: () => (i()().hour() >= 9 ? o.intl.string(o.t["7MKr2N"]) : o.intl.string(o.t.FnFI3t)),
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
        getLabel: () => o.intl.string(o.t["q+Ls09"]),
    },
];
