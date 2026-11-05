s.r(e);
var a = s(477900);
s(582128);
var l = s(646514),
    t = s(996682),
    c = s(27989);
s.d(
    e,
    {},
    {
        EmojiHappyWinkingFaceIcon: function (i) {
            let {
                    size: e = "md",
                    width: s,
                    height: h,
                    color: n = l.A.colors.INTERACTIVE_ICON_DEFAULT,
                    colorClass: d = "",
                    ...o
                } = i,
                p = (0, c.J)(e),
                r = p?.width ?? s,
                w = p?.height ?? h;
            return (0, a.jsx)("svg", {
                ...(0, t.A)(o),
                xmlns: "http://www.w3.org/2000/svg",
                width: r,
                height: w,
                fill: "none",
                viewBox: "0 0 24 24",
                children: (0, a.jsx)("path", {
                    fill: "string" == typeof n ? n : n.css,
                    fillRule: "evenodd",
                    d: "M12 23a11 11 0 1 0 0-22 11 11 0 0 0 0 22Zm5.5-10a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Zm-2.14 1.99c.15-.53-.3-.99-.86-.99h-5c-.55 0-1.01.46-.86.99a3.5 3.5 0 0 0 6.72 0ZM6.45 9.1a1 1 0 0 0-.9 1.78l1.21.61-1.2.6a1 1 0 1 0 .89 1.8l3-1.5a1 1 0 0 0 0-1.8l-3-1.5Z",
                    clipRule: "evenodd",
                    className: d,
                }),
            });
        },
    },
);
