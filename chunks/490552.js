t.r(s);
var i = t(477900);
t(582128);
var v = t(996682),
    a = t(27989);
t.d(
    s,
    {},
    {
        MinecraftBrandIcon: function (h) {
            let {
                    size: s = "md",
                    width: t,
                    height: e,
                    color: l = "#52A535",
                    colorClass: c = "",
                    secondaryColor: p = "#000",
                    secondaryColorClass: n = "",
                    tertiaryColor: r = "#86D562",
                    tertiaryColorClass: d = "",
                    quaternaryColor: M = "#2A641C",
                    quaternaryColorClass: f = "",
                    ...V
                } = h,
                Z = (0, a.J)(s),
                o = Z?.width ?? t,
                g = Z?.height ?? e;
            return (0, i.jsxs)("svg", {
                ...(0, v.A)(V),
                xmlns: "http://www.w3.org/2000/svg",
                width: o,
                height: g,
                fill: "none",
                viewBox: "0 0 24 24",
                children: [
                    (0, i.jsx)("path", { fill: "string" == typeof l ? l : l.css, d: "M22 2H2v20h20V2Z", className: c }),
                    (0, i.jsx)("path", {
                        fill: "string" == typeof p ? p : p.css,
                        d: "M18 10V6h-4v4h-4v2H8v6h2v-2h4v2h2v-6h-2v-2h4Z",
                        className: n,
                    }),
                    (0, i.jsx)("path", { fill: "string" == typeof p ? p : p.css, d: "M10 6H6v4h4V6Z", className: n }),
                    (0, i.jsx)("path", {
                        fill: "string" == typeof r ? r : r.css,
                        d: "M18 10h-4v.33h4V10ZM14 16h-4v.33h4V16ZM16 18h-2v.33h2V18ZM10 18H8v.33h2V18ZM10 10H6v.33h4V10Z",
                        className: d,
                    }),
                    (0, i.jsx)("path", {
                        fill: "string" == typeof M ? M : M.css,
                        d: "M14 10h-4v.33h4V10ZM10 12H8v.33h2V12ZM16 12h-2v.33h2V12ZM18 6h-4v.33h4V6ZM10 6H6v.33h4V6Z",
                        className: f,
                    }),
                ],
            });
        },
    },
);
