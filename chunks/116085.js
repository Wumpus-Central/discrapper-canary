s.r(i);
var t = s(477900);
s(582128);
var c = s(646514),
    d = s(996682),
    h = s(27989);
s.d(
    i,
    {},
    {
        LocationIcon: function (e) {
            let {
                    size: i = "md",
                    width: s,
                    height: l,
                    color: n = c.A.colors.INTERACTIVE_ICON_DEFAULT,
                    colorClass: o = "",
                    ...a
                } = e,
                r = (0, h.J)(i),
                p = r?.width ?? s,
                w = r?.height ?? l;
            return (0, t.jsx)("svg", {
                ...(0, d.A)(a),
                xmlns: "http://www.w3.org/2000/svg",
                width: p,
                height: w,
                fill: "none",
                viewBox: "0 0 24 24",
                children: (0, t.jsx)("path", {
                    fill: "string" == typeof n ? n : n.css,
                    fillRule: "evenodd",
                    d: "M12 23c3 0 9-8.03 9-13a9 9 0 1 0-18 0c0 4.97 6 13 9 13Zm0-10a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z",
                    clipRule: "evenodd",
                    className: o,
                }),
            });
        },
    },
);
