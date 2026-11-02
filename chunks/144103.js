a.d(t, { A: () => _ });
var r = a(477900),
    s = a(503698),
    i = a.n(s),
    c = a(140735),
    n = a(834730),
    d = a(343053),
    l = a(309913),
    o = a(842089),
    u = a(105292),
    h = a(247060);
let f = [
    "/assets/cee2b812c0cc2a9c.svg",
    ...Array(l.w0 - 2).fill("/assets/03323a9f08bfe4db.svg"),
    "/assets/c2b958e9d50d3db3.svg",
];
function _(e) {
    let { powerLevel: t, powerLevelUnits: a } = e,
        { size: s } = (0, d.Z)();
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(c.A, { children: u.intl.formatToPlainString(o.default["/nxqc2"], { powerLevel: t }) }),
            (0, r.jsxs)("div", {
                className: i()(h.powerBar, h[s]),
                "aria-hidden": !0,
                children: [
                    (0, r.jsx)(n.E, {
                        variant: "mono-md/normal",
                        color: "text-overlay-dark",
                        className: h.text,
                        children: "LVL",
                    }),
                    (0, r.jsx)(n.E, {
                        variant: "mono-md/bold",
                        color: "text-overlay-dark",
                        className: i()(h.text, h.level),
                        children: t,
                    }),
                    (0, r.jsx)("div", {
                        className: h.units,
                        children: f.map((e, t) =>
                            (0, r.jsx)(
                                "img",
                                { src: e, alt: "", className: i()(h.unit, { [h.unitUnfilled]: t >= a }) },
                                t,
                            ),
                        ),
                    }),
                ],
            }),
        ],
    });
}
