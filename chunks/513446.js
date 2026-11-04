var s = c(620632);
c.d(
    t,
    {},
    {
        a: function (e) {
            return !(e instanceof s.oh) || e.status < 400 || e.status >= 500 || 429 === e.status;
        },
    },
);
