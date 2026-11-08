c.r(t);
var i = c(477900);
c(582128);
var n = c(646514),
    r = c(996682),
    s = c(27989);
c.d(
    t,
    {},
    {
        BluetoothIcon: function (e) {
            let {
                    size: t = "md",
                    width: c,
                    height: o,
                    color: a = n.A.colors.INTERACTIVE_ICON_DEFAULT,
                    colorClass: l = "",
                    ...d
                } = e,
                u = (0, s.J)(t),
                I = u?.width ?? c,
                g = u?.height ?? o;
            return (0, i.jsx)("svg", {
                ...(0, r.A)(d),
                xmlns: "http://www.w3.org/2000/svg",
                width: I,
                height: g,
                fill: "none",
                viewBox: "0 0 24 24",
                children: (0, i.jsx)("path", {
                    fill: "string" == typeof a ? a : a.css,
                    fillRule: "evenodd",
                    d: "M11.62 2.08a1 1 0 0 1 1.09.21l5 5a1 1 0 0 1-.09 1.5L13.6 12l4.02 3.22a1 1 0 0 1 .09 1.49l-5 5A1 1 0 0 1 11 21v-6.92l-3.38 2.7a1 1 0 0 1-1.24-1.56L10.4 12 6.38 8.78a1 1 0 0 1 1.24-1.56L11 9.92V3a1 1 0 0 1 .62-.92Zm1.38 12 2.5 2-2.5 2.5v-4.5Zm0-4.16v-4.5l2.5 2.5-2.5 2Z",
                    clipRule: "evenodd",
                    className: l,
                }),
            });
        },
    },
);
