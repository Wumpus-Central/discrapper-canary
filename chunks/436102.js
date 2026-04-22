a.d(t, { A: () => p });
var n = a(627968);
a(64700);
var l = a(573613),
    i = a(534514),
    s = a(821609),
    r = a(361158),
    o = a(80556),
    d = a(163679),
    c = a(524134),
    u = a(87404),
    m = a(214868),
    h = a(505206);
function p() {
    return (0, n.jsx)(l.Ip, {
        className: h.nd,
        children: (0, n.jsxs)("div", {
            className: m.l$,
            children: [
                (0, n.jsxs)("section", {
                    className: m.uW,
                    children: [
                        (0, n.jsx)(i.D, { variant: "heading-md/semibold", children: "Verification Layer" }),
                        (0, n.jsx)("div", {
                            className: m.bd,
                            children: (0, n.jsx)(s.$, {
                                variant: "primary",
                                text: "Open Verification Layer",
                                onClick: () => {
                                    (0, r.B8)(() => (0, n.jsx)(c.A, {}), { layerKey: u._s, Layer: o.Ay });
                                },
                            }),
                        }),
                    ],
                }),
                (0, n.jsxs)("section", {
                    className: m.uW,
                    children: [
                        (0, n.jsx)(i.D, { variant: "heading-md/semibold", children: "Safety Flow" }),
                        (0, n.jsx)("div", {
                            className: m.bd,
                            children: (0, n.jsx)(s.$, {
                                variant: "primary",
                                text: "Open Safety Flow",
                                onClick: () => {
                                    (0, r.B8)(
                                        (e) => {
                                            let { closeLayer: t } = e;
                                            return (0, n.jsx)(d.A, { onClose: t });
                                        },
                                        { layerKey: u._s, Layer: o.Ay },
                                    );
                                },
                            }),
                        }),
                    ],
                }),
                (0, n.jsxs)("section", {
                    className: m.uW,
                    children: [
                        (0, n.jsx)(i.D, { variant: "heading-md/semibold", children: "Layer Controls" }),
                        (0, n.jsx)("div", {
                            className: m.bd,
                            children: (0, n.jsx)(s.$, {
                                variant: "primary",
                                text: "Close All Layers",
                                onClick: () => {
                                    r.xr.setState({ fullScreenLayers: [] });
                                },
                            }),
                        }),
                    ],
                }),
            ],
        }),
    });
}
