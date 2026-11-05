l.r(c);
var t = l(477900);
l(582128);
var i = l(646514),
    a = l(996682),
    e = l(27989);
l.d(
    c,
    {},
    {
        BoostGemOutlineIcon: function (s) {
            let {
                    size: c = "md",
                    width: l,
                    height: h,
                    color: n = i.A.colors.INTERACTIVE_ICON_DEFAULT,
                    colorClass: o = "",
                    ...r
                } = s,
                d = (0, e.J)(c),
                p = d?.width ?? l,
                w = d?.height ?? h;
            return (0, t.jsx)("svg", {
                ...(0, a.A)(r),
                xmlns: "http://www.w3.org/2000/svg",
                width: p,
                height: w,
                fill: "none",
                viewBox: "0 0 24 24",
                children: (0, t.jsx)("path", {
                    fill: "string" == typeof n ? n : n.css,
                    d: "M11.02 1.36c.56-.48 1.4-.48 1.96 0l6.48 5.45c.34.29.54.71.54 1.16v8.23c-.05.38-.24.74-.54 1l-6.48 5.44c-.53.45-1.3.48-1.86.09l-.1-.09-6.48-5.45c-.3-.25-.49-.6-.53-1L4 16.04V7.97c0-.45.2-.87.54-1.16l6.48-5.45ZM6.36 7.89a1 1 0 0 0-.36.76v6.7c0 .29.13.57.36.76l5 4.2a1 1 0 0 0 1.28 0l5-4.2a1 1 0 0 0 .36-.77V8.65a1 1 0 0 0-.36-.76l-5-4.2a1 1 0 0 0-1.28 0l-5 4.2Z",
                    className: o,
                }),
            });
        },
    },
);
