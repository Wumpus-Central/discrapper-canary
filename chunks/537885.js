"use strict";
n.d(t, { A: () => u });
var r = n(64700),
    i = n(311907),
    s = n(927813),
    a = n(251358),
    o = n(133636);
let l = 30 * s.A.Millis.SECOND;
function u() {
    let e = (0, i.bG)([o.A], () => o.A.getNextCountersFetchTime()),
        [t, n] = (0, r.useState)(null),
        s = (0, r.useCallback)(async () => {
            n(null);
            try {
                await (0, a.Ak)();
            } catch (e) {
                n(429 === e.status && e.body?.retry_after != null ? 1e3 * e.body.retry_after : l);
            }
        }, []);
    (0, r.useEffect)(() => {
        let t = setTimeout(s, Math.max(0, e - Date.now()));
        return () => clearTimeout(t);
    }, [s, e]),
        (0, r.useEffect)(() => {
            if (null != t) {
                let e = setTimeout(s, t ?? 0);
                return () => clearTimeout(e);
            }
        }, [t, s]);
}
