"use strict";
n.d(t, { A: () => d });
var r = n(963169),
    i = n(532624),
    s = n(723702),
    a = n(837921),
    o = n(652215),
    l = n(650583);
function u(e, t) {
    return !(e === o.TGd.BROWSER && i.Ay.hasKeybind(l.zY.MOUSE_BUTTON, t));
}
let d = new (class {
    initialize() {
        (0, s.isDesktop)() &&
            (a.Ay.on("NAVIGATE_BACK", (e, t) => {
                u(t, l.RX.Back) && (0, r.OE)("native");
            }),
            a.Ay.on("NAVIGATE_FORWARD", (e, t) => {
                u(t, l.RX.Forward) && (0, r.Qb)("native");
            }));
    }
})();
