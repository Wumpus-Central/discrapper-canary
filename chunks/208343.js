n.d(t, {
    A: () => a,
});
var l = n(311907),
    r = n(531685),
    i = n(3137);

function a(e) {
    let t = (0, l.bG)([r.A], () => r.A.isFocused());
    return (0, l.bG)([i.A], () =>
        i.A.isEnabled({
            shakeLocation: e,
        }) && t
            ? i.A.shakeIntensity
            : 0,
    );
}
