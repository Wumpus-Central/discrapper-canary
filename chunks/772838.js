n.r(l);
var r = n(477900);
n(582128);
var t = n(646514),
    i = n(996682),
    a = n(27989);
n.d(
    l,
    {},
    {
        DragIcon: function (e) {
            let {
                    size: l = "md",
                    width: n,
                    height: o,
                    color: s = t.A.colors.INTERACTIVE_ICON_DEFAULT,
                    colorClass: c = "",
                    ...d
                } = e,
                u = (0, a.J)(l),
                g = u?.width ?? n,
                h = u?.height ?? o;
            return (0, r.jsx)("svg", {
                ...(0, i.A)(d),
                xmlns: "http://www.w3.org/2000/svg",
                width: g,
                height: h,
                fill: "none",
                viewBox: "0 0 24 24",
                children: (0, r.jsx)("path", {
                    fill: "string" == typeof s ? s : s.css,
                    fillRule: "evenodd",
                    d: "M6 4a2 2 0 1 0 4 0 2 2 0 0 0-4 0Zm0 8a2 2 0 1 0 4 0 2 2 0 0 0-4 0Zm2 10a2 2 0 1 1 0-4 2 2 0 0 1 0 4Zm6-18a2 2 0 1 0 4 0 2 2 0 0 0-4 0Zm2 10a2 2 0 1 1 0-4 2 2 0 0 1 0 4Zm-2 6a2 2 0 1 0 4 0 2 2 0 0 0-4 0Z",
                    clipRule: "evenodd",
                    className: c,
                }),
            });
        },
    },
);
