n.d(t, { Z: () => g });
var i = n(200651),
    s = n(192379),
    l = n(630388),
    r = n(88658),
    a = n(695346),
    o = n(546957),
    c = n(838436),
    d = n(51331),
    u = n(726985),
    h = n(981631),
    m = n(388032);
function g() {
    let e = a.xq.useSetting(),
        t = s.useMemo(() => (0, r.bL)(e), [e]);
    return (0, i.jsxs)(o.Z, {
        children: [
            (0, i.jsx)(c.U, {
                setting: u.s6.PRIVACY_AND_SAFETY_FRIEND_REQUESTS,
                children: (0, i.jsx)(d.Z, {
                    title: m.intl.string(m.t['7x9dyM']),
                    value: t.all,
                    onChange: (e) => a.xq.updateSetting(e ? h.HGf : h.HGf & ~h.SOq.NO_RELATION)
                })
            }),
            (0, i.jsx)(c.U, {
                setting: u.s6.PRIVACY_AND_SAFETY_FRIEND_REQUESTS,
                children: (0, i.jsx)(d.Z, {
                    title: m.intl.string(m.t.NfeuZ2),
                    value: t.all || t.mutualFriends,
                    onChange: (t) => a.xq.updateSetting(t ? l.pj(e, h.SOq.MUTUAL_FRIENDS) : l.M1(e, h.SOq.MUTUAL_FRIENDS, h.SOq.NO_RELATION))
                })
            }),
            (0, i.jsx)(c.U, {
                setting: u.s6.PRIVACY_AND_SAFETY_FRIEND_REQUESTS,
                children: (0, i.jsx)(d.Z, {
                    title: m.intl.string(m.t.qsMfsL),
                    value: t.all || t.mutualGuilds,
                    onChange: (t) => a.xq.updateSetting(t ? l.pj(e, h.SOq.MUTUAL_GUILDS) : l.M1(e, h.SOq.MUTUAL_GUILDS, h.SOq.NO_RELATION))
                })
            })
        ]
    });
}
