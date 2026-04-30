a.d(l, { A: () => r });
var s = a(64700),
    n = a(17928),
    i = a(686956),
    t = a(287809);
function r(e) {
    let l = (0, n.bG)([t.default], () => t.default.getUser(e?.creator_id), [e]);
    return (
        s.useEffect(() => {
            null == l && e?.creator_id != null && i.A.requestMembersById(e.guild_id, e.creator_id);
        }, [e, l]),
        l
    );
}
