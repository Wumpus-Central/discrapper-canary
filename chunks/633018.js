h.r(e);
var i = h(477900);
h(582128);
var a = h(646514),
    l = h(996682),
    t = h(27989);
h.d(
    e,
    {},
    {
        SlashBoxIcon: function (s) {
            let {
                    size: e = "md",
                    width: h,
                    height: c,
                    color: d = a.A.colors.INTERACTIVE_ICON_DEFAULT,
                    colorClass: n = "",
                    ...o
                } = s,
                r = (0, t.J)(e),
                p = r?.width ?? h,
                w = r?.height ?? c;
            return (0, i.jsx)("svg", {
                ...(0, l.A)(o),
                xmlns: "http://www.w3.org/2000/svg",
                width: p,
                height: w,
                fill: "none",
                viewBox: "0 0 24 24",
                children: (0, i.jsx)("path", {
                    fill: "string" == typeof d ? d : d.css,
                    fillRule: "evenodd",
                    d: "M5 2a3 3 0 0 0-3 3v14a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3V5a3 3 0 0 0-3-3H5Zm12.79 3.37a.25.25 0 0 0-.22-.37h-3.13a.75.75 0 0 0-.66.38L6.21 18.63c-.1.16.03.37.22.37h3.13c.27 0 .52-.14.66-.38l7.57-13.25Z",
                    clipRule: "evenodd",
                    className: n,
                }),
            });
        },
    },
);
