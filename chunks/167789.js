"use strict";
n.d(t, { O: () => a });
var r = n(613345);
let i = 1e3,
    s = (0, r.V)();
function a(e, t) {
    let n = s;
    if (void 0 !== n && null != n.requestIdleCallback && null != n.cancelIdleCallback) {
        let r = !1,
            s = null,
            a = () => {
                r || ((r = !0), null != s && (n.clearTimeout(s), (s = null)), e());
            },
            o = n.requestIdleCallback(a, t);
        return (
            (s = n.setTimeout(() => {
                r || n.cancelIdleCallback(o), a();
            }, t?.timeout ?? i)),
            () => {
                n.cancelIdleCallback(o), null != s && (n.clearTimeout(s), (s = null));
            }
        );
    }
    {
        let t = n.setTimeout(e, 0);
        return () => {
            n.clearTimeout(t);
        };
    }
}
