i.r(s);
var h = i(477900);
i(582128);
var a = i(646514),
    e = i(996682),
    o = i(27989);
i.d(
    s,
    {},
    {
        EmojiFaceWithoutMouthIcon: function (t) {
            let {
                    size: s = "md",
                    width: i,
                    height: c,
                    color: r = a.A.colors.INTERACTIVE_ICON_DEFAULT,
                    colorClass: n = "",
                    ...d
                } = t,
                p = (0, o.J)(s),
                l = p?.width ?? i,
                w = p?.height ?? c;
            return (0, h.jsx)("svg", {
                ...(0, e.A)(d),
                xmlns: "http://www.w3.org/2000/svg",
                width: l,
                height: w,
                fill: "none",
                viewBox: "0 0 24 24",
                children: (0, h.jsx)("path", {
                    fill: "string" == typeof r ? r : r.css,
                    d: "M12 1a11 11 0 1 1 0 22 11 11 0 0 1 0-22Zm-5.5 9a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3Zm11 0a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3Z",
                    className: n,
                }),
            });
        },
    },
);
