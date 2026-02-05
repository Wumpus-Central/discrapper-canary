"use strict";
n.d(t, { z: () => g });
var r = n(323073),
    i = n(793574),
    a = n(376708),
    s = n(976860),
    o = n(138298),
    l = n(940382),
    u = n(734057),
    c = n(808728),
    d = n(309010),
    _ = n(167866),
    f = n(985925),
    p = n(486974),
    h = n(652215),
    m = n(746080);
function g(e, t, n) {
    let g,
        E = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : { modViewPanel: p.g.INFO };
    if (!(0, f.r)(e)) return Promise.resolve();
    let A = E.modViewPanel ?? p.g.INFO,
        I = E.sourceLocation ?? i.A.MEMBER_SAFETY_PAGE,
        T = d.A.getCurrentlySelectedChannelId(),
        y = null != T ? u.A.getChannel(T) : null;
    if (n !== m.VV.MEMBER_SAFETY && (null == y || y.getGuildId() !== e)) {
        let t = c.Ay.getDefaultChannel(e);
        null == t || (0, r.qR)(t) || (0, s.pX)(h.BVt.CHANNEL(e, t.id));
    }
    let S = n;
    return (
        (0, a.G9)(S, t) && (g = S),
        (0, _.e)(e, t, A, I),
        o.A.openGuildSidebar({
            guildId: e,
            baseChannelId: n,
            sidebarType: l.QV.GUILD_MEMBER_MOD_VIEW,
            details: {
                type: l.LU.GUILD_MEMBER_MOD_VIEW,
                userId: t,
                guildId: e,
                ...E,
                modViewPanel: E.modViewPanel ?? p.g.INFO,
                moderatorReportId: g,
            },
        })
    );
}
