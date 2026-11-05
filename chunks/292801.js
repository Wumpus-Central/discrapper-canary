h.r(t);
var i = h(477900);
h(582128);
var a = h(646514),
    r = h(996682),
    e = h(27989);
h.d(
    t,
    {},
    {
        ArrowAngleRightUpIcon: function (s) {
            let {
                    size: t = "md",
                    width: h,
                    height: l,
                    color: n = a.A.colors.INTERACTIVE_ICON_DEFAULT,
                    colorClass: c = "",
                    ...o
                } = s,
                p = (0, e.J)(t),
                d = p?.width ?? h,
                w = p?.height ?? l;
            return (0, i.jsx)("svg", {
                ...(0, r.A)(o),
                xmlns: "http://www.w3.org/2000/svg",
                width: d,
                height: w,
                fill: "none",
                viewBox: "0 0 24 24",
                children: (0, i.jsx)("path", {
                    fill: "string" == typeof n ? n : n.css,
                    d: "M21.7 7.3a1 1 0 0 1 0 1.4l-5 5a1 1 0 0 1-1.4-1.4L18.58 9H13a7 7 0 0 0-7 7v4a1 1 0 1 1-2 0v-4a9 9 0 0 1 9-9h5.59l-3.3-3.3a1 1 0 0 1 1.42-1.4l5 5Z",
                    className: c,
                }),
            });
        },
    },
);
