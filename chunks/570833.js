n.d(t, { f: () => a });
let r = 1000,
    i = window;
function a(e, t) {
    let n = i;
    if (void 0 !== n && null != n.requestIdleCallback && null != n.cancelIdleCallback) {
        var a;
        let i = !1,
            o = null,
            s = () => {
                i || ((i = !0), null != o && (n.clearTimeout(o), (o = null)), e());
            },
            l = n.requestIdleCallback(s, t);
        return (
            (o = n.setTimeout(
                () => {
                    i || n.cancelIdleCallback(l), s();
                },
                null != (a = null == t ? void 0 : t.timeout) ? a : r
            )),
            () => {
                n.cancelIdleCallback(l), null != o && (n.clearTimeout(o), (o = null));
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
