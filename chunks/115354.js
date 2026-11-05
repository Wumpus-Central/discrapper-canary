e.r(v);
var s = e(477900);
e(582128);
var i = e(646514),
    a = e(996682),
    t = e(27989);
e.d(
    v,
    {},
    {
        BrowserCheckeredIcon: function (h) {
            let {
                    size: v = "md",
                    width: e,
                    height: d,
                    color: r = i.A.colors.INTERACTIVE_ICON_DEFAULT,
                    colorClass: Z = "",
                    ...l
                } = h,
                c = (0, t.J)(v),
                m = c?.width ?? e,
                n = c?.height ?? d;
            return (0, s.jsx)("svg", {
                ...(0, a.A)(l),
                xmlns: "http://www.w3.org/2000/svg",
                width: m,
                height: n,
                fill: "none",
                viewBox: "0 0 24 24",
                children: (0, s.jsx)("path", {
                    fill: "string" == typeof r ? r : r.css,
                    fillRule: "evenodd",
                    d: "M20 3a3 3 0 0 1 3 3v12a3 3 0 0 1-3 3H4a3 3 0 0 1-3-3V6a3 3 0 0 1 3-3h16ZM5 15v2h2v-2H5Zm4 0v2h2v-2H9Zm4 0v2h2v-2h-2Zm4 0v2h2v-2h-2ZM7 13v2h2v-2H7Zm4 0v2h2v-2h-2Zm4 0v2h2v-2h-2ZM5 11v2h2v-2H5Zm4 0v2h2v-2H9Zm4 0v2h2v-2h-2Zm4 0v2h2v-2h-2ZM4 5a1 1 0 1 0 0 2 1 1 0 0 0 0-2Zm3 0a1 1 0 1 0 0 2 1 1 0 0 0 0-2Zm3 0a1 1 0 1 0 0 2 1 1 0 0 0 0-2Z",
                    clipRule: "evenodd",
                    className: Z,
                }),
            });
        },
    },
);
