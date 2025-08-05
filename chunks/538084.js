(n.d(t, {
    default: () => _,
    k: () => f
}),
    n(388685));
var r = n(255367),
    i = n(73800),
    a = n(913527),
    o = n.n(a),
    s = n(481060),
    l = n(45251),
    c = n(388032),
    u = n(427676);
let d = 365,
    f = 'SCHEDULED_MESSAGE_CREATE_MODAL_KEY';
function _(e) {
    let { channel: t, transitionState: n, onClose: a, prefilledTime: _ } = e,
        p = o()(),
        h = o()().add(d, 'days'),
        [m, g] = i.useState(null != _ ? o()(_.substring(0, 200)) : p),
        E = (e) => {
            g(e);
        },
        b = (e) => {
            e.isValid() && g(e);
        },
        y = () => {
            ((0, l._e)({
                channelId: t.id,
                scheduledTimestamp: m.toISOString()
            }),
                (0, s.Mr3)(f));
        };
    return (0, r.jsxs)(s.Y0X, {
        transitionState: n,
        size: s.CgR.SMALL,
        'aria-label': c.intl.string(c.t.WbFpq6),
        parentComponent: 'ScheduledMessageCreateModal',
        children: [
            (0, r.jsx)(s.olH, {
                onClick: a,
                className: u.closeButton
            }),
            (0, r.jsx)(s.xBx, {
                separator: !1,
                className: u.header,
                children: (0, r.jsx)(s.X6q, {
                    variant: 'heading-xl/medium',
                    children: c.intl.string(c.t['3+ii4O'])
                })
            }),
            (0, r.jsx)(s.hzk, {
                children: (0, r.jsxs)('div', {
                    className: u.doubleInput,
                    children: [
                        (0, r.jsx)('div', {
                            className: u.column,
                            children: (0, r.jsx)(s.xJW, {
                                title: c.intl.string(c.t.pSZKvL),
                                required: !0,
                                children: (0, r.jsx)(s.Wrb, {
                                    value: m,
                                    onSelect: E,
                                    minDate: p,
                                    maxDate: h,
                                    disabled: !1
                                })
                            })
                        }),
                        (0, r.jsx)('div', {
                            className: u.column,
                            children: (0, r.jsx)(s.xJW, {
                                title: c.intl.string(c.t.GOmEb2),
                                required: !0,
                                children: (0, r.jsx)(s.MGJ, {
                                    value: m,
                                    onChange: b,
                                    hideValue: !1,
                                    disabled: !1
                                })
                            })
                        })
                    ]
                })
            }),
            (0, r.jsxs)(s.mzw, {
                className: u.footer,
                children: [
                    (0, r.jsx)('div', {
                        'data-button-hoisted-classname-wrapper': !0,
                        className: u.cancelButton,
                        children: (0, r.jsx)(s.zxk, {
                            variant: 'secondary',
                            text: c.intl.string(c.t['ETE/oK']),
                            onClick: a
                        })
                    }),
                    (0, r.jsx)(s.zxk, {
                        variant: 'primary',
                        text: c.intl.string(c.t.iQ1Swc),
                        onClick: y,
                        disabled: !1
                    })
                ]
            })
        ]
    });
}
