n.d(t, {
    A: () => _,
}),
    n(638769),
    n(264879);
var r = n(562465),
    i = n(626584),
    a = n(152007),
    s = n(867455),
    o = n(734057),
    l = n(320501),
    c = n(222823),
    u = n(287809),
    d = n(661191),
    f = n(652215);
let p = new i.A("markUnread");
async function _(e, t) {
    let n = u.default.getCurrentUser();
    if (null == n) return;
    let i = l.A.getMessages(e),
        _ = i
            .toArray()
            .filter((e) => 0 > d.default.compare(e.id, t))
            .sort((e, t) => d.default.compare(e.id, t.id))
            .reverse()[0],
        h = null == _ ? d.default.atPreviousMillisecond(t) : _.id,
        m = 0;
    i.forAll((e) => {
        d.default.compare(e.id, h) > 0 && (0, c.Wm)(e, n) && m++;
    });
    let g = o.A.getChannel(e);
    null != g &&
        g.isThread() &&
        (g.isArchivedThread() && (await s.A.unarchiveThread(g, !1)),
        a.A.hasJoined(e) || (await s.A.joinThread(g, "Mark Unread"))),
        p.log("Marking unread", {
            channelId: e,
            messageId: t,
        }),
        r.Bo.post({
            url: f.Rsh.MESSAGE_ACK(e, h),
            body: {
                manual: !0,
                mention_count: m,
            },
            oldFormErrors: !0,
            rejectWithError: !0,
        });
}
