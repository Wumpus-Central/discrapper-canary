s.r(i);
var t = s(477900);
s(582128);
var n = s(646514),
    a = s(996682),
    d = s(27989);
s.d(
    i,
    {},
    {
        EmojiFrowningFaceIcon: function (e) {
            let {
                    size: i = "md",
                    width: s,
                    height: h,
                    color: l = n.A.colors.INTERACTIVE_ICON_DEFAULT,
                    colorClass: o = "",
                    ...c
                } = e,
                r = (0, d.J)(i),
                p = r?.width ?? s,
                w = r?.height ?? h;
            return (0, t.jsx)("svg", {
                ...(0, a.A)(c),
                xmlns: "http://www.w3.org/2000/svg",
                width: p,
                height: w,
                fill: "none",
                viewBox: "0 0 24 24",
                children: (0, t.jsx)("path", {
                    fill: "string" == typeof l ? l : l.css,
                    fillRule: "evenodd",
                    d: "M12 23a11 11 0 1 0 0-22 11 11 0 0 0 0 22ZM6.5 13a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Zm11 0a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Zm-9.8 3.83a1 1 0 0 0 1.39-.27 3.5 3.5 0 0 1 5.82 0 1 1 0 0 0 1.66-1.12 5.5 5.5 0 0 0-9.14 0 1 1 0 0 0 .27 1.4Z",
                    clipRule: "evenodd",
                    className: o,
                }),
            });
        },
    },
);
