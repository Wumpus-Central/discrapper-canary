e.r(a);
var s = e(477900);
e(582128);
var i = e(646514),
    t = e(996682),
    h = e(27989);
e.d(
    a,
    {},
    {
        EmojiBlaseFaceIcon: function (l) {
            let {
                    size: a = "md",
                    width: e,
                    height: c,
                    color: d = i.A.colors.INTERACTIVE_ICON_DEFAULT,
                    colorClass: n = "",
                    ...o
                } = l,
                r = (0, h.J)(a),
                p = r?.width ?? e,
                w = r?.height ?? c;
            return (0, s.jsx)("svg", {
                ...(0, t.A)(o),
                xmlns: "http://www.w3.org/2000/svg",
                width: p,
                height: w,
                fill: "none",
                viewBox: "0 0 24 24",
                children: (0, s.jsx)("path", {
                    fill: "string" == typeof d ? d : d.css,
                    fillRule: "evenodd",
                    d: "M12 23a11 11 0 1 0 0-22 11 11 0 0 0 0 22ZM7.5 13a1.5 1.5 0 0 0 .45-2.93l.37-.12a1 1 0 1 0-.64-1.9l-3 1a1 1 0 1 0 .64 1.9l.96-.32A1.5 1.5 0 0 0 7.5 13ZM18 11.5a1.5 1.5 0 1 1-1.95-1.43l-.37-.12a1 1 0 1 1 .64-1.9l3 1a1 1 0 1 1-.64 1.9l-.96-.32c.18.24.28.54.28.87ZM13.03 17a7 7 0 0 0 2.21-.36l2.08-.7a1 1 0 0 0-.64-1.89l-2.07.7a5 5 0 0 1-1.58.25H11a1 1 0 1 0 0 2h2.03Z",
                    clipRule: "evenodd",
                    className: n,
                }),
            });
        },
    },
);
