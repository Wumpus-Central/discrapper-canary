"use strict";
n.d(t, { p: () => o }), n(64700), n(417597);
var r = n(71393),
    i = n(723702),
    s = n(540763);
let a = [n(652215).GuildFeatures.ROLE_SUBSCRIPTIONS_AVAILABLE_FOR_PURCHASE];
function o(e) {
    if (!(0, i.isIOS)()) return !1;
    let t = (0, s.O)();
    if (
        null == t ||
        -1 ===
            (function (e, t) {
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
            })(t, "13.2")
    )
        return !1;
    let n = r.A.getGuild(e);
    return null != n && !!a.every((e) => n.features.has(e));
}
