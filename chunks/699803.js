n.d(t, { A: () => o }), n(321073);
var i = n(64700),
    l = n(17928),
    a = n(429913),
    s = n(989837),
    r = n(485878);
function o() {
    let e = (0, l.bG)([s.A], () => s.A.initialState(), []),
        t = (0, a.h)(e?.applicationId);
    return i.useMemo(() => {
        if (null == e) return;
        let n = [{ type: r.Wy.HOME }];
        return null != e.applicationId && null != t && n.push({ type: r.Wy.APPLICATION, application: t }), n;
    }, [e, t]);
}
