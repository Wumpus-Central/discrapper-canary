e.r(h);
var i = e(477900);
e(582128);
var t = e(646514),
    c = e(996682),
    l = e(27989);
e.d(
    h,
    {},
    {
        HdIcon: function (s) {
            let {
                    size: h = "md",
                    width: e,
                    height: a,
                    color: d = t.A.colors.INTERACTIVE_ICON_DEFAULT,
                    colorClass: n = "",
                    ...o
                } = s,
                p = (0, l.J)(h),
                r = p?.width ?? e,
                v = p?.height ?? a;
            return (0, i.jsxs)("svg", {
                ...(0, c.A)(o),
                xmlns: "http://www.w3.org/2000/svg",
                width: r,
                height: v,
                fill: "none",
                viewBox: "0 0 24 24",
                children: [
                    (0, i.jsx)("path", {
                        fill: "string" == typeof d ? d : d.css,
                        d: "M17.52 13.84c-.4.38-.93.58-1.6.58h-1.19V9.3h1.2c.66 0 1.2.2 1.59.58.39.38.58 1.04.58 1.98s-.2 1.6-.58 1.98Z",
                        className: n,
                    }),
                    (0, i.jsx)("path", {
                        fill: "string" == typeof d ? d : d.css,
                        fillRule: "evenodd",
                        d: "M5 2a3 3 0 0 0-3 3v14a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3V5a3 3 0 0 0-3-3H5Zm-.47 14h1.75v-3.42h3.27V16h1.75V7.72H9.55V11H6.28V7.72H4.53V16Zm8.45-8.28V16h2.94c1.26 0 2.22-.36 2.9-1.07.7-.71 1.04-1.73 1.04-3.07 0-1.34-.35-2.36-1.04-3.07-.68-.71-1.64-1.07-2.9-1.07h-2.94Z",
                        clipRule: "evenodd",
                        className: n,
                    }),
                ],
            });
        },
    },
);
