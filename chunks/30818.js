n.d(t, { z: () => o });
var r = n(200651);
n(192379);
var i = n(793030),
    s = n(640175),
    a = n(388032),
    l = n(933650);
function o(e) {
    let { guildId: t, defaultSettings: n, canManageGuild: o } = e;
    return (0, r.jsxs)('div', {
        className: l.settings,
        children: [
            (0, r.jsxs)('div', {
                className: l.halfWidth,
                children: [
                    (0, r.jsx)(i.X6, {
                        variant: 'text-xs/bold',
                        color: 'interactive-normal',
                        className: l.subtitle,
                        children: a.NW.string(a.t['23TVho'])
                    }),
                    (0, r.jsxs)(i.xv, {
                        variant: 'text-sm/medium',
                        color: 'text-secondary',
                        children: [a.NW.string(a.t.U4LwWF), ' ', a.NW.string(a.t.xdY0pK)]
                    })
                ]
            }),
            (0, r.jsx)('div', {
                className: l.halfWidth,
                children: (0, r.jsx)(s.z, {
                    guildId: t,
                    defaultSettings: n,
                    canManageGuild: o
                })
            })
        ]
    });
}
