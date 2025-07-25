a.d(t, { Z: () => m });
var n = a(255367);
a(73800);
var r = a(481060),
    l = a(84615),
    i = a(429142),
    s = a(918714),
    o = a(852758),
    c = a(308569),
    d = a(546147),
    u = a(616257);
function m() {
    return (0, n.jsx)(r.zJl, {
        className: u.panel,
        children: (0, n.jsxs)('div', {
            className: d.panelInner,
            children: [
                (0, n.jsxs)('section', {
                    className: d.section,
                    children: [
                        (0, n.jsx)(r.X6q, {
                            variant: 'heading-md/semibold',
                            children: 'Verification Layer'
                        }),
                        (0, n.jsx)('div', {
                            className: d.inputRow,
                            children: (0, n.jsx)(r.zxk, {
                                variant: 'primary',
                                text: 'Open Verification Layer',
                                onClick: () => {
                                    (0, l.q4)(() => (0, n.jsx)(o.Z, {}), {
                                        layerKey: c.CV,
                                        Layer: i.ZP
                                    });
                                }
                            })
                        })
                    ]
                }),
                (0, n.jsxs)('section', {
                    className: d.section,
                    children: [
                        (0, n.jsx)(r.X6q, {
                            variant: 'heading-md/semibold',
                            children: 'Safety Flow'
                        }),
                        (0, n.jsx)('div', {
                            className: d.inputRow,
                            children: (0, n.jsx)(r.zxk, {
                                variant: 'primary',
                                text: 'Open Safety Flow',
                                onClick: () => {
                                    (0, l.q4)(() => (0, n.jsx)(s.Z, {}), {
                                        layerKey: c.CV,
                                        Layer: i.ZP
                                    });
                                }
                            })
                        })
                    ]
                }),
                (0, n.jsxs)('section', {
                    className: d.section,
                    children: [
                        (0, n.jsx)(r.X6q, {
                            variant: 'heading-md/semibold',
                            children: 'Layer Controls'
                        }),
                        (0, n.jsx)('div', {
                            className: d.inputRow,
                            children: (0, n.jsx)(r.zxk, {
                                variant: 'primary',
                                text: 'Close All Layers',
                                onClick: () => {
                                    l.QP.setState({ fullScreenLayers: [] });
                                }
                            })
                        })
                    ]
                })
            ]
        })
    });
}
