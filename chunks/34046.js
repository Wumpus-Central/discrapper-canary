n.d(t, { Z: () => p });
var r = n(951288),
    i = n(647438),
    a = n(722687),
    o = n(738486),
    s = n(838436),
    l = n(51331),
    c = n(630388),
    u = n(88658),
    d = n(652262),
    f = n(981631),
    _ = n(388032);
function p() {
    let e = (0, d.F)(),
        t = a.vB.useControlledSetting(null == e ? void 0 : e.id),
        n = i.useMemo(() => (0, u.bL)(t), [t]);
    return (0, r.jsxs)(o.Z, {
        children: [
            (0, r.jsx)(s.U, {
                children: (0, r.jsx)(l.Z, {
                    title: _.intl.string(_.t["7x9dyM"]),
                    value: n.all,
                    onChange: (t) =>
                        a.vB.updateControlledSetting(null == e ? void 0 : e.id, t ? f.HGf : f.HGf & ~f.SOq.NO_RELATION),
                }),
            }),
            (0, r.jsx)(s.U, {
                children: (0, r.jsx)(l.Z, {
                    title: _.intl.string(_.t.NfeuZ2),
                    value: n.all || n.mutualFriends,
                    onChange: (n) =>
                        a.vB.updateControlledSetting(
                            null == e ? void 0 : e.id,
                            n ? c.pj(t, f.SOq.MUTUAL_FRIENDS) : c.M1(t, f.SOq.MUTUAL_FRIENDS, f.SOq.NO_RELATION),
                        ),
                }),
            }),
            (0, r.jsx)(s.U, {
                children: (0, r.jsx)(l.Z, {
                    title: _.intl.string(_.t.qsMfsL),
                    value: n.all || n.mutualGuilds,
                    onChange: (n) =>
                        a.vB.updateControlledSetting(
                            null == e ? void 0 : e.id,
                            n ? c.pj(t, f.SOq.MUTUAL_GUILDS) : c.M1(t, f.SOq.MUTUAL_GUILDS, f.SOq.NO_RELATION),
                        ),
                }),
            }),
        ],
    });
}
