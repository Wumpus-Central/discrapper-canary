c.r(e);
var l = c(477900);
c(582128);
var a = c(646514),
    i = c(996682),
    t = c(27989);
c.d(
    e,
    {},
    {
        AnnouncementsWebIcon: function (s) {
            let {
                    size: e = "md",
                    width: c,
                    height: h,
                    color: n = a.A.colors.INTERACTIVE_ICON_DEFAULT,
                    colorClass: d = "",
                    ...o
                } = s,
                p = (0, t.J)(e),
                r = p?.width ?? c,
                v = p?.height ?? h;
            return (0, l.jsxs)("svg", {
                ...(0, i.A)(o),
                xmlns: "http://www.w3.org/2000/svg",
                width: r,
                height: v,
                fill: "none",
                viewBox: "0 0 24 24",
                children: [
                    (0, l.jsx)("path", {
                        fill: "string" == typeof n ? n : n.css,
                        fillRule: "evenodd",
                        d: "M11.46 6.06c.3-.1.63.1.7.4a7 7 0 0 0 9.1 5.16c.36-.12.74.13.74.5v8.4c0 .82-.67 1.5-1.5 1.5h-.94a3 3 0 0 1-2.46-1.29 3.86 3.86 0 0 0-1.07-1.03l-2.36-.94a.92.92 0 0 0-1.23.63 2.92 2.92 0 0 1-3.55 2.13l-.62-.16A3 3 0 0 1 6 18.45V8.36c0-.2.13-.4.33-.47l5.13-1.83ZM8 18.45a1 1 0 0 0 .76.97l.62.16c.5.12 1-.18 1.12-.68.1-.41.29-.78.53-1.1L8 16.74v1.72Z",
                        clipRule: "evenodd",
                        className: d,
                    }),
                    (0, l.jsx)("path", {
                        fill: "string" == typeof n ? n : n.css,
                        d: "M4.5 8.01c.28 0 .5.23.5.5v7a.5.5 0 0 1-.5.5H4a2 2 0 0 1-2-2v-4c0-1.1.9-2 2-2h.5Z",
                        className: d,
                    }),
                    (0, l.jsx)("path", {
                        fill: "string" == typeof n ? n : n.css,
                        fillRule: "evenodd",
                        d: "M19 0a5 5 0 1 1 0 10 5 5 0 0 1 0-10Zm-1.01 5.46a7.2 7.2 0 0 0 .54 2.56c.21.46.39.63.47.7.08-.07.26-.24.47-.7.28-.62.5-1.52.54-2.56H18Zm-2.71 0a3.75 3.75 0 0 0 2.04 2.89 8.71 8.71 0 0 1-.58-2.9h-1.46Zm5.98.05a8.67 8.67 0 0 1-.57 2.84 3.75 3.75 0 0 0 2.03-2.9h-1.46v.06Zm-3.94-3.86c-1 .5-1.74 1.44-1.98 2.56h1.42c.07-.98.27-1.86.56-2.56ZM19 1.28c-.08.07-.26.24-.47.7a6.9 6.9 0 0 0-.52 2.23H20a6.9 6.9 0 0 0-.52-2.23 1.78 1.78 0 0 0-.47-.7Zm1.68.37c.3.7.49 1.58.56 2.56h1.43a3.76 3.76 0 0 0-1.99-2.56Z",
                        clipRule: "evenodd",
                        className: d,
                    }),
                ],
            });
        },
    },
);
