t.d(r, { A: () => o });
var a = t(64700),
    n = t(451988),
    l = t(821956),
    i = t(652215);
function o(e) {
    let [r, t] = a.useState(!1),
        o = a.useRef(null);
    return (
        a.useEffect(() => {
            let r = () => {
                if (null == e || !("expiresAt" in e) || null == e.expiresAt) return void t(!1);
                let a = (0, l.bS)(e);
                t(a);
                let s = 1e3 * e.expiresAt - Date.now();
                if (!a && s > 0) {
                    let e = new n.Ep();
                    e.start(Math.min(i.mnr, s), () => r()), (o.current = e);
                }
            };
            return r(), () => o.current?.stop();
        }, [e]),
        a.useEffect(() => {
            r && o.current?.stop();
        }, [r]),
        r ? void 0 : e
    );
}
