i.r(t);
var c = i(477900);
i(582128);
var e = i(646514),
    h = i(996682),
    a = i(27989);
i.d(
    t,
    {},
    {
        EmojiAstonishedFaceIcon: function (s) {
            let {
                    size: t = "md",
                    width: i,
                    height: n,
                    color: o = e.A.colors.INTERACTIVE_ICON_DEFAULT,
                    colorClass: r = "",
                    ...d
                } = s,
                l = (0, a.J)(t),
                p = l?.width ?? i,
                w = l?.height ?? n;
            return (0, c.jsxs)("svg", {
                ...(0, h.A)(d),
                xmlns: "http://www.w3.org/2000/svg",
                width: p,
                height: w,
                fill: "none",
                viewBox: "0 0 24 24",
                children: [
                    (0, c.jsx)("path", {
                        fill: "string" == typeof o ? o : o.css,
                        d: "M12 1a11 11 0 1 1 0 22 11 11 0 0 1 0-22Zm0 9c-2.2 0-4 2.24-4 5s1.8 5 4 5 4-2.24 4-5-1.8-5-4-5ZM7.5 6C6.67 6 6 6.9 6 8s.67 2 1.5 2S9 9.1 9 8s-.67-2-1.5-2Zm9 0c-.83 0-1.5.9-1.5 2s.67 2 1.5 2S18 9.1 18 8s-.67-2-1.5-2Z",
                        className: r,
                    }),
                    (0, c.jsx)("path", {
                        fill: "string" == typeof o ? o : o.css,
                        d: "M12 12c1.04 0 1.9 1.19 1.99 2.71a6.85 6.85 0 0 1-3.98 0c.1-1.52.95-2.71 1.99-2.71Z",
                        className: r,
                    }),
                ],
            });
        },
    },
);
