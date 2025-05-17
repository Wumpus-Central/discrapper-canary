n.d(t, { Z: () => a }), n(388685);
var r = n(255367);
n(73800);
var i = n(481060),
    l = n(295474),
    o = n(388032);
function a(e) {
    let { guildId: t, analyticsLocations: n, analyticsLocation: a } = e,
        [s, c] = (0, l.ww)({
            guildId: t,
            analyticsLocations: n,
            analyticsLocation: a,
            openWithoutBackstack: !0
        }),
        u = c ? o.intl.string(o.t['6ndMcn']) : o.intl.string(o.t['0eiu6O']),
        d = c ? o.intl.string(o.t.S09nw8) : o.intl.string(o.t.tEttXV);
    return (0, r.jsxs)(i.qXd, {
        color: i.DM8.DANGER,
        children: [
            u,
            (0, r.jsx)(i.EyT, {
                onClick: s,
                children: d
            })
        ]
    });
}
