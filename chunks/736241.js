s.r(a);
var h = s(477900);
s(582128);
var i = s(646514),
    t = s(996682),
    c = s(27989);
s.d(
    a,
    {},
    {
        EmojiUnamusedFaceIcon: function (e) {
            let {
                    size: a = "md",
                    width: s,
                    height: d,
                    color: l = i.A.colors.INTERACTIVE_ICON_DEFAULT,
                    colorClass: n = "",
                    ...o
                } = e,
                r = (0, c.J)(a),
                p = r?.width ?? s,
                u = r?.height ?? d;
            return (0, h.jsx)("svg", {
                ...(0, t.A)(o),
                xmlns: "http://www.w3.org/2000/svg",
                width: p,
                height: u,
                fill: "none",
                viewBox: "0 0 24 24",
                children: (0, h.jsx)("path", {
                    fill: "string" == typeof l ? l : l.css,
                    fillRule: "evenodd",
                    d: "M12 23a11 11 0 1 0 0-22 11 11 0 0 0 0 22ZM6.5 13c.65 0 1.2-.42 1.41-1H8a1 1 0 1 0 0-2H5a1 1 0 1 0 0 2h.09c.2.58.76 1 1.41 1Zm12.41-1a1.5 1.5 0 0 1-2.82 0H16a1 1 0 1 1 0-2h3a1 1 0 1 1 0 2h-.09ZM8 15a1 1 0 1 0 0 2h8a1 1 0 1 0 0-2H8Z",
                    clipRule: "evenodd",
                    className: n,
                }),
            });
        },
    },
);
