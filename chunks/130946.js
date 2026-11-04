n.d(
    t,
    {},
    {
        A: function (e) {
            return /^http/.test(e) ? e : `${location.protocol}//${location.host}${"/" === e.charAt(0) ? "" : "/"}${e}`;
        },
    },
);
