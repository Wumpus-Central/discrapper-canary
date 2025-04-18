n.d(t, { z: () => c });
var r = n(200651);
n(192379);
var i = n(793030),
    s = n(481060),
    l = n(640175),
    a = n(388032),
    o = n(63706);
function c(e) {
    let { guildId: t, defaultSettings: n, canManageGuild: c } = e;
    return (0, r.jsxs)(s.hjN, {
        className: o.settings,
        children: [
            (0, r.jsxs)('div', {
                className: o.halfWidth,
                children: [
                    (0, r.jsx)(s.vwX, { children: a.NW.string(a.t['23TVho']) }),
                    (0, r.jsxs)(i.xv, {
                        variant: 'text-sm/medium',
                        color: 'text-secondary',
                        children: [a.NW.string(a.t.U4LwWF), ' ', a.NW.string(a.t.xdY0pK)]
                    })
                ]
            }),
            (0, r.jsx)('div', {
                className: o.halfWidth,
                children: (0, r.jsx)(l.z, {
                    guildId: t,
                    defaultSettings: n,
                    canManageGuild: c
                })
            })
        ]
    });
}
