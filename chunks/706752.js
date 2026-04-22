n.d(t, { z: () => g });
var i = n(323073),
    l = n(793574),
    r = n(376708),
    a = n(976860),
    o = n(138298),
    d = n(940382),
    u = n(734057),
    s = n(808728),
    c = n(309010),
    _ = n(167866),
    A = n(985925),
    f = n(486974),
    E = n(652215),
    h = n(746080);
function g(e, t, n) {
    let g,
        b = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : { modViewPanel: f.g.INFO };
    if (!(0, A.r)(e)) return Promise.resolve();
    let p = b.modViewPanel ?? f.g.INFO,
        v = b.sourceLocation ?? l.A.MEMBER_SAFETY_PAGE,
        S = c.A.getCurrentlySelectedChannelId(),
        I = null != S ? u.A.getChannel(S) : null;
    if (n !== h.VV.MEMBER_SAFETY && (null == I || I.getGuildId() !== e)) {
        let t = s.Ay.getDefaultChannel(e);
        null == t || (0, i.qR)(t) || (0, a.pX)(E.BVt.CHANNEL(e, t.id));
    }
    return (
        (0, r.G9)(n, t) && (g = n),
        (0, _.e)(e, t, p, v),
        o.A.openGuildSidebar({
            guildId: e,
            baseChannelId: n,
            sidebarType: d.QV.GUILD_MEMBER_MOD_VIEW,
            details: {
                type: d.LU.GUILD_MEMBER_MOD_VIEW,
                userId: t,
                guildId: e,
                ...b,
                modViewPanel: b.modViewPanel ?? f.g.INFO,
                moderatorReportId: g,
            },
        })
    );
}
