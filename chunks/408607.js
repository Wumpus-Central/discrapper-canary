n.d(l, { A: () => r });
var s = n(64700),
    i = n(17928),
    t = n(686956),
    a = n(287809);
function r(e) {
    let l = (0, i.bG)([a.default], () => a.default.getUser(e?.creator_id), [e]);
    return (
        s.useEffect(() => {
            null == l && e?.creator_id != null && t.A.requestMembersById(e.guild_id, e.creator_id);
        }, [e, l]),
        l
    );
}
