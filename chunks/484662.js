n.d(t, { Z: () => m });
var a = n(54381);
n(473749);
var l = n(481060),
    i = n(84615),
    r = n(429142),
    s = n(918714),
    o = n(852758),
    c = n(308569),
    d = n(711322),
    u = n(451429);
function m() {
    return (0, a.jsx)(l.zJl, {
        className: u.panel,
        children: (0, a.jsxs)("div", {
            className: d.panelInner,
            children: [
                (0, a.jsxs)("section", {
                    className: d.section,
                    children: [
                        (0, a.jsx)(l.Heading, {
                            variant: "heading-md/semibold",
                            children: "Verification Layer",
                        }),
                        (0, a.jsx)("div", {
                            className: d.inputRow,
                            children: (0, a.jsx)(l.Button, {
                                variant: "primary",
                                text: "Open Verification Layer",
                                onClick: () => {
                                    (0, i.q4)(() => (0, a.jsx)(o.Z, {}), {
                                        layerKey: c.CV,
                                        Layer: r.ZP,
                                    });
                                },
                            }),
                        }),
                    ],
                }),
                (0, a.jsxs)("section", {
                    className: d.section,
                    children: [
                        (0, a.jsx)(l.Heading, {
                            variant: "heading-md/semibold",
                            children: "Safety Flow",
                        }),
                        (0, a.jsx)("div", {
                            className: d.inputRow,
                            children: (0, a.jsx)(l.Button, {
                                variant: "primary",
                                text: "Open Safety Flow",
                                onClick: () => {
                                    (0, i.q4)(
                                        (e) => {
                                            let { closeLayer: t } = e;
                                            return (0, a.jsx)(s.Z, { onClose: t });
                                        },
                                        {
                                            layerKey: c.CV,
                                            Layer: r.ZP,
                                        },
                                    );
                                },
                            }),
                        }),
                    ],
                }),
                (0, a.jsxs)("section", {
                    className: d.section,
                    children: [
                        (0, a.jsx)(l.Heading, {
                            variant: "heading-md/semibold",
                            children: "Layer Controls",
                        }),
                        (0, a.jsx)("div", {
                            className: d.inputRow,
                            children: (0, a.jsx)(l.Button, {
                                variant: "primary",
                                text: "Close All Layers",
                                onClick: () => {
                                    i.QP.setState({ fullScreenLayers: [] });
                                },
                            }),
                        }),
                    ],
                }),
            ],
        }),
    });
}
