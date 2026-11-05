i.r(t);
var a = i(477900);
i(582128);
var h = i(646514),
    c = i(996682),
    e = i(27989);
i.d(
    t,
    {},
    {
        UndoIcon: function (s) {
            let {
                    size: t = "md",
                    width: i,
                    height: n,
                    color: r = h.A.colors.INTERACTIVE_ICON_DEFAULT,
                    colorClass: d = "",
                    ...o
                } = s,
                p = (0, e.J)(t),
                l = p?.width ?? i,
                w = p?.height ?? n;
            return (0, a.jsx)("svg", {
                ...(0, c.A)(o),
                xmlns: "http://www.w3.org/2000/svg",
                width: l,
                height: w,
                fill: "none",
                viewBox: "0 0 24 24",
                children: (0, a.jsx)("path", {
                    fill: "string" == typeof r ? r : r.css,
                    d: "M2 8a1 1 0 0 1 2 0v3.54A10.26 10.26 0 0 1 12.38 7c4.23 0 7.83 2.74 9.53 6.6a1 1 0 1 1-1.82.8c-1.45-3.25-4.4-5.4-7.71-5.4a8.34 8.34 0 0 0-6.96 4H9a1 1 0 1 1 0 2H3a1 1 0 0 1-1-1V8Z",
                    className: d,
                }),
            });
        },
    },
);
