n.d(t, { Z: () => s }), n(388685);
var r = n(255367);
n(73800);
var i = n(481060),
    l = n(295474),
    o = n(388032),
    a = n(131715);
function s(e) {
    let { guildId: t, analyticsLocations: n, analyticsLocation: s } = e,
        [c, u] = (0, l.ww)({
            guildId: t,
            analyticsLocations: n,
            analyticsLocation: s,
            openWithoutBackstack: !0
        }),
        d = u ? o.intl.string(o.t['6ndMcn']) : o.intl.string(o.t['0eiu6O']),
        E = u ? o.intl.string(o.t.S09nw8) : o.intl.string(o.t.tEttXV);
    return (0, r.jsxs)(i.qXd, {
        color: i.DM8.CUSTOM,
        className: a.quarantineNotice,
        children: [
            d,
            (0, r.jsx)(i.EyT, {
                onClick: c,
                children: E
            })
        ]
    });
}
