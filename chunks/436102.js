n.d(t, { A: () => m });
var a = n(627968);
n(64700);
var l = n(397927),
    i = n(361158),
    r = n(80556),
    s = n(163679),
    o = n(524134),
    c = n(87404),
    d = n(815907),
    u = n(661251);
function m() {
    return (0, a.jsx)(l.IpV, {
        className: u.nd,
        children: (0, a.jsxs)("div", {
            className: d.l$,
            children: [
                (0, a.jsxs)("section", {
                    className: d.uW,
                    children: [
                        (0, a.jsx)(l.Heading, {
                            variant: "heading-md/semibold",
                            children: "Verification Layer",
                        }),
                        (0, a.jsx)("div", {
                            className: d.bd,
                            children: (0, a.jsx)(l.Button, {
                                variant: "primary",
                                text: "Open Verification Layer",
                                onClick: () => {
                                    (0, i.B8)(() => (0, a.jsx)(o.A, {}), {
                                        layerKey: c._s,
                                        Layer: r.Ay,
                                    });
                                },
                            }),
                        }),
                    ],
                }),
                (0, a.jsxs)("section", {
                    className: d.uW,
                    children: [
                        (0, a.jsx)(l.Heading, {
                            variant: "heading-md/semibold",
                            children: "Safety Flow",
                        }),
                        (0, a.jsx)("div", {
                            className: d.bd,
                            children: (0, a.jsx)(l.Button, {
                                variant: "primary",
                                text: "Open Safety Flow",
                                onClick: () => {
                                    (0, i.B8)(
                                        (e) => {
                                            let { closeLayer: t } = e;
                                            return (0, a.jsx)(s.A, { onClose: t });
                                        },
                                        {
                                            layerKey: c._s,
                                            Layer: r.Ay,
                                        },
                                    );
                                },
                            }),
                        }),
                    ],
                }),
                (0, a.jsxs)("section", {
                    className: d.uW,
                    children: [
                        (0, a.jsx)(l.Heading, {
                            variant: "heading-md/semibold",
                            children: "Layer Controls",
                        }),
                        (0, a.jsx)("div", {
                            className: d.bd,
                            children: (0, a.jsx)(l.Button, {
                                variant: "primary",
                                text: "Close All Layers",
                                onClick: () => {
                                    i.xr.setState({ fullScreenLayers: [] });
                                },
                            }),
                        }),
                    ],
                }),
            ],
        }),
    });
}
