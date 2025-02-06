n.d(t, { Z: () => I }), n(47120);
var l = n(200651),
    i = n(192379),
    a = n(120356),
    r = n.n(a),
    s = n(481060),
    o = n(981631),
    u = n(388032),
    d = n(373780),
    c = n(232186);
let E = 0,
    _ = () => 'notification-position-selector-'.concat(E++),
    C = (e) => {
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
    h = [o._vf.DISABLED, o._vf.TOP_LEFT, o._vf.TOP_RIGHT, o._vf.BOTTOM_LEFT, o._vf.BOTTOM_RIGHT];
function T(e) {
    let { position: t, onChange: n } = e,
        [a] = i.useState(() => _()),
        E = t === o._vf.DISABLED ? u.intl.string(u.t.R6LxVV) : u.intl.formatToPlainString(u.t.XXHDMz, { position: C(t) });
    return (0, l.jsxs)('div', {
        children: [
            (0, l.jsx)(s.tEY, {
                within: !0,
                offset: -2,
                children: (0, l.jsx)('div', {
                    className: r()(d.wrapper, { [d.disabledSelected]: t === o._vf.DISABLED }),
                    children: h.map((e) =>
                        (0, l.jsxs)(
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
                                    C(e),
                                    e === o._vf.DISABLED
                                        ? (0, l.jsx)(s.t6m, {
                                              size: 'md',
                                              color: 'currentColor',
                                              className: d.disabledIcon
                                          })
                                        : null,
                                    (0, l.jsx)('input', {
                                        type: 'radio',
                                        name: a,
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
            (0, l.jsx)(s.R94, {
                type: s.geA.DESCRIPTION,
                className: c.marginTop8,
                children: E
            })
        ]
    });
}
T.Positions = o._vf;
let I = T;
