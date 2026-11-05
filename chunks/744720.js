l.r(e);
var s = l(477900);
l(582128);
var i = l(646514),
    t = l(996682),
    d = l(27989);
l.d(
    e,
    {},
    {
        EmojiConfusedFaceIcon: function (a) {
            let {
                    size: e = "md",
                    width: l,
                    height: h,
                    color: c = i.A.colors.INTERACTIVE_ICON_DEFAULT,
                    colorClass: n = "",
                    ...o
                } = a,
                r = (0, d.J)(e),
                p = r?.width ?? l,
                u = r?.height ?? h;
            return (0, s.jsx)("svg", {
                ...(0, t.A)(o),
                xmlns: "http://www.w3.org/2000/svg",
                width: p,
                height: u,
                fill: "none",
                viewBox: "0 0 24 24",
                children: (0, s.jsx)("path", {
                    fill: "string" == typeof c ? c : c.css,
                    fillRule: "evenodd",
                    d: "M12 23a11 11 0 1 0 0-22 11 11 0 0 0 0 22ZM6.5 13a1.5 1.5 0 0 0 .86-2.73l.96-.32a1 1 0 1 0-.64-1.9l-3 1a1 1 0 0 0 .4 1.95 1.5 1.5 0 0 0 1.42 2ZM19 11.5a1.5 1.5 0 1 1-2.36-1.23l-.96-.32a1 1 0 1 1 .64-1.9l3 1a1 1 0 0 1-.4 1.95c.05.15.08.32.08.5ZM12.42 15a7 7 0 0 0-3.13.74l-.74.37a1 1 0 1 0 .9 1.78l.73-.36a5 5 0 0 1 2.24-.53H15a1 1 0 1 0 0-2h-2.58Z",
                    clipRule: "evenodd",
                    className: n,
                }),
            });
        },
    },
);
