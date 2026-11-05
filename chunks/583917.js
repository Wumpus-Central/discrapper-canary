t.r(e);
var i = t(477900);
t(582128);
var c = t(646514),
    l = t(996682),
    a = t(27989);
t.d(
    e,
    {},
    {
        ChatEyeIcon: function (s) {
            let {
                    size: e = "md",
                    width: t,
                    height: h,
                    color: d = c.A.colors.INTERACTIVE_ICON_DEFAULT,
                    colorClass: n = "",
                    ...o
                } = s,
                p = (0, a.J)(e),
                r = p?.width ?? t,
                w = p?.height ?? h;
            return (0, i.jsxs)("svg", {
                ...(0, l.A)(o),
                xmlns: "http://www.w3.org/2000/svg",
                width: r,
                height: w,
                fill: "none",
                viewBox: "0 0 24 24",
                children: [
                    (0, i.jsx)("path", {
                        fill: "string" == typeof d ? d : d.css,
                        d: "M12 10a2 2 0 0 1-2.75 1.85c-.12-.04-.25.03-.25.15a3 3 0 1 0 3-3c-.12 0-.2.13-.15.25A2 2 0 0 1 12 10Z",
                        className: n,
                    }),
                    (0, i.jsx)("path", {
                        fill: "string" == typeof d ? d : d.css,
                        fillRule: "evenodd",
                        d: "M12 22a10 10 0 1 0-8.45-4.64c.13.19.11.44-.04.61l-2.06 2.37A1 1 0 0 0 2.2 22H12Zm6.85-9.65C18.3 13.48 16.27 17 12 17s-6.3-3.52-6.85-4.65a.8.8 0 0 1 0-.7C5.7 10.52 7.73 7 12 7s6.3 3.52 6.85 4.65c.1.22.1.48 0 .7Z",
                        clipRule: "evenodd",
                        className: n,
                    }),
                ],
            });
        },
    },
);
