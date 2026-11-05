l.r(a);
var c = l(477900);
l(582128);
var t = l(646514),
    i = l(996682),
    h = l(27989);
l.d(
    a,
    {},
    {
        EducationIcon: function (s) {
            let {
                    size: a = "md",
                    width: l,
                    height: e,
                    color: n = t.A.colors.INTERACTIVE_ICON_DEFAULT,
                    colorClass: r = "",
                    ...d
                } = s,
                o = (0, h.J)(a),
                p = o?.width ?? l,
                w = o?.height ?? e;
            return (0, c.jsxs)("svg", {
                ...(0, i.A)(d),
                xmlns: "http://www.w3.org/2000/svg",
                width: p,
                height: w,
                fill: "none",
                viewBox: "0 0 24 24",
                children: [
                    (0, c.jsx)("path", {
                        fill: "string" == typeof n ? n : n.css,
                        d: "M22.56 9.63 12.8 13.9a2 2 0 0 1-1.6 0L5 11.19V15a1 1 0 1 1-2 0v-4.69l-1.56-.68a.75.75 0 0 1-.05-1.35l9.69-5.05a2 2 0 0 1 1.84 0l9.69 5.05c.56.29.53 1.1-.05 1.35Z",
                        className: r,
                    }),
                    (0, c.jsx)("path", {
                        fill: "string" == typeof n ? n : n.css,
                        d: "M6.98 18.98a.48.48 0 0 1-.28-.38l-.18-1.43a1 1 0 0 0-.1-.32l-.37-.74a.5.5 0 0 1-.05-.23v-1.7c0-.35.37-.6.7-.45l4.9 2.1c.26.1.54.1.8 0l5.9-2.53c.33-.14.7.1.7.46v3.44c0 .2-.05.39-.18.54C17.65 19.11 14.65 20 12 20c-1.73 0-3.6-.38-5.02-1.02ZM3.38 17a1 1 0 0 0-.99.88l-.25 2a1 1 0 0 0 1 1.12h1.73a1 1 0 0 0 .99-1.12l-.25-2a1 1 0 0 0-1-.88H3.39Z",
                        className: r,
                    }),
                ],
            });
        },
    },
);
