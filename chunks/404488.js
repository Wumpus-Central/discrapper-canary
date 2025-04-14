l.d(n, {
    Z: () => u,
    q: () => d
});
var t = l(200651);
l(192379);
var r = l(442837),
    a = l(325708),
    i = l(213557),
    s = l(433355),
    c = l(981631),
    o = l(176505);
let d = 656;
function u(e) {
    let { pageWidth: n, onSidebarResize: l } = e,
        u = (0, r.e7)([s.ZP], () => s.ZP.getSidebarState(o.oC.GUILD_HOME));
    if (null == u || null == u.channelId) return null;
    let m = n - c.PrS - d;
    return (0, t.jsx)(a.Z, {
        sidebarType: a.y.HomeSidebar,
        maxWidth: m,
        onWidthChange: l,
        children: (0, t.jsx)(i.Z, {
            channelId: u.channelId,
            baseChannelId: o.oC.GUILD_HOME,
            channelViewSource: 'Home View',
            isResourceChannelView: !0
        })
    });
}
