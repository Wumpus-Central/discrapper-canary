"use strict";
n.d(t, { A: () => s });
var r = n(66455),
    i = n(964486);
function s(e) {
    let t = (0, r.A)(e);
    (0, i.Ay)(() => {
        let e = requestAnimationFrame(function n() {
            t.current?.(), (e = requestAnimationFrame(n));
        });
        return () => cancelAnimationFrame(e);
    });
}
