i.d(e, { A: () => u });
var s = i(64700),
    a = i(451988),
    c = i(451409),
    n = i(696016);
let p = 0,
    r = new a.Ep();
function o(t) {
    try {
        c.Ay.getMediaEngine().setClipsUIActive(t);
    } catch (t) {
        n.nx.error("Failed to push clips UI active state to native:", t);
    }
}
function u() {
    s.useEffect(
        () => (
            !(function () {
                if (1 === (p += 1)) {
                    if (r.isStarted()) return r.stop();
                    o(!0);
                }
            })(),
            () =>
                void (
                    0 === (p = Math.max(0, p - 1)) &&
                    r.start(250, () => {
                        0 === p && o(!1);
                    })
                )
        ),
        [],
    );
}
