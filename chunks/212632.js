t(47120);
var l = t(200651),
    i = t(192379),
    r = t(120356),
    u = t.n(r),
    a = t(481060),
    o = t(981631),
    E = t(388032),
    d = t(373780),
    _ = t(232186);
let c = 0,
    s = () => 'notification-position-selector-'.concat(c++),
    C = (e) => {
        switch (e) {
            case o._vf.TOP_LEFT:
                return E.intl.string(E.t.xlchpa);
            case o._vf.TOP_RIGHT:
                return E.intl.string(E.t['4uHRHB']);
            case o._vf.BOTTOM_LEFT:
                return E.intl.string(E.t.ovWFnJ);
            case o._vf.BOTTOM_RIGHT:
                return E.intl.string(E.t['M/9V7+']);
            default:
                return E.intl.string(E.t.AlY4ZW);
        }
    },
    T = [o._vf.DISABLED, o._vf.TOP_LEFT, o._vf.TOP_RIGHT, o._vf.BOTTOM_LEFT, o._vf.BOTTOM_RIGHT];
function I(e) {
    let { position: n, onChange: t } = e,
        [r] = i.useState(() => s()),
        c = n === o._vf.DISABLED ? E.intl.string(E.t.R6LxVV) : E.intl.formatToPlainString(E.t.XXHDMz, { position: C(n) });
    return (0, l.jsxs)('div', {
        children: [
            (0, l.jsx)(a.FocusRing, {
                within: !0,
                offset: -2,
                children: (0, l.jsx)('div', {
                    className: u()(d.wrapper, { [d.disabledSelected]: n === o._vf.DISABLED }),
                    children: T.map((e) =>
                        (0, l.jsxs)(
                            'label',
                            {
                                className: u()({
                                    [d.selected]: e === n,
                                    [d.disabled]: e === o._vf.DISABLED,
                                    [d.topRight]: e === o._vf.TOP_RIGHT,
                                    [d.topLeft]: e === o._vf.TOP_LEFT,
                                    [d.bottomRight]: e === o._vf.BOTTOM_RIGHT,
                                    [d.bottomLeft]: e === o._vf.BOTTOM_LEFT
                                }),
                                children: [
                                    C(e),
                                    e === o._vf.DISABLED
                                        ? (0, l.jsx)(a.DenyIcon, {
                                              size: 'md',
                                              color: 'currentColor',
                                              className: d.disabledIcon
                                          })
                                        : null,
                                    (0, l.jsx)('input', {
                                        type: 'radio',
                                        name: r,
                                        value: e,
                                        onChange: (n) => t(n, e),
                                        className: d.hiddenInput
                                    })
                                ]
                            },
                            e
                        )
                    )
                })
            }),
            (0, l.jsx)(a.FormText, {
                type: a.FormTextTypes.DESCRIPTION,
                className: _.marginTop8,
                children: c
            })
        ]
    });
}
(I.Positions = o._vf), (n.Z = I);
