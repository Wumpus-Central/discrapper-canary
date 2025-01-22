r.d(n, {
    Z: function () {
        return d;
    },
    i: function () {
        return u;
    }
});
var i = r(399606),
    a = r(695346),
    o = r(246946),
    s = r(594174),
    l = r(388032);
let u = 'quest_completed',
    c = 'legacy_username';
function d(e) {
    var n;
    let r = a.R_.useSetting(),
        u = (0, i.e7)([s.default], () => s.default.getCurrentUser()),
        d = (0, i.e7)([o.Z], () => o.Z.hidePersonalInformation);
    if (null == e) return [];
    let f = null !== (n = null == e ? void 0 : e.getBadges()) && void 0 !== n ? n : [];
    return (
        null != u && u.id === e.userId && r && (f = f.filter((e) => e.id !== c)),
        d &&
            (f = f.map((e) => ({
                ...e,
                description: e.id === c ? l.intl.string(l.t.Br1ls7) : e.description
            }))),
        f
    );
}
