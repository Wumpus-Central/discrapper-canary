n.d(t, { _: () => l });
var i = n(945810),
    r = n(207913),
    a = n(393033);
let s = (0, i.mj)({
    kind: "user",
    name: "2026-07-manual-age-assurance-fallback",
    defaultConfig: { enabled: !1 },
    variations: { 1: { enabled: !0 } },
});
function l(e) {
    return (0, a.qn)() ? r.A.getIsManualReviewFallbackEnabled() : s.getConfig({ location: e }).enabled;
}
