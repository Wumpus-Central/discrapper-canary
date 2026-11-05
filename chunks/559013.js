t.r(s);
var a = t(477900);
t(582128);
var c = t(646514),
    h = t(996682),
    n = t(27989);
t.d(
    s,
    {},
    {
        EmojiGrinningFaceIcon: function (i) {
            let {
                    size: s = "md",
                    width: t,
                    height: e,
                    color: r = c.A.colors.INTERACTIVE_ICON_DEFAULT,
                    colorClass: o = "",
                    ...d
                } = i,
                p = (0, n.J)(s),
                l = p?.width ?? t,
                w = p?.height ?? e;
            return (0, a.jsx)("svg", {
                ...(0, h.A)(d),
                xmlns: "http://www.w3.org/2000/svg",
                width: l,
                height: w,
                fill: "none",
                viewBox: "0 0 24 24",
                children: (0, a.jsx)("path", {
                    fill: "string" == typeof r ? r : r.css,
                    d: "M12 1a11 11 0 1 1 0 22 11 11 0 0 1 0-22ZM8.31 14c-.81 0-1.5.65-1.27 1.41A5.15 5.15 0 0 0 12 19a5.15 5.15 0 0 0 4.96-3.59c.22-.76-.46-1.41-1.27-1.41H8.3ZM6.5 10a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3Zm11 0a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3Z",
                    className: o,
                }),
            });
        },
    },
);
