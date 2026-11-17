var n = l(620632);
l.d(
    t,
    {},
    {
        D: async function (e, t, l) {
            return (await n.Bo.post({ url: e, body: t, reason: l, rejectWithError: (0, n.fT)() })).body;
        },
    },
);
