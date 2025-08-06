n.d(t, { M: () => o }), n(388685);
var r = n(442837),
    i = n(580130);
function o(e) {
    return (0, r.e7)([i.Z], () => {
        let t = i.Z.getForSku(e);
        if (null == t) return !1;
        let n = 0;
        for (let e of t) {
            var r, o;
            let t = null != (o = null == (r = e.endsAt) ? void 0 : r.getTime()) ? o : 1 / 0;
            t >= n && (n = t);
        }
        return n > new Date().getTime();
    }, [e]);
}
