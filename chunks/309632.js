n.d(t, {
    A: () => s,
}),
    n(896048);
var i = n(64700),
    r = n(311907),
    l = n(602582),
    a = n(946132);

function s(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        n = e.guild_id,
        s = e.id,
        [o, u] = (0, r.yK)([a.A], () => (t ? [null, !0] : [a.A.message(n, s), a.A.isLatest(n, s)]));
    return (
        (0, i.useEffect)(() => {
            null == s || u || l.A.addWant(s);
        }, [s, u]),
        o
    );
}
