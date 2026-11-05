a.r(h);
var l = a(477900);
a(582128);
var c = a(646514),
    t = a(996682),
    i = a(27989);
a.d(
    h,
    {},
    {
        TextUserIcon: function (s) {
            let {
                    size: h = "md",
                    width: a,
                    height: e,
                    color: r = c.A.colors.INTERACTIVE_ICON_DEFAULT,
                    colorClass: n = "",
                    ...p
                } = s,
                d = (0, i.J)(h),
                o = d?.width ?? a,
                w = d?.height ?? e;
            return (0, l.jsxs)("svg", {
                ...(0, t.A)(p),
                xmlns: "http://www.w3.org/2000/svg",
                width: o,
                height: w,
                fill: "none",
                viewBox: "0 0 24 24",
                children: [
                    (0, l.jsx)("path", {
                        fill: "string" == typeof r ? r : r.css,
                        d: "M21 2a2 2 0 1 1-4 0 2 2 0 0 1 4 0ZM14 9.27a4.77 4.77 0 0 1 4.77-4.77h.46A4.77 4.77 0 0 1 24 9.27c0 .4-.33.73-.73.73h-.11a.26.26 0 0 1-.26-.2 5.17 5.17 0 0 0-.66-1.46c-.06-.1-.21-.04-.2.08l.13 1.3c.02.15-.1.28-.25.28h-5.84a.25.25 0 0 1-.25-.27l.13-1.3c.01-.13-.14-.2-.2-.09-.24.37-.52.9-.66 1.46a.26.26 0 0 1-.26.2h-.1a.73.73 0 0 1-.74-.73Z",
                        className: n,
                    }),
                    (0, l.jsx)("path", {
                        fill: "string" == typeof r ? r : r.css,
                        d: "M10.18 8h1.33c.27 0 .5.22.54.49.03.21.09.43.16.63.15.39-.1.88-.52.88H9.85l-.67 4h4.97l.37-2.23c.05-.29.33-.47.62-.45l.26.02h.63c.31 0 .55.27.5.58L16.18 14H20a1 1 0 1 1 0 2h-4.15l-.86 5.16a1 1 0 0 1-1.98-.32l.8-4.84H8.86l-.86 5.16A1 1 0 0 1 6 20.84L6.82 16H3a1 1 0 1 1 0-2h4.15l.67-4H4a1 1 0 0 1 0-2h4.15l.86-5.16a1 1 0 1 1 1.98.32L10.19 8Z",
                        className: n,
                    }),
                ],
            });
        },
    },
);
