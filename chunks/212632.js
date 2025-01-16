n(47120);
var i = n(200651),
    a = n(192379),
    r = n(120356),
    l = n.n(r),
    o = n(481060),
    c = n(981631),
    s = n(388032),
    d = n(373780),
    u = n(232186);
let _ = 0,
    f = () => 'notification-position-selector-'.concat(_++),
    m = (e) => {
        switch (e) {
            case c._vf.TOP_LEFT:
                return s.intl.string(s.t.xlchpa);
            case c._vf.TOP_RIGHT:
                return s.intl.string(s.t['4uHRHB']);
            case c._vf.BOTTOM_LEFT:
                return s.intl.string(s.t.ovWFnJ);
            case c._vf.BOTTOM_RIGHT:
                return s.intl.string(s.t['M/9V7+']);
            default:
                return s.intl.string(s.t.AlY4ZW);
        }
    },
    g = [c._vf.DISABLED, c._vf.TOP_LEFT, c._vf.TOP_RIGHT, c._vf.BOTTOM_LEFT, c._vf.BOTTOM_RIGHT];
function p(e) {
    let { position: t, onChange: n } = e,
        [r] = a.useState(() => f()),
        _ = t === c._vf.DISABLED ? s.intl.string(s.t.R6LxVV) : s.intl.formatToPlainString(s.t.XXHDMz, { position: m(t) });
    return (0, i.jsxs)('div', {
        children: [
            (0, i.jsx)(o.FocusRing, {
                within: !0,
                offset: -2,
                children: (0, i.jsx)('div', {
                    className: l()(d.wrapper, { [d.disabledSelected]: t === c._vf.DISABLED }),
                    children: g.map((e) =>
                        (0, i.jsxs)(
                            'label',
                            {
                                className: l()({
                                    [d.selected]: e === t,
                                    [d.disabled]: e === c._vf.DISABLED,
                                    [d.topRight]: e === c._vf.TOP_RIGHT,
                                    [d.topLeft]: e === c._vf.TOP_LEFT,
                                    [d.bottomRight]: e === c._vf.BOTTOM_RIGHT,
                                    [d.bottomLeft]: e === c._vf.BOTTOM_LEFT
                                }),
                                children: [
                                    m(e),
                                    e === c._vf.DISABLED
                                        ? (0, i.jsx)(o.DenyIcon, {
                                              size: 'md',
                                              color: 'currentColor',
                                              className: d.disabledIcon
                                          })
                                        : null,
                                    (0, i.jsx)('input', {
                                        type: 'radio',
                                        name: r,
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
            (0, i.jsx)(o.FormText, {
                type: o.FormTextTypes.DESCRIPTION,
                className: u.marginTop8,
                children: _
            })
        ]
    });
}
(p.Positions = c._vf), (t.Z = p);
