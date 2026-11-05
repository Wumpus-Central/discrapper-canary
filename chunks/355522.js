e.r(h);
var a = e(477900);
e(582128);
var i = e(646514),
    t = e(996682),
    c = e(27989);
e.d(
    h,
    {},
    {
        BankIcon: function (s) {
            let {
                    size: h = "md",
                    width: e,
                    height: l,
                    color: v = i.A.colors.INTERACTIVE_ICON_DEFAULT,
                    colorClass: d = "",
                    ...n
                } = s,
                o = (0, c.J)(h),
                p = o?.width ?? e,
                r = o?.height ?? l;
            return (0, a.jsxs)("svg", {
                ...(0, t.A)(n),
                xmlns: "http://www.w3.org/2000/svg",
                width: p,
                height: r,
                fill: "none",
                viewBox: "0 0 24 24",
                children: [
                    (0, a.jsx)("path", {
                        fill: "string" == typeof v ? v : v.css,
                        d: "M9 15H8v-4h1v4ZM12 11a1 1 0 0 1 1 1v3h-2v-3a1 1 0 0 1 1-1ZM16 15h-1v-4h1v4Z",
                        className: d,
                    }),
                    (0, a.jsx)("path", {
                        fill: "string" == typeof v ? v : v.css,
                        fillRule: "evenodd",
                        d: "M21.6 4c1.32 0 2.4.9 2.4 2v12c0 1.1-1.08 2-2.4 2H2.4C1.08 20 0 19.1 0 18V6c0-1.1 1.08-2 2.4-2h19.2Zm-9.18 3.15c-.27-.1-.57-.1-.84 0L4.45 9.7a.67.67 0 0 0 .22 1.3H6v4a1 1 0 0 0-1 1v1h14v-1a1 1 0 0 0-.9-1H18v-4h1.33a.67.67 0 0 0 .22-1.3l-7.13-2.55Z",
                        clipRule: "evenodd",
                        className: d,
                    }),
                ],
            });
        },
    },
);
