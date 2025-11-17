n.d(t, { Z: () => h });
var r = n(54381),
    i = n(473749),
    a = n(915009),
    o = n(630388),
    s = n(88658),
    l = n(695346),
    c = n(838436),
    u = n(51331),
    d = n(726985),
    f = n(981631),
    _ = n(388032),
    p = n(597754);
function h() {
    let e = l.xq.useSetting(),
        t = i.useMemo(() => (0, s.bL)(e), [e]),
        n = (0, a.LN)();
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(c.U, {
                setting: d.s6.PRIVACY_AND_SAFETY_FRIEND_REQUESTS,
                children: (0, r.jsx)(u.ZP, {
                    title: _.intl.string(_.t["7x9dyE"]),
                    value: t.all,
                    onChange: (e) => l.xq.updateSetting(e ? f.HGf : f.HGf & ~f.SOq.NO_RELATION),
                    disabled: n,
                    tooltipText: n ? _.intl.string(p.default["6Af/cw"]) : void 0,
                }),
            }),
            (0, r.jsx)(c.U, {
                setting: d.s6.PRIVACY_AND_SAFETY_FRIEND_REQUESTS,
                children: (0, r.jsx)(u.ZP, {
                    title: _.intl.string(_.t.NfeuZ3),
                    value: t.all || t.mutualFriends,
                    onChange: (t) =>
                        l.xq.updateSetting(
                            t ? o.pj(e, f.SOq.MUTUAL_FRIENDS) : o.M1(e, f.SOq.MUTUAL_FRIENDS, f.SOq.NO_RELATION),
                        ),
                    disabled: n,
                    tooltipText: n ? _.intl.string(p.default["6Af/cw"]) : void 0,
                }),
            }),
            (0, r.jsx)(c.U, {
                setting: d.s6.PRIVACY_AND_SAFETY_FRIEND_REQUESTS,
                children: (0, r.jsx)(u.ZP, {
                    title: _.intl.string(_.t.qsMfsH),
                    value: t.all || t.mutualGuilds,
                    onChange: (t) =>
                        l.xq.updateSetting(
                            t ? o.pj(e, f.SOq.MUTUAL_GUILDS) : o.M1(e, f.SOq.MUTUAL_GUILDS, f.SOq.NO_RELATION),
                        ),
                    disabled: n,
                    tooltipText: n ? _.intl.string(p.default["6Af/cw"]) : void 0,
                }),
            }),
        ],
    });
}
