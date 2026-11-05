e.r(i);
var a = e(477900);
e(582128);
var c = e(646514),
    t = e(996682),
    l = e(27989);
e.d(
    i,
    {},
    {
        EmojiSmilingFaceWithTearIcon: function (s) {
            let {
                    size: i = "md",
                    width: e,
                    height: h,
                    color: d = c.A.colors.INTERACTIVE_ICON_DEFAULT,
                    colorClass: n = "",
                    ...o
                } = s,
                r = (0, l.J)(i),
                p = r?.width ?? e,
                w = r?.height ?? h;
            return (0, a.jsxs)("svg", {
                ...(0, t.A)(o),
                xmlns: "http://www.w3.org/2000/svg",
                width: p,
                height: w,
                fill: "none",
                viewBox: "0 0 24 24",
                children: [
                    (0, a.jsx)("path", {
                        fill: "string" == typeof d ? d : d.css,
                        fillRule: "evenodd",
                        d: "M12 23c1.62 0 3.16-.35 4.55-.98A3.98 3.98 0 0 1 16 20c0-.63.19-1.28.35-1.75a13 13 0 0 1 1.51-2.96c.14-.2.33-.43.56-.64.11-.1.28-.24.5-.36a2.22 2.22 0 0 1 2.66.36 4.33 4.33 0 0 1 .8 1A11 11 0 1 0 12 23ZM6.5 13a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Zm11 0a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Zm-9.8 1.17a1 1 0 0 1 1.39.27 3.5 3.5 0 0 0 5.82 0 1 1 0 1 1 1.66 1.12 5.5 5.5 0 0 1-9.14 0 1 1 0 0 1 .27-1.4Z",
                        clipRule: "evenodd",
                        className: n,
                    }),
                    (0, a.jsx)("path", {
                        fill: "string" == typeof d ? d : d.css,
                        d: "M21.32 17.85C20.85 16.88 20.28 16 20 16c-.5 0-2 2.9-2 4a2 2 0 0 0 2 2 2 2 0 0 0 2-2c0-.5-.3-1.36-.68-2.15Z",
                        className: n,
                    }),
                ],
            });
        },
    },
);
