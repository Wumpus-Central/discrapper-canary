e.r(a);
var i = e(477900);
e(582128);
var s = e(646514),
    t = e(996682),
    c = e(27989);
e.d(
    a,
    {},
    {
        EmojiJokingFaceIcon: function (l) {
            let {
                    size: a = "md",
                    width: e,
                    height: h,
                    color: d = s.A.colors.INTERACTIVE_ICON_DEFAULT,
                    colorClass: n = "",
                    ...o
                } = l,
                r = (0, c.J)(a),
                p = r?.width ?? e,
                w = r?.height ?? h;
            return (0, i.jsx)("svg", {
                ...(0, t.A)(o),
                xmlns: "http://www.w3.org/2000/svg",
                width: p,
                height: w,
                fill: "none",
                viewBox: "0 0 24 24",
                children: (0, i.jsx)("path", {
                    fill: "string" == typeof d ? d : d.css,
                    fillRule: "evenodd",
                    d: "M12 23a11 11 0 1 0 0-22 11 11 0 0 0 0 22Zm2.5-8.5c.55 0 1.01.46.86.99a3.5 3.5 0 0 1-6.72 0c-.15-.53.3-.99.86-.99h5ZM5.1 9.55a1 1 0 0 1 1.35-.44l3 1.5a1 1 0 0 1 0 1.78l-3 1.5a1 1 0 1 1-.9-1.78l1.21-.61-1.2-.6a1 1 0 0 1-.45-1.35Zm12.45-.44a1 1 0 1 1 .9 1.78l-1.21.61 1.2.6a1 1 0 1 1-.89 1.8l-3-1.5a1 1 0 0 1 0-1.8l3-1.5Z",
                    clipRule: "evenodd",
                    className: n,
                }),
            });
        },
    },
);
