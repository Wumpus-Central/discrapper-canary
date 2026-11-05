s.r(i);
var c = s(477900);
s(582128);
var t = s(646514),
    a = s(996682),
    d = s(27989);
s.d(
    i,
    {},
    {
        EmojiTiredFaceIcon: function (e) {
            let {
                    size: i = "md",
                    width: s,
                    height: h,
                    color: l = t.A.colors.INTERACTIVE_ICON_DEFAULT,
                    colorClass: n = "",
                    ...o
                } = e,
                r = (0, d.J)(i),
                p = r?.width ?? s,
                w = r?.height ?? h;
            return (0, c.jsx)("svg", {
                ...(0, a.A)(o),
                xmlns: "http://www.w3.org/2000/svg",
                width: p,
                height: w,
                fill: "none",
                viewBox: "0 0 24 24",
                children: (0, c.jsx)("path", {
                    fill: "string" == typeof l ? l : l.css,
                    fillRule: "evenodd",
                    d: "M12 23a11 11 0 1 0 0-22 11 11 0 0 0 0 22Zm2.5-5c.55 0 1.01-.46.86-.99a3.5 3.5 0 0 0-6.72 0c-.15.53.3.99.86.99h5Zm-9.07-5.18a1 1 0 0 0 1.4-.25c.23-.34.63-.57 1.1-.57.23 0 .44.05.62.14a1 1 0 0 0 .9-1.78 3.38 3.38 0 0 0-4.27 1.07 1 1 0 0 0 .25 1.4Zm11.75-.25a1 1 0 1 0 1.64-1.14 3.34 3.34 0 0 0-4.27-1.07 1 1 0 1 0 .9 1.78 1.38 1.38 0 0 1 1.73.43Z",
                    clipRule: "evenodd",
                    className: n,
                }),
            });
        },
    },
);
