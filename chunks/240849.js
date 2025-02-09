n.d(t, { Z: () => c });
var i = n(703656),
    r = n(556296),
    a = n(358085),
    s = n(998502),
    o = n(981631);
function l(e, t) {
    return !(e === o.MAM.BROWSER && r.ZP.hasKeybind(o.MoX.MOUSE_BUTTON, t));
}
class u {
    initialize() {
        (0, a.isDesktop)() &&
            (s.ZP.on('NAVIGATE_BACK', (e, t) => {
                l(t, o.qXD.Back) && (0, i.op)();
            }),
            s.ZP.on('NAVIGATE_FORWARD', (e, t) => {
                l(t, o.qXD.Forward) && (0, i.eH)();
            }));
    }
}
let c = new u();
