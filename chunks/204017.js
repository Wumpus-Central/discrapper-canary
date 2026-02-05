"use strict";
n.d(t, { A: () => s });
var r = n(311907),
    i = n(760751),
    a = n(800007);
function s() {
    return (0, r.cf)([i.A], () => {
        let [e, t] = a.Ge,
            n = i.A.getDetectableGame(e),
            r = i.A.getDetectableGame(t);
        return { gameName: n?.name ?? "Minecraft", gameName2: r?.name ?? "Hytale" };
    });
}
