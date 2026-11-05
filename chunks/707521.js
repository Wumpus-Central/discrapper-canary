e.r(s);
var i = e(477900);
e(582128);
var l = e(646514),
    c = e(996682),
    t = e(27989);
e.d(
    s,
    {},
    {
        EmojiSkullIcon: function (a) {
            let {
                    size: s = "md",
                    width: e,
                    height: d,
                    color: h = l.A.colors.INTERACTIVE_ICON_DEFAULT,
                    colorClass: n = "",
                    ...o
                } = a,
                v = (0, t.J)(s),
                r = v?.width ?? e,
                p = v?.height ?? d;
            return (0, i.jsx)("svg", {
                ...(0, c.A)(o),
                xmlns: "http://www.w3.org/2000/svg",
                width: r,
                height: p,
                fill: "none",
                viewBox: "0 0 24 24",
                children: (0, i.jsx)("path", {
                    fill: "string" == typeof h ? h : h.css,
                    fillRule: "evenodd",
                    d: "M18.82 19.7c-.47.14-.82.55-.82 1.04v.76a1.5 1.5 0 0 1-3 0v-.75a.75.75 0 0 0-1.5 0v.75a1.5 1.5 0 0 1-3 0v-.75a.75.75 0 0 0-1.5 0v.75a1.5 1.5 0 0 1-3 0v-.76c0-.49-.35-.9-.82-1.04a4.47 4.47 0 0 1-2.5-1.84 11 11 0 1 1 18.63 0 4.47 4.47 0 0 1-2.5 1.84Zm-4.61-1.9c.18-.2.3-.45.27-.71-.1-.93-.52-3.09-2.48-3.09s-2.39 2.16-2.48 3.09c-.02.26.09.52.27.7a1 1 0 0 0 1.42 0l.44-.44c.2-.2.5-.2.7 0l.44.44a1 1 0 0 0 1.42 0ZM8 12.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Zm9.5 1.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z",
                    clipRule: "evenodd",
                    className: n,
                }),
            });
        },
    },
);
