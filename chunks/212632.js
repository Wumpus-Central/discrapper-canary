n.d(t, { Z: () => _ }), n(47120);
var r = n(200651),
    l = n(192379),
    i = n(120356),
    o = n.n(i),
    a = n(481060),
    s = n(981631),
    c = n(388032),
    u = n(937848),
    d = n(20493);
let E = 0,
    f = () => 'notification-position-selector-'.concat(E++),
    p = (e) => {
        switch (e) {
            case s._vf.TOP_LEFT:
                return c.NW.string(c.t.xlchpa);
            case s._vf.TOP_RIGHT:
                return c.NW.string(c.t['4uHRHB']);
            case s._vf.BOTTOM_LEFT:
                return c.NW.string(c.t.ovWFnJ);
            case s._vf.BOTTOM_RIGHT:
                return c.NW.string(c.t['M/9V7+']);
            default:
                return c.NW.string(c.t.AlY4ZW);
        }
    },
    h = [s._vf.DISABLED, s._vf.TOP_LEFT, s._vf.TOP_RIGHT, s._vf.BOTTOM_LEFT, s._vf.BOTTOM_RIGHT];
function C(e) {
    let { position: t, onChange: n } = e,
        [i] = l.useState(() => f()),
        E = t === s._vf.DISABLED ? c.NW.string(c.t.R6LxVV) : c.NW.formatToPlainString(c.t.XXHDMz, { position: p(t) });
    return (0, r.jsxs)('div', {
        children: [
            (0, r.jsx)(a.tEY, {
                within: !0,
                offset: -2,
                children: (0, r.jsx)('div', {
                    className: o()(u.wrapper, { [u.disabledSelected]: t === s._vf.DISABLED }),
                    children: h.map((e) =>
                        (0, r.jsxs)(
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
                                    p(e),
                                    e === s._vf.DISABLED
                                        ? (0, r.jsx)(a.t6m, {
                                              size: 'md',
                                              color: 'currentColor',
                                              className: u.disabledIcon
                                          })
                                        : null,
                                    (0, r.jsx)('input', {
                                        type: 'radio',
                                        name: i,
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
            (0, r.jsx)(a.R94, {
                type: a.geA.DESCRIPTION,
                className: d.marginTop8,
                children: E
            })
        ]
    });
}
C.Positions = s._vf;
let _ = C;
