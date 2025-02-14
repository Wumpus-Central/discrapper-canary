n.d(t, { Z: () => h });
var i = n(200651),
    s = n(192379),
    r = n(630388),
    l = n(88658),
    a = n(695346),
    o = n(546957),
    c = n(838436),
    d = n(51331),
    u = n(726985),
    m = n(981631),
    g = n(388032);
function h() {
    let e = a.xq.useSetting(),
        t = s.useMemo(() => (0, l.bL)(e), [e]);
    return (0, i.jsxs)(o.Z, {
        children: [
            (0, i.jsx)(c.U, {
                setting: u.s6.PRIVACY_AND_SAFETY_FRIEND_REQUESTS,
                children: (0, i.jsx)(d.Z, {
                    title: g.intl.string(g.t['7x9dyM']),
                    value: t.all,
                    onChange: (e) => a.xq.updateSetting(e ? m.HGf : m.HGf & ~m.SOq.NO_RELATION)
                })
            }),
            (0, i.jsx)(c.U, {
                setting: u.s6.PRIVACY_AND_SAFETY_FRIEND_REQUESTS,
                children: (0, i.jsx)(d.Z, {
                    title: g.intl.string(g.t.NfeuZ2),
                    value: t.all || t.mutualFriends,
                    onChange: (t) => a.xq.updateSetting(t ? r.pj(e, m.SOq.MUTUAL_FRIENDS) : r.M1(e, m.SOq.MUTUAL_FRIENDS, m.SOq.NO_RELATION))
                })
            }),
            (0, i.jsx)(c.U, {
                setting: u.s6.PRIVACY_AND_SAFETY_FRIEND_REQUESTS,
                children: (0, i.jsx)(d.Z, {
                    title: g.intl.string(g.t.qsMfsL),
                    value: t.all || t.mutualGuilds,
                    onChange: (t) => a.xq.updateSetting(t ? r.pj(e, m.SOq.MUTUAL_GUILDS) : r.M1(e, m.SOq.MUTUAL_GUILDS, m.SOq.NO_RELATION))
                })
            })
        ]
    });
}
