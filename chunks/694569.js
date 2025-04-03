n.d(t, { Z: () => p });
var r = n(200651),
    i = n(192379),
    s = n(630388),
    a = n(88658),
    l = n(695346),
    o = n(546957),
    c = n(838436),
    d = n(51331),
    u = n(726985),
    m = n(981631),
    g = n(388032);
function p() {
    let e = l.xq.useSetting(),
        t = i.useMemo(() => (0, a.bL)(e), [e]);
    return (0, r.jsxs)(o.Z, {
        children: [
            (0, r.jsx)(c.U, {
                setting: u.s6.PRIVACY_AND_SAFETY_FRIEND_REQUESTS,
                children: (0, r.jsx)(d.Z, {
                    title: g.NW.string(g.t['7x9dyM']),
                    value: t.all,
                    onChange: (e) => l.xq.updateSetting(e ? m.HGf : m.HGf & ~m.SOq.NO_RELATION)
                })
            }),
            (0, r.jsx)(c.U, {
                setting: u.s6.PRIVACY_AND_SAFETY_FRIEND_REQUESTS,
                children: (0, r.jsx)(d.Z, {
                    title: g.NW.string(g.t.NfeuZ2),
                    value: t.all || t.mutualFriends,
                    onChange: (t) => l.xq.updateSetting(t ? s.pj(e, m.SOq.MUTUAL_FRIENDS) : s.M1(e, m.SOq.MUTUAL_FRIENDS, m.SOq.NO_RELATION))
                })
            }),
            (0, r.jsx)(c.U, {
                setting: u.s6.PRIVACY_AND_SAFETY_FRIEND_REQUESTS,
                children: (0, r.jsx)(d.Z, {
                    title: g.NW.string(g.t.qsMfsL),
                    value: t.all || t.mutualGuilds,
                    onChange: (t) => l.xq.updateSetting(t ? s.pj(e, m.SOq.MUTUAL_GUILDS) : s.M1(e, m.SOq.MUTUAL_GUILDS, m.SOq.NO_RELATION))
                })
            })
        ]
    });
}
