var s = t(477900);
t(582128);
var i = t(646514),
    l = t(996682),
    a = t(27989);
t.d(
    n,
    {},
    {
        L: function (e) {
            let {
                    size: n = "md",
                    width: t,
                    height: r,
                    color: o = i.A.colors.INTERACTIVE_ICON_DEFAULT,
                    colorClass: d = "",
                    ...c
                } = e,
                u = (0, a.J)(n),
                m = u?.width ?? t,
                h = u?.height ?? r;
            return (0, s.jsx)("svg", {
                ...(0, l.A)(c),
                xmlns: "http://www.w3.org/2000/svg",
                width: m,
                height: h,
                fill: "none",
                viewBox: "0 0 24 24",
                children: (0, s.jsx)("path", {
                    fill: "string" == typeof o ? o : o.css,
                    d: "M7 2a1 1 0 0 0-1 1v18a1 1 0 1 0 2 0V3a1 1 0 0 0-1-1ZM11 6a1 1 0 1 1 2 0v12a1 1 0 1 1-2 0V6ZM1 8a1 1 0 0 1 2 0v8a1 1 0 1 1-2 0V8ZM16 5a1 1 0 1 1 2 0v14a1 1 0 1 1-2 0V5ZM22 8a1 1 0 0 0-1 1v6a1 1 0 1 0 2 0V9a1 1 0 0 0-1-1Z",
                    className: d,
                }),
            });
        },
    },
);
