n.d(t, { Z: () => p });
var i = n(255367),
    r = n(73800),
    s = n(630388),
    l = n(88658),
    a = n(695346),
    o = n(546957),
    c = n(838436),
    d = n(51331),
    u = n(726985),
    g = n(981631),
    m = n(388032);
function p() {
    let e = a.xq.useSetting(),
        t = r.useMemo(() => (0, l.bL)(e), [e]);
    return (0, i.jsxs)(o.Z, {
        children: [
            (0, i.jsx)(c.U, {
                setting: u.s6.PRIVACY_AND_SAFETY_FRIEND_REQUESTS,
                children: (0, i.jsx)(d.Z, {
                    title: m.intl.string(m.t['7x9dyM']),
                    value: t.all,
                    onChange: (e) => a.xq.updateSetting(e ? g.HGf : g.HGf & ~g.SOq.NO_RELATION)
                })
            }),
            (0, i.jsx)(c.U, {
                setting: u.s6.PRIVACY_AND_SAFETY_FRIEND_REQUESTS,
                children: (0, i.jsx)(d.Z, {
                    title: m.intl.string(m.t.NfeuZ2),
                    value: t.all || t.mutualFriends,
                    onChange: (t) => a.xq.updateSetting(t ? s.pj(e, g.SOq.MUTUAL_FRIENDS) : s.M1(e, g.SOq.MUTUAL_FRIENDS, g.SOq.NO_RELATION))
                })
            }),
            (0, i.jsx)(c.U, {
                setting: u.s6.PRIVACY_AND_SAFETY_FRIEND_REQUESTS,
                children: (0, i.jsx)(d.Z, {
                    title: m.intl.string(m.t.qsMfsL),
                    value: t.all || t.mutualGuilds,
                    onChange: (t) => a.xq.updateSetting(t ? s.pj(e, g.SOq.MUTUAL_GUILDS) : s.M1(e, g.SOq.MUTUAL_GUILDS, g.SOq.NO_RELATION))
                })
            })
        ]
    });
}
