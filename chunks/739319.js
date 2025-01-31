n.d(t, { Z: () => f }), n(47120);
var i = n(200651),
    r = n(192379),
    a = n(120356),
    s = n.n(a),
    o = n(481060),
    l = n(454585),
    u = n(572004),
    c = n(388032),
    d = n(417336);
function f(e) {
    let {
            element: {
                data: { title: t, body: n, sms: a, is_localized: f }
            }
        } = e,
        [_, p] = r.useState(!1),
        h = r.useRef(l.Z.reactParserFor(l.Z.defaultRules));
    if (!f) return null;
    let m = () => {
        (0, u.JG)(a) && p(!0);
    };
    return (0, i.jsxs)('div', {
        className: d.container,
        children: [
            (0, i.jsx)(o.X6q, {
                variant: 'heading-sm/semibold',
                color: 'header-secondary',
                className: d.header,
                children: t
            }),
            (0, i.jsx)(o.Text, {
                variant: 'text-sm/normal',
                className: d.bodyText,
                children: h.current(n)
            }),
            (0, i.jsx)('div', {
                children: (0, i.jsxs)('div', {
                    className: s()(d.smsNumberContainer, { [d.copied]: _ }),
                    children: [
                        (0, i.jsx)(o.Text, {
                            variant: 'text-md/normal',
                            selectable: !0,
                            className: d.smsNumberText,
                            children: a
                        }),
                        (0, i.jsx)(o.zxk, {
                            size: o.zxk.Sizes.SMALL,
                            className: d.__invalid_trailingButton,
                            onClick: m,
                            color: o.zxk.Colors.PRIMARY,
                            children: _ ? c.intl.string(c.t['t5VZ8/']) : c.intl.string(c.t.OpuAlJ)
                        })
                    ]
                })
            })
        ]
    });
}
