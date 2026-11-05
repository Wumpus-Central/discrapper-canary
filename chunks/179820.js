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
        ExperimentalMythicIcon: function (t) {
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
                    d: "M11.26 2.86c.38-1.15 2-1.15 2.38 0l1.89 5.83h6.12c1.2 0 1.71 1.54.73 2.25l-4.95 3.6 1.9 5.82a1.25 1.25 0 0 1-1.93 1.4l-4.95-3.6-4.95 3.6c-.98.7-2.3-.25-1.92-1.4l1.89-5.82-4.95-3.6a1.25 1.25 0 0 1 .73-2.25h6.12l1.9-5.83Z",
                    className: o,
                }),
            });
        },
    },
);
