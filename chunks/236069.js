n.d(t, { Z: () => o }), n(47120);
var i = n(200651);
n(192379);
var l = n(481060),
    r = n(295474),
    a = n(388032),
    s = n(693763);
function o(e) {
    let { guildId: t, analyticsLocations: n, analyticsLocation: o } = e,
        [c, u] = (0, r.ww)({
            guildId: t,
            analyticsLocations: n,
            analyticsLocation: o,
            openWithoutBackstack: !0
        }),
        E = u ? a.intl.string(a.t['6ndMcn']) : a.intl.string(a.t['0eiu6O']),
        d = u ? a.intl.string(a.t.S09nw8) : a.intl.string(a.t.tEttXV);
    return (0, i.jsxs)(l.qXd, {
        color: l.DM8.CUSTOM,
        className: s.quarantineNotice,
        children: [
            E,
            (0, i.jsx)(l.EyT, {
                onClick: c,
                children: d
            })
        ]
    });
}
