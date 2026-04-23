"use strict";
n.d(t, { A: () => c, h: () => l });
var r = n(417597),
    i = n(253932),
    s = n(351906),
    a = n(287809),
    o = n(985018);
let l = "quest_completed",
    u = "legacy_username";
function c(e, t) {
    let n = i.m$.useSetting(),
        l = (0, r.bG)([a.default], () => a.default.getCurrentUser()),
        c = (0, r.bG)([s.A], () => s.A.hidePersonalInformation);
    if (null == e) return [];
    let d = e?.getBadges() ?? [];
    return (
        null != l && l.id === e.userId && (void 0 !== t ? t : n) && (d = d.filter((e) => e.id !== u)),
        c && (d = d.map((e) => ({ ...e, description: e.id === u ? o.intl.string(o.t.Br1ls3) : e.description }))),
        d
    );
}
