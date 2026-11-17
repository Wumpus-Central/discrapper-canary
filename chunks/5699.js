s.r(a);
var c = s(477900);
s(582128);
var l = s(331322),
    r = s(892672),
    e = s(233569);
s.d(
    a,
    {},
    {
        default: function (i) {
            let { character: a, organizationIconUrl: s } = i;
            return (0, c.jsxs)(l.B, {
                direction: "horizontal",
                align: "center",
                justify: "center",
                gap: 12,
                fullWidth: !1,
                "aria-hidden": !0,
                children: [
                    (0, c.jsx)(r.A, { iconUrl: a?.iconUrl, size: 96, fallback: "character" }),
                    (0, c.jsxs)(l.B, {
                        direction: "horizontal",
                        gap: 4,
                        fullWidth: !1,
                        children: [
                            (0, c.jsx)("div", { className: e.O }),
                            (0, c.jsx)("div", { className: e.O }),
                            (0, c.jsx)("div", { className: e.O }),
                        ],
                    }),
                    (0, c.jsx)(r.A, { iconUrl: s, size: 96, fallback: "guild" }),
                ],
            });
        },
    },
);
