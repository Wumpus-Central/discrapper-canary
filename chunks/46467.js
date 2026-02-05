"use strict";
n.d(t, { p: () => c }), n(64700), n(417597);
var r = n(71393),
    i = n(723702),
    a = n(540763),
    s = n(652215);
let o = "13.2",
    l = [s.GuildFeatures.ROLE_SUBSCRIPTIONS_AVAILABLE_FOR_PURCHASE];
function u(e, t) {
    let n = e.split(".").map(Number),
        r = t.split(".").map(Number),
        i = Math.max(n.length, r.length);
    for (let e = 0; e < i; e++) {
        let t = n[e] ?? 0,
            i = r[e] ?? 0;
        if (t < i) return -1;
        if (t > i) return 1;
    }
    return 0;
}
function c(e) {
    if (!(0, i.isIOS)()) return !1;
    let t = (0, a.O)();
    if (null == t || -1 === u(t, o)) return !1;
    let n = r.A.getGuild(e);
    return null != n && !!l.every((e) => n.features.has(e));
}
