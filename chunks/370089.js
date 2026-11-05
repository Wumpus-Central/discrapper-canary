t.r(a);
var h = t(477900);
t(582128);
var c = t(646514),
    i = t(996682),
    e = t(27989);
t.d(
    a,
    {},
    {
        UserRetryIcon: function (s) {
            let {
                    size: a = "md",
                    width: t,
                    height: r,
                    color: l = c.A.colors.INTERACTIVE_ICON_DEFAULT,
                    colorClass: n = "",
                    ...p
                } = s,
                d = (0, e.J)(a),
                o = d?.width ?? t,
                w = d?.height ?? r;
            return (0, h.jsxs)("svg", {
                ...(0, i.A)(p),
                xmlns: "http://www.w3.org/2000/svg",
                width: o,
                height: w,
                fill: "none",
                viewBox: "0 0 24 24",
                children: [
                    (0, h.jsx)("path", {
                        fill: "string" == typeof l ? l : l.css,
                        d: "M19 16a3 3 0 1 0 1.98 5.25 1 1 0 1 1 1.33 1.5A4.98 4.98 0 0 1 14 19a5 5 0 0 1 8-4 1 1 0 0 1 2 0v3a1 1 0 0 1-1 1h-3a1 1 0 0 1 0-2h1.24A3 3 0 0 0 19 16Z",
                        className: n,
                    }),
                    (0, h.jsx)("path", {
                        fill: "string" == typeof l ? l : l.css,
                        d: "M16.08 11.7c.41.18.36.77-.05.96a7 7 0 0 0-3.65 8.6c.11.36-.13.74-.5.74H6.15a.5.5 0 0 1-.5-.55l.27-2.6c.02-.26-.27-.37-.41-.16-.48.74-1.03 1.8-1.32 2.9a.53.53 0 0 1-.5.41h-.22C2.66 22 2 21.34 2 20.53A9.53 9.53 0 0 1 11.53 11h.94c1.28 0 2.5.25 3.61.7ZM16 6a4 4 0 1 1-8 0 4 4 0 0 1 8 0Z",
                        className: n,
                    }),
                ],
            });
        },
    },
);
