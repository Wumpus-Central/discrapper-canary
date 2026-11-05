i.r(s);
var t = i(477900);
i(582128);
var h = i(646514),
    e = i(996682),
    r = i(27989);
i.d(
    s,
    {},
    {
        MaximizeIcon: function (a) {
            let {
                    size: s = "md",
                    width: i,
                    height: c,
                    color: l = h.A.colors.INTERACTIVE_ICON_DEFAULT,
                    colorClass: n = "",
                    ...d
                } = a,
                o = (0, r.J)(s),
                p = o?.width ?? i,
                w = o?.height ?? c;
            return (0, t.jsx)("svg", {
                ...(0, e.A)(d),
                xmlns: "http://www.w3.org/2000/svg",
                width: p,
                height: w,
                fill: "none",
                viewBox: "0 0 24 24",
                children: (0, t.jsx)("path", {
                    fill: "string" == typeof l ? l : l.css,
                    d: "M14 3a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v6a1 1 0 1 1-2 0V5.41l-5.3 5.3a1 1 0 0 1-1.4-1.42L18.58 4H15a1 1 0 0 1-1-1ZM5.41 20H9a1 1 0 1 1 0 2H3a1 1 0 0 1-1-1v-6a1 1 0 1 1 2 0v3.59l5.3-5.3a1 1 0 0 1 1.4 1.42L5.42 20Z",
                    className: n,
                }),
            });
        },
    },
);
