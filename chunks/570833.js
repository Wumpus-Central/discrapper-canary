n.d(t, { f: () => o });
let r = 1000,
    i = window;
function o(e, t) {
    let n = i;
    if (void 0 !== n && null != n.requestIdleCallback && null != n.cancelIdleCallback) {
        var o;
        let i = !1,
            a = null,
            s = () => {
                i || ((i = !0), null != a && (n.clearTimeout(a), (a = null)), e());
            },
            l = n.requestIdleCallback(s, t);
        return (
            (a = n.setTimeout(
                () => {
                    i || n.cancelIdleCallback(l), s();
                },
                null != (o = null == t ? void 0 : t.timeout) ? o : r
            )),
            () => {
                n.cancelIdleCallback(l), null != a && (n.clearTimeout(a), (a = null));
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
