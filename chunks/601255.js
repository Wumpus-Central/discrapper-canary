"use strict";
n.d(t, { A: () => o });
var i = n(64700),
    r = n(451988),
    s = n(821956),
    a = n(652215);
function o(e) {
    let [t, n] = i.useState(!1),
        o = i.useRef(null);
    return (
        i.useEffect(() => {
            let t = () => {
                if (null == e || !("expiresAt" in e) || null == e.expiresAt) return void n(!1);
                let i = (0, s.bS)(e);
                n(i);
                let l = 1e3 * e.expiresAt - Date.now();
                if (!i && l > 0) {
                    let e = new r.Ep();
                    e.start(Math.min(a.mnr, l), () => t()), (o.current = e);
                }
            };
            return t(), () => o.current?.stop();
        }, [e]),
        i.useEffect(() => {
            t && o.current?.stop();
        }, [t]),
        t ? void 0 : e
    );
}
