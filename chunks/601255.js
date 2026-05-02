a.d(t, { A: () => i });
var r = a(64700),
    n = a(451988),
    l = a(821956),
    o = a(652215);
function i(e) {
    let [t, a] = r.useState(!1),
        i = r.useRef(null);
    return (
        r.useEffect(() => {
            let t = () => {
                if (null == e || !("expiresAt" in e) || null == e.expiresAt) return void a(!1);
                let r = (0, l.bS)(e);
                a(r);
                let s = 1e3 * e.expiresAt - Date.now();
                if (!r && s > 0) {
                    let e = new n.Ep();
                    e.start(Math.min(o.mnr, s), () => t()), (i.current = e);
                }
            };
            return t(), () => i.current?.stop();
        }, [e]),
        r.useEffect(() => {
            t && i.current?.stop();
        }, [t]),
        t ? void 0 : e
    );
}
