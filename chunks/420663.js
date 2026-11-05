a.r(l);
var n = a(477900);
a(582128);
var t = a(646514),
    i = a(996682),
    o = a(27989);
a.d(
    l,
    {},
    {
        EmojiUpsideDownFaceIcon: function (e) {
            let {
                    size: l = "md",
                    width: a,
                    height: d,
                    color: c = t.A.colors.INTERACTIVE_ICON_DEFAULT,
                    colorClass: r = "",
                    ...s
                } = e,
                u = (0, o.J)(l),
                h = u?.width ?? a,
                m = u?.height ?? d;
            return (0, n.jsx)("svg", {
                ...(0, i.A)(s),
                xmlns: "http://www.w3.org/2000/svg",
                width: h,
                height: m,
                fill: "none",
                viewBox: "0 0 24 24",
                children: (0, n.jsx)("path", {
                    fill: "string" == typeof c ? c : c.css,
                    fillRule: "evenodd",
                    d: "M12 1a11 11 0 1 0 0 22 11 11 0 0 0 0-22Zm5.5 10a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3Zm-11 0a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3Zm9.8-1.17a1 1 0 0 1-1.39-.27 3.5 3.5 0 0 0-5.82 0 1 1 0 1 1-1.66-1.12 5.5 5.5 0 0 1 9.14 0 1 1 0 0 1-.27 1.4Z",
                    clipRule: "evenodd",
                    className: r,
                }),
            });
        },
    },
);
