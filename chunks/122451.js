a.r(c);
var i = a(477900);
a(582128);
var s = a(646514),
    t = a(996682),
    h = a(27989);
a.d(
    c,
    {},
    {
        EmojiWearyFaceIcon: function (e) {
            let {
                    size: c = "md",
                    width: a,
                    height: d,
                    color: l = s.A.colors.INTERACTIVE_ICON_DEFAULT,
                    colorClass: n = "",
                    ...o
                } = e,
                r = (0, h.J)(c),
                p = r?.width ?? a,
                w = r?.height ?? d;
            return (0, i.jsx)("svg", {
                ...(0, t.A)(o),
                xmlns: "http://www.w3.org/2000/svg",
                width: p,
                height: w,
                fill: "none",
                viewBox: "0 0 24 24",
                children: (0, i.jsx)("path", {
                    fill: "string" == typeof l ? l : l.css,
                    fillRule: "evenodd",
                    d: "M12 23a11 11 0 1 0 0-22 11 11 0 0 0 0 22Zm3.1-5c.55 0 1.01-.45.88-.98A4.09 4.09 0 0 0 12 14a4.09 4.09 0 0 0-3.98 3.02c-.13.53.33.98.87.98h6.22ZM9.43 9.1a1 1 0 0 0-1.33.48c-.46 1-1.13 1.42-1.67 1.42-.27 0-.54-.1-.82-.3a1 1 0 0 0-1.2 1.6c.57.43 1.26.7 2.02.7 1.61 0 2.84-1.18 3.49-2.58a1 1 0 0 0-.5-1.33Zm6.49.48a1 1 0 0 0-1.82.84c.65 1.4 1.88 2.58 3.49 2.58.76 0 1.45-.27 2.02-.7a1 1 0 0 0-1.2-1.6c-.28.2-.55.3-.82.3-.54 0-1.2-.41-1.67-1.42Z",
                    clipRule: "evenodd",
                    className: n,
                }),
            });
        },
    },
);
