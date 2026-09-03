n.d(t, { BW: () => h, L_: () => c, Pm: () => u, cx: () => A, sw: () => _ });
var i = n(17928),
    r = n(945810),
    a = n(45630),
    s = n(287809),
    l = n(158045),
    o = n(915618),
    d = n(202541);
let c = (0, r.mj)({
    kind: "user",
    name: "2026-03-clips-experiment",
    defaultConfig: { enableClips: !1, ignorePlatformRestriction: !1 },
    variations: {
        1: { enableClips: !0, ignorePlatformRestriction: !1 },
        2: { enableClips: !0, ignorePlatformRestriction: !0 },
    },
});
function u() {
    if (!(0, o.A)(a.Ay)) return !1;
    let e = E(s.default.getCurrentUser()),
        { enableClips: t } = c.getConfig({ location: "areClipsEnabled" });
    return e || t;
}
function _() {
    let e = (0, o.A)(a.Ay),
        t = (0, i.bG)([s.default], () => E(s.default.getCurrentUser())),
        { enableClips: n } = c.getConfig({ location: "useEnableClips" });
    return (n || t) && e;
}
function E(e) {
    return l.Ay.isPremiumAtLeast(e?.premiumType, d.PremiumTypes.TIER_2);
}
function A() {
    return !1;
}
function h() {
    return !1;
}
