t.r(a);
var i = t(477900);
t(582128);
var l = t(646514),
    h = t(996682),
    r = t(27989);
t.d(
    a,
    {},
    {
        ArrowsUpDownIcon: function (s) {
            let {
                    size: a = "md",
                    width: t,
                    height: e,
                    color: n = l.A.colors.INTERACTIVE_ICON_DEFAULT,
                    colorClass: o = "",
                    ...c
                } = s,
                p = (0, r.J)(a),
                w = p?.width ?? t,
                d = p?.height ?? e;
            return (0, i.jsx)("svg", {
                ...(0, h.A)(c),
                xmlns: "http://www.w3.org/2000/svg",
                width: w,
                height: d,
                fill: "none",
                viewBox: "0 0 24 24",
                children: (0, i.jsx)("path", {
                    fill: "string" == typeof n ? n : n.css,
                    d: "M16.3 21.7a1 1 0 0 0 1.4 0l4-4a1 1 0 0 0-1.4-1.4L18 18.58V3a1 1 0 1 0-2 0v15.59l-2.3-2.3a1 1 0 0 0-1.4 1.42l4 4ZM6.3 2.3a1 1 0 0 1 1.4 0l4 4a1 1 0 0 1-1.4 1.4L8 5.42V21a1 1 0 1 1-2 0V5.41l-2.3 2.3a1 1 0 0 1-1.4-1.42l4-4Z",
                    className: o,
                }),
            });
        },
    },
);
