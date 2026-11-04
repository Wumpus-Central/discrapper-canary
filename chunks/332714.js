n.d(
    t,
    {},
    {
        K: function (e) {
            return e?.split(":")[0];
        },
        M: function (e) {
            return "localhost" === e || "127.0.0.1" === e;
        },
    },
);
