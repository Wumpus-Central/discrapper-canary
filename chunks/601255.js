"use strict";
n.d(t, { A: () => l });
var i = n(64700),
    r = n(451988),
    a = n(821956),
    s = n(652215);
function l(e) {
    let [t, n] = i.useState(!1),
        l = i.useRef(null);
    return (
        i.useEffect(
            () => (
                !(function t() {
                    if (null == e || !("expiresAt" in e) || null == e.expiresAt) return void n(!1);
                    let i = (0, a.bS)(e);
                    n(i);
                    let o = 1e3 * e.expiresAt - Date.now();
                    if (!i && o > 0) {
                        let e = new r.Ep();
                        e.start(Math.min(s.mnr, o), () => t()), (l.current = e);
                    }
                })(),
                () => l.current?.stop()
            ),
            [e],
        ),
        i.useEffect(() => {
            t && l.current?.stop();
        }, [t]),
        t ? void 0 : e
    );
}
