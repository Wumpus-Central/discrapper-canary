e.r(h);
var i = e(477900);
e(582128);
var s = e(646514),
    l = e(996682),
    t = e(27989);
e.d(
    h,
    {},
    {
        TrainIcon: function (a) {
            let {
                    size: h = "md",
                    width: e,
                    height: d,
                    color: n = s.A.colors.INTERACTIVE_ICON_DEFAULT,
                    colorClass: r = "",
                    ...c
                } = a,
                o = (0, t.J)(h),
                p = o?.width ?? e,
                v = o?.height ?? d;
            return (0, i.jsx)("svg", {
                ...(0, l.A)(c),
                xmlns: "http://www.w3.org/2000/svg",
                width: p,
                height: v,
                fill: "none",
                viewBox: "0 0 24 24",
                children: (0, i.jsx)("path", {
                    fill: "string" == typeof n ? n : n.css,
                    fillRule: "evenodd",
                    d: "M3 5a3 3 0 0 1 3-3h12a3 3 0 0 1 3 3v12a3 3 0 0 1-3 3h-.13l.96 1.45a1 1 0 0 1-1.66 1.1L15.47 20H8.53l-1.7 2.55a1 1 0 0 1-1.67-1.1L6.13 20H6a3 3 0 0 1-3-3V5Zm5 11.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Zm9.5 1.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3ZM5 5a1 1 0 0 1 1-1h5v8H6a1 1 0 0 1-1-1V5Zm8 7h5a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1h-5v8Z",
                    clipRule: "evenodd",
                    className: r,
                }),
            });
        },
    },
);
