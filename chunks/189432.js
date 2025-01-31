n.d(t, { r: () => u });
var i = n(100527),
    r = n(6025),
    a = n(897473),
    s = n(545408),
    o = n(189357),
    l = n(50493);
function u(e, t, n) {
    var u, c, d;
    let f = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : { modViewPanel: l.k.INFO };
    if (!(0, o.Y)(e)) return Promise.resolve();
    let _ = null !== (u = f.modViewPanel) && void 0 !== u ? u : l.k.INFO,
        p = null !== (c = f.sourceLocation) && void 0 !== c ? c : i.Z.MEMBER_SAFETY_PAGE;
    return (
        (0, s.q)(e, t, _, p),
        r.Z.openGuildSidebar({
            guildId: e,
            baseChannelId: n,
            sidebarType: a.jL.GUILD_MEMBER_MOD_VIEW,
            details: {
                type: a.Ff.GUILD_MEMBER_MOD_VIEW,
                userId: t,
                guildId: e,
                ...f,
                modViewPanel: null !== (d = f.modViewPanel) && void 0 !== d ? d : l.k.INFO
            }
        })
    );
}
