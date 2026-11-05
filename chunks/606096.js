s.r(t);
var n = s(477900);
s(582128);
var a = s(646514),
    i = s(996682),
    c = s(27989);
s.d(
    t,
    {},
    {
        BookmarkIcon: function (e) {
            let {
                    size: t = "md",
                    width: s,
                    height: r,
                    color: h = a.A.colors.INTERACTIVE_ICON_DEFAULT,
                    colorClass: p = "",
                    ...S
                } = e,
                l = (0, c.J)(t),
                u = l?.width ?? s,
                o = l?.height ?? r;
            return (0, n.jsx)("svg", {
                ...(0, i.A)(S),
                xmlns: "http://www.w3.org/2000/svg",
                width: u,
                height: o,
                fill: "none",
                viewBox: "0 0 24 24",
                children: (0, n.jsx)("path", {
                    fill: "string" == typeof h ? h : h.css,
                    d: "M4 5a3 3 0 0 1 3-3h10a3 3 0 0 1 3 3v16a1 1 0 0 1-1.67.74l-5.66-5.13a1 1 0 0 0-1.34 0l-5.66 5.13A1 1 0 0 1 4 20.99V5Z",
                    className: p,
                }),
            });
        },
    },
);
