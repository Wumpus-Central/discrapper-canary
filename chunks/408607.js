l.d(t, { A: () => r });
var n = l(64700),
    s = l(311907),
    i = l(686956),
    a = l(287809);
function r(e) {
    let t = (0, s.bG)([a.default], () => a.default.getUser(e?.creator_id), [e]);
    return (
        n.useEffect(() => {
            null == t && e?.creator_id != null && i.A.requestMembersById(e.guild_id, e.creator_id);
        }, [e, t]),
        t
    );
}
