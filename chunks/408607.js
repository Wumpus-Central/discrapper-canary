n.d(t, { A: () => o });
var r = n(64700),
    i = n(311907),
    a = n(686956),
    s = n(287809);
function o(e) {
    let t = (0, i.bG)([s.default], () => s.default.getUser(null == e ? void 0 : e.creator_id), [e]);
    return (
        r.useEffect(() => {
            null == t &&
                (null == e ? void 0 : e.creator_id) != null &&
                a.A.requestMembersById(e.guild_id, e.creator_id);
        }, [e, t]),
        t
    );
}
