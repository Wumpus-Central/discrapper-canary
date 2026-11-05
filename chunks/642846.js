t.r(h);
var a = t(477900);
t(582128);
var i = t(646514),
    c = t(996682),
    e = t(27989);
t.d(
    h,
    {},
    {
        PollsIcon: function (s) {
            let {
                    size: h = "md",
                    width: t,
                    height: r,
                    color: l = i.A.colors.INTERACTIVE_ICON_DEFAULT,
                    colorClass: n = "",
                    ...o
                } = s,
                d = (0, e.J)(h),
                p = d?.width ?? t,
                w = d?.height ?? r;
            return (0, a.jsx)("svg", {
                ...(0, c.A)(o),
                xmlns: "http://www.w3.org/2000/svg",
                width: p,
                height: w,
                fill: "none",
                viewBox: "0 0 24 24",
                children: (0, a.jsx)("path", {
                    fill: "string" == typeof l ? l : l.css,
                    d: "M2 5c0-1.1.9-2 2-2h16a2 2 0 1 1 0 4H4a2 2 0 0 1-2-2ZM2 12c0-1.1.9-2 2-2h6a2 2 0 1 1 0 4H4a2 2 0 0 1-2-2ZM4 17a2 2 0 1 0 0 4h12a2 2 0 1 0 0-4H4Z",
                    className: n,
                }),
            });
        },
    },
);
