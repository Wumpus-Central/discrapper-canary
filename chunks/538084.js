n.d(t, {
    default: () => p,
    k: () => d
}),
    n(388685);
var r = n(255367),
    i = n(73800),
    l = n(913527),
    a = n.n(l),
    o = n(481060),
    s = n(45251),
    c = n(388032),
    u = n(427676);
let d = 'SCHEDULED_MESSAGE_CREATE_MODAL_KEY';
function p(e) {
    let { channel: t, transitionState: n, onClose: l, prefilledTime: p } = e,
        m = a()(),
        f = a()().add(365, 'days'),
        [h, g] = i.useState(null != p ? a()(p.substring(0, 200)) : m);
    return (0, r.jsxs)(o.Y0X, {
        transitionState: n,
        size: o.CgR.SMALL,
        'aria-label': c.intl.string(c.t.WbFpq6),
        children: [
            (0, r.jsx)(o.olH, {
                onClick: l,
                className: u.closeButton
            }),
            (0, r.jsx)(o.xBx, {
                separator: !1,
                className: u.header,
                children: (0, r.jsx)(o.X6q, {
                    variant: 'heading-xl/medium',
                    children: c.intl.string(c.t['3+ii4O'])
                })
            }),
            (0, r.jsx)(o.hzk, {
                children: (0, r.jsxs)('div', {
                    className: u.doubleInput,
                    children: [
                        (0, r.jsx)('div', {
                            className: u.column,
                            children: (0, r.jsx)(o.xJW, {
                                title: c.intl.string(c.t.pSZKvL),
                                required: !0,
                                children: (0, r.jsx)(o.Wrb, {
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
                            className: u.column,
                            children: (0, r.jsx)(o.xJW, {
                                title: c.intl.string(c.t.GOmEb2),
                                required: !0,
                                children: (0, r.jsx)(o.MGJ, {
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
            (0, r.jsxs)(o.mzw, {
                className: u.footer,
                children: [
                    (0, r.jsx)(o.zxk, {
                        color: o.zxk.Colors.PRIMARY,
                        onClick: l,
                        className: u.cancelButton,
                        children: c.intl.string(c.t['ETE/oK'])
                    }),
                    (0, r.jsx)(o.zxk, {
                        onClick: () => {
                            (0, s._e)({
                                channelId: t.id,
                                scheduledTimestamp: h.toISOString()
                            }),
                                (0, o.Mr3)(d);
                        },
                        disabled: !1,
                        children: c.intl.string(c.t.iQ1Swc)
                    })
                ]
            })
        ]
    });
}
