e.r(l);
var a = e(477900);
e(582128);
var i = e(646514),
    t = e(996682),
    h = e(27989);
e.d(
    l,
    {},
    {
        MedalIcon: function (s) {
            let {
                    size: l = "md",
                    width: e,
                    height: c,
                    color: d = i.A.colors.INTERACTIVE_ICON_DEFAULT,
                    colorClass: n = "",
                    ...o
                } = s,
                p = (0, h.J)(l),
                r = p?.width ?? e,
                w = p?.height ?? c;
            return (0, a.jsxs)("svg", {
                ...(0, t.A)(o),
                xmlns: "http://www.w3.org/2000/svg",
                width: r,
                height: w,
                fill: "none",
                viewBox: "0 0 24 24",
                children: [
                    (0, a.jsx)("path", {
                        fill: "string" == typeof d ? d : d.css,
                        d: "M17.34 11.06c-.18.28-.56.32-.8.1-.34-.28-.7-.53-1.08-.75a.52.52 0 0 1-.19-.18l-1.95-3.25a.5.5 0 0 1 0-.51l2.1-3.5A2 2 0 0 1 17.13 2h3.16a1.5 1.5 0 0 1 1.28 2.3l-4.23 6.76ZM3.7 2h3.17a2 2 0 0 1 1.71.97L12 8.67l.25.41c.1.18-.03.42-.25.42-1.73 0-3.31.63-4.54 1.67-.24.2-.62.17-.8-.1L2.43 4.28C1.81 3.3 2.53 2 3.71 2ZM12 19a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z",
                        className: n,
                    }),
                    (0, a.jsx)("path", {
                        fill: "string" == typeof d ? d : d.css,
                        fillRule: "evenodd",
                        d: "M12 22a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11Zm0-2a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7Z",
                        clipRule: "evenodd",
                        className: n,
                    }),
                ],
            });
        },
    },
);
