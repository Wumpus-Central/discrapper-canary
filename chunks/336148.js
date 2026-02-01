n.d(t, {
    X: () => a,
});
var i = n(311907),
    r = n(741961),
    l = n(287809);

function a(e) {
    return (0, i.bG)([r.A, l.default], () => {
        var t, n;
        if (null == e) return !1;
        let i = null != (t = null == (n = l.default.getCurrentUser()) ? void 0 : n.id) ? t : null,
            a = r.A.getTypingUsers(e.id);
        for (let e in a) if (e !== i) return !0;
        return !1;
    }, [e]);
}
