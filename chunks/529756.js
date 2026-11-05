c.r(l);
var t = c(477900);
c(582128);
var a = c(646514),
    i = c(996682),
    e = c(27989);
c.d(
    l,
    {},
    {
        CollectionIcon: function (s) {
            let {
                    size: l = "md",
                    width: c,
                    height: h,
                    color: n = a.A.colors.INTERACTIVE_ICON_DEFAULT,
                    colorClass: o = "",
                    ...r
                } = s,
                p = (0, e.J)(l),
                d = p?.width ?? c,
                w = p?.height ?? h;
            return (0, t.jsxs)("svg", {
                ...(0, i.A)(r),
                xmlns: "http://www.w3.org/2000/svg",
                width: d,
                height: w,
                fill: "none",
                viewBox: "0 0 24 24",
                children: [
                    (0, t.jsx)("path", {
                        fill: "string" == typeof n ? n : n.css,
                        d: "M1.71 7.8c-.5.12-.8.62-.68 1.12l2.64 10.87c.12.5.63.8 1.13.68l2.71-.66c.15-.03.16-.27.03-.34a2.8 2.8 0 0 1-1.52-2.44L5.84 7.3a.4.4 0 0 0-.5-.38l-3.63.88ZM8.59 4.86a.93.93 0 0 0-.92.95L7.88 17c.01.51.44.92.95.91l3.55-.07c.2 0 .22-.28.04-.32a2.8 2.8 0 0 1-2.06-3.38l2.18-8.97a.3.3 0 0 0-.3-.37l-3.65.06Z",
                        className: o,
                    }),
                    (0, t.jsx)("path", {
                        fill: "string" == typeof n ? n : n.css,
                        d: "M22.97 5.7c.12-.5-.18-1.01-.68-1.13l-6.35-1.54a.93.93 0 0 0-1.12.68l-2.65 10.87c-.12.5.19 1 .69 1.13l6.34 1.54c.5.12 1-.19 1.13-.69L22.97 5.7Z",
                        className: o,
                    }),
                ],
            });
        },
    },
);
