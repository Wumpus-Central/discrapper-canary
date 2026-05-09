"use strict";
n.d(t, { A: () => c });
var i = n(64700),
    r = n(451988),
    s = n(235058),
    a = n(696016);
let o = 0,
    l = new r.Ep();
function u(e) {
    try {
        s.Ay.getMediaEngine().setClipsUIActive(e);
    } catch (e) {
        a.nx.error("Failed to push clips UI active state to native:", e);
    }
}
function c() {
    i.useEffect(
        () => (
            !(function () {
                if (1 === (o += 1)) {
                    if (l.isStarted()) return l.stop();
                    u(!0);
                }
            })(),
            () =>
                void (
                    0 === (o = Math.max(0, o - 1)) &&
                    l.start(250, () => {
                        0 === o && u(!1);
                    })
                )
        ),
        [],
    );
}
