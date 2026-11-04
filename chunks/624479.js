var h = t(477900);
t(582128);
var i = t(646514),
    e = t(996682),
    l = t(27989);
t.d(
    a,
    {},
    {
        CopyIcon: function (s) {
            let {
                    size: a = "md",
                    width: t,
                    height: c,
                    color: p = i.A.colors.INTERACTIVE_ICON_DEFAULT,
                    colorClass: n = "",
                    ...o
                } = s,
                r = (0, l.J)(a),
                d = r?.width ?? t,
                v = r?.height ?? c;
            return (0, h.jsxs)("svg", {
                ...(0, e.A)(o),
                xmlns: "http://www.w3.org/2000/svg",
                width: d,
                height: v,
                fill: "none",
                viewBox: "0 0 24 24",
                children: [
                    (0, h.jsx)("path", {
                        fill: "string" == typeof p ? p : p.css,
                        d: "M3 16a1 1 0 0 1-1-1v-5a8 8 0 0 1 8-8h5a1 1 0 0 1 1 1v.5a.5.5 0 0 1-.5.5H10a6 6 0 0 0-6 6v5.5a.5.5 0 0 1-.5.5H3Z",
                        className: n,
                    }),
                    (0, h.jsx)("path", {
                        fill: "string" == typeof p ? p : p.css,
                        d: "M6 18a4 4 0 0 0 4 4h8a4 4 0 0 0 4-4v-4h-3a5 5 0 0 1-5-5V6h-4a4 4 0 0 0-4 4v8Z",
                        className: n,
                    }),
                    (0, h.jsx)("path", {
                        fill: "string" == typeof p ? p : p.css,
                        d: "M21.73 12a3 3 0 0 0-.6-.88l-4.25-4.24a3 3 0 0 0-.88-.61V9a3 3 0 0 0 3 3h2.73Z",
                        className: n,
                    }),
                ],
            });
        },
    },
);
