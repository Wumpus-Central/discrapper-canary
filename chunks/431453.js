l.r(s);
var h = l(477900);
l(582128);
var e = l(646514),
    i = l(996682),
    t = l(27989);
l.d(
    s,
    {},
    {
        ReactionPlusIcon: function (a) {
            let {
                    size: s = "md",
                    width: l,
                    height: c,
                    color: d = e.A.colors.INTERACTIVE_ICON_DEFAULT,
                    colorClass: n = "",
                    ...o
                } = a,
                p = (0, t.J)(s),
                r = p?.width ?? l,
                v = p?.height ?? c;
            return (0, h.jsxs)("svg", {
                ...(0, i.A)(o),
                xmlns: "http://www.w3.org/2000/svg",
                width: r,
                height: v,
                fill: "none",
                viewBox: "0 0 24 24",
                children: [
                    (0, h.jsx)("path", {
                        fill: "string" == typeof d ? d : d.css,
                        d: "M19 14a1 1 0 0 1 .1 0l.05.01h.04l.01.01.07.02h.01l.06.02h.02A1 1 0 0 1 20 15v3h3a1 1 0 1 1 0 2h-3v3a1 1 0 1 1-2 0v-3h-3a1 1 0 0 1-.96-.72l-.01-.05A1 1 0 0 1 14 19a1.01 1.01 0 0 1 .35-.76l.02-.02a.95.95 0 0 1 .05-.04c.01 0 .02 0 .03-.02a.96.96 0 0 1 .06-.03l.02-.01.05-.03.04-.02a.98.98 0 0 1 .07-.02h.01a1 1 0 0 1 .2-.05H18v-3a1 1 0 0 1 1-1Z",
                        className: n,
                    }),
                    (0, h.jsx)("path", {
                        fill: "string" == typeof d ? d : d.css,
                        fillRule: "evenodd",
                        d: "M10.67 1.33a9.33 9.33 0 0 1 9.22 10.76c-.04.29-.34.45-.63.42L19 12.5a2.5 2.5 0 0 0-2.5 2.5v1a.5.5 0 0 1-.5.5h-1a2.5 2.5 0 0 0-2.49 2.24l-.01.26.01.26c.03.29-.13.59-.42.63a9.31 9.31 0 0 1-10.76-9.22 9.33 9.33 0 0 1 9.34-9.34Zm3.64 11.18a.85.85 0 0 0-1.17.23 2.97 2.97 0 0 1-4.94 0 .85.85 0 1 0-1.41.94 4.66 4.66 0 0 0 7.76 0 .85.85 0 0 0-.24-1.17ZM6 8.97a1.27 1.27 0 1 0 0 2.54 1.27 1.27 0 0 0 0-2.54Zm9.33 0a1.27 1.27 0 1 0 0 2.55 1.27 1.27 0 0 0 0-2.55Z",
                        clipRule: "evenodd",
                        className: n,
                    }),
                ],
            });
        },
    },
);
