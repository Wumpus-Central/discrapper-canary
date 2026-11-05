e.r(s);
var h = e(477900);
e(582128);
var i = e(646514),
    t = e(996682),
    l = e(27989);
e.d(
    s,
    {},
    {
        MobilePhoneSpeakerIcon: function (a) {
            let {
                    size: s = "md",
                    width: e,
                    height: c,
                    color: d = i.A.colors.INTERACTIVE_ICON_DEFAULT,
                    colorClass: n = "",
                    ...o
                } = a,
                p = (0, l.J)(s),
                r = p?.width ?? e,
                v = p?.height ?? c;
            return (0, h.jsxs)("svg", {
                ...(0, t.A)(o),
                xmlns: "http://www.w3.org/2000/svg",
                width: r,
                height: v,
                fill: "none",
                viewBox: "0 0 24 24",
                children: [
                    (0, h.jsx)("path", {
                        fill: "string" == typeof d ? d : d.css,
                        d: "M8 1a3 3 0 0 0-3 3v16a3 3 0 0 0 3 3h2.5a.5.5 0 0 0 .5-.5v-5a.5.5 0 0 0-.5-.5H8a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1v3.5c0 .28.22.5.5.5h1a.5.5 0 0 0 .5-.5V4a3 3 0 0 0-3-3H8ZM18 18a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z",
                        className: n,
                    }),
                    (0, h.jsx)("path", {
                        fill: "string" == typeof d ? d : d.css,
                        fillRule: "evenodd",
                        d: "M14 10a1 1 0 0 0-1 1v11a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V11a1 1 0 0 0-1-1h-6Zm5.5 8a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0ZM18 13a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z",
                        clipRule: "evenodd",
                        className: n,
                    }),
                ],
            });
        },
    },
);
