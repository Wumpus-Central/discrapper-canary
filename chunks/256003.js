h.r(s);
var i = h(477900);
h(582128);
var t = h(646514),
    c = h(996682),
    e = h(27989);
h.d(
    s,
    {},
    {
        MobilePhoneVideoIcon: function (a) {
            let {
                    size: s = "md",
                    width: h,
                    height: l,
                    color: o = t.A.colors.INTERACTIVE_ICON_DEFAULT,
                    colorClass: n = "",
                    ...r
                } = a,
                d = (0, e.J)(s),
                p = d?.width ?? h,
                v = d?.height ?? l;
            return (0, i.jsxs)("svg", {
                ...(0, c.A)(r),
                xmlns: "http://www.w3.org/2000/svg",
                width: p,
                height: v,
                fill: "none",
                viewBox: "0 0 24 24",
                children: [
                    (0, i.jsx)("path", {
                        fill: "string" == typeof o ? o : o.css,
                        d: "M8 1a3 3 0 0 0-3 3v16a3 3 0 0 0 3 3h3.67c.38 0 .63-.42.52-.8A4 4 0 0 1 12 21v-3.5a.5.5 0 0 0-.5-.5H8a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1v8.5c0 .28.22.5.5.5h1a.5.5 0 0 0 .5-.5V4a3 3 0 0 0-3-3H8Z",
                        className: n,
                    }),
                    (0, i.jsx)("path", {
                        fill: "string" == typeof o ? o : o.css,
                        d: "M14 17c0-1.1.9-2 2-2h3a2 2 0 0 1 2 2v.36c0-.21.14-.4.34-.47l2-.67a.5.5 0 0 1 .66.47v4.62a.5.5 0 0 1-.66.47l-2-.67a.5.5 0 0 1-.34-.47V21a2 2 0 0 1-2 2h-3a2 2 0 0 1-2-2v-4Z",
                        className: n,
                    }),
                ],
            });
        },
    },
);
