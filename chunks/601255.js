n.d(t, { A: () => u });
var r = n(582128),
    a = n(451988),
    i = n(821956),
    l = n(652215);
function u(e) {
    let [t, n] = r.useState(!1),
        u = r.useRef(null);
    return (
        r.useEffect(
            () => (
                !(function t() {
                    if (null == e || !("expiresAt" in e) || null == e.expiresAt) return void n(!1);
                    let r = (0, i.bS)(e);
                    n(r);
                    let o = 1e3 * e.expiresAt - Date.now();
                    if (!r && o > 0) {
                        let e = new a.Ep();
                        e.start(Math.min(l.mnr, o), () => t()), (u.current = e);
                    }
                })(),
                () => u.current?.stop()
            ),
            [e],
        ),
        r.useEffect(() => {
            t && u.current?.stop();
        }, [t]),
        t ? void 0 : e
    );
}
