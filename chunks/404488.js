l.d(n, {
    Z: () => u,
    q: () => c
});
var a = l(200651);
l(192379);
var i = l(442837),
    t = l(325708),
    r = l(213557),
    s = l(433355),
    d = l(981631),
    o = l(176505);
let c = 656;
function u(e) {
    let { pageWidth: n, onSidebarResize: l } = e,
        u = (0, i.e7)([s.ZP], () => s.ZP.getSidebarState(o.oC.GUILD_HOME));
    if (null == u || null == u.channelId) return null;
    let h = n - d.PrS - c;
    return (0, a.jsx)(t.Z, {
        sidebarType: t.y.HomeSidebar,
        maxWidth: h,
        onWidthChange: l,
        children: (0, a.jsx)(r.Z, {
            channelId: u.channelId,
            baseChannelId: o.oC.GUILD_HOME,
            channelViewSource: 'Home View',
            isResourceChannelView: !0
        })
    });
}
