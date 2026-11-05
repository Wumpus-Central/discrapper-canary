c.r(a);
var e = c(477900);
c(582128);
var i = c(646514),
    s = c(996682),
    t = c(27989);
c.d(
    a,
    {},
    {
        WateringCanIcon: function (l) {
            let {
                    size: a = "md",
                    width: c,
                    height: h,
                    color: n = i.A.colors.INTERACTIVE_ICON_DEFAULT,
                    colorClass: d = "",
                    ...r
                } = l,
                o = (0, t.J)(a),
                p = o?.width ?? c,
                w = o?.height ?? h;
            return (0, e.jsx)("svg", {
                ...(0, s.A)(r),
                xmlns: "http://www.w3.org/2000/svg",
                width: p,
                height: w,
                fill: "none",
                viewBox: "0 0 24 24",
                children: (0, e.jsx)("path", {
                    fill: "string" == typeof n ? n : n.css,
                    fillRule: "evenodd",
                    d: "M13.23 3.63a4.97 4.97 0 0 1 7.28-.09 5.4 5.4 0 0 1 0 7.46.06.06 0 0 0 0 .09l.72.58c.92.76 1 2.18.16 3.04l-6.46 6.7c-.88.9-2.34.75-3.03-.32l-.1-.17a1 1 0 0 0-.63-.44l-5.8-1.3a1 1 0 0 0-1.1.5l-.41.74c-.19.34-.53.54-.9.54h-.44a.53.53 0 0 1-.52-.54v-5.9c0-.3.23-.54.52-.54h.44c.37 0 .71.2.9.53l.61 1.11a1 1 0 0 0 .7.5l2.9.55a.5.5 0 0 0 .52-.76L4.17 9c-.55-.87-.4-2.02.37-2.69l3.7-3.24a1.91 1.91 0 0 1 2.49-.04l1.65 1.36c.05.04.1.03.14 0l.71-.77Zm5.92 1.33a3.09 3.09 0 0 0-4.53.05l-.29.31a.5.5 0 0 0 .05.73l4.34 3.56c.13.1.31.1.43-.02a3.36 3.36 0 0 0 0-4.63Z",
                    clipRule: "evenodd",
                    className: d,
                }),
            });
        },
    },
);
