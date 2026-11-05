s.r(h);
var t = s(477900);
s(582128);
var i = s(646514),
    e = s(996682),
    r = s(27989);
s.d(
    h,
    {},
    {
        FilterIcon: function (a) {
            let {
                    size: h = "md",
                    width: s,
                    height: c,
                    color: n = i.A.colors.INTERACTIVE_ICON_DEFAULT,
                    colorClass: d = "",
                    ...l
                } = a,
                o = (0, r.J)(h),
                p = o?.width ?? s,
                w = o?.height ?? c;
            return (0, t.jsx)("svg", {
                ...(0, e.A)(l),
                xmlns: "http://www.w3.org/2000/svg",
                width: p,
                height: w,
                fill: "none",
                viewBox: "0 0 24 24",
                children: (0, t.jsx)("path", {
                    fill: "string" == typeof n ? n : n.css,
                    d: "M21 8.5a1 1 0 0 1-1 1H4a1 1 0 0 1 0-2h16a1 1 0 0 1 1 1ZM18 13a1 1 0 0 1-1 1H7a1 1 0 1 1 0-2h10a1 1 0 0 1 1 1ZM15 17.5a1 1 0 0 1-1 1h-4a1 1 0 1 1 0-2h4a1 1 0 0 1 1 1Z",
                    className: d,
                }),
            });
        },
    },
);
