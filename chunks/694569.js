n.d(t, { Z: () => p });
var r = n(951288),
    i = n(647438),
    a = n(630388),
    o = n(88658),
    s = n(695346),
    l = n(546957),
    c = n(838436),
    u = n(51331),
    d = n(726985),
    f = n(981631),
    _ = n(388032);
function p() {
    let e = s.xq.useSetting(),
        t = i.useMemo(() => (0, o.bL)(e), [e]);
    return (0, r.jsxs)(l.Z, {
        children: [
            (0, r.jsx)(c.U, {
                setting: d.s6.PRIVACY_AND_SAFETY_FRIEND_REQUESTS,
                children: (0, r.jsx)(u.Z, {
                    title: _.intl.string(_.t["7x9dyM"]),
                    value: t.all,
                    onChange: (e) => s.xq.updateSetting(e ? f.HGf : f.HGf & ~f.SOq.NO_RELATION),
                }),
            }),
            (0, r.jsx)(c.U, {
                setting: d.s6.PRIVACY_AND_SAFETY_FRIEND_REQUESTS,
                children: (0, r.jsx)(u.Z, {
                    title: _.intl.string(_.t.NfeuZ2),
                    value: t.all || t.mutualFriends,
                    onChange: (t) =>
                        s.xq.updateSetting(
                            t ? a.pj(e, f.SOq.MUTUAL_FRIENDS) : a.M1(e, f.SOq.MUTUAL_FRIENDS, f.SOq.NO_RELATION),
                        ),
                }),
            }),
            (0, r.jsx)(c.U, {
                setting: d.s6.PRIVACY_AND_SAFETY_FRIEND_REQUESTS,
                children: (0, r.jsx)(u.Z, {
                    title: _.intl.string(_.t.qsMfsL),
                    value: t.all || t.mutualGuilds,
                    onChange: (t) =>
                        s.xq.updateSetting(
                            t ? a.pj(e, f.SOq.MUTUAL_GUILDS) : a.M1(e, f.SOq.MUTUAL_GUILDS, f.SOq.NO_RELATION),
                        ),
                }),
            }),
        ],
    });
}
