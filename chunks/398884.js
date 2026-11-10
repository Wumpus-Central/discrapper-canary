(n(855986), n(450510));
var i = n(71393),
    r = n(287809),
    a = n(448645);
function s(e) {
    return a.Ay.canUseIncreasedGuildCap(e) || e?.isStaff() === !0;
}
(n(652215),
    n.d(
        t,
        {},
        {
            Om: s,
            Sn: function () {
                return i.A.getGuildCount() >= 100 && !s(r.default.getCurrentUser());
            },
        },
    ));
