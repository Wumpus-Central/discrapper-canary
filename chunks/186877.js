n.d(t, { $: () => u });
var i = n(442837),
    r = n(355298),
    l = n(88101),
    a = n(375954),
    o = n(699516),
    s = n(594174),
    c = n(981631);
function u(e) {
    let t = e.isDM() && !e.isSystemDM() && !e.rawRecipients.some((e) => e.bot),
        n = t ? e.getRecipientId() : null,
        u = (0, l.P)(e.id);
    return (0, i.e7)([a.Z, r.Z, o.Z, s.default], () => {
        if (
            null != u ||
            !t ||
            r.Z.isMessageRequest(e.id) ||
            (null != n && o.Z.getRelationshipType(n) === c.OGo.BLOCKED)
        )
            return !1;
        if (null != n) {
            let e = s.default.getUser(n);
            if (null != e && e.hasFlag(c.xW$.PROVISIONAL_ACCOUNT)) return !1;
        }
        let i = a.Z.getMessages(e.id);
        return i.ready && !i.hasMoreBefore && !i.hasMoreAfter && i.length < 25 && !a.Z.hasCurrentUserSentMessage(e.id);
    }, [u, t, e.id, n]);
}
