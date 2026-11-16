a.r(h);
var c = a(477900);
a(582128);
var s = a(646514),
    i = a(996682),
    l = a(27989);
a.d(
    h,
    {},
    {
        BadgeIcon: function (e) {
            let {
                    size: h = "md",
                    width: a,
                    height: t,
                    color: d = s.A.colors.INTERACTIVE_ICON_DEFAULT,
                    colorClass: n = "",
                    ...o
                } = e,
                r = (0, l.J)(h),
                p = r?.width ?? a,
                w = r?.height ?? t;
            return (0, c.jsx)("svg", {
                ...(0, i.A)(o),
                xmlns: "http://www.w3.org/2000/svg",
                width: p,
                height: w,
                fill: "none",
                viewBox: "0 0 24 24",
                children: (0, c.jsx)("path", {
                    fill: "string" == typeof d ? d : d.css,
                    fillRule: "evenodd",
                    d: "M19.9 2a2 2 0 0 1 1.97 2.32l-2.46 15.16A3 3 0 0 1 16.45 22H4.1a2 2 0 0 1-1.97-2.32L4.59 4.52A3 3 0 0 1 7.55 2H19.9Zm-8.1 12.32a8.76 8.76 0 0 0-7.68 5.02c-.15.31.1.66.44.66h1.23c.18 0 .35-.1.44-.26.3-.5.63-.96.93-1.32.13-.17.35-.07.3.12l-.21.84a.5.5 0 0 0 .48.62h6.51a.5.5 0 0 0 .5-.47l.06-.99c0-.2.26-.28.34-.12.16.33.33.74.47 1.2.06.22.26.38.5.38h1.32c.28 0 .51-.24.47-.52-.38-2.98-2.81-5.16-6.1-5.16Zm1-6.32c-1.55 0-3 1.24-3.24 2.77a2.32 2.32 0 0 0 2.36 2.76c1.55 0 3-1.24 3.24-2.76A2.32 2.32 0 0 0 12.8 8ZM10 4a1 1 0 1 0 0 2h6a1 1 0 0 0 0-2h-6Z",
                    clipRule: "evenodd",
                    className: n,
                }),
            });
        },
    },
);
