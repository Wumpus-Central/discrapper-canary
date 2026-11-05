h.r(a);
var c = h(477900);
h(582128);
var i = h(646514),
    t = h(996682),
    e = h(27989);
h.d(
    a,
    {},
    {
        PuzzlePieceMinusIcon: function (s) {
            let {
                    size: a = "md",
                    width: h,
                    height: l,
                    color: n = i.A.colors.INTERACTIVE_ICON_DEFAULT,
                    colorClass: r = "",
                    ...p
                } = s,
                d = (0, e.J)(a),
                o = d?.width ?? h,
                w = d?.height ?? l;
            return (0, c.jsxs)("svg", {
                ...(0, t.A)(p),
                xmlns: "http://www.w3.org/2000/svg",
                width: o,
                height: w,
                fill: "none",
                viewBox: "0 0 24 24",
                children: [
                    (0, c.jsx)("path", {
                        fill: "string" == typeof n ? n : n.css,
                        d: "M16 4a3 3 0 1 1-5.98-.31c.03-.35-.21-.69-.56-.69H7a3 3 0 0 0-3 3v2.5c0 .28-.23.5-.5.54a3 3 0 0 0 0 5.92c.27.04.5.26.5.54V18a3 3 0 0 0 3 3h4.65c.43 0 .69-.55.54-.95A3 3 0 0 1 15 16h6.5a.5.5 0 0 0 .5-.5V6a3 3 0 0 0-3-3h-2.46c-.35 0-.6.34-.56.69L16 4Z",
                        className: r,
                    }),
                    (0, c.jsx)("path", {
                        fill: "string" == typeof n ? n : n.css,
                        d: "M15 18a1 1 0 1 0 0 2h8a1 1 0 1 0 0-2h-8Z",
                        className: r,
                    }),
                ],
            });
        },
    },
);
