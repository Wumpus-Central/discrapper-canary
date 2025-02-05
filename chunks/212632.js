n.d(t, { Z: () => E }), n(47120);
var l = n(200651),
    i = n(192379),
    a = n(120356),
    o = n.n(a),
    r = n(481060),
    s = n(981631),
    d = n(388032),
    u = n(373780),
    c = n(232186);
let h = 0,
    g = () => 'notification-position-selector-'.concat(h++),
    f = (e) => {
        switch (e) {
            case s._vf.TOP_LEFT:
                return d.intl.string(d.t.xlchpa);
            case s._vf.TOP_RIGHT:
                return d.intl.string(d.t['4uHRHB']);
            case s._vf.BOTTOM_LEFT:
                return d.intl.string(d.t.ovWFnJ);
            case s._vf.BOTTOM_RIGHT:
                return d.intl.string(d.t['M/9V7+']);
            default:
                return d.intl.string(d.t.AlY4ZW);
        }
    },
    p = [s._vf.DISABLED, s._vf.TOP_LEFT, s._vf.TOP_RIGHT, s._vf.BOTTOM_LEFT, s._vf.BOTTOM_RIGHT];
function C(e) {
    let { position: t, onChange: n } = e,
        [a] = i.useState(() => g()),
        h = t === s._vf.DISABLED ? d.intl.string(d.t.R6LxVV) : d.intl.formatToPlainString(d.t.XXHDMz, { position: f(t) });
    return (0, l.jsxs)('div', {
        children: [
            (0, l.jsx)(r.tEY, {
                within: !0,
                offset: -2,
                children: (0, l.jsx)('div', {
                    className: o()(u.wrapper, { [u.disabledSelected]: t === s._vf.DISABLED }),
                    children: p.map((e) =>
                        (0, l.jsxs)(
                            'label',
                            {
                                className: o()({
                                    [u.selected]: e === t,
                                    [u.disabled]: e === s._vf.DISABLED,
                                    [u.topRight]: e === s._vf.TOP_RIGHT,
                                    [u.topLeft]: e === s._vf.TOP_LEFT,
                                    [u.bottomRight]: e === s._vf.BOTTOM_RIGHT,
                                    [u.bottomLeft]: e === s._vf.BOTTOM_LEFT
                                }),
                                children: [
                                    f(e),
                                    e === s._vf.DISABLED
                                        ? (0, l.jsx)(r.t6m, {
                                              size: 'md',
                                              color: 'currentColor',
                                              className: u.disabledIcon
                                          })
                                        : null,
                                    (0, l.jsx)('input', {
                                        type: 'radio',
                                        name: a,
                                        value: e,
                                        onChange: (t) => n(t, e),
                                        className: u.hiddenInput
                                    })
                                ]
                            },
                            e
                        )
                    )
                })
            }),
            (0, l.jsx)(r.R94, {
                type: r.geA.DESCRIPTION,
                className: c.marginTop8,
                children: h
            })
        ]
    });
}
C.Positions = s._vf;
let E = C;
