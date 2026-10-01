n.d(t, { A: () => c, h: () => o });
var a = n(702841),
    l = n(885386),
    r = n(351906),
    s = n(287809),
    i = n(375708);
let o = "quest_completed",
    d = "legacy_username";
function c(e, t) {
    let n = l.m$.useSetting(),
        o = (0, a.bG)([s.default], () => s.default.getCurrentUser()),
        c = (0, a.bG)([r.A], () => r.A.hidePersonalInformation);
    if (null == e) return [];
    let u = e?.getBadges() ?? [];
    return (
        null != o && o.id === e.userId && (void 0 !== t ? t : n) && (u = u.filter((e) => e.id !== d)),
        c && (u = u.map((e) => ({ ...e, description: e.id === d ? i.intl.string(i.t.Br1ls3) : e.description }))),
        u
    );
}
