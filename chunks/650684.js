t.r(a);
var e = t(477900);
t(582128);
var i = t(646514),
    n = t(996682),
    s = t(27989);
t.d(
    a,
    {},
    {
        ClipsAutoIcon: function (l) {
            let {
                    size: a = "md",
                    width: t,
                    height: c,
                    color: p = i.A.colors.INTERACTIVE_ICON_DEFAULT,
                    colorClass: o = "",
                    ...u
                } = l,
                d = (0, s.J)(a),
                r = d?.width ?? t,
                A = d?.height ?? c;
            return (0, e.jsxs)("svg", {
                ...(0, n.A)(u),
                xmlns: "http://www.w3.org/2000/svg",
                width: r,
                height: A,
                fill: "none",
                viewBox: "0 0 24 24",
                children: [
                    (0, e.jsx)("path", {
                        fill: "string" == typeof p ? p : p.css,
                        fillRule: "evenodd",
                        d: "M21.5 10c.28 0 .5.22.5.5V19a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3v-8.5c0-.28.22-.5.5-.5h19Zm-8.36 1.8a1.21 1.21 0 0 0-2.28 0l-.5 1.37a2 2 0 0 1-1.19 1.18l-1.38.51a1.21 1.21 0 0 0 0 2.28l1.38.5a2 2 0 0 1 1.18 1.19l.51 1.38a1.21 1.21 0 0 0 2.28 0l.5-1.38a2 2 0 0 1 1.19-1.18l1.38-.51a1.21 1.21 0 0 0 0-2.28l-1.38-.5a2 2 0 0 1-1.18-1.19l-.51-1.38Z",
                        clipRule: "evenodd",
                        className: o,
                    }),
                    (0, e.jsx)("path", {
                        fill: "string" == typeof p ? p : p.css,
                        d: "M6.72 3.05a.5.5 0 0 1 .54.71L5.14 8.2a.5.5 0 0 1-.37.27l-2.2.4A.5.5 0 0 1 2 8.45l-.26-1.48A3 3 0 0 1 4.17 3.5l2.55-.45ZM14.6 1.67a.5.5 0 0 1 .53.7l-2.11 4.44a.5.5 0 0 1-.37.28l-4.25.74a.5.5 0 0 1-.53-.7l2.11-4.44a.5.5 0 0 1 .37-.28l4.25-.74ZM18.23 1.04a3 3 0 0 1 3.2 2.47l.27 1.47a.5.5 0 0 1-.41.58l-5 .89a.5.5 0 0 1-.55-.71l2.12-4.44c.07-.14.2-.25.37-.26Z",
                        className: o,
                    }),
                ],
            });
        },
    },
);
