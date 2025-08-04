n.d(t, {
    b: () => o,
    e: () => a
});
var r = n(399606),
    i = n(594174),
    l = n(918505);
let a = () => s(i.default.getCurrentUser(), (0, l.JH)()),
    o = () =>
        s(
            (0, r.e7)([i.default], () => i.default.getCurrentUser()),
            (0, l.o9)()
        );
function s(e, t) {
    return !(null == e || e.hasUniqueUsername()) && !!e.hasVerifiedEmailOrPhone() && !!t;
}
