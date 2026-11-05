s.r(h);
var i = s(477900);
s(582128);
var t = s(646514),
    c = s(996682),
    r = s(27989);
s.d(
    h,
    {},
    {
        GridHorizontalIcon: function (a) {
            let {
                    size: h = "md",
                    width: s,
                    height: e,
                    color: n = t.A.colors.INTERACTIVE_ICON_DEFAULT,
                    colorClass: o = "",
                    ...d
                } = a,
                l = (0, r.J)(h),
                p = l?.width ?? s,
                v = l?.height ?? e;
            return (0, i.jsx)("svg", {
                ...(0, c.A)(d),
                xmlns: "http://www.w3.org/2000/svg",
                width: p,
                height: v,
                fill: "none",
                viewBox: "0 0 24 24",
                children: (0, i.jsx)("path", {
                    fill: "string" == typeof n ? n : n.css,
                    d: "M2 4c0-1.1.9-2 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V4ZM2 15c0-1.1.9-2 2-2h5a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-5ZM15 13a2 2 0 0 0-2 2v5c0 1.1.9 2 2 2h5a2 2 0 0 0 2-2v-5a2 2 0 0 0-2-2h-5Z",
                    className: o,
                }),
            });
        },
    },
);
