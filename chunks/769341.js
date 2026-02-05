"use strict";
n.d(t, { A: () => d });
var r = n(963169),
    i = n(532624),
    a = n(723702),
    s = n(837921),
    o = n(652215),
    l = n(650583);
function u(e, t) {
    return !(e === o.TGd.BROWSER && i.Ay.hasKeybind(l.zY.MOUSE_BUTTON, t));
}
class c {
    initialize() {
        (0, a.isDesktop)() &&
            (s.Ay.on("NAVIGATE_BACK", (e, t) => {
                u(t, l.RX.Back) && (0, r.OE)("native");
            }),
            s.Ay.on("NAVIGATE_FORWARD", (e, t) => {
                u(t, l.RX.Forward) && (0, r.Qb)("native");
            }));
    }
}
let d = new c();
