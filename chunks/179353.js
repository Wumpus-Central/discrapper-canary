e.r(s);
var h = e(477900);
e(582128);
var i = e(646514),
    t = e(996682),
    c = e(27989);
e.d(
    s,
    {},
    {
        StickerPlusIcon: function (a) {
            let {
                    size: s = "md",
                    width: e,
                    height: l,
                    color: d = i.A.colors.INTERACTIVE_ICON_DEFAULT,
                    colorClass: n = "",
                    ...r
                } = a,
                o = (0, c.J)(s),
                p = o?.width ?? e,
                v = o?.height ?? l;
            return (0, h.jsxs)("svg", {
                ...(0, t.A)(r),
                xmlns: "http://www.w3.org/2000/svg",
                width: p,
                height: v,
                fill: "none",
                viewBox: "0 0 24 24",
                children: [
                    (0, h.jsx)("path", {
                        d: "M19 14a1 1 0 0 1 1 1v3h3a1 1 0 1 1 0 2h-3v3a1 1 0 1 1-2 0v-3h-3a1 1 0 1 1 0-2h3v-3a1 1 0 0 1 1-1Z",
                        fill: "string" == typeof d ? d : d.css,
                        className: n,
                    }),
                    (0, h.jsx)("path", {
                        fillRule: "evenodd",
                        d: "M21.6 13.54c.05.1.4.05.4-.07V6a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v12a4 4 0 0 0 4 4 11298.86 11298.86 0 0 0 7.76 0c.12 0 .17-.3.06-.36-1-.5-1.82-1.44-1.82-2.64a3 3 0 0 1 3-3h.5a.5.5 0 0 0 .5-.5V15a3 3 0 0 1 3-3c1.17 0 2.08.6 2.6 1.54ZM6.5 10a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3ZM19 8.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Zm-9.91 2.94a1 1 0 0 0-1.66 1.12 5.5 5.5 0 0 0 9.14 0 1 1 0 0 0-1.66-1.12 3.5 3.5 0 0 1-5.82 0Z",
                        clipRule: "evenodd",
                        fill: "string" == typeof d ? d : d.css,
                        className: n,
                    }),
                ],
            });
        },
    },
);
