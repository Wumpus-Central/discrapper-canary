s.r(e);
var t = s(477900);
s(582128);
var a = s(646514),
    l = s(996682),
    h = s(27989);
s.d(
    e,
    {},
    {
        EmojiFaceWithDiagonalMouthIcon: function (i) {
            let {
                    size: e = "md",
                    width: s,
                    height: o,
                    color: d = a.A.colors.INTERACTIVE_ICON_DEFAULT,
                    colorClass: n = "",
                    ...c
                } = i,
                r = (0, h.J)(e),
                p = r?.width ?? s,
                u = r?.height ?? o;
            return (0, t.jsx)("svg", {
                ...(0, l.A)(c),
                xmlns: "http://www.w3.org/2000/svg",
                width: p,
                height: u,
                fill: "none",
                viewBox: "0 0 24 24",
                children: (0, t.jsx)("path", {
                    fill: "string" == typeof d ? d : d.css,
                    fillRule: "evenodd",
                    d: "M12 23a11 11 0 1 0 0-22 11 11 0 0 0 0 22ZM6.5 13a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3ZM19 11.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Zm-9.32 5.55a1 1 0 0 0 .64 1.9l6-2a1 1 0 0 0-.64-1.9l-6 2Z",
                    clipRule: "evenodd",
                    className: n,
                }),
            });
        },
    },
);
