h.r(s);
var l = h(477900);
h(582128);
var t = h(646514),
    c = h(996682),
    i = h(27989);
h.d(
    s,
    {},
    {
        ExperimentalBannerPlusIcon: function (a) {
            let {
                    size: s = "md",
                    width: h,
                    height: e,
                    color: n = t.A.colors.INTERACTIVE_ICON_DEFAULT,
                    colorClass: r = "",
                    ...p
                } = a,
                d = (0, i.J)(s),
                o = d?.width ?? h,
                v = d?.height ?? e;
            return (0, l.jsxs)("svg", {
                ...(0, c.A)(p),
                xmlns: "http://www.w3.org/2000/svg",
                width: o,
                height: v,
                fill: "none",
                viewBox: "0 0 24 24",
                children: [
                    (0, l.jsx)("path", {
                        d: "M3.01 4.02a1.01 1.01 0 0 1 0-2.02h17.98a1.01 1.01 0 0 1 0 2.02H3.01ZM12.56 21.83a1 1 0 0 1-1.12 0l-6.67-4.5A4 4 0 0 1 3 14.01V6.04h18v5.6c0 .44-.55.7-.95.55A3 3 0 0 0 16 15v.5a.5.5 0 0 1-.5.5h-.28c-.1 0-.2-.07-.24-.17l-.67-2.1 2.31-1.7a.58.58 0 0 0-.34-1.05h-2.85l-.88-2.72a.58.58 0 0 0-1.1 0l-.88 2.72H7.72c-.56 0-.8.72-.34 1.05l2.31 1.7-.88 2.73c-.17.54.44.98.9.65L12 15.42l1.12.82c.14.1.13.32 0 .43a2.99 2.99 0 0 0-.43 4.24c.22.27.21.69-.07.88l-.06.04Z",
                        fill: "string" == typeof n ? n : n.css,
                        className: r,
                    }),
                    (0, l.jsx)("path", {
                        d: "M19 24a1 1 0 0 1-1-1v-3h-3a1 1 0 1 1 0-2h3v-3a1 1 0 1 1 2 0v3h3a1 1 0 0 1 0 2h-3v3a1 1 0 0 1-1 1Z",
                        fill: "string" == typeof n ? n : n.css,
                        className: r,
                    }),
                ],
            });
        },
    },
);
