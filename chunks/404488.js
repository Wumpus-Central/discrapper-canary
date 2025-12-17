t.d(n, {
    Z: () => u,
    q: () => o,
});
var a = t(54381);
t(473749);
var l = t(442837),
    r = t(325708),
    i = t(213557),
    c = t(433355),
    s = t(981631),
    d = t(176505);
let o = 656;
function u(e) {
    let { pageWidth: n, onSidebarResize: t } = e,
        u = (0, l.e7)([c.ZP], () => c.ZP.getSidebarState(d.oC.GUILD_HOME));
    if (null == u || null == u.channelId) return null;
    let m = n - s.PrS - o;
    return (0, a.jsx)(r.Z, {
        sidebarType: r.y.HomeSidebar,
        maxWidth: m,
        onWidthChange: t,
        children: (0, a.jsx)(i.Z, {
            channelId: u.channelId,
            baseChannelId: d.oC.GUILD_HOME,
            channelViewSource: "Home View",
            isResourceChannelView: !0,
        }),
    });
}
