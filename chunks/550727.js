a.d(t, { B: () => d });
var n = a(913527),
    r = a.n(n),
    i = a(388032);
let d = [
    {
        getDueAt: () => r()().add(30, 'minutes').toDate(),
        getLabel: () => i.intl.string(i.t['OV8l/P'])
    },
    {
        getDueAt: () => r()().add(1, 'hour').toDate(),
        getLabel: () => i.intl.string(i.t['zf0R+/'])
    },
    {
        getDueAt: () => r()().add(4, 'hour').toDate(),
        getLabel: () => i.intl.string(i.t['5gztZG'])
    },
    {
        getDueAt: () => r()().add(1, 'day').startOf('day').add(9, 'hours').toDate(),
        getLabel: () => i.intl.string(i.t['7MKr2N'])
    },
    {
        getDueAt: () => r()().day(8).startOf('day').add(9, 'hours').toDate(),
        getLabel: () => i.intl.string(i.t['q+Ls09'])
    }
];
