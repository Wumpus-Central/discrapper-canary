n.d(t, { Z: () => h });
var r = n(951288),
    i = n(647438),
    a = n(915009),
    o = n(630388),
    s = n(88658),
    l = n(695346),
    c = n(546957),
    u = n(838436),
    d = n(51331),
    f = n(726985),
    _ = n(981631),
    p = n(388032);
function h() {
    let e = l.xq.useSetting(),
        t = i.useMemo(() => (0, s.bL)(e), [e]),
        n = (0, a.LN)();
    return (0, r.jsxs)(c.Z, {
        children: [
            (0, r.jsx)(u.U, {
                setting: f.s6.PRIVACY_AND_SAFETY_FRIEND_REQUESTS,
                children: (0, r.jsx)(d.Z, {
                    title: p.intl.string(p.t["7x9dyM"]),
                    value: t.all,
                    onChange: (e) => l.xq.updateSetting(e ? _.HGf : _.HGf & ~_.SOq.NO_RELATION),
                    disabled: n,
                }),
            }),
            (0, r.jsx)(u.U, {
                setting: f.s6.PRIVACY_AND_SAFETY_FRIEND_REQUESTS,
                children: (0, r.jsx)(d.Z, {
                    title: p.intl.string(p.t.NfeuZ2),
                    value: t.all || t.mutualFriends,
                    onChange: (t) =>
                        l.xq.updateSetting(
                            t ? o.pj(e, _.SOq.MUTUAL_FRIENDS) : o.M1(e, _.SOq.MUTUAL_FRIENDS, _.SOq.NO_RELATION),
                        ),
                    disabled: n,
                }),
            }),
            (0, r.jsx)(u.U, {
                setting: f.s6.PRIVACY_AND_SAFETY_FRIEND_REQUESTS,
                children: (0, r.jsx)(d.Z, {
                    title: p.intl.string(p.t.qsMfsL),
                    value: t.all || t.mutualGuilds,
                    onChange: (t) =>
                        l.xq.updateSetting(
                            t ? o.pj(e, _.SOq.MUTUAL_GUILDS) : o.M1(e, _.SOq.MUTUAL_GUILDS, _.SOq.NO_RELATION),
                        ),
                    disabled: n,
                }),
            }),
        ],
    });
}
