t.r(s);
var c = t(477900);
t(582128);
var h = t(646514),
    e = t(996682),
    n = t(27989);
t.d(
    s,
    {},
    {
        EmojiGrinningFaceWithBigEyesIcon: function (i) {
            let {
                    size: s = "md",
                    width: t,
                    height: r,
                    color: a = h.A.colors.INTERACTIVE_ICON_DEFAULT,
                    colorClass: o = "",
                    ...d
                } = i,
                p = (0, n.J)(s),
                l = p?.width ?? t,
                w = p?.height ?? r;
            return (0, c.jsx)("svg", {
                ...(0, e.A)(d),
                xmlns: "http://www.w3.org/2000/svg",
                width: l,
                height: w,
                fill: "none",
                viewBox: "0 0 24 24",
                children: (0, c.jsx)("path", {
                    fill: "string" == typeof a ? a : a.css,
                    d: "M12 1a11 11 0 1 1 0 22 11 11 0 0 1 0-22ZM8.31 14c-.81 0-1.5.65-1.27 1.41A5.15 5.15 0 0 0 12 19a5.15 5.15 0 0 0 4.96-3.59c.22-.76-.46-1.41-1.27-1.41H8.3ZM6.5 8C5.67 8 5 9.12 5 10.5S5.67 13 6.5 13 8 11.88 8 10.5 7.33 8 6.5 8Zm11 0c-.83 0-1.5 1.12-1.5 2.5s.67 2.5 1.5 2.5 1.5-1.12 1.5-2.5S18.33 8 17.5 8Z",
                    className: o,
                }),
            });
        },
    },
);
