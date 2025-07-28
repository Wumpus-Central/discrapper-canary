n.d(t, {
    b: () => s,
    e: () => o
});
var i = n(399606),
    r = n(594174),
    l = n(918505);
let o = () => a(r.default.getCurrentUser(), (0, l.JH)()),
    s = () =>
        a(
            (0, i.e7)([r.default], () => r.default.getCurrentUser()),
            (0, l.o9)()
        );
function a(e, t) {
    return !(null == e || e.hasUniqueUsername()) && !!e.hasVerifiedEmailOrPhone() && !!t;
}
