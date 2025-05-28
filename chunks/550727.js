n.d(t, { B: () => a });
var i = n(913527),
    r = n.n(i),
    l = n(388032);
let a = [
    {
        getDueAt: () => r()().add(30, 'minutes').toDate(),
        getLabel: () => l.intl.string(l.t['OV8l/P'])
    },
    {
        getDueAt: () => r()().add(1, 'hour').toDate(),
        getLabel: () => l.intl.string(l.t['zf0R+/'])
    },
    {
        getDueAt: () => r()().add(4, 'hour').toDate(),
        getLabel: () => l.intl.string(l.t['5gztZG'])
    },
    {
        getDueAt: () => r()().add(1, 'day').startOf('day').add(9, 'hours').toDate(),
        getLabel: () => l.intl.string(l.t['7MKr2N'])
    },
    {
        getDueAt: () => r()().day(8).startOf('day').add(9, 'hours').toDate(),
        getLabel: () => l.intl.string(l.t['q+Ls09'])
    }
];
