l.d(n, {
    A: () => u,
    O: () => o,
});
var t = l(627968);
l(64700);
var a = l(311907),
    r = l(812771),
    i = l(274541),
    s = l(761640),
    c = l(652215),
    d = l(746080);
let o = 656;
function u(e) {
    let { pageWidth: n, onSidebarResize: l } = e,
        u = (0, a.bG)([s.Ay], () => s.Ay.getSidebarState(d.VV.GUILD_HOME));
    if (null == u || null == u.channelId) return null;
    let f = n - c.MdR - o;
    return (0, t.jsx)(r.A, {
        sidebarType: r.X.HomeSidebar,
        maxWidth: f,
        onWidthChange: l,
        children: (0, t.jsx)(i.A, {
            channelId: u.channelId,
            baseChannelId: d.VV.GUILD_HOME,
            channelViewSource: "Home View",
            isResourceChannelView: !0,
        }),
    });
}
