i.r(e);
var s = i(477900);
i(582128);
var h = i(646514),
    l = i(996682),
    t = i(27989);
i.d(
    e,
    {},
    {
        EmojiFaceWithRaisedEyebrowIcon: function (a) {
            let {
                    size: e = "md",
                    width: i,
                    height: d,
                    color: o = h.A.colors.INTERACTIVE_ICON_DEFAULT,
                    colorClass: c = "",
                    ...n
                } = a,
                r = (0, t.J)(e),
                p = r?.width ?? i,
                w = r?.height ?? d;
            return (0, s.jsx)("svg", {
                ...(0, l.A)(n),
                xmlns: "http://www.w3.org/2000/svg",
                width: p,
                height: w,
                fill: "none",
                viewBox: "0 0 24 24",
                children: (0, s.jsx)("path", {
                    fill: "string" == typeof o ? o : o.css,
                    fillRule: "evenodd",
                    d: "M12 23a11 11 0 1 0 0-22 11 11 0 0 0 0 22Zm-5.5-9a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3ZM19 12.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0ZM8 16a1 1 0 1 0 0 2h8a1 1 0 1 0 0-2H8Zm7-10a1 1 0 0 1 1-1h.76a4 4 0 0 1 2.83 1.17L20.7 7.3a1 1 0 0 1-1.42 1.42l-1.12-1.12A2 2 0 0 0 16.76 7H16a1 1 0 0 1-1-1ZM7 8a1 1 0 0 1 0 2h-.76a2 2 0 0 0-1.41.59l-.12.12a1 1 0 0 1-1.42-1.42l.12-.12A4 4 0 0 1 6.24 8H7Z",
                    clipRule: "evenodd",
                    className: c,
                }),
            });
        },
    },
);
