v.r(s);
var t = v(477900);
v(582128);
var i = v(646514),
    V = v(996682),
    a = v(27989);
v.d(
    s,
    {},
    {
        MinecraftNeutralIcon: function (h) {
            let {
                    size: s = "md",
                    width: v,
                    height: e,
                    color: M = i.A.colors.INTERACTIVE_ICON_DEFAULT,
                    colorClass: Z = "",
                    secondaryColor: l = "#000",
                    secondaryColorClass: c = "",
                    tertiaryColor: r = "#fff",
                    tertiaryColorClass: p = "",
                    ...n
                } = h,
                f = (0, a.J)(s),
                d = f?.width ?? v,
                o = f?.height ?? e;
            return (0, t.jsxs)("svg", {
                ...(0, V.A)(n),
                xmlns: "http://www.w3.org/2000/svg",
                width: d,
                height: o,
                fill: "none",
                viewBox: "0 0 24 24",
                children: [
                    (0, t.jsx)("path", {
                        fill: "string" == typeof M ? M : M.css,
                        d: "M2 2v20h20V2H2Zm16 8h-4v2h2v6h-2v-2h-4v2H8v-6h2v-2H6V6h4v4h4V6h4v4Z",
                        className: Z,
                    }),
                    (0, t.jsx)("path", {
                        fill: "string" == typeof M ? M : M.css,
                        d: "M10 18.33H8V18h2v.33ZM16 18.33h-2V18h2v.33ZM14 16.33h-4V16h4v.33ZM10 12.33H8V12h2v.33ZM16 12.33h-2V12h2v.33ZM18 10.33H6V10h12v.33ZM10 6v.33H6V6h4ZM18 6.33h-4V6h4v.33Z",
                        className: Z,
                    }),
                    (0, t.jsx)("path", {
                        fill: "string" == typeof l ? l : l.css,
                        d: "M14 10h-4v.33h4V10ZM10 12H8v.33h2V12ZM16 12h-2v.33h2V12ZM18 6h-4v.33h4V6ZM10 6H6v.33h4V6Z",
                        className: c,
                    }),
                    (0, t.jsx)("path", {
                        fill: "string" == typeof r ? r : r.css,
                        d: "M18 10h-4v.33h4V10ZM14 16h-4v.33h4V16ZM16 18h-2v.33h2V18ZM10 18H8v.33h2V18ZM10 10H6v.33h4V10Z",
                        className: p,
                    }),
                ],
            });
        },
    },
);
