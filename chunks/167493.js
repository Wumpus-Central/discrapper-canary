i.r(a);
var t = i(477900);
i(582128);
var r = i(646514),
    e = i(996682),
    h = i(27989);
i.d(
    a,
    {},
    {
        ExperimentalGraphMinorIcon: function (s) {
            let {
                    size: a = "md",
                    width: i,
                    height: l,
                    color: c = r.A.colors.BORDER_STRONG,
                    colorClass: p = "",
                    secondaryColor: n = r.A.colors.ICON_FEEDBACK_INFO,
                    secondaryColorClass: o = "",
                    ...d
                } = s,
                v = (0, h.J)(a),
                w = v?.width ?? i,
                f = v?.height ?? l;
            return (0, t.jsxs)("svg", {
                ...(0, e.A)(d),
                xmlns: "http://www.w3.org/2000/svg",
                width: w,
                height: f,
                fill: "none",
                viewBox: "0 0 24 24",
                children: [
                    (0, t.jsx)("path", {
                        fill: "string" == typeof c ? c : c.css,
                        fillOpacity: ".44",
                        d: "M9.7 10a2 2 0 0 1 4 0v10a2 2 0 0 1-4 0V10ZM17.7 4a2 2 0 1 1 4 0v16a2 2 0 0 1-4 0V4Z",
                        className: p,
                    }),
                    (0, t.jsx)("path", {
                        fill: "string" == typeof n ? n : n.css,
                        d: "M1.7 16a2 2 0 1 1 4 0v4a2 2 0 1 1-4 0v-4Z",
                        className: o,
                    }),
                ],
            });
        },
    },
);
