n(47120);
var r = n(200651),
    a = n(192379),
    l = n(120356),
    i = n.n(l),
    o = n(481060),
    s = n(981631),
    c = n(388032),
    d = n(610290),
    u = n(275477);
let m = 0,
    h = () => 'notification-position-selector-'.concat(m++),
    x = (e) => {
        switch (e) {
            case s._vf.TOP_LEFT:
                return c.intl.string(c.t.xlchpa);
            case s._vf.TOP_RIGHT:
                return c.intl.string(c.t['4uHRHB']);
            case s._vf.BOTTOM_LEFT:
                return c.intl.string(c.t.ovWFnJ);
            case s._vf.BOTTOM_RIGHT:
                return c.intl.string(c.t['M/9V7+']);
            default:
                return c.intl.string(c.t.AlY4ZW);
        }
    },
    f = [s._vf.DISABLED, s._vf.TOP_LEFT, s._vf.TOP_RIGHT, s._vf.BOTTOM_LEFT, s._vf.BOTTOM_RIGHT];
function p(e) {
    let { position: t, onChange: n } = e,
        [l] = a.useState(() => h()),
        m = t === s._vf.DISABLED ? c.intl.string(c.t.R6LxVV) : c.intl.formatToPlainString(c.t.XXHDMz, { position: x(t) });
    return (0, r.jsxs)('div', {
        children: [
            (0, r.jsx)(o.FocusRing, {
                within: !0,
                offset: -2,
                children: (0, r.jsx)('div', {
                    className: i()(d.wrapper, { [d.disabledSelected]: t === s._vf.DISABLED }),
                    children: f.map((e) =>
                        (0, r.jsxs)(
                            'label',
                            {
                                className: i()({
                                    [d.selected]: e === t,
                                    [d.disabled]: e === s._vf.DISABLED,
                                    [d.topRight]: e === s._vf.TOP_RIGHT,
                                    [d.topLeft]: e === s._vf.TOP_LEFT,
                                    [d.bottomRight]: e === s._vf.BOTTOM_RIGHT,
                                    [d.bottomLeft]: e === s._vf.BOTTOM_LEFT
                                }),
                                children: [
                                    x(e),
                                    e === s._vf.DISABLED
                                        ? (0, r.jsx)(o.DenyIcon, {
                                              size: 'md',
                                              color: 'currentColor',
                                              className: d.disabledIcon
                                          })
                                        : null,
                                    (0, r.jsx)('input', {
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
            (0, r.jsx)(o.FormText, {
                type: o.FormTextTypes.DESCRIPTION,
                className: u.marginTop8,
                children: m
            })
        ]
    });
}
(p.Positions = s._vf), (t.Z = p);
