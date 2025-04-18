n.d(t, { Z: () => b }), n(388685);
var r = n(200651),
    i = n(192379),
    s = n(120356),
    a = n.n(s),
    l = n(481060),
    o = n(981631),
    c = n(388032),
    d = n(977106),
    u = n(971005);
let m = 0,
    g = () => 'notification-position-selector-'.concat(m++),
    p = (e) => {
        switch (e) {
            case o._vf.TOP_LEFT:
                return c.NW.string(c.t.xlchpa);
            case o._vf.TOP_RIGHT:
                return c.NW.string(c.t['4uHRHB']);
            case o._vf.BOTTOM_LEFT:
                return c.NW.string(c.t.ovWFnJ);
            case o._vf.BOTTOM_RIGHT:
                return c.NW.string(c.t['M/9V7+']);
            default:
                return c.NW.string(c.t.AlY4ZW);
        }
    },
    h = [o._vf.DISABLED, o._vf.TOP_LEFT, o._vf.TOP_RIGHT, o._vf.BOTTOM_LEFT, o._vf.BOTTOM_RIGHT];
function f(e) {
    let { position: t, onChange: n } = e,
        [s] = i.useState(() => g()),
        m = t === o._vf.DISABLED ? c.NW.string(c.t.R6LxVV) : c.NW.formatToPlainString(c.t.XXHDMz, { position: p(t) });
    return (0, r.jsxs)('div', {
        children: [
            (0, r.jsx)(l.tEY, {
                within: !0,
                offset: -2,
                children: (0, r.jsx)('div', {
                    className: a()(d.wrapper, { [d.disabledSelected]: t === o._vf.DISABLED }),
                    children: h.map((e) =>
                        (0, r.jsxs)(
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
                                    p(e),
                                    e === o._vf.DISABLED
                                        ? (0, r.jsx)(l.t6m, {
                                              size: 'md',
                                              color: 'currentColor',
                                              className: d.disabledIcon
                                          })
                                        : null,
                                    (0, r.jsx)('input', {
                                        type: 'radio',
                                        name: s,
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
            (0, r.jsx)(l.R94, {
                type: l.geA.DESCRIPTION,
                className: u.marginTop8,
                children: m
            })
        ]
    });
}
f.Positions = o._vf;
let b = f;
