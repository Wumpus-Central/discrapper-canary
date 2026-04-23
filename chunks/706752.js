n.d(t, { z: () => g });
var i = n(323073),
    l = n(793574),
    a = n(376708),
    r = n(976860),
    o = n(138298),
    d = n(940382),
    u = n(734057),
    s = n(808728),
    c = n(309010),
    _ = n(167866),
    A = n(985925),
    h = n(486974),
    E = n(652215),
    f = n(746080);
function g(e, t, n) {
    let g,
        p = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : { modViewPanel: h.g.INFO };
    if (!(0, A.r)(e)) return Promise.resolve();
    let b = p.modViewPanel ?? h.g.INFO,
        S = p.sourceLocation ?? l.A.MEMBER_SAFETY_PAGE,
        v = c.A.getCurrentlySelectedChannelId(),
        I = null != v ? u.A.getChannel(v) : null;
    if (n !== f.VV.MEMBER_SAFETY && (null == I || I.getGuildId() !== e)) {
        let t = s.Ay.getDefaultChannel(e);
        null == t || (0, i.qR)(t) || (0, r.pX)(E.BVt.CHANNEL(e, t.id));
    }
    return (
        (0, a.G9)(n, t) && (g = n),
        (0, _.e)(e, t, b, S),
        o.A.openGuildSidebar({
            guildId: e,
            baseChannelId: n,
            sidebarType: d.QV.GUILD_MEMBER_MOD_VIEW,
            details: {
                type: d.LU.GUILD_MEMBER_MOD_VIEW,
                userId: t,
                guildId: e,
                ...p,
                modViewPanel: p.modViewPanel ?? h.g.INFO,
                moderatorReportId: g,
            },
        })
    );
}
