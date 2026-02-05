"use strict";
n.d(t, { O: () => a });
let r = 1e3,
    i = window;
function a(e, t) {
    let n = i;
    if (void 0 !== n && null != n.requestIdleCallback && null != n.cancelIdleCallback) {
        let i = !1,
            a = null,
            s = () => {
                i || ((i = !0), null != a && (n.clearTimeout(a), (a = null)), e());
            },
            o = n.requestIdleCallback(s, t);
        return (
            (a = n.setTimeout(() => {
                i || n.cancelIdleCallback(o), s();
            }, t?.timeout ?? r)),
            () => {
                n.cancelIdleCallback(o), null != a && (n.clearTimeout(a), (a = null));
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
