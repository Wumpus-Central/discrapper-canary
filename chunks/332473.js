n.d(t, {
    b: () => s,
    e: () => a
});
var r = n(399606),
    i = n(594174),
    o = n(918505);
let a = () => l(i.default.getCurrentUser(), (0, o.JH)()),
    s = () =>
        l(
            (0, r.e7)([i.default], () => i.default.getCurrentUser()),
            (0, o.o9)()
        );
function l(e, t) {
    return !(null == e || e.hasUniqueUsername()) && !!e.hasVerifiedEmailOrPhone() && !!t;
}
