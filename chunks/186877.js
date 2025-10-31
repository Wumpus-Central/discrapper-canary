n.d(t, { $: () => u });
var r = n(442837),
    i = n(355298),
    l = n(88101),
    a = n(375954),
    o = n(699516),
    s = n(594174),
    c = n(981631);
function u(e) {
    let t = e.isDM() && !e.isSystemDM() && !e.rawRecipients.some((e) => e.bot),
        n = t ? e.getRecipientId() : null,
        u = (0, l.P)(e.id);
    return (0, r.e7)([a.Z, i.Z, o.Z, s.default], () => {
        if (
            null != u ||
            !t ||
            i.Z.isMessageRequest(e.id) ||
            (null != n && o.Z.getRelationshipType(n) === c.OGo.BLOCKED)
        )
            return !1;
        if (null != n) {
            let e = s.default.getUser(n);
            if (null != e && e.hasFlag(c.xW$.PROVISIONAL_ACCOUNT)) return !1;
        }
        let r = a.Z.getMessages(e.id);
        return r.ready && !r.hasMoreBefore && !r.hasMoreAfter && r.length < 25 && !a.Z.hasCurrentUserSentMessage(e.id);
    }, [u, t, e.id, n]);
}
