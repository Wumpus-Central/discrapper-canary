s.r(e);
var t = s(477900);
s(582128);
var l = s(646514),
    h = s(996682),
    n = s(27989);
s.d(
    e,
    {},
    {
        EmojiSmilingFaceWithSmilingEyesIcon: function (i) {
            let {
                    size: e = "md",
                    width: s,
                    height: a,
                    color: d = l.A.colors.INTERACTIVE_ICON_DEFAULT,
                    colorClass: c = "",
                    ...o
                } = i,
                r = (0, n.J)(e),
                p = r?.width ?? s,
                w = r?.height ?? a;
            return (0, t.jsx)("svg", {
                ...(0, h.A)(o),
                xmlns: "http://www.w3.org/2000/svg",
                width: p,
                height: w,
                fill: "none",
                viewBox: "0 0 24 24",
                children: (0, t.jsx)("path", {
                    fill: "string" == typeof d ? d : d.css,
                    fillRule: "evenodd",
                    d: "M12 23a11 11 0 1 0 0-22 11 11 0 0 0 0 22ZM6.82 11.57a1 1 0 0 1-1.64-1.14 3.34 3.34 0 0 1 4.27-1.07 1 1 0 0 1-.9 1.78 1.38 1.38 0 0 0-1.73.43Zm2.27 2.87a1 1 0 1 0-1.66 1.12 5.5 5.5 0 0 0 9.14 0 1 1 0 0 0-1.66-1.12 3.5 3.5 0 0 1-5.82 0Zm9.48-2.62a1 1 0 0 1-1.4-.25 1.38 1.38 0 0 0-1.73-.42 1 1 0 0 1-.89-1.8 3.38 3.38 0 0 1 4.27 1.08 1 1 0 0 1-.25 1.4Z",
                    clipRule: "evenodd",
                    className: c,
                }),
            });
        },
    },
);
