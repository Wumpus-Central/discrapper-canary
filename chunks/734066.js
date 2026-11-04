var i = n(855986),
    r = n(865116),
    a = n(540999),
    s = n(718197),
    l = n(287809),
    o = n(723702),
    d = n(879610),
    c = n(682901),
    u = n(731854);
function _(e) {
    return d.Ay.isPremiumAtLeast(e?.premiumType, c.PremiumTypes.TIER_2);
}
function E(e) {
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
                (!!E(s.Ay) || !!(a.A.isDeveloper && r.Ay.get("clips_ignore_platform_requirement"))) &&
                _(l.default.getCurrentUser())
            );
        },
        cx: function () {
            return !1;
        },
        qj: _,
        ri: E,
        sw: function () {
            let e = E(s.Ay),
                t = (0, i.bG)([r.Ay, a.A], () => a.A.isDeveloper && r.Ay.get("clips_ignore_platform_requirement"));
            return (0, i.bG)([l.default], () => _(l.default.getCurrentUser())) && (e || t);
        },
    },
);
