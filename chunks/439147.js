n.d(t, { A: () => u });
var i = n(562465),
    l = n(626584),
    r = n(152007),
    s = n(867455),
    a = n(734057),
    o = n(320501),
    E = n(222823),
    c = n(287809),
    _ = n(661191),
    d = n(652215);
let A = new l.A("markUnread");
async function u(e, t) {
    let n = c.default.getCurrentUser();
    if (null == n) return;
    let l = o.A.getMessages(e),
        u = l
            .toArray()
            .filter((e) => 0 > _.default.compare(e.id, t))
            .sort((e, t) => _.default.compare(e.id, t.id))
            .reverse()[0],
        T = null == u ? _.default.atPreviousMillisecond(t) : u.id,
        I = 0;
    l.forAll((e) => {
        _.default.compare(e.id, T) > 0 && (0, E.Wm)(e, n) && I++;
    });
    let N = a.A.getChannel(e);
    null != N &&
        N.isThread() &&
        (N.isArchivedThread() && (await s.A.unarchiveThread(N, !1)),
        r.A.hasJoined(e) || (await s.A.joinThread(N, "Mark Unread"))),
        A.log("Marking unread", { channelId: e, messageId: t }),
        i.Bo.post({
            url: d.Rsh.MESSAGE_ACK(e, T),
            body: { manual: !0, mention_count: I },
            oldFormErrors: !0,
            rejectWithError: !0,
        });
}
