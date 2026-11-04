var n = "u" > typeof Float32Array ? Float32Array : Array,
    u = Math.PI / 180;
a.d(
    r,
    { tb: () => n },
    {
        DF: function (t) {
            return t * u;
        },
        p8: 1e-6,
    },
);
