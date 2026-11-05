i.r(a);
var s = i(477900);
i(582128);
var h = i(646514),
    t = i(996682),
    d = i(27989);
i.d(
    a,
    {},
    {
        EmojiDeadpanFaceIcon: function (e) {
            let {
                    size: a = "md",
                    width: i,
                    height: l,
                    color: n = h.A.colors.INTERACTIVE_ICON_DEFAULT,
                    colorClass: c = "",
                    ...o
                } = e,
                p = (0, d.J)(a),
                r = p?.width ?? i,
                w = p?.height ?? l;
            return (0, s.jsx)("svg", {
                ...(0, t.A)(o),
                xmlns: "http://www.w3.org/2000/svg",
                width: r,
                height: w,
                fill: "none",
                viewBox: "0 0 24 24",
                children: (0, s.jsx)("path", {
                    fill: "string" == typeof n ? n : n.css,
                    fillRule: "evenodd",
                    d: "M12 23a11 11 0 1 0 0-22 11 11 0 0 0 0 22Zm-2.91-6.44a1 1 0 0 1-1.66-1.12 5.5 5.5 0 0 1 9.14 0 1 1 0 0 1-1.66 1.12 3.5 3.5 0 0 0-5.82 0ZM4 11a1 1 0 0 0 1 1h3a1 1 0 1 0 0-2H5a1 1 0 0 0-1 1Zm15-1a1 1 0 1 1 0 2h-3a1 1 0 1 1 0-2h3Z",
                    clipRule: "evenodd",
                    className: c,
                }),
            });
        },
    },
);
