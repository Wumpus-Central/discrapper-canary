t.r(a);
var i = t(477900);
t(582128);
var e = t(646514),
    h = t(996682),
    l = t(27989);
t.d(
    a,
    {},
    {
        ImageBrokenIcon: function (s) {
            let {
                    size: a = "md",
                    width: t,
                    height: r,
                    color: c = e.A.colors.INTERACTIVE_ICON_DEFAULT,
                    colorClass: n = "",
                    ...o
                } = s,
                p = (0, l.J)(a),
                d = p?.width ?? t,
                w = p?.height ?? r;
            return (0, i.jsxs)("svg", {
                ...(0, h.A)(o),
                xmlns: "http://www.w3.org/2000/svg",
                width: d,
                height: w,
                fill: "none",
                viewBox: "0 0 24 24",
                children: [
                    (0, i.jsx)("path", {
                        fill: "string" == typeof c ? c : c.css,
                        d: "M5 2a3 3 0 0 0-3 3v4.7l3.33 3.33 3.39-3.38a1.5 1.5 0 0 1 2.12 0l3.38 3.38 3.39-3.38a1.5 1.5 0 0 1 2.12 0L22 11.92V5a3 3 0 0 0-3-3H5Z",
                        className: n,
                    }),
                    (0, i.jsx)("path", {
                        fill: "string" == typeof c ? c : c.css,
                        d: "m22 14.75-3.33-3.34-3.39 3.39a1.5 1.5 0 0 1-2.12 0L9.78 11.4 6.39 14.8a1.5 1.5 0 0 1-2.12 0L2 12.53V19a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3v-4.25Z",
                        className: n,
                    }),
                ],
            });
        },
    },
);
