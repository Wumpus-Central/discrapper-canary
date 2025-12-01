n.d(t, { Z: () => _ }), n(642613), n(583741);
var r = n(544891),
    i = n(710845),
    a = n(569471),
    o = n(346479),
    s = n(592125),
    l = n(375954),
    c = n(306680),
    u = n(594174),
    d = n(709054),
    f = n(981631);
let p = new i.Z("markUnread");
async function _(e, t) {
    let n = u.default.getCurrentUser();
    if (null == n) return;
    let i = l.Z.getMessages(e),
        _ = i
            .toArray()
            .filter((e) => 0 > d.default.compare(e.id, t))
            .sort((e, t) => d.default.compare(e.id, t.id))
            .reverse()[0],
        m = null == _ ? d.default.atPreviousMillisecond(t) : _.id,
        h = 0;
    i.forAll((e) => {
        d.default.compare(e.id, m) > 0 && (0, c.Ex)(e, n) && h++;
    });
    let g = s.Z.getChannel(e);
    null != g &&
        g.isThread() &&
        (g.isArchivedThread() && (await o.Z.unarchiveThread(g, !1)),
        a.Z.hasJoined(e) || (await o.Z.joinThread(g, "Mark Unread"))),
        p.log("Marking unread", {
            channelId: e,
            messageId: t,
        }),
        r.tn.post({
            url: f.ANM.MESSAGE_ACK(e, m),
            body: {
                manual: !0,
                mention_count: h,
            },
            oldFormErrors: !0,
            rejectWithError: !0,
        });
}
