t.d(n, { Z: () => m }), t(653041);
var i = t(697927),
    l = t(200634),
    o = t(369566),
    s = t(326094),
    r = t(708108),
    a = t(146078),
    c = t(228168),
    d = t(981631),
    u = t(388032);
function m(e) {
    var n, t;
    let { user: m, currentUser: x, initialSubsection: p } = e,
        { live: f, recent: I, stream: h, outbox: v } = (0, o.Z)(m.id),
        Z = f.length > 0 || I.length > 0 || null != h,
        _ = null === (n = (0, i.Z)(m.id, m.id !== (null == x ? void 0 : x.id)).mutualFriends) || void 0 === n ? void 0 : n.length,
        g = null === (t = (0, l.Z)(m.id, m.id !== (null == x ? void 0 : x.id)).mutualGuilds) || void 0 === t ? void 0 : t.length,
        j = m.id === (null == x ? void 0 : x.id),
        E = (0, s.Z)({
            user: m,
            currentUser: x,
            location: d.Sbl.PROFILE_MODAL_TABS
        }),
        N = [
            {
                section: c.oh.USER_INFO,
                text: u.intl.string(u.t.jGoPJS)
            }
        ];
    return (
        (Z || (null == v && p === c.Tb.RECENT_ACTIVITY)) &&
            N.push({
                section: c.oh.ACTIVITY,
                text: u.intl.string(u.t.chq59f)
            }),
        !j &&
            E &&
            (N.push({
                section: c.oh.MUTUAL_FRIENDS,
                text: (0, r.Z)(_)
            }),
            N.push({
                section: c.oh.MUTUAL_GUILDS,
                text: (0, a.Z)(g)
            })),
        N
    );
}
