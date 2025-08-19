n.d(t, { Z: () => u });
var r = n(891304),
    i = n(556296),
    a = n(358085),
    o = n(998502),
    s = n(981631);
function l(e, t) {
    return !(e === s.MAM.BROWSER && i.ZP.hasKeybind(s.MoX.MOUSE_BUTTON, t));
}
class c {
    initialize() {
        (0, a.isDesktop)() &&
            (o.ZP.on("NAVIGATE_BACK", (e, t) => {
                l(t, s.qXD.Back) && (0, r.Hm)("native");
            }),
            o.ZP.on("NAVIGATE_FORWARD", (e, t) => {
                l(t, s.qXD.Forward) && (0, r.TL)("native");
            }));
    }
}
let u = new c();
