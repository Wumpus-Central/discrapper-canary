i.r(a);
var s = i(477900);
i(582128);
var e = i(646514),
    t = i(996682),
    c = i(27989);
i.d(
    a,
    {},
    {
        AccessibilityIcon: function (l) {
            let {
                    size: a = "md",
                    width: i,
                    height: d,
                    color: h = e.A.colors.INTERACTIVE_ICON_DEFAULT,
                    colorClass: n = "",
                    ...o
                } = l,
                r = (0, c.J)(a),
                p = r?.width ?? i,
                v = r?.height ?? d;
            return (0, s.jsx)("svg", {
                ...(0, t.A)(o),
                xmlns: "http://www.w3.org/2000/svg",
                width: p,
                height: v,
                fill: "none",
                viewBox: "0 0 24 24",
                children: (0, s.jsx)("path", {
                    fill: "string" == typeof h ? h : h.css,
                    fillRule: "evenodd",
                    d: "M12 23a11 11 0 1 0 0-22 11 11 0 0 0 0 22Zm-2.06-3.65a1 1 0 0 1-1.88-.7l1.9-5.08a.5.5 0 0 0 .04-.18v-2.22a.5.5 0 0 0-.38-.48l-2.86-.72a1 1 0 0 1 .48-1.94l3.55.89a5 5 0 0 0 2.42 0l3.55-.89a1 1 0 1 1 .48 1.94l-2.86.72a.5.5 0 0 0-.38.48v2.22l.03.18 1.9 5.08a1 1 0 0 1-1.87.7l-1.6-4.25a.5.5 0 0 0-.93 0l-1.6 4.25ZM14 6a2 2 0 0 0-2-2 2 2 0 0 0-2 2c0 1.1.9 2 2 2a2 2 0 0 0 2-2Z",
                    clipRule: "evenodd",
                    className: n,
                }),
            });
        },
    },
);
