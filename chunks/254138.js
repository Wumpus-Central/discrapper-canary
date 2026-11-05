h.r(s);
var i = h(477900);
h(582128);
var t = h(646514),
    e = h(996682),
    l = h(27989);
h.d(
    s,
    {},
    {
        ShieldLockIcon: function (c) {
            let {
                    size: s = "md",
                    width: h,
                    height: a,
                    color: r = t.A.colors.INTERACTIVE_ICON_DEFAULT,
                    colorClass: d = "",
                    ...n
                } = c,
                o = (0, l.J)(s),
                p = o?.width ?? h,
                w = o?.height ?? a;
            return (0, i.jsx)("svg", {
                ...(0, e.A)(n),
                xmlns: "http://www.w3.org/2000/svg",
                width: p,
                height: w,
                fill: "none",
                viewBox: "0 0 24 24",
                children: (0, i.jsx)("path", {
                    fill: "string" == typeof r ? r : r.css,
                    d: "M20.3 5.41h-.39c-.84 0-1.52-.65-1.52-1.46v-.3c0-.9-.77-1.65-1.71-1.65H7.31c-.94 0-1.71.74-1.71 1.65v.3c0 .81-.68 1.46-1.52 1.46H3.7c-.94 0-1.7.73-1.7 1.64v3.52l.01.49c.05 3.11.94 4.69 2.92 6.63C6.72 19.46 11.58 22 11.99 22c.41 0 5.27-2.54 7.06-4.31 1.98-1.95 2.92-3.53 2.92-6.63L22 7.05c0-.9-.76-1.64-1.7-1.64Zm-7.48 5.03c-.18.07-.29.25-.23.44l.6 4.65a.46.46 0 0 1-.45.51h-1.45a.46.46 0 0 1-.45-.51l.6-4.65c.05-.17-.02-.37-.19-.44a2.08 2.08 0 1 1 1.57 0Z",
                    className: d,
                }),
            });
        },
    },
);
