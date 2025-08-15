n.d(t, { Z: () => I }), n(642613), n(583741);
var r = n(544891),
    i = n(710845),
    l = n(569471),
    a = n(346479),
    o = n(592125),
    c = n(375954),
    s = n(306680),
    u = n(594174),
    d = n(709054),
    _ = n(981631);
let E = new i.Z("markUnread");
async function I(e, t) {
    let n = u.default.getCurrentUser();
    if (null == n) return;
    let i = c.Z.getMessages(e),
        I = i
            .toArray()
            .filter((e) => 0 > d.default.compare(e.id, t))
            .sort((e, t) => d.default.compare(e.id, t.id))
            .reverse()[0],
        T = null == I ? d.default.atPreviousMillisecond(t) : I.id,
        O = 0;
    i.forAll((e) => {
        d.default.compare(e.id, T) > 0 && (0, s.Ex)(e, n) && O++;
    });
    let p = o.Z.getChannel(e);
    null != p &&
        p.isThread() &&
        (p.isArchivedThread() && (await a.Z.unarchiveThread(p, !1)),
        l.Z.hasJoined(e) || (await a.Z.joinThread(p, "Mark Unread"))),
        E.log("Marking unread", {
            channelId: e,
            messageId: t,
        }),
        r.tn.post({
            url: _.ANM.MESSAGE_ACK(e, T),
            body: {
                manual: !0,
                mention_count: O,
            },
            oldFormErrors: !0,
            rejectWithError: !0,
        });
}
