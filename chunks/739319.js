r.d(n, {
    Z: function () {
        return h;
    }
});
var i = r(47120);
var a = r(200651),
    s = r(192379),
    o = r(120356),
    l = r.n(o),
    u = r(481060),
    c = r(454585),
    d = r(572004),
    f = r(388032),
    _ = r(417336);
function h(e) {
    let {
            element: {
                data: { title: n, body: r, sms: i, is_localized: o }
            }
        } = e,
        [h, p] = s.useState(!1),
        m = s.useRef(c.Z.reactParserFor(c.Z.defaultRules));
    if (!o) return null;
    let g = () => {
        (0, d.JG)(i) && p(!0);
    };
    return (0, a.jsxs)('div', {
        className: _.container,
        children: [
            (0, a.jsx)(u.Heading, {
                variant: 'heading-sm/semibold',
                color: 'header-secondary',
                className: _.header,
                children: n
            }),
            (0, a.jsx)(u.Text, {
                variant: 'text-sm/normal',
                className: _.bodyText,
                children: m.current(r)
            }),
            (0, a.jsx)('div', {
                className: _.__invalid_smsInfoContainer,
                children: (0, a.jsxs)('div', {
                    className: l()(_.smsNumberContainer, { [_.copied]: h }),
                    children: [
                        (0, a.jsx)(u.Text, {
                            variant: 'text-md/normal',
                            selectable: !0,
                            className: _.smsNumberText,
                            children: i
                        }),
                        (0, a.jsx)(u.Button, {
                            size: u.Button.Sizes.SMALL,
                            className: _.__invalid_trailingButton,
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
