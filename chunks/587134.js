a.r(l);
var i = a(477900);
a(582128);
var e = a(646514),
    c = a(996682),
    t = a(27989);
a.d(
    l,
    {},
    {
        EmojiFaceVomitingIcon: function (s) {
            let {
                    size: l = "md",
                    width: a,
                    height: d,
                    color: h = e.A.colors.INTERACTIVE_ICON_DEFAULT,
                    colorClass: n = "",
                    ...o
                } = s,
                p = (0, t.J)(l),
                r = p?.width ?? a,
                v = p?.height ?? d;
            return (0, i.jsxs)("svg", {
                ...(0, c.A)(o),
                xmlns: "http://www.w3.org/2000/svg",
                width: r,
                height: v,
                fill: "none",
                viewBox: "0 0 24 24",
                children: [
                    (0, i.jsx)("path", {
                        fill: "string" == typeof h ? h : h.css,
                        fillRule: "evenodd",
                        d: "M20.1 19.45c-.6-.29-1.3-.54-2.1-.75v-2.2c0-2.49-2.69-4.5-6-4.5s-6 2.01-6 4.5v2.2c-.8.21-1.5.46-2.1.75a11 11 0 1 1 16.2 0Zm-15-11.9a1 1 0 0 1 1.35-.44l3 1.5a1 1 0 0 1 0 1.78l-3 1.5a1 1 0 1 1-.9-1.78l1.21-.61-1.2-.6a1 1 0 0 1-.45-1.35Zm12.45-.44a1 1 0 1 1 .9 1.78l-1.21.61 1.2.6a1 1 0 1 1-.89 1.8l-3-1.5a1 1 0 0 1 0-1.8l3-1.5Z",
                        clipRule: "evenodd",
                        className: n,
                    }),
                    (0, i.jsx)("path", {
                        fill: "string" == typeof h ? h : h.css,
                        d: "M4 21.5c0-.56 1.6-1.04 4-1.3V18a4 4 0 0 1 8 0v2.2c2.4.26 4 .74 4 1.3 0 .83-3.58 1.5-8 1.5s-8-.67-8-1.5Z",
                        className: n,
                    }),
                ],
            });
        },
    },
);
