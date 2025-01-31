n.d(t, { Z: () => o });
var i = n(200651);
n(192379);
var r = n(442837),
    l = n(481060),
    a = n(857595),
    s = n(607070),
    c = n(388032);
function o() {
    let {
            saturation: e,
            useReducedMotion: t,
            roleStyle: n
        } = (0, r.cj)([s.Z], () => ({
            saturation: s.Z.saturation,
            useReducedMotion: s.Z.useReducedMotion,
            roleStyle: s.Z.roleStyle
        })),
        o = [
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
            l.kSQ,
            {
                children: (0, i.jsx)(l.S89, {
                    id: 'reduced-motion',
                    label: c.intl.string(c.t.b3XBzs),
                    checked: t,
                    action: () => (0, a.Zt)(t ? 'no-preference' : 'reduce')
                })
            },
            'reduced-motion'
        ),
        (0, i.jsx)(
            l.kSQ,
            {
                children: (0, i.jsx)(l.II_, {
                    id: 'input',
                    label: c.intl.string(c.t['5PWWCQ']),
                    control: (t, n) =>
                        (0, i.jsx)(l._wy, {
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
            l.kSQ,
            {
                children: (0, i.jsx)(l.sNh, {
                    id: 'role-colors',
                    label: c.intl.string(c.t.uSOPWl),
                    children: o.map((e) => {
                        let { name: t, value: r } = e;
                        return (0, i.jsx)(
                            l.k5B,
                            {
                                id: r,
                                group: 'role-colors',
                                checked: r === n,
                                label: t,
                                action: () => (0, a.u1)(r)
                            },
                            r
                        );
                    })
                })
            },
            'role-colors'
        )
    ];
}
