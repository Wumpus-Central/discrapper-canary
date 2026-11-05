s.r(h);
var a = s(477900);
s(582128);
var i = s(646514),
    l = s(996682),
    t = s(27989);
s.d(
    h,
    {},
    {
        FolderPlusIcon: function (e) {
            let {
                    size: h = "md",
                    width: s,
                    height: d,
                    color: n = i.A.colors.INTERACTIVE_ICON_DEFAULT,
                    colorClass: o = "",
                    ...r
                } = e,
                c = (0, t.J)(h),
                v = c?.width ?? s,
                p = c?.height ?? d;
            return (0, a.jsx)("svg", {
                ...(0, l.A)(r),
                xmlns: "http://www.w3.org/2000/svg",
                width: v,
                height: p,
                fill: "none",
                viewBox: "0 0 24 24",
                children: (0, a.jsx)("path", {
                    fill: "string" == typeof n ? n : n.css,
                    fillRule: "evenodd",
                    d: "M5 2a3 3 0 0 0-3 3v14a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3h-7l-1.4-2.1A2 2 0 0 0 8.92 2H5Zm7 7a1 1 0 0 1 1 1v3h3a1 1 0 0 1 0 2h-3v3a1 1 0 0 1-2 0v-3H8a1 1 0 1 1 0-2h3v-3a1 1 0 0 1 1-1Z",
                    clipRule: "evenodd",
                    className: o,
                }),
            });
        },
    },
);
