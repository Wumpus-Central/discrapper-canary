h.r(s);
var t = h(477900);
h(582128);
var i = h(646514),
    c = h(996682),
    e = h(27989);
h.d(
    s,
    {},
    {
        StampIcon: function (a) {
            let {
                    size: s = "md",
                    width: h,
                    height: r,
                    color: n = i.A.colors.INTERACTIVE_ICON_DEFAULT,
                    colorClass: p = "",
                    ...d
                } = a,
                o = (0, e.J)(s),
                v = o?.width ?? h,
                l = o?.height ?? r;
            return (0, t.jsx)("svg", {
                ...(0, c.A)(d),
                xmlns: "http://www.w3.org/2000/svg",
                width: v,
                height: l,
                fill: "none",
                viewBox: "0 0 24 24",
                children: (0, t.jsx)("path", {
                    fill: "string" == typeof n ? n : n.css,
                    d: "M13.5 11.73c0-1.22.84-2.26 1.6-3.21a4 4 0 1 0-6.22 0c.78.95 1.62 1.99 1.62 3.21V13H5a3 3 0 0 0-3 3v1a1 1 0 0 0 1 1h18a1 1 0 0 0 1-1v-1a3 3 0 0 0-3-3h-5.5v-1.27ZM5 19a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1v-1a1 1 0 0 0-1-1H5Z",
                    className: p,
                }),
            });
        },
    },
);
