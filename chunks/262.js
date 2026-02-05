"use strict";
n.d(t, { A: () => c, h: () => l });
var r = n(417597),
    i = n(253932),
    a = n(351906),
    s = n(287809),
    o = n(985018);
let l = "quest_completed",
    u = "legacy_username";
function c(e, t) {
    let n = i.m$.useSetting(),
        l = void 0 !== t ? t : n,
        c = (0, r.bG)([s.default], () => s.default.getCurrentUser()),
        d = (0, r.bG)([a.A], () => a.A.hidePersonalInformation);
    if (null == e) return [];
    let _ = e?.getBadges() ?? [];
    return (
        null != c && c.id === e.userId && l && (_ = _.filter((e) => e.id !== u)),
        d && (_ = _.map((e) => ({ ...e, description: e.id === u ? o.intl.string(o.t.Br1ls3) : e.description }))),
        _
    );
}
