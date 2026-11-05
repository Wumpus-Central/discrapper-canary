i.r(t);
var h = i(477900);
i(582128);
var a = i(646514),
    e = i(996682),
    c = i(27989);
i.d(
    t,
    {},
    {
        EmojiFaceWithOpenMouthIcon: function (s) {
            let {
                    size: t = "md",
                    width: i,
                    height: n,
                    color: o = a.A.colors.INTERACTIVE_ICON_DEFAULT,
                    colorClass: r = "",
                    ...p
                } = s,
                d = (0, c.J)(t),
                l = d?.width ?? i,
                w = d?.height ?? n;
            return (0, h.jsx)("svg", {
                ...(0, e.A)(p),
                xmlns: "http://www.w3.org/2000/svg",
                width: l,
                height: w,
                fill: "none",
                viewBox: "0 0 24 24",
                children: (0, h.jsx)("path", {
                    fill: "string" == typeof o ? o : o.css,
                    d: "M12 1a11 11 0 1 1 0 22 11 11 0 0 1 0-22Zm0 12a3 3 0 1 0 0 6 3 3 0 0 0 0-6ZM7.5 9a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3Zm9 0a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3Z",
                    className: r,
                }),
            });
        },
    },
);
