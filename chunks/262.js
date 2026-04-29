t.d(n, { A: () => u, h: () => o });
var l = t(702841),
    r = t(253932),
    i = t(351906),
    a = t(287809),
    s = t(985018);
let o = "quest_completed",
    d = "legacy_username";
function u(e, n) {
    let t = r.m$.useSetting(),
        o = (0, l.bG)([a.default], () => a.default.getCurrentUser()),
        u = (0, l.bG)([i.A], () => i.A.hidePersonalInformation);
    if (null == e) return [];
    let c = e?.getBadges() ?? [];
    return (
        null != o && o.id === e.userId && (void 0 !== n ? n : t) && (c = c.filter((e) => e.id !== d)),
        u && (c = c.map((e) => ({ ...e, description: e.id === d ? s.intl.string(s.t.Br1ls3) : e.description }))),
        c
    );
}
