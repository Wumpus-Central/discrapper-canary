l.d(n, { A: () => r });
var i = l(582128),
    s = l(17928),
    t = l(66834),
    a = l(287809);
function r(e) {
    let n = (0, s.bG)([a.default], () => a.default.getUser(e?.creator_id), [e]);
    return (
        i.useEffect(() => {
            null == n && e?.creator_id != null && t.A.requestMembersById(e.guild_id, e.creator_id);
        }, [e, n]),
        n
    );
}
