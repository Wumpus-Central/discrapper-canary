n.d(t, { Z: () => c });
var i = n(200651);
n(192379);
var o = n(442837),
    r = n(481060),
    a = n(857595),
    l = n(607070),
    s = n(388032);
function c() {
    let {
            saturation: e,
            useReducedMotion: t,
            roleStyle: n
        } = (0, o.cj)([l.Z], () => ({
            saturation: l.Z.saturation,
            useReducedMotion: l.Z.useReducedMotion,
            roleStyle: l.Z.roleStyle
        })),
        c = [
            {
                name: s.intl.string(s.t.YEOEi4),
                value: 'username'
            },
            {
                name: s.intl.string(s.t.mQaro6),
                value: 'dot'
            },
            {
                name: s.intl.string(s.t.Ji2EVF),
                value: 'hidden'
            }
        ];
    return [
        (0, i.jsx)(
            r.kSQ,
            {
                children: (0, i.jsx)(r.S89, {
                    id: 'reduced-motion',
                    label: s.intl.string(s.t.b3XBzs),
                    checked: t,
                    action: () => (0, a.Zt)(t ? 'no-preference' : 'reduce')
                })
            },
            'reduced-motion'
        ),
        (0, i.jsx)(
            r.kSQ,
            {
                children: (0, i.jsx)(r.II_, {
                    id: 'input',
                    label: s.intl.string(s.t['5PWWCQ']),
                    control: (t, n) =>
                        (0, i.jsx)(r._wy, {
                            ...t,
                            ref: n,
                            value: 100 * e,
                            onChange: (e) => (0, a.o2)(e / 100),
                            'aria-label': s.intl.string(s.t['5PWWCQ'])
                        })
                })
            },
            'input'
        ),
        (0, i.jsx)(
            r.kSQ,
            {
                children: (0, i.jsx)(r.sNh, {
                    id: 'role-colors',
                    label: s.intl.string(s.t.uSOPWl),
                    children: c.map((e) => {
                        let { name: t, value: o } = e;
                        return (0, i.jsx)(
                            r.k5B,
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
