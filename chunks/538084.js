n.d(t, {
    default: () => p,
    k: () => u
}),
    n(47120);
var r = n(200651),
    i = n(192379),
    a = n(913527),
    o = n.n(a),
    l = n(481060),
    s = n(45251),
    c = n(388032),
    d = n(917775);
let u = 'SCHEDULED_MESSAGE_CREATE_MODAL_KEY';
function p(e) {
    let { channel: t, transitionState: n, onClose: a, prefilledTime: p } = e,
        m = o()(),
        f = o()().add(365, 'days'),
        [h, g] = i.useState(null != p ? o()(p.substring(0, 200)) : m);
    return (0, r.jsxs)(l.Y0X, {
        transitionState: n,
        size: l.CgR.SMALL,
        'aria-label': c.NW.string(c.t.WbFpq6),
        children: [
            (0, r.jsx)(l.olH, {
                onClick: a,
                className: d.closeButton
            }),
            (0, r.jsx)(l.xBx, {
                separator: !1,
                className: d.header,
                children: (0, r.jsx)(l.X6q, {
                    variant: 'heading-xl/medium',
                    children: c.NW.string(c.t['3+ii4O'])
                })
            }),
            (0, r.jsx)(l.hzk, {
                children: (0, r.jsxs)('div', {
                    className: d.doubleInput,
                    children: [
                        (0, r.jsx)('div', {
                            className: d.column,
                            children: (0, r.jsx)(l.xJW, {
                                title: c.NW.string(c.t.pSZKvL),
                                required: !0,
                                children: (0, r.jsx)(l.Wrb, {
                                    value: h,
                                    onSelect: (e) => {
                                        g(e);
                                    },
                                    minDate: m,
                                    maxDate: f,
                                    disabled: !1
                                })
                            })
                        }),
                        (0, r.jsx)('div', {
                            className: d.column,
                            children: (0, r.jsx)(l.xJW, {
                                title: c.NW.string(c.t.GOmEb2),
                                required: !0,
                                children: (0, r.jsx)(l.MGJ, {
                                    value: h,
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
            (0, r.jsxs)(l.mzw, {
                className: d.footer,
                children: [
                    (0, r.jsx)(l.zxk, {
                        color: l.zxk.Colors.PRIMARY,
                        onClick: a,
                        className: d.cancelButton,
                        children: c.NW.string(c.t['ETE/oK'])
                    }),
                    (0, r.jsx)(l.zxk, {
                        onClick: () => {
                            (0, s._e)({
                                channelId: t.id,
                                scheduledTimestamp: h.toISOString()
                            }),
                                (0, l.Mr3)(u);
                        },
                        disabled: !1,
                        children: c.NW.string(c.t.iQ1Swc)
                    })
                ]
            })
        ]
    });
}
