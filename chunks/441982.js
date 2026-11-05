a.r(i);
var e = a(477900);
a(582128);
var s = a(646514),
    t = a(996682),
    h = a(27989);
a.d(
    i,
    {},
    {
        EmojiSmilingFaceWithHornsIcon: function (l) {
            let {
                    size: i = "md",
                    width: a,
                    height: n,
                    color: d = s.A.colors.INTERACTIVE_ICON_DEFAULT,
                    colorClass: o = "",
                    ...c
                } = l,
                r = (0, h.J)(i),
                p = r?.width ?? a,
                w = r?.height ?? n;
            return (0, e.jsx)("svg", {
                ...(0, t.A)(c),
                xmlns: "http://www.w3.org/2000/svg",
                width: p,
                height: w,
                fill: "none",
                viewBox: "0 0 24 24",
                children: (0, e.jsx)("path", {
                    fill: "string" == typeof d ? d : d.css,
                    fillRule: "evenodd",
                    d: "M23 12A11 11 0 1 1 2.74 6.06l-.78-2.87a1 1 0 0 1 1.23-1.23l2.87.78a10.95 10.95 0 0 1 11.88 0l2.87-.78a1 1 0 0 1 1.23 1.23l-.78 2.87A10.95 10.95 0 0 1 23 12Zm-6.5 3a1.5 1.5 0 0 0 .86-2.73l.96-.32a1 1 0 0 0-.64-1.9l-3 1a1 1 0 0 0 .4 1.95 1.5 1.5 0 0 0 1.42 2ZM6 13.5a1.5 1.5 0 1 0 2.91-.5 1 1 0 0 0 .4-1.95l-3-1a1 1 0 1 0-.63 1.9l.96.32A1.5 1.5 0 0 0 6 13.5Zm3.09 2.94a1 1 0 0 0-1.66 1.12 5.5 5.5 0 0 0 9.14 0 1 1 0 0 0-1.66-1.12 3.5 3.5 0 0 1-5.82 0Z",
                    clipRule: "evenodd",
                    className: o,
                }),
            });
        },
    },
);
