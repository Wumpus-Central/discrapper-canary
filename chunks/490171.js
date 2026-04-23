l.d(n, { A: () => u, O: () => o });
var a = l(627968);
l(64700);
var s = l(311907),
    t = l(812771),
    i = l(274541),
    r = l(761640),
    d = l(652215),
    c = l(746080);
let o = 656;
function u(e) {
    let { pageWidth: n, onSidebarResize: l } = e,
        u = (0, s.bG)([r.Ay], () => r.Ay.getSidebarState(c.VV.GUILD_HOME));
    if (null == u || null == u.channelId) return null;
    let h = n - d.MdR - o;
    return (0, a.jsx)(t.A, {
        sidebarType: t.X.HomeSidebar,
        maxWidth: h,
        onWidthChange: l,
        children: (0, a.jsx)(i.A, {
            channelId: u.channelId,
            baseChannelId: c.VV.GUILD_HOME,
            channelViewSource: "Home View",
            isResourceChannelView: !0,
        }),
    });
}
