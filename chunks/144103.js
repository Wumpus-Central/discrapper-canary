n.d(t, { A: () => h });
var l = n(477900),
    a = n(503698),
    r = n.n(a),
    s = n(140735),
    i = n(834730),
    o = n(343053),
    c = n(309913),
    d = n(763166),
    u = n(105292),
    m = n(247060);
let p = [
    "/assets/cee2b812c0cc2a9c.svg",
    ...Array(c.w0 - 2).fill("/assets/03323a9f08bfe4db.svg"),
    "/assets/c2b958e9d50d3db3.svg",
];
function h(e) {
    let { powerLevel: t, powerLevelUnits: n } = e,
        { size: a } = (0, o.Z)();
    return (0, l.jsxs)(l.Fragment, {
        children: [
            (0, l.jsx)(s.A, { children: u.intl.formatToPlainString(d.default["/nxqc2"], { powerLevel: t }) }),
            (0, l.jsxs)("div", {
                className: r()(m.powerBar, m[a]),
                "aria-hidden": !0,
                children: [
                    (0, l.jsx)(i.E, {
                        variant: "experimental/mono-md/normal",
                        color: "text-overlay-dark",
                        className: m.text,
                        children: "LVL",
                    }),
                    (0, l.jsx)(i.E, {
                        variant: "experimental/mono-md/bold",
                        color: "text-overlay-dark",
                        className: r()(m.text, m.level),
                        children: t,
                    }),
                    (0, l.jsx)("div", {
                        className: m.units,
                        children: p.map((e, t) =>
                            (0, l.jsx)(
                                "img",
                                { src: e, alt: "", className: r()(m.unit, { [m.unitUnfilled]: t >= n }) },
                                t,
                            ),
                        ),
                    }),
                ],
            }),
        ],
    });
}
