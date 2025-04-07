t.d(n, {
    Z: () => u,
    q: () => d
});
var r = t(200651);
t(192379);
var l = t(442837),
    a = t(325708),
    i = t(213557),
    s = t(433355),
    o = t(981631),
    c = t(176505);
let d = 656;
function u(e) {
    let { pageWidth: n, onSidebarResize: t } = e,
        u = (0, l.e7)([s.ZP], () => s.ZP.getSidebarState(c.oC.GUILD_HOME));
    if (null == u || null == u.channelId) return null;
    let m = n - o.PrS - d;
    return (0, r.jsx)(a.Z, {
        sidebarType: a.y.HomeSidebar,
        maxWidth: m,
        onWidthChange: t,
        children: (0, r.jsx)(i.Z, {
            channelId: u.channelId,
            baseChannelId: c.oC.GUILD_HOME,
            channelViewSource: 'Home View',
            isResourceChannelView: !0
        })
    });
}
