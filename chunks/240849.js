var i = r(703656),
    a = r(556296),
    o = r(358085),
    s = r(998502),
    l = r(981631);
function u(e, n) {
    return !(e === l.MAM.BROWSER && a.Z.hasKeybind(l.MoX.MOUSE_BUTTON, n)) && !0;
}
class c {
    initialize() {
        (0, o.isDesktop)() &&
            (s.ZP.on('NAVIGATE_BACK', (e, n) => {
                u(n, l.qXD.Back) && (0, i.op)();
            }),
            s.ZP.on('NAVIGATE_FORWARD', (e, n) => {
                u(n, l.qXD.Forward) && (0, i.eH)();
            }));
    }
}
n.Z = new c();
