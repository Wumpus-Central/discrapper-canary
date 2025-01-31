l.d(t, { Z: () => o });
var e = l(200651);
l(192379);
var i = l(481060),
    a = l(36703),
    r = l(208049),
    s = l(242291),
    u = l(388032);
function o() {
    let n = (0, s.pI)();
    return (0, e.jsx)(i.II_, {
        id: 'user-volume',
        'aria-haspopup': !0,
        label: u.intl.string(u.t.kbFsAA),
        control: (t, l) =>
            (0, e.jsx)(i._wy, {
                ...t,
                ref: l,
                value: (0, a.P)(n),
                maxValue: 100,
                onChange: (n) => (0, r.xz)((0, a.A)(n)),
                'aria-label': u.intl.string(u.t.kbFsAA)
            })
    });
}
