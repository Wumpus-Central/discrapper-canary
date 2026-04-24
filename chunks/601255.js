a.d(n, { A: () => o });
var t = a(64700),
    r = a(451988),
    i = a(821956),
    l = a(652215);
function o(e) {
    let [n, a] = t.useState(!1),
        o = t.useRef(null);
    return (
        t.useEffect(() => {
            let n = () => {
                if (null == e || !("expiresAt" in e) || null == e.expiresAt) return void a(!1);
                let t = (0, i.bS)(e);
                a(t);
                let s = 1e3 * e.expiresAt - Date.now();
                if (!t && s > 0) {
                    let e = new r.Ep();
                    e.start(Math.min(l.mnr, s), () => n()), (o.current = e);
                }
            };
            return n(), () => o.current?.stop();
        }, [e]),
        t.useEffect(() => {
            n && o.current?.stop();
        }, [n]),
        n ? void 0 : e
    );
}
