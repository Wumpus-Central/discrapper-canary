"use strict";
n.d(t, { A: () => o });
var r = n(64700),
    i = n(451988),
    s = n(507698),
    a = n(652215);
function o(e) {
    let [t, n] = r.useState(!1),
        o = r.useRef(null);
    return (
        r.useEffect(() => {
            let t = () => {
                if (null == e || !("expiresAt" in e) || null == e.expiresAt) return void n(!1);
                let r = (0, s.bS)(e);
                n(r);
                let l = 1e3 * e.expiresAt - Date.now();
                if (!r && l > 0) {
                    let e = new i.Ep();
                    e.start(Math.min(a.mnr, l), () => t()), (o.current = e);
                }
            };
            return t(), () => o.current?.stop();
        }, [e]),
        r.useEffect(() => {
            t && o.current?.stop();
        }, [t]),
        t ? void 0 : e
    );
}
