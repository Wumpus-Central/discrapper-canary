a.d(r, { A: () => p });
var t = a(636537),
    d = a(626584),
    i = a(152007),
    l = a(867455),
    n = a(734057),
    o = a(232835),
    s = a(573163),
    u = a(287809),
    c = a(935208),
    h = a(652215);
let A = new d.A("markUnread");
async function p(e, r) {
    let a = u.default.getCurrentUser();
    if (null == a) return;
    let d = o.A.getMessages(e),
        p = d
            .toArray()
            .filter((e) => 0 > c.default.compare(e.id, r))
            .sort((e, r) => c.default.compare(e.id, r.id))
            .reverse()[0],
        f = null == p ? c.default.atPreviousMillisecond(r) : p.id,
        m = 0;
    d.forAll((e) => {
        c.default.compare(e.id, f) > 0 && (0, s.Wm)(e, a) && m++;
    });
    let k = n.A.getChannel(e);
    null != k &&
        k.isThread() &&
        (k.isArchivedThread() && (await l.A.unarchiveThread(k, !1)),
        i.A.hasJoined(e) || (await l.A.joinThread(k, "Mark Unread"))),
        A.log("Marking unread", { channelId: e, messageId: r }),
        t.Bo.post({
            url: h.Rsh.MESSAGE_ACK(e, f),
            body: { manual: !0, mention_count: m },
            oldFormErrors: !0,
            rejectWithError: !0,
        });
}
