var r = i(477900),
    a = i(582128),
    c = i(534573),
    e = i(598414);
i.d(
    t,
    {},
    {
        A: function (s) {
            let { iconUrl: t, size: i, className: u } = s,
                [h, n] = a.useState(null),
                d = null != t && t !== h;
            return (0, r.jsx)("img", {
                src: d ? (0, c.Ec)(t, { size: i }) : e,
                onError: d ? () => n(t) : void 0,
                width: i,
                height: i,
                alt: "",
                className: u,
            });
        },
    },
);
