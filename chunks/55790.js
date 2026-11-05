c.r(a);
var t = c(477900);
c(582128);
var i = c(646514),
    l = c(996682),
    h = c(27989);
c.d(
    a,
    {},
    {
        StageMinusIcon: function (s) {
            let {
                    size: a = "md",
                    width: c,
                    height: e,
                    color: p = i.A.colors.INTERACTIVE_ICON_DEFAULT,
                    colorClass: n = "",
                    ...r
                } = s,
                d = (0, h.J)(a),
                o = d?.width ?? c,
                f = d?.height ?? e;
            return (0, t.jsxs)("svg", {
                ...(0, l.A)(r),
                xmlns: "http://www.w3.org/2000/svg",
                width: o,
                height: f,
                fill: "none",
                viewBox: "0 0 24 24",
                children: [
                    (0, t.jsx)("path", {
                        fill: "string" == typeof p ? p : p.css,
                        d: "M6.33 20.03c-.25.72.12 1.5.8 1.84a10.95 10.95 0 0 0 7.97.69c.36-.1.27-.56-.1-.56a3 3 0 0 1-2.28-4.95c.3-.35.2-1-.25-1.03a6 6 0 0 0-6.14 4.01Z",
                        className: n,
                    }),
                    (0, t.jsx)("path", {
                        fill: "string" == typeof p ? p : p.css,
                        d: "M21.9 16c.21 0 .4-.13.47-.32A11 11 0 1 0 2.9 18.2c.34.5 1.05.51 1.46.07l.02-.02c.33-.36.34-.91.07-1.33a9 9 0 1 1 15.93-1.66c-.13.35.11.74.48.74h1.04Z",
                        className: n,
                    }),
                    (0, t.jsx)("path", {
                        fill: "string" == typeof p ? p : p.css,
                        d: "M16.83 15.23c.43.47 1.18.42 1.45-.14a7 7 0 1 0-12.57 0c.28.56 1.03.6 1.46.14l.05-.06c.3-.33.35-.81.17-1.23A4.98 4.98 0 0 1 12 7a5 5 0 0 1 4.6 6.94c-.17.42-.13.9.18 1.23l.05.06Z",
                        className: n,
                    }),
                    (0, t.jsx)("path", {
                        fill: "string" == typeof p ? p : p.css,
                        d: "M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM15 18a1 1 0 1 0 0 2h8a1 1 0 1 0 0-2h-8Z",
                        className: n,
                    }),
                ],
            });
        },
    },
);
