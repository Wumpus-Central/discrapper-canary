n.d(t, { A: () => o }), n(321073);
var l = n(64700),
    i = n(17928),
    s = n(429913),
    a = n(989837),
    r = n(485878);
function o() {
    let e = (0, i.bG)([a.A], () => a.A.initialState(), []),
        t = (0, s.h)(e?.applicationId);
    return l.useMemo(() => {
        if (null == e) return;
        let n = [{ type: r.Wy.HOME }];
        return null != e.applicationId && null != t && n.push({ type: r.Wy.APPLICATION, application: t }), n;
    }, [e, t]);
}
