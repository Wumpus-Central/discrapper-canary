e.r(a);
var h = e(477900);
e(582128);
var i = e(646514),
    t = e(996682),
    l = e(27989);
e.d(
    a,
    {},
    {
        BrowserPlusIcon: function (s) {
            let {
                    size: a = "md",
                    width: e,
                    height: c,
                    color: d = i.A.colors.INTERACTIVE_ICON_DEFAULT,
                    colorClass: r = "",
                    ...n
                } = s,
                o = (0, l.J)(a),
                p = o?.width ?? e,
                v = o?.height ?? c;
            return (0, h.jsxs)("svg", {
                ...(0, t.A)(n),
                xmlns: "http://www.w3.org/2000/svg",
                width: p,
                height: v,
                fill: "none",
                viewBox: "0 0 24 24",
                children: [
                    (0, h.jsx)("path", {
                        fill: "string" == typeof d ? d : d.css,
                        fillRule: "evenodd",
                        d: "M20 3a3 3 0 0 1 3 3v9.5a.5.5 0 0 1-1 0V15a3 3 0 0 0-6 0 1 1 0 0 1-1 1 3 3 0 0 0-3 3c0 1.5 0 2-1.42 2H4a3 3 0 0 1-3-3V6a3 3 0 0 1 3-3h16ZM4 5a1 1 0 1 0 0 2 1 1 0 0 0 0-2Zm3 0a1 1 0 1 0 0 2 1 1 0 0 0 0-2Zm3 0a1 1 0 1 0 0 2 1 1 0 0 0 0-2Z",
                        clipRule: "evenodd",
                        className: r,
                    }),
                    (0, h.jsx)("path", {
                        fill: "string" == typeof d ? d : d.css,
                        d: "M19 14a1 1 0 0 1 1 1v3h3a1 1 0 0 1 0 2h-3v3a1 1 0 0 1-2 0v-3h-3a1 1 0 1 1 0-2h3v-3a1 1 0 0 1 1-1Z",
                        className: r,
                    }),
                ],
            });
        },
    },
);
