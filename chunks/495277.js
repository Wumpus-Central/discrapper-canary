l.r(e);
var s = l(477900);
l(582128);
var i = l(646514),
    t = l(996682),
    c = l(27989);
l.d(
    e,
    {},
    {
        EmojiNauseatedFaceIcon: function (a) {
            let {
                    size: e = "md",
                    width: l,
                    height: d,
                    color: h = i.A.colors.INTERACTIVE_ICON_DEFAULT,
                    colorClass: n = "",
                    ...o
                } = a,
                r = (0, c.J)(e),
                p = r?.width ?? l,
                u = r?.height ?? d;
            return (0, s.jsx)("svg", {
                ...(0, t.A)(o),
                xmlns: "http://www.w3.org/2000/svg",
                width: p,
                height: u,
                fill: "none",
                viewBox: "0 0 24 24",
                children: (0, s.jsx)("path", {
                    fill: "string" == typeof h ? h : h.css,
                    fillRule: "evenodd",
                    d: "M12 23a11 11 0 1 0 0-22 11 11 0 0 0 0 22Zm3.5-13A1.5 1.5 0 0 0 17 8.41l.3.3a1 1 0 1 0 1.4-1.42l-2-2a1 1 0 1 0-1.4 1.42l.29.3L15.5 7a1.5 1.5 0 0 0 0 3ZM10 8.5a1.5 1.5 0 1 1-3-.09l-.3.3a1 1 0 0 1-1.4-1.42l2-2a1 1 0 0 1 1.4 1.42l-.29.3L8.5 7c.83 0 1.5.67 1.5 1.5Zm4.47 4.12a1 1 0 0 1 .07.04c.37-.4.85-.7 1.4-.85a1 1 0 0 1 .53 1.93 1 1 0 0 0-.71 1.23 1 1 0 1 1-1.93.51 3 3 0 0 1-.1-1.02 1 1 0 0 1-.2-.08 3.27 3.27 0 0 0-3.06 0 1 1 0 0 1-.2.08 3 3 0 0 1-.1 1.02 1 1 0 0 1-1.93-.51 1 1 0 0 0-.7-1.23 1 1 0 0 1 .51-1.93c.56.15 1.04.45 1.41.85l.07-.04a5.27 5.27 0 0 1 4.94 0Z",
                    clipRule: "evenodd",
                    className: n,
                }),
            });
        },
    },
);
