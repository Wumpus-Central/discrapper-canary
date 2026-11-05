e.r(a);
var i = e(477900);
e(582128);
var t = e(646514),
    h = e(996682),
    c = e(27989);
e.d(
    a,
    {},
    {
        StickerMinusIcon: function (s) {
            let {
                    size: a = "md",
                    width: e,
                    height: l,
                    color: d = t.A.colors.INTERACTIVE_ICON_DEFAULT,
                    colorClass: n = "",
                    ...r
                } = s,
                o = (0, c.J)(a),
                p = o?.width ?? e,
                u = o?.height ?? l;
            return (0, i.jsxs)("svg", {
                ...(0, h.A)(r),
                xmlns: "http://www.w3.org/2000/svg",
                width: p,
                height: u,
                fill: "none",
                viewBox: "0 0 24 24",
                children: [
                    (0, i.jsx)("path", {
                        fillRule: "evenodd",
                        d: "M18 2H6a4 4 0 0 0-4 4v12a4 4 0 0 0 4 4h7.73c.12 0 .16-.26.05-.31A2.88 2.88 0 0 1 12 19a3 3 0 0 1 3-3h6.4c.2 0 .39-.11.45-.3a3 3 0 0 0 .15-.94V6a4 4 0 0 0-4-4ZM6.5 10a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3ZM19 8.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Zm-9.91 2.94a1 1 0 0 0-1.66 1.12 5.5 5.5 0 0 0 9.14 0 1 1 0 0 0-1.66-1.12 3.5 3.5 0 0 1-5.82 0Z",
                        clipRule: "evenodd",
                        fill: "string" == typeof d ? d : d.css,
                        className: n,
                    }),
                    (0, i.jsx)("path", {
                        d: "M15 18a1 1 0 1 0 0 2h8a1 1 0 0 0 0-2h-8Z",
                        fill: "string" == typeof d ? d : d.css,
                        className: n,
                    }),
                ],
            });
        },
    },
);
