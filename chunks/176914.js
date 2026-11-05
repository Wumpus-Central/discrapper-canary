h.r(a);
var i = h(477900);
h(582128);
var t = h(646514),
    c = h(996682),
    e = h(27989);
h.d(
    a,
    {},
    {
        FlagMinusIcon: function (s) {
            let {
                    size: a = "md",
                    width: h,
                    height: l,
                    color: n = t.A.colors.INTERACTIVE_ICON_DEFAULT,
                    colorClass: r = "",
                    ...d
                } = s,
                o = (0, e.J)(a),
                p = o?.width ?? h,
                w = o?.height ?? l;
            return (0, i.jsx)("svg", {
                ...(0, c.A)(d),
                xmlns: "http://www.w3.org/2000/svg",
                width: p,
                height: w,
                fill: "none",
                viewBox: "0 0 24 24",
                children: (0, i.jsx)("path", {
                    fill: "string" == typeof n ? n : n.css,
                    d: "M4 2a1 1 0 0 0-2 0v19a1 1 0 1 0 2 0v-6.82l8.2-1.37c.37-.06.65.28.47.6a5.01 5.01 0 0 1-1.94 1.94c-.26.14-.38.47-.18.68a2 2 0 0 0 1.78.6l9-1.5A2 2 0 0 0 23 13.15v-7.3a2 2 0 0 0-2.33-1.98L15 4.82V3.35a2 2 0 0 0-2.33-1.98L4 2.82V2ZM15 18a1 1 0 1 0 0 2h8a1 1 0 1 0 0-2h-8Z",
                    className: r,
                }),
            });
        },
    },
);
