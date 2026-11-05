i.r(s);
var t = i(477900);
i(582128);
var d = i(646514),
    h = i(996682),
    l = i(27989);
i.d(
    s,
    {},
    {
        DenyIcon: function (e) {
            let {
                    size: s = "md",
                    width: i,
                    height: n,
                    color: c = d.A.colors.INTERACTIVE_ICON_DEFAULT,
                    colorClass: o = "",
                    ...r
                } = e,
                a = (0, l.J)(s),
                p = a?.width ?? i,
                w = a?.height ?? n;
            return (0, t.jsx)("svg", {
                ...(0, h.A)(r),
                xmlns: "http://www.w3.org/2000/svg",
                width: p,
                height: w,
                fill: "none",
                viewBox: "0 0 24 24",
                children: (0, t.jsx)("path", {
                    fill: "string" == typeof c ? c : c.css,
                    fillRule: "evenodd",
                    d: "M23 12a11 11 0 1 1-22 0 11 11 0 0 1 22 0Zm-2 0a9 9 0 0 1-14.62 7.03L19.03 6.38A8.96 8.96 0 0 1 21 12ZM4.97 17.62 17.62 4.97A9 9 0 0 0 4.97 17.62Z",
                    clipRule: "evenodd",
                    className: o,
                }),
            });
        },
    },
);
