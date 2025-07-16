n.d(t, {
    b: () => o,
    e: () => a
});
var r = n(399606),
    i = n(594174),
    l = n(918505);
let a = () => c(i.default.getCurrentUser(), (0, l.JH)()),
    o = () =>
        c(
            (0, r.e7)([i.default], () => i.default.getCurrentUser()),
            (0, l.o9)()
        );
function c(e, t) {
    return !(null == e || e.isPomelo()) && !!e.hasVerifiedEmailOrPhone() && !!t;
}
