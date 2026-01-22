n.d(t, {
    g: () => o,
    x: () => s,
});
var r = n(417597),
    i = n(287809),
    a = n(951122);
let s = () => l(i.default.getCurrentUser(), (0, a.kG)()),
    o = () =>
        l(
            (0, r.bG)([i.default], () => i.default.getCurrentUser()),
            (0, a.Jz)(),
        );
function l(e, t) {
    return !(null == e || e.hasUniqueUsername()) && !!e.hasVerifiedEmailOrPhone() && !!t;
}
