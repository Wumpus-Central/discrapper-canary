"use strict";
n.d(t, { BW: () => p, L_: () => c, Pm: () => d, cx: () => f, sw: () => _ });
var i = n(17928),
    r = n(945810),
    s = n(728555),
    a = n(287809),
    o = n(428262),
    l = n(915618),
    u = n(788868);
let c = (0, r.mj)({
    kind: "user",
    name: "2026-03-clips-experiment",
    defaultConfig: { enableClips: !1, ignorePlatformRestriction: !1 },
    variations: {
        1: { enableClips: !0, ignorePlatformRestriction: !1 },
        2: { enableClips: !0, ignorePlatformRestriction: !0 },
    },
});
function d() {
    if (!(0, l.A)(s.Ay)) return !1;
    let e = h(a.default.getCurrentUser()),
        { enableClips: t } = c.getConfig({ location: "areClipsEnabled" });
    return e || t;
}
function _() {
    let e = (0, l.A)(s.Ay),
        t = (0, i.bG)([a.default], () => h(a.default.getCurrentUser())),
        { enableClips: n } = c.getConfig({ location: "useEnableClips" });
    return (n || t) && e;
}
function h(e) {
    return o.Ay.isPremiumAtLeast(e?.premiumType, u.PremiumTypes.TIER_2);
}
function f() {
    return !1;
}
function p() {
    return !1;
}
