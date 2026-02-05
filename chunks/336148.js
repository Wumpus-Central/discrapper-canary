n.d(t, { X: () => r });
var l = n(311907),
    i = n(741961),
    s = n(287809);
function r(e) {
    return (0, l.bG)([i.A, s.default], () => {
        if (null == e) return !1;
        let t = s.default.getCurrentUser()?.id ?? null,
            n = i.A.getTypingUsers(e.id);
        for (let e in n) if (e !== t) return !0;
        return !1;
    }, [e]);
}
