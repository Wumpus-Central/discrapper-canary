i.d(
    n,
    {},
    {
        U: function (t) {
            let { partySize: n, maxPartySize: i } = t;
            return n > -1 && i > 0 && n >= i;
        },
    },
);
