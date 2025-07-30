(n.d(t, { Z: () => p }), n(642613), n(583741));
var r = n(544891),
    i = n(710845),
    l = n(569471),
    a = n(346479),
    o = n(592125),
    s = n(375954),
    c = n(306680),
    u = n(594174),
    d = n(709054),
    _ = n(981631);
let E = new i.Z('markUnread');
async function p(e, t) {
    let n = u.default.getCurrentUser();
    if (null == n) return;
    let i = s.Z.getMessages(e),
        p = i
            .toArray()
            .filter((e) => 0 > d.default.compare(e.id, t))
            .sort((e, t) => d.default.compare(e.id, t.id))
            .reverse()[0],
        O = null == p ? d.default.atPreviousMillisecond(t) : p.id,
        f = 0;
    i.forAll((e) => {
        d.default.compare(e.id, O) > 0 && (0, c.Ex)(e, n) && f++;
    });
    let I = o.Z.getChannel(e);
    (null != I && I.isThread() && (I.isArchivedThread() && (await a.Z.unarchiveThread(I, !1)), l.Z.hasJoined(e) || (await a.Z.joinThread(I, 'Mark Unread'))),
        E.log('Marking unread', {
            channelId: e,
            messageId: t
        }),
        r.tn.post({
            url: _.ANM.MESSAGE_ACK(e, O),
            body: {
                manual: !0,
                mention_count: f
            },
            oldFormErrors: !0,
            rejectWithError: !0
        }));
}
