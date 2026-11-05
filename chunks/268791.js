s.r(a);
var i = s(477900);
s(582128);
var t = s(646514),
    l = s(996682),
    d = s(27989);
s.d(
    a,
    {},
    {
        SpeedometerIcon: function (e) {
            let {
                    size: a = "md",
                    width: s,
                    height: h,
                    color: c = t.A.colors.INTERACTIVE_ICON_DEFAULT,
                    colorClass: n = "",
                    ...o
                } = e,
                r = (0, d.J)(a),
                p = r?.width ?? s,
                w = r?.height ?? h;
            return (0, i.jsx)("svg", {
                ...(0, l.A)(o),
                xmlns: "http://www.w3.org/2000/svg",
                width: p,
                height: w,
                fill: "none",
                viewBox: "0 0 24 24",
                children: (0, i.jsx)("path", {
                    fill: "string" == typeof c ? c : c.css,
                    fillRule: "evenodd",
                    d: "M17.38 21c.61 0 1.23-.18 1.7-.58a11 11 0 1 0-14.16 0c.47.4 1.09.58 1.7.58h10.76Zm.83-13.8a1 1 0 0 0-1.42-1.4l-4.27 4.27A2 2 0 0 0 10 12a2 2 0 1 0 3.93-.52l4.28-4.27ZM4 13a1 1 0 1 0 0-2 1 1 0 0 0 0 2Zm3.05 3.95a1 1 0 1 1-1.41 1.41 1 1 0 0 1 1.41-1.41Zm9.9 1.41a1 1 0 1 1 1.41-1.41 1 1 0 0 1-1.41 1.41ZM6.13 7.32a1 1 0 1 1 .42-1.96 1 1 0 0 1-.42 1.96ZM12 5a1 1 0 1 0 0-2 1 1 0 0 0 0 2Zm9 7a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z",
                    clipRule: "evenodd",
                    className: n,
                }),
            });
        },
    },
);
