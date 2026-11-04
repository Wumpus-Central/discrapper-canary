var r = c(454908),
    a = c(532406);
c.d(
    e,
    {},
    {
        A: function (t, e) {
            let { data: c } = (0, r.I)(t);
            if (null != c) return ("cover" === e ? c.getCoverURL() : c.getIconURL(128)) ?? a;
        },
    },
);
