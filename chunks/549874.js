s.r(e);
var a = s(477900);
s(582128);
var l = s(646514),
    t = s(996682),
    n = s(27989);
s.d(
    e,
    {},
    {
        EmojiWinkingFaceIcon: function (i) {
            let {
                    size: e = "md",
                    width: s,
                    height: d,
                    color: h = l.A.colors.INTERACTIVE_ICON_DEFAULT,
                    colorClass: c = "",
                    ...o
                } = i,
                r = (0, n.J)(e),
                p = r?.width ?? s,
                w = r?.height ?? d;
            return (0, a.jsx)("svg", {
                ...(0, t.A)(o),
                xmlns: "http://www.w3.org/2000/svg",
                width: p,
                height: w,
                fill: "none",
                viewBox: "0 0 24 24",
                children: (0, a.jsx)("path", {
                    fill: "string" == typeof h ? h : h.css,
                    fillRule: "evenodd",
                    d: "M12 23a11 11 0 1 0 0-22 11 11 0 0 0 0 22Zm5.5-10a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3ZM5.1 9.55a1 1 0 0 1 1.35-.44l3 1.5a1 1 0 0 1 0 1.78l-3 1.5a1 1 0 1 1-.9-1.78l1.21-.61-1.2-.6a1 1 0 0 1-.45-1.35Zm3.99 4.9a1 1 0 0 0-1.66 1.1 5.5 5.5 0 0 0 9.14 0 1 1 0 0 0-1.66-1.1 3.5 3.5 0 0 1-5.82 0Z",
                    clipRule: "evenodd",
                    className: c,
                }),
            });
        },
    },
);
