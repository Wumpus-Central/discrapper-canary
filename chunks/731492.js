s.r(l);
var e = s(477900);
s(582128);
var h = s(646514),
    i = s(996682),
    t = s(27989);
s.d(
    l,
    {},
    {
        EmojiSalutingFaceIcon: function (a) {
            let {
                    size: l = "md",
                    width: s,
                    height: c,
                    color: d = h.A.colors.INTERACTIVE_ICON_DEFAULT,
                    colorClass: n = "",
                    ...o
                } = a,
                p = (0, t.J)(l),
                r = p?.width ?? s,
                u = p?.height ?? c;
            return (0, e.jsxs)("svg", {
                ...(0, i.A)(o),
                xmlns: "http://www.w3.org/2000/svg",
                width: r,
                height: u,
                fill: "none",
                viewBox: "0 0 24 24",
                children: [
                    (0, e.jsx)("path", {
                        fill: "string" == typeof d ? d : d.css,
                        d: "M1.84 4.08 9 .5a1.12 1.12 0 1 1 1 2L5 5v.7c0 .36.4.6.72.44l2.9-1.45a.95.95 0 0 1 1.02 1.6L5.42 9.67a3.33 3.33 0 1 1-3.58-5.6Z",
                        className: n,
                    }),
                    (0, e.jsx)("path", {
                        fill: "string" == typeof d ? d : d.css,
                        fillRule: "evenodd",
                        d: "M11.5 3.9c.84-.71 1.25-1.81 1.08-2.88A11 11 0 1 1 1 11.86c.94.45 2 .64 3.07.5A1 1 0 0 0 5 13h.09a1.5 1.5 0 1 0 2.82 0H8a1 1 0 1 0 0-2H6.95l3.94-3.15a2.95 2.95 0 0 0 .61-3.96Zm6 11.1a1.5 1.5 0 0 0 1.41-2H19a1 1 0 1 0 0-2h-3a1 1 0 1 0 0 2h.09a1.5 1.5 0 0 0 1.41 2Zm-9.19 2.05a1 1 0 0 0-.63 1.9L8 18l-.32.95h.04a5.13 5.13 0 0 0 .3.1 17.52 17.52 0 0 0 3.98.45 17.52 17.52 0 0 0 4.22-.52l.06-.02h.02l.01-.01L16 18l.32.95a1 1 0 0 0-.63-1.9h-.03l-.01.01a5.35 5.35 0 0 1-.9.2 15.53 15.53 0 0 1-6.44-.21Z",
                        clipRule: "evenodd",
                        className: n,
                    }),
                ],
            });
        },
    },
);
