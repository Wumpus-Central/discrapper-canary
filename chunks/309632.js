n.d(t, {
    A: () => a,
}),
    n(896048);
var r = n(64700),
    l = n(311907),
    i = n(602582),
    s = n(946132);

function a(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        n = e.guild_id,
        a = e.id,
        [o, u] = (0, l.yK)([s.A], () => (t ? [null, !0] : [s.A.message(n, a), s.A.isLatest(n, a)]));
    return (
        (0, r.useEffect)(() => {
            null == a || u || i.A.addWant(a);
        }, [a, u]),
        o
    );
}
