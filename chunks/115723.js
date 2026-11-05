h.r(s);
var i = h(477900);
h(582128);
var t = h(646514),
    e = h(996682),
    r = h(27989);
h.d(
    s,
    {},
    {
        ListViewIcon: function (a) {
            let {
                    size: s = "md",
                    width: h,
                    height: c,
                    color: n = t.A.colors.INTERACTIVE_ICON_DEFAULT,
                    colorClass: d = "",
                    ...o
                } = a,
                p = (0, r.J)(s),
                w = p?.width ?? h,
                l = p?.height ?? c;
            return (0, i.jsx)("svg", {
                ...(0, e.A)(o),
                xmlns: "http://www.w3.org/2000/svg",
                width: w,
                height: l,
                fill: "none",
                viewBox: "0 0 24 24",
                children: (0, i.jsx)("path", {
                    fill: "string" == typeof n ? n : n.css,
                    d: "M4 2a2 2 0 1 0 0 4 2 2 0 0 0 0-4ZM4 10a2 2 0 1 0 0 4 2 2 0 0 0 0-4ZM2 20a2 2 0 1 1 4 0 2 2 0 0 1-4 0ZM9 3a1 1 0 0 0 0 2h12a1 1 0 1 0 0-2H9ZM8 12a1 1 0 0 1 1-1h12a1 1 0 1 1 0 2H9a1 1 0 0 1-1-1ZM9 19a1 1 0 1 0 0 2h12a1 1 0 1 0 0-2H9Z",
                    className: d,
                }),
            });
        },
    },
);
