n.d(l, { A: () => r });
var s = n(64700),
    a = n(17928),
    i = n(66834),
    t = n(287809);
function r(e) {
    let l = (0, a.bG)([t.default], () => t.default.getUser(e?.creator_id), [e]);
    return (
        s.useEffect(() => {
            null == l && e?.creator_id != null && i.A.requestMembersById(e.guild_id, e.creator_id);
        }, [e, l]),
        l
    );
}
