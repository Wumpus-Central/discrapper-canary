t.d(l, { A: () => r });
var n = t(64700),
    s = t(311907),
    i = t(686956),
    a = t(287809);
function r(e) {
    let l = (0, s.bG)([a.default], () => a.default.getUser(e?.creator_id), [e]);
    return (
        n.useEffect(() => {
            null == l && e?.creator_id != null && i.A.requestMembersById(e.guild_id, e.creator_id);
        }, [e, l]),
        l
    );
}
