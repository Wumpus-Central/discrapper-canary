t.r(i);
var h = t(477900);
t(582128);
var a = t(646514),
    c = t(996682),
    e = t(27989);
t.d(
    i,
    {},
    {
        EmojiWorriedFaceIcon: function (s) {
            let {
                    size: i = "md",
                    width: t,
                    height: r,
                    color: o = a.A.colors.INTERACTIVE_ICON_DEFAULT,
                    colorClass: d = "",
                    ...n
                } = s,
                p = (0, e.J)(i),
                l = p?.width ?? t,
                w = p?.height ?? r;
            return (0, h.jsx)("svg", {
                ...(0, c.A)(n),
                xmlns: "http://www.w3.org/2000/svg",
                width: l,
                height: w,
                fill: "none",
                viewBox: "0 0 24 24",
                children: (0, h.jsx)("path", {
                    fill: "string" == typeof o ? o : o.css,
                    d: "M12 1a11 11 0 1 1 0 22 11 11 0 0 1 0-22Zm0 14a4.12 4.12 0 0 0-3.96 2.87c-.19.6.36 1.13 1.01 1.13h5.9c.65 0 1.2-.52 1.01-1.13A4.12 4.12 0 0 0 12 15Zm-5.5-5a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3Zm11 0a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3Z",
                    className: d,
                }),
            });
        },
    },
);
