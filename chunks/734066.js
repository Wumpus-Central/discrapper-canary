n.d(t, { BW: () => f, Pm: () => _, cx: () => h, qj: () => A, ri: () => I, sw: () => E });
var i = n(17928),
    r = n(865116),
    a = n(540999),
    s = n(477653),
    l = n(287809),
    o = n(723702),
    d = n(24482),
    c = n(202541),
    u = n(731854);
function _() {
    return (
        (!!I(s.Ay) || !!(a.A.isDeveloper && r.Ay.get("clips_ignore_platform_requirement"))) &&
        A(l.default.getCurrentUser())
    );
}
function E() {
    let e = I(s.Ay),
        t = (0, i.bG)([r.Ay, a.A], () => a.A.isDeveloper && r.Ay.get("clips_ignore_platform_requirement"));
    return (0, i.bG)([l.default], () => A(l.default.getCurrentUser())) && (e || t);
}
function A(e) {
    return d.Ay.isPremiumAtLeast(e?.premiumType, c.PremiumTypes.TIER_2);
}
function h() {
    return !1;
}
function f() {
    return !1;
}
function I(e) {
    let t = e.getMediaEngine();
    return o.isDesktop() && t.supports(u.O5.CLIPS) && t.hasClipsV3Support();
}
