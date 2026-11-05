e.r(c);
var h = e(477900);
e(582128);
var i = e(646514),
    t = e(996682),
    l = e(27989);
e.d(
    c,
    {},
    {
        PanelOpenIcon: function (s) {
            let {
                    size: c = "md",
                    width: e,
                    height: n,
                    color: d = i.A.colors.INTERACTIVE_ICON_DEFAULT,
                    colorClass: p = "",
                    ...a
                } = s,
                o = (0, l.J)(c),
                r = o?.width ?? e,
                v = o?.height ?? n;
            return (0, h.jsxs)("svg", {
                ...(0, t.A)(a),
                xmlns: "http://www.w3.org/2000/svg",
                width: r,
                height: v,
                fill: "none",
                viewBox: "0 0 24 24",
                children: [
                    (0, h.jsx)("path", {
                        fill: "string" == typeof d ? d : d.css,
                        d: "M12 8.63c0-.63.5-1.13 1.1-1.13h4.4c.6 0 1.1.5 1.1 1.13v6.74c0 .63-.5 1.13-1.1 1.13h-4.4c-.6 0-1.1-.5-1.1-1.13V8.63Z",
                        className: p,
                    }),
                    (0, h.jsx)("path", {
                        fill: "string" == typeof d ? d : d.css,
                        fillRule: "evenodd",
                        d: "M19.7 21H4.13A3.34 3.34 0 0 1 1 17.62V6.38A3.34 3.34 0 0 1 4.3 3h15.4C21.52 3 23 4.51 23 6.38v11.25c0 1.8-1.39 3.28-3.13 3.37h-.17Zm0-2.25H4.3c-.6 0-1.1-.5-1.1-1.13V6.38c0-.62.5-1.12 1.1-1.12h15.4c.6 0 1.1.5 1.1 1.13v11.25c0 .62-.5 1.12-1.1 1.12Z",
                        clipRule: "evenodd",
                        className: p,
                    }),
                ],
            });
        },
    },
);
