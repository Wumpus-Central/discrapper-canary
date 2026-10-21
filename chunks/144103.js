n.d(t, { A: () => p });
var l = n(477900),
    r = n(503698),
    a = n.n(r),
    i = n(140735),
    s = n(834730),
    o = n(343053),
    c = n(309913),
    u = n(763166),
    d = n(105292),
    m = n(247060);
let h = [
    "/assets/cee2b812c0cc2a9c.svg",
    ...Array(c.w0 - 2).fill("/assets/03323a9f08bfe4db.svg"),
    "/assets/c2b958e9d50d3db3.svg",
];
function p(e) {
    let { powerLevel: t, powerLevelUnits: n } = e,
        { size: r } = (0, o.Z)();
    return (0, l.jsxs)(l.Fragment, {
        children: [
            (0, l.jsx)(i.A, { children: d.intl.formatToPlainString(u.default["/nxqc2"], { powerLevel: t }) }),
            (0, l.jsxs)("div", {
                className: a()(m.powerBar, m[r]),
                "aria-hidden": !0,
                children: [
                    (0, l.jsx)(s.E, {
                        variant: "experimental/mono-md/normal",
                        color: "text-overlay-dark",
                        className: m.text,
                        children: "LVL",
                    }),
                    (0, l.jsx)(s.E, {
                        variant: "experimental/mono-md/bold",
                        color: "text-overlay-dark",
                        className: a()(m.text, m.level),
                        children: t,
                    }),
                    (0, l.jsx)("div", {
                        className: m.units,
                        children: h.map((e, t) =>
                            (0, l.jsx)(
                                "img",
                                { src: e, alt: "", className: a()(m.unit, { [m.unitUnfilled]: t >= n }) },
                                t,
                            ),
                        ),
                    }),
                ],
            }),
        ],
    });
}
