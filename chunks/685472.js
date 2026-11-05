s.r(e);
var n = s(477900);
s(582128);
var t = s(646514),
    h = s(996682),
    a = s(27989);
s.d(
    e,
    {},
    {
        EmojiGrinningFaceWithSmilingEyesIcon: function (i) {
            let {
                    size: e = "md",
                    width: s,
                    height: c,
                    color: l = t.A.colors.INTERACTIVE_ICON_DEFAULT,
                    colorClass: d = "",
                    ...o
                } = i,
                r = (0, a.J)(e),
                p = r?.width ?? s,
                w = r?.height ?? c;
            return (0, n.jsx)("svg", {
                ...(0, h.A)(o),
                xmlns: "http://www.w3.org/2000/svg",
                width: p,
                height: w,
                fill: "none",
                viewBox: "0 0 24 24",
                children: (0, n.jsx)("path", {
                    fill: "string" == typeof l ? l : l.css,
                    fillRule: "evenodd",
                    d: "M12 23a11 11 0 1 0 0-22 11 11 0 0 0 0 22Zm3.69-8c.81 0 1.5.65 1.26 1.41A5.15 5.15 0 0 1 12 20a5.15 5.15 0 0 1-4.96-3.59C6.82 15.65 7.5 15 8.31 15h7.38ZM5.43 12.82a1 1 0 0 0 1.4-.25c.23-.34.63-.57 1.1-.57.23 0 .44.05.62.14a1 1 0 0 0 .9-1.78 3.38 3.38 0 0 0-4.27 1.07 1 1 0 0 0 .25 1.4Zm11.75-.25a1 1 0 1 0 1.64-1.14 3.34 3.34 0 0 0-4.27-1.07 1 1 0 1 0 .9 1.78 1.38 1.38 0 0 1 1.73.43Z",
                    clipRule: "evenodd",
                    className: d,
                }),
            });
        },
    },
);
