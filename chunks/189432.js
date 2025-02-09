n.d(t, { r: () => p });
var i = n(100527),
    r = n(703656),
    a = n(6025),
    s = n(897473),
    o = n(592125),
    l = n(984933),
    u = n(944486),
    c = n(545408),
    d = n(189357),
    f = n(50493),
    _ = n(981631);
function p(e, t, n) {
    var p, h, m;
    let g = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : { modViewPanel: f.k.INFO };
    if (!(0, d.Y)(e)) return Promise.resolve();
    let E = null !== (p = g.modViewPanel) && void 0 !== p ? p : f.k.INFO,
        v = null !== (h = g.sourceLocation) && void 0 !== h ? h : i.Z.MEMBER_SAFETY_PAGE,
        y = u.Z.getCurrentlySelectedChannelId(),
        I = null != y ? o.Z.getChannel(y) : null;
    if (null == I || I.getGuildId() !== e) {
        let t = l.ZP.getDefaultChannel(e);
        null == t || t.isNSFW() || (0, r.uL)(_.Z5c.CHANNEL(e, t.id));
    }
    return (
        (0, c.q)(e, t, E, v),
        a.Z.openGuildSidebar({
            guildId: e,
            baseChannelId: n,
            sidebarType: s.jL.GUILD_MEMBER_MOD_VIEW,
            details: {
                type: s.Ff.GUILD_MEMBER_MOD_VIEW,
                userId: t,
                guildId: e,
                ...g,
                modViewPanel: null !== (m = g.modViewPanel) && void 0 !== m ? m : f.k.INFO
            }
        })
    );
}
