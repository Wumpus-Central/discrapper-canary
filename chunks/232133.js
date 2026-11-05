i.r(e);
var l = i(477900);
i(582128);
var a = i(646514),
    c = i(996682),
    h = i(27989);
i.d(
    e,
    {},
    {
        EmojiAnguishedFaceIcon: function (s) {
            let {
                    size: e = "md",
                    width: i,
                    height: t,
                    color: d = a.A.colors.INTERACTIVE_ICON_DEFAULT,
                    colorClass: n = "",
                    ...o
                } = s,
                r = (0, h.J)(e),
                p = r?.width ?? i,
                u = r?.height ?? t;
            return (0, l.jsx)("svg", {
                ...(0, c.A)(o),
                xmlns: "http://www.w3.org/2000/svg",
                width: p,
                height: u,
                fill: "none",
                viewBox: "0 0 24 24",
                children: (0, l.jsx)("path", {
                    fill: "string" == typeof d ? d : d.css,
                    fillRule: "evenodd",
                    d: "M12 23a11 11 0 1 0 0-22 11 11 0 0 0 0 22Zm2.95-4c.65 0 1.2-.52 1.01-1.13A4.12 4.12 0 0 0 12 15a4.12 4.12 0 0 0-3.96 2.87c-.19.6.36 1.13 1.01 1.13h5.9ZM8 11c0 1.1-.67 2-1.5 2S5 12.1 5 11s.67-2 1.5-2S8 9.9 8 11Zm9.5 2c.83 0 1.5-.9 1.5-2s-.67-2-1.5-2-1.5.9-1.5 2 .67 2 1.5 2Zm-1.45-6.32a1 1 0 0 0 .63 1.27l3 1a1 1 0 0 0 .64-1.9l-3-1a1 1 0 0 0-1.27.63ZM7.32 7.95a1 1 0 1 0-.64-1.9l-3 1a1 1 0 1 0 .64 1.9l3-1Z",
                    clipRule: "evenodd",
                    className: n,
                }),
            });
        },
    },
);
