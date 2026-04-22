"use strict";
n.d(t, { O: () => i });
let r = (0, n(613345).V)();
function i(e, t) {
    if (void 0 !== r && null != r.requestIdleCallback && null != r.cancelIdleCallback) {
        let n = !1,
            i = null,
            s = () => {
                n || ((n = !0), null != i && (r.clearTimeout(i), (i = null)), e());
            },
            a = r.requestIdleCallback(s, t);
        return (
            (i = r.setTimeout(() => {
                n || r.cancelIdleCallback(a), s();
            }, t?.timeout ?? 1e3)),
            () => {
                r.cancelIdleCallback(a), null != i && (r.clearTimeout(i), (i = null));
            }
        );
    }
    {
        let t = r.setTimeout(e, 0);
        return () => {
            r.clearTimeout(t);
        };
    }
}
