t.r(n);
var l = t(477900);
t(582128);
var i = t(646514),
    a = t(996682),
    r = t(27989);
t.d(
    n,
    {},
    {
        CirclePlusIcon: function (e) {
            let {
                    size: n = "md",
                    width: t,
                    height: s,
                    secondaryColor: o = "transparent",
                    secondaryColorClass: u = "",
                    color: c = i.A.colors.INTERACTIVE_ICON_DEFAULT,
                    colorClass: d = "",
                    ...f
                } = e,
                A = (0, r.J)(n),
                S = A?.width ?? t,
                h = A?.height ?? s;
            return (0, l.jsxs)("svg", {
                ...(0, a.A)(f),
                xmlns: "http://www.w3.org/2000/svg",
                width: S,
                height: h,
                fill: "none",
                viewBox: "0 0 24 24",
                children: [
                    (0, l.jsx)("circle", {
                        cx: "12",
                        cy: "12",
                        r: "10",
                        fill: "string" == typeof o ? o : o.css,
                        className: u,
                    }),
                    (0, l.jsx)("path", {
                        fill: "string" == typeof c ? c : c.css,
                        fillRule: "evenodd",
                        d: "M12 23a11 11 0 1 0 0-22 11 11 0 0 0 0 22Zm0-17a1 1 0 0 1 1 1v4h4a1 1 0 1 1 0 2h-4v4a1 1 0 1 1-2 0v-4H7a1 1 0 1 1 0-2h4V7a1 1 0 0 1 1-1Z",
                        clipRule: "evenodd",
                        className: d,
                    }),
                ],
            });
        },
    },
);
