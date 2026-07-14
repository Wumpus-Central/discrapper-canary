"use strict";
n.d(t, { A: () => c });
var i = n(64700),
    r = n(451988),
    a = n(186295),
    s = n(696016);
let l = 0,
    o = new r.Ep();
function d(e) {
    try {
        a.Ay.getMediaEngine().setClipsUIActive(e);
    } catch (e) {
        s.nx.error("Failed to push clips UI active state to native:", e);
    }
}
function c() {
    i.useEffect(
        () => (
            !(function () {
                if (1 === (l += 1)) {
                    if (o.isStarted()) return o.stop();
                    d(!0);
                }
            })(),
            () =>
                void (
                    0 === (l = Math.max(0, l - 1)) &&
                    o.start(250, () => {
                        0 === l && d(!1);
                    })
                )
        ),
        [],
    );
}
