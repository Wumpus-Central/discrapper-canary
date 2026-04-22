n.d(t, { A: () => o });
var a = n(64700),
    r = n(451988),
    l = n(821956),
    i = n(652215);
function o(e) {
    let [t, n] = a.useState(!1),
        o = a.useRef(null);
    return (
        a.useEffect(() => {
            let t = () => {
                if (null == e || !("expiresAt" in e) || null == e.expiresAt) return void n(!1);
                let a = (0, l.bS)(e);
                n(a);
                let s = 1e3 * e.expiresAt - Date.now();
                if (!a && s > 0) {
                    let e = new r.Ep();
                    e.start(Math.min(i.mnr, s), () => t()), (o.current = e);
                }
            };
            return t(), () => o.current?.stop();
        }, [e]),
        a.useEffect(() => {
            t && o.current?.stop();
        }, [t]),
        t ? void 0 : e
    );
}
