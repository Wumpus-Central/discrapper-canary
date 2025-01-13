n.d(t, {
    Z: function () {
        return s;
    }
}),
    n(47120);
var i = n(200651);
n(192379);
var r = n(481060),
    l = n(295474),
    a = n(388032),
    o = n(230278);
function s(e) {
    let { guildId: t, analyticsLocations: n, analyticsLocation: s } = e,
        [c, d] = (0, l.ww)({
            guildId: t,
            analyticsLocations: n,
            analyticsLocation: s,
            openWithoutBackstack: !0
        }),
        u = d ? a.intl.string(a.t['6ndMcn']) : a.intl.string(a.t['0eiu6O']),
        m = d ? a.intl.string(a.t.S09nw8) : a.intl.string(a.t.tEttXV);
    return (0, i.jsxs)(r.Notice, {
        color: r.NoticeColors.CUSTOM,
        className: o.quarantineNotice,
        children: [
            u,
            (0, i.jsx)(r.NoticeButton, {
                onClick: c,
                children: m
            })
        ]
    });
}
