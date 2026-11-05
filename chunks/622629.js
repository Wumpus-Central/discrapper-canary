h.r(e);
var s = h(477900);
h(582128);
var i = h(646514),
    l = h(996682),
    t = h(27989);
h.d(
    e,
    {},
    {
        BookCheckIcon: function (a) {
            let {
                    size: e = "md",
                    width: h,
                    height: d,
                    color: o = i.A.colors.INTERACTIVE_ICON_DEFAULT,
                    colorClass: c = "",
                    ...n
                } = a,
                r = (0, t.J)(e),
                p = r?.width ?? h,
                v = r?.height ?? d;
            return (0, s.jsx)("svg", {
                ...(0, l.A)(n),
                xmlns: "http://www.w3.org/2000/svg",
                width: p,
                height: v,
                fill: "none",
                viewBox: "0 0 24 24",
                children: (0, s.jsx)("path", {
                    fill: "string" == typeof o ? o : o.css,
                    fillRule: "evenodd",
                    d: "M15 2a3 3 0 0 1 3 3v12H5.5a1.5 1.5 0 0 0 0 3h14a.5.5 0 0 0 .5-.5V5h1a1 1 0 0 1 1 1v15a1 1 0 0 1-1 1H5a3 3 0 0 1-3-3V5a3 3 0 0 1 3-3h10Zm-.3 5.7a1 1 0 0 0-1.4-1.4L9 10.58l-2.3-2.3a1 1 0 0 0-1.4 1.42l3 3a1 1 0 0 0 1.4 0l5-5Z",
                    clipRule: "evenodd",
                    className: c,
                }),
            });
        },
    },
);
