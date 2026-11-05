t.r(i);
var c = t(477900);
t(582128);
var e = t(646514),
    h = t(996682),
    l = t(27989);
t.d(
    i,
    {},
    {
        BoostTier2SimpleIcon: function (s) {
            let {
                    size: i = "md",
                    width: t,
                    height: r,
                    color: o = e.A.colors.INTERACTIVE_ICON_DEFAULT,
                    colorClass: n = "",
                    ...p
                } = s,
                a = (0, l.J)(i),
                d = a?.width ?? t,
                w = a?.height ?? r;
            return (0, c.jsx)("svg", {
                ...(0, h.A)(p),
                xmlns: "http://www.w3.org/2000/svg",
                width: d,
                height: w,
                fill: "none",
                viewBox: "0 0 24 24",
                children: (0, c.jsx)("path", {
                    fill: "string" == typeof o ? o : o.css,
                    d: "M10.95 1.4a1.59 1.59 0 0 1 2.1 0l4.9 4A3.37 3.37 0 0 1 19 8v8c0 1.07-.4 2.06-1.05 2.6l-4.9 4c-.65.53-1.45.53-2.1 0l-4.9-4A3.37 3.37 0 0 1 5 16V8c0-1.07.4-2.06 1.05-2.6l4.9-4Z",
                    className: n,
                }),
            });
        },
    },
);
