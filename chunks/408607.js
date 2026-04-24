t.d(l, { A: () => r });
var n = t(64700),
    a = t(17928),
    s = t(686956),
    i = t(287809);
function r(e) {
    let l = (0, a.bG)([i.default], () => i.default.getUser(e?.creator_id), [e]);
    return (
        n.useEffect(() => {
            null == l && e?.creator_id != null && s.A.requestMembersById(e.guild_id, e.creator_id);
        }, [e, l]),
        l
    );
}
