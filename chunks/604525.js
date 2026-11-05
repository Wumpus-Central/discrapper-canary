t.r(h);
var s = t(477900);
t(582128);
var c = t(646514),
    e = t(996682),
    i = t(27989);
t.d(
    h,
    {},
    {
        ExperimentalDirectSelectIcon: function (a) {
            let {
                    size: h = "md",
                    width: t,
                    height: l,
                    color: r = c.A.colors.INTERACTIVE_ICON_DEFAULT,
                    colorClass: n = "",
                    ...v
                } = a,
                p = (0, i.J)(h),
                d = p?.width ?? t,
                o = p?.height ?? l;
            return (0, s.jsx)("svg", {
                ...(0, e.A)(v),
                xmlns: "http://www.w3.org/2000/svg",
                width: d,
                height: o,
                fill: "none",
                viewBox: "0 0 24 24",
                children: (0, s.jsx)("path", {
                    fill: "string" == typeof r ? r : r.css,
                    d: "M9.55 10.88a2 2 0 0 1 2.89-2.09l8.47 4.36a2 2 0 0 1-.6 3.76l-2.78.43a2 2 0 0 0-1.47 1.07l-1.28 2.5a2 2 0 0 1-3.76-.6l-1.47-9.43ZM9.96 2a1.25 1.25 0 0 0 0 2.5h1.37a1.25 1.25 0 0 0 0-2.5H9.96ZM2 5.26v.21a1.25 1.25 0 1 0 2.5 0v-.21c0-.42.34-.75.75-.75h.21a1.25 1.25 0 0 0 0-2.5h-.21A3.25 3.25 0 0 0 2 5.25ZM2 11.35a1.25 1.25 0 1 0 2.5 0V9.98a1.25 1.25 0 1 0-2.5 0v1.37ZM5.25 19.33h.21a1.25 1.25 0 0 0 0-2.5h-.21a.75.75 0 0 1-.75-.76v-.21a1.25 1.25 0 1 0-2.5 0v.21c0 1.8 1.45 3.26 3.25 3.26ZM16.05 2h-.22a1.25 1.25 0 0 0 0 2.5h.22c.41 0 .75.34.75.76v.21a1.25 1.25 0 1 0 2.5 0v-.21c0-1.8-1.46-3.26-3.25-3.26Z",
                    className: n,
                }),
            });
        },
    },
);
