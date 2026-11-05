e.r(i);
var l = e(477900);
e(582128);
var s = e(646514),
    h = e(996682),
    t = e(27989);
e.d(
    i,
    {},
    {
        EmojiSmirkingFaceIcon: function (a) {
            let {
                    size: i = "md",
                    width: e,
                    height: c,
                    color: d = s.A.colors.INTERACTIVE_ICON_DEFAULT,
                    colorClass: n = "",
                    ...o
                } = a,
                r = (0, t.J)(i),
                p = r?.width ?? e,
                w = r?.height ?? c;
            return (0, l.jsx)("svg", {
                ...(0, h.A)(o),
                xmlns: "http://www.w3.org/2000/svg",
                width: p,
                height: w,
                fill: "none",
                viewBox: "0 0 24 24",
                children: (0, l.jsx)("path", {
                    fill: "string" == typeof d ? d : d.css,
                    fillRule: "evenodd",
                    d: "M12 23a11 11 0 1 0 0-22 11 11 0 0 0 0 22Zm-5.5-9a1.5 1.5 0 0 0 1.41-2H8a1 1 0 1 0 0-2H4a1 1 0 1 0 0 2h1.09a1.5 1.5 0 0 0 1.41 2ZM19 12.5a1.5 1.5 0 1 1-2.29-1.28L14.88 11a1 1 0 1 1 .24-1.98l4 .5a1 1 0 1 1-.24 1.98l-.3-.04c.26.27.42.64.42 1.05ZM11.51 19a7 7 0 0 0 4.95-2.05l.25-.24a1 1 0 0 0-1.42-1.42l-.24.25A5 5 0 0 1 11.51 17H10a1 1 0 1 0 0 2h1.51Z",
                    clipRule: "evenodd",
                    className: n,
                }),
            });
        },
    },
);
