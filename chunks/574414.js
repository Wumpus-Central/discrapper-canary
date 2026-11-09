a.d(t, { A: () => f });
var r = a(477900),
    i = a(503698),
    s = a.n(i),
    n = a(140735),
    c = a(834730),
    d = a(343053);
a(532294);
var l = a(852717),
    o = a(792996),
    u = a(247060);
let h = [
    "/assets/cee2b812c0cc2a9c.svg",
    ...[, , , ,].fill("/assets/03323a9f08bfe4db.svg"),
    "/assets/c2b958e9d50d3db3.svg",
];
function f(e) {
    let { powerLevel: t, powerLevelUnits: a } = e,
        { size: i } = (0, d.Z)();
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(n.A, { children: o.intl.formatToPlainString(l.default["/nxqc2"], { powerLevel: t }) }),
            (0, r.jsxs)("div", {
                className: s()(u.powerBar, u[i]),
                "aria-hidden": !0,
                children: [
                    (0, r.jsx)(c.E, {
                        variant: "mono-md/normal",
                        color: "text-overlay-dark",
                        className: u.text,
                        children: "LVL",
                    }),
                    (0, r.jsx)(c.E, {
                        variant: "mono-md/bold",
                        color: "text-overlay-dark",
                        className: s()(u.text, u.level),
                        children: t,
                    }),
                    (0, r.jsx)("div", {
                        className: u.units,
                        children: h.map((e, t) =>
                            (0, r.jsx)(
                                "img",
                                { src: e, alt: "", className: s()(u.unit, { [u.unitUnfilled]: t >= a }) },
                                t,
                            ),
                        ),
                    }),
                ],
            }),
        ],
    });
}
