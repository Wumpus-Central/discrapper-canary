n.d(t, { Z: () => o }), n(388685);
var r = n(473749),
    i = n(442837),
    l = n(983543),
    a = n(584731);
function o(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        n = e.guild_id,
        o = e.id,
        [s, u] = (0, i.Wu)([a.Z], () => (t ? [null, !0] : [a.Z.message(n, o), a.Z.isLatest(n, o)]));
    return (
        (0, r.useEffect)(() => {
            null == o || u || l.Z.addWant(o);
        }, [o, u]),
        s
    );
}
