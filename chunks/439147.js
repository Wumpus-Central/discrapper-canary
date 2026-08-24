a.d(r, { A: () => p, z: () => f });
var t = a(636537),
    i = a(626584),
    d = a(152007),
    n = a(867455),
    l = a(734057),
    o = a(232835),
    s = a(573163),
    u = a(287809),
    c = a(935208),
    h = a(652215);
let A = new i.A("markUnread");
function p(e, r) {
    let a = u.default.getCurrentUser();
    if (null == a) return;
    let t = o.A.getMessages(e),
        i = t
            .toArray()
            .filter((e) => 0 > c.default.compare(e.id, r))
            .sort((e, r) => c.default.compare(e.id, r.id))
            .reverse()[0],
        d = null == i ? c.default.atPreviousMillisecond(r) : i.id,
        n = 0;
    t.forAll((e) => {
        c.default.compare(e.id, d) > 0 && (0, s.Wm)(e, a) && n++;
    }),
        A.log("Marking unread", { channelId: e, messageId: r }),
        f(e, d, n);
}
async function f(e, r, a) {
    let i = l.A.getChannel(e);
    null != i &&
        i.isThread() &&
        (i.isArchivedThread() && (await n.A.unarchiveThread(i, !1)),
        d.A.hasJoined(e) || (await n.A.joinThread(i, "Mark Unread"))),
        t.Bo.post({
            url: h.Rsh.MESSAGE_ACK(e, r),
            body: { manual: !0, mention_count: a },
            oldFormErrors: !0,
            rejectWithError: !0,
        });
}
