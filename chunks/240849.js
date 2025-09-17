n.d(t, { Z: () => d });
var r = n(891304),
    i = n(556296),
    a = n(358085),
    o = n(998502),
    s = n(981631),
    l = n(295907);
function c(e, t) {
    return !(e === s.MAM.BROWSER && i.ZP.hasKeybind(l.Mo.MOUSE_BUTTON, t));
}
class u {
    initialize() {
        (0, a.isDesktop)() &&
            (o.ZP.on("NAVIGATE_BACK", (e, t) => {
                c(t, l.qX.Back) && (0, r.Hm)("native");
            }),
            o.ZP.on("NAVIGATE_FORWARD", (e, t) => {
                c(t, l.qX.Forward) && (0, r.TL)("native");
            }));
    }
}
let d = new u();
