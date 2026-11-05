e.r(s);
var v = e(477900);
e(582128);
var t = e(646514),
    a = e(996682),
    i = e(27989);
e.d(
    s,
    {},
    {
        ScreenSystemRequirementsIcon: function (h) {
            let {
                    size: s = "md",
                    width: e,
                    height: c,
                    color: l = t.A.colors.INTERACTIVE_ICON_DEFAULT,
                    colorClass: n = "",
                    ...d
                } = h,
                r = (0, i.J)(s),
                p = r?.width ?? e,
                o = r?.height ?? c;
            return (0, v.jsxs)("svg", {
                ...(0, a.A)(d),
                xmlns: "http://www.w3.org/2000/svg",
                width: p,
                height: o,
                fill: "none",
                viewBox: "0 0 24 24",
                children: [
                    (0, v.jsx)("path", {
                        fill: "string" == typeof l ? l : l.css,
                        d: "M9 9V7h2v2H9ZM13 9v2h-2V9h2ZM9 9v2H7V9h2ZM13 9h2v2h2V9h-2V7h-2v2Z",
                        className: n,
                    }),
                    (0, v.jsx)("path", {
                        fill: "string" == typeof l ? l : l.css,
                        fillRule: "evenodd",
                        d: "M2 5a3 3 0 0 1 3-3h14a3 3 0 0 1 3 3v8a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3V5Zm3 0h2v2H5V5Zm4 2H7v2H5v2h2v2h2v-2h2v2h2v-2h2v2h2v-2h2V9h-2V7h2V5h-2v2h-2V5h-2v2h-2V5H9v2Z",
                        clipRule: "evenodd",
                        className: n,
                    }),
                    (0, v.jsx)("path", {
                        fill: "string" == typeof l ? l : l.css,
                        d: "M13 19.5c0 .28.22.5.5.5H15a1 1 0 1 1 0 2H9a1 1 0 1 1 0-2h1.5a.5.5 0 0 0 .5-.5v-2c0-.28.22-.5.5-.5h1c.28 0 .5.22.5.5v2Z",
                        className: n,
                    }),
                ],
            });
        },
    },
);
