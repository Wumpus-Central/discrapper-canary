n.d(t, { Z: () => h }), n(388685);
var l = n(200651),
    r = n(192379),
    i = n(120356),
    o = n.n(i),
    a = n(481060),
    s = n(981631),
    u = n(388032),
    c = n(937848),
    d = n(20493);
let E = 0,
    f = () => 'notification-position-selector-'.concat(E++),
    C = (e) => {
        switch (e) {
            case s._vf.TOP_LEFT:
                return u.NW.string(u.t.xlchpa);
            case s._vf.TOP_RIGHT:
                return u.NW.string(u.t['4uHRHB']);
            case s._vf.BOTTOM_LEFT:
                return u.NW.string(u.t.ovWFnJ);
            case s._vf.BOTTOM_RIGHT:
                return u.NW.string(u.t['M/9V7+']);
            default:
                return u.NW.string(u.t.AlY4ZW);
        }
    },
    _ = [s._vf.DISABLED, s._vf.TOP_LEFT, s._vf.TOP_RIGHT, s._vf.BOTTOM_LEFT, s._vf.BOTTOM_RIGHT];
function p(e) {
    let { position: t, onChange: n } = e,
        [i] = r.useState(() => f()),
        E = t === s._vf.DISABLED ? u.NW.string(u.t.R6LxVV) : u.NW.formatToPlainString(u.t.XXHDMz, { position: C(t) });
    return (0, l.jsxs)('div', {
        children: [
            (0, l.jsx)(a.tEY, {
                within: !0,
                offset: -2,
                children: (0, l.jsx)('div', {
                    className: o()(c.wrapper, { [c.disabledSelected]: t === s._vf.DISABLED }),
                    children: _.map((e) =>
                        (0, l.jsxs)(
                            'label',
                            {
                                className: o()({
                                    [c.selected]: e === t,
                                    [c.disabled]: e === s._vf.DISABLED,
                                    [c.topRight]: e === s._vf.TOP_RIGHT,
                                    [c.topLeft]: e === s._vf.TOP_LEFT,
                                    [c.bottomRight]: e === s._vf.BOTTOM_RIGHT,
                                    [c.bottomLeft]: e === s._vf.BOTTOM_LEFT
                                }),
                                children: [
                                    C(e),
                                    e === s._vf.DISABLED
                                        ? (0, l.jsx)(a.t6m, {
                                              size: 'md',
                                              color: 'currentColor',
                                              className: c.disabledIcon
                                          })
                                        : null,
                                    (0, l.jsx)('input', {
                                        type: 'radio',
                                        name: i,
                                        value: e,
                                        onChange: (t) => n(t, e),
                                        className: c.hiddenInput
                                    })
                                ]
                            },
                            e
                        )
                    )
                })
            }),
            (0, l.jsx)(a.R94, {
                type: a.geA.DESCRIPTION,
                className: d.marginTop8,
                children: E
            })
        ]
    });
}
p.Positions = s._vf;
let h = p;
