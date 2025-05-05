t.d(n, {
    Z: () => u,
    q: () => d
});
var l = t(255367);
t(73800);
var r = t(442837),
    a = t(325708),
    i = t(213557),
    s = t(433355),
    c = t(981631),
    o = t(176505);
let d = 656;
function u(e) {
    let { pageWidth: n, onSidebarResize: t } = e,
        u = (0, r.e7)([s.ZP], () => s.ZP.getSidebarState(o.oC.GUILD_HOME));
    if (null == u || null == u.channelId) return null;
    let h = n - c.PrS - d;
    return (0, l.jsx)(a.Z, {
        sidebarType: a.y.HomeSidebar,
        maxWidth: h,
        onWidthChange: t,
        children: (0, l.jsx)(i.Z, {
            channelId: u.channelId,
            baseChannelId: o.oC.GUILD_HOME,
            channelViewSource: 'Home View',
            isResourceChannelView: !0
        })
    });
}
