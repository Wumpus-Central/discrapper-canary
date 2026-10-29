l.d(t, { A: () => o });
var a = l(582128),
    n = l(17928),
    s = l(253932),
    i = l(225186),
    r = l(330568),
    c = l(845300);
function o(e, t) {
    let l = s.Q_.useSetting(),
        o = (0, n.bG)([r.A], () => r.A.getFetchState()),
        A = (0, n.bG)([r.A], () => r.A.isDeveloperOfApplication(e)),
        u = l || (t ?? !1);
    return (
        a.useEffect(() => {
            null != e && u && o === c.Z.INITIALIZED && (0, i.S)();
        }, [e, u, o]),
        A
    );
}
