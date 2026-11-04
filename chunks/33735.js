n.d(
    t,
    {},
    {
        U: class extends Error {
            constructor(e, t = "warn") {
                (super(e), (this.message = e), (this.logLevel = t));
            }
        },
    },
);
