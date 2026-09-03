n.d(t, { O: () => r });
let i = (0, n(613345).V)();
function r(e, t) {
    if (void 0 !== i && null != i.requestIdleCallback && null != i.cancelIdleCallback) {
        let r = !1,
            a = null;
        function n() {
            r || ((r = !0), null != a && (i.clearTimeout(a), (a = null)), e());
        }
        let s = i.requestIdleCallback(n, t);
        return (
            (a = i.setTimeout(() => {
                r || i.cancelIdleCallback(s), n();
            }, t?.timeout ?? 1e3)),
            () => {
                i.cancelIdleCallback(s), null != a && (i.clearTimeout(a), (a = null));
            }
        );
    }
    {
        let t = i.setTimeout(e, 0);
        return () => {
            i.clearTimeout(t);
        };
    }
}
