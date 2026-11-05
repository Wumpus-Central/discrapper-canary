e.r(i);
var s = e(477900);
e(582128);
var r = e(646514),
    l = e(996682),
    h = e(27989);
e.d(
    i,
    {},
    {
        ExperimentalRareIcon: function (t) {
            let {
                    size: i = "md",
                    width: e,
                    height: n,
                    color: c = r.A.colors.INTERACTIVE_ICON_DEFAULT,
                    colorClass: o = "",
                    ...a
                } = t,
                w = (0, h.J)(i),
                d = w?.width ?? e,
                g = w?.height ?? n;
            return (0, s.jsx)("svg", {
                ...(0, l.A)(a),
                xmlns: "http://www.w3.org/2000/svg",
                width: d,
                height: g,
                fill: "none",
                viewBox: "0 0 24 24",
                children: (0, s.jsx)("path", {
                    fill: "string" == typeof c ? c : c.css,
                    d: "M10.16 4.06a2.13 2.13 0 0 1 3.68 0l8 13.77c.81 1.41-.2 3.17-1.84 3.17H4a2.11 2.11 0 0 1-1.84-3.17l8-13.77Z",
                    className: o,
                }),
            });
        },
    },
);
