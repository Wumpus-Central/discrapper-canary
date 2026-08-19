n.d(t, { A: () => h });
var i = n(636537),
    l = n(626584),
    r = n(152007),
    s = n(867455),
    a = n(734057),
    o = n(232835),
    d = n(568548),
    u = n(287809),
    c = n(935208),
    E = n(652215);
let g = new l.A("markUnread");
async function h(e, t) {
    let n = u.default.getCurrentUser();
    if (null == n) return;
    let l = o.A.getMessages(e),
        h = l
            .toArray()
            .filter((e) => 0 > c.default.compare(e.id, t))
            .sort((e, t) => c.default.compare(e.id, t.id))
            .reverse()[0],
        A = null == h ? c.default.atPreviousMillisecond(t) : h.id,
        _ = 0;
    l.forAll((e) => {
        c.default.compare(e.id, A) > 0 && (0, d.Wm)(e, n) && _++;
    });
    let S = a.A.getChannel(e);
    null != S &&
        S.isThread() &&
        (S.isArchivedThread() && (await s.A.unarchiveThread(S, !1)),
        r.A.hasJoined(e) || (await s.A.joinThread(S, "Mark Unread"))),
        g.log("Marking unread", { channelId: e, messageId: t }),
        i.Bo.post({
            url: E.Rsh.MESSAGE_ACK(e, A),
            body: { manual: !0, mention_count: _ },
            oldFormErrors: !0,
            rejectWithError: !0,
        });
}
