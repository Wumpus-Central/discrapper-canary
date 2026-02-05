n.d(t, { g: () => a, x: () => s });
var i = n(417597),
    l = n(287809),
    r = n(951122);
let s = () => o(l.default.getCurrentUser(), (0, r.kG)()),
    a = () =>
        o(
            (0, i.bG)([l.default], () => l.default.getCurrentUser()),
            (0, r.Jz)(),
        );
function o(e, t) {
    return !(null == e || e.hasUniqueUsername()) && !!e.hasVerifiedEmailOrPhone() && !!t;
}
