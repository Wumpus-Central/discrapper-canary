e.r(s);
var a = e(477900);
e(582128);
var i = e(646514),
    t = e(996682),
    h = e(27989);
e.d(
    s,
    {},
    {
        ExperimentalBannerIcon: function (l) {
            let {
                    size: s = "md",
                    width: e,
                    height: n,
                    color: c = i.A.colors.INTERACTIVE_ICON_DEFAULT,
                    colorClass: d = "",
                    ...r
                } = l,
                p = (0, h.J)(s),
                o = p?.width ?? e,
                w = p?.height ?? n;
            return (0, a.jsxs)("svg", {
                ...(0, t.A)(r),
                xmlns: "http://www.w3.org/2000/svg",
                width: o,
                height: w,
                fill: "none",
                viewBox: "0 0 24 24",
                children: [
                    (0, a.jsx)("path", {
                        fill: "string" == typeof c ? c : c.css,
                        fillRule: "evenodd",
                        d: "M21 14.01a4 4 0 0 1-1.77 3.32l-6.67 4.5a1 1 0 0 1-1.12 0l-6.67-4.5A4 4 0 0 1 3 14.01V6.04h18v7.97Zm-8.45-5.75a.58.58 0 0 0-1.1 0l-.88 2.72H7.72c-.56 0-.8.72-.34 1.05l2.31 1.7-.88 2.73c-.17.54.44.98.9.65L12 15.42l2.3 1.69a.58.58 0 0 0 .89-.65l-.88-2.73 2.31-1.7a.58.58 0 0 0-.34-1.05h-2.85l-.88-2.72Z",
                        clipRule: "evenodd",
                        className: d,
                    }),
                    (0, a.jsx)("path", {
                        fill: "string" == typeof c ? c : c.css,
                        d: "M20.99 2a1.01 1.01 0 0 1 0 2.02H3.01a1.01 1.01 0 0 1 0-2.02h17.98Z",
                        className: d,
                    }),
                ],
            });
        },
    },
);
