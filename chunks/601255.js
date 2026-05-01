t.d(a, { A: () => o });
var n = t(64700),
    r = t(451988),
    l = t(821956),
    i = t(652215);
function o(e) {
    let [a, t] = n.useState(!1),
        o = n.useRef(null);
    return (
        n.useEffect(() => {
            let a = () => {
                if (null == e || !("expiresAt" in e) || null == e.expiresAt) return void t(!1);
                let n = (0, l.bS)(e);
                t(n);
                let s = 1e3 * e.expiresAt - Date.now();
                if (!n && s > 0) {
                    let e = new r.Ep();
                    e.start(Math.min(i.mnr, s), () => a()), (o.current = e);
                }
            };
            return a(), () => o.current?.stop();
        }, [e]),
        n.useEffect(() => {
            a && o.current?.stop();
        }, [a]),
        a ? void 0 : e
    );
}
