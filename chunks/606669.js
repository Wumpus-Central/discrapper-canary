n.d(t, {
    Z: function () {
        return u;
    }
});
var i = n(200651);
n(192379);
var o = n(442837),
    r = n(481060),
    a = n(857595),
    l = n(607070),
    c = n(388032);
function u() {
    let {
            saturation: e,
            useReducedMotion: t,
            roleStyle: n
        } = (0, o.cj)([l.Z], () => ({
            saturation: l.Z.saturation,
            useReducedMotion: l.Z.useReducedMotion,
            roleStyle: l.Z.roleStyle
        })),
        u = [
            {
                name: c.intl.string(c.t.YEOEi4),
                value: 'username'
            },
            {
                name: c.intl.string(c.t.mQaro6),
                value: 'dot'
            },
            {
                name: c.intl.string(c.t.Ji2EVF),
                value: 'hidden'
            }
        ];
    return [
        (0, i.jsx)(
            r.MenuGroup,
            {
                children: (0, i.jsx)(r.MenuCheckboxItem, {
                    id: 'reduced-motion',
                    label: c.intl.string(c.t.b3XBzs),
                    checked: t,
                    action: () => (0, a.Zt)(t ? 'no-preference' : 'reduce')
                })
            },
            'reduced-motion'
        ),
        (0, i.jsx)(
            r.MenuGroup,
            {
                children: (0, i.jsx)(r.MenuControlItem, {
                    id: 'input',
                    label: c.intl.string(c.t['5PWWCQ']),
                    control: (t, n) =>
                        (0, i.jsx)(r.MenuSliderControl, {
                            ...t,
                            ref: n,
                            value: 100 * e,
                            onChange: (e) => (0, a.o2)(e / 100),
                            'aria-label': c.intl.string(c.t['5PWWCQ'])
                        })
                })
            },
            'input'
        ),
        (0, i.jsx)(
            r.MenuGroup,
            {
                children: (0, i.jsx)(r.MenuItem, {
                    id: 'role-colors',
                    label: c.intl.string(c.t.uSOPWl),
                    children: u.map((e) => {
                        let { name: t, value: o } = e;
                        return (0, i.jsx)(
                            r.MenuRadioItem,
                            {
                                id: o,
                                group: 'role-colors',
                                checked: o === n,
                                label: t,
                                action: () => (0, a.u1)(o)
                            },
                            o
                        );
                    })
                })
            },
            'role-colors'
        )
    ];
}
