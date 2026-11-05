i.r(t);
var h = i(477900);
i(582128);
var e = i(996682),
    c = i(27989);
i.d(
    t,
    {},
    {
        BlueskyBrandIcon: function (s) {
            let { size: t = "md", width: i, height: n, color: r = "#0085FF", colorClass: d = "", ...a } = s,
                p = (0, c.J)(t),
                l = p?.width ?? i,
                w = p?.height ?? n;
            return (0, h.jsx)("svg", {
                ...(0, e.A)(a),
                xmlns: "http://www.w3.org/2000/svg",
                width: l,
                height: w,
                fill: "none",
                viewBox: "0 0 24 24",
                children: (0, h.jsx)("path", {
                    fill: "string" == typeof r ? r : r.css,
                    d: "M6.9 5.08C8.97 6.64 11.2 9.8 12 11.5v4.5c0-.1-.04.01-.12.24-.42 1.27-2.08 6.19-5.88 2.25-2-2.07-1.07-4.14 2.57-4.77-2.09.36-4.43-.23-5.07-2.55-.19-.66-.5-4.77-.5-5.33 0-2.77 2.41-1.9 3.9-.77Zm10.2 0C15.03 6.64 12.8 9.8 12 11.5v4.5c0-.1.04.01.12.24.42 1.27 2.08 6.19 5.88 2.25 2-2.07 1.07-4.14-2.57-4.77 2.09.36 4.43-.23 5.07-2.55.18-.66.5-4.77.5-5.33 0-2.77-2.41-1.9-3.9-.77Z",
                    className: d,
                }),
            });
        },
    },
);
