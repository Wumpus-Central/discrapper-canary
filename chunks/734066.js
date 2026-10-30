n.d(t, { BW: () => A, Pm: () => c, cx: () => E, ri: () => h, sw: () => u });
var i = n(17928),
    r = n(999926),
    a = n(287809),
    s = n(723702),
    l = n(24482),
    o = n(202541),
    d = n(731854);
function c() {
    return !!h(r.Ay) && _(a.default.getCurrentUser());
}
function u() {
    let e = h(r.Ay);
    return (0, i.bG)([a.default], () => _(a.default.getCurrentUser())) && e;
}
function _(e) {
    return l.Ay.isPremiumAtLeast(e?.premiumType, o.PremiumTypes.TIER_2);
}
function E() {
    return !1;
}
function A() {
    return !1;
}
function h(e) {
    let t = e.getMediaEngine();
    return s.isDesktop() && t.supports(d.O5.CLIPS) && t.hasClipsV3Support();
}
