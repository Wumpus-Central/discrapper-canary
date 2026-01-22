n.d(t, { O: () => a });
let r = 1000,
    i = window;
function a(e, t) {
    let n = i;
    if (void 0 !== n && null != n.requestIdleCallback && null != n.cancelIdleCallback) {
        var a;
        let i = !1,
            s = null,
            o = () => {
                i || ((i = !0), null != s && (n.clearTimeout(s), (s = null)), e());
            },
            l = n.requestIdleCallback(o, t);
        return (
            (s = n.setTimeout(
                () => {
                    i || n.cancelIdleCallback(l), o();
                },
                null != (a = null == t ? void 0 : t.timeout) ? a : r,
            )),
            () => {
                n.cancelIdleCallback(l), null != s && (n.clearTimeout(s), (s = null));
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
