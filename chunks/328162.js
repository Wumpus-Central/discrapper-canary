i.r(s);
var a = i(477900);
i(582128);
var h = i(646514),
    t = i(996682),
    d = i(27989);
i.d(
    s,
    {},
    {
        LockUnlockedIcon: function (e) {
            let {
                    size: s = "md",
                    width: i,
                    height: l,
                    color: c = h.A.colors.INTERACTIVE_ICON_DEFAULT,
                    colorClass: n = "",
                    ...o
                } = e,
                r = (0, d.J)(s),
                p = r?.width ?? i,
                v = r?.height ?? l;
            return (0, a.jsx)("svg", {
                ...(0, t.A)(o),
                xmlns: "http://www.w3.org/2000/svg",
                width: p,
                height: v,
                fill: "none",
                viewBox: "0 0 24 24",
                children: (0, a.jsx)("path", {
                    fill: "string" == typeof c ? c : c.css,
                    fillRule: "evenodd",
                    d: "M8.7 2.25A4.98 4.98 0 0 1 17 6v3h1a3 3 0 0 1 3 3v8a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3v-8a3 3 0 0 1 3-3h9V6a3 3 0 0 0-4.98-2.25 1 1 0 0 1-1.33-1.5ZM14 14a2 2 0 0 1-1 1.73V18a1 1 0 1 1-2 0v-2.27A2 2 0 1 1 14 14Z",
                    clipRule: "evenodd",
                    className: n,
                }),
            });
        },
    },
);
