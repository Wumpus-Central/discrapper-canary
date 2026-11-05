t.r(a);
var h = t(477900);
t(582128);
var i = t(646514),
    e = t(996682),
    c = t(27989);
t.d(
    a,
    {},
    {
        WindowTopIcon: function (s) {
            let {
                    size: a = "md",
                    width: t,
                    height: n,
                    color: o = i.A.colors.INTERACTIVE_ICON_DEFAULT,
                    colorClass: p = "",
                    ...r
                } = s,
                d = (0, c.J)(a),
                l = d?.width ?? t,
                w = d?.height ?? n;
            return (0, h.jsxs)("svg", {
                ...(0, e.A)(r),
                xmlns: "http://www.w3.org/2000/svg",
                width: l,
                height: w,
                fill: "none",
                viewBox: "0 0 24 24",
                children: [
                    (0, h.jsx)("path", {
                        fill: "string" == typeof o ? o : o.css,
                        d: "M4 5a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1 1 1 0 1 0 2 0 3 3 0 0 0-3-3H5a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3 1 1 0 1 0 0-2 1 1 0 0 1-1-1V5Z",
                        className: p,
                    }),
                    (0, h.jsx)("path", {
                        fill: "string" == typeof o ? o : o.css,
                        d: "M11 8a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h8a3 3 0 0 0 3-3v-8a3 3 0 0 0-3-3h-8Z",
                        className: p,
                    }),
                ],
            });
        },
    },
);
