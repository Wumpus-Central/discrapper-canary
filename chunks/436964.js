h.r(t);
var a = h(477900);
h(582128);
var i = h(646514),
    e = h(996682),
    r = h(27989);
h.d(
    t,
    {},
    {
        ArrowAngleUpLeftIcon: function (s) {
            let {
                    size: t = "md",
                    width: h,
                    height: l,
                    color: n = i.A.colors.INTERACTIVE_ICON_DEFAULT,
                    colorClass: c = "",
                    ...o
                } = s,
                p = (0, r.J)(t),
                d = p?.width ?? h,
                w = p?.height ?? l;
            return (0, a.jsx)("svg", {
                ...(0, e.A)(o),
                xmlns: "http://www.w3.org/2000/svg",
                width: d,
                height: w,
                fill: "none",
                viewBox: "0 0 24 24",
                children: (0, a.jsx)("path", {
                    fill: "string" == typeof n ? n : n.css,
                    d: "M7.3 2.3a1 1 0 0 1 1.4 0l5 5a1 1 0 0 1-1.4 1.4L9 5.42V11a7 7 0 0 0 7 7h4a1 1 0 1 1 0 2h-4a9 9 0 0 1-9-9V5.41l-3.3 3.3a1 1 0 0 1-1.4-1.42l5-5Z",
                    className: c,
                }),
            });
        },
    },
);
