i.d(
    n,
    {},
    {
        w: function (t, n) {
            return n?.party?.id != null && t?.party?.id != null && t.party.id === n.party.id;
        },
    },
);
