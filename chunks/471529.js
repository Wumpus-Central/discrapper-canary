e.r(a);
var i = e(477900);
e(582128);
var s = e(646514),
    t = e(996682),
    d = e(27989);
e.d(
    a,
    {},
    {
        EmojiGrumpyFaceIcon: function (l) {
            let {
                    size: a = "md",
                    width: e,
                    height: h,
                    color: c = s.A.colors.INTERACTIVE_ICON_DEFAULT,
                    colorClass: n = "",
                    ...o
                } = l,
                r = (0, d.J)(a),
                p = r?.width ?? e,
                u = r?.height ?? h;
            return (0, i.jsx)("svg", {
                ...(0, t.A)(o),
                xmlns: "http://www.w3.org/2000/svg",
                width: p,
                height: u,
                fill: "none",
                viewBox: "0 0 24 24",
                children: (0, i.jsx)("path", {
                    fill: "string" == typeof c ? c : c.css,
                    fillRule: "evenodd",
                    d: "M12 23a11 11 0 1 0 0-22 11 11 0 0 0 0 22Zm-2.91-5.44a1 1 0 0 1-1.66-1.12 5.5 5.5 0 0 1 9.14 0 1 1 0 0 1-1.66 1.12 3.5 3.5 0 0 0-5.82 0Zm-3.98-8a1 1 0 0 1 1.34-.45l3 1.5a1 1 0 0 1 0 1.78l-3 1.5a1 1 0 1 1-.9-1.78l1.21-.61-1.2-.6a1 1 0 0 1-.45-1.35Zm12.44-.45a1 1 0 1 1 .9 1.78l-1.21.61 1.2.6a1 1 0 1 1-.89 1.8l-3-1.5a1 1 0 0 1 0-1.8l3-1.5Z",
                    clipRule: "evenodd",
                    className: n,
                }),
            });
        },
    },
);
