h.r(e);
var i = h(477900);
h(582128);
var l = h(646514),
    t = h(996682),
    a = h(27989);
h.d(
    e,
    {},
    {
        EmoIcon: function (s) {
            let {
                    size: e = "md",
                    width: h,
                    height: c,
                    color: d = l.A.colors.INTERACTIVE_ICON_DEFAULT,
                    colorClass: n = "",
                    ...o
                } = s,
                p = (0, a.J)(e),
                r = p?.width ?? h,
                v = p?.height ?? c;
            return (0, i.jsxs)("svg", {
                ...(0, t.A)(o),
                xmlns: "http://www.w3.org/2000/svg",
                width: r,
                height: v,
                fill: "none",
                viewBox: "0 0 24 24",
                children: [
                    (0, i.jsx)("path", {
                        fill: "string" == typeof d ? d : d.css,
                        d: "M10.39 17.4a1 1 0 0 1 0 2h-.92a1 1 0 0 1 0-2h.92Z",
                        className: n,
                    }),
                    (0, i.jsx)("path", {
                        fill: "string" == typeof d ? d : d.css,
                        fillRule: "evenodd",
                        d: "M7.43 1.98A11 11 0 0 1 22.99 12h.02v7.57s0 .5-.36.5c-.19 0-.62-.5-1-1l.8 2.34a.6.6 0 0 1-.9.72l-1.71-1.16a1.3 1.3 0 0 0-1.48 0 11 11 0 1 1-10.93-19ZM3.68 12.52a.59.59 0 0 0-.6.66 9 9 0 0 0 13.7 6.43.43.43 0 0 0 .19-.36.43.43 0 0 0-.2-.35L9.13 13.7v.02a1.81 1.81 0 1 1-3.15-1.2h-2.3Z",
                        clipRule: "evenodd",
                        className: n,
                    }),
                ],
            });
        },
    },
);
