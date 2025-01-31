n.d(t, {
    Z: () => c,
    i: () => l
});
var i = n(399606),
    r = n(695346),
    a = n(246946),
    s = n(594174),
    o = n(388032);
let l = 'quest_completed',
    u = 'legacy_username';
function c(e) {
    var t;
    let n = r.R_.useSetting(),
        l = (0, i.e7)([s.default], () => s.default.getCurrentUser()),
        c = (0, i.e7)([a.Z], () => a.Z.hidePersonalInformation);
    if (null == e) return [];
    let d = null !== (t = null == e ? void 0 : e.getBadges()) && void 0 !== t ? t : [];
    return (
        null != l && l.id === e.userId && n && (d = d.filter((e) => e.id !== u)),
        c &&
            (d = d.map((e) => ({
                ...e,
                description: e.id === u ? o.intl.string(o.t.Br1ls7) : e.description
            }))),
        d
    );
}
