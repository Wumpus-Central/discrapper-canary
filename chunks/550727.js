n.d(t, { B: () => o });
var r = n(913527),
    i = n.n(r),
    a = n(388032);
let o = [
    {
        getDueAt: () => i()().add(30, 'minutes').toDate(),
        getLabel: () => a.intl.string(a.t['OV8l/P'])
    },
    {
        getDueAt: () => i()().add(1, 'hour').toDate(),
        getLabel: () => a.intl.string(a.t['zf0R+/'])
    },
    {
        getDueAt: () => i()().add(4, 'hour').toDate(),
        getLabel: () => a.intl.string(a.t['5gztZG'])
    },
    {
        getDueAt: () => i()().add(1, 'day').startOf('day').add(9, 'hours').toDate(),
        getLabel: () => a.intl.string(a.t['7MKr2N'])
    },
    {
        getDueAt: () => {
            let e,
                t = i()().day();
            return ((e = 0 === t || (1 === t && i()().startOf('day').add(9, 'hours').isAfter(i()())) ? 1 : 8), i()().day(e).startOf('day').add(9, 'hours').toDate());
        },
        getLabel: () => a.intl.string(a.t['q+Ls09'])
    }
];
