n.d(t, {
    b: () => s,
    e: () => o,
});
var r = n(399606),
    i = n(594174),
    a = n(918505);
let o = () => l(i.default.getCurrentUser(), (0, a.JH)()),
    s = () =>
        l(
            (0, r.e7)([i.default], () => i.default.getCurrentUser()),
            (0, a.o9)(),
        );
function l(e, t) {
    return !(null == e || e.hasUniqueUsername()) && !!e.hasVerifiedEmailOrPhone() && !!t;
}
