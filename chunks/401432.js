var i = n(477900);
n(582128);
var s = n(646514),
    a = n(996682),
    l = n(27989);
n.d(
    t,
    {},
    {
        a: function (e) {
            let {
                    size: t = "md",
                    width: n,
                    height: r,
                    color: o = s.A.colors.INTERACTIVE_ICON_DEFAULT,
                    colorClass: u = "",
                    ...c
                } = e,
                d = (0, l.J)(t),
                E = d?.width ?? n,
                _ = d?.height ?? r;
            return (0, i.jsx)("svg", {
                ...(0, a.A)(c),
                xmlns: "http://www.w3.org/2000/svg",
                width: E,
                height: _,
                fill: "none",
                viewBox: "0 0 24 24",
                children: (0, i.jsx)("path", {
                    fill: "string" == typeof o ? o : o.css,
                    d: "M16.94 19.06a1.5 1.5 0 1 0 2.12-2.12L14.12 12l4.94-4.94a1.5 1.5 0 1 0-2.12-2.12L12 9.88 7.06 4.94a1.5 1.5 0 1 0-2.12 2.12L9.88 12l-4.94 4.94a1.5 1.5 0 1 0 2.12 2.12L12 14.12l4.94 4.94Z",
                    className: u,
                }),
            });
        },
    },
);
