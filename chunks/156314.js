e.r(a);
var i = e(477900);
e(582128);
var s = e(646514),
    d = e(996682),
    t = e(27989);
e.d(
    a,
    {},
    {
        EmojiConfoundedFaceIcon: function (l) {
            let {
                    size: a = "md",
                    width: e,
                    height: n,
                    color: o = s.A.colors.INTERACTIVE_ICON_DEFAULT,
                    colorClass: h = "",
                    ...c
                } = l,
                r = (0, t.J)(a),
                p = r?.width ?? e,
                u = r?.height ?? n;
            return (0, i.jsx)("svg", {
                ...(0, d.A)(c),
                xmlns: "http://www.w3.org/2000/svg",
                width: p,
                height: u,
                fill: "none",
                viewBox: "0 0 24 24",
                children: (0, i.jsx)("path", {
                    fill: "string" == typeof o ? o : o.css,
                    fillRule: "evenodd",
                    d: "M12 23a11 11 0 1 0 0-22 11 11 0 0 0 0 22ZM6.45 9.1a1 1 0 0 0-.9 1.8l1.21.6-1.2.6a1 1 0 1 0 .89 1.8l3-1.5a1 1 0 0 0 0-1.8l-3-1.5Zm12.44.45a1 1 0 0 0-1.34-.44l-3 1.5a1 1 0 0 0 0 1.78l3 1.5a1 1 0 1 0 .9-1.78l-1.21-.61 1.2-.6a1 1 0 0 0 .45-1.35Zm-9.13 5.3a1 1 0 0 0-1.54.03l-1.3 1.62-.21-.2a1 1 0 0 0-1.42 1.4l1 1a1 1 0 0 0 1.5-.08l1.24-1.55 2.21 2.58a1 1 0 0 0 1.52 0l2.21-2.58 1.25 1.55a1 1 0 0 0 1.49.09l1-1a1 1 0 0 0-1.42-1.42l-.2.21-1.3-1.62a1 1 0 0 0-1.55-.03L12 17.46l-2.24-2.61Z",
                    clipRule: "evenodd",
                    className: h,
                }),
            });
        },
    },
);
