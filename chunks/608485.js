e.r(s);
var i = e(477900);
e(582128);
var l = e(646514),
    t = e(996682),
    h = e(27989);
e.d(
    s,
    {},
    {
        StickerWink1Icon: function (a) {
            let {
                    size: s = "md",
                    width: e,
                    height: c,
                    color: d = l.A.colors.INTERACTIVE_ICON_DEFAULT,
                    colorClass: n = "",
                    ...r
                } = a,
                o = (0, h.J)(s),
                p = o?.width ?? e,
                v = o?.height ?? c;
            return (0, i.jsxs)("svg", {
                ...(0, t.A)(r),
                xmlns: "http://www.w3.org/2000/svg",
                width: p,
                height: v,
                fill: "none",
                viewBox: "0 0 24 24",
                children: [
                    (0, i.jsx)("path", {
                        fill: "string" == typeof d ? d : d.css,
                        fillRule: "evenodd",
                        d: "M6 2h12a4 4 0 0 1 4 4v7.5a.5.5 0 0 1-.5.5H19a5 5 0 0 0-5 5v2.5a.5.5 0 0 1-.5.5H6a4 4 0 0 1-4-4V6a4 4 0 0 1 4-4Zm11.5 8a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3ZM5.1 6.55a1 1 0 0 1 1.35-.44l3 1.5a1 1 0 0 1 0 1.78l-3 1.5a1 1 0 1 1-.9-1.78l1.21-.61-1.2-.6a1 1 0 0 1-.45-1.35Zm3.99 4.9a1 1 0 0 0-1.66 1.1 5.5 5.5 0 0 0 9.14 0 1 1 0 0 0-1.66-1.1 3.5 3.5 0 0 1-5.82 0Z",
                        clipRule: "evenodd",
                        className: n,
                    }),
                    (0, i.jsx)("path", {
                        fill: "string" == typeof d ? d : d.css,
                        d: "M21.66 16c.03 0 .05.03.04.06a3 3 0 0 1-.58.82l-4.24 4.24a3 3 0 0 1-.82.58.05.05 0 0 1-.06-.04V19a3 3 0 0 1 3-3h2.66Z",
                        className: n,
                    }),
                ],
            });
        },
    },
);
