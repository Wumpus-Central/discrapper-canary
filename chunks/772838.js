i.r(s);
var a = i(477900);
i(582128);
var t = i(646514),
    d = i(996682),
    h = i(27989);
i.d(
    s,
    {},
    {
        DragIcon: function (e) {
            let {
                    size: s = "md",
                    width: i,
                    height: l,
                    color: n = t.A.colors.INTERACTIVE_ICON_DEFAULT,
                    colorClass: r = "",
                    ...c
                } = e,
                o = (0, h.J)(s),
                p = o?.width ?? i,
                w = o?.height ?? l;
            return (0, a.jsx)("svg", {
                ...(0, d.A)(c),
                xmlns: "http://www.w3.org/2000/svg",
                width: p,
                height: w,
                fill: "none",
                viewBox: "0 0 24 24",
                children: (0, a.jsx)("path", {
                    fill: "string" == typeof n ? n : n.css,
                    fillRule: "evenodd",
                    d: "M6 4a2 2 0 1 0 4 0 2 2 0 0 0-4 0Zm0 8a2 2 0 1 0 4 0 2 2 0 0 0-4 0Zm2 10a2 2 0 1 1 0-4 2 2 0 0 1 0 4Zm6-18a2 2 0 1 0 4 0 2 2 0 0 0-4 0Zm2 10a2 2 0 1 1 0-4 2 2 0 0 1 0 4Zm-2 6a2 2 0 1 0 4 0 2 2 0 0 0-4 0Z",
                    clipRule: "evenodd",
                    className: r,
                }),
            });
        },
    },
);
