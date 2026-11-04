t.d(
    n,
    {},
    {
        g: function (e, n, t) {
            return e ? (n.timestampSec >= n.duration ? 0 : n.timestampSec) : Math.max(n.timestampSec, t);
        },
    },
);
