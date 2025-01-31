n.d(t, { $: () => d });
var i = n(442837),
    l = n(355298),
    a = n(88101),
    r = n(375954),
    s = n(699516),
    o = n(594174),
    c = n(981631);
function d(e) {
    let t = e.isDM() && !e.isSystemDM() && !e.rawRecipients.some((e) => e.bot),
        n = t ? e.getRecipientId() : null,
        d = (0, a.P)(e.id);
    return (0, i.e7)(
        [r.Z, l.Z, s.Z, o.default],
        () => {
            if (null != d || !t || l.Z.isMessageRequest(e.id) || (null != n && s.Z.getRelationshipType(n) === c.OGo.BLOCKED)) return !1;
            if (null != n) {
                let e = o.default.getUser(n);
                if (null != e && e.hasFlag(c.xW$.PROVISIONAL_ACCOUNT)) return !1;
            }
            let i = r.Z.getMessages(e.id);
            return i.ready && !i.hasMoreBefore && !i.hasMoreAfter && i.length < 25 && !r.Z.hasCurrentUserSentMessage(e.id);
        },
        [d, t, e.id, n]
    );
}
