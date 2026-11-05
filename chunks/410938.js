e.r(s);
var i = e(477900);
e(582128);
var l = e(646514),
    t = e(996682),
    c = e(27989);
e.d(
    s,
    {},
    {
        EmojiFaceWithMedicalMaskIcon: function (a) {
            let {
                    size: s = "md",
                    width: e,
                    height: h,
                    color: d = l.A.colors.INTERACTIVE_ICON_DEFAULT,
                    colorClass: n = "",
                    ...o
                } = a,
                p = (0, c.J)(s),
                r = p?.width ?? e,
                v = p?.height ?? h;
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
                        fillRule: "evenodd",
                        d: "M23 12v.3l-5.15 1.94A2 2 0 0 0 16 13H8a2 2 0 0 0-1.85 1.24L1 12.3V12a11 11 0 0 1 22 0Zm-17.57-.18a1 1 0 0 0 1.4-.25c.23-.34.63-.57 1.1-.57.23 0 .44.05.62.14a1 1 0 0 0 .9-1.78 3.38 3.38 0 0 0-4.27 1.07 1 1 0 0 0 .25 1.4Zm11.75-.25a1 1 0 1 0 1.64-1.14 3.34 3.34 0 0 0-4.27-1.07 1 1 0 0 0 .9 1.78 1.38 1.38 0 0 1 1.73.43Z",
                        clipRule: "evenodd",
                        className: n,
                    }),
                    (0, i.jsx)("path", {
                        fill: "string" == typeof d ? d : d.css,
                        d: "m18 16.32 4.7-1.77c-.26 1.12-.7 2.17-1.27 3.12L18 17.24v-.92ZM17.98 19.26l2.06.25a10.97 10.97 0 0 1-16.08 0l2.06-.25A2 2 0 0 0 8 21h8a2 2 0 0 0 1.98-1.74ZM6 17.24l-3.43.43c-.57-.95-1-2-1.27-3.12L6 16.32v.92ZM9 15a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1H9Z",
                        className: n,
                    }),
                ],
            });
        },
    },
);
