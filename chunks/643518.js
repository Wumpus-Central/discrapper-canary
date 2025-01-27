t.d(n, {
    Z: function () {
        return f;
    }
}),
    t(653041);
var i = t(697927),
    l = t(200634),
    o = t(369566),
    r = t(326094),
    s = t(708108),
    c = t(146078),
    a = t(228168),
    d = t(981631),
    u = t(388032);
function f(e) {
    var n, t;
    let { user: f, currentUser: m, initialSubsection: I } = e,
        { live: x, recent: p, stream: h, outbox: v } = (0, o.Z)(f.id),
        Z = x.length > 0 || p.length > 0 || null != h,
        g = null === (n = (0, i.Z)(f.id, f.id !== (null == m ? void 0 : m.id)).mutualFriends) || void 0 === n ? void 0 : n.length,
        j = null === (t = (0, l.Z)(f.id, f.id !== (null == m ? void 0 : m.id)).mutualGuilds) || void 0 === t ? void 0 : t.length,
        _ = f.id === (null == m ? void 0 : m.id),
        b = (0, r.Z)({
            user: f,
            currentUser: m,
            location: d.Sbl.PROFILE_MODAL_TABS
        }),
        E = [
            {
                section: a.oh.USER_INFO,
                text: u.intl.string(u.t.jGoPJS)
            }
        ];
    return (
        (Z || (null == v && I === a.Tb.RECENT_ACTIVITY)) &&
            E.push({
                section: a.oh.ACTIVITY,
                text: u.intl.string(u.t.chq59f)
            }),
        !_ &&
            b &&
            (E.push({
                section: a.oh.MUTUAL_FRIENDS,
                text: (0, s.Z)(g)
            }),
            E.push({
                section: a.oh.MUTUAL_GUILDS,
                text: (0, c.Z)(j)
            })),
        E
    );
}
