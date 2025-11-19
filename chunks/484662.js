n.d(t, { Z: () => m });
var a = n(54381);
n(473749);
var l = n(481060),
    r = n(84615),
    i = n(429142),
    s = n(918714),
    o = n(852758),
    c = n(308569),
    d = n(596533),
    u = n(866403);
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
                                    (0, r.q4)(() => (0, a.jsx)(o.Z, {}), {
                                        layerKey: c.CV,
                                        Layer: i.ZP,
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
                                    (0, r.q4)(
                                        (e) => {
                                            let { closeLayer: t } = e;
                                            return (0, a.jsx)(s.Z, { onClose: t });
                                        },
                                        {
                                            layerKey: c.CV,
                                            Layer: i.ZP,
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
                                    r.QP.setState({ fullScreenLayers: [] });
                                },
                            }),
                        }),
                    ],
                }),
            ],
        }),
    });
}
