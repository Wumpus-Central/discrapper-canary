r.d(n, {
    r: function () {
        return c;
    }
});
var i = r(100527),
    a = r(6025),
    o = r(897473),
    s = r(545408),
    l = r(189357),
    u = r(50493);
function c(e, n, r) {
    var c, d, f;
    let p = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : { modViewPanel: u.k.INFO };
    if (!(0, l.Y)(e)) return Promise.resolve();
    let h = null !== (c = p.modViewPanel) && void 0 !== c ? c : u.k.INFO,
        _ = null !== (d = p.sourceLocation) && void 0 !== d ? d : i.Z.MEMBER_SAFETY_PAGE;
    return (
        (0, s.q)(e, n, h, _),
        a.Z.openGuildSidebar({
            guildId: e,
            baseChannelId: r,
            sidebarType: o.jL.GUILD_MEMBER_MOD_VIEW,
            details: {
                type: o.Ff.GUILD_MEMBER_MOD_VIEW,
                userId: n,
                guildId: e,
                ...p,
                modViewPanel: null !== (f = p.modViewPanel) && void 0 !== f ? f : u.k.INFO
            }
        })
    );
}
