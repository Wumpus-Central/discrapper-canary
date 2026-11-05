t.r(e);
var i = t(477900);
t(582128);
var a = t(646514),
    h = t(996682),
    l = t(27989);
t.d(
    e,
    {},
    {
        ChatDotsIcon: function (s) {
            let {
                    size: e = "md",
                    width: t,
                    height: d,
                    color: n = a.A.colors.INTERACTIVE_ICON_DEFAULT,
                    colorClass: o = "",
                    ...c
                } = s,
                r = (0, l.J)(e),
                p = r?.width ?? t,
                w = r?.height ?? d;
            return (0, i.jsx)("svg", {
                ...(0, h.A)(c),
                xmlns: "http://www.w3.org/2000/svg",
                width: p,
                height: w,
                fill: "none",
                viewBox: "0 0 24 24",
                children: (0, i.jsx)("path", {
                    fill: "string" == typeof n ? n : n.css,
                    fillRule: "evenodd",
                    d: "M22 12a10 10 0 0 1-10 10H2.2a1 1 0 0 1-.75-1.66l2.06-2.37a.52.52 0 0 0 .04-.61A10 10 0 1 1 22 12Zm-10 2a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm7-2a2 2 0 1 1-4 0 2 2 0 0 1 4 0ZM7 14a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z",
                    clipRule: "evenodd",
                    className: o,
                }),
            });
        },
    },
);
