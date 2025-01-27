t(47120);
var l = t(200651),
    i = t(192379),
    r = t(120356),
    a = t.n(r),
    u = t(481060),
    o = t(981631),
    d = t(388032),
    E = t(373780),
    _ = t(232186);
let c = 0,
    s = () => 'notification-position-selector-'.concat(c++),
    C = (e) => {
        switch (e) {
            case o._vf.TOP_LEFT:
                return d.intl.string(d.t.xlchpa);
            case o._vf.TOP_RIGHT:
                return d.intl.string(d.t['4uHRHB']);
            case o._vf.BOTTOM_LEFT:
                return d.intl.string(d.t.ovWFnJ);
            case o._vf.BOTTOM_RIGHT:
                return d.intl.string(d.t['M/9V7+']);
            default:
                return d.intl.string(d.t.AlY4ZW);
        }
    },
    T = [o._vf.DISABLED, o._vf.TOP_LEFT, o._vf.TOP_RIGHT, o._vf.BOTTOM_LEFT, o._vf.BOTTOM_RIGHT];
function I(e) {
    let { position: n, onChange: t } = e,
        [r] = i.useState(() => s()),
        c = n === o._vf.DISABLED ? d.intl.string(d.t.R6LxVV) : d.intl.formatToPlainString(d.t.XXHDMz, { position: C(n) });
    return (0, l.jsxs)('div', {
        children: [
            (0, l.jsx)(u.FocusRing, {
                within: !0,
                offset: -2,
                children: (0, l.jsx)('div', {
                    className: a()(E.wrapper, { [E.disabledSelected]: n === o._vf.DISABLED }),
                    children: T.map((e) =>
                        (0, l.jsxs)(
                            'label',
                            {
                                className: a()({
                                    [E.selected]: e === n,
                                    [E.disabled]: e === o._vf.DISABLED,
                                    [E.topRight]: e === o._vf.TOP_RIGHT,
                                    [E.topLeft]: e === o._vf.TOP_LEFT,
                                    [E.bottomRight]: e === o._vf.BOTTOM_RIGHT,
                                    [E.bottomLeft]: e === o._vf.BOTTOM_LEFT
                                }),
                                children: [
                                    C(e),
                                    e === o._vf.DISABLED
                                        ? (0, l.jsx)(u.DenyIcon, {
                                              size: 'md',
                                              color: 'currentColor',
                                              className: E.disabledIcon
                                          })
                                        : null,
                                    (0, l.jsx)('input', {
                                        type: 'radio',
                                        name: r,
                                        value: e,
                                        onChange: (n) => t(n, e),
                                        className: E.hiddenInput
                                    })
                                ]
                            },
                            e
                        )
                    )
                })
            }),
            (0, l.jsx)(u.FormText, {
                type: u.FormTextTypes.DESCRIPTION,
                className: _.marginTop8,
                children: c
            })
        ]
    });
}
(I.Positions = o._vf), (n.Z = I);
