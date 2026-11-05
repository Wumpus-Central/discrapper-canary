n.r(t);
var i = n(477900);
n(582128);
var r = n(646514),
    l = n(996682),
    s = n(27989);
n.d(
    t,
    {},
    {
        MinimizeIcon: function (e) {
            let {
                    size: t = "md",
                    width: n,
                    height: a,
                    color: o = r.A.colors.INTERACTIVE_ICON_DEFAULT,
                    colorClass: u = "",
                    ...d
                } = e,
                c = (0, s.J)(t),
                h = c?.width ?? n,
                f = c?.height ?? a;
            return (0, i.jsx)("svg", {
                ...(0, l.A)(d),
                xmlns: "http://www.w3.org/2000/svg",
                width: h,
                height: f,
                fill: "none",
                viewBox: "0 0 24 24",
                children: (0, i.jsx)("path", {
                    fill: "string" == typeof o ? o : o.css,
                    d: "M15 4v3.59l5.3-5.3a1 1 0 1 1 1.4 1.42L16.42 9H20a1 1 0 1 1 0 2h-6a1 1 0 0 1-1-1V4a1 1 0 1 1 2 0ZM9 16.41l-5.3 5.3a1 1 0 0 1-1.4-1.42L7.58 15H4a1 1 0 1 1 0-2h6a1 1 0 0 1 1 1v6a1 1 0 1 1-2 0v-3.59Z",
                    className: u,
                }),
            });
        },
    },
);
