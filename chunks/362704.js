l.r(e);
var a = l(477900);
l(582128);
var c = l(646514),
    i = l(996682),
    t = l(27989);
l.d(
    e,
    {},
    {
        RecordPlayerIcon: function (s) {
            let {
                    size: e = "md",
                    width: l,
                    height: d,
                    color: h = c.A.colors.INTERACTIVE_ICON_DEFAULT,
                    colorClass: r = "",
                    ...n
                } = s,
                o = (0, t.J)(e),
                p = o?.width ?? l,
                w = o?.height ?? d;
            return (0, a.jsxs)("svg", {
                ...(0, i.A)(n),
                xmlns: "http://www.w3.org/2000/svg",
                width: p,
                height: w,
                fill: "none",
                viewBox: "0 0 24 24",
                children: [
                    (0, a.jsx)("path", {
                        fill: "string" == typeof h ? h : h.css,
                        d: "M12 13a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z",
                        className: r,
                    }),
                    (0, a.jsx)("path", {
                        fill: "string" == typeof h ? h : h.css,
                        fillRule: "evenodd",
                        d: "M18.03 2.8a11 11 0 1 0 2.52 2.28c-.28-.34-.8-.13-.8.31v7.37c0 1-.4 1.95-1.1 2.65l-.78.78a.6.6 0 0 0-.14.53c.08.53-.08 1.1-.5 1.52l-1 1a1.75 1.75 0 1 1-2.47-2.48l1-1c.42-.41.99-.57 1.52-.49.2.03.4 0 .53-.14l.78-.78c.42-.42.66-1 .66-1.6V3.22a.49.49 0 0 0-.22-.41ZM12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm-7-2a1 1 0 0 0 1-1 6 6 0 0 1 6-6 1 1 0 1 0 0-2 8 8 0 0 0-8 8 1 1 0 0 0 1 1Z",
                        clipRule: "evenodd",
                        className: r,
                    }),
                ],
            });
        },
    },
);
