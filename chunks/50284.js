n.d(t, { Z: () => I }), n(642613), n(583741);
var r = n(544891),
    i = n(710845),
    l = n(569471),
    o = n(346479),
    a = n(592125),
    s = n(375954),
    c = n(306680),
    u = n(594174),
    d = n(709054),
    E = n(981631);
let _ = new i.Z('markUnread');
async function I(e, t) {
    let n = u.default.getCurrentUser();
    if (null == n) return;
    let i = s.Z.getMessages(e),
        I = i
            .toArray()
            .filter((e) => 0 > d.default.compare(e.id, t))
            .sort((e, t) => d.default.compare(e.id, t.id))
            .reverse()[0],
        O = null == I ? d.default.atPreviousMillisecond(t) : I.id,
        T = 0;
    i.forAll((e) => {
        d.default.compare(e.id, O) > 0 && (0, c.Ex)(e, n) && T++;
    });
    let N = a.Z.getChannel(e);
    null != N && N.isThread() && (N.isArchivedThread() && (await o.Z.unarchiveThread(N, !1)), l.Z.hasJoined(e) || (await o.Z.joinThread(N, 'Mark Unread'))),
        _.log('Marking unread', {
            channelId: e,
            messageId: t
        }),
        r.tn.post({
            url: E.ANM.MESSAGE_ACK(e, O),
            body: {
                manual: !0,
                mention_count: T
            },
            oldFormErrors: !0,
            rejectWithError: !0
        });
}
