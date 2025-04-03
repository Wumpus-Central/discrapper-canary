r.d(t, { B: () => o });
var n = r(913527),
    a = r.n(n),
    c = r(388032);
let o = [
    {
        getDueAt: () => a()().add(30, 'minutes').toDate(),
        getLabel: () => c.NW.string(c.t['OV8l/P'])
    },
    {
        getDueAt: () => a()().add(1, 'hour').toDate(),
        getLabel: () => c.NW.string(c.t['zf0R+/'])
    },
    {
        getDueAt: () => a()().add(4, 'hour').toDate(),
        getLabel: () => c.NW.string(c.t['5gztZG'])
    },
    {
        getDueAt: () => a()().add(1, 'day').startOf('day').add(9, 'hours').toDate(),
        getLabel: () => c.NW.string(c.t['7MKr2N'])
    },
    {
        getDueAt: () => a()().day(8).startOf('day').add(9, 'hours').toDate(),
        getLabel: () => c.NW.string(c.t['q+Ls09'])
    }
];
