t.r(h);
var a = t(477900);
t(582128);
var i = t(646514),
    l = t(996682),
    e = t(27989);
t.d(
    h,
    {},
    {
        AIcon: function (s) {
            let {
                    size: h = "md",
                    width: t,
                    height: r,
                    color: c = i.A.colors.INTERACTIVE_ICON_DEFAULT,
                    colorClass: n = "",
                    ...d
                } = s,
                o = (0, e.J)(h),
                p = o?.width ?? t,
                w = o?.height ?? r;
            return (0, a.jsx)("svg", {
                ...(0, l.A)(d),
                xmlns: "http://www.w3.org/2000/svg",
                width: p,
                height: w,
                fill: "none",
                viewBox: "0 0 24 24",
                children: (0, a.jsx)("path", {
                    fill: "string" == typeof c ? c : c.css,
                    d: "M20.84 21.32a.5.5 0 0 1-.46.68h-1.52a1 1 0 0 1-.94-.66l-1.55-4.28H7.63l-1.56 4.28a1 1 0 0 1-.94.66H3.62a.5.5 0 0 1-.47-.68l7.09-18.6a1 1 0 0 1 .93-.64h1.63a1 1 0 0 1 .93.65l7.11 18.6ZM11.98 5.1l-3.43 9.43h6.87L11.98 5.1Z",
                    className: n,
                }),
            });
        },
    },
);
