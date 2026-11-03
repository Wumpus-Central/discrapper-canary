l.d(n, { A: () => r });
var i = l(582128),
    s = l(17928),
    a = l(66834),
    t = l(287809);
function r(e) {
    let n = (0, s.bG)([t.default], () => t.default.getUser(e?.creator_id), [e]);
    return (
        i.useEffect(() => {
            null == n && e?.creator_id != null && a.A.requestMembersById(e.guild_id, e.creator_id);
        }, [e, n]),
        n
    );
}
