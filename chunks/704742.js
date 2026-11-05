l.r(e);
var a = l(477900);
l(582128);
var i = l(646514),
    t = l(996682),
    c = l(27989);
l.d(
    e,
    {},
    {
        EmojiSneezingFaceIcon: function (s) {
            let {
                    size: e = "md",
                    width: l,
                    height: n,
                    color: d = i.A.colors.INTERACTIVE_ICON_DEFAULT,
                    colorClass: h = "",
                    ...o
                } = s,
                p = (0, c.J)(e),
                r = p?.width ?? l,
                w = p?.height ?? n;
            return (0, a.jsxs)("svg", {
                ...(0, t.A)(o),
                xmlns: "http://www.w3.org/2000/svg",
                width: r,
                height: w,
                fill: "none",
                viewBox: "0 0 24 24",
                children: [
                    (0, a.jsx)("path", {
                        fill: "string" == typeof d ? d : d.css,
                        d: "M12 12c-1.04 0-1.9 1.19-2 2.71a6.86 6.86 0 0 0 4 0c-.1-1.52-.96-2.71-2-2.71Z",
                        className: h,
                    }),
                    (0, a.jsx)("path", {
                        fill: "string" == typeof d ? d : d.css,
                        fillRule: "evenodd",
                        d: "M23 12a11 11 0 1 1-22 0 11 11 0 0 1 22 0ZM5.1 6.55a1 1 0 0 1 1.35-.44l3 1.5a1 1 0 0 1 0 1.78l-3 1.5a1 1 0 1 1-.9-1.78l1.21-.61-1.2-.6a1 1 0 0 1-.45-1.35Zm12.45-.44a1 1 0 1 1 .9 1.78l-1.21.61 1.2.6a1 1 0 1 1-.89 1.8l-3-1.5a1 1 0 0 1 0-1.8l3-1.5ZM16 15c0 2.76-1.8 5-4 5s-4-2.24-4-5 1.8-5 4-5 4 2.24 4 5Z",
                        clipRule: "evenodd",
                        className: h,
                    }),
                ],
            });
        },
    },
);
