var i = n(855986),
    r = n(865116),
    a = n(540999),
    s = n(754712),
    l = n(287809),
    o = n(723702),
    d = n(448645),
    c = n(682901),
    u = n(731854);
function _() {
    let e = A(s.Ay),
        t = (0, i.bG)([r.Ay, a.A], () => a.A.isDeveloper && r.Ay.get("clips_ignore_platform_requirement"));
    return e || t;
}
function E(e) {
    return d.Ay.isPremiumAtLeast(e?.premiumType, c.PremiumTypes.TIER_2);
}
function A(e) {
    let t = e.getMediaEngine();
    return o.xl() && t.supports(u.O5.CLIPS) && t.hasClipsV3Support();
}
n.d(
    t,
    {},
    {
        BW: function () {
            return !1;
        },
        Pm: function () {
            return (
                (!!A(s.Ay) || !!(a.A.isDeveloper && r.Ay.get("clips_ignore_platform_requirement"))) &&
                E(l.default.getCurrentUser())
            );
        },
        W1: _,
        cx: function () {
            return !1;
        },
        qj: E,
        ri: A,
        sw: function () {
            let e = _();
            return (0, i.bG)([l.default], () => E(l.default.getCurrentUser())) && e;
        },
    },
);
