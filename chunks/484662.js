n.d(t, { Z: () => m });
var a = n(255367);
n(73800);
var r = n(481060),
    l = n(84615),
    i = n(429142),
    s = n(918714),
    o = n(852758),
    c = n(308569),
    d = n(616257),
    u = n(173166);
function m() {
    return (0, a.jsx)(r.zJl, {
        className: d.panel,
        children: (0, a.jsxs)('div', {
            className: u.panelInner,
            children: [
                (0, a.jsxs)('section', {
                    className: u.section,
                    children: [
                        (0, a.jsx)(r.X6q, {
                            variant: 'heading-md/semibold',
                            children: 'Verification Layer'
                        }),
                        (0, a.jsx)('div', {
                            className: u.inputRow,
                            children: (0, a.jsx)(r.zxk, {
                                onClick: () => {
                                    (0, l.q4)(() => (0, a.jsx)(o.Z, {}), {
                                        layerKey: c.CV,
                                        Layer: i.ZP
                                    });
                                },
                                children: 'Open Verification Layer'
                            })
                        })
                    ]
                }),
                (0, a.jsxs)('section', {
                    className: u.section,
                    children: [
                        (0, a.jsx)(r.X6q, {
                            variant: 'heading-md/semibold',
                            children: 'Safety Flow'
                        }),
                        (0, a.jsx)('div', {
                            className: u.inputRow,
                            children: (0, a.jsx)(r.zxk, {
                                onClick: () => {
                                    (0, l.q4)(() => (0, a.jsx)(s.Z, {}), {
                                        layerKey: c.CV,
                                        Layer: i.ZP
                                    });
                                },
                                children: 'Open Safety Flow'
                            })
                        })
                    ]
                }),
                (0, a.jsxs)('section', {
                    className: u.section,
                    children: [
                        (0, a.jsx)(r.X6q, {
                            variant: 'heading-md/semibold',
                            children: 'Layer Controls'
                        }),
                        (0, a.jsx)('div', {
                            className: u.inputRow,
                            children: (0, a.jsx)(r.zxk, {
                                onClick: () => {
                                    l.QP.setState({ fullScreenLayers: [] });
                                },
                                children: 'Close All Layers'
                            })
                        })
                    ]
                })
            ]
        })
    });
}
