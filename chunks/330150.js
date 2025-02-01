n.d(t, { default: () => l });
var a = n(200651);
n(192379);
var s = n(481060),
    d = n(239091),
    i = n(231338);
let l = (e) =>
    (0, a.jsx)(s.v2r, {
        onClose: d.Zy,
        navId: 'staff-only-entry-debug',
        'aria-label': 'staff only content inventory debug',
        onSelect: i.dG,
        children: (0, a.jsx)(s.sNh, {
            id: 'test',
            label: 'Debug (Staff-Only)',
            action: () => {
                (0, s.ZDy)(async () => {
                    let { default: t } = await n.e('43057').then(n.bind(n, 968650));
                    return (n) =>
                        (0, a.jsx)(t, {
                            ...n,
                            ...e
                        });
                });
            },
            icon: s.R0
        })
    });
