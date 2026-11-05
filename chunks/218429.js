i.r(a);
var l = i(477900);
i(582128);
var e = i(646514),
    t = i(996682),
    h = i(27989);
i.d(
    a,
    {},
    {
        MagnifyingGlassPlusIcon: function (s) {
            let {
                    size: a = "md",
                    width: i,
                    height: n,
                    color: d = e.A.colors.INTERACTIVE_ICON_DEFAULT,
                    colorClass: c = "",
                    ...o
                } = s,
                p = (0, h.J)(a),
                r = p?.width ?? i,
                v = p?.height ?? n;
            return (0, l.jsxs)("svg", {
                ...(0, t.A)(o),
                xmlns: "http://www.w3.org/2000/svg",
                width: r,
                height: v,
                fill: "none",
                viewBox: "0 0 24 24",
                children: [
                    (0, l.jsx)("path", {
                        fill: "string" == typeof d ? d : d.css,
                        fillRule: "evenodd",
                        d: "M15.62 17.03a9 9 0 1 1 1.41-1.41l4.68 4.67a1 1 0 0 1-1.42 1.42l-4.67-4.68ZM17 10a7 7 0 1 1-14 0 7 7 0 0 1 14 0Z",
                        clipRule: "evenodd",
                        className: c,
                    }),
                    (0, l.jsx)("path", {
                        fill: "string" == typeof d ? d : d.css,
                        d: "M11 7a1 1 0 1 0-2 0v2H7a1 1 0 1 0 0 2h2v2a1 1 0 1 0 2 0v-2h2a1 1 0 1 0 0-2h-2V7Z",
                        className: c,
                    }),
                ],
            });
        },
    },
);
