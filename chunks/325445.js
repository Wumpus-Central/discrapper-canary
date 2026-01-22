n.d(t, {
    A: () => o,
}),
    n(896048);
var r = n(64700),
    i = n(451988),
    a = n(507698);
let s = 0x7fffffff;

function o(e) {
    let [t, n] = r.useState(!1),
        o = r.useRef(null);
    return (
        r.useEffect(() => {
            let t = () => {
                if (null == e || !("expiresAt" in e) || null == e.expiresAt) return void n(!1);
                let r = (0, a.bS)(e);
                n(r);
                let l = 1e3 * e.expiresAt - Date.now();
                if (!r && l > 0) {
                    let e = new i.Ep();
                    e.start(Math.min(s, l), () => t()), (o.current = e);
                }
            };
            return (
                t(),
                () => {
                    var e;
                    return null == (e = o.current) ? void 0 : e.stop();
                }
            );
        }, [e]),
        r.useEffect(() => {
            if (t) {
                var e;
                null == (e = o.current) || e.stop();
            }
        }, [t]),
        t ? void 0 : e
    );
}
