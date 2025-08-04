n.d(t, { B: () => a });
var r = n(913527),
    i = n.n(r),
    l = n(388032);
let a = [
    {
        getDueAt: () => i()().add(30, 'minutes').toDate(),
        getLabel: () => l.intl.string(l.t['OV8l/P'])
    },
    {
        getDueAt: () => i()().add(1, 'hour').toDate(),
        getLabel: () => l.intl.string(l.t['zf0R+/'])
    },
    {
        getDueAt: () => i()().add(4, 'hour').toDate(),
        getLabel: () => l.intl.string(l.t['5gztZG'])
    },
    {
        getDueAt: () => i()().add(1, 'day').startOf('day').add(9, 'hours').toDate(),
        getLabel: () => l.intl.string(l.t['7MKr2N'])
    },
    {
        getDueAt: () => {
            let e,
                t = i()().day();
            return ((e = 0 === t || (1 === t && i()().startOf('day').add(9, 'hours').isAfter(i()())) ? 1 : 8), i()().day(e).startOf('day').add(9, 'hours').toDate());
        },
        getLabel: () => l.intl.string(l.t['q+Ls09'])
    }
];
