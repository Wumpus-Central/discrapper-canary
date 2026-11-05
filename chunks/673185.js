var n = l(477900);
l(582128);
var a = l(646514),
    i = l(996682),
    r = l(27989);
l.d(
    t,
    {},
    {
        $: function (e) {
            let {
                    size: t = "md",
                    width: l,
                    height: s,
                    color: o = a.A.colors.INTERACTIVE_ICON_DEFAULT,
                    colorClass: c = "",
                    ...d
                } = e,
                h = (0, r.J)(t),
                u = h?.width ?? l,
                T = h?.height ?? s;
            return (0, n.jsx)("svg", {
                ...(0, i.A)(d),
                xmlns: "http://www.w3.org/2000/svg",
                width: u,
                height: T,
                fill: "none",
                viewBox: "0 0 24 24",
                children: (0, n.jsx)("path", {
                    fill: "string" == typeof o ? o : o.css,
                    d: "M2 4a1 1 0 0 1 1-1h18a1 1 0 1 1 0 2H3a1 1 0 0 1-1-1ZM2 8a1 1 0 0 1 1-1h15a1 1 0 1 1 0 2H3a1 1 0 0 1-1-1ZM3 11a1 1 0 1 0 0 2h11a1 1 0 1 0 0-2H3ZM2 16a1 1 0 0 1 1-1h18a1 1 0 1 1 0 2H3a1 1 0 0 1-1-1ZM3 19a1 1 0 1 0 0 2h15a1 1 0 1 0 0-2H3Z",
                    className: c,
                }),
            });
        },
    },
);
