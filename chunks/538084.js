n.d(t, {
    default: () => m,
    k: () => u
}),
    n(47120);
var i = n(200651),
    l = n(192379),
    a = n(913527),
    r = n.n(a),
    s = n(481060),
    o = n(45251),
    c = n(388032),
    d = n(720851);
let u = 'SCHEDULED_MESSAGE_CREATE_MODAL_KEY';
function m(e) {
    let { channel: t, transitionState: n, onClose: a, prefilledTime: m } = e,
        _ = r()(),
        h = r()().add(365, 'days'),
        [p, g] = l.useState(null != m ? r()(m.substring(0, 200)) : _);
    return (0, i.jsxs)(s.Y0X, {
        transitionState: n,
        size: s.CgR.SMALL,
        'aria-label': c.intl.string(c.t.WbFpq6),
        children: [
            (0, i.jsx)(s.olH, {
                onClick: a,
                className: d.closeButton
            }),
            (0, i.jsx)(s.xBx, {
                separator: !1,
                className: d.header,
                children: (0, i.jsx)(s.X6q, {
                    variant: 'heading-xl/medium',
                    children: c.intl.string(c.t['3+ii4O'])
                })
            }),
            (0, i.jsx)(s.hzk, {
                children: (0, i.jsxs)('div', {
                    className: d.doubleInput,
                    children: [
                        (0, i.jsx)('div', {
                            className: d.column,
                            children: (0, i.jsx)(s.xJW, {
                                title: c.intl.string(c.t.pSZKvL),
                                required: !0,
                                children: (0, i.jsx)(s.Wrb, {
                                    value: p,
                                    onSelect: (e) => {
                                        g(e);
                                    },
                                    minDate: _,
                                    maxDate: h,
                                    disabled: !1
                                })
                            })
                        }),
                        (0, i.jsx)('div', {
                            className: d.column,
                            children: (0, i.jsx)(s.xJW, {
                                title: c.intl.string(c.t.GOmEb2),
                                required: !0,
                                children: (0, i.jsx)(s.MGJ, {
                                    value: p,
                                    onChange: (e) => {
                                        e.isValid() && g(e);
                                    },
                                    hideValue: !1,
                                    disabled: !1
                                })
                            })
                        })
                    ]
                })
            }),
            (0, i.jsxs)(s.mzw, {
                className: d.footer,
                children: [
                    (0, i.jsx)(s.zxk, {
                        color: s.zxk.Colors.PRIMARY,
                        onClick: a,
                        className: d.cancelButton,
                        children: c.intl.string(c.t['ETE/oK'])
                    }),
                    (0, i.jsx)(s.zxk, {
                        onClick: () => {
                            (0, o._e)({
                                channelId: t.id,
                                scheduledTimestamp: p.toISOString()
                            }),
                                (0, s.Mr3)(u);
                        },
                        disabled: !1,
                        children: c.intl.string(c.t.iQ1Swc)
                    })
                ]
            })
        ]
    });
}
