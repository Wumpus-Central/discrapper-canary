i.r(a);
var l = i(477900);
i(582128);
var s = i(646514),
    t = i(996682),
    d = i(27989);
i.d(
    a,
    {},
    {
        EmojiEnragedFaceIcon: function (e) {
            let {
                    size: a = "md",
                    width: i,
                    height: h,
                    color: n = s.A.colors.INTERACTIVE_ICON_DEFAULT,
                    colorClass: c = "",
                    ...o
                } = e,
                r = (0, d.J)(a),
                p = r?.width ?? i,
                w = r?.height ?? h;
            return (0, l.jsx)("svg", {
                ...(0, t.A)(o),
                xmlns: "http://www.w3.org/2000/svg",
                width: p,
                height: w,
                fill: "none",
                viewBox: "0 0 24 24",
                children: (0, l.jsx)("path", {
                    fill: "string" == typeof n ? n : n.css,
                    fillRule: "evenodd",
                    d: "M12 23a11 11 0 1 0 0-22 11 11 0 0 0 0 22Zm4.5-8a1.5 1.5 0 0 0 .86-2.73l.96-.32a1 1 0 0 0-.64-1.9l-3 1a1 1 0 0 0 .4 1.95 1.5 1.5 0 0 0 1.42 2ZM6 13.5a1.5 1.5 0 1 0 2.91-.5 1 1 0 0 0 .4-1.95l-3-1a1 1 0 1 0-.63 1.9l.96.32A1.5 1.5 0 0 0 6 13.5Zm4.62 4.9a1 1 0 0 1-1.83-.8 3.5 3.5 0 0 1 6.42 0 1 1 0 0 1-1.83.8 1.5 1.5 0 0 0-2.76 0Z",
                    clipRule: "evenodd",
                    className: c,
                }),
            });
        },
    },
);
