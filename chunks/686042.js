h.r(c);
var i = h(477900);
h(582128);
var t = h(646514),
    a = h(996682),
    e = h(27989);
h.d(
    c,
    {},
    {
        PuzzlePieceIcon: function (s) {
            let {
                    size: c = "md",
                    width: h,
                    height: r,
                    color: n = t.A.colors.INTERACTIVE_ICON_DEFAULT,
                    colorClass: d = "",
                    ...l
                } = s,
                o = (0, e.J)(c),
                p = o?.width ?? h,
                w = o?.height ?? r;
            return (0, i.jsx)("svg", {
                ...(0, a.A)(l),
                xmlns: "http://www.w3.org/2000/svg",
                width: p,
                height: w,
                fill: "none",
                viewBox: "0 0 24 24",
                children: (0, i.jsx)("path", {
                    fill: "string" == typeof n ? n : n.css,
                    d: "M16 4a3 3 0 1 1-5.98-.31c.03-.35-.21-.69-.56-.69H7a3 3 0 0 0-3 3v2.5c0 .28-.23.5-.5.54a3 3 0 0 0 0 5.92c.27.04.5.26.5.54V18a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V6a3 3 0 0 0-3-3h-2.46c-.35 0-.6.34-.56.69L16 4Z",
                    className: d,
                }),
            });
        },
    },
);
