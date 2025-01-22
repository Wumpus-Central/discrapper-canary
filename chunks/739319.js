r.d(n, {
    Z: function () {
        return h;
    }
});
var i = r(47120);
var a = r(200651),
    o = r(192379),
    s = r(120356),
    l = r.n(s),
    u = r(481060),
    c = r(454585),
    d = r(572004),
    f = r(388032),
    p = r(417336);
function h(e) {
    let {
            element: {
                data: { title: n, body: r, sms: i, is_localized: s }
            }
        } = e,
        [h, _] = o.useState(!1),
        m = o.useRef(c.Z.reactParserFor(c.Z.defaultRules));
    if (!s) return null;
    let g = () => {
        (0, d.JG)(i) && _(!0);
    };
    return (0, a.jsxs)('div', {
        className: p.container,
        children: [
            (0, a.jsx)(u.Heading, {
                variant: 'heading-sm/semibold',
                color: 'header-secondary',
                className: p.header,
                children: n
            }),
            (0, a.jsx)(u.Text, {
                variant: 'text-sm/normal',
                className: p.bodyText,
                children: m.current(r)
            }),
            (0, a.jsx)('div', {
                children: (0, a.jsxs)('div', {
                    className: l()(p.smsNumberContainer, { [p.copied]: h }),
                    children: [
                        (0, a.jsx)(u.Text, {
                            variant: 'text-md/normal',
                            selectable: !0,
                            className: p.smsNumberText,
                            children: i
                        }),
                        (0, a.jsx)(u.Button, {
                            size: u.Button.Sizes.SMALL,
                            className: p.__invalid_trailingButton,
                            onClick: g,
                            color: u.Button.Colors.PRIMARY,
                            children: h ? f.intl.string(f.t['t5VZ8/']) : f.intl.string(f.t.OpuAlJ)
                        })
                    ]
                })
            })
        ]
    });
}
