n.d(t, { $: () => d });
var r = n(442837),
    i = n(355298),
    a = n(88101),
    o = n(375954),
    s = n(699516),
    l = n(594174),
    c = n(981631);
let u = 25;
function d(e) {
    let t = e.isDM() && !e.isSystemDM() && !e.rawRecipients.some((e) => e.bot),
        n = t ? e.getRecipientId() : null,
        d = (0, a.P)(e.id);
    return (0, r.e7)(
        [o.Z, i.Z, s.Z, l.default],
        () => {
            if (null != d || !t || i.Z.isMessageRequest(e.id) || (null != n && s.Z.getRelationshipType(n) === c.OGo.BLOCKED)) return !1;
            if (null != n) {
                let e = l.default.getUser(n);
                if (null != e && e.hasFlag(c.xW$.PROVISIONAL_ACCOUNT)) return !1;
            }
            let r = o.Z.getMessages(e.id);
            return r.ready && !r.hasMoreBefore && !r.hasMoreAfter && r.length < u && !o.Z.hasCurrentUserSentMessage(e.id);
        },
        [d, t, e.id, n]
    );
}
