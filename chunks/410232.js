l.r(s);
var t = l(477900);
l(582128);
var c = l(646514),
    i = l(996682),
    h = l(27989);
l.d(
    s,
    {},
    {
        CloudUploadIcon: function (a) {
            let {
                    size: s = "md",
                    width: l,
                    height: e,
                    color: d = c.A.colors.INTERACTIVE_ICON_DEFAULT,
                    colorClass: o = "",
                    ...p
                } = a,
                r = (0, h.J)(s),
                n = r?.width ?? l,
                w = r?.height ?? e;
            return (0, t.jsxs)("svg", {
                ...(0, i.A)(p),
                xmlns: "http://www.w3.org/2000/svg",
                width: n,
                height: w,
                fill: "none",
                viewBox: "0 0 24 24",
                children: [
                    (0, t.jsx)("path", {
                        fill: "string" == typeof d ? d : d.css,
                        d: "M18.3 14.3a1 1 0 0 1 1.4 0l4 4a1 1 0 1 1-1.4 1.4L20 17.42V23a1 1 0 1 1-2 0v-5.59l-2.3 2.3a1 1 0 1 1-1.4-1.42l4-4Z",
                        className: o,
                    }),
                    (0, t.jsx)("path", {
                        fill: "string" == typeof d ? d : d.css,
                        d: "M15 3a6.01 6.01 0 0 1 5.83 7.44c-.06.22.03.45.2.59a5 5 0 0 1 1.73 2.45c.14.43-.36.68-.68.35l-.96-.95a3 3 0 0 0-4.13-.1l-.11.1-4 4a2.99 2.99 0 0 0-.86 2.43c.04.34-.2.69-.55.69H6a5 5 0 0 1-3-9v-.26a6 6 0 0 1 4.55-5.56c.36-.09.64.26.57.62a5.98 5.98 0 0 0 .3 3.4c.12.32.58.15.58-.2a5.97 5.97 0 0 1 6-6Z",
                        className: o,
                    }),
                ],
            });
        },
    },
);
