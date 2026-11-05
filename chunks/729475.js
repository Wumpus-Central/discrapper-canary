s.r(h);
var t = s(477900);
s(582128);
var e = s(646514),
    i = s(996682),
    c = s(27989);
s.d(
    h,
    {},
    {
        FullscreenEnterIcon: function (a) {
            let {
                    size: h = "md",
                    width: s,
                    height: r,
                    color: n = e.A.colors.INTERACTIVE_ICON_DEFAULT,
                    colorClass: l = "",
                    ...v
                } = a,
                d = (0, c.J)(h),
                o = d?.width ?? s,
                p = d?.height ?? r;
            return (0, t.jsx)("svg", {
                ...(0, i.A)(v),
                xmlns: "http://www.w3.org/2000/svg",
                width: o,
                height: p,
                fill: "none",
                viewBox: "0 0 24 24",
                children: (0, t.jsx)("path", {
                    fill: "string" == typeof n ? n : n.css,
                    d: "M4 6c0-1.1.9-2 2-2h3a1 1 0 0 0 0-2H6a4 4 0 0 0-4 4v3a1 1 0 0 0 2 0V6ZM4 18c0 1.1.9 2 2 2h3a1 1 0 1 1 0 2H6a4 4 0 0 1-4-4v-3a1 1 0 1 1 2 0v3ZM18 4a2 2 0 0 1 2 2v3a1 1 0 1 0 2 0V6a4 4 0 0 0-4-4h-3a1 1 0 1 0 0 2h3ZM20 18a2 2 0 0 1-2 2h-3a1 1 0 1 0 0 2h3a4 4 0 0 0 4-4v-3a1 1 0 1 0-2 0v3Z",
                    className: l,
                }),
            });
        },
    },
);
