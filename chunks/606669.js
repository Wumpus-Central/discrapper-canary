n.d(t, {
    Z: function () {
        return c;
    }
});
var r = n(200651);
n(192379);
var i = n(442837),
    l = n(481060),
    a = n(857595),
    u = n(607070),
    o = n(388032);
function c() {
    let {
            saturation: e,
            useReducedMotion: t,
            roleStyle: n
        } = (0, i.cj)([u.Z], () => ({
            saturation: u.Z.saturation,
            useReducedMotion: u.Z.useReducedMotion,
            roleStyle: u.Z.roleStyle
        })),
        c = [
            {
                name: o.intl.string(o.t.YEOEi4),
                value: 'username'
            },
            {
                name: o.intl.string(o.t.mQaro6),
                value: 'dot'
            },
            {
                name: o.intl.string(o.t.Ji2EVF),
                value: 'hidden'
            }
        ];
    return [
        (0, r.jsx)(
            l.MenuGroup,
            {
                children: (0, r.jsx)(l.MenuCheckboxItem, {
                    id: 'reduced-motion',
                    label: o.intl.string(o.t.b3XBzs),
                    checked: t,
                    action: () => (0, a.Zt)(t ? 'no-preference' : 'reduce')
                })
            },
            'reduced-motion'
        ),
        (0, r.jsx)(
            l.MenuGroup,
            {
                children: (0, r.jsx)(l.MenuControlItem, {
                    id: 'input',
                    label: o.intl.string(o.t['5PWWCQ']),
                    control: (t, n) =>
                        (0, r.jsx)(l.MenuSliderControl, {
                            ...t,
                            ref: n,
                            value: 100 * e,
                            onChange: (e) => (0, a.o2)(e / 100),
                            'aria-label': o.intl.string(o.t['5PWWCQ'])
                        })
                })
            },
            'input'
        ),
        (0, r.jsx)(
            l.MenuGroup,
            {
                children: (0, r.jsx)(l.MenuItem, {
                    id: 'role-colors',
                    label: o.intl.string(o.t.uSOPWl),
                    children: c.map((e) => {
                        let { name: t, value: i } = e;
                        return (0, r.jsx)(
                            l.MenuRadioItem,
                            {
                                id: i,
                                group: 'role-colors',
                                checked: i === n,
                                label: t,
                                action: () => (0, a.u1)(i)
                            },
                            i
                        );
                    })
                })
            },
            'role-colors'
        )
    ];
}
