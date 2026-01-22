n.d(t, {
    L: () => a,
}),
    n(896048);
var r = n(311907),
    i = n(469778);

function a(e) {
    return (0, r.bG)([i.A], () => {
        let t = i.A.getForSku(e);
        if (null == t) return !1;
        let n = 0;
        for (let e of t) {
            var r, a;
            let t = null != (r = null == (a = e.endsAt) ? void 0 : a.getTime()) ? r : 1 / 0;
            t >= n && (n = t);
        }
        return n > new Date().getTime();
    }, [e]);
}
