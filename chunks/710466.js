a.r(t);
var l = a(477900);
a(582128);
var i = a(996682),
    e = a(27989);
a.d(
    t,
    {},
    {
        GooglePlayBrandIcon: function (s) {
            let {
                    size: t = "md",
                    width: a,
                    height: c,
                    color: h = "#EA4335",
                    colorClass: p = "",
                    secondaryColor: n = "#FBBC04",
                    secondaryColorClass: r = "",
                    tertiaryColor: d = "#34A853",
                    tertiaryColorClass: o = "",
                    quaternaryColor: f = "#4285F4",
                    quaternaryColorClass: g = "",
                    ...w
                } = s,
                m = (0, e.J)(t),
                x = m?.width ?? a,
                u = m?.height ?? c;
            return (0, l.jsxs)("svg", {
                ...(0, i.A)(w),
                xmlns: "http://www.w3.org/2000/svg",
                width: x,
                height: u,
                fill: "none",
                viewBox: "0 0 24 24",
                children: [
                    (0, l.jsx)("path", {
                        fill: "string" == typeof h ? h : h.css,
                        d: "m11.4 11.54-8.34 8.8a2.25 2.25 0 0 0 3.32 1.35l.02-.01 9.4-5.39-4.4-4.75Z",
                        className: p,
                    }),
                    (0, l.jsx)("path", {
                        fill: "string" == typeof n ? n : n.css,
                        d: "M19.83 10.04 15.77 7.7l-4.56 4.04 4.57 4.56L19.82 14a2.24 2.24 0 0 0 0-3.95Z",
                        className: r,
                    }),
                    (0, l.jsx)("path", {
                        fill: "string" == typeof d ? d : d.css,
                        d: "m11.47 12 4.32-4.28-9.39-5.4a2.28 2.28 0 0 0-3.34 1.34L11.47 12Z",
                        className: o,
                    }),
                    (0, l.jsx)("path", {
                        fill: "string" == typeof f ? f : f.css,
                        d: "M3.08 3.69a2.2 2.2 0 0 0-.08.57V19.8c0 .22.03.39.08.57l8.6-8.56-8.6-8.12Z",
                        className: g,
                    }),
                ],
            });
        },
    },
);
