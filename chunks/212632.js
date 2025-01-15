n(47120);
var i = n(200651),
    r = n(192379),
    l = n(120356),
    a = n.n(l),
    s = n(481060),
    o = n(981631),
    u = n(388032),
    d = n(373780),
    c = n(232186);
let h = 0,
    f = () => 'notification-position-selector-'.concat(h++),
    g = (e) => {
        switch (e) {
            case o._vf.TOP_LEFT:
                return u.intl.string(u.t.xlchpa);
            case o._vf.TOP_RIGHT:
                return u.intl.string(u.t['4uHRHB']);
            case o._vf.BOTTOM_LEFT:
                return u.intl.string(u.t.ovWFnJ);
            case o._vf.BOTTOM_RIGHT:
                return u.intl.string(u.t['M/9V7+']);
            default:
                return u.intl.string(u.t.AlY4ZW);
        }
    },
    p = [o._vf.DISABLED, o._vf.TOP_LEFT, o._vf.TOP_RIGHT, o._vf.BOTTOM_LEFT, o._vf.BOTTOM_RIGHT];
function b(e) {
    let { position: t, onChange: n } = e,
        [l] = r.useState(() => f()),
        h = t === o._vf.DISABLED ? u.intl.string(u.t.R6LxVV) : u.intl.formatToPlainString(u.t.XXHDMz, { position: g(t) });
    return (0, i.jsxs)('div', {
        children: [
            (0, i.jsx)(s.FocusRing, {
                within: !0,
                offset: -2,
                children: (0, i.jsx)('div', {
                    className: a()(d.wrapper, { [d.disabledSelected]: t === o._vf.DISABLED }),
                    children: p.map((e) =>
                        (0, i.jsxs)(
                            'label',
                            {
                                className: a()({
                                    [d.selected]: e === t,
                                    [d.disabled]: e === o._vf.DISABLED,
                                    [d.topRight]: e === o._vf.TOP_RIGHT,
                                    [d.topLeft]: e === o._vf.TOP_LEFT,
                                    [d.bottomRight]: e === o._vf.BOTTOM_RIGHT,
                                    [d.bottomLeft]: e === o._vf.BOTTOM_LEFT
                                }),
                                children: [
                                    g(e),
                                    e === o._vf.DISABLED
                                        ? (0, i.jsx)(s.DenyIcon, {
                                              size: 'md',
                                              color: 'currentColor',
                                              className: d.disabledIcon
                                          })
                                        : null,
                                    (0, i.jsx)('input', {
                                        type: 'radio',
                                        name: l,
                                        value: e,
                                        onChange: (t) => n(t, e),
                                        className: d.hiddenInput
                                    })
                                ]
                            },
                            e
                        )
                    )
                })
            }),
            (0, i.jsx)(s.FormText, {
                type: s.FormTextTypes.DESCRIPTION,
                className: c.marginTop8,
                children: h
            })
        ]
    });
}
(b.Positions = o._vf), (t.Z = b);
