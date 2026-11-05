a.r(e);
var i = a(477900);
a(582128);
var s = a(646514),
    t = a(996682),
    d = a(27989);
a.d(
    e,
    {},
    {
        EmojiPeopleIcon: function (l) {
            let {
                    size: e = "md",
                    width: a,
                    height: h,
                    color: o = s.A.colors.INTERACTIVE_ICON_DEFAULT,
                    colorClass: n = "",
                    ...c
                } = l,
                p = (0, d.J)(e),
                r = p?.width ?? a,
                w = p?.height ?? h;
            return (0, i.jsx)("svg", {
                ...(0, t.A)(c),
                xmlns: "http://www.w3.org/2000/svg",
                width: r,
                height: w,
                fill: "none",
                viewBox: "0 0 24 24",
                children: (0, i.jsx)("path", {
                    fill: "string" == typeof o ? o : o.css,
                    fillRule: "evenodd",
                    d: "M12 23a11 11 0 1 0 0-22 11 11 0 0 0 0 22ZM6.45 8.1a1 1 0 0 0-.9 1.8l1.21.6-1.2.6a1 1 0 1 0 .89 1.8l3-1.5a1 1 0 0 0 0-1.8l-3-1.5Zm12.44.45a1 1 0 0 0-1.34-.44l-3 1.5a1 1 0 0 0 0 1.78l3 1.5a1 1 0 1 0 .9-1.78l-1.21-.61 1.2-.6a1 1 0 0 0 .45-1.35Zm-9.8 5.9a1 1 0 0 0-1.66 1.1 5.5 5.5 0 0 0 9.14 0 1 1 0 0 0-1.66-1.1 3.5 3.5 0 0 1-5.82 0Z",
                    clipRule: "evenodd",
                    className: n,
                }),
            });
        },
    },
);
