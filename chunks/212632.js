n.d(t, { Z: () => p }), n(47120);
var i = n(200651),
    s = n(192379),
    l = n(120356),
    r = n.n(l),
    a = n(481060),
    o = n(981631),
    c = n(388032),
    d = n(361143),
    u = n(483938);
let h = 0,
    m = () => 'notification-position-selector-'.concat(h++),
    g = (e) => {
        switch (e) {
            case o._vf.TOP_LEFT:
                return c.intl.string(c.t.xlchpa);
            case o._vf.TOP_RIGHT:
                return c.intl.string(c.t['4uHRHB']);
            case o._vf.BOTTOM_LEFT:
                return c.intl.string(c.t.ovWFnJ);
            case o._vf.BOTTOM_RIGHT:
                return c.intl.string(c.t['M/9V7+']);
            default:
                return c.intl.string(c.t.AlY4ZW);
        }
    },
    x = [o._vf.DISABLED, o._vf.TOP_LEFT, o._vf.TOP_RIGHT, o._vf.BOTTOM_LEFT, o._vf.BOTTOM_RIGHT];
function _(e) {
    let { position: t, onChange: n } = e,
        [l] = s.useState(() => m()),
        h = t === o._vf.DISABLED ? c.intl.string(c.t.R6LxVV) : c.intl.formatToPlainString(c.t.XXHDMz, { position: g(t) });
    return (0, i.jsxs)('div', {
        children: [
            (0, i.jsx)(a.tEY, {
                within: !0,
                offset: -2,
                children: (0, i.jsx)('div', {
                    className: r()(d.wrapper, { [d.disabledSelected]: t === o._vf.DISABLED }),
                    children: x.map((e) =>
                        (0, i.jsxs)(
                            'label',
                            {
                                className: r()({
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
                                        ? (0, i.jsx)(a.t6m, {
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
            (0, i.jsx)(a.R94, {
                type: a.geA.DESCRIPTION,
                className: u.marginTop8,
                children: h
            })
        ]
    });
}
_.Positions = o._vf;
let p = _;
