n.d(t, { A: () => a });
var l = n(64700),
    i = n(311907),
    r = n(602582),
    s = n(946132);
function a(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        n = e.guild_id,
        a = e.id,
        [u, o] = (0, i.yK)([s.A], () => (t ? [null, !0] : [s.A.message(n, a), s.A.isLatest(n, a)]));
    return (
        (0, l.useEffect)(() => {
            null == a || o || r.A.addWant(a);
        }, [a, o]),
        u
    );
}
