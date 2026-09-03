n.d(t, { Om: () => l, Sn: () => o }), n(17928), n(450510);
var i = n(71393),
    r = n(287809),
    a = n(158045),
    s = n(652215);
function l(e) {
    return a.Ay.canUseIncreasedGuildCap(e) || e?.isStaff() === !0;
}
function o() {
    return i.A.getGuildCount() >= s.qlD && !l(r.default.getCurrentUser());
}
